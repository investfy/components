import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faAngleDown,
  faArrowRight,
  faBars,
  faBold,
  faCaretDown,
  faCheck,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faGlobe,
  faHome,
  faInfoCircle,
  faItalic,
  faSearch,
  faTachometerAlt,
  faTimesCircle,
  faUnderline,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add([
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faAngleDown,
  faArrowRight,
  faBars,
  faBold,
  faCaretDown,
  faCheck,
  faEnvelope,
  faExclamationCircle,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faGlobe,
  faHome,
  faInfoCircle,
  faItalic,
  faSearch,
  faTachometerAlt,
  faTimesCircle,
  faUnderline,
  faUser,
  faUserCircle,
]);

Vue.component("Fa", FontAwesomeIcon);
