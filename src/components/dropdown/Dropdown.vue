<template>
  <div ref="dropdown" class="ifydropdown">
    <div v-if="$slots.trigger" @click="toggle">
      <slot name="trigger" :active="isActive" />
    </div>

    <template v-if="$slots.default">
      <transition name="slide">
        <div v-show="isActive" class="ifydropdown__menu">
          <slot />
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: "IfyDropdown",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  watch: {
    active(newVal) {
      this.isActive = newVal;
    },
  },

  mounted() {
    document.addEventListener("click", this.close);
    this.isActive = this.active;
  },

  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.$emit("update:active", this.isActive);
    },
    close(e) {
      // Previne que o click no próprio trigger dispare o fechamento do dropdown
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(e.target)) {
        this.isActive = false;
        this.$emit("update:active", this.isActive);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
</style>

<style lang="postcss">
.ifydropdown {
  @apply relative inline-block text-left;
}
.ifydropdown__menu {
  @apply origin-top-right transition-transform absolute z-20 -right-2 mt-1 bg-white border
    border-gray-200 rounded-md shadow-lg outline-none;
}
</style>
