<template>
  <div>
    <div :class="[isActive ? 'shadowarea' : null]" @click="closeDrawer"></div>

    <div
      ref="drawer"
      :class="[
        'sidenav',
        'w-full',
        'flex',
        side === 'right' ? 'flex-row-reverse' : null,
        !isActive ? `${side}-start` : null,
        computedSide,
      ]"
    >
      <div :class="['content', 'shadow-2xl', bgcolor ? `is-${bgcolor}` : null]">
        <button
          class="mb-5 flex justify-start md:hidden"
          :class="[side === 'left' ? 'justify-start' : 'justify-end']"
          @click="closeDrawer"
        >
          <IfyIcon icon="arrow-left" customClass="text-2xl" />
        </button>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IfyDrawer",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    side: {
      type: String,
      default: "left",
      validator(str) {
        return ["left", "right"].includes(str);
      },
    },
    bgcolor: {
      type: String,
      default: "primary",
      validator(str) {
        return ["primary", "success", "warning", "danger", "info"].includes(
          str
        );
      },
    },
  },
  watch: {
    active(newVal) {
      this.isActive = newVal;
    },
  },

  computed: {
    computedSide() {
      return this.side + "-0";
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    closeDrawer() {
      this.isActive = !this.isActive;
      this.$emit("update:active", this.isActive);
    },
  },
};
</script>

<style lang="postcss" scoped>
.sidenav {
  @apply bottom-0 top-0;
  @apply h-full;
  @apply absolute;
  @apply overflow-x-hidden overflow-y-hidden;
  @apply transition duration-100 delay-75 ease-linear;
}

.left-start {
  @apply transform -translate-x-full;
}

.right-start {
  @apply transform translate-x-full;
}

.content {
  @apply p-7;
  @apply h-screen;
  @apply z-20;
  width: 360px;
  /* box-shadow: -10px 0 18px -8px black, 10px 0 18px -8px black; */
  box-shadow: 0 0 10px rgba(0 0 0 / 60%);
}

.shadowarea {
  @apply bg-gray-500 opacity-25;
  @apply z-10;
  @apply h-full w-full;
  @apply absolute;
  @apply inset-0;
}

.is-primary {
  @apply text-white bg-brand;
}
.is-success {
  @apply text-white bg-accent;
}
.is-warning {
  @apply text-white bg-yellow-500;
}
.is-danger {
  @apply text-white bg-red-600;
}
.is-info {
  @apply text-white bg-indigo-500;
}
</style>
