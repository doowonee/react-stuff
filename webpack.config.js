const path = require('path'); //Node's built-in path module

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: './src/entry.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}