<template>
  <div class="ifybuttons">
    <slot />
  </div>
</template>

<script>
export default {
  name: "IfyButtonsGroup",
};
</script>

<style lang="postcss">
.ifybuttons {
  @apply flex items-center justify-start flex-wrap mb-4 last:mb-0;

  .ifybutton {
    @apply mb-2;

    &:not(:last-child):not(.ifybutton--fullwidth) {
      @apply mr-2;
    }
  }
}
</style>
