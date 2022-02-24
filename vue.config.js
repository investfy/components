const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/components/" : "/",
  transpileDependencies: true,
  chainWebpack(config) {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("svg-url-loader").loader("svg-url-loader");

    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options = {}) => Object.assign(options, { limit: Infinity }));
  },
});
