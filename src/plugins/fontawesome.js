import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight,
  faBold,
  faCaretDown,
  faCheck,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faHome,
  faInfoCircle,
  faItalic,
  faSearch,
  faTachometerAlt,
  faTimesCircle,
  faUnderline,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add([
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faArrowLeft,
  faArrowRight,
  faBold,
  faCaretDown,
  faCheck,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faHome,
  faInfoCircle,
  faItalic,
  faSearch,
  faTachometerAlt,
  faTimesCircle,
  faUnderline,
  faUserCircle,
]);

Vue.component("Fa", FontAwesomeIcon);
