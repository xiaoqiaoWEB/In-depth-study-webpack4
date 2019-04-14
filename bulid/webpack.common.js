const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    //sub: './src/index.js'
  },
  output: {
    //publicPath: 'http//:www.cdn.cn',
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules:[
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
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
        loader: 'file-loader'
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: true
          }
        }, 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ]
}