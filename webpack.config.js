module.exports = {
    entry: "./src/app.js",
    output: { "filename": "app.js" },

    module: {
        rules: [
            
            {
                test: /.*\.js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            }
        ]
    },

    devtool: "cheap-eval-source-map",

    devServer: {
        port: 8081,
        contentBase: "./src",
        inline: true,
		historyApiFallback: true
    }
};

//{enforce: "pre", test: /\.js$/,  use: "eslint-loader", exclude: /node_modules/},