import React, { Component } from 'react';
import TreeNode from './TreeNode';
import './TreeView.css';

export const MSG_NO_DATA = 'No tree data is loaded.';

export default class TreeView extends Component {
  static defaultProps = {
    data: null
  };

  renderRecursively() {
    if ( ! this.props.data.label) return null;
    return this.renderNodeRecursively(this.props.data);
  }

  renderNodeRecursively(node, depth = 0, key = 0) {
    const out = [];
    let counter = key;

    out.push(<TreeNode key={ counter++ } depth={ depth } data={ node } />);
    out.push(...node.children.map(child => this.renderNodeRecursively(child, depth + 1, counter++)));

    return out;
  }

  renderIteratively() {
    if ( ! this.props.data.label) return null;

    const queue = [{ depth: 0, data: this.props.data }];
    const nodes = [];
    let counter = 0;

    while (queue.length) {
      const node = queue.shift();

      nodes.push(<TreeNode key={ counter } depth={ node.depth } data={ node.data } />);
      counter++;

      if (node.data.children.length) {
        const children = node.data.children.map(child => ({ depth: node.depth + 1, data: child }));
        queue.unshift(...children);
      }
    }

    return nodes;
  }

  render() {
    if ( ! this.props.data) {
      return MSG_NO_DATA;
    }

    return (
      <div className="split-panel">
        <div>
          { this.renderRecursively() }
        </div>

        <div>
          { this.renderIteratively() }
        </div>
      </div>
    );
  }
}
