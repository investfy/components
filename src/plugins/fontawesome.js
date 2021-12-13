import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheck,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faHome,
  faInfoCircle,
  faTachometerAlt,
  faTimesCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
library.add(faEnvelope);
library.add(faExclamationCircle);
library.add(faExclamationTriangle);
library.add(faEye);
library.add(faEyeSlash);
library.add(faHome);
library.add(faInfoCircle);
library.add(faTachometerAlt);
library.add(faTimesCircle);
library.add(faUserCircle);

Vue.component("Fa", FontAwesomeIcon);
