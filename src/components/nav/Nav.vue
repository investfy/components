<template>
  <nav :class="{ nav: true, 'nav-light': light }">
    <component v-if="title" :is="titleTag" class="nav-title">{{
      title
    }}</component>

    <ul>
      <template v-if="$slots.default">
        <slot />
      </template>
      <IfyNavItem
        v-else-if="items.length"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
      </IfyNavItem>
    </ul>
  </nav>
</template>

<script>
import IfyNavItem from "./NavItem.vue";

export default {
  name: "IfyNav",

  components: {
    IfyNavItem,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    titleTag: {
      type: String,
      default: "strong",
    },
    items: {
      type: Array,
      default: () => [],
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav .nav-title {
  @apply block px-4 py-0 mb-2 text-xs uppercase font-bold leading-5 text-gray-700;
}

.nav.nav-light .nav-title {
  @apply text-brand-200;
}
</style>
