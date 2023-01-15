import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirnameCustom = dirname(fileURLToPath(import.meta.url));

export default {
  devServer: {
    static: "./build",
    port: 3000,
  },
  target: "web",
  entry: "src/index.tsx",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
