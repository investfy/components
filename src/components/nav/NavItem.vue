<template>
  <hr v-if="separator" class="separator" />
  <div
    v-else
    :class="{ item: true, clickable: clickable }"
    @click="$emit('click')"
  >
    <div class="flex w-full py-1 items-center">
      <div v-if="$slots.start" class="start-slot">
        <slot name="start" />
      </div>

      <div
        class="flex justify-between w-full items-center"
        :class="['center-slot', { 'is-centered': centered }]"
      >
        <slot />
      </div>

      <div v-if="$slots.end" class="end-slot">
        <slot name="end" />
      </div>
    </div>
  </div>
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
    centered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.separator {
  @apply bg-blue-500 border-none block h-px my-2 mx-0;
}
.item {
  @apply block w-full px-4 py-2 text-sm text-left;
}

.clickable {
  @apply cursor-pointer;
}

.center-slot {
  @apply flex-grow md:flex;

  &.is-centered {
    @apply flex-shrink items-center justify-center;
  }
}
.end-slot {
  @apply flex items-center justify-end flex-shrink-0;
  @apply ml-2;
  &.is-centered {
    @apply md:flex-1;
  }
}

.start-slot {
  @apply flex items-center justify-end flex-shrink-0;
  @apply ml-2;
  &.is-centered {
    @apply md:flex-1;
  }
}
</style>
