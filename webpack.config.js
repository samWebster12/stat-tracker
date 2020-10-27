const path = require('path');

module.exports = {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            exclude: /(node_modules)/,
            loader: 'style-loader!css-loader!sass-loader'
            
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'file-loader',
            exclude: /(node_modules)/,
            options: {
                name: '[name].[hash].[ext]',
                outputPath: "img",
                publicPath: "img"
            }
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader',
        }]
    },

   /* plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })], */
    
    //cheap-module-eval-source-map
    devtool: 'none',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
};