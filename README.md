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

## 图片文件的打包
  - file-loader
  - url-loader
  > [官方文档] (https://www.webpackjs.com/loaders/url-loader/)

