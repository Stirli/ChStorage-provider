var path = require("path");
var srcPath = "./src/";
var config = {
	mode: "development",
	// TODO: Add common Configuration
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components|Output|.git)/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};

let config = Object.assign({}, config, {
	name: "chstorage",
	entry: srcPath + "chstorage.mjs",
	output: {
		filename: "chstorage.js",
		path: path.resolve(__dirname, "Output"),
	},
});
// Return Array of Configurations
module.exports = [config];
