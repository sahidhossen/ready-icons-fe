const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([withCSS, withSass], {
	webpack5: false,
	test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 100000,
			name: '[name].[ext]',
		},
	},
});
