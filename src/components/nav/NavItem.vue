<template>
  <hr v-if="separator" class="separator" />
  <component
    v-else
    :is="link ? 'span' : 'div'"
    :to="link"
    :class="{ fitem: true, clickable: clickable || link }"
    @click="$emit('click')"
  >
    <div class="flex w-full py-1">
      <div v-if="$slots.start">
        <slot name="start" />
      </div>

      <div
        class="flex justify-between w-full"
        :class="['start-slot', { 'is-centered': centered }]"
      >
        <slot />
      </div>

      <div v-if="$slots.end" :class="['end-slot', { 'is-centered': centered }]">
        <slot name="end" />
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: "IfyNavItem",

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
    centered: {
      type: Boolean,
      default: false,
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

.start-slot {
  @apply hidden mx-4 flex-grow md:flex;

  &.is-centered {
    @apply mx-0 flex-shrink md:items-center md:justify-center;
    flex-grow: 2;
  }
}
.end-slot {
  @apply flex items-center justify-end flex-shrink-0 ml-auto;
  &.is-centered {
    @apply md:flex-1;
  }
}
</style>
