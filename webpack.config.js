const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "index.html"
});

// const APP_DIR = path.resolve(__dirname, "./src/");

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    },
    entry: {
        'index': [path.resolve(__dirname, 'src/index.js')]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=[path][name].[ext]?[hash]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src")],
                query: {
                    presets: ['react', 'es2015', 'react-hmre'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [htmlWebpackPlugin]
};
