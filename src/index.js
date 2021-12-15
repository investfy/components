import Components from "./components";

const install = (Vue) => {
  for (let key in Components) {
    Vue.component(key, Components[key]);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

Components.install = install;

export default Components;
