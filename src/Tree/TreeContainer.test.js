import React from 'react';
import TreeContainer from './TreeContainer';

it('renders without crashing', () => {
  const wrapper = shallow(<TreeContainer />);
  expect(wrapper).toHaveLength(1);
});
