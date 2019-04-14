const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  // production
  //devtool: 'cheap-module-source-map',
}

module.exports = merge(webpackCommon, prodConfig)