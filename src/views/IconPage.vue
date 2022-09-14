<template>
  <div>
    <div class="space-y-4">
      <span v-for="size in sizes" :key="size">
        <IfyIcon icon="camera" :size="size" />
        &nbsp;
      </span>
    </div>

    <div>
      <IfyIcon icon="circle-notch" size="2xl" spin />
    </div>
  </div>
</template>

<script>
export default {
  name: "IconPage",

  computed: {
    sizes() {
      return ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
    },
  },
};
</script>
