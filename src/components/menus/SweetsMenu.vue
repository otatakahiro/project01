<template>
    <div class="displaymenu">      <!--FOR DOLCE SET -->
        <h3>2 Dolce Set</h3>
        <article>
            <div class="gomodal" v-for="(sweet, index) in setfilter" @click='openModal(sweet)' :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>
    </div>






    <div class="displaymenu">      <!--FOR $3.99 -->
        <h3>Sweets & Desserts</h3>
        <article>
            <div class="gomodal" v-for="(sweet, index) in threefilter" @click='openModal(sweet)' :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>



        <article>      <!--FOR $4.99 -->
           <div class="gomodal" v-for="(sweet, index) in fourfilter" @click='openModal(sweet)' :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>





        <article>      <!--FOR $6.99 -->
            <div class="gomodal" v-for="(sweet, index) in sixfilter" @click='openModal(sweet)' :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
                </div>
            </div>
            <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
        </article>




        
        <article>      <!--FOR AFFOGATO -->
            <div class="gomodal" v-for="(sweet, index) in foursixfilter" @click='openModal(sweet)' :key='index'>
                <div class="details">
                    <p>{{sweet.menuName}}</p>
                    <p>${{sweet.price}}
                        <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                    </p>
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
