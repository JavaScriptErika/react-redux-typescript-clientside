import * as path from 'path'

export default {
    entry: path.resolve(__dirname, 'src/webpackEntry.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }, {
                    loader: 'ts-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}
