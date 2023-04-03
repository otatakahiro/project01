<template>
<section>
    <article>
        <img src="/img/pudd.jpg" alt="">
    </article>

    <div class="displaymenu">
        <h3>Monthly Meal</h3>
        <article>
            <div v-for="(month, index) in monthlymealfilter" :key='index'>
                <p>{{month.menuName}}</p>
                <p>${{month.price}}</p>
            </div>
        </article>
    </div>
    <div class="displaymenu">
        <h3>Monthly Drink</h3>
        <article>
            <div v-for="(month, index) in monthlydrinkfilter" :key='index'>
                <p>{{month.menuName}}</p>
                <p>${{month.explanation1}} / ${{month.explanation2}}</p>
            </div>
        </article>
    </div>
    <div class="displaymenu">
        <h3>Monthly Sweets</h3>
        <article>
            <div v-for="(month, index) in monthlysweetfilter" :key='index'>
                <p>{{month.menuName}}</p>
                <p>${{month.price}}</p>
            </div>
        </article>
    </div>
</section>
</template>
<script>
import getJson from '@/services/getJson'

export default {
    name:'MonthlyMenu',
    data(){
        return {
            monthly: new Array()
        }
    },
    components:{

    },
    computed:{
        monthlymealfilter(){
            return this.monthly.filter((month)=> month.category === 'm_meal')
        },
        monthlydrinkfilter(){
            return this.monthly.filter((month)=> month.category === 'm_drink')
        },
        monthlysweetfilter(){
            return this.monthly.filter((month)=> month.category === 'm_sweet')
        }
    },
    methods:{
        loadmonthly(){
            getJson.load('monthly')
            .then((res)=>{
                this.monthly = res.data;
            })
            .catch((e)=> console.log(e))
        }
    },
    mounted(){
        this.loadmonthly()
    }
}
</script>

<style scoped>

@media (min-width:300px){

    section {
        width: 100%;
    }
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: 50% 30%;
        vertical-align: bottom;
    }

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
