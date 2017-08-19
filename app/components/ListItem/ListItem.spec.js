/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from './ListItem';


describe('ListItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <ListItem
        thumbnail="http://someurl.com/someimage.jpg"
        price={200}
        freeShipping
        title="Some title"
        location="San Nicolas"
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
