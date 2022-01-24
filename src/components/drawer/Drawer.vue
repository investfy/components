<template>
  <div>
    <div
      :class="[active ? 'shadowarea hidden md:flex' : null]"
      @click="closeDrawer"
    ></div>

    <transition :name="`${side}-appear`">
      <div
        v-if="active"
        :class="[
          'sidenav',
          'w-full',
          'flex',
          side === 'right' ? 'flex-row-reverse' : null,
          computedSide,
        ]"
      >
        <div
          :class="['content', 'shadow-2xl', bgcolor ? `is-${bgcolor}` : null]"
        >
          <div
            class="mb-5 flex md:hidden"
            :class="[side === 'right' ? 'justify-end' : 'justify-start' ]"
          >
            <button @click="closeDrawer">
              <IfyIcon :icon="`arrow-${side}`" customClass="text-2xl" />
            </button>
          </div>
          <slot name="content" />
        </div>
      </div>
    </transition>
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
.right-appear-enter-active,
.right-appear-leave-active,
.left-appear-enter-active,
.left-appear-leave-active {
  transition: transform 300ms;
}

.right-appear-enter,
.right-appear-leave-to {
  transform: translateX(100%);
}

.right-appear-leave,
.right-appear-enter-to,
.left-appear-leave,
.left-appear-enter-to {
  transform: translateX(0);
}

.left-appear-enter,
.left-appear-leave-to {
  transform: translateX(-100%);
}

.sidenav {
  @apply bottom-0 top-0   h-full   absolute   overflow-x-hidden overflow-y-hidden
  delay-75;
}

.content {
  @apply p-7    w-full    h-screen   z-20;
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
