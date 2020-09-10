import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

const fadeIn = (el) => {
  setTimeout(() => {
    el.classList.add("fade-in");
  }, 2000);
};

const fadeOut = (el) => {
  setTimeout(() => {
    el.classList.add("fade-out");
  }, 2000);
};

const myNav = document.querySelector("nav");
window.onscroll = function() {
  "use strict";
  if (window.pageYOffset === 0) {
    myNav.classList.add("transparent");
    myNav.classList.remove("colored");
  } else {
    myNav.classList.remove("transparent");
    myNav.classList.add("colored");
  }
};

fadeIn(document.getElementById("nameLogo"));
fadeIn(document.getElementById("logoContainer"));
fadeOut(document.getElementById("mainLogo"));
