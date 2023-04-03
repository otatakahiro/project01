<template>
    <div class="displaymenu">
    <h3>Japanese Side Menu</h3>
        <article>
            <div v-for="(side, index) in japanesesidefilter" :key='index'>
                <p>{{side.menuName}}</p>
                <p>${{side.price}}</p>
            </div>
        </article>
    </div>
    <div class="displaymenu">
    <h3>Daily Soup & Salad</h3>
        <article>
            <div v-for="(side, index) in dailysoupfilter" :key='index'>
                <p>{{side.menuName}}</p>
                <p>${{side.price}}</p>
            </div>
        </article>
    </div>
    <div class="displaymenu">
    <h3>Other Side Menu</h3>
        <article>
            <div v-for="(side, index) in othersidefilter" :key='index'>
                <p>{{side.menuName}}</p>
                <p>${{side.price}}</p>
            </div>
        </article>
    </div>
</template>
<script>
import getJson from '@/services/getJson'


export default {
    name:'SideMenu',
    components:{

    },
    data(){
        return {
            jpnsides: new Array()
        }
    },
    computed:{
        japanesesidefilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'jpnside');
        },
        dailysoupfilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'dailyside');
        },
        othersidefilter() {
            return this.jpnsides.filter((jpnside)=>jpnside.category === 'otherside');
        },
    },
    methods:{
    loadSide(){
      getJson.load('japaneseSide')
      .then((res)=>{
        this.jpnsides = res.data;
        })
      .catch((e)=>console.log(e))
    }
  },
  mounted(){
    this.loadSide();
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