import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import setupStore, { history } from '../app/store';
import App from '../app';


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = setupStore(preloadedState);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('appContent')
);

// Hot Module Replacement API
// if (true) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App');
//     ReactDOM.render(
//       <AppContainer>
//         <Provider store={store}>
//           <div>
//             <ConnectedRouter history={history}>
//               <App />
//             </ConnectedRouter>
//           </div>
//         </Provider>
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }
