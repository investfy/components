<template>
  <span class="ifyicon">
    <FontAwesomeIcon :icon="icon" :size="computedSize" :class="customClass" />
  </span>
</template>

<script>
export default {
  name: "IfyIcon",

  props: {
    icon: {
      type: [String, Array],
      required: true,
    },
    size: {
      type: String,
      default: null,
      validator(str) {
        return ["xs", "sm", "md", "lg", "xl"].includes(str);
      },
    },
    customClass: {
      type: String,
      default: null,
    },
  },

  computed: {
    computedSize() {
      if (this.size === "md") return null;
      if (this.size === "xl") return "2x";
      if (this.size === "2xl") return "3x";
      if (this.size === "3xl") return "5x";
      if (this.size === "4xl") return "7x";
      if (this.size === "5xl") return "10x";
      return this.size;
    },
  },
};
</script>

<style lang="postcss" scoped>
.ifyicon {
  @apply select-none inline-block items-center justify-center;
}
</style>
