const merge = require('webpack-merge');
const FractalWebpackPlugin = require('fractal-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = env => {
  const plugins = [
  ];

  if (env && env.ci) {
    plugins.push(
      new FractalWebpackPlugin({
        mode: 'build'
      })
    );
  }

  return merge(common, {
    mode: 'production',
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin({})
      ]
    },
    plugins
  });
};
