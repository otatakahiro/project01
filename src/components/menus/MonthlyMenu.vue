<template>
<section id="#monthly">
    <article>
        <img src="/img/pudd.jpg" alt="">
    </article>

    <div class="displaymenu">      <!--FOR MONTHLY MEAL -->
        <h3>Monthly Meal</h3>
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




    <div class="displaymenu">      <!--FOR MONTHLY DRINK -->
        <h3>Monthly Drink</h3>
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





    <div class="displaymenu">      <!--FOR MONTHLY SWEETS -->
        <h3>Monthly Sweets</h3>
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
</section>
</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'

export default {
    name:'MonthlyMenu',
    data(){
        return {
            monthly: new Array(),
            showContent: false,
            monthDetail:[{},{}]
        }
    },
    components:{
        ModalWindow
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
        }
    },
    mounted(){
        this.loadmonthly()
    }
}
</script>

<style scoped>

@media (min-width:300px){

    section {
        width: 100%;
    }
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 50% 30%;
        vertical-align: bottom;
    }

     .displaymenu{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }

    .displaymenu > h3 {
        text-align: center;
        font-size: 25px;
        width: 85%;
        font-family: 'Rye', cursive;
        color: black;
        font-weight: 400;
    }

    .displaymenu > article {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        width: 85%;
        outline: 2px dashed orange;
        background-color: antiquewhite;
        padding: 10px;
        row-gap: 10px;
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

    .gomodal {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: black;
        row-gap: 5px;
    }

    .gomodal:hover {
        color: slategray;
        cursor: pointer;
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
