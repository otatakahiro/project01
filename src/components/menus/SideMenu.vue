<template>
    <div class="displaymenu">      <!--FOR SIDE MENU -->
    <h3>Japanese Side Menu</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in japanesesidefilter" @click='openModal(side)' :key='index'>
            <div class="details">
                <p>{{side.menuName}}</p>
                <p>${{side.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :side='sideDetail'></modal-window>
        </article>
    </div>




    <div class="displaymenu">      <!--FOR DAIL SOUP & SALAD -->
    <h3>Daily Soup & Salad</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in dailysoupfilter" @click='openModal(side)' :key='index'>
            <div class="details">
                <p>{{side.menuName}}</p>
                <p>${{side.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
            </div>
        </div>
        <modal-window v-show='showContent' @from-child='closeModal' :side='sideDetail'></modal-window>
        </article>
    </div>





    <div class="displaymenu">
    <h3>Other Side Menu</h3>
        <article>
            <div class="gomodal" v-for="(side, index) in othersidefilter" @click='openModal(side)' :key='index'>
            <div class="details">
                <p>{{side.menuName}}</p>
                <p>${{side.price}}
                    <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                </p>
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