<template>
  <a
    v-if="isExternal"
    class="transition-colors"
    target="_blank"
    rel="nofollow"
    :href="to"
    v-on="$listeners"
    ><slot
  /></a>
  <RouterLink
    v-else
    class="transition-colors"
    v-bind="$props"
    v-on="$listeners"
  >
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
