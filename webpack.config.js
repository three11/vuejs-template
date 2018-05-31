/**
 * Internal dependencies
 */
const { resolve } = require('path');

/**
 * External dependencies
 * @type {[type]}
 */
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Local variables
 */
const mode = process.env.NODE_ENV;
const isDevelopment = mode === 'development';

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
	loader: 'vue-loader'
};

/**
 * Configure styles
 */
const styleConfig = {
	test: /\.s?css$/,
	use: [
		!isDevelopment
			? MiniCssExtractPlugin.loader
			: {
					loader: 'vue-style-loader',
					options: {
						sourceMap: isDevelopment
					}
			  },
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: isDevelopment
			}
		},
		{
			loader: 'sass-loader',
			options: {
				sourceMap: isDevelopment
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: () => [
					require('postcss-easy-import'),
					require('postcss-url')({
						url: 'rebase'
					}),
					require('postcss-utilities'),
					require('postcss-flexbugs-fixes'),
					require('autoprefixer')()
				],
				sourceMap: isDevelopment
			}
		}
	]
};

module.exports = {
	mode,
	entry: './src/js/bootstrap.js',
	output: {
		path: resolve(__dirname, './dist'),
		publicPath: '/',
		filename: 'dist.js'
	},
	module: {
		rules: [vueConfig, babelConfig, assetsConfig, styleConfig]
	},
	resolve: {
		modules: ['src/js', 'src/js/router', 'src/js/store', 'node_modules'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			assets: resolve('./src/assets')
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
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new VueLoaderPlugin()
	],
	stats: 'errors-only',
	bail: false,
	cache: true
};
