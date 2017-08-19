import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TopBar from './TopBar';


describe('TopBar', () => {
  it('should render correctly', () => {
    const mockCallbackUpdate = jest.fn();
    const mockCallbackRedirect = jest.fn();
    const inputValue = 'Mala fama';
    const wrapper = shallow(
      <TopBar
        updateInput={mockCallbackUpdate}
        redirectToResultsView={mockCallbackRedirect}
        inputValue={inputValue}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call function on input', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<TopBar updateInput={mockCallback} />);
    wrapper.find('input').simulate('change', { target: { value: 'mala fama' } });
    const calls = mockCallback.mock.calls;
    expect(calls.length).toEqual(1);
    expect(calls[0]).toEqual(['mala fama']);
  });

  it('should call function on submit', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(
      <TopBar
        inputValue="mala fama"
        redirectToResultsView={mockCallback}
      />
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    const calls = mockCallback.mock.calls;
    expect(calls.length).toEqual(1);
    expect(calls[0]).toEqual(['mala fama']);
  });
});
