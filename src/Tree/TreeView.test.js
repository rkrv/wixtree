import React from 'react';
import TreeView from './TreeView';

it('renders without crashing', () => {
  const wrapper = shallow(<TreeView />);
  expect(wrapper).toHaveLength(1);
});
