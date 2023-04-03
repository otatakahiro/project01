<template>
    <div class="displaymenu">
        <h3>2 Dolce Set</h3>
        <article>
            <div class="gomodal" v-for="(sweet, index) in setfilter" :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(sweet)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>
    </div>






    <div class="displaymenu">
        <h3>Sweets & Desserts</h3>
        <article>
            <div class="gomodal" v-for="(sweet, index) in threefilter" :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(sweet)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>



        <article>
           <div class="gomodal" v-for="(sweet, index) in fourfilter" :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(sweet)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>





        <article>
            <div class="gomodal" v-for="(sweet, index) in sixfilter" :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(sweet)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>




        
        <article>
            <div class="gomodal" v-for="(sweet, index) in foursixfilter" :key='index'>
                <div class="detailsfordrink">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}</p>
                </div>
                <div class="buttonarea">
                    <button class="modalbutton" @click='openModal(sweet)'>More<font-awesome-icon icon="fa-solid fa-caret-right" /></button>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>
    </div>
</template>
<script>
import getJson from '@/services/getJson'
import ModalWindow from './ModalWindow.vue'

export default {
    name:'SweetstMenu',
    components:{
        ModalWindow
    },
    data(){
        return {
            sweets: new Array(),
            showContent: false,
            sweetDetail:[{},{}]
        }
    },
    computed:{
        setfilter(){
            return this.sweets.filter((sweet)=>sweet.category === "set")
        },
        threefilter(){
            return this.sweets.filter((sweet)=>sweet.category === "s_3doller")
        },
        fourfilter(){
            return this.sweets.filter((sweet)=>sweet.category === "s_4doller")
        },
        sixfilter(){
            return this.sweets.filter((sweet)=>sweet.category === "s_6doller")
        },
        foursixfilter(){
            return this.sweets.filter((sweet)=>sweet.category === "s_46doller")
        },
    },
    methods:{
        loadSweets(){
            getJson.load('sweet')
            .then((res)=>{
                this.sweets = res.data;
            })
            .catch((e)=>console.log(e));
        },
        openModal(sweet){
            this.showContent = true,
            this.sweetDetail = sweet,
            console.log(this.sweetDetail)
        },
        closeModal(){
            this.showContent = false,
            this.showDetail = [{},{}]
        }
    },
    mounted(){
        this.loadSweets()
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
        font-size: 25px;
        width: 85%;
        font-family: 'Rye', cursive;
        color: black;
        font-weight: 400;
        text-align: center;
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

    .detailsfordrink {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        border-bottom: 2px solid black;
    }

    .detailsfordrink > p:first-child {
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
