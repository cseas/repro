import HtmlWebpackPlugin from "html-webpack-plugin";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirnameCustom = dirname(fileURLToPath(import.meta.url));

export const baseConfig = {
  target: "web",
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirnameCustom, "build"),
    clean: true,
    hashFunction: "xxhash64",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html"],
    extensionAlias: {
      ".js": [".tsx", ".ts", ".js"],
    },
  },
};
