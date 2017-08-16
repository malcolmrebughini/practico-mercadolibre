import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga from './rootSaga';
import searchReducer from './reducers/search';
import topBarReducer from './reducers/topbar';
import itemReducer from './reducers/item';
import categoriesReducer from './reducers/categories';


const history = process.env.BROWSER ? createHistory() : createMemoryHistory();

function setupStore(preloadedState) {
  const reducers = combineReducers({
    router: routerReducer,
    search: searchReducer,
    topBar: topBarReducer,
    itemDetail: itemReducer,
    categories: categoriesReducer,
  });

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = process.env.BROWSER && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      )
    ),
  );

  sagaMiddleware.run(rootSaga);

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

export default setupStore;
export { history }
