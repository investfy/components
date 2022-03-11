<template>
  <span
    :class="['ifytag', type && `ifytag--${type}`, size && `ifytag--${size}`]"
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

<style lang="postcss">
.ifytags .ifytag {
  @apply mb-2 mr-2 last:mr-0;
}

.ifytag {
  @apply inline-flex items-center justify-center bg-gray-100 rounded h-6 px-3 text-gray-600
    text-xs leading-6 whitespace-nowrap;
}

.ifytag--xs {
  @apply h-4 leading-4;
}
.ifytag--sm {
  @apply h-5 leading-5;
}
.ifytag--lg {
  @apply h-7 text-sm rounded-md;
}
.ifytag--xl {
  @apply h-8 leading-8 text-lg rounded-md;
}

.ifytag--primary {
  @apply text-white bg-brand;
}
.ifytag--success {
  @apply text-white bg-accent;
}
.ifytag--warning {
  @apply text-white bg-yellow-500;
}
.ifytag--danger {
  @apply text-white bg-red-600;
}
.ifytag--info {
  @apply text-white bg-indigo-500;
}
</style>
