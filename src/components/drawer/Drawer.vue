<template>
  <div>
    <div
      :class="[active ? 'shadowarea hidden md:flex' : null]"
      @click="closeDrawer"
    ></div>

    <div
      ref="drawer"
      :class="[
        'sidenav',
        'w-full',
        'flex',
        side === 'right' ? 'flex-row-reverse' : null,
        !active ? `${side}-start` : null,
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
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IfyDrawer",

  watch: {
    active(newVal) {
      if (newVal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    },
  },
  methods: {
    closeDrawer() {
      this.$emit("update:active", false);
    },
  },
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

  computed: {
    computedSide() {
      return this.side + "-0";
    },
  },
};
</script>

<style lang="postcss" scoped>
.sidenav {
  @apply bottom-0 top-0   h-full   absolute   overflow-x-hidden overflow-y-hidden
  transition duration-100
  delay-75 ease-linear;
}

.left-start {
  @apply transform -translate-x-full;
}

.right-start {
  @apply transform translate-x-full;
}

.content {
  @apply p-7    w-full    h-screen
   z-20;
  box-shadow: 0 0 10px rgba(0 0 0 / 60%);
}

@media (min-width: 767px) {
  .content {
    width: 360px;
  }
}

.shadowarea {
  @apply bg-gray-500 opacity-25
   z-10
   h-full w-full
   absolute
   inset-0;
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
