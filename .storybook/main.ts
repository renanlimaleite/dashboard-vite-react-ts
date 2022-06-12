const { resolve } = require('path')

const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    "../src/ui/**/*.stories.mdx",
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
    "builder": "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
  viteFinal: async (config, { configType }) => {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../.vite.config.js')
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
