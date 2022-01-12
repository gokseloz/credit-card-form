const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const prodconfig = {
  mode: "production",
  devtool: "source-map",
};

module.exports = merge(commonConfig, prodconfig);
