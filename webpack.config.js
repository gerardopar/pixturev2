// * importing modules 
const path = require('path'); // * absolute path

// * importing plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // * generates a css file
const HtmlWebpackPlugin = require('html-webpack-plugin'); // * generates an html file
const CleanWebpackPlugin = require('clean-webpack-plugin'); // * cleans unused files in the build directory
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // * minifies css
const TerserPlugin = require('terser-webpack-plugin'); // * minifies javascript

// * webpack mode
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development', // sets the webpack mode
    entry: ['@babel/polyfill', './src/index.js'], // webpack entry point
    output: {
        filename: 'bundle.js', // webpack output file
        path: path.resolve(__dirname, 'public') // webpack output point / directory
    },
    module: { // # loaders
        rules: [
            { // # js loader 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            { // # styles loader
                test: /\.scss$/,  // tests for a sass file
                use: [
                    MiniCssExtractPlugin.loader, // compiles CSS into a seperate file
                    // ! remove style-loader if using miniCssExtractPlugin
                    // { loader: "style-loader" }, // injects CSS into the DOM
                    { loader: "css-loader" }, // translates CSS into CommonJS
                    { loader: "sass-loader" } // compiles Sass to CSS, using Node Sass by default
                    ]
            },
            { // # file loader
                test: /\.(png|svg|jpg|gif)$/,  // tests for an img
                use: [
                    { loader: "file-loader" }
                ]
            }
        ]
    },
    optimization: { // # optimization
        minimizer: [
            new OptimizeCssAssetsPlugin(), // minifies css
            new TerserPlugin() // minifies javascript
        ]
    },
    plugins: [ // # plugins
        new MiniCssExtractPlugin({ // generates a css file
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        // // ! remove htmlWebpackPlugin if building a site using plain html
        // new HtmlWebpackPlugin({ // generates an html file with bundles injected
        //     title: "Pixture",
        //     favicon: "./src/assets/img/favicon.png",
        //     template: "./src/assets/template/index.html",
        //     minify: {
        //         removeAttributeQuotes: false,
        //         collapseWhitespace: true,
        //         removeComments: true
        //     }
        // }),
        // new CleanWebpackPlugin(), // cleans unused files in the build directory
    ],
    // # development
    devServer: { // webpack development server
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        open: 'Google Chrome'
    },
    devtool: 'source-map', // source maps for debugging
    mode : devMode ? 'development' : 'production' // webpack mode
};