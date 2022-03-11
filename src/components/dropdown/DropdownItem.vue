<template>
  <hr v-if="separator" class="ifydropdown__menu__separator" />
  <component
    v-else
    :is="link ? 'IfyLink' : 'span'"
    :to="link"
    :class="[
      'ifydropdown__menu__item',
      (clickable || link) && 'ifydropdown__menu--clickable',
    ]"
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

<style lang="postcss">
.ifydropdown__menu__separator {
  @apply bg-gray-200 border-none block h-px my-2 mx-0;
}
.ifydropdown__menu__item {
  @apply block w-full px-4 py-2 text-sm text-left text-gray-700;
}
.ifydropdown__menu--clickable {
  @apply text-brand cursor-pointer hover:text-brand-900 hover:bg-gray-100;
}
</style>
