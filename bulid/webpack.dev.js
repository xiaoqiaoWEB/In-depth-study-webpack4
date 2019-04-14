const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // production
  //devtool: 'cheap-module-source-map',
  devServer: {
    contentBase:  path.join(__dirname, "dist"),
    open: true,
    port: 3000,
    hot: true,
    //hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(webpackCommon, devConfig)
