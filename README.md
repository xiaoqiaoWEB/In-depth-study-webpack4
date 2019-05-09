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

## loader
  > webpack 可以使用 loader 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

