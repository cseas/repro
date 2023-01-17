import { baseConfig } from "./webpack.base.mjs";

export default {
  ...baseConfig,
  devServer: {
    static: "./build",
    port: 3000,
  },
  mode: "development",
};
