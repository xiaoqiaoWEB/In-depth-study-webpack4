const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: "library",
    libraryTarget: "umd"
  },
  externals: {
    jquery: 'jQuery',
    lodash: {
      commonjs: 'lodash',
      amd: 'lodash',
    }
  }
}