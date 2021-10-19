module.exports = {
	webpack5: false,
	test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 100000,
			name: '[name].[ext]',
		},
	},
};
