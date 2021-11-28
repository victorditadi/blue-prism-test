/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const path = require('path');

const nextConfig = {
  cssLoaderOptions: {
    url: false,
  },
  sassLoaderOptions: {
    includePaths: ['./src'],
  },
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
  webpack(config) {
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve('./node_modules/react-dom');
    config.resolve.alias['styled-components'] = path.resolve('./node_modules/styled-components');

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
