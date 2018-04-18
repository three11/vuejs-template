const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Configure Babel
 */
const babelConfig = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
};

/**
 * Configure Assets
 */
const assetsConfig = {
	test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[hash].[ext]'
			}
		}
	]
};

/**
 * Configure Vue.js
 */
const vueConfig = {
	test: /\.vue$/,
	loader: 'vue-loader',
	options: {
		extractCSS: process.env.NODE_ENV !== 'development',
		postcss: {
			plugins: [
				require('postcss-easy-import'),
				require('postcss-url')({
					url: 'rebase'
				}),
				require('postcss-utilities'),
				require('postcss-flexbugs-fixes'),
				require('autoprefixer')()
			]
		},
		cssSourceMap: true,
		extractCSS: true
	}
};

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/js/bootstrap.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'dist.js'
	},
	module: {
		rules: [vueConfig, babelConfig, assetsConfig]
	},
	resolve: {
		modules: ['src/js', 'src/js/router', 'src/js/store', 'node_modules'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			assets: path.resolve('./src/assets')
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: 'source-map',
	plugins: [new ExtractTextPlugin('style.css')]
};
