<template>
  <hr v-if="separator" class="separator" />
  <li
    v-else
    :class="[
      `nav-list-item`,
      clickable ? 'clickable' : null,
      isDark ? `dark` : `light`,
    ]"
    @click="$emit('click')"
  >
    <div
      class="list-item-start"
      :class="{
        'is-centered': centered,
      }"
    >
      <slot name="start" />
    </div>

    <div
      class="list-item-content flex"
      :class="{
        'is-centered': centered,
        'remove-margin': !$slots.start,
      }"
    >
      <slot />
    </div>

    <div
      class="list-item-end"
      :class="{
        'is-centered': centered,
      }"
    >
      <slot name="end" />
    </div>
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
    centered: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav-list-item {
  @apply flex items-center duration-150 ease-linear py-3 px-4 text-sm;
  transition-property: background-color;
}

.dark {
  &:hover {
    @apply text-white bg-white bg-opacity-10;
  }
}

.light {
  &:hover {
    @apply text-black bg-black bg-opacity-10;
  }
}

.remove-margin {
  @apply mx-0;
}

.is-centered {
  @apply items-center justify-center;
  @apply flex-shrink md:items-center md:justify-center;
}

.list-item-start {
  @apply flex-shrink-0;
  &.is-centered {
    @apply mr-auto flex-1;
  }
}
.list-item-content {
  @apply flex-grow overflow-hidden max-w-full my-0 mx-2;
  &.is-centered {
    flex-grow: 1;
  }
}
.list-item-end {
  @apply flex items-center justify-end  flex-shrink-0 ml-auto;
  @apply flex-1;
}

.separator {
  @apply bg-blue-500 border-none block h-px my-2 mx-0;
}

.clickable {
  @apply cursor-pointer;
}
</style>
