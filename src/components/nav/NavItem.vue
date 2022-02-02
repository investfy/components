<template>
  <li class="nav-item">
    <hr v-if="separator" class="nav-separator" />
    <component
      v-else
      :is="link ? 'IfyLink' : 'div'"
      :to="link"
      :class="['nav-item-container', { 'nav-clickable': clickable || link }]"
      @click="$emit('click')"
    >
      <div :class="['nav-item-start']">
        <slot name="start" />
      </div>

      <div
        :class="[
          'nav-item-content',
          $slots.start && 'ml-2',
          $slots.end && 'mr-2',
        ]"
      >
        <slot />
      </div>

      <div :class="['nav-item-end']">
        <slot name="end" />
      </div>
    </component>
  </li>
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
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  .nav-item .nav-item-container {
    @apply flex items-center transition-colors duration-150 ease-linear py-3 px-4 mx-auto text-sm
       text-brand-800 hover:text-brand-900 hover:bg-black hover:bg-opacity-10;
  }

  &.nav-light .nav-item-container {
    @apply text-brand-200 hover:text-white;
  }

  .nav-item-container.link {
    @apply no-underline;
  }

  .nav-item-start {
    @apply flex-shrink-0;
  }

  .nav-item-content {
    @apply flex-grow overflow-hidden max-w-full my-0;
  }

  .nav-item-end {
    @apply flex items-center justify-end  flex-shrink-0 ml-auto;
  }

  .nav-separator {
    @apply bg-blue-500 border-none block h-px my-2 mx-0;
  }

  .nav-clickable {
    @apply cursor-pointer;
  }
}
</style>
