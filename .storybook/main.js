const path = require('path');

const resolve = p => path.join(process.cwd(), p);
module.exports = {
  webpackFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': resolve('node_modules/@emotion/react'),
      '@emotion/styled': resolve('node_modules/@emotion/styled'),
      'emotion-theming': resolve('node_modules/@emotion/react'),
    };
    return config;
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
};
