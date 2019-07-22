const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = {
    // entry : './src/app.js',
    module : {
        rules : [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: false } },
                    { loader: 'sass-loader', options: { sourceMap: false } }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    // devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
        
    ],
    output: {
      filename: (chunkData) => {
        return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
      },
    }
};