const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const config = {
  //root file of our server application
  entry: './src/client/client.js',

  // tell webpack where to put the output file when generated

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);
