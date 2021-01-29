const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src", "index.html")
});

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js")},
    module:{
        rules:[
            {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: ["babel-loader"]
            }
        ]
    },
    plugins: [htmlPlugin],
};