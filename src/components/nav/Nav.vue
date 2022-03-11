<template>
  <nav :class="['ifynav', light && 'ifynav--light']">
    <component v-if="title" :is="titleTag" class="ifynav__title">{{
      title
    }}</component>

    <ul class="ifynav__list">
      <template v-if="$slots.default">
        <template
          v-if="
            $slots.default[0].tag !== 'li' &&
            !$slots.default[0].tag.includes('IfyNavItem')
          "
        >
          <li class="ifynav__list-item"><slot /></li>
        </template>
        <template v-else>
          <slot />
        </template>
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

<style lang="postcss">
.ifynav__title {
  @apply block px-4 py-0 mb-2 text-xs uppercase font-bold leading-5 text-gray-700;
}

.ifynav--light .ifynav__title {
  @apply text-brand-200;
}
</style>
