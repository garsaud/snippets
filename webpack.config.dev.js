'use strict'

const {VueLoaderPlugin} = require('vue-loader');
const {StyleLoaderPlugin} = require('style-loader');
const {CssLoaderPlugin} = require('css-loader');

module.exports = {
    mode: 'development',
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
};
