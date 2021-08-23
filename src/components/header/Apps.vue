<template>
  <div ref="apps" class="relative">
    <button
      type="button"
      title="Aplicativos"
      @click="isOpen = !isOpen"
      class="
        relative
        flex
        items-center
        justify-center
        w-10
        h-14
        text-brand
        focus:outline-none
        hover:bg-gray-100
        focus:bg-gray-100
      "
    >
      <fa icon="th" />
    </button>

    <div v-show="isOpen" class="balloon z-20 top-16">
      <fa icon="caret-up" size="lg" class="caret-balloon -top-3.5" />

      <div class="p-2 text-center">
        <a
          :href="quantUrl"
          class="block w-12 h-12 p-1 box-content rounded-xs overflow-hidden hover:bg-gray-200"
        >
          <img src="../../assets/quant-logo.svg" alt="Quant" class="w-full" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apps",

  props: {
    authToken: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isLoading: false,
      isOpen: false
    };
  },

  watch: {
    $route() {
      this.isOpen = false;
    }
  },

  methods: {
    close(e) {
      if (this.$refs.apps && !this.$refs.apps.contains(e.target)) {
        this.isOpen = false;
      }
    }
  },

  mounted() {
    document.addEventListener("click", this.close);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },

  computed: {
    quantUrl() {
      const token = Buffer.from(this.authToken).toString("base64");
      return `${process.env.VUE_APP_QUANT_URL}?token=${token}`;
    }
  }
};
</script>
