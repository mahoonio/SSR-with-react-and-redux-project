const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
  // inform webpack that we are building a bundle for node js not the browser.
  target: 'node',

  //root file of our server application
  entry: './src/index.js',

  // tell webpack where to put the output file when generated

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
