/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchResultsPage from './SearchResultsPage';


describe('SearchResultsPage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <SearchResultsPage
        q="Mala Fama"
        isLoading={false}
        search={jest.fn()}
        updateInput={jest.fn()}
        itemsCount={4}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call search and updateInput if no items', () => {
    const searchCallback = jest.fn();
    const updateInputCallback = jest.fn();

    shallow(
      <SearchResultsPage
        search={searchCallback}
        updateInput={updateInputCallback}
        itemsCount={0}
        q="Mala Fama"
      />,
    );

    expect(searchCallback.mock.calls.length).toEqual(1);
    expect(searchCallback.mock.calls[0]).toEqual(['Mala Fama']);
    expect(updateInputCallback.mock.calls.length).toEqual(1);
    expect(updateInputCallback.mock.calls[0]).toEqual(['Mala Fama']);
  });

  it('should call clearData on unmount', () => {
    const callback = jest.fn();
    shallow(
      <SearchResultsPage
        search={jest.fn()}
        updateInput={jest.fn()}
        itemsCount={0}
        q="Mala Fama"
        clearData={callback}
      />,
    ).unmount();

    expect(callback.mock.calls.length).toEqual(1);
  });
});
