<template>
  <span class="px-2" :class="[computedType, computedSize]"><slot /></span>
</template>

<script>
export default {
  name: "IfyTag",

  props: {
    type: {
      type: String,
      default: "md",
      validator(str) {
        return ["xs", "sm", "md", "lg", "xl"].includes(str);
      },
    },
    size: {
      type: String,
      default: "default",
      validator(str) {
        return ["default", "success", "warning", "danger", "info"].includes(
          str
        );
      },
    },
  },

  computed: {
    computedType() {
      switch (this.type) {
        case "success":
          return "text-green-900 bg-green-200";
        case "warning":
          return "text-yellow-800 bg-yellow-200";
        case "danger":
          return "text-red-800 bg-red-200";
        case "info":
          return "text-indigo-800 bg-indigo-200";
        case "default":
        default:
          return "text-gray-800 bg-gray-200";
      }
    },

    computedSize() {
      switch (this.size) {
        case "xs":
          return "text-xs rounded-xs";
        case "sm":
          return "text-sm rounded-md";
        case "lg":
          return "text-lg rounded-sm";
        case "xl":
          return "text-xl rounded-sm";
        case "md":
        default:
          return "rounded-md";
      }
    },
  },
};
</script>
