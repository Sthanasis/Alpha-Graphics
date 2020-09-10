import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

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
