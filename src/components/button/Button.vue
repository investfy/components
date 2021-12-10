<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :type="nativeType"
    :disabled="loading"
    :class="[
      'button',
      size ? `is-${size}` : null,
      type ? `is-${type}` : null,
      {
        'is-light': light,
        'is-rounded': rounded,
        'is-loading': loading,
        'is-outlined': outlined,
        'is-fullwidth': expanded,
        'is-inverted': inverted,
        'is-focused': focused,
        'is-hovered': hovered,
      },
    ]"
    @click="$emit('click')"
  >
    <span v-if="label">{{ label }}</span>
    <span v-else-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "IfyButton",

  props: {
    type: {
      type: String,
      default: null,
      validator(str) {
        return [
          "primary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
          "text",
          "ghost",
        ].includes(str);
      },
    },
    nativeType: {
      type: String,
      default: "button",
      validator(str) {
        return ["button", "submit", "reset"].includes(str);
      },
    },
    size: {
      type: String,
      default: null,
      validator(str) {
        return ["xs", "sm", "md", "lg", "xl"].includes(str);
      },
    },
    label: {
      type: String,
      default: null,
    },
    light: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
    focused: {
      type: Boolean,
      default: false,
    },
    hovered: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    //   // Expanded prop
    //   if (this.expanded) this.classes.push("w-full");
    //   // Type prop
    //   switch (this.type) {
    //     case "primary":
    //       this.classes.push(
    //         "border-brand",
    //         "hover:text-white",
    //         "hover:bg-accent",
    //         "hover:border-accent"
    //       );
    //       if (this.outline) {
    //         this.classes.push("text-brand");
    //       } else {
    //         this.classes.push("text-white", "bg-brand");
    //       }
    //       break;
    //     case "success":
    //       this.classes.push("border-accent");
    //       if (this.outline) {
    //         this.classes.push(
    //           "text-accent",
    //           "hover:text-white",
    //           "hover:bg-accent"
    //         );
    //       } else {
    //         this.classes.push(
    //           "text-white",
    //           "bg-accent",
    //           "hover:bg-green-600",
    //           "hover:border-green-600"
    //         );
    //       }
    //       break;
    //     case "info":
    //       this.classes.push("border-blue-500");
    //       if (this.outline) {
    //         this.classes.push(
    //           "text-blue-500",
    //           "hover:text-white",
    //           "hover:bg-blue-500"
    //         );
    //       } else {
    //         this.classes.push(
    //           "text-white",
    //           "bg-blue-500",
    //           "hover:bg-blue-600",
    //           "hover:border-blue-600"
    //         );
    //       }
    //       break;
    //     case "warning":
    //       this.classes.push("border-yellow-400");
    //       if (this.outline) {
    //         this.classes.push(
    //           "text-yellow-400",
    //           "hover:text-white",
    //           "hover:bg-yellow-400"
    //         );
    //       } else {
    //         this.classes.push(
    //           "text-white",
    //           "bg-yellow-400",
    //           "hover:bg-yellow-500",
    //           "hover:border-yellow-500"
    //         );
    //       }
    //       break;
    //     case "danger":
    //       this.classes.push("border-red-500");
    //       if (this.outline) {
    //         this.classes.push(
    //           "text-red-500",
    //           "hover:text-white",
    //           "hover:bg-red-500"
    //         );
    //       } else {
    //         this.classes.push(
    //           "text-white",
    //           "bg-red-500",
    //           "hover:bg-red-600",
    //           "hover:border-red-600"
    //         );
    //       }
    //       break;
    //     case "white":
    //       this.classes.push("border-white");
    //       this.classes.push(
    //         "text-blue-500",
    //         "bg-white",
    //         "hover:bg-gray-100",
    //         "hover:border-gray-200"
    //       );
    //       break;
    //     case "none":
    //       this.classes.push("text-blue-500");
    //       break;
    //     case "default":
    //     default:
    //       this.classes.push("hover:bg-gray-100", "hover:text-gray-700");
    //       if (this.outline) {
    //         this.classes.push(
    //           "text-white",
    //           "border-gray-300",
    //           "hover:border-gray-100"
    //         );
    //       } else {
    //         this.classes.push(
    //           "bg-white",
    //           "text-gray-600",
    //           "border-gray-500",
    //           "hover:border-gray-700"
    //         );
    //       }
    //       break;
    //   }
    //   // Size prop
    //   switch (this.size) {
    //     case "xs":
    //       this.classes.push("px-2", "py-1", "text-xs");
    //       break;
    //     case "sm":
    //       this.classes.push("px-2", "py-1", "text-sm");
    //       break;
    //     case "lg":
    //       this.classes.push("px-4", "py-2", "text-2xl");
    //       break;
    //     case "xl":
    //       this.classes.push("px-6", "py-3", "text-3xl");
    //       break;
    //     case "md":
    //     default:
    //       this.classes.push("px-4", "py-2");
    //       break;
    //   }
    //   // Rounded prop
    //   if (this.rounded) this.classes.push(`rounded-${this.rounded}`);
  },
};
</script>

