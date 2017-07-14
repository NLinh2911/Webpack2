const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
})

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
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
      use: extractPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    }]
  },
  plugins: [extractPlugin]
};