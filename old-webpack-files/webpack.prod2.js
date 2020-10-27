const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'production',

    entry: './src/app.js',

    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'none',

    module: {
        rules: [
    
          // First Rule
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
    
          // Second Rule
          {
            test: /\.s?css$/,
            loader: 'style-loader!css-loader!sass-loader'
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'file-loader',
            exclude: /(node_modules)/
            /*include: path.resolve(__dirname, 'src'),
            options: {
                name: '[name].[hash].[ext]',
                outputPath: "img"
            }*/
          }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/template.html',
       // favicon: 'public/favicon.ico'
      })
    ],
};