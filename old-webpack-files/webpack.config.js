const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
        filename: 'bundle.[contenthash].js'
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }),       new CleanWebpackPlugin({
        exclude: ["/public/images"]
    })],

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            loader: 'style-loader!css-loader!sass-loader'
            
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader',
            options: {
                minimize: false,
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            include: path.join(__dirname, 'src'),
            options: {
                name: '[name].[hash].[ext]',
                outputPath: "img"
            }
        }]
    },
    devtool: 'none',//devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
