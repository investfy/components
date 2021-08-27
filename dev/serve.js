import Vue from "vue";
import Dev from "./Serve.vue";
import "@/assets/tailwind.css";
import IfyComponents from "@/entry.esm";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
library.add(far);

Vue.component("fa", FontAwesomeIcon);

Vue.use(IfyComponents);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dev)
}).$mount("#app");
