import { GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_ERROR } from '../constants';

const initialState = {
  isLoading: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEM:
      return Object.assign({}, state, { isLoading: true });
    case GET_ITEM_SUCCESS:
      return Object.assign({}, state, { isLoading: false, data: action.item });
    case GET_ITEM_ERROR:
      return Object.assign({}, state, { isLoading: false, hasError: true, error: action.error });
    default:
      return state;
  }
}


export default reducer;
