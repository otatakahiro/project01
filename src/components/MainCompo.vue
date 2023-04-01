<template>
    <main>
        <TopCompo></TopCompo>
        <MenuCompo id='menu'></MenuCompo>
        <NewsCompo id='news'></NewsCompo>
        <AccessCompo id='access'></AccessCompo>
    </main>
</template>
<script>
import MenuCompo from './MenuCompo.vue'
import NewsCompo from './NewsCompo.vue'
import AccessCompo from './AccessCompo.vue'
import TopCompo from './TopCompo.vue'

export default {
    name:'MainCompo',
    components:{
        MenuCompo,
        NewsCompo,
        AccessCompo,
        TopCompo
    }
}
</script>

<style scoped>
    @media (min-width: 300px){
        main {
            margin: 5%;
            border: 1px solid black;
        }
    }

    @media (min-width: 800px){
        main {
            margin: 5% 10%;
        }
    }
</style>
