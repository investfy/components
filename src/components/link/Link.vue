<template>
  <a v-if="isExternal" :href="to" class="link"><slot /></a>
  <RouterLink v-else v-bind="$props" class="link">
    <slot />
  </RouterLink>
</template>

<script>
export default {
  name: "IfyLink",

  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },

  computed: {
    isExternal() {
      return typeof this.to === "string" && this.to.startsWith("http");
    },
  },
};
</script>

<style lang="postcss" scoped>
.link {
  @apply cursor-pointer outline-none no-underline transition-all
    focus:ring focus:ring-accent hover:underline;
}
</style>
