import Vue from "vue";
import App from "./App.vue";
import "./plugins/fontawesome.js";
import "./plugins/ify-components.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
