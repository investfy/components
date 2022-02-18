<template>
  <div class="control" :class="rootClasses">
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input"
      :class="[inputClasses, customClass]"
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
      class="textarea"
      :class="[inputClasses, customClass]"
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
      class="is-left"
      :class="{ 'is-clickable': iconClickable }"
      :icon="icon"
      :size="computedIconSize"
      @click.native="iconClick('icon-click', $event)"
    />

    <IfyIcon
      v-if="!loading && hasIconRight"
      class="is-right"
      :class="{ 'is-clickable': passwordReveal || iconRightClickable }"
      :icon="rightIcon"
      :size="computedIconSize"
      :type="rightIconType"
      both
      @click.native="rightIconClick"
    />

    <small
      v-if="maxlength && hasCounter && type !== 'number'"
      class="help counter"
      :class="{ 'is-invisible': !isFocused }"
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

    rootClasses() {
      return [
        this.size ? `is-${this.size}` : null,
        this.iconPosition,
        {
          "is-expanded": this.expanded,
          "is-loading": this.loading,
          "is-clearfix": !this.hasMessage,
        },
      ];
    },

    inputClasses() {
      return [
        this.statusType ? `is-${this.statusType}` : null,
        this.size ? `is-${this.size}` : null,
        { "is-rounded": this.rounded },
      ];
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
     * Posição do ícone.
     */
    iconPosition() {
      let iconClasses = "";

      if (this.icon) {
        iconClasses += "has-icons-left ";
      }

      if (this.hasIconRight) {
        iconClasses += "has-icons-right";
      }

      return iconClasses;
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

<style lang="postcss" scoped>
.field.has-addons .control {
  &:not(:last-child) {
    margin-right: -1px;
  }
  &:last-child:not(:only-child) .input {
    @apply rounded-bl-none rounded-tl-none;
  }
  &:first-child:not(:only-child) .input {
    @apply rounded-br-none rounded-tr-none;
  }
  &:not(:first-child):not(:last-child) .input {
    @apply rounded-none;
  }

  .input:not([disabled]).is-hovered,
  .input:not([disabled]):hover {
    @apply z-10;
  }
}

.control {
  @apply relative box-border clear-both text-base;

  &.has-icons-left .icon,
  &.has-icons-right .icon {
    @apply absolute top-0 z-10 text-gray-300 w-10 h-10 pointer-events-none;
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

  &.has-icons-right .input {
    @apply pr-10;
  }
  &.has-icons-left .input {
    @apply pl-10;
  }
  &.has-icons-left .icon.is-left {
    @apply left-0;
  }
  &.has-icons-right .icon.is-right {
    @apply right-0;
  }

  &.has-icons-left.is-xs .icon,
  &.has-icons-right.is-xs .icon {
    @apply h-7;
  }
  &.has-icons-left.is-sm .icon,
  &.has-icons-right.is-sm .icon {
    @apply h-8;
  }
  &.has-icons-left.is-lg .icon,
  &.has-icons-right.is-lg .icon {
    @apply h-12;
  }
  &.has-icons-left.is-xl .icon,
  &.has-icons-right.is-xl .icon {
    @apply h-14;
  }

  .icon.is-clickable {
    @apply cursor-pointer;
    pointer-events: all;
  }

  .help.counter {
    @apply float-right ml-2;
  }
}

.input,
.textarea {
  @apply appearance-none relative bg-white inline-flex items-center justify-start max-w-full w-full
    h-10 px-3 py-2 border border-gray-300 rounded shadow-sm align-top text-base text-gray-700
    hover:border-brand-300 focus:outline-none focus:border-brand-300 focus:ring-2
    focus:ring-brand focus:ring-opacity-30;

  &.is-xs {
    @apply text-xs h-7 py-0;
  }
  &.is-sm {
    @apply text-sm h-8 py-1;
  }
  &.is-lg {
    @apply text-lg h-12;
  }
  &.is-xl {
    @apply text-xl h-14;
  }

  &.is-primary {
    @apply border-brand-600 focus:ring-brand-600 focus:ring-opacity-30;
  }
  &.is-success {
    @apply border-accent-600 focus:ring-accent-600 focus:ring-opacity-30;
  }
  &.is-warning {
    @apply border-yellow-500 focus:ring-yellow-500 focus:ring-opacity-30;
  }
  &.is-danger {
    @apply border-red-600 focus:ring-red-600 focus:ring-opacity-30;
  }
  &.is-info {
    @apply border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-30;
  }
}

.textarea {
  @apply block min-w-full max-w-full py-3 resize-y;

  &:not([rows]) {
    @apply h-32 max-h-96;
  }
}

.is-clearfix:after {
  @apply table clear-both;
  content: " ";
}
.is-invisible {
  @apply invisible;
}
</style>
