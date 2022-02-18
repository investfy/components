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
    <IfyIcon v-if="iconLeft" :icon="iconLeft" :size="computedIconSize" />
    <span v-if="label">{{ label }}</span>
    <span v-else-if="$slots.default">
      <slot />
    </span>
    <IfyIcon v-if="iconRight" :icon="iconRight" :size="computedIconSize" />
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
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconSize: {
      type: String,
      default: null,
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

  computed: {
    computedIconSize() {
      return this.iconSize || this.size;
    },
  },
};
</script>

<style lang="postcss" scoped>
.field.has-addons .control {
  &:first-child:not(:only-child) .button {
    @apply rounded-br-none rounded-tr-none;
  }
  &:last-child:not(:only-child) .button {
    @apply rounded-bl-none rounded-tl-none;
  }
  &:not(:first-child):not(:last-child) .button {
    @apply rounded-none;
  }

  .button:not([disabled]).is-hovered,
  .button:not([disabled]):hover {
    @apply z-10;
  }
}

.buttons .button {
  @apply mb-2;
  &:not(:last-child):not(.is-fullwidth) {
    @apply mr-2;
  }
}

.button {
  @apply appearance-none inline-flex items-center justify-center bg-gray-100 border
    border-gray-200 text-gray-700 rounded shadow-none text-base leading-6 h-10 py-2 px-4
    relative align-top select-none cursor-pointer text-center whitespace-nowrap;

  &.is-hovered,
  &:hover {
    @apply border-gray-400 text-gray-700;
  }
  &.is-focused,
  &:focus {
    @apply outline-none border-gray-400 text-gray-700 ring-2 ring-gray-300;
  }
  &[disabled] {
    @apply cursor-not-allowed bg-white border-gray-300 shadow-none opacity-50;
  }
  &.is-loading {
    @apply text-transparent pointer-events-none;
  }
  &.is-loading:after {
    @apply block w-4 h-4 absolute border-2 border-gray-400 border-r-0 border-t-0 rounded-full
      animate-spin;
    content: "";
    left: calc(50% - 0.5em);
    top: calc(50% - 0.5em);
  }
  &.is-rounded {
    @apply rounded-full px-5;
  }
  &.is-fullwidth {
    @apply flex w-full;
  }

  .icon:last-child:not(:first-child) {
    @apply ml-1 -mr-2;
  }

  &.is-xs {
    @apply text-xs h-6 py-0 px-2;
  }
  &.is-sm {
    @apply text-sm h-8 py-1 px-3;
  }
  &.is-lg {
    @apply text-lg h-12;
  }
  &.is-xl {
    @apply text-xl h-14;
  }

  &.is-light {
    @apply bg-gray-100 border-transparent text-gray-600 focus:shadow-sm hover:bg-gray-200;
  }
  &.is-dark {
    @apply bg-gray-700 border-transparent text-white focus:shadow-sm hover:bg-gray-800;
  }
  &.is-text {
    @apply bg-transparent border-transparent text-gray-600 underline focus:bg-gray-100
      focus:text-gray-700 hover:bg-gray-100 hover:text-gray-700;
  }
  &.is-ghost {
    @apply bg-none bg-transparent border-transparent text-brand-600 no-underline focus:shadow-sm
      hover:text-brand hover:underline;
  }

  &.is-primary {
    @apply bg-brand border-transparent text-white;

    &.is-hovered,
    &.is-primary:hover {
      @apply bg-brand-800 border-transparent text-white;
    }
    &.is-light {
      @apply bg-brand-50 text-brand;

      &.is-hovered,
      &:hover {
        @apply bg-brand-100 border-transparent text-brand;
      }
    }
    &.is-outlined {
      @apply bg-transparent border-brand-600 text-brand-600;

      &.is-focused,
      &.is-hovered,
      &:focus,
      &:hover {
        @apply bg-brand-600 border-brand text-white;
      }
    }
    &.is-inverted {
      @apply bg-white text-brand-600;

      &.is-hovered,
      &:hover {
        @apply bg-gray-50;
      }
      &.is-outlined {
        @apply bg-transparent border-white text-white;

        &.is-focused,
        &.is-hovered,
        &:focus,
        &:hover {
          @apply bg-white text-brand-600;
        }
      }
    }
  }

  &.is-success {
    @apply bg-accent border-transparent text-white;

    &.is-hovered,
    &:hover {
      @apply bg-accent-600 border-transparent text-white;
    }
    &.is-light {
      @apply bg-accent-200 text-accent-700;

      &.is-hovered,
      &:hover {
        @apply bg-accent-300 border-transparent text-accent-800;
      }
    }
    &.is-outlined {
      @apply bg-transparent border-accent-600 text-accent-600;

      &.is-focused,
      &.is-hovered,
      &:focus,
      &:hover {
        @apply bg-accent border-accent text-white;
      }
    }
    &.is-inverted {
      @apply bg-white text-accent-600;

      &.is-hovered,
      &:hover {
        @apply bg-gray-50;
      }
      &.is-outlined {
        @apply bg-transparent border-white text-white;

        &.is-focused,
        &.is-hovered,
        &:focus,
        &:hover {
          @apply bg-white text-accent-600;
        }
      }
    }
  }

  &.is-warning {
    @apply bg-yellow-500 border-transparent text-white;

    &.is-hovered,
    &:hover {
      @apply bg-yellow-600 border-transparent text-white;
    }
    &.is-light {
      @apply bg-yellow-100 text-yellow-600;

      &.is-hovered,
      &:hover {
        @apply bg-yellow-200 border-transparent text-yellow-600;
      }
    }
    &.is-outlined {
      @apply bg-transparent border-yellow-500 text-yellow-600;

      &.is-focused,
      &.is-hovered,
      &:focus,
      &:hover {
        @apply bg-yellow-500 border-yellow-500 text-white;
      }
    }
    &.is-inverted {
      @apply bg-white text-yellow-600;

      &.is-hovered,
      &:hover {
        @apply bg-gray-50;
      }
      &.is-outlined {
        @apply bg-transparent border-white text-white;

        &.is-focused,
        &.is-hovered,
        &:focus,
        &:hover {
          @apply bg-white text-yellow-600;
        }
      }
    }
  }

  &.is-danger {
    @apply bg-red-600 border-transparent text-white;

    &.is-hovered,
    &:hover {
      @apply bg-red-700 border-transparent text-white;
    }
    &.is-light {
      @apply bg-red-100 text-red-600;

      &.is-hovered,
      &:hover {
        @apply bg-red-200 border-transparent text-red-700;
      }
    }
    &.is-outlined {
      @apply bg-transparent border-red-600 text-red-700;

      &.is-focused,
      &.is-hovered,
      &:focus,
      &:hover {
        @apply bg-red-600 border-red-600 text-white;
      }
    }
    &.is-inverted {
      @apply bg-white text-red-700;

      &.is-hovered,
      &:hover {
        @apply bg-gray-50;
      }
      &.is-outlined {
        @apply bg-transparent border-white text-white;

        &.is-focused,
        &.is-hovered,
        &:focus,
        &:hover {
          @apply bg-white text-red-700;
        }
      }
    }
  }

  &.is-info {
    @apply bg-indigo-500 border-transparent text-white;

    &.is-hovered,
    &:hover {
      @apply bg-indigo-600 border-transparent text-white;
    }
    &.is-light {
      @apply bg-indigo-100 text-indigo-500;

      &.is-hovered,
      &:hover {
        @apply bg-indigo-200 border-transparent text-indigo-600;
      }
    }
    &.is-outlined {
      @apply bg-transparent border-indigo-500 text-indigo-600;

      &.is-focused,
      &.is-hovered,
      &:focus,
      &:hover {
        @apply bg-indigo-500 border-indigo-500 text-white;
      }
    }
    &.is-inverted {
      @apply bg-white text-indigo-600;

      &.is-hovered,
      &:hover {
        @apply bg-gray-50;
      }
      &.is-outlined {
        @apply bg-transparent border-white text-white;

        &.is-focused,
        &.is-hovered,
        &:focus,
        &:hover {
          @apply bg-white text-indigo-600;
        }
      }
    }
  }
}
</style>
