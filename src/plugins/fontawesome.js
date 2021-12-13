import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserCircle,
  faHome,
  faTachometerAlt,
  faEnvelope,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);
library.add(faHome);
library.add(faTachometerAlt);
library.add(faEnvelope);
library.add(faTimesCircle);

Vue.component("Fa", FontAwesomeIcon);
