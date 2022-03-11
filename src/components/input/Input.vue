<template>
  <div
    :class="[
      'ifyinput',
      'ifycontrol',
      size && `ifyinput--${size}`,
      expanded && 'is-expanded',
      loading && 'ifyinput--loading',
      !hasMessage && 'ifyinput--clearfix',
      icon && 'ifyinput--icons-left',
      hasIconRight && 'ifyinput--icons-right',
    ]"
  >
    <input
      v-if="type !== 'textarea'"
      ref="input"
      :class="[
        'ifyinput__input',
        statusType && `ifyinput__input--${statusType}`,
        size && `ifyinput__input--${size}`,
        rounded && 'ifyinput__input--rounded',
        customClass,
      ]"
      :type="newType"
      :autocomplete="newAutocomplete"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
    />

    <textarea
      v-else
      ref="textarea"
      :class="[
        'ifyinput__textarea',
        statusType && `ifyinput__textarea--${statusType}`,
        size && `ifyinput__textarea--${size}`,
        rounded && 'ifyinput__textarea--rounded',
        customClass,
      ]"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
    />

    <IfyIcon
      v-if="icon"
      :class="['ifyicon--left', { 'ifyicon--clickable': iconClickable }]"
      :icon="icon"
      :size="computedIconSize"
      @click.native="iconClick('icon-click', $event)"
    />

    <IfyIcon
      v-if="!loading && hasIconRight"
      :class="[
        'ifyicon--right',
        `ifyicon--${rightIconType}`,
        { 'ifyicon--clickable': passwordReveal || iconRightClickable },
      ]"
      :icon="rightIcon"
      :size="computedIconSize"
      both
      @click.native="rightIconClick"
    />

    <small
      v-if="maxlength && hasCounter && type !== 'number'"
      :class="[
        'ifyinput__counter',
        !isFocused && 'ifyinput__counter--invisible',
      ]"
    >
      {{ valueLength }} / {{ maxlength }}
    </small>
  </div>
</template>

<script>
import FormElementMixin from "../../utils/FormElementMixin";

export default {
  name: "IfyInput",

  mixins: [FormElementMixin],

  inheritAttrs: false,

  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    passwordReveal: {
      type: Boolean,
      default: false,
    },
    iconClickable: {
      type: Boolean,
      default: false,
    },
    hasCounter: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: "",
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconRightClickable: {
      type: Boolean,
      default: false,
    },
    iconRightType: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      newValue: this.value,
      newType: this.type,
      newAutocomplete: this.autocomplete || "on",
      isPasswordVisible: false,
      elementRef: this.type === "textarea" ? "textarea" : "input",
    };
  },

  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("input", value);
      },
    },

    hasIconRight() {
      return (
        this.passwordReveal ||
        this.loading ||
        (this.statusIcon && this.statusTypeIcon) ||
        this.iconRight
      );
    },

    rightIcon() {
      if (this.passwordReveal) {
        return this.passwordVisibleIcon;
      } else if (this.iconRight) {
        return this.iconRight;
      }

      return this.statusTypeIcon;
    },

    rightIconType() {
      if (this.passwordReveal) {
        return "primary";
      } else if (this.iconRight) {
        return this.iconRightType || null;
      }

      return this.statusType;
    },

    /**
     * Ícone com base no tipo de status.
     */
    statusTypeIcon() {
      switch (this.statusType) {
        case "success":
          return "check";
        case "danger":
          return "exclamation-circle";
        case "info":
          return "info-circle";
        case "warning":
          return "exclamation-triangle";
        default:
          return null;
      }
    },

    /**
     * Verifica se há alguma prop 'message' no componente pai se este for um Field.
     */
    hasMessage() {
      return !!this.statusMessage;
    },

    /**
     * Ícone para a prop password-reveal.
     */
    passwordVisibleIcon() {
      return !this.isPasswordVisible ? "eye" : "eye-slash";
    },

    /**
     * Retorna o nº de caracteres do valor
     */
    valueLength() {
      if (typeof this.computedValue === "string") {
        return this.computedValue.length;
      } else if (typeof this.computedValue === "number") {
        return this.computedValue.toString().length;
      }

      return 0;
    },
  },

  watch: {
    value(value) {
      this.newValue = value;
    },
  },

  methods: {
    /**
     * Toggle the visibility of a password-reveal input
     * by changing the type and focus the input right away.
     */
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.newType = this.isPasswordVisible ? "text" : "password";

      this.$nextTick(() => {
        this.focus();
      });
    },

    iconClick(emit, event) {
      this.$emit(emit, event);
      this.$nextTick(() => {
        this.focus();
      });
    },

    rightIconClick(event) {
      if (this.passwordReveal) {
        this.togglePasswordVisibility();
      } else if (this.iconRightClickable) {
        this.iconClick("icon-right-click", event);
      }
    },

    onInput(event) {
      if (!this.lazy) {
        const value = event.target.value;
        this.updateValue(value);
      }
    },

    onChange(event) {
      if (this.lazy) {
        const value = event.target.value;
        this.updateValue(value);
      }
    },

    updateValue(value) {
      this.computedValue = value;
      !this.isValid && this.checkHtml5Validity();
    },
  },
};
</script>

