const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const conf = require('./conf');
var config = {
    // entry: conf.getEntries(conf.pageDir),
    entry: "./src/index.js",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: {
        'react': 'React'
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src']
                }
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            }),
            exclude: /node_modules/
        },
        {
            test: /\.(gif|jpg|jpeg|png|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]'
                }
            }]
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("[name].css"),
    ],
};
// fs.readdirSync(conf.pageDir).forEach(i => {
//     config.plugins.push(new HtmlWebpackPlugin({
//         filename: i + '.html',
//         title: i,
//         template: "./src/pages/" + i + "/index.html"
//     }), )
// })
module.exports = config