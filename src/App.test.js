import React from 'react';
import App from './App';
import TreeContainer from './Tree/TreeContainer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

afterEach(() => {
  wrapper.unmount();
  wrapper = null;
});

it('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

it('renders <TreeContainer />', () => {
  expect(wrapper.find(TreeContainer)).toHaveLength(1);
});
