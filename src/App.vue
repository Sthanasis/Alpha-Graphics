<template>
  <div id="app">
    <navBar></navBar>
    <logo></logo>
    <landing></landing>
  </div>
</template>

<script>
import navBar from "./components/Navigation.vue";
import logo from "./components/Logo.vue";
import landing from "./components/Landing.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    navBar,
    logo,
    landing,
  },
};
</script>

<style>
@import "../public/custom/css/icons.css";
@import "../public/custom/css/vars.css";
@import "../public/custom/css/main.css";

@font-face {
  font-family: "Gilroy";
  src: local("Gilroy"), url(./assets/fonts/Gilroy-Light.otf) format("truetype");
}
</style>
