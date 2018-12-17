const path = require("path");

const config = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env','react','stage-1'],
                    plugins: ["transform-decorators-legacy", "transform-class-properties"]
                }
            }
        }]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx"]
    }
}

module.exports = config;