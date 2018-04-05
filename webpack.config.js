var path = require('path');
var ExtractTestPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTestPlugin({
  filename: 'main.css'
});
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
// var webpack = require('webpack');
module.exports = {
  entry: {
    main:'./src/js/main.js'
    // user: './src/js/user.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
      // chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'user.html',
    //   template: 'src/user.html',
    //   chunks: []
    // }),
    new CleanWebpackPlugin(['dist'])

  ]
};