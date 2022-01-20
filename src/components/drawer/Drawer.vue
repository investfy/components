<template>
  <div
    ref="drawer"
    :class="[
      'sidenav',
      'w-screen',
      'flex',
      'z-20 ',
      side === 'right' ? 'flex-row-reverse' : null,
      isActive && !useFullScreen ? 'expanded' : null,
      !isActive ? `hiden ${side}-hiden` : null,
      side ? `${side}-show` : null,
      useFullScreen ? 'w-full' : null,
    ]"
  >
    <div
      :class="[
        'content',
        'shadow-2xl',
        isActive ? 'w-96' : 'null',
        bgcolor ? `is-${bgcolor}` : null,
      ]"
    >
      <slot />
    </div>

    <div class="shadowarea" @click="toggle">
      <button v-if="useFullScreen">Fechar</button>
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
      return this.side + "-show";
    },
    useFullScreen() {
      return window.innerWidth < 768;
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  mounted() {
    // document.addEventListener("click", this.close);
  },

  beforeDestroy() {
    // document.removeEventListener("click", this.close);
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
      this.$emit("update:active", this.isActive);
    },
    close(e) {
      if (this.isActive) {
        debugger;
        if (this.$refs.drawer) {
          debugger;
          if (!this.$refs.drawer.contains(e.target)) {
            debugger;
            this.isActive = false;
            this.$emit("update:active", this.isActive);
          }
        }
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.left-show {
  top: 0;
  left: 0;
}

.right-show {
  top: 0;
  right: 0;
}
.sidenav {
  height: 100vh;
  position: fixed;
  z-index: 99;
  overflow-x: hidden;
  transform: none;
  transition: transform  cubic-bezier(0.4, 0, 0.2, 1);
}
.hiden {
  transition: transform  cubic-bezier(0.4, 0, 0.2, 1);
}

.left-hiden {
  transform: translateX(-100%);
}

.right-hiden {
  transform: translateX(100%);
}

.expanded {
  transition: all;
}

.hiden,
.sidenav,
.left-hiden,
.right-hiden {
  @apply duration-700;
}
.content {
  @apply p-3;
  @apply w-96 h-screen;
  box-shadow: -10px 0 18px -8px black, 10px 0 18px -8px black;
}

.shadowarea {
  @apply bg-gray-500 opacity-25;
  @apply flex-grow;
  @apply h-screen;
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
