import Vue from "vue";
import "../src/assets/css/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("Fa", FontAwesomeIcon);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
