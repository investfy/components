<template>
  <div
    :class="['drawer', position && `is-${position}`, isActive && 'is-active']"
  >
    <div ref="overlay" class="drawer-overlay" @click="close" />
    <div :class="['drawer-container', customClass]">
      <VueSimplebar class="h-full">
        <div class="drawer-content">
          <slot />
        </div>
      </VueSimplebar>
    </div>
  </div>
</template>

<script>
import "@/assets/css/vue-simplebar.css";
import { VueSimplebar } from "vue-simplebar";

export default {
  name: "IfyDrawer",

  components: {
    VueSimplebar,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
      validator(str) {
        return ["top", "right", "bottom", "left"].includes(str);
      },
    },
    customClass: {
      type: String,
      default: "",
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

  created() {
    if (typeof document !== "undefined")
      document.addEventListener("keyup", this.escapeHandler);
  },

  destroyed() {
    if (typeof document !== "undefined")
      document.removeEventListener("keyup", this.escapeHandler);
  },

  methods: {
    escapeHandler(e) {
      if (e.keyCode === 27) this.close();
    },
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
}
</style>
