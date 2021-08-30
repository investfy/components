<template>
  <hr v-if="separator" class="dropdown-divider" />
  <a
    v-else-if="!custom && !hasLink"
    class="dropdown-item"
    :class="anchorClasses"
    @click="selectItem"
    :tabindex="isFocusable ? 0 : null"
  >
    <slot />
  </a>
  <div
    v-else
    :class="itemClasses"
    @click="selectItem"
    :tabindex="isFocusable ? 0 : null"
  >
    <slot />
  </div>
</template>

<script>
import InjectedChildMixin from "../../utils/InjectedChildMixin";

export default {
  name: "IfyDropdownItem",

  mixins: [InjectedChildMixin("dropdown")],

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null,
    },
    separator: Boolean,
    disabled: Boolean,
    custom: Boolean,
    focusable: {
      type: Boolean,
      default: true,
    },
    paddingless: Boolean,
    hasLink: Boolean,
  },

  computed: {
    anchorClasses() {
      return {
        disabled: this.parent.disabled || this.disabled,
        paddingless: this.paddingless,
        active: this.isActive,
      };
    },

    itemClasses() {
      return {
        "dropdown-item": !this.hasLink,
        disabled: this.disabled,
        paddingless: this.paddingless,
        active: this.isActive,
        "has-link": this.hasLink,
      };
    },

    isClickable() {
      return (
        !this.parent.disabled &&
        !this.separator &&
        !this.disabled &&
        !this.custom
      );
    },

    isActive() {
      if (this.parent.selected === null) return false;
      if (this.parent.multiple)
        return this.parent.selected.indexOf(this.value) >= 0;
      return this.value === this.parent.selected;
    },

    isFocusable() {
      return this.hasLink ? false : this.focusable;
    },
  },

  methods: {
    selectItem() {
      if (!this.isClickable) return;

      this.parent.selectItem(this.value);
      this.$emit("click");
    },
  },
};
</script>

<style lang="postcss" scoped>
.dropdown-item {
  @apply text-gray-900 text-sm leading-6;
  @apply block py-1 px-4 relative;

  &.disabled {
    @apply cursor-not-allowed;

    &:hover {
      background: inherit;
      color: inherit;
    }
  }
}

a.dropdown-item,
button.dropdown-item {
  @apply pr-12 w-full whitespace-nowrap;
  text-align: inherit;

  &:hover {
    @apply bg-gray-100 text-gray-900;
  }

  &.active {
    @apply bg-blue-500 text-white;
  }

  &.paddingless {
    @apply p-0;
  }
}

.has-link a {
  @extend .dropdown-item;
  @apply pr-12 whitespace-nowrap;
}

.dropdown-divider {
  @apply bg-gray-200 border-none block h-px my-2 mx-0;
}
</style>
