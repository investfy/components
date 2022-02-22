<template>
  <div class="space-y-4">
    <div v-for="type in types" :key="type">
      <span v-for="size in sizes" :key="size">
        <IfyIcon icon="camera" :type="type" :size="size" />
        &nbsp;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",

  computed: {
    types() {
      return ["primary", "success", "warning", "danger", "info"];
    },
    sizes() {
      return ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
    },
  },
};
</script>
