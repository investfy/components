<template>
  <div class="buttons">
    <slot />
  </div>
</template>

<script>
export default {
  name: "IfyButtonsGroup",
};
</script>

<style lang="postcss" scoped>
.buttons {
  @apply flex items-center justify-start flex-wrap mb-4 last:mb-0;
}
</style>
