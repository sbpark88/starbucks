import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.resolve();

export default {
  entry: {
    index: "./src/pages/main/index.js",
    signIn: "./src/pages/sign-in/index.js",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // file loader
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // html loader
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
    parser: {
      javascript: {
        commonjsMagicComments: true,
        dynamicImportMode: "lazy",
        dynamicImportPreload: true,
        dynamicImportPrefetch: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/main/index.html",
      filename: "index.html",
      chunks: ["index"], // entry 의 JavaScript 이름과 동일하게 지정. 해당 JavaScript 를 불러온다.
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/sign-in/index.html",
      filename: "sign-in/index.html", // directory 가 routing 기능을 하도록 "라우팅 경로/index.html" 로 설정한다.
      chunks: ["signIn"],
    }),
  ],
};
