<template>
  <div class="ifytags"><slot /></div>
</template>

<script>
export default {
  name: "IfyTagList",
};
</script>

<style lang="postcss">
.ifytags {
  @apply inline-flex items-center justify-start flex-wrap last:-mb-2;
}
</style>
