import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Breadcrumbs from './Breadcrumbs';
import styles from './styles.scss';

const testKeywordsList = ['this', 'are', 'some', 'breadcrumbs', 'mydude'];

describe('Breadcrumbs', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Breadcrumbs list={testKeywordsList} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render a list of strings as breadcrumbs', () => {

    const wrapper = shallow(
      <Breadcrumbs list={testKeywordsList} />
    );

    const breadcrumbs = wrapper.find(`.${styles.breadCrumb}`);

    expect(breadcrumbs.length).toEqual(5);

    breadcrumbs.forEach((breadcrumb, index) => {
      expect(breadcrumb.text()).toContain(testKeywordsList[index]);
    });
  });
});