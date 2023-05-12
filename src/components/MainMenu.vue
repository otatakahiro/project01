<template>
  <body>
    <NavVar></NavVar>
    <HeaderCompo id="top"></HeaderCompo>
    <MainCompo></MainCompo>
    <FooterCompo></FooterCompo>
  </body>
</template>
<script>
import NavVar from './NavVar.vue'
import HeaderCompo from './HeaderCompo.vue'
import MainCompo from './MainCompo.vue'
import FooterCompo from './FooterCompo.vue'

export default {
    name:'MainMenu',
    components: {
    NavVar,
    HeaderCompo,
    MainCompo,
    FooterCompo

  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

  @media (min-width:300px){
    body{
      background-color: #dfc6b5;
    }
  }

</style>
