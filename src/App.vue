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
    navBar,
  }
}
</script>

<style>
@import '../public/custom/css/icons.css';

body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  padding: 0;
  background-color:#1c2431;
}

@font-face {
  font-family: "Merienda";
  src: local("Merienda"),
   url(../public/custom/fonts/alpha2.ttf) format("truetype");
}
</style>
