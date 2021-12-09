import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import IfyComponents from "./index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(IfyComponents);

Vue.component("Fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
