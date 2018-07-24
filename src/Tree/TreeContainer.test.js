import React from 'react';
import TreeContainer from './TreeContainer';
import TreeView from './TreeView';
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

it('renders <TreeView /> with data', () => {
  expect(wrapper.find(TreeView).prop('data')).toBe(wrapper.state('data'));
});
