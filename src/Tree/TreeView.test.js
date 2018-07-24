import React from 'react';
import TreeView, { MSG_NO_DATA } from './TreeView';
import treeJson from './tree';

it('renders without crashing', () => {
  const wrapper = shallow(<TreeView />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(TreeView.defaultProps.data).toBeNull();
});

it('renders a message when no tree data exists', () => {
  const wrapper = shallow(<TreeView />);
  expect(wrapper.text()).toBe(MSG_NO_DATA);
});

it('renders correctly with data', () => {
  const wrapper = shallow(<TreeView data={ treeJson } />);
  expect(wrapper).toMatchSnapshot();
});
