/* eslint-env jasmine */

import { UPDATE_SEARCH_INPUT } from '../constants';
import topbarReducer from './topbar';


describe('topbar reducer', () => {
  it('should update input value', () => {
    const action = { type: UPDATE_SEARCH_INPUT, value: 'mala fama' };
    const newState = topbarReducer(undefined, action);
    expect(newState).toEqual({ inputValue: 'mala fama' });
  });
});
