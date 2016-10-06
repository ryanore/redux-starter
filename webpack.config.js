var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/index'
    ]
  },
  output: {
    path: '/',
    publicPath: 'http://localhost:4000/assets',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    alias: {
      app: path.join(__dirname,'src')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    {
      test: /\.(scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader?sourceMap'
    }],
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        include: './src'
      },
    ],
  }
};
