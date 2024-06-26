import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import buildCssLoader from "./loaders/buildCssLoader";
import { BuildOptions } from "./types/config";

export default function buildLoaders({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
