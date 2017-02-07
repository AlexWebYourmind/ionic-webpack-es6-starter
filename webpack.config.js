var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'www/src')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1000000
          } // Convert images < 10k to base64 strings
        }]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
};
