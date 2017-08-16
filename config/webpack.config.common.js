const { DefinePlugin, LoaderOptionsPlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');


const commonConfig = {
  resolve: {
    modules: [
      path.resolve('./client'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
              // publicPath: '/assets/'
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: './app/assets', from: '**/*', to: 'assets' },
    ]),
    // new FaviconsWebpackPlugin('./src/images/favicon.png'),
    new DefinePlugin({
      APP_VERSION: JSON.stringify(require('../package.json').version),
    }),
    // new LoaderOptionsPlugin({
    //   options: {
    //     context: '/',
    //     sassLoader : {
    //       includePaths: [path.resolve(__dirname, "../src/styles")],
    //     },
    //   }
    // }),
  ],
};

module.exports = commonConfig;
