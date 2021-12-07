import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import IfyComponents from "./index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(IfyComponents);

Vue.component("Fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
