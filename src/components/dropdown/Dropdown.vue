<template>
  <div
    ref="dropdown"
    class="dropdown inline-flex relative align-top"
    :class="rootClasses"
  >
    <div
      v-if="!inline"
      ref="trigger"
      :tabindex="disabled ? false : 0"
      class="dropdown-trigger"
      @click="onClick"
      @contextmenu.prevent="onContextMenu"
      @mouseenter="onHover"
      @focus.capture="onFocus"
    >
      <slot name="trigger" :active="isActive" />
    </div>

    <transition :name="animation">
      <div v-if="isMobileModal" v-show="isActive" class="dropdown-background" />
    </transition>
    <transition :name="animation">
      <div
        v-show="(!disabled && (isActive || isHoverable)) || inline"
        ref="dropdownMenu"
        class="dropdown-menu"
        :style="style"
        v-trap-focus="trapFocus"
      >
        <div class="dropdown-content" :style="contentStyle">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import trapFocus from "../../directives/trapFocus";
import config from "../../utils/config";
import {
  removeElement,
  createAbsoluteElement,
  isCustomElement,
  toCssWidth,
} from "../../utils/helpers";
import ProviderParentMixin from "../../utils/ProviderParentMixin";

const DEFAULT_CLOSE_OPTIONS = ["escape", "outside"];

