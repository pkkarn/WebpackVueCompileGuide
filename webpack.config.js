const path = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'code.js'
    },
    // For Loaders
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // for plugis
    plugins: [
        // new BundleAnalyzer()
        new VueLoaderPlugin()
    ],

    //for dev server
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 9000,
        watchFiles: ['src/*', 'public/*'],
    },
    mode: 'development',
}