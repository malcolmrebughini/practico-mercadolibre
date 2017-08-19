import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemsList from './ItemsList';
import ListItem from '../ListItem';


const testItems = [
  { id: '1', address: {}, shipping: {} },
  { id: '2', address: {}, shipping: {} },
];


describe('ItemsList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ItemsList items={testItems} />)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a list of items', () => {
    const wrapper = shallow(<ItemsList items={testItems} />)
    const renderedItems = wrapper.find(ListItem);
    expect(renderedItems.length).toEqual(2);
  });
});
