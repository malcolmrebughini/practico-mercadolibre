const express = require('express');
const sass = require('node-sass');
const config = require('./config/environment');
const errorHandlingMiddleware = require('./utils/error-handling');

require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  preprocessCss: (data, filename) => {
    if (filename.endsWith('.scss')) return sass.renderSync({ file: filename, data }).css;
    return data;
  },
});

require('asset-require-hook')({
  extensions: ['png'],
  publicPath: '/assets/',
  name: '[hash].[ext]'
});

require('babel-register');


const app = express();

// Configure our app
require('./config/express')(app);

// Setup routes
require('./routes')(app);

// Override default error handler with custom one
app.use(errorHandlingMiddleware);


const server = require('http').createServer(app);
server.listen(config.port, () => {
  console.log(`Magic happens in port ${config.port}`);
});

module.exports = app;
