const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const extractPlugin = new ExtractTextPlugin({
//   filename: 'style.css'
// })
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/js/app.js',
    todos: './src/js/todos.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
    })
  ]
};