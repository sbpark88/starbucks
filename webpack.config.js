import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.resolve();

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
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
      template: "index.html", // 루트 디렉토리에 있는 index.html을 템플릿으로 사용
      filename: "index.html", // 생성될 HTML 파일 이름
    }),
  ],
};
