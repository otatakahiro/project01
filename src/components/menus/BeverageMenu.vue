<template>
    <div class="displaymenu">
    <h3>Coffee / Espresso</h3>
    <article>
        <div class="gomodal" v-for="(beverage, index) in coffeefilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
    </article>



    <article>
        <div class="gomodal" v-for="(beverage, index) in espressofilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
    </article>
</div>



<div class="displaymenu">
    <h3>Tea</h3>
    <article class="rice">
        <p>Black Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in blackteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>



    <article class="rice">
        <p>Green Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in greenteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>




    <article class="rice">
        <p>Chinese Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in chineseteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>




    <article class="rice">
        <p>Rooibos Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in rooibosteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>





    <article class="rice">
        <p>Herbal Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in herbalteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>





    <article class="rice">
        <p>Tisane Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in tisaneteafilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
        </section>
    </article>
</div>



<div class="displaymenu">
    <h3>Other Beverages</h3>
    <article>
        <div class="gomodal" v-for="(beverage, index) in otherbeveragefilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
    </article>
</div>





<div class="displaymenu">
    <h3>Alcoholic</h3>
    <article>
        <div class="gomodal" v-for="(beverage, index) in alcoholicfilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{beverage.menuName}}</p>
            <p>{{beverage.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(beverage)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
    </article>
</div>
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
            beverageDetail: [{},{}]
        }
    },
    computed:{
        coffeefilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'coffee')
        },
        espressofilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'espresso')
        },
        blackteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'blacktea')
        },
        greenteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'greentea')
        },
        chineseteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'chinesetea')
        },
        rooibosteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'rooibostea')
        },
        herbalteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'herbaltea')
        },
        tisaneteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'tisanetea')
        },
        otherbeveragefilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'other_beverage')
        },
        alcoholicfilter(){
            return this.beverages.filter((beverage)=>beverage.category === "alcoholic")
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
            this.beverageDetail = beverage,
            console.log(this.beverageDetail)
        },
        closeModal(){
            this.showContent = false,
            this.beverageDetail = [{},{}]
        }
    },
    mounted(){
        this.loadBeverage();
    }
}
</script>

<style scoped>

@media (min-width:300px) {
 
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
    }

    .gomodal {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: black;
        row-gap: 5px;
    }

    .detailsforbeverage {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        border-bottom: 2px solid black;
    }

    .detailsforbeverage > p:first-child {
        margin-right: auto;
    }

    .buttonarea {
        width: 100%;
        display: flex;
        justify-content: right;
    }

    .modalbutton{
        font-size: 14px;
        padding: 2px;
        width: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
    }
    .rice > p {
        text-align: center;
        width: 50%;
        color: black;
        font-family: 'Rye',cursive;
        font-weight: 400;
    }

    .inmenu {
        width: 100%;
    }

}

@media (min-width:800px) {
    .displaymenu > article {
        font-size: 18px;
    }
}

@media (min-width:1200px) {
    .displaymenu > article {
        column-gap: 4%;
    }

    .displaymenu div {
        width: 48%;
    }

    .inmenu {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 4%;
    }

    .inmenu > p {
        width: 100%;
    }
}
</style>
