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
    component: () => import("../views/AppBarPage.vue"),
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: () => import("../views/AvatarPage.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: () => import("../views/ButtonPage.vue"),
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: () => import("../views/DrawerPage.vue"),
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: () => import("../views/DropdownPage.vue"),
  },
  {
    path: "/field",
    name: "Field",
    component: () => import("../views/FieldPage.vue"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("../views/FormPage.vue"),
  },
  {
    path: "/icon",
    name: "Icon",
    component: () => import("../views/IconPage.vue"),
  },
  {
    path: "/input",
    name: "Input",
    component: () => import("../views/InputPage.vue"),
  },
  {
    path: "/link",
    name: "Link",
    component: () => import("../views/LinkPage.vue"),
  },
  {
    path: "/logo",
    name: "Logo",
    component: () => import("../views/LogoPage.vue"),
  },
  {
    path: "/nav",
    name: "Nav",
    component: () => import("../views/NavPage.vue"),
  },
  {
    path: "/profiledropdown",
    name: "ProfileDropdown",
    component: () => import("../views/ProfileDropdownPage.vue"),
  },
  {
    path: "/select",
    name: "Select",
    component: () => import("../views/SelectPage.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/TablePage.vue"),
  },
  {
    path: "/tag",
    name: "Tag",
    component: () => import("../views/TagPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
