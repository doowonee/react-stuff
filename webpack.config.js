const path = require('path'); //Node's built-in path module

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

// webpack 2.x | babel-loader >= 7.x (recommended) (^6.2.10 will also work, but with deprecation warnings)

module.exports = {
  entry: './src/entry.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      { test: /\.jsx?/, loader: 'babel-loader', exclude: /node_modules/ }, // Rule.loader is a shortcut to Rule.use: [ { loader } ]
      //{ test: /\.exec\.js$/,  use: [ 'script-loader' ]  }, 
      //https://webpack.js.org/guides/shimming/ for scoll smooth
      // https://webpack.js.org/configuration/module/
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false so that's the reason why failed before
              // sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}