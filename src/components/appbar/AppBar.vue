<template>
  <header
    :class="[
      'ifyappbar',
      {
        'ifyappbar--shadow': shadow,
        'ifyappbar--transparent': transparent,
      },
    ]"
  >
    <div
      class="ifyappbar__wrapper"
      :class="{ 'ifyappbar__wrapper--container': !full }"
    >
      <div class="ifyappbar__content">
        <div
          :class="[
            'ifyappbar__brand-slot',
            { 'ifyappbar__brand-slot--centered': centered },
          ]"
        >
          <!-- @slot Contepudo usado para substituir o logotipo.-->
          <slot name="brand">
            <component
              :is="brandLink ? 'RouterLink' : 'span'"
              :to="brandLink ? brandLink : undefined"
              class="ifyappbar__brand-link"
            >
              <IfyLogo
                :orientation="logoOrientation"
                class="ifyappbar__brand-image"
              />
            </component>
          </slot>
        </div>

        <div
          :class="[
            'ifyappbar__start-slot',
            { 'ifyappbar__start-slot--centered': centered },
          ]"
        >
          <!-- @slot Conteúdo exibido ao lado do logotipo ou centralizado caso a prop 'centered' esteja ativa. -->
          <slot name="start" />
        </div>

        <div
          :class="[
            'ifyappbar__end-slot',
            { 'ifyappbar__end-slot--centered': centered },
          ]"
        >
          <slot name="end" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IfyLogo from "../logo/Logo.vue";

export default {
  name: "IfyAppBar",

  components: {
    IfyLogo,
  },

  props: {
    /**
     * Link que será utilizado pelo logotipo
     */
    brandLink: {
      type: [String, Object],
      default: "",
    },
    /**
     * Se ativado, faz com que o slot "start" seja renderizado centralizado relativo à largura do AppBar.
     */
    centered: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: true,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      logoOrientation: "mini",
    };
  },

  created() {
    if (typeof window !== "undefined")
      window.addEventListener("resize", this.calculateScreenWidth);
  },

  mounted() {
    this.calculateScreenWidth();
  },

  destroyed() {
    if (typeof window !== "undefined")
      window.removeEventListener("resize", this.calculateScreenWidth);
  },

  methods: {
    calculateScreenWidth() {
      if (typeof window !== "undefined") {
        this.logoOrientation =
          window.innerWidth >= 1024 ? "horizontal" : "mini";
      } else {
        this.logoOrientation = "mini";
      }
    },
  },
};
</script>

<style lang="postcss">
.ifyappbar {
  @apply bg-white;
}
.ifyappbar--shadow {
  @apply shadow-md;
}
.ifyappbar--transparent {
  @apply bg-transparent;
}

.ifyappbar__wrapper {
  @apply px-1 lg:px-4;
}
.ifyappbar__wrapper--container {
  @apply container;
}

.ifyappbar__content {
  @apply flex items-center h-14;
}

.ifyappbar__brand-slot {
  @apply flex items-center flex-shrink-0;
}
.ifyappbar__brand-slot--centered {
  @apply mr-auto md:flex-1;
}

.ifyappbar__brand-link {
  @apply flex items-center h-14;
}

.ifyappbar__brand-image {
  @apply w-auto h-6 lg:h-8 block;
}

.ifyappbar__start-slot {
  @apply mx-4 flex-grow flex;
}
.ifyappbar__start-slot--centered {
  @apply mx-0 flex-shrink items-center justify-center;
  flex-grow: 2;
}

.ifyappbar__end-slot {
  @apply flex items-center justify-end flex-shrink-0 ml-auto;
}
.ifyappbar__end-slot--centered {
  @apply md:flex-1;
}
</style>
