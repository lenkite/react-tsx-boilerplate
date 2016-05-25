var webpack = require('webpack');
var path = require('path');

/*
 * Default webpack configuration for development
 */
var config = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, "src/App.tsx")
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx'] /*crappy shit*/
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.join(__dirname, 'src')
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = 'sourcemap';
    config.plugins = [];
    config.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    );
} else {
    /* See: https://github.com/gaearon/react-hot-loader/issues/243 */
    config.module.loaders[0].loader = 'react-hot-loader/webpack!ts-loader'
    config.entry.unshift('react-hot-loader/patch');
}

module.exports = config;
