import Vue from "vue";
import Dev from "./Serve.vue";
import "@/assets/tailwind.css";
import IfyComponents from "@/entry.esm";

Vue.use(IfyComponents);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dev)
}).$mount("#app");
