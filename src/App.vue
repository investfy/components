<template>
  <div id="app">
    <IfyDrawer :active.sync="isDrawerOpen">
      <IfyNav title="Navegação" class="py-4">
        <IfyNavItem
          v-for="route in routes"
          :key="route.name"
          :link="route.path"
          @click.native="isDrawerOpen = false"
        >
          {{ route.name }}
        </IfyNavItem>
      </IfyNav>
    </IfyDrawer>

    <div class="m-4">
      <div class="p-4">
        <button
          type="button"
          class="inline-block h-5 leading-5 text-gray-800"
          @click="isDrawerOpen = true"
        >
          <IfyIcon icon="bars" />
        </button>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import { routes } from "./router/index";

export default {
  name: "App",

  data() {
    return {
      isDrawerOpen: false,
    };
  },

  computed: {
    routes() {
      return routes
        .filter((r) => Object.prototype.hasOwnProperty.call(r, "component"))
        .sort((a, b) => {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
    },
  },
};
</script>
