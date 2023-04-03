<template>
    <div class="displaymenu">   <!--FOR BREAKFAST PLATES -->
        <h3>Breakfast Plates</h3>
        <article>
                <div class="gomodal" v-for="(breakfast, index) in breakfastplatefilter" :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}</p>
                    </div>
                    <div class="buttonarea">
                        <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>




    <div class="displaymenu">    <!--FOR JAPANESE STYLE BREAKFASTS -->
        <h3>Japanese Style Breakfasts</h3>
        <article>
                <div class="gomodal" v-for="(breakfast, index) in jpnbreakfastfilter" :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}</p>
                    </div>
                    <div class="buttonarea">
                        <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                    </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>




    <div class="displaymenu">    <!--FOR EGGS BENNIES-->
        <h3>Eggs Bennies on English Muffin</h3>
        <article>
            <div class="gomodal" v-for="(breakfast, index) in eggbennyfilter" :key='index'>
                <div class="details">
                    <p>{{breakfast.menuName}}</p>
                    <p>${{breakfast.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>





    <div class="displaymenu">    <!--BREAKFAST WRAPS-->
        <h3>Breakfast Wraps</h3>
        <article>
            <div class="gomodal" v-for="(breakfast, index) in breakfastwrapfilter" :key='index'>
                <div class="details">
                    <p>{{breakfast.menuName}}</p>
                    <p>${{breakfast.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>




    <div class="displaymenu">    <!--FOR WAFFLE / YOGURT-->
        <h3>Waffle / Yogurt</h3>
        <article>
            <div class="gomodal" v-for="(breakfast, index) in waffleyogurtfilter" :key='index'>
                <div class="details">
                    <p>{{breakfast.menuName}}</p>
                    <p>${{breakfast.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>

    


    <div class="displaymenu">    <!--FOR SANDWICHES / WRAPS-->
        <h3>Original Sandwiches / Wraps</h3>
        <article>
            <div class="gomodal" v-for="(breakfast, index) in sandwichewrapfilter" :key='index'>
                <div class="details">
                    <p>{{breakfast.menuName}}</p>
                    <p>${{breakfast.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>





    <div class="displaymenu">    <!--FOR DAILY SOUP AND SALAD-->
        <h3>Daily Soup & Salad</h3>
        <article>
            <div class="gomodal" v-for="(breakfast, index) in dailysoupfilter" :key='index'>
                <div class="details">
                    <p>{{breakfast.menuName}}</p>
                    <p>${{breakfast.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(breakfast)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
        </article>
    </div>

</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'


export default {
    name:'BreakfastMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            breakfasts: new Array,
            showContent: false,
            breakfastDetail: [{},{}]
        }
    },
    computed:{
        breakfastplatefilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'breakfast_plate');
        },
        jpnbreakfastfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'japanese_breakfast')
        },
        eggbennyfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'egg_benny')
        },
        breakfastwrapfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'breakfast_wrap')
        },
        waffleyogurtfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'waffle/yogurt')
        },
        sandwichewrapfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'sandwiche/wrap')
        },
        dailysoupfilter() {
            return this.breakfasts.filter((breakfast)=>breakfast.category === 'daily_soup/salad')
        },
    },
    methods:{
    loadBreakfast(){
      getJson.load('breakfasts')
      .then((res)=>{
        this.breakfasts = res.data;
        })
      .catch((e)=>console.log(e))
    },
    openModal(breakfast){
        this.showContent = true;
        this.breakfastDetail = breakfast;
        console.log(this.breakfastDetail)

    },
    closeModal(){
        this.showContent = false;
        this.breakfastDetail = [{},{}];
},
  },
  mounted(){
    this.loadBreakfast();
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
