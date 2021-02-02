const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src", "app.html")
});

const outputDirectory = "dist";

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "app.js")},
    output: { 
        path: path.join(__dirname, outputDirectory),
        filename: "bundle.js"
    },
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
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "api/": {
                target: "http://localhost:8080"
            }
        }
    },
    plugins: [htmlPlugin],
};