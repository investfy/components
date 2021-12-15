<template>
  <div class="relative inline-block rounded-full">
    <img
      class="inline object-cover rounded-full"
      :class="computedSize"
      :src="src"
      :alt="title"
      :title="title"
    />
    <span
      v-if="status"
      class="absolute inline-block border-white rounded-full bottom-0"
      :class="computedStatus"
    />
  </div>
</template>

<script>
export default {
  name: "IfyAvatar",

  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "md",
      validator(str) {
        return [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
        ].includes(str);
      },
    },
    status: {
      type: String,
      default: null,
      validator(str) {
        return ["online", "busy", "away", "offline"].includes(str);
      },
    },
  },

  computed: {
    computedSize() {
      switch (this.size) {
        case "xs":
          return "w-6 h-6";
        case "sm":
          return "w-8 h-8";
        case "lg":
          return "w-14 h-14";
        case "xl":
          return "w-20 h-20";
        case "2xl":
          return "w-24 h-24";
        case "3xl":
          return "w-28 h-28";
        case "4xl":
          return "w-32 h-32";
        case "5xl":
          return "w-36 h-36";
        case "md":
        default:
          return "w-10 h-10";
      }
    },
    computedStatus() {
      let cssClass = "";

      switch (this.status) {
        case "online":
          cssClass = "bg-green-600";
          break;
        case "busy":
          cssClass = "bg-red-600";
          break;
        case "away":
          cssClass = "bg-yellow-500";
          break;
        case "offline":
          cssClass = "bg-gray-200";
          break;
        default:
          break;
      }

      switch (this.size) {
        case "xs":
          cssClass += " right-0 w-2 h-2 border";
          break;
        case "lg":
          cssClass += " right-0 w-4 h-4 border-2";
          break;
        case "xl":
        case "2xl":
          cssClass += " right-2 w-4 h-4 border-2";
          break;
        case "3xl":
          cssClass += " right-2 w-5 h-5 border-2";
          break;
        case "4xl":
        case "5xl":
          cssClass += " right-4 w-5 h-5 border-2";
          break;
        case "sm":
        case "md":
        default:
          cssClass += " right-0 w-3 h-3 border-2";
          break;
      }

      return cssClass;
    },
  },
};
</script>
