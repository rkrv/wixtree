import React from 'react';
import TreeNode from './TreeNode';

it('renders without crashing', () => {
  const wrapper = shallow(<TreeNode />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(TreeNode.defaultProps).toEqual({ depth: 0, data: null, onAdd: null });
});

it('renders nothing if no `data` prop is passed', () => {
  const wrapper = shallow(<TreeNode />);
  expect(wrapper.text()).toBe('');
});

describe('with data', () => {
  const myLabel = 'My label';

  it('renders correct label', () => {
    const wrapper = shallow(<TreeNode data={ { label: myLabel } } />);
    expect(wrapper.text()).toContain(myLabel);
  });

  it('renders correct spacing', () => {
    const wrapper0 = shallow(<TreeNode depth={ 0 } data={ { label: myLabel } } />);
    const wrapper5 = shallow(<TreeNode depth={ 5 } data={ { label: myLabel } } />);

    expect(wrapper0.getElement().props.style).toHaveProperty('marginLeft', '0rem');
    expect(wrapper5.getElement().props.style).toHaveProperty('marginLeft', '5rem');
  });
});
