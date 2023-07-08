const path = require('path');
const { mergeWithCustomize } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var _ = require('lodash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let htmlPluginOptions = {
  alwaysWriteToDisk: true,
  filename: 'index.html',
  template: './src/demo/index.template.ejs',
};

module.exports = mergeWithCustomize({
  customizeArray(a, b, key) {
    if (key === 'plugins') {
      a = _.remove(a, function (plugin) {
        // console.log(JSON.stringify(plugin));
        return !(plugin.options && plugin.options.filename === '[name].css');
      });
      return a.concat(b);
    }

    // Fall back to default merging
    return undefined;
  },
  customizeObject(a, b, key) {
    if (key === 'entry') {
      // Custom merging
      return b;
    }

    if (key === 'output') {
      // Custom merging
      return b;
    }

    // Fall back to default merging
    return undefined;
  },
})(require('./webpack.config.base'), {
  entry: {
    main: './src/demo/index.tsx',
  },
  output: {
    path: path.join(__dirname, '..', 'docs'),
    publicPath: '/react-bell-chat',
    filename: 'dist/[name].[hash].js',
  },
  externals: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(htmlPluginOptions),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/demo/assets/favicon/icons',
          to: 'dist/icons',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/[name].[hash].css',
    }),
  ],
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
