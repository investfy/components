module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  framework: "@storybook/vue",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.postcss$/,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        require.resolve("postcss-loader"),
      ],
    });

    return config;
  },
};
