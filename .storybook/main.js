const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.*"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-viewport/register",
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-toolbars'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // 新增@别名
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, '../src')
  })

    // Return the altered config
    return config;
  },
}