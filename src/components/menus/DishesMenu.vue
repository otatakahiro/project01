<template>
<article id="dish">
    <h2>JAPANESE DISHES</h2>

    <section v-for="(dishMenu,index) in dishMenus" :key="index">
        <button class="accordion" @change="accordion()">{{dishMenu.label}}</button>
        <div class="displaymenu">      <!--FOR DONBURI -->
            <article>
                <div class="gomodal" v-for="(dish, index) in dishFilter(dishMenu.category)" @click='openModal(dish)' :key='index'>
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
    </section>

    

    <button class="accordion" @change="accordion()">Japanese Curry & Omu Rice</button>
    <div class="displaymenu">      <!--FOR CURRY & OMU RICE -->
        <article v-for="(curryMenu, index) in curryMenus" :key="index" class="rice">      <!--FOR WHITE RICE -->
            <p>{{curryMenu.label}}</p>
            <section class="inmenu">
            <div class="gomodal" v-for="(dish, index) in dishFilter(curryMenu.category)" @click='openModal(dish)' :key='index'>
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
            dishDetail:[{},{}],
            dishMenus:[
                {label:'Donburi',category:'donburi'},
                {label:'Yoshoku',category:'yoshoku'},
                {label:'Hamburger Steaks',category:'steak'}
            ],
            curryMenus:[
                {label:'with White Rice', category:'white_rice'},
                {label:'with Garlic Rice', category:'garlic_rice'},
                {label:'with Ketchup Rice', category:'ketchup_rice'},
            ]
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
    },
    dishFilter(dishCategory) {
        return this.jpndishes.filter((jpndish)=>jpndish.category === dishCategory);
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
        color: black;
        font-family: 'Rye', cursive;
        color: #97B8C2;
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

    .rice {
        padding: 20px;
    }

    .gomodal {
        width: 48%;
        
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