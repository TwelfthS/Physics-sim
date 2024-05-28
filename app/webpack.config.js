const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    return {
        entry: './src/index.tsx',
        output: {
            filename: watchMode ? '[name].[hash].js' : '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader",
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      "style-loader",
                      "css-loader",
                      "sass-loader",
                    ],
                  },
            ]
        },
        devServer: {
            port: 3000,
            hot: true
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html',
            })
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    }
}