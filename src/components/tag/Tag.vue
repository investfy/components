<template>
  <span :class="['tag', type ? `is-${type}` : null, size ? `is-${size}` : null]"
    ><slot
  /></span>
</template>

<script>
export default {
  name: "IfyTag",

  props: {
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
        return ["xs", "sm", "lg", "xl"].includes(str);
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.tags .tag {
  @apply mb-2 mr-2 last:mr-0;
}
.tag {
  @apply inline-flex items-center justify-center bg-gray-100 rounded-xs h-6 px-3 text-gray-600 text-xs leading-6 whitespace-nowrap;
}

.tag.is-xs {
  @apply h-4 leading-4;
}
.tag.is-sm {
  @apply h-5 leading-5;
}
.tag.is-lg {
  @apply h-7 text-sm rounded-md;
}
.tag.is-xl {
  @apply h-8 leading-8 text-lg rounded-md;
}

.tag.is-primary {
  @apply text-white bg-brand;
}
.tag.is-success {
  @apply text-white bg-accent;
}
.tag.is-warning {
  @apply text-white bg-yellow-500;
}
.tag.is-danger {
  @apply text-white bg-red-600;
}
.tag.is-info {
  @apply text-white bg-indigo-500;
}
</style>
