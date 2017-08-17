import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR, CLEAR_DATA } from '../constants';

const initialState = {
  isLoading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_DATA:
      return initialState;
    case SEARCH:
      return Object.assign({}, state, { isLoading: true });
    case SEARCH_SUCCESS:
      return Object.assign({}, state, { isLoading: false, items: action.items });
    case SEARCH_ERROR:
      return Object.assign({}, state, { isLoading: false, hasError: true, error: action.error });
    default:
      return state;
  }
}


export default reducer;
