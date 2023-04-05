<template>
    <div class="displaymenu">
    <h3>Japanese Side Menu</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in japanesesidefilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{side.menuName}}</p>
            <p>${{side.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(side)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :side='sideDetail'></modal-window>
        </article>
    </div>




    <div class="displaymenu">
    <h3>Daily Soup & Salad</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in dailysoupfilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{side.menuName}}</p>
            <p>${{side.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(side)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :side='sideDetail'></modal-window>
        </article>
    </div>





    <div class="displaymenu">
    <h3>Other Side Menu</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in othersidefilter" :key='index'>
            <div class="detailsforbeverage">
            <p>{{side.menuName}}</p>
            <p>${{side.price}}</p>
            </div>
            <div class="buttonarea">
                <button class="modalbutton" @click='openModal(side)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :side='sideDetail'></modal-window>
        </article>
    </div>
</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'


export default {
    name:'SideMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            jpnsides: new Array(),
            showContent: false,
            sideDetail:[{},{}]
        }
    },
    computed:{
        japanesesidefilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'jpnside');
        },
        dailysoupfilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'dailyside');
        },
        othersidefilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'otherside');
        },
    },
    methods:{
    loadSide(){
      getJson.load('japaneseSide')
      .then((res)=>{
        this.jpnsides = res.data;
        })
      .catch((e)=>console.log(e))
    },
    openModal(side){
        this.showContent = true,
        this.sideDetail = side,
        console.log(this.sideDetail)
    },
    closeModal(){
        this.showContent = false,
        this.sideDetail = [{},{}]
    }
  },
  mounted(){
    this.loadSide();
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

    /* .details {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 2px solid black;
        column-gap: 10px
    } */

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
}
</style>