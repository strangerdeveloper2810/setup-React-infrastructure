// config/webpack/webpack.common.js
'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: paths.appIndexJs,
    output: {
        filename: 'static/js/[name].[contenthash].js',
        path: paths.appBuild,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml, // Đảm bảo rằng đường dẫn này đúng
            filename: 'index.html', // Đảm bảo rằng tên file là index.html
        }),
        new CleanWebpackPlugin(),
    ],
};