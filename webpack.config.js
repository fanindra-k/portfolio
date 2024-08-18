const webpack = require("webpack");
module.exports = {
  // other configurations...
  plugins: [
    new webpack.DefinePlugin({
      "process.env.ACCESS_KEY": JSON.stringify(process.env.ACCESS_KEY),
    }),
  ],
};
