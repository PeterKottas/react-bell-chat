const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');

module.exports = merge(
    {
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
        }
    }
)(require('./webpack.config.base'), {
    entry:
    {
        'main': './src/demo/ClientApp/Main.tsx'
    },
    output: {
        path: path.join(__dirname, '..', 'docs', 'dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    externals: {}
});
