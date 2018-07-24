import React from 'react';
import App from './App';
import TreeContainer from './Tree/TreeContainer';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it('renders <TreeContainer />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TreeContainer)).toHaveLength(1);
});