<style lang="postcss">
.ifyinput {
  @apply text-base;

  &--clearfix:after {
    @apply table clear-both;
    content: " ";
  }

  &--icons-left .ifyicon,
  &--icons-right .ifyicon {
    @apply absolute top-0 z-10 inline-flex items-center justify-center text-gray-300 w-10 h-full
    pointer-events-none;
  }
  &--icons-right .ifyinput__input {
    @apply pr-10;
  }
  &--icons-left .ifyinput__input {
    @apply pl-10;
  }
  &--icons-left .ifyicon.ifyicon--left {
    @apply left-0;
  }
  &--icons-right .ifyicon.ifyicon--right {
    @apply right-0;
  }

  .ifyicon.ifyicon--primary {
    @apply text-brand;
  }
  .ifyicon.ifyicon--success {
    @apply text-accent-500;
  }
  .ifyicon.ifyicon--warning {
    @apply text-yellow-500;
  }
  .ifyicon.ifyicon--danger {
    @apply text-red-600;
  }
  .ifyicon.ifyicon--info {
    @apply text-indigo-500;
  }

  .ifyicon.ifyicon--clickable {
    @apply cursor-pointer;
    pointer-events: all;
  }
}

.ifyinput__counter {
  @apply float-right ml-2;

  &--invisible {
    @apply invisible;
  }
}

.ifyinput__input,
.ifyinput__textarea {
  @apply appearance-none relative bg-white inline-flex items-center justify-start max-w-full w-full
    h-10 px-3 py-2 border border-gray-300 rounded shadow-sm align-top text-base text-gray-700
    hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-2
    focus:ring-indigo-500 focus:ring-opacity-30;

  &[disabled] {
    @apply cursor-not-allowed bg-gray-100 border-gray-100 shadow-none text-gray-400;
  }

  &--xs {
    @apply text-xs h-7 py-0;
  }
  &--sm {
    @apply text-sm h-8 py-1;
  }
  &--lg {
    @apply text-lg h-12;
  }
  &--xl {
    @apply text-xl h-14;
  }

  &--primary {
    @apply border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-30;
  }
  &--success {
    @apply border-accent-600 focus:ring-accent-600 focus:ring-opacity-30;
  }
  &--warning {
    @apply border-yellow-500 focus:ring-yellow-500 focus:ring-opacity-30;
  }
  &--danger {
    @apply border-red-600 focus:ring-red-600 focus:ring-opacity-30;
  }
  &--info {
    @apply border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-30;
  }

  &--rounded {
    @apply rounded-full px-4;
  }
}

.ifyinput__textarea {
  @apply block min-w-full max-w-full py-3 resize-y;

  &:not([rows]) {
    @apply h-32 max-h-96;
  }
  &[rows="1"] {
    @apply overflow-hidden resize-none py-2;
  }
}

.ifyinput--loading {
  &:after {
    @apply block w-4 h-4 absolute z-10 right-3 border-2 border-gray-300 border-r-0 border-t-0
      rounded-full animate-spin;
    content: "";
    top: calc(50% - 0.5rem);
  }

  &.ifyinput--sm:after {
    @apply w-3 h-3;
    top: calc(50% - 0.375rem);
  }
  &.ifyinput--lg:after {
    @apply w-5 h-5;
    top: calc(50% - 0.625rem);
  }
  &.ifyinput--xl:after {
    @apply w-6 h-6;
    top: calc(50% - 0.75rem);
  }
}
</style>
