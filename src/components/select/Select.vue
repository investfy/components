<template>
  <div
    class="control"
    :class="{ 'is-expanded': expanded, 'has-icons-left': icon }"
  >
    <span class="select" :class="spanClasses">
      <select
        v-model="computedValue"
        ref="select"
        :multiple="multiple"
        :size="nativeSize"
        v-bind="$attrs"
        @blur="$emit('blur', $event) && checkHtml5Validity()"
        @focus="$emit('focus', $event)"
      >
        <template v-if="placeholder">
          <option v-if="computedValue == null" :value="null" disabled hidden>
            {{ placeholder }}
          </option>
        </template>

        <slot />
      </select>
    </span>

    <IfyIcon v-if="icon" class="is-left" :icon="icon" :size="iconSize" />
  </div>
</template>

<script>
import FormElementMixin from "../../utils/FormElementMixin";

export default {
  name: "IfySelect",

  mixins: [FormElementMixin],

  inheritAttrs: false,

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function, Date],
      default: null,
    },
    placeholder: String,
    multiple: Boolean,
    nativeSize: [String, Number],
  },

  data() {
    return {
      selected: this.value,
      elementRef: "select",
    };
  },

  computed: {
    computedValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$emit("input", value);
        !this.isValid && this.checkHtml5Validity();
      },
    },
    spanClasses() {
      return [
        this.size ? `is-${this.size}` : null,
        this.statusType ? `is-${this.statusType}` : null,
        {
          "is-fullwidth": this.expanded,
          "is-loading": this.loading,
          "is-multiple": this.multiple,
          "is-rounded": this.rounded,
          "is-empty": this.selected === null,
        },
      ];
    },
  },

  watch: {
    value(value) {
      this.selected = value;
      !this.isValid && this.checkHtml5Validity();
    },
  },
};
</script>

<style lang="postcss" scoped>
.control {
  @apply relative box-border clear-both text-base;
}

.select {
  @apply relative inline-block max-w-full align-top;

  select {
    @apply appearance-none relative bg-white block max-w-full h-10 m-0 px-3 py-2 pr-10 rounded-xs
      align-top outline-none border border-gray-300 text-base text-gray-700 cursor-pointer;

    &:not([multiple]) {
      @apply pr-10;
    }

    &.is-hovered,
    &:hover {
      @apply border-gray-400;
    }

    &.is-active,
    &.is-focused,
    &:active,
    &:focus {
      @apply border-brand shadow outline-none;
    }

    option {
      @apply px-3 py-2 text-gray-700;
    }

    optgroup {
      @apply px-0 py-1 text-gray-500;
    }
  }

  &.is-empty select {
    @apply text-gray-500 text-opacity-70;
  }

  &:not(.is-multiple) {
    @apply h-10;

    &:not(.is-loading) {
      &:after {
        content: " ";
        border-width: 3px;
        right: 1.125rem;
        width: 0.625em;
        height: 0.625em;
        margin-top: -0.4375em;
        border-radius: 2px;
        @apply absolute z-40 top-1/2 block border-brand border-r-0 border-t-0
      pointer-events-none transform -rotate-45 origin-center;
      }

      &:hover:after {
        @apply border-gray-700;
      }
    }
  }
}
</style>
