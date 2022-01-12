const { merge } = requre("webpack-merge");
const commonConfig = require("./webpack.common");

const prodconfig = {
  mode: "production",
};

module.exports = merge(commonConfig, prodconfig);
