<template>
    <div class="displaymenu">
        <h3>2 Dolce Set</h3>
        <article>
            <div v-for="(sweet, index) in setfilter" :key='index'>
                <p>{{sweet.menuName}}</p>
                <p>${{sweet.price}}</p>
            </div>
        </article>
    </div>
    <div class="displaymenu">
        <h3>Sweets & Desserts</h3>
        <article>
            <div v-for="(sweet, index) in threefilter" :key='index'>
                <p>{{sweet.menuName}}</p>
                <p>${{sweet.price}}</p>
            </div>
        </article>
        <article>
            <div v-for="(sweet, index) in fourfilter" :key='index'>
                <p>{{sweet.menuName}}</p>
                <p>${{sweet.price}}</p>
            </div>
        </article>
        <article>
            <div v-for="(sweet, index) in sixfilter" :key='index'>
                <p>{{sweet.menuName}}</p>
                <p>${{sweet.price}}</p>
            </div>
        </article>
        <article>
            <div v-for="(sweet, index) in foursixfilter" :key='index'>
                <p>{{sweet.menuName}}</p>
                <p>${{sweet.explanation2}}</p>
            </div>
        </article>
    </div>
</template>
<script>
import getJson from '@/services/getJson'

export default {
    name:'SweetstMenu',
    components:{
    },
    data(){
        return {
            sweets: new Array()
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

    .displaymenu div {
        width: 100%;
        display: flex;
        flex-direction: column;
        color: black;
    }

    .displaymenu p:first-child {
        border-bottom: 1px solid black;
    }

    .displaymenu p:last-child {
        display: flex;
        justify-content: right;
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
