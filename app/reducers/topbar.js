import { UPDATE_SEARCH_INPUT } from '../constants';

const initialState = {
  inputValue: '',
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_INPUT:
      return Object.assign({}, state, { inputValue: action.value });
    default:
      return state;
  };
}


export default reducer;