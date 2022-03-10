<template>
  <div
    :class="[
      'ifydrawer',
      position && `ifydrawer--${position}`,
      isActive && 'ifydrawer--active',
    ]"
  >
    <div ref="overlay" class="ifydrawer__overlay" @click="close" />
    <div :class="['ifydrawer__container', customClass]">
      <Simplebar class="h-full">
        <div class="ifydrawer__content">
          <slot />
        </div>
      </Simplebar>
    </div>
  </div>
</template>

<script>
import Simplebar from "simplebar-vue";

export default {
  name: "IfyDrawer",

  components: {
    Simplebar,
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
      immediate: true,
      handler(active) {
        this.isActive = active;

        if (typeof document !== "undefined") {
          const elements = document.querySelectorAll("html, body");
          elements.forEach(
            (el) => (el.style.overflow = active ? "hidden" : "visible")
          );
        }
      },
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
      this.$emit("update:active", false);
    },
  },
};
</script>

<style lang="postcss">
@import "simplebar-vue/dist/simplebar.min.css";

.ifydrawer {
  @apply relative z-50;
}
.ifydrawer--active .ifydrawer__overlay {
  @apply block;
}
.ifydrawer--top .ifydrawer__container {
  @apply top-0 right-0 left-0 w-full h-1/2 md:h-96;
  transform: translateY(calc(-100% - 40px)); /* 40px referentes à sombra */
}
.ifydrawer--top.ifydrawer--active .ifydrawer__container {
  @apply transform translate-y-0;
}
.ifydrawer--right .ifydrawer__container {
  @apply top-0 right-0 bottom-0 w-full h-full md:w-96;
  transform: translateX(calc(100% + 40px));
}
.ifydrawer--right.ifydrawer--active .ifydrawer__container {
  @apply transform translate-x-0;
}
.ifydrawer--bottom .ifydrawer__container {
  @apply bottom-0 right-0 left-0 w-full h-1/2 md:h-96;
  transform: translateY(calc(100% + 40px));
}
.ifydrawer--bottom.ifydrawer--active .ifydrawer__container {
  @apply transform translate-y-0;
}
.ifydrawer--left .ifydrawer__container {
  @apply top-0 left-0 bottom-0 w-full h-full md:w-96;
  transform: translateX(calc(-100% - 40px));
}
.ifydrawer--left.ifydrawer--active .ifydrawer__container {
  @apply transform translate-x-0;
}

.ifydrawer__overlay {
  @apply hidden fixed z-10 left-0 right-0 top-0 bottom-0 bg-black bg-opacity-20 transition-all
    duration-200 ease-out;
}

.ifydrawer__container {
  @apply bg-white block fixed z-20 transition-all duration-200 ease-out;
  box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%),
    0 6px 30px 5px rgb(0 0 0 / 12%);
}
</style>
