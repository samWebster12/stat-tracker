const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
        filename: 'bundle.[contenthash].js'
    },
    plugins: [new CleanWebpackPlugin({
        exclude: ["/public/images"]
    })],
    devtool: 'none'
});