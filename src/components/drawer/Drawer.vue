<template>
  <div
    :class="[
      'drawer',
      type && `is-${type}`,
      position && `is-${position}`,
      isActive && 'is-active',
    ]"
  >
    <div ref="overlay" class="drawer-overlay" @click="close" />
    <div class="drawer-container">
      <VueSimplebar class="h-full">
        <div class="drawer-content">
          <div class="drawer-close">
            <button type="button" @click="close">
              <IfyIcon icon="arrow-left" />
            </button>
          </div>

          <slot />
        </div>
      </VueSimplebar>
    </div>
  </div>
</template>

<script>
import "@/assets/css/vue-simplebar.css";
import IfyIcon from "../icon/Icon.vue";
import { VueSimplebar } from "vue-simplebar";

export default {
  name: "IfyDrawer",

  components: {
    IfyIcon,
    VueSimplebar,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "light",
      validator(str) {
        return [
          "white",
          "light",
          "dark",
          "black",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ].includes(str);
      },
    },
    position: {
      type: String,
      default: "left",
      validator(str) {
        return ["top", "right", "bottom", "left"].includes(str);
      },
    },
  },

  data() {
    return {
      isActive: this.active,
    };
  },

  watch: {
    active: {
      handler(active) {
        this.isActive = active;
      },
      immediate: true,
    },
  },

  methods: {
    close() {
      this.isActive = false;
      this.$emit("update:active", this.isActive);
    },
  },
};
</script>

<style lang="postcss" scoped>
.drawer {
  @apply relative z-50;

  .drawer-overlay {
    @apply hidden fixed z-10 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-20 transition-all duration-200 ease-out;
  }
  &.is-active .drawer-overlay {
    @apply block;
  }

  .drawer-container {
    @apply bg-white block fixed z-20 transition-all duration-200 ease-out;
    box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%),
      0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%);
  }

  &.is-top .drawer-container {
    @apply top-0 right-0 left-0 w-full h-1/2 md:h-96;
    transform: translateY(calc(-100% - 40px)); /* 40px referentes à sombra */
  }
  &.is-top.is-active .drawer-container {
    @apply transform translate-y-0;
  }
  &.is-right .drawer-container {
    @apply top-0 right-0 bottom-0 w-full h-full md:w-96;
    transform: translateX(calc(100% + 40px));
  }
  &.is-right.is-active .drawer-container {
    @apply transform translate-x-0;
  }
  &.is-bottom .drawer-container {
    @apply bottom-0 right-0 left-0 w-full h-1/2 md:h-96;
    transform: translateY(calc(100% + 40px));
  }
  &.is-bottom.is-active .drawer-container {
    @apply transform translate-y-0;
  }
  &.is-left .drawer-container {
    @apply top-0 left-0 bottom-0 w-full h-full md:w-96;
    transform: translateX(calc(-100% - 40px));
  }
  &.is-left.is-active .drawer-container {
    @apply transform translate-x-0;
  }

  &.is-white .drawer-container {
    @apply bg-white;
  }
  &.is-black .drawer-container {
    @apply bg-black;
  }
  &.is-light .drawer-container {
    @apply bg-gray-200;
  }
  &.is-dark .drawer-container {
    @apply bg-gray-800;
  }
  &.is-primary .drawer-container {
    @apply bg-brand-800;
  }
  &.is-success .drawer-container {
    @apply bg-accent-600;
  }
  &.is-warning .drawer-container {
    @apply bg-yellow-600;
  }
  &.is-danger .drawer-container {
    @apply bg-red-600;
  }
  &.is-info .drawer-container {
    @apply bg-indigo-600;
  }

  .drawer-close {
    @apply px-2 pt-2 pb-0 md:hidden;

    button {
      @apply inline-flex justify-center items-center p-2 w-9 h-9 rounded-full
        leading-none transition-colors hover:bg-black hover:bg-opacity-10;
    }
  }
  &.is-top .drawer-close,
  &.is-bottom .drawer-close {
    @apply hidden;
  }
  &.is-dark .drawer-close button {
    @apply hover:bg-white hover:bg-opacity-10;
  }

  .drawer-content {
    @apply text-gray-800;
  }
  &.is-dark .drawer-content {
    @apply text-gray-100;
  }
}
</style>
