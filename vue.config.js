const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/components/" : "/",
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.set("parser", {
      dataUrlCondition: { maxSize: Infinity },
    });

    config.module.rule("images").set("parser", {
      dataUrlCondition: { maxSize: Infinity },
    });
  },
});
