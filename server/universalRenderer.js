const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router');
const App = require('../app').default;
const { Provider } = require('react-redux');
const setupStore = require('../app/store').default;
const rootSaga = require('../app/rootSaga').default;


function normalizeAssets(assets) {
  return assets ?
    Object.keys(assets)
      .reduce((arr, key) =>
        Array.isArray(assets[key]) ? arr.concat(assets[key]) : arr.concat([assets[key]]), []
      ) : [];
}

function universalRendering(req, res) {
  const store = setupStore();
  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  const runTasks = store.runSaga(rootSaga);

  runTasks.done.then(() => {
    const html = ReactDOMServer.renderToString(app);

    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    const normalizedAssets = normalizeAssets(assetsByChunkName);
    const preloadedState = store.getState();

    return res.send(`
      <html>
        <head>
          <title>Mercadolibre</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <base href="/">
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet">
          ${
            normalizedAssets
              .filter(path => path && path.endsWith('.css'))
              .map(path => `<link rel="stylesheet" href="${path}" />`)
              .join('\n')
          }
        </head>
        <body>
          <div id="appContent">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${
            normalizedAssets
            .reverse()
            .filter(path => path && path.endsWith('.js'))
            .map(path => `<script src="${path}"></script>`)
            .join('\n')
          }
        </body>
      </html>
    `);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  });

  ReactDOMServer.renderToString(app);
  store.close();
}


module.exports = universalRendering;
