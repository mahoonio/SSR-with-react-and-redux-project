module.exports = {
  // tell webpack to run babel on every file it runs through.
  module: {
    rules: [
      {
        // only run babel on js files
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // this is also regex
        options: {
          presets: [
            'react', // handling jsx and react code
            'stage-0', // handling async js code that we will right later on
            ['env', { targets: { browsers: ['last 2 versions'] } }],
            // env is kind of a master preset that webpack uses
            // and it tells that run all the different transform rules
            // needed to meet the requirements of the latest 2 versions of
            // all popular browsers!
          ],
        },
      },
    ],
  },
};
