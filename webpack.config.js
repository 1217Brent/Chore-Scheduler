const path = require("path");
const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob")

module.exports = {
    entry: {
        "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
    },
    output: {
        filename: "build/static/js/bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', "sass-loader"],
            },
        ],
    },
    plugins: [new UglifyJsPlugin(), new HtmlWebpackPlugin()],
}