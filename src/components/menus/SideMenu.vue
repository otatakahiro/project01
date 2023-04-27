<template>
    <article id="side">

        <button class="accordion" @click="accordion()">Japanese Side Menu</button>
        <div class="displaymenu">      <!--FOR SIDE MENU -->
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



        <button class="accordion" @click="accordion()">Daily Soup & Salad</button>
        <div class="displaymenu">      <!--FOR DAIL SOUP & SALAD -->
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




        <button class="accordion" @click="accordion()">Other Side Menu</button>
        <div class="displaymenu">
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
    </article>
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
        japanesesidefilter(){
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'jpnside')
        },
        dailysoupfilter(){
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'dailyside')
        },
        othersidefilter(){
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'otherside')
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
    },
    accordion() {
        const acc = document.getElementsByClassName('accordion');
        let i;
        for (i = 0; i < acc.length; i++){
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
    this.loadSide()
    this.accordion()
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