export default {
  name: "IfyDropdown",

  directives: {
    trapFocus,
  },

  mixins: [ProviderParentMixin("dropdown")],

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null,
    },
    disabled: Boolean,
    inline: Boolean,
    scrollable: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 200,
    },
    position: {
      type: String,
      validator(value) {
        return (
          ["top-right", "top-left", "bottom-left", "bottom-right"].indexOf(
            value
          ) > -1
        );
      },
    },
    triggers: {
      type: Array,
      default: () => ["click"],
    },
    mobileModal: {
      type: Boolean,
      default: () => {
        return config.defaultDropdownMobileModal;
      },
    },
    animation: {
      type: String,
      default: "fade",
    },
    multiple: Boolean,
    trapFocus: {
      type: Boolean,
      default: () => {
        return config.defaultTrapFocus;
      },
    },
    closeOnClick: {
      type: Boolean,
      default: true,
    },
    canClose: {
      type: [Array, Boolean],
      default: true,
    },
    expanded: Boolean,
    appendToBody: Boolean,
    appendToBodyCopyParent: Boolean,
  },

  data() {
    return {
      selected: this.value,
      style: {},
      isActive: false,
      isHoverable: false,
      _bodyEl: undefined, // Used to append to body
    };
  },

  computed: {
    rootClasses() {
      return [
        this.position,
        {
          disabled: this.disabled,
          hoverable: this.hoverable,
          inline: this.inline,
          active: this.isActive || this.inline,
          "mobile-modal": this.isMobileModal,
          expanded: this.expanded,
        },
      ];
    },
    isMobileModal() {
      return this.mobileModal && !this.inline;
    },
    cancelOptions() {
      return typeof this.canClose === "boolean"
        ? this.canClose
          ? DEFAULT_CLOSE_OPTIONS
          : []
        : this.canClose;
    },
    contentStyle() {
      return {
        maxHeight: this.scrollable ? toCssWidth(this.maxHeight) : null,
        overflow: this.scrollable ? "auto" : null,
      };
    },
    hoverable() {
      return this.triggers.indexOf("hover") >= 0;
    },
  },

  watch: {
    /**
     * When v-model is changed set the new selected item.
     */
    value(value) {
      this.selected = value;
    },

    /**
     * Emit event when isActive value is changed.
     */
    isActive(value) {
      this.$emit("active-change", value);
      if (this.appendToBody) {
        this.$nextTick(() => {
          this.updateAppendToBody();
        });
      }
    },
  },

  methods: {
    /**
     * Click listener from DropdownItem.
     *   1. Set new selected item.
     *   2. Emit input event to update the user v-model.
     *   3. Close the dropdown.
     */
    selectItem(value) {
      if (this.multiple) {
        if (this.selected) {
          if (this.selected.indexOf(value) === -1) {
            // Add value
            this.selected = [...this.selected, value];
          } else {
            // Remove value
            this.selected = this.selected.filter((val) => val !== value);
          }
        } else {
          this.selected = [value];
        }
        this.$emit("change", this.selected);
      } else {
        if (this.selected !== value) {
          this.selected = value;
          this.$emit("change", this.selected);
        }
      }
      this.$emit("input", this.selected);
      if (!this.multiple) {
        this.isActive = !this.closeOnClick;
        if (this.hoverable && this.closeOnClick) {
          this.isHoverable = false;
        }
      }
    },

    /**
     * White-listed items to not close when clicked.
     */
    isInWhiteList(el) {
      if (el === this.$refs.dropdownMenu) return true;
      if (el === this.$refs.trigger) return true;
      // All chidren from dropdown
      if (this.$refs.dropdownMenu !== undefined) {
        const children = this.$refs.dropdownMenu.querySelectorAll("*");
        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }
      // All children from trigger
      if (this.$refs.trigger !== undefined) {
        const children = this.$refs.trigger.querySelectorAll("*");
        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }
      return false;
    },

    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside(event) {
      if (this.cancelOptions.indexOf("outside") < 0) return;
      if (this.inline) return;

      const target = isCustomElement(this)
        ? event.composedPath()[0]
        : event.target;
      if (!this.isInWhiteList(target)) this.isActive = false;
    },

    /**
     * Keypress event that is bound to the document
     */
    keyPress({ key }) {
      if (this.isActive && (key === "Escape" || key === "Esc")) {
        if (this.cancelOptions.indexOf("escape") < 0) return;
        this.isActive = false;
      }
    },

    onClick() {
      if (this.triggers.indexOf("click") < 0) return;
      this.toggle();
    },
    onContextMenu() {
      if (this.triggers.indexOf("contextmenu") < 0) return;
      this.toggle();
    },
    onHover() {
      if (this.triggers.indexOf("hover") < 0) return;
      this.isHoverable = true;
    },
    onFocus() {
      if (this.triggers.indexOf("focus") < 0) return;
      this.toggle();
    },

    /**
     * Toggle dropdown if it's not disabled.
     */
    toggle() {
      if (this.disabled) return;

      if (!this.isActive) {
        // if not active, toggle after clickOutside event
        // this fixes toggling programmatic
        this.$nextTick(() => {
          const value = !this.isActive;
          this.isActive = value;
          // Vue 2.6.x ???
          setTimeout(() => (this.isActive = value));
        });
      } else {
        this.isActive = !this.isActive;
      }
    },

    updateAppendToBody() {
      const dropdown = this.$refs.dropdown;
      const dropdownMenu = this.$refs.dropdownMenu;
      const trigger = this.$refs.trigger;
      if (dropdownMenu && trigger) {
        // update wrapper dropdown
        const dropdownWrapper = this.$data._bodyEl.children[0];
        dropdownWrapper.classList.forEach((item) =>
          dropdownWrapper.classList.remove(item)
        );
        dropdownWrapper.classList.add("dropdown");
        if (this.$vnode && this.$vnode.data && this.$vnode.data.staticClass) {
          dropdownWrapper.classList.add(this.$vnode.data.staticClass);
        }
        this.rootClasses.forEach((item) => {
          // skip position prop
          if (item && typeof item === "object") {
            for (let key in item) {
              if (item[key]) {
                dropdownWrapper.classList.add(key);
              }
            }
          }
        });
        if (this.appendToBodyCopyParent) {
          const parentNode = this.$refs.dropdown.parentNode;
          const parent = this.$data._bodyEl;
          parent.classList.forEach((item) => parent.classList.remove(item));
          parentNode.classList.forEach((item) => {
            parent.classList.add(item);
          });
        }
        const rect = trigger.getBoundingClientRect();
        let top = rect.top + window.scrollY;
        let left = rect.left + window.scrollX;
        if (!this.position || this.position.indexOf("bottom") >= 0) {
          top += trigger.clientHeight;
        } else {
          top -= dropdownMenu.clientHeight;
        }
        if (this.position && this.position.indexOf("left") >= 0) {
          left -= dropdownMenu.clientWidth - trigger.clientWidth;
        }
        this.style = {
          position: "absolute",
          top: `${top}px`,
          left: `${left}px`,
          zIndex: "99",
          width: this.expanded ? `${dropdown.offsetWidth}px` : undefined,
        };
      }
    },
  },

  mounted() {
    if (this.appendToBody) {
      this.$data._bodyEl = createAbsoluteElement(this.$refs.dropdownMenu);
      this.updateAppendToBody();
    }
  },

  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("click", this.clickedOutside);
      document.addEventListener("keyup", this.keyPress);
    }
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", this.clickedOutside);
      document.removeEventListener("keyup", this.keyPress);
    }
    if (this.appendToBody) {
      removeElement(this.$data._bodyEl);
    }
  },
};
</script>

<style lang="postcss" scoped>
.dropdown {
  & + .dropdown {
    @apply ml-2;
  }

  &.active,
  &.hoverable:hover .dropdown-menu {
    @apply block;
  }

  &.hoverable:not(.active) {
    .dropdown-menu {
      @apply hidden;
    }
  }

  &.hoverable {
    &:hover {
      .dropdown-menu {
        display: inherit;
      }
    }
  }

  &.right .dropdown-menu {
    @apply left-auto right-0;
  }

  &.up .dropdown-menu {
    @apply bottom-full pb-1 top-auto;
    padding-top: initial;
  }

  &.expanded {
    @apply w-full;

    .dropdown-trigger {
      @apply w-full;
    }
    .dropdown-menu {
      @apply w-full;
    }
    &.mobile-modal {
      .dropdown-menu {
        @apply min-w-full;
      }
    }
  }

  &:not(.disabled) {
    .dropdown-menu {
      .dropdown-item {
        &.disabled {
          @apply opacity-50;
        }
      }
    }
  }

  &.disabled {
    @apply opacity-50 cursor-not-allowed;
    .dropdown-trigger {
      @apply pointer-events-none;
    }
  }

  &.inline {
    .dropdown-menu {
      @apply static inline-block p-0;
    }
  }

  &.top-right {
    .dropdown-menu {
      @apply top-auto bottom-full;
    }
  }

  &.top-left {
    .dropdown-menu {
      @apply top-auto bottom-full right-0 left-auto;
    }
  }

  &.bottom-left {
    .dropdown-menu {
      @apply right-0 left-auto;
    }
  }
}

.dropdown-menu {
  @apply left-0 pt-1 absolute top-full z-20;
  min-width: 12rem;
}

.dropdown-content {
  @apply bg-white rounded-xs shadow-md py-2;
}

.dropdown-background {
  @apply lg:hidden;
  @apply fixed top-0 left-0 right-0 bottom-0 z-40;
  @apply bg-gray-900 bg-opacity-80 cursor-pointer;
}
</style>

<style lang="postcss">
@media screen and (max-width: 1023px) {
  &.mobile-modal {
    > .dropdown-menu {
      @apply fixed top-1/4 left-1/2 bottom-auto right-auto z-50;
      @apply whitespace-normal overflow-y-auto;
      width: calc(100vw - 40px);
      max-width: 460px;
      max-height: calc(100vh - 120px);
      transform: translate3d(-50%, -25%, 0);

      > .dropdown-content {
        > .dropdown-item,
        > .has-link a {
          @apply py-4 px-6;
        }
      }
    }
  }
}
</style>
