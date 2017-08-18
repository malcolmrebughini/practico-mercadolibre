module.exports = {
  port: process.env.PORT || 3000,
  static_path: process.env.STATIC_PATH || './../../client',
  authorName: process.env.AUTHOR_NAME || 'Malcolm',
  authorLastName: process.env.AUTHOR_LAST_NAME || 'Rebughini',
  webpackConfig: process.env.NODE_ENV === 'production' ?
    require('../../../config/webpack.config.production')
    : require('../../../config/webpack.config.development'),
};
