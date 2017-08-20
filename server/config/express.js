const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./environment');
const author = require('../utils/author');
const assetsUtils = require('../utils/assets');
const compiler = webpack(config.webpackConfig);


module.exports = app => {
  // Parse the bodies of ALL incoming requests,
  // we'll be parsing both JSON and URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Request logger middleware
  app.use(morgan('dev'));
  // Author middleware
  app.use(author.addAuthorMiddleware(config.authorName, config.authorLastName));

  if (process.env.NODE_ENV === 'production') {
    const staticPath = config.webpackConfig.output.path;
    const statsPath = path.join(staticPath, 'stats.json');
    const assetsByChunkName = require(statsPath).assetsByChunkName;
    const normalizedAssets = assetsUtils.normalizeAssets(assetsByChunkName).reverse();

    app.use((req, res, next) => {
      res.locals.normalizedAssets = normalizedAssets;
      next();
    });

    return app.use(express.static(staticPath));
  }

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.webpackConfig.output.publicPath,
    serverSideRender: true,
    stats: {
      colors: true,
      hash: true,
      timings: true,
      chunks: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }));

  app.use((req, res, next) => {
    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    res.locals.normalizedAssets = assetsUtils.normalizeAssets(assetsByChunkName);
    next();
  });
};
