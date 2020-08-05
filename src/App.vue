<template>
  <div id="app">
    <navBar></navBar>
  </div>
</template>

<script>
import navBar from './components/Navigation.vue'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    navBar
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
</style>
