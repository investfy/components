import Vue from "vue";
import Dev from "./Serve.vue";
import IfyComponents from "@/entry.esm";
import "@/assets/tailwind.css";

Vue.use(IfyComponents);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dev)
}).$mount("#app");
