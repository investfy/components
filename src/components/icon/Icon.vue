<template>
  <span class="icon" :class="type ? `is-${type}` : null">
    <Fa :icon="icon" :size="computedSize" :class="customClass" />
  </span>
</template>

<script>
export default {
  name: "IfyIcon",

  props: {
    icon: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
      validator(str) {
        return ["primary", "success", "warning", "danger", "info"].includes(
          str
        );
      },
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
      if (this.size === "xl") return "2x";
      return this.size;
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon {
  @apply select-none inline-flex items-center justify-center;
}
.icon.is-primary {
  @apply text-brand;
}
.icon.is-success {
  @apply text-accent-500;
}
.icon.is-warning {
  @apply text-yellow-500;
}
.icon.is-danger {
  @apply text-red-600;
}
.icon.is-info {
  @apply text-indigo-500;
}
</style>
