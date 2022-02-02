<template>
  <a v-if="isExternal" class="link" :href="to" v-on="$listeners"><slot /></a>
  <RouterLink v-else class="link" v-bind="$props" v-on="$listeners">
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
  @apply cursor-pointer underline transition-colors text-indigo-500 hover:text-indigo-700 focus:text-indigo-700;
}
</style>
