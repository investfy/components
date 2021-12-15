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