<style lang="postcss" scoped>
.buttons .button {
  @apply mb-2;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  @apply mr-2;
}
.button {
  @apply appearance-none inline-flex items-center justify-center bg-gray-100
    border border-gray-200 text-gray-700 rounded-xs shadow-none text-base leading-6
    h-10 py-2 px-4 relative align-top select-none cursor-pointer text-center whitespace-nowrap;
}
.button.is-hovered,
.button:hover {
  @apply border-gray-400 text-gray-700;
}
.button.is-focused,
.button:focus {
  @apply outline-none border-gray-400 text-gray-700 ring-2 ring-gray-300;
}
.button[disabled] {
  @apply cursor-not-allowed bg-white border-gray-300 shadow-none opacity-50;
}
.button.is-loading {
  @apply text-transparent pointer-events-none;
}
.button.is-loading:after {
  @apply block w-4 h-4 absolute border-2 border-gray-400 border-r-0 border-t-0 rounded-full animate-spin;
  content: "";
  left: calc(50% - 0.5em);
  top: calc(50% - 0.5em);
}
.button.is-rounded {
  @apply rounded-full px-5;
}
.button.is-fullwidth {
  @apply flex w-full;
}

.button.is-light {
  @apply bg-gray-100 border-transparent text-gray-600
    focus:shadow-sm hover:bg-gray-200;
}
.button.is-dark {
  @apply bg-gray-700 border-transparent text-white
    focus:shadow-sm hover:bg-gray-800;
}
.button.is-text {
  @apply bg-transparent border-transparent text-gray-600 underline
    focus:bg-gray-100 focus:text-gray-700 hover:bg-gray-100 hover:text-gray-700;
}
.button.is-ghost {
  @apply bg-none bg-transparent border-transparent text-brand-600 no-underline
    focus:shadow-sm hover:text-brand hover:underline;
}

.button.is-primary {
  @apply bg-brand border-transparent text-white;
}
.button.is-primary.is-hovered,
.button.is-primary:hover {
  @apply bg-brand-800 border-transparent text-white;
}
.button.is-primary.is-light {
  @apply bg-brand-50 text-brand;
}
.button.is-primary.is-light.is-hovered,
.button.is-primary.is-light:hover {
  @apply bg-brand-100 border-transparent text-brand;
}
.button.is-primary.is-outlined {
  @apply bg-transparent border-brand-600 text-brand-600;
}
.button.is-primary.is-outlined.is-focused,
.button.is-primary.is-outlined.is-hovered,
.button.is-primary.is-outlined:focus,
.button.is-primary.is-outlined:hover {
  @apply bg-brand-600 border-brand text-white;
}
.button.is-primary.is-inverted {
  @apply bg-white text-brand-600;
}
.button.is-primary.is-inverted.is-hovered,
.button.is-primary.is-inverted:hover {
  @apply bg-gray-50;
}
.button.is-primary.is-inverted.is-outlined {
  @apply bg-transparent border-white text-white;
}
.button.is-primary.is-inverted.is-outlined.is-focused,
.button.is-primary.is-inverted.is-outlined.is-hovered,
.button.is-primary.is-inverted.is-outlined:focus,
.button.is-primary.is-inverted.is-outlined:hover {
  @apply bg-white text-brand-600;
}

.button.is-success {
  @apply bg-accent border-transparent text-white;
}
.button.is-success.is-hovered,
.button.is-success:hover {
  @apply bg-accent-600 border-transparent text-white;
}
.button.is-success.is-light {
  @apply bg-accent-200 text-accent-700;
}
.button.is-success.is-light.is-hovered,
.button.is-success.is-light:hover {
  @apply bg-accent-300 border-transparent text-accent-800;
}
.button.is-success.is-outlined {
  @apply bg-transparent border-accent-600 text-accent-600;
}
.button.is-success.is-outlined.is-focused,
.button.is-success.is-outlined.is-hovered,
.button.is-success.is-outlined:focus,
.button.is-success.is-outlined:hover {
  @apply bg-accent border-accent text-white;
}
.button.is-success.is-inverted {
  @apply bg-white text-accent-600;
}
.button.is-success.is-inverted.is-hovered,
.button.is-success.is-inverted:hover {
  @apply bg-gray-50;
}
.button.is-success.is-inverted.is-outlined {
  @apply bg-transparent border-white text-white;
}
.button.is-success.is-inverted.is-outlined.is-focused,
.button.is-success.is-inverted.is-outlined.is-hovered,
.button.is-success.is-inverted.is-outlined:focus,
.button.is-success.is-inverted.is-outlined:hover {
  @apply bg-white text-accent-600;
}

