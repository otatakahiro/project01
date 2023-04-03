<template>
    <div class="displaymenu">
    <h3>Coffee / Espresso</h3>
    <article>
        <div v-for="(beverage, index) in coffeefilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>12oz ${{beverage.price12}} / 16oz ${{beverage.price16}}</p>
        </div>
    </article>
    <article>
        <div v-for="(beverage, index) in espressofilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>Single ${{beverage.price12}} / Double ${{beverage.price16}}</p>
        </div>
    </article>
</div>
<div class="displaymenu">
    <h3>Tea</h3>
    <article class="rice">
        <p>Black Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in blackteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
    <article class="rice">
        <p>Green Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in greenteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
    <article class="rice">
        <p>Chinese Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in chineseteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
    <article class="rice">
        <p>Rooibos Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in rooibosteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
    <article class="rice">
        <p>Herbal Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in herbalteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
    <article class="rice">
        <p>Tisane Tea</p>
        <section class="inmenu">
        <div v-for="(beverage, index) in tisaneteafilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
        </section>
    </article>
</div>
<div class="displaymenu">
    <h3>Other Beverages</h3>
    <article>
        <div v-for="(beverage, index) in otherbeveragefilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>12oz ${{beverage.price12}} / 16oz ${{beverage.price16}}</p>
        </div>
    </article>
</div>
<div class="displaymenu">
    <h3>Alcoholic</h3>
    <article>
        <div v-for="(beverage, index) in alcoholicfilter" :key='index'>
            <p>{{beverage.menuName}}</p>
            <p>${{beverage.price12}}</p>
        </div>
    </article>
</div>
</template>
<script>
import getJson from '@/services/getJson'

export default {
    name:'DrinkMenu',
    components:{
    },
    data(){
        return {
            beverages: new Array()
        }
    },
    computed:{
        coffeefilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'coffee')
        },
        espressofilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'espresso')
        },
        blackteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'blacktea')
        },
        greenteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'greentea')
        },
        chineseteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'chinesetea')
        },
        rooibosteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'rooibostea')
        },
        herbalteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'herbaltea')
        },
        tisaneteafilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'tisanetea')
        },
        otherbeveragefilter(){
            return this.beverages.filter((beverage)=>beverage.category === 'other_beverage')
        },
        alcoholicfilter(){
            return this.beverages.filter((beverage)=>beverage.category === "alcoholic")
        }
    },
    methods:{
        loadBeverage(){
            getJson.load('beverage')
            .then((res)=>{
                this.beverages = res.data;
            })
            .catch((e)=>console.log(e));
        }
    },
    mounted(){
        this.loadBeverage();
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
    .rice {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .rice > p {
        text-align: center;
        width: 30%;
        color: black;
        font-family: 'Rye',cursive;
        font-weight: 400;
    }

    .inmenu {
        width: 100%;
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
