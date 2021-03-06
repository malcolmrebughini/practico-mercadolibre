const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = require('./webpack.vendors.js');
const commonConfig = require('./webpack.config.common');

const prodConfig = {
  entry: {
    app: [
      'babel-polyfill',
      './client/index',
      './app/styles/reset.scss',
      './app/styles/main.scss',
    ],
    vendor,
  },
  output: {
    path: path.join(__dirname, '../www'),
    filename: 'bundle.[name].[chunkhash].js',
    publicPath: '/',
  },
};

const config = Object.assign({}, commonConfig, prodConfig);

config.module.rules = config.module.rules.concat([
  {
    test: /\.jsx?$/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
    exclude: [/node_modules/],
    include: [
      path.join(__dirname, '../client'),
      path.join(__dirname, '../app'),
    ],
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            modules: true,
            importLoaders: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.join(__dirname, './postcss.config.js'),
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, "../app/styles")],
          }
        },
      ],
    }),
    exclude: /node_modules/,
  },
]);

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.BROWSER': true,
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compressor: {
      warnings: false,
    },
  }),
  new ExtractTextPlugin({ filename: 'styles.[name].[contenthash].css', allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
]);

module.exports = config;
