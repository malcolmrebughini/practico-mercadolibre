import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from '../constants';

const initialState = {
  isLoading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
