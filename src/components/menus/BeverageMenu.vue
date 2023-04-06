<template>
    <div class="displaymenu">     
    <h3>Coffee / Espresso</h3>
    <article>          <!--FOR COFFEE -->
        <div class="gomodal" v-for="(beverage, index) in coffeefilter" @click='openModal(beverage)' :key='index'>
            <div class="details">
                <p>{{beverage.menuName}}</p>
                <p>{{beverage.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :beverage='beverageDetail'></modal-window>
    </article>



    <article>         <!--FOR ESPRESSO -->
        <div class="gomodal" v-for="(beverage, index) in espressofilter" @click='openModal(beverage)' :key='index'>
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



<div class="displaymenu">
    <h3>Tea</h3>
    <article class="rice">      <!--FOR BLACK TEA-->
        <p>Black Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in blackteafilter" @click='openModal(beverage)' :key='index'>
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



    <article class="rice">      <!--FOR GREEN TEA-->
        <p>Green Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in greenteafilter"  @click='openModal(beverage)' :key='index'>
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




    <article class="rice">      <!--FOR CHINESE TEA-->
        <p>Chinese Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in chineseteafilter" @click='openModal(beverage)' :key='index'>
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




    <article class="rice">      <!--FOR ROOIBOS TEA-->
        <p>Rooibos Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in rooibosteafilter" @click='openModal(beverage)' :key='index'>
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





    <article class="rice">      <!--FOR HERBAL TEA-->
        <p>Herbal Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in herbalteafilter" @click='openModal(beverage)' :key='index'>
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





    <article class="rice">      <!--FOR TISANE TEA-->
        <p>Tisane Tea</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(beverage, index) in tisaneteafilter" @click='openModal(beverage)' :key='index'>
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



<div class="displaymenu">      <!--FOR OTHER BEVRAGES-->
    <h3>Other Beverages</h3>
    <article>
        <div class="gomodal" v-for="(beverage, index) in otherbeveragefilter" @click='openModal(beverage)' :key='index'>
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
        <div class="gomodal" v-for="(beverage, index) in alcoholicfilter" @click='openModal(beverage)' :key='index'>
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
        row-gap: 10px;
    }

    .gomodal {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: black;
        row-gap: 5px;
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
