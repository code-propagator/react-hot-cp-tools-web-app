var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'app/win/out')
var APP_DIR = path.resolve(__dirname, 'app')

let config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/win/renderer.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: APP_DIR
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader?modules' ]
      }]
  }
}

module.exports = config
