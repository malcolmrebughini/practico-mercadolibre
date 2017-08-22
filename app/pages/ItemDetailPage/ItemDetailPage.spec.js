/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemDetailPage from './ItemDetailPage';


describe('ItemDetailPage', () => {
  it('should render correctly', () => {
    const data = {
      price: { integer: 90000, decimals: 0 },
      title: 'Some title',
    };
    const wrapper = shallow(
      <ItemDetailPage
        data={data}
        isLoading={false}
        itemId="MLA660069628"
        categories={['Some', 'Categories']}
        getItem={jest.fn()}
        clearData={jest.fn()}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call getItem if no data', () => {
    const callback = jest.fn();
    shallow(<ItemDetailPage getItem={callback} itemId="MLA660069628" />);

    expect(callback.mock.calls.length).toEqual(1);
    expect(callback.mock.calls[0]).toEqual(['MLA660069628']);
  });

  it('should call clearData on unmount', () => {
    const callback = jest.fn();
    shallow(<ItemDetailPage getItem={jest.fn()} clearData={callback} />).unmount();

    expect(callback.mock.calls.length).toEqual(1);
  });
});
