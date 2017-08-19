import {
  GET_ITEM,
  GET_ITEM_SUCCESS,
  SEARCH,
  SEARCH_SUCCESS,
} from '../constants';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
    case SEARCH:
      return initialState;
    case SEARCH_SUCCESS:
    case GET_ITEM_SUCCESS:
      return action.categories;
    default:
      return state;
  }
}


export default reducer;
