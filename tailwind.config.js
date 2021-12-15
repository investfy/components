module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.vue"],
  darkMode: false,
  presets: [require("@investfy/tailwind")],
  variants: {
    extend: {
      margin: ["last"],
    },
  },
  plugins: [],
};
