import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import IfyComponents from "./index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserCircle,
  faHome,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);
library.add(faHome);
library.add(faTachometerAlt);
Vue.component("Fa", FontAwesomeIcon);

Vue.use(IfyComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
