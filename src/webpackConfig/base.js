const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();
const resolve = (...args) => {
    return path.join(cwd, ...args);
}

module.exports = {
    mode: 'development',
    entry: resolve('./src/entrys/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preser-env'
                    ]
                }
            },
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('./src/entrys/index.html')
        })
    ]
}