.button.is-danger {
  @apply bg-red-600 border-transparent text-white;
}
.button.is-danger.is-hovered,
.button.is-danger:hover {
  @apply bg-red-700 border-transparent text-white;
}
.button.is-danger.is-light {
  @apply bg-red-100 text-red-600;
}
.button.is-danger.is-light.is-hovered,
.button.is-danger.is-light:hover {
  @apply bg-red-200 border-transparent text-red-700;
}
.button.is-danger.is-outlined {
  @apply bg-transparent border-red-600 text-red-700;
}
.button.is-danger.is-outlined.is-focused,
.button.is-danger.is-outlined.is-hovered,
.button.is-danger.is-outlined:focus,
.button.is-danger.is-outlined:hover {
  @apply bg-red-600 border-red-600 text-white;
}
.button.is-danger.is-inverted {
  @apply bg-white text-red-700;
}
.button.is-danger.is-inverted.is-hovered,
.button.is-danger.is-inverted:hover {
  @apply bg-gray-50;
}
.button.is-danger.is-inverted.is-outlined {
  @apply bg-transparent border-white text-white;
}
.button.is-danger.is-inverted.is-outlined.is-focused,
.button.is-danger.is-inverted.is-outlined.is-hovered,
.button.is-danger.is-inverted.is-outlined:focus,
.button.is-danger.is-inverted.is-outlined:hover {
  @apply bg-white text-red-700;
}

.button.is-warning {
  @apply bg-yellow-500 border-transparent text-white;
}
.button.is-warning.is-hovered,
.button.is-warning:hover {
  @apply bg-yellow-600 border-transparent text-white;
}
.button.is-warning.is-light {
  @apply bg-yellow-100 text-yellow-600;
}
.button.is-warning.is-light.is-hovered,
.button.is-warning.is-light:hover {
  @apply bg-yellow-200 border-transparent text-yellow-600;
}
.button.is-warning.is-outlined {
  @apply bg-transparent border-yellow-500 text-yellow-600;
}
.button.is-warning.is-outlined.is-focused,
.button.is-warning.is-outlined.is-hovered,
.button.is-warning.is-outlined:focus,
.button.is-warning.is-outlined:hover {
  @apply bg-yellow-500 border-yellow-500 text-white;
}
.button.is-warning.is-inverted {
  @apply bg-white text-yellow-600;
}
.button.is-warning.is-inverted.is-hovered,
.button.is-warning.is-inverted:hover {
  @apply bg-gray-50;
}
.button.is-warning.is-inverted.is-outlined {
  @apply bg-transparent border-white text-white;
}
.button.is-warning.is-inverted.is-outlined.is-focused,
.button.is-warning.is-inverted.is-outlined.is-hovered,
.button.is-warning.is-inverted.is-outlined:focus,
.button.is-warning.is-inverted.is-outlined:hover {
  @apply bg-white text-yellow-600;
}

.button.is-info {
  @apply bg-indigo-500 border-transparent text-white;
}
.button.is-info.is-hovered,
.button.is-info:hover {
  @apply bg-indigo-600 border-transparent text-white;
}
.button.is-info.is-light {
  @apply bg-indigo-100 text-indigo-500;
}
.button.is-info.is-light.is-hovered,
.button.is-info.is-light:hover {
  @apply bg-indigo-200 border-transparent text-indigo-600;
}
.button.is-info.is-outlined {
  @apply bg-transparent border-indigo-500 text-indigo-600;
}
.button.is-info.is-outlined.is-focused,
.button.is-info.is-outlined.is-hovered,
.button.is-info.is-outlined:focus,
.button.is-info.is-outlined:hover {
  @apply bg-indigo-500 border-indigo-500 text-white;
}
.button.is-info.is-inverted {
  @apply bg-white text-indigo-600;
}
.button.is-info.is-inverted.is-hovered,
.button.is-info.is-inverted:hover {
  @apply bg-gray-50;
}
.button.is-info.is-inverted.is-outlined {
  @apply bg-transparent border-white text-white;
}
.button.is-info.is-inverted.is-outlined.is-focused,
.button.is-info.is-inverted.is-outlined.is-hovered,
.button.is-info.is-inverted.is-outlined:focus,
.button.is-info.is-inverted.is-outlined:hover {
  @apply bg-white text-indigo-600;
}

.button.is-xs {
  @apply text-xs h-6 py-0 px-2;
}
.button.is-sm {
  @apply text-sm h-8 py-1 px-3;
}
.button.is-lg {
  @apply text-lg h-12;
}
.button.is-xl {
  @apply text-xl h-14;
}
</style>
