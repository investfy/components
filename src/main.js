import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import IfyComponents from "./index";

Vue.use(IfyComponents);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
