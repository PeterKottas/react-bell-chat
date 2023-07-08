const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
  plugins: [],
  externals: {
    react: 'react',
  },
  devtool: 'source-map',
  mode: 'development',
});
