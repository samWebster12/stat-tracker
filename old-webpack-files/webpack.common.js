const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
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
    
};
