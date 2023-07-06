<template>
    <article id="sweets">
        <h2>SWEETS & DESSERTS</h2>

        <button class="accordion" @change="accordion()">2 Dolce Set</button>
        <div class="displaymenu">      <!--FOR DOLCE SET -->
            <article>
                <div class="gomodal" v-for="(sweet, index) in sweetFilter('set')" @click='openModal(sweet)' :key='index'>
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

        <button class="accordion" @change="accordion()">Sweets & Desserts</button>
        <div class="displaymenu">      
            <article>
                <div class="gomodal" v-for="(sweet, index) in sweetFilter('s_3doller')" @click='openModal(sweet)' :key='index'>
                    <div class="details">   <!--FOR $3.99 -->
                        <p>{{sweet.menuName}}</p>
                        <p>${{sweet.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <div class="gomodal" v-for="(sweet, index) in sweetFilter('s_4doller')" @click='openModal(sweet)' :key='index'>
                    <div class="details">   <!--FOR $4.99 -->
                        <p>{{sweet.menuName}}</p>
                        <p>${{sweet.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <div class="gomodal" v-for="(sweet, index) in sweetFilter('s_6doller')" @click='openModal(sweet)' :key='index'>
                    <div class="details">   <!--FOR $6.99 -->
                        <p>{{sweet.menuName}}</p>
                        <p>${{sweet.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <div class="gomodal" v-for="(sweet, index) in sweetFilter('s_46doller')" @click='openModal(sweet)' :key='index'>
                    <div class="details">   <!--FOR $4.99 & $6.99 -->
                        <p>{{sweet.menuName}}</p>
                        <p>{{sweet.price}}
                            <button class="modalbutton"><font-awesome-icon icon="fa-solid fa-angles-right" /></button>
                        </p>
                    </div>
                </div>
                <modal-window v-show='showContent' @from-child='closeModal' :sweet='sweetDetail'></modal-window>
            </article>
        </div>
        
    </article>
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
        sweetFilter(sweetCategory){
            return this.sweets.filter((sweet)=>sweet.category === sweetCategory)
        },
    },
    mounted(){
        this.loadSweets()
        this.accordion()
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
