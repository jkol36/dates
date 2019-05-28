var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'eval',
  entry: [
    // necessary for hot reloading with IE:
    'babel-polyfill',
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve:{
    root: [
      path.resolve('./src')
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.less$/,
      loader: "style!css!less?strictMath&noIeCompat",
      include: path.join(__dirname, 'src')
    }, {
      test:/\.css$/,
      loader:'css-loader',
      options: {
        modules: true
      },
      use: ['css-loader', 'style-loader']
    }]
  }
};
