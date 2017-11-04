const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
});