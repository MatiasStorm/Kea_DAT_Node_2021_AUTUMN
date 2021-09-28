const path = require("path");

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: {
        'build/bundle': ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "[name].js",
        chunkFilename: "[name].[id].js"
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte")
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compileOptions: {
                            dev: !prod
                        },
                        hotReload: !prod
                    }
                }
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                  fullySpecified: false
                }
            }
        ]
    },
    mode,
	devtool: prod ? false : 'source-map',
	devServer: {
		hot: true
	}
};
