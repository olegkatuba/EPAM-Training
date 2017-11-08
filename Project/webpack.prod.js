const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	output: {
		filename: '[name].min.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new UglifyJSPlugin()
	]
});