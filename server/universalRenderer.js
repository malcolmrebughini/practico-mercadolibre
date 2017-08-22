const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router');
const Helmet = require('react-helmet').Helmet;
const App = require('../app').default;
const { Provider } = require('react-redux');
const setupStore = require('../app/store').default;
const rootSaga = require('../app/rootSaga').default;


function deferredScriptTags(scripts) {
  if (scripts.length === 0) return '';
  return `<script>window.addEventListener('load',function(){var a='${scripts}';'null'==a||'undefined'==a||(a=a.split(','),a.forEach(function(b){var d=document.createElement('script');d.src=b,d.async=!1,d.defer=!0,document.head.appendChild(d)}))});</script>`
}

function universalRendering(req, res) {
  const store = setupStore();
  const context = {};
  const app = (
    <Provider store={store}>
      <div>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      </div>
    </Provider>
  );

  const runTasks = store.runSaga(rootSaga);

  runTasks.done.then(() => {
    const html = ReactDOMServer.renderToString(app);
    const helmet = Helmet.renderStatic();
    const normalizedAssets = res.locals.normalizedAssets;
    const preloadedState = store.getState();

    const css = normalizedAssets
      .filter(path => path && path.endsWith('.css'))
      .map(path => `<link rel="stylesheet" href="${path}" />`)
      .join('\n');

    const scripts = deferredScriptTags(
      normalizedAssets
        .filter(path => path && path.endsWith('.js'))
    )

    return res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <base href="/">
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet">
          ${css}
        </head>
        <body>
          <div id="appContent">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${scripts}
        </body>
      </html>
    `);
  })
  .catch(err => {
    res.status(500).send(err);
  });

  ReactDOMServer.renderToString(app);
  store.close();
}


module.exports = universalRendering;
