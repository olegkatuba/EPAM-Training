const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app/index.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'src/app/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env'],
						plugins: [
							"transform-object-rest-spread",
							"transform-function-bind"
						]
					}
				}
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			}
			/*,
			{
				enforce: 'pre',
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options:{
					fix: true
				}
			}*/
		]
	}
};