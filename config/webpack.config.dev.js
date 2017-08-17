const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const vendor = require('./webpack.vendors.js');
const commonConfig = require('./webpack.config.common');
const PRODUCTION = process.env.NODE_ENV === 'production';

const prodConfig = {
  devtool: 'source-map',
  entry: {
    app: [
      // 'react-hot-loader/patch',
      // 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&overlay=false',
      // 'webpack/hot/only-dev-server',
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
    publicPath: '/'
  },
};

const config = _.merge(commonConfig, prodConfig);

config.module.rules = config.module.rules.concat([
  {
    test: /\.jsx?$/,
    use: [
      {
        loader: 'babel-loader',
      },
      // {
      //   loader: 'react-hot-loader',
      // },
    ],
    exclude: [/node_modules/],
    include: [
      path.join(__dirname, '../client'),
      path.join(__dirname, '../app'),
    ],
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
    ],
    include: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        }
      },
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [path.resolve(__dirname, "../app/styles")],
        }
      },
    ],
    exclude: /node_modules/,
  },
]);

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.BROWSER': true,
  }),
  new ExtractTextPlugin({ filename: 'react/css/styles.css', allChunks: true }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
]);

module.exports = config;
