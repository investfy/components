<template>
  <header
    :class="{
      'shadow-md': shadow,
      'bg-white': !transparent,
    }"
  >
    <div class="px-1 lg:px-4" :class="{ container: !full }">
      <div class="flex items-center h-14">
        <div :class="['brand-slot', { 'is-centered': centered }]">
          <!-- @slot Contepudo usado para substituir o logotipo.-->
          <slot name="brand">
            <component
              :is="brandLink ? 'RouterLink' : 'span'"
              :to="brandLink ? brandLink : undefined"
              class="flex items-center h-14"
            >
              <IfyLogo
                :orientation="screenWidth"
                class="w-auto h-6 lg:h-8 block"
              />
            </component>
          </slot>
        </div>

        <div
          v-if="$slots.start"
          :class="['start-slot', { 'is-centered': centered }]"
        >
          <!-- @slot Conteúdo exibido ao lado do logotipo ou centralizado caso a prop 'centered' esteja ativa. -->
          <slot name="start" />
        </div>

        <div
          v-if="$slots.end"
          :class="['end-slot', { 'is-centered': centered }]"
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

  computed: {
    screenWidth() {
      return window.innerWidth >= 1024 ? "horizontal" : "mini";
    },
  },
};
</script>

<style lang="postcss" scoped>
.brand-slot {
  @apply flex items-center flex-shrink-0;
  &.is-centered {
    @apply mr-auto md:flex-1;
  }
}
.start-slot {
  @apply hidden mx-4 flex-grow md:flex;

  &.is-centered {
    @apply mx-0 flex-shrink md:items-center md:justify-center;
    flex-grow: 2;
  }
}
.end-slot {
  @apply flex items-center justify-end flex-shrink-0 ml-auto;
  &.is-centered {
    @apply md:flex-1;
  }
}
</style>
