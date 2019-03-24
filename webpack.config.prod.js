'use strict'

const {VueLoaderPlugin} = require('vue-loader');
const {StyleLoaderPlugin} = require('style-loader');
const {CssLoaderPlugin} = require('css-loader');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/js/main.js',
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    optimization: {
        minimizer: [
            new UglifyJsWebpackPlugin({
                uglifyOptions: {
                    output: {
                        comments: false,
                    },
                },
                cache: false,
                parallel: true,
                sourceMap: false,
            }),
        ],
    },
};
