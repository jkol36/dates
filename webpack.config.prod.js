var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      minimize: true
    })
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
        modules: true,
        camelCase:true,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
          return 'whatever_random_class_name'
        }
      },
      use: ['css-loader', 'style-loader']
    }]
  }
};
