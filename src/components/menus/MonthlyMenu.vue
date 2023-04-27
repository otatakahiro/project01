<template>
<article id="monthly">

    <button class="accordion" @change="accordion()">Meals</button>
    <div class="displaymenu">      <!--FOR MONTHLY MEAL -->
        <article>
            <div class="gomodal" v-for="(month, index) in monthlymealfilter" @click='openModal(month)' :key='index'>
            <div class="details">
                <p>{{month.menuName}}</p>
                <p>${{month.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :month='monthDetail'></modal-window>
        </article>
    </div>



    <button class="accordion" @change="accordion()">Beverages</button>
    <div class="displaymenu">      <!--FOR MONTHLY DRINK -->
        <article>
            <div class="gomodal" v-for="(month, index) in monthlydrinkfilter" @click='openModal(month)' :key='index'>
            <div class="details">
                <p>{{month.menuName}}</p>
                <p>{{month.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :month='monthDetail'></modal-window>
        </article>
    </div>




    <button class="accordion" @change="accordion()">Sweets</button>
    <div class="displaymenu">      <!--FOR MONTHLY SWEETS -->
        <article>
            <div class="gomodal" v-for="(month, index) in monthlysweetfilter" @click='openModal(month)' :key='index'>
            <div class="details">
                <p>{{month.menuName}}</p>
                <p>${{month.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :month='monthDetail'></modal-window>
        </article>
    </div>
</article>
</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'

export default {
    name:'MonthlyMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            monthly: new Array(),
            showContent: false,
            monthDetail:[{},{}]
        }
    },
    computed:{
        monthlymealfilter(){
            return this.monthly.filter((month)=> month.category === 'm_meal')
        },
        monthlydrinkfilter(){
            return this.monthly.filter((month)=> month.category === 'm_drink')
        },
        monthlysweetfilter(){
            return this.monthly.filter((month)=> month.category === 'm_sweet')
        }
    },
    methods:{
        loadmonthly(){
            getJson.load('monthly')
            .then((res)=>{
                this.monthly = res.data;
            })
            .catch((e)=> console.log(e))
        },
        openModal(month){
            this.showContent = true,
            this.monthDetail = month,
            console.log(this.monthDetail)
        },
        closeModal(){
            this.showContent = false,
            this.monthDetail = [{},{}]
        },
        accordion(){
            var acc = document.getElementsByClassName('accordion');
            var i;
            for (i = 0; i < acc.length; i++){
                acc[i].addEventListener('click',function() {
                    this.classList.toggle('active');
                    var displaymenu = this.nextElementSibling;
                    if (displaymenu.style.maxHeight) {
                        displaymenu.style.maxHeight = null;
                    } else {
                        displaymenu.style.maxHeight = displaymenu.scrollHeight
                        + 'px';
                    }
                })
            }
        }
    },
    mounted(){
        this.loadmonthly()
        this.accordion()
    }
}
</script>

<style scoped>

@media (min-width:300px){
    .accordion {
        margin: auto;
        font-family: 'Rye', cursive;
        background-color: rgba(142, 94, 69,0);
        font-size: 17px;
        color: black;
        cursor: pointer;
        padding: 13px;
        width: 95%;
        text-align: left;
        border: none;
        outline: none;
        display: block;
        transition: .5s;
        line-height: 17px;
        border-bottom: 2px dotted black;
    }
    
    .accordion:after {
        content: '\002B';
        font-size: 30px;
        color: black;
        float: right;
    }

    .active:after {
        content: '\00D7';
    }

    .accordion:hover {
        background-color: #D6C6B9;
    }
 
    .displaymenu{
        background-color: #D6C6B9;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        margin: auto;
        margin-top: 1px;
    }

    .displaymenu > article {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-color: antiquewhite;
        row-gap: 10px;
        justify-content: center;
    } 

    .gomodal {
        width: 95%;
        display: flex;
        flex-direction: column;
        color: black;
        padding: 5px;
    }

    .gomodal:hover {
        color: slategray;
        cursor: pointer;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        border-bottom: 2px solid black;
        row-gap: 5px;
    }

    .details > p:first-child {
        margin-right: auto;
    }

    .details > p:last-child {
        display: flex;
        column-gap: 3%;
        width:100%;
        justify-content: right;
        padding-bottom: 1%;
        align-items: center;
    }

    .modalbutton{
        font-size: 14px;
        padding: 5px;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 50%;
    }

    .modalbutton:hover {
        background-color: orange;
        color: white;    
    }
}

@media (min-width:800px) {
        .displaymenu > h3 {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size:35px;
    }

    .displaymenu > article {
        font-size: 18px;
    }
}

@media (min-width:1200px) {
    .displaymenu > article {
        column-gap: 4%;
    }

    .gomodal {
        width: 48%;
    }
}


</style>
