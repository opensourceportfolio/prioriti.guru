/* eslint object-shorthand: [0] */
const path = require('path');
const cssnext = require('postcss-cssnext');
const precss = require('precss');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: ['./src/root.js'],

  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loaders: ['babel'],
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'osp.effai',
      filepath: path.join(__dirname, 'dist/sw.js'),
    }),
  ],

  resolve: {
    modulesDirectories: [
      'src', 'node_modules'
    ],
    root: path.resolve('./src'),
    extensions: [
      '', '.js'
    ],
    alias: {
      'lib/debounce': 'debounce',
      'lib/idb': 'idb',
      'lib/react': 'react',
      'lib/react-dom': 'react-dom',
      'lib/react-redux': 'react-redux',
      'lib/react-router': 'react-router',
      'lib/redux': 'redux',
      'lib/idb': 'idb',
      'lib/react-swipeable-views': 'react-swipeable-views',
      'lib/uuid': 'node-uuid',
    }
  },

  postcss: function() {
    return [cssnext, precss];
  }
};
