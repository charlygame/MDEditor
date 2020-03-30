const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env',"@babel/react"]
                    }
                }]
            },
            { test: /\.css$/i, loader: 'style-loader!css-loader'},
            { test: /\.less$/i, use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                }]
            },
            {test: /\.(jpg|jpeg|png|gif|svg)/, use: 'url-loader?limit=50000&name=img/[name].[hash].[ext]'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Markdown Editor',
            template: './index.ejs'
        })
    ]
}