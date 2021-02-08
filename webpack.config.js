const path = require("path");

module.exports = {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  entry: {
    works: "./src/works.js",
    "also-breaks": "./src/also-breaks.js",
    breaks: "./src/breaks.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: [".js", ".jsx"] },
        loaders: ["babel-loader"]
      }
    ]
  }
};
