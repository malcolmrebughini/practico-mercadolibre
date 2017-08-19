import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from './Breadcrumbs';
import styles from './styles.scss';


describe('Breadcrumbs', () => {
  it('should render a list of strings as breadcrumbs', () => {
    const keywordsList = ['this', 'are', 'some', 'breadcrumbs', 'mydude'];
    const wrapper = shallow(
      <Breadcrumbs list={keywordsList} />
    );

    const breadcrumbs = wrapper.find(`.${styles.breadCrumb}`);

    expect(breadcrumbs.length).toEqual(5);

    breadcrumbs.forEach((breadcrumb, index) => {
      expect(breadcrumb.text()).toContain(keywordsList[index]);
    });
  });
});