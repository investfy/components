<template>
  <div class="flex flex-wrap">
    <div class="w-full sm:w-6/12 md:w-4/12 px-4">
      <div class="relative inline-flex align-middle w-full">
        <slot name="trigger" />
        <button
          ref="dropdown"
          type="button"
          class="outline-none focus:outline-none"
          @click="toggleDropdown()"
        >
          <fa icon="th" />
        </button>

        <div
          ref="tooltip"
          class="tooltip"
          :class="{
            hidden: !isOpen,
            block: isOpen,
          }"
        >
          <div ref="arrow" class="arrow" data-popper-arrow />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "IfyDropdown",

  props: {
    options: {
      type: Object,
    }
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleDropdown() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
        createPopper(this.$refs.dropdown, this.$refs.tooltip, {
          placement: "bottom-start",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [4, 8],
              },
            },
          ],
        });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.tooltip {
  @apply bg-white shadow-lg z-50 rounded-sm border border-gray-100;
}

.tooltip[data-popper-placement^="top"] > .arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^="bottom"] > .arrow {
  top: -4px;
}

.tooltip[data-popper-placement^="left"] > .arrow {
  right: -4px;
}

.tooltip[data-popper-placement^="right"] > .arrow {
  left: -4px;
}

.arrow,
.arrow::before {
  @apply absolute;
  @apply w-2 h-2;
  background: inherit;
}

.arrow {
  @apply invisible;
}

.arrow::before {
  @apply visible;
  @apply transform rotate-45;
  content: "";
}
</style>
