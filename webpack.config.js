/* eslint-disable @typescript-eslint/no-require-imports */
/**
* @file: config
 * @author: zhangyadi@baidu.com
 * @Date: 2020-04-27 12:20:42
 * @Last Modified by: zhangyadi@baidu.com
 * @Last Modified time: 2020-04-27 18:03:29
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.tsx',
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-modules-typescript-loader',
                    options: {
                        mode: 'emit'
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'sass-loader' // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, // 是否压缩
        port: 8080, // 端口号
        host: '0.0.0.0', // 外部服务器可以访问
        open: true // 是否运行时打开浏览器
    },
    plugins: [
        // 该插件将为你生成一个HTML5文件，其中包括使用script标签的body中的所有webpack包
        // 安装npm install --save-dev html-webpack-plugin
            new HtmlWebpackPlugin({
                title: '标题', // 用于生成的HTML文档的标题
                template: './index.html'// 默认index.html位置
            })
        ]
};
