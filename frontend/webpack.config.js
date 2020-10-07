const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(jsx||js)$/,
                use: 'babel-loader',
                exclude: /node_module/,
                resolve: {
                    extensions: ['.js', '.jsx']
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: 'src',
        inline: true
    },
    plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
    ]
}