<template>
  <hr v-if="separator" class="separator" />
  <component
    v-else
    :is="link ? 'RouterLink' : 'span'"
    :to="link"
    :class="{ item: true, clickable: clickable || link }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "IfyDropdownItem",

  props: {
    separator: {
      type: Boolean,
      default: false,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    link: {
      type: [String, Object],
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.separator {
  @apply bg-gray-200 border-none block h-px my-2 mx-0;
}
.item {
  @apply block w-full px-4 py-2 text-sm text-left text-gray-700;
}
.clickable {
  @apply text-brand cursor-pointer hover:text-brand-900 hover:bg-gray-100;
}
</style>
