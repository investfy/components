<template>
  <!-- <div
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
  </div> -->

  <div>
    <!-- partial:index.partial.html -->
    <label
      id="openmenu"
      for="menu-opener"
      tabindex="0"
      aria-haspopup="true"
      role="button"
      aria-controls="menu"
      class="OpenMenuButton"
      >DRAWER R</label
    >

    <input id="menu-opener" type="checkbox" data-menu hidden/>

    <aside id="menu" class="DrawerMenu" role="menu" aria-labelledby="openmenu">
      <nav class="Menu" :class="[bgcolor ? `is-${bgcolor}` : null,
      side ? `${side}-show` : null,]">
        <h2>DRAWERR MENU</h2>
        <slot />
      </nav>
      <label for="menu-opener" class="MenuOverlay"> </label>
    </aside>
    <!-- partial -->
  </div>
</template>

<script>
export default {
  name: "IfyDrawerr",

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
.OpenMenuButton {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  word-spacing: 140%;
  letter-spacing: 4px;
}
.DrawerMenu {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: grid;
  grid-template-areas: "MENU OVERLAY";
  grid-template-columns: 15fr 5fr;
}
@media (min-width: 30em) {
  .DrawerMenu {
    grid-template-columns: auto 1fr;
  }
}
[data-menu]:checked ~ .DrawerMenu {
  transform: none;
}
.Menu {
  display: block;
  flex-flow: column wrap;
  transform: translateX(-30%);
  opacity: 0;
  color: #fff;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0;
  contain: content;
  grid-area: "MENU";
  /* background-color: rebeccapurple; */
  box-sizing: border-box;
  padding: 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
@media (min-width: 30em) {
  .Menu {
    min-width: 400px;
  }
}
[data-menu]:checked ~ .DrawerMenu .Menu {
  transform: none;
  opacity: 1;
  transition-delay: 300ms;
}
.Menu a {
  text-decoration: none;
  color: #ffffff80;
  display: block;
  padding: 16px 0;
}
.Menu a:hover {
  color: #69f0ae;
}
.Menu > * + * {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.MenuOverlay {
  display: block;
  grid-area: "OVERLAY";
}
[data-menu]:not(:checked) ~ .DrawerMenu .MenuOverlay {
  pointer-events: none;
}

/* ####################### */
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
