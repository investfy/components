<template>
  <IfyAppBar brand-link="/" class="mb-8" />
</template>

<script>
export default {
  name: "AppBarPage",

  data() {
    return {
      isDropdownActive: false,
    };
  },

  watch: {
    $route() {
      this.isDropdownActive = false;
    },
  },
};
</script>
