<template>
  <div
    ref="drawer"
    :class="[
      'sidenav',
      'flex',
      'flex-col',
      'z-20 ',
      isActive && !useFullScreen ? 'expanded' : null,
      !isActive ? 'hiden' : null,
      side ? `${side}-show` : null,
      useFullScreen ? 'w-full' : null,
      bgcolor ? `is-${bgcolor}` : null,
    ]"
  >
    <button v-if="useFullScreen" @click="toggle">Fechar</button>
    Conteúdo
    <slot />
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
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s width;
}
.hiden {
  width: 0px;
  transition: 0.5s width;
}
.expanded {
  width: 400px;
  transition: 0.5s width;
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
