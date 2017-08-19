import {
  GET_ITEM,
  GET_ITEM_SUCCESS,
  SEARCH,
  SEARCH_SUCCESS,
} from '../constants';
import categoriesReducer from './categories';


describe('categories reducer', () => {
  it('should return initialState on GET_ITEM', () => {
    const action = { type: GET_ITEM };
    const currentState = ['category 1', 'category 2'];
    const newState = categoriesReducer(currentState, action);
    expect(newState).toEqual([]);
  });

  it('should return initialState on SEARCH', () => {
    const action = { type: SEARCH };
    const currentState = ['category 1', 'category 2'];
    const newState = categoriesReducer(currentState, action);
    expect(newState).toEqual([]);
  });

  it('should set categories on GET_ITEM_SUCCESS', () => {
    const action = { type: GET_ITEM_SUCCESS, categories: ['category 1', 'category 2'] };
    const newState = categoriesReducer(undefined, action);
    expect(newState).toEqual(['category 1', 'category 2']);
  });

  it('should set categories on SEARCH_SUCCESS', () => {
    const action = { type: SEARCH_SUCCESS, categories: ['category 1', 'category 2'] };
    const newState = categoriesReducer(undefined, action);
    expect(newState).toEqual(['category 1', 'category 2']);
  });
});