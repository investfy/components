<template>
  <li class="ifynav__item">
    <hr v-if="separator" class="ifynav__item--separator" />
    <component
      v-else
      :is="link ? 'IfyLink' : 'div'"
      :to="link"
      :class="[
        'ifynav__item__container',
        (clickable || link) && 'ifynav__item--clickable',
      ]"
      @click="$emit('click')"
    >
      <div :class="['ifynav__item__start']">
        <slot name="start" />
      </div>

      <div
        :class="[
          'ifynav__item__content',
          $slots.start && 'ifynav__item__content--start',
          $slots.end && 'ifynav__item__content--end',
        ]"
      >
        <slot />
      </div>

      <div :class="['ifynav__item__end']">
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

<style lang="postcss">
.ifynav__item {
  &--separator {
    @apply bg-gray-200 border-none block h-px my-2 mx-0;
  }
  &--clickable {
    @apply cursor-pointer;
  }
}

.ifynav__item__container {
  @apply flex items-center transition-colors duration-150 ease-linear py-3 px-4 mx-auto text-sm
       text-brand-800 hover:text-brand-900 hover:bg-black hover:bg-opacity-10;
}
.ifynav--light {
  .ifynav__item--separator {
    @apply bg-blue-500;
  }
  .ifynav__item__container {
    @apply text-brand-200 hover:text-white;
  }
}

.ifynav__item__start {
  @apply flex-shrink-0;
}

.ifynav__item__content {
  @apply flex-grow overflow-hidden max-w-full my-0;

  &--start {
    @apply ml-2;
  }
  &--end {
    @apply mr-2;
  }
}

.ifynav__item__end {
  @apply flex items-center justify-end  flex-shrink-0 ml-auto;
}
</style>
