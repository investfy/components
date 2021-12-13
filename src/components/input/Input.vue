<template>
  <div class="control">
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input"
      :class="[inputClasses, customClass]"
      :type="newType"
      :autocomplete="autocomplete"
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
  </div>
</template>

<script>
export default {
  name: "IfyInput",

  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: null,
      validator(str) {
        return ["xs", "sm", "md", "lg", "xl"].includes(str);
      },
    },
    autocomplete: {
      type: String,
      default: null,
    },
    maxlength: {
      type: [Number, String],
      default: null,
    },
    customClass: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      newValue: this.value,
      newType: this.type,
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
    inputClasses() {
      return [
        this.size ? `is-${this.size}` : null,
        { "is-rounded": this.rounded },
      ];
    },
  },

  methods: {
    onInput(event) {
      const value = event.target.value;
      this.updateValue(value);
    },
    onChange(event) {
      const value = event.target.value;
      this.updateValue(value);
    },
    onBlur($event) {
      this.isFocused = false;
      this.$emit("blur", $event);
    },
    onFocus($event) {
      this.isFocused = true;
      this.$emit("focus", $event);
    },
    updateValue(value) {
      this.computedValue = value;
    },
  },
};
</script>

<style lang="postcss" scoped>
.control {
  @apply relative box-border clear-both text-base;
}

.input,
.textarea {
  @apply appearance-none relative bg-white inline-flex items-center justify-start
    max-w-full w-full h-10 px-3 py-2 border border-gray-300 rounded-xs shadow-sm
    align-top text-base text-gray-700 hover:border-brand-300 focus:outline-none
    focus:border-brand-300 focus:ring-2 focus:ring-brand-200;
}

.textarea {
  @apply block min-w-full max-w-full py-3 resize-y;
}
.textarea:not([rows]) {
  @apply h-32 max-h-96;
}

.is-xs.input,
.is-xs.textarea {
  @apply text-xs h-7 py-0;
}
.is-sm.input,
.is-sm.textarea {
  @apply text-sm h-8 py-1;
}
.is-lg.input,
.is-lg.textarea {
  @apply text-lg h-12;
}
.is-xl.input,
.is-xl.textarea {
  @apply text-xl h-14;
}
</style>
