const path = require ("path");
// import { Configuration } from "webpack";
const CopyWebpackPlugin = require ("copy-webpack-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config /*: Configuration */ = {
  mode:
    // (process.env.NODE_ENV as "production" | "development" | undefined) ??
    "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist/index.html"),
    },
    port: 3000,
  },
};

module.exports = config;