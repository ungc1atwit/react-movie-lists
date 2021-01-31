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
            use: ["babel-loader", 'eslint-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            
        ]
    },
    plugins: [htmlPlugin],
};