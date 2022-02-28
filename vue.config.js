const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/components/" : "/",
  transpileDependencies: true,
  chainWebpack: (config) => {
    ['svg', 'images', 'media', 'fonts'].forEach(asset => {
      config.module
        .rule(asset)
        .delete('generator')
        .set('type', 'asset/inline')
    })
  },
});
