<template>
  <div class="field"><slot /></div>
</template>

<script>
export default {
  name: "IfyField",
};
</script>

<style lang="postcss" scoped>
.field {
  @apply mb-3 last:mb-0;
}
</style>
