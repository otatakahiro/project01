<template>
    <article id="beverage">
        <h2>BEVERAGE</h2>
        
        <button class="accordion" @change="accordion()">Coffee / Espresso</button>
        <div class="displaymenu">     
            <article>          <!--FOR COFFEE -->
                <div class="gomodal" v-for="(beverage, index) in beverageFilter('coffee')" @click='openModal(beverage)' :key='index'>
                    <div class="details">
                        <p>{{beverage.menuName}}</p>
                        <p>{{beverage.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
            </article>

            <article class="rice">
                <p>Espresso</p>      <!--FOR ESPRESSO -->
                <section class="inmenu">
                <div class="gomodal" v-for="(beverage, index) in beverageFilter('espresso')" @click='openModal(beverage)' :key='index'>
                    <div class="details">
                        <p>{{beverage.menuName}}</p>
                        <p>{{beverage.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
                </section>
            </article>
        </div>


        <button class="accordion" @change="accordion()">Tea</button>
        <div class="displaymenu">
            <article v-for="(teaMenu, index) in teaMenus" :key='index' class="rice">      <!--FOR TEA-->
                <p>{{teaMenu.label}}</p>
                <section class="inmenu">
                <div class="gomodal" v-for="(beverage, index) in beverageFilter(teaMenu.category)" @click='openModal(beverage)' :key='index'>
                    <div class="details">
                        <p>{{beverage.menuName}}</p>
                        <p>{{beverage.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
                </section>
            </article>
        </div>


    <button class="accordion" @change="accordion()">Other</button>
        <div class="displaymenu">      <!--FOR OTHER BEVRAGES-->
            <article>
                <div class="gomodal" v-for="(beverage, index) in beverageFilter('other_beverage')" @click='openModal(beverage)' :key='index'>
                    <div class="details">
                        <p>{{beverage.menuName}}</p>
                        <p>{{beverage.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
            </article>
        </div>





        <div class="displaymenu">      <!--FOR ALCOHOLIC-->
            <h3>Alcoholic</h3>
            <article>
                <div class="gomodal" v-for="(beverage, index) in beverageFilter('alcoholic')" @click='openModal(beverage)' :key='index'>
                    <div class="details">
                        <p>{{beverage.menuName}}</p>
                        <p>{{beverage.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
            </article>
        </div>
    </article>
</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'

export default {
    name:'BeverageMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            beverages: new Array(),
            showContent: false,
            beverageDetail: [{},{}],
            teaMenus: [
                {label:'Black Tea',category:'blacktea'},
                {label:'Green Tea',category:'greentea'},
                {label:'Chinese Tea',category:'chinesetea'},
                {label:'Rooibos Tea',category:'rooibostea'},
                {label:'Herbal Tea',category:'herbaltea'},
                {label:'Tisane Tea',category:'tisanetea'}
            ]
        }
    },
    methods:{
        loadBeverage(){
            getJson.load('beverage')
            .then((res)=>{
                this.beverages = res.data;
            })
            .catch((e)=>console.log(e));
        },
        openModal(beverage){
            this.showContent = true,
            this.beverageDetail = beverage
        },
        closeModal(){
            this.showContent = false,
            this.beverageDetail = [{},{}]
        },
        accordion(){
            const acc = document.getElementsByClassName('accordion');
            for (let i = 0; i < acc.length; i++){
                acc[i].addEventListener('click',function() {
                    this.classList.toggle('active');
                    let displaymenu = this.nextElementSibling;
                    if (displaymenu.style.maxHeight) {
                        displaymenu.style.maxHeight = null;
                    } else {
                        displaymenu.style.maxHeight = displaymenu.scrollHeight
                        + 'px';
                    }
                })
            }
        },
        beverageFilter(beverageCategory){
            return this.beverages.filter((beverage)=>beverage.category === beverageCategory)
        }
    },
    mounted(){
        this.loadBeverage()
        this.accordion()
    }
}
</script>

<style scoped>

@media (min-width:300px) {
    
    h2 {
        background-color: #97B8C2;
        font-family: 'Rye', cursive;
        text-align: center;
        font-weight: 400;
        padding: 5px;
        margin-bottom: 20px;
    }

    .accordion {
        margin: auto;
        font-family: 'Rye', cursive;
        background-color: rgba(142, 94, 69,0);
        font-size: 18px;
        color: black;
        cursor: pointer;
        padding: 13px;
        width: 95%;
        text-align: center;
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
        font-size: 17px;
    }

    .details > p:first-child {
        margin-right: auto;
    }

    .details > p:last-child {
        display: flex;
        column-gap: 3%;
        width: 100%;
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

    .rice {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    .rice > p {
        font-size: 20px;
        text-align: center;
        width: 70%;
        color: #97B8C2;
        font-family: 'Rye',cursive;
        font-weight: 400;
        border-bottom: 5px double black;
    }

    .inmenu {
        width: 100%;
    }

}

@media (min-width:800px) {
    
    h2 {
        font-size: 30px;
    }

    .accordion {
        font-size: 23px;
        padding: 20px;
    }

    .details {
        font-size: 20px;
    }
}

@media (min-width:1200px) {
    .displaymenu > article {
        column-gap: 1%;
        row-gap: 20px;
        justify-content: space-between;
    }

    .gomodal {
        width: 48%;
    }
    
    .rice {
        padding: 20px;
    }

    .inmenu {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1%;
    }

    .inmenu > p {
        width: 100%;
    }
}
</style>
