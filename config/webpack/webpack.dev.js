// config/webpack/webpack.dev.js
'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: paths.appPublic, // Thay thế contentBase bằng static
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
});