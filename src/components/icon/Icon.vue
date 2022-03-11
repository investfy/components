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
        return [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
        ].includes(str);
      },
    },
    customClass: {
      type: String,
      default: null,
    },
  },

  computed: {
    computedSize() {
      const sizes = {
        xs: "xs",
        sm: "sm",
        md: null,
        lg: "lg",
        xl: "2x",
        "2xl": "3x",
        "3xl": "5x",
        "4xl": "7x",
        "5xl": "10x",
      };

      return sizes[this.size];
    },
  },
};
</script>

<style lang="postcss">
.ifyicon {
  @apply select-none inline-block;
}
</style>
