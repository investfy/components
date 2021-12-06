<template>
  <img :src="filename" alt="Logotipo Investfy" />
</template>

<script>
export default {
  name: "Logo",

  props: {
    type: {
      type: String,
      default: "horizontal",
      validator(str) {
        return ["horizontal", "mini"].includes(str);
      },
    },
  },

  computed: {
    filename() {
      return require(`./logo-${this.type}.svg`);
    },
  },
};
</script>
