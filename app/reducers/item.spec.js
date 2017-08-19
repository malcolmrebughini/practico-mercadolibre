/* eslint-env jasmine */

import { GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_ERROR, CLEAR_DATA } from '../constants';
import itemReducer from './item';


describe('item reducer', () => {
  it('should clear data and return initial state', () => {
    const action = { type: CLEAR_DATA };
    const state = { isLoading: false, data: { title: 'Some title' } };
    const newState = itemReducer(state, action);
    expect(newState).toEqual({ isLoading: true });
  });

  it('should set isLoading to true on GET_ITEM', () => {
    const action = { type: GET_ITEM };
    const state = { isLoading: false };
    const newState = itemReducer(state, action);
    expect(newState).toEqual({ isLoading: true });
  });

  it('should set item data', () => {
    const action = { type: GET_ITEM_SUCCESS, item: { title: 'Some title' } };
    const state = { isLoading: true };
    const newState = itemReducer(state, action);
    expect(newState).toEqual({ isLoading: false, data: { title: 'Some title' } });
  });

  it('should set error', () => {
    const action = { type: GET_ITEM_ERROR, error: { some: 'error' } };
    const state = { isLoading: true };
    const newState = itemReducer(state, action);
    expect(newState).toEqual({
      isLoading: false,
      hasError: true,
      error: { some: 'error' },
    });
  });
});
