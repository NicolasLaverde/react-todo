const HtmlWebpackPluging = require('html-webpack-plugin');
const htmlWebpackPlugingConfig = new HtmlWebpackPluging({
	template: './app/index.html',
	filename: 'index.html',
	inject: 'body'
})

const config = {
	entry: './app/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				query: {
					presets:['react', 'env'],
					plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
				}	
			}

		]
	},
	plugins: [htmlWebpackPlugingConfig],
	devtool: 'source-map'
}

module.exports = config;