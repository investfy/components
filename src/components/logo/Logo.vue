<template>
  <img :src="filename" :alt="description" />
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
        return ["colored", "white", "mono"].includes(str);
      },
    },
    description: {
      type: String,
      default: "Logotipo Investfy",
    },
  },

  computed: {
    filename() {
      return require(`./logo-${this.orientation}-${this.color}.svg`);
    },
  },
};
</script>
