const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/js/app.js',
    todos: './src/js/todos.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // (the common chunk name)

      filename: "commons.js",
      // (the filename of the common chunk)

      // minChunks: 3, 
      // (Modules must be shared between 3 entries)

      chunks: ["index", "todos"]
      // (Only use these entries)
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new webpack.optimize.UglifyJsPlugin({
      // minimize codes
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['commons', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'todos.html',
      template: 'src/todos.html',
      chunks: ['commons', 'todos']
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};