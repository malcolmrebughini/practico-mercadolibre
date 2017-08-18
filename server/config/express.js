const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./environment');
const author = require('../utils/author');


const compiler = webpack(config.webpackConfig);

module.exports = app => {
  // Parse the bodies of ALL incoming requests,
  // we'll be parsing both JSON and URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, config.static_path)));

  // Request logger middleware
  app.use(morgan('dev'));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.webpackConfig.output.publicPath,
    serverSideRender: true,
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: false,
    }
  }));

  app.use(author.addAuthorMiddleware(config.authorName, config.authorLastName));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }));
};
