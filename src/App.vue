<template>
<link href="https://fonts.googleapis.com/css?family=Rye&family=Chilanka" rel="stylesheet">
  <main-menu></main-menu>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    font-family: 'Chilanka', cursive;
}

</style>
