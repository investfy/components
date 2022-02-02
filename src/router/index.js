import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/form",
  },
  {
    path: "/appbar",
    name: "AppBar",
    component: () => import("../views/AppBar.vue"),
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: () => import("../views/Avatar.vue"),
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: () => import("../views/Dropdown.vue"),
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: () => import("../views/Drawer.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/Form.vue"),
  },
  {
    path: "/icon",
    name: "Icon",
    component: () => import("../views/Icon.vue"),
  },
  {
    path: "/link",
    name: "Link",
    component: () => import("../views/Link.vue"),
  },
  {
    path: "/logo",
    name: "Logo",
    component: () => import("../views/Logo.vue"),
  },
  {
    path: "/nav",
    name: "Nav",
    component: () => import("../views/Nav.vue"),
  },
  {
    path: "/profiledropdown",
    name: "ProfileDropdown",
    component: () => import("../views/ProfileDropdown.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/Table.vue"),
  },
  {
    path: "/tag",
    name: "Tag",
    component: () => import("../views/Tag.vue"),
  },
  {
    path: "/field",
    name: "Field",
    component: () => import("../views/Field.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("../views/Input.vue"),
  },
  {
    path: "/select",
    name: "Select",
    component: () => import("../views/Select.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
