import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/avatar",
    name: "avatar",
    component: () => import("../views/Avatar.vue"),
  },
  {
    path: "/dropdown",
    name: "dropdown",
    component: () => import("../views/Dropdown.vue"),
  },
  {
    path: "/icon",
    name: "icon",
    component: () => import("../views/Icon.vue"),
  },
  {
    path: "/link",
    name: "link",
    component: () => import("../views/Link.vue"),
  },
  {
    path: "/logo",
    name: "logo",
    component: () => import("../views/Logo.vue"),
  },
  {
    path: "/navbar",
    name: "navbar",
    component: () => import("../views/Navbar.vue"),
  },
  {
    path: "/profiledropdown",
    name: "profiledropdown",
    component: () => import("../views/ProfileDropdown.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/tag",
    name: "tag",
    component: () => import("../views/Tag.vue"),
  },
  {
    path: "/field",
    name: "field",
    component: () => import("../views/Field.vue"),
  },
  {
    path: "/input",
    name: "input",
    component: () => import("../views/Input.vue"),
  },
  {
    path: "/select",
    name: "select",
    component: () => import("../views/Select.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
