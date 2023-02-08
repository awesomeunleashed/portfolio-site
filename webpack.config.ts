import "webpack-dev-server";
import path from "path";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin"; // eslint-disable-line import/default
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const isProduction = process.env.NODE_ENV === "production";

const plugins: Configuration["plugins"] = [
  new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new CopyPlugin({
    patterns: [{ from: "public", globOptions: { ignore: ["**/index.html"] } }],
  }),
];

if (!isProduction) {
  plugins.push(new ReactRefreshWebpackPlugin());
}
if (process.env.BUNDLE_ANALYZER) {
  plugins.push(new BundleAnalyzerPlugin());
}

const config: Configuration = {
  devServer: {
    client: {
      logging: "error",
      overlay: { errors: true, warnings: false },
    },
    historyApiFallback: { index: "/index.html" },
    open: true,
  },
  entry: "./src/index.tsx",
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: isProduction ? [] : ["react-refresh/babel"],
          },
        },
      },
      { test: /\.jpg$/, type: "asset/resource" },
      {
        generator: { filename: "[name][ext]" },
        test: /\.pdf$/,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  output: { filename: isProduction ? "[name].[chunkhash].js" : "[name].js" },
  plugins,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
};

export default config;
