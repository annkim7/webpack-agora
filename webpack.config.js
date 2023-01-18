const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//css minify
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: ["web", "es5"],
  entry: "./src/script.js",
  mode: "development",
  devServer: {
    static: "./docs",
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[fullhash].bundle.js", //동적 관리
    clean: true, //디렉터리 정리
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
