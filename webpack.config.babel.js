// ./webpack.config.babel.js
const path = require('path');

module.exports = {
  entry: "./src/es6/bugo-origin.js",
  output: {
    path: path.resolve(__dirname, "assets", "js"),
    filename: "bugo-origin.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  watch: true
};