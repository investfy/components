<template>
  <div class="tags"><slot /></div>
</template>

<script>
export default {
  name: "IfyTagList",
};
</script>

<style lang="postcss" scoped>
.tags {
  @apply flex items-center justify-start flex-wrap last:-mb-2;
}
</style>
