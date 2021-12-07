<template>
  <header
    :class="{
      'shadow-md': shadow,
      'bg-white': !transparent,
    }"
  >
    <div class="px-1 lg:px-4" :class="{ container: !full }">
      <div class="flex items-center justify-start h-14">
        <div class="flex items-center mr-4">
          <slot name="brand">
            <component
              :is="brandLink ? 'router-link' : 'span'"
              :to="brandLink ? brandLink : undefined"
              class="flex items-center h-14"
            >
              <img
                class="block w-auto h-6 lg:h-8"
                :src="brandImg"
              />
            </component>
          </slot>
        </div>

        <div
          class="flex items-center"
          :class="{ 'mx-auto': centered, 'mr-auto': !centered }"
        >
          <slot name="start" />
        </div>

        <div
          class="flex items-center"
          :class="{ 'ml-4': centered, 'ml-auto': !centered }"
        >
          <slot name="end" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "IfyNavbar",

  props: {
    brandImg: {
      type: String,
      default: "../../assets/logo.svg",
    },
    brandLink: {
      type: [String, Object],
      default: null,
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
