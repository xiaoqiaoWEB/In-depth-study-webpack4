const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const fs = require('fs')

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll'))
files.forEach((item) => {
  if(/.*\.dll.js/.test(item)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll', item)
    }))
  }
  if(/.*\.manifest.json/.test(item)) {
		plugins.push(new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll', item)
		}))
	}
})

module.exports = {
  entry: {
    main: './src/index.js',
    //sub: './src/index.js'
  },
  output: {
    //publicPath: 'http//:www.cdn.cn',
    // filename: '[name].js',
    // chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
		extensions: ['.js', '.jsx'],
	},
  module: {
    rules:[
      { 
        test: /\.js$/, 
        include: path.resolve(__dirname, '../src'),
        loader: "babel-loader",
        //options: {
          // 业务组件
          // presets: [
          //   [
          //     "@babel/preset-env",
          //     {
          //       targets: {
          //         edge: "17",
          //         firefox: "60",
          //         chrome: "67",
          //         safari: "11.1"
          //       },
          //       useBuiltIns: "usage"
          //     }
          //   ]
          // ]
          // 库代码
          // "plugins": [
          //   [
          //     "@babel/plugin-transform-runtime",
          //     {
          //       "absoluteRuntime": false,
          //       "corejs": 2,
          //       "helpers": true,
          //       "regenerator": true,
          //       "useESModules": false
          //     }
          //   ]
          // ]
        //} 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
            limit: 204800     //2KB 2048
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        } 
      }
    ]
  },
  optimization: { //类库代码分割
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
      	vendors: {
      		test: /[\\/]node_modules[\\/]/,
      		priority: -10,
      		name: 'vendors',
      	}
      }
    }
  },
  plugins,
  performance: false,
  output: {
		path: path.resolve(__dirname, '../dist')
	}
}