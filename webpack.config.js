module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		filename: 'build.js'
	},
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
		]
	}
};