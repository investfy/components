module.exports = {
  purge: ["./src/**/*.{js,vue}"],
  presets: [require("@investfy/tailwind")],
  variants: {
    extend: {
      margin: ["last"],
    },
  },
};
