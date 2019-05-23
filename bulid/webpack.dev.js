const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}]
	},
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
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
	}
}

module.exports = merge(webpackCommon, devConfig)
