<template>
    <article id="breakfast">
        <h2>ALL DAY BREAKFAST</h2>

        <button class="accordion" @change="accordion()">Breakfast Plates</button>
        <div class="displaymenu">   <!--FOR BREAKFAST PLATES -->
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



        <button class="accordion">Japanese Style Breakfasts</button>
        <div class="displaymenu">    <!--FOR JAPANESE STYLE BREAKFASTS -->
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



        <button class="accordion" @change="accordion()">Bennies on English Muffin</button>
        <div class="displaymenu">    <!--FOR EGGS BENNIES-->
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




        <button class="accordion" @change="accordion()">Breakfast Wraps</button>
        <div class="displaymenu">    <!--BREAKFAST WRAPS-->
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



        <button class="accordion" @change="accordion()">Waffle / Yogurt</button>
        <div class="displaymenu">    <!--FOR WAFFLE / YOGURT-->
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

        

        <button class="accordion" @change="accordion()">Sandwiches / Wraps</button>
        <div class="displaymenu">    <!--FOR SANDWICHES / WRAPS-->
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




        <button class="accordion" @change="accordion()">Daily Soup & Salad</button>
        <div class="displaymenu">    <!--FOR DAILY SOUP AND SALAD-->
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
        accordion() {
            const acc = document.getElementsByClassName('accordion');
            for (let i = 0; i < acc.length; i++){
                acc[i].addEventListener('click',function() {
                    this.classList.toggle('active');
                    let displaymenu = this.nextElementSibling;
                    console.log(displaymenu.style.maxHeight)
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
        this.loadBreakfast();
        this.accordion();
    }
}
</script>

<style scoped>

@media (min-width:300px) {

    h2 {
        background-color: orange;
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
        text-align: left;
        border: none;
        outline: none;
        display: block;
        transition: .5s;
        line-height: 17px;
        border-bottom: 2px dotted black;
        text-align: center;
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

    .displaymenu {
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
}
</style>
