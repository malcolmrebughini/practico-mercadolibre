import { push } from 'react-router-redux';
import { SEARCH, UPDATE_SEARCH_INPUT, GET_ITEM, CLEAR_DATA } from '../constants';


function redirectToResultsView(value) {
  if (!value) return {};
  return push({ pathname: '/items', search: `?q=${value}` });
}

function search(value) {
  return { type: SEARCH, q: value };
}

function updateInput(value) {
  return { type: UPDATE_SEARCH_INPUT, value };
}

function getItem(itemId) {
  return { type: GET_ITEM, itemId };
}

function clearData() {
  return { type: CLEAR_DATA };
}


export default {
  redirectToResultsView,
  search,
  updateInput,
  getItem,
  clearData,
};
