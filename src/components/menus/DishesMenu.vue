<template>
<div class="displaymenu">
    <h3>Donburi</h3>
    <article>
        <div class="gomodal" v-for="(dish, index) in donburifilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
    </article>
</div>


<div class="displaymenu">
    <h3>Other Yoshoku</h3>
    <article>
        <div class="gomodal" v-for="(dish, index) in yoshokufilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
    </article>
</div>



<div class="displaymenu">
    <h3>Hamburger Steaks</h3>
    <article>
        <div class="gomodal" v-for="(dish, index) in steakfilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
    </article>
</div>



<div class="displaymenu">
    <h3>Japanese Curry & Omu Rice</h3>
    <article class="rice">
        <p>with White Rice</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(dish, index) in omuwhitefilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </section>
    </article>



    <article class="rice">
        <p>with Garlic Rice</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(dish, index) in omugarlicfilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </section>
    </article>





    <article class="rice">
        <p>with Ketchup Rice</p>
        <section class="inmenu">
        <div class="gomodal" v-for="(dish, index) in omuketchupfilter" :key='index'>
            <div class="details">
            <p>{{dish.menuName}}</p>
            <p>${{dish.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(dish)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </section>
    </article>
</div>
</template>
<script>

import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'


export default {
    name:'DishesMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            jpndishes: new Array(),
            showContent: false,
            dishDetail:[{},{}]
        }
    },
    computed:{
        donburifilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'donburi');
        },
        yoshokufilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'yoshoku')
        },
        steakfilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'steak')
        },
        omuwhitefilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'white_rice')
        },
        omugarlicfilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'garlic_rice')
        },
        omuketchupfilter() {
            return this.jpndishes.filter((jpndish)=>jpndish.category === 'ketchup_rice')
        }
    },
    methods:{
    loadJpnDishes(){
      getJson.load('japaneseDish')
      .then((res)=>{
        this.jpndishes = res.data;
        })
      .catch((e)=>console.log(e))
    },
    openModal(dish){
        this.showContent = true,
        this.dishDetail = dish,
        console.log(this.dishDetail)
    },
    closeModal(){
        this.showContent = false,
        this.dishDetail = [{},{}]
    }
  },
  mounted(){
    this.loadJpnDishes();
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

    .details {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2px solid black;
        column-gap: 10px
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
        width: 70%;
        color: black;
        font-family: 'Rye', cursive;
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