import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from './ItemsList';
import ListItem from '../ListItem';


describe('ItemsList', () => {
  it('should render a list of items', () => {
    const items = [
      { id: '1', address: {}, shipping: {} },
      { id: '2', address: {}, shipping: {} },
    ];
    const wrapper = shallow(<ItemsList items={items} />)
    const renderedItems = wrapper.find(ListItem);
    expect(renderedItems.length).toEqual(2);
  });
});
