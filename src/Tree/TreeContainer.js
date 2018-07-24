import React, { Component } from 'react';
import TreeView from './TreeView';
import treeJson from './tree';

function walkTreeDF(fn, tree) {
  const queue = [tree];

  while (queue.length) {
    const node = queue.shift();
    queue.unshift(...node.children);
    fn(node);
  }

  return tree;
}

export default class TreeContainer extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.setState({ data: treeJson });
  }

  handleOnAdd = (label, parentNode) => {
    const data = {
      ...walkTreeDF(node => {
        if (node === parentNode) {
          parentNode.children.push({ label, children: [] });
        }
      }, this.state.data)
    };

    this.setState({ data });
  };

  render() {
    return (
      <TreeView data={ this.state.data } onAdd={ this.handleOnAdd } />
    );
  }
}
