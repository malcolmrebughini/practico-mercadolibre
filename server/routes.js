const path = require('path');
const itemsRouter = require('./api/items');
const universalRenderer = require('./universalRenderer');


module.exports = app => {
  app.use('/api/items', itemsRouter);

  app.route('/*')
    .get(universalRenderer);
};

