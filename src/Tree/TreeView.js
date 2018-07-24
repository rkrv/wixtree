import React, { Component } from 'react';
import TreeNode from './TreeNode';
import './TreeView.css';

export const MSG_NO_DATA = 'No tree data is loaded.';

const MODE_RECURSIVE = 'MODE_RECURSIVE';
const MODE_ITERATIVE = 'MODE_ITERATIVE';

export default class TreeView extends Component {
  static defaultProps = {
    data: null,
    onAdd: () => {}
  };

  walkRecursively(node, depth = 0) {
    const out = [];

    out.push({ depth, data: node });

    node.children.forEach((child, i) => {
      out.push(...this.walkRecursively(child, depth + 1));
    });

    return out;
  }

  walkIteratively(node) {
    const queue = [{ depth: 0, data: node }];
    const nodes = [];

    while (queue.length) {
      const node = queue.shift();

      nodes.push(node);

      if (node.data.children.length) {
        const children = node.data.children.map(child => ({ depth: node.depth + 1, data: child }));
        queue.unshift(...children);
      }
    }

    return nodes;
  }

  renderTree(mode) {
    if ( ! this.props.data.label) return null;

    let nodes;

    switch (mode) {
      case MODE_RECURSIVE:
        nodes = this.walkRecursively(this.props.data);
        break;

      case MODE_ITERATIVE:
        nodes = this.walkIteratively(this.props.data);
        break;

      default:
        nodes = [];
    }

    return nodes.map(
      (node, i) => {
        return (
          <TreeNode
            key={ i }
            depth={ node.depth }
            data={ node.data }
            onAdd={ this.props.onAdd }
          />
        )
      }
    );
  }

  render() {
    if ( ! this.props.data) {
      return MSG_NO_DATA;
    }

    return (
      <div className="split-panel">
        <div>
          { this.renderTree(MODE_RECURSIVE) }
        </div>

        <div>
          { this.renderTree(MODE_ITERATIVE) }
        </div>
      </div>
    );
  }
}
