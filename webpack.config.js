const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env',"@babel/react"]
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Markdown Editor',
            template: './index.ejs'
        })
    ]
}