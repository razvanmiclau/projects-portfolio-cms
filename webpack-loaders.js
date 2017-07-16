"use strict";

const path = require('path');
const webpack = require('webpack');

exports.devServer = function(options) {
    return {
        devServer:{
            historyApiFallback: true,
            hot: true, // Enable hot module
            inline: true,
            stats: 'errors-only',
            host: options.host, // http://localhost
            port: options.port, // 3000
            contentBase: './public',
        },
        // Enable multi-pass compilation for enhanced performance
        plugins: [ // Hot module
            new webpack.HotModuleReplacementPlugin({
                multistep: true
            })
        ]
    };
}
// the css loader
exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: path.join(__dirname, './public/css')
}
// The file loader
exports.font = {
  test: /\.ttf$/,
  loaders: ['file-loader']
}
// Babel loader
exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: ['babel-loader']
};
