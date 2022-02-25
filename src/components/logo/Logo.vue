<template>
  <img v-if="image !== false" :src="image" :alt="description" />
  <div v-else>{{ description }}</div>
</template>

<script>
export default {
  name: "IfyLogo",

  props: {
    orientation: {
      type: String,
      default: "horizontal",
      validator(str) {
        return ["horizontal", "mini"].includes(str);
      },
    },
    color: {
      type: String,
      default: "colored",
      validator(str) {
        return ["colored", "inverted", "white", "black"].includes(str);
      },
    },
    description: {
      type: String,
      default: "Logotipo Investfy",
    },
  },

  computed: {
    image() {
      if (!this.orientation || !this.color) return "";
      return require(`./logo-${this.orientation}-${this.color}.svg`);
    },
  },
};
</script>
