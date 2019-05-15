# In-depth-study-webpack4
- webpack4 学习笔记

## webpack 的安装
- 新建文件夹 npm init 初始化文件
- 全局安装
  - npm install webpack webpack-cli -g
- 局部安装
  - npm install webpack webpack-cli --save-dev
  - npx -V 检查是否安装成功

## webpack 基本配置文件
  - webpack.config.js 
    - mode 
      - development
      - production
    - entery 入口文件
    - output 打包文件
      - filename: name
      - path: 绝对路径

## loader -- 打包方案
  > webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

## 图片文件的打包
  - file-loader
  - url-loader
  > [官方文档] (https://www.webpackjs.com/loaders/url-loader/)

## css 打包
  - css-loader
    - importLoaders  > 引入的文件 进行从下往上的 编译
    - modules > 模块化  
  - style-loader
  - postcss-loader
    - postcss.config.js 
      > autoprefixer
  - file-loader
    - 字体文件的打包编译

## plugins 插件
  > webpack 有着丰富的插件接口(rich plugin interface)。webpack 自身的多数功能都使用这个插件接口。这个插件接口使 webpack 变得极其灵活。
  - html-webpack-plugin
    - 简化了HTML文件的创建，以便为你的webpack包提供服务。这对于在文件名中包含每次会随着编译而发生变化哈希的 webpack bundle 尤其有用。 你可以让插件为你生成一个HTML文件，使用lodash模板提供你自己的模板，或使用你自己的loader。
  - clean-webpack-plugin 清楚文件

## entry output
  - entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。
    - 简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。
    - entry: {
      - home: "./home.js",
      - about: "./about.js",
      - contact: "./contact.js"
    - }
  - output  output 位于对象最顶级键(key)，包括了一组选项，指示 webpack 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」。

## SourceMap 
  > 是一个映射关系 -- 知道哪一行代码出错了 
  - devtool 配置 SourceMap
  - dev cheap-module-eval-source-map
  - pro cheap-module-source-map

## webpack-dev-server
  > 提供了一个简单的Web服务器和使用实时重新加载的能力
  - host: "0.0.0.0"
  - hot: true 
    > 启用 webpack 的模块热替换特性
  - port: 8080
    > 指定要监听请求的端口号：
  - open: true
    > 打开网页
  - proxy: {}
    > 请求代理 -- （https://www.webpackjs.com/configuration/dev-server/#devserver-proxy）
  - hotOnly: true
    > 在没有页面刷新的情况下启用热模块替换（请参阅devServer.hot）作为构建失败时的后备。

##  模块热替换 （https://www.webpackjs.com/guides/hot-module-replacement/）
  > 模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。本页面重点介绍实现，而概念页面提供了更多关于它的工作原理以及为什么它有用的细节。
  - hot: true
  - new webpack.HotModuleReplacementPlugin()
    > (https://www.webpackjs.com/api/hot-module-replacement/)

## babel 处理Es6
  - babel-loader
  - @babel/runtime-corejs2
  - 配置babel
    - 业务组件
      - @babel/preset-env
      - core-js
      - @babel/polyfill
      - presets: [
             [
               "@babel/preset-env",
              {
                targets: {
                   edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1"
                },
                useBuiltIns: "usage"
               }
             ]
         ]
    - 库代码
        "plugins": [
          [
            "@babel/plugin-transform-runtime",
            {
              "absoluteRuntime": false,
              "corejs": 2,
              "helpers": true,
              "regenerator": true,
              "useESModules": false
            }
          ]
        ]
  - .babelrc

## react 配置
  > (https://www.babeljs.cn/docs/babel-preset-react)

## Tree Shaking
  - 只支持 ES Module 语法的 引入
  - Dev --> optimization: {
      usedExports: true
    } 
  - package.json --> sideEffects: ['@babel/polyfill', 'css']

## Development Production 区分打包
  - webpack-merge 合并 webpack.config.js


