/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemDetail from './ItemDetail';


describe('ItemDetail', () => {
  it('should render correctly', () => {
    const itemData = {
      pictures: [{ url: 'http://someurl.com/someimage.jpg' }],
      condition: 'new',
      sold_quantity: 245,
      title: 'This is some title',
      price: {
        integer: 10000,
        decimals: 99,
      },
      description: { plain_text: 'This is some description' },
    };

    const wrapper = shallow(
      <ItemDetail data={itemData} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
