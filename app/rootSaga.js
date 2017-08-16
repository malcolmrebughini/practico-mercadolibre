import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  GET_ITEM,
  GET_ITEM_SUCCESS,
  GET_ITEM_ERROR,
} from './constants';
import someService from './services/items';


function* search(action) {
  try {
    const results = yield call(someService.get, action.q);
    yield put({ type: SEARCH_SUCCESS, items: results.items, categories: results.categories });
  } catch (error) {
    yield put({ type: SEARCH_ERROR, error });
  }
}


function* getItem(action) {
  try {
    const result = yield call(someService.getOne, action.itemId);
    yield put({ type: GET_ITEM_SUCCESS, item: result.item, categories: result.categories });
  } catch (error) {
    yield put({ type: GET_ITEM_ERROR, error });
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(SEARCH, search),
    yield takeLatest(GET_ITEM, getItem),
  ]);
};
