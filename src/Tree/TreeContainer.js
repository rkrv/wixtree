import React, { Component } from 'react';
import TreeView from './TreeView';
import treeJson from './tree';

export default class TreeContainer extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.setState({ data: treeJson });
  }

  render() {
    return (
      <TreeView data={ this.state.data } />
    );
  }
}
