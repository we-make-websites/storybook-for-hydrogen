const { mergeConfig } = require("vite")
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

module.exports = {
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
      ],
      define: {
        __HYDROGEN_TEST__: true,
        __HYDROGEN_DEV__: true,
      }
    })
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  },
}