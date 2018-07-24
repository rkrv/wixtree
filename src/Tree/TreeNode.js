import React, { Component } from 'react';

export default class TreeNode extends Component {
  static defaultProps = {
    depth: 0,
    data: null
  };

  render() {
    if ( ! this.props.data || ! this.props.data.label) {
      return null;
    }

    return (
      <div style={ { marginLeft: `${this.props.depth}rem` } }>
        { this.props.data.label }
      </div>
    );
  }
}
