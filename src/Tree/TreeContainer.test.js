import React from 'react';
import TreeContainer from './TreeContainer';
import treeJson from './tree';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TreeContainer />);
});

afterEach(() => {
  wrapper.unmount();
  wrapper = null;
});

it('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

it('starts with reasonable defaults', () => {
  expect(wrapper.state('data')).toEqual(treeJson);
});
