const path = require('path');
const { merge } = require('webpack-merge');
var webpack = require('webpack');
// const SmartBannerPlugin = require('smart-banner-webpack-plugin');
// const banner = require('./../license');
// const CopyPlugin = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV;
const baseConfig = {
    entry: "./build/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    // node: {
    //     global: false,
    //     __filename: false,
    //     __dirname: false,
    // },
    plugins: [
        // new SmartBannerPlugin(banner),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'build_helper', to: '' },
        //     ],
        // }),
    ]
}

function createConfigsForAllLibraryTarget() {
    const libraryTarget = [
        {
            type: "var",
            name: isDev ? 'lib.js' : 'lib.min.js'
        }, {
            type: "commonjs2",
            name: isDev ? 'lib.commonjs2.js' : 'lib.commonjs2.min.js'
        }
    ];
    const getConfigForTaget = function (target) {
        return {
            output: {
                path: path.join(process.cwd(), "./dist"),
                filename: target.name,
                library: 'PolygonTokenAssets',
                // libraryExport: 'default',
                libraryTarget: target.type
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': process.env.NODE_ENV
                }),
            ],
            mode: process.env.NODE_ENV,
            devtool: 'source-map',
        }
    }
    var configs = [];
    libraryTarget.forEach(function (target) {
        configs.push(merge(baseConfig, getConfigForTaget(target)));
    })
    return configs;
}

module.exports = createConfigsForAllLibraryTarget()
