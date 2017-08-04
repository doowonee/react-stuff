const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/www/index.html',
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      { test: /\.jsx?/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader:[
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false so that's the reason why failed before
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true, disable: false}),
    HtmlWebpackPluginConfig
  ]
}