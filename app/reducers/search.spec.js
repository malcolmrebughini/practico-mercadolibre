/* eslint-env jasmine */

import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR, CLEAR_DATA } from '../constants';
import searchReducer from './search';


describe('search reducer', () => {
  it('should clear data and return initial state', () => {
    const action = { type: CLEAR_DATA };
    const state = { isLoading: false, items: [{ title: 'Some title' }] };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({ isLoading: true });
  });

  it('should set isLoading to true on GET_ITEM', () => {
    const action = { type: SEARCH };
    const state = { isLoading: false };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({ isLoading: true });
  });

  it('should set item data', () => {
    const action = { type: SEARCH_SUCCESS, items: [{ title: 'Some title' }] };
    const state = { isLoading: true };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({ isLoading: false, items: [{ title: 'Some title' }] });
  });

  it('should set error', () => {
    const action = { type: SEARCH_ERROR, error: { some: 'error' } };
    const state = { isLoading: true };
    const newState = searchReducer(state, action);
    expect(newState).toEqual({
      isLoading: false,
      hasError: true,
      error: { some: 'error' },
    });
  });
});
