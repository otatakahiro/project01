<template>
    <article id="breakfast">

        <div class="displaymenu">   <!--FOR BREAKFAST PLATES -->
            <h3>Breakfast Plates</h3>
            <article>
                    <div class="gomodal" v-for="(breakfast, index) in breakfastplatefilter" @click='openModal(breakfast)' :key='index'>
                        <div class="details">
                            <p>{{breakfast.menuName}}</p>
                            <p>${{breakfast.price}}
                                <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                            </p>
                        </div>
                    </div>
                    <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>




        <div class="displaymenu">    <!--FOR JAPANESE STYLE BREAKFASTS -->
            <h3>Japanese Style Breakfasts</h3>
            <article>
                    <div class="gomodal" v-for="(breakfast, index) in jpnbreakfastfilter" @click='openModal(breakfast)' :key='index'>
                        <div class="details">
                            <p>{{breakfast.menuName}}</p>
                            <p>${{breakfast.price}}
                                <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                            </p>
                        </div>
                    </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>




        <div class="displaymenu">    <!--FOR EGGS BENNIES-->
            <h3>Eggs Bennies on English Muffin</h3>
            <article>
                <div class="gomodal" v-for="(breakfast, index) in eggbennyfilter" @click='openModal(breakfast)' :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>





        <div class="displaymenu">    <!--BREAKFAST WRAPS-->
            <h3>Breakfast Wraps</h3>
            <article>
                <div class="gomodal" v-for="(breakfast, index) in breakfastwrapfilter" @click='openModal(breakfast)' :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>




        <div class="displaymenu">    <!--FOR WAFFLE / YOGURT-->
            <h3>Waffle / Yogurt</h3>
            <article>
                <div class="gomodal" v-for="(breakfast, index) in waffleyogurtfilter" @click='openModal(breakfast)' :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>

        


        <div class="displaymenu">    <!--FOR SANDWICHES / WRAPS-->
            <h3>Original Sandwiches / Wraps</h3>
            <article>
                <div class="gomodal" v-for="(breakfast, index) in sandwichewrapfilter" @click='openModal(breakfast)' :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>





        <div class="displaymenu">    <!--FOR DAILY SOUP AND SALAD-->
            <h3>Daily Soup & Salad</h3>
            <article>
                <div class="gomodal" v-for="(breakfast, index) in dailysoupfilter" @click='openModal(breakfast)' :key='index'>
                    <div class="details">
                        <p>{{breakfast.menuName}}</p>
                        <p>${{breakfast.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :breakfast='breakfastDetail'></modal-window>
            </article>
        </div>
    </article>

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
            breakfasts: new Array(),
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
        this.showContent = true,
        this.breakfastDetail = breakfast,
        console.log(this.breakfastDetail)

    },
    closeModal(){
        this.showContent = false,
        this.breakfastDetail = [{},{}]
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
        padding-top: 10%;
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
