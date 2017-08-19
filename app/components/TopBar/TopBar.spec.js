import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';


describe('TopBar', () => {
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
