const path = require('path');
const webpack = require('webpack');
var isLocalBuild = process.env.NODE_ENV === 'local';
const { mergeWithCustomize } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var _ = require('lodash');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let htmlPluginOptions = {
  alwaysWriteToDisk: true,
  filename: 'index.html',
  template: './src/demo/index.template.ejs',
};

const clientOutputDir = path.join(__dirname, '..', 'src', 'demo', 'wwwroot');

module.exports = mergeWithCustomize({
  customizeArray(a, b, key) {
    if (key === 'plugins') {
      a = _.remove(a, function (plugin) {
        return !(plugin.filename && plugin.filename === '[name].css');
      });
      return a.concat(b);
    }

    // Fall back to default merging
    return undefined;
  },
  customizeObject(a, b, key) {
    if (key === 'entry') {
      return b;
    }

    // Fall back to default merging
    return undefined;
  },
})(require('./webpack.config.base'), {
  resolve: {
    alias: {
      // 'react-dom': '@hot-loader/react-dom'
    },
  },
  entry: { index: './src/demo/index.tsx' },
  output: {
    path: clientOutputDir,
    publicPath: '/',
    filename: 'dist/[name].[hash].js',
  },
  externals: {},
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, clientOutputDir),
    },
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
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
    /*new Serve({
      port: 8080,
      static: clientOutputDir,
      open: true,
      host: 'localhost',
      progress: false,
      hmr: true,
      historyFallback: true,
    }),*/
    new ReactRefreshWebpackPlugin(),
  ],
});
