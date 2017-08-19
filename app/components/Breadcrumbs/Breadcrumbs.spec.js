/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Breadcrumbs from './Breadcrumbs';
import styles from './styles.scss';

const testKeywordsList = ['this', 'are', 'some', 'breadcrumbs', 'mydude'];

describe('Breadcrumbs', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Breadcrumbs list={testKeywordsList} />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a list of strings as breadcrumbs', () => {
    const wrapper = shallow(
      <Breadcrumbs list={testKeywordsList} />,
    );

    const breadcrumbs = wrapper.find(`.${styles.breadCrumb}`);

    expect(breadcrumbs.length).toEqual(5);

    breadcrumbs.forEach((breadcrumb, index) => {
      expect(breadcrumb.text()).toContain(testKeywordsList[index]);
    });
  });
});
