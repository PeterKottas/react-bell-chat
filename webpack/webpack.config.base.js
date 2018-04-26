const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim().toString() == 'local';

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: './src/lib/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader?silent=true'
            }
        ]
    },
    output:
        {
            path: path.join(__dirname, '../lib'),
            filename: '[name].js',
            publicPath: '../lib/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
            libraryTarget: 'umd'
        },
    plugins: [
        new CheckerPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative('../lib', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        }),
        new DtsBundlePlugin()
    ]
};

function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'react-chat-ui',
            main: 'src/lib/index.d.ts',
            out: '../index.d.ts',
            //removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
};