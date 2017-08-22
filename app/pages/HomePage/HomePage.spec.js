/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from './HomePage';


describe('HomePage', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomePage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
