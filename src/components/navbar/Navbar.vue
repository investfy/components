<template>
  <header
    :class="{
      'shadow-md': shadow,
      'bg-white': !transparent,
    }"
  >
    <div class="px-1 lg:px-4" :class="{ container: !full }">
      <div class="flex items-center h-14">
        <div :class="['brand-slot', { 'is-centered': centered }]">
          <slot name="brand">
            <component
              :is="brandLink ? 'RouterLink' : 'span'"
              :to="brandLink ? brandLink : undefined"
              class="flex items-center h-14"
            >
              <IfyLogo
                orientation="horizontal"
                class="w-auto h-6 lg:h-8 hidden lg:block"
              />
              <IfyLogo
                orientation="mini"
                class="w-auto h-6 lg:h-8 block lg:hidden"
              />
            </component>
          </slot>
        </div>

        <div
          v-if="$slots.start"
          :class="['start-slot', { 'is-centered': centered }]"
        >
          <slot name="start" />
        </div>

        <div
          v-if="$slots.end"
          :class="['end-slot', { 'is-centered': centered }]"
        >
          <slot name="end" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IfyLogo from "../logo/Logo.vue";

export default {
  name: "IfyNavbar",

  components: {
    IfyLogo,
  },

  props: {
    brandLink: {
      type: [String, Object],
      default: "",
    },
    centered: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.brand-slot {
  @apply flex items-center flex-shrink-0;
  &.is-centered {
    @apply mr-auto md:flex-1;
  }
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
