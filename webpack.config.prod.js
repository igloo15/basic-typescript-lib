const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'basic-typescript-lib',
        libraryTarget: 'umd'
    },
    optimization: {
        minimizer:[new TerserPlugin()]
    },
    externals: [
    ],
    node: {
        process: true,
        buffer: true
    }
};