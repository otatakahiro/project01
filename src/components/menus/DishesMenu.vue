<template>
<article id="dish">

    <button class="accordion" @change="accordion()">Donburi</button>
    <div class="displaymenu">      <!--FOR DONBURI -->
        <article>
            <div class="gomodal" v-for="(dish, index) in donburifilter" @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </article>
    </div>

    <button class="accordion" @change="accordion()">Yoshoku</button>
    <div class="displaymenu">      <!--FOR OTHER YOSHOKU -->
        <article>
            <div class="gomodal" v-for="(dish, index) in yoshokufilter" @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </article>
    </div>


    <button class="accordion" @change="accordion()">Hamburger Steaks</button>
    <div class="displaymenu">      <!--FOR HAMBURGER STEAKS -->
        <article>
            <div class="gomodal" v-for="(dish, index) in steakfilter" @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
        </article>
    </div>


    <button class="accordion" @change="accordion()">Japanese Curry & Omu Rice</button>
    <div class="displaymenu">      <!--FOR CURRY & OMU RICE -->
        <article class="rice">      <!--FOR WHITE RICE -->
            <p>with White Rice</p>
            <section class="inmenu">
            <div class="gomodal" v-for="(dish, index) in omuwhitefilter" @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
            </section>
        </article>



        <article class="rice">      <!--FOR GARLIC RICE -->
            <p>with Garlic Rice</p>
            <section class="inmenu">
            <div class="gomodal" v-for="(dish, index) in omugarlicfilter" 
            @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
            </section>
        </article>





        <article class="rice">      <!--FOR KETCHUP RICE -->
            <p>with Ketchup Rice</p>
            <section class="inmenu">
            <div class="gomodal" v-for="(dish, index) in omuketchupfilter" 
            @click='openModal(dish)' :key='index'>
                <div class="details">
                    <p>{{dish.menuName}}</p>
                    <p>${{dish.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :dish='dishDetail'></modal-window>
            </section>
        </article>
    </div>
</article>
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
    },
    accordion(){
        var acc = document.getElementsByClassName('accordion');
        var i;
        for (i = 0; i < acc.length; i++){
            acc[i].addEventListener('click',function() {
                this.classList.toggle('active');
                var displaymenu = this.nextElementSibling;
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
    this.loadJpnDishes();
    this.accordion();
  }
}
</script>

<style scoped>

@media (min-width:300px) {
    .accordion {
        margin: auto;
        font-family: 'Rye', cursive;
        background-color: rgba(142, 94, 69,0);
        font-size: 17px;
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
        font-size: 16px;
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
        width: 70%;
        color: black;
        font-family: 'Rye', cursive;
    }

    .inmenu {
        width: 100%;
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