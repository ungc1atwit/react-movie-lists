const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src", "app.html")
});

const outputDirectory = "dist";

module.exports = () => {
    return {
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
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "fonts/"
                            }
                        }
                    ]
                },
                
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
        plugins: [
            htmlPlugin,
            new webpack.DefinePlugin(envKeys)
        ]
    }
};
