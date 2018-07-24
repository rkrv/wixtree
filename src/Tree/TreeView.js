import React, { Component, Fragment } from 'react';
import './TreeView.css';

export const MSG_NO_DATA = 'No tree data is loaded.';

export default class TreeView extends Component {
  static defaultProps = {
    data: null
  };

  renderRecursively() {
    if ( ! this.props.data.label) return null;
    return this.renderBranchRecursively(this.props.data);
  }

  renderBranchRecursively(node) {
    return (
      <div className="tree-branch" key={ node.label }>
        { node.label }

        {
          !! node.children.length &&
          node.children.map(node => this.renderBranchRecursively(node))
        }
      </div>
    );
  }

  renderIteratively() {
    if ( ! this.props.data.label) return null;

    const queue = [{ depth: 0, data: this.props.data }];
    const nodes = [];

    while (queue.length) {
      const node = queue.shift();
      nodes.push(node);

      if (node.data.children.length) {
        const children = node.data.children.map(child => ({ depth: node.depth + 1, data: child }));
        queue.unshift(...children);
      }
    }

    return nodes.map(node => {
      let spacing = Array(node.depth + 1).join('&nbsp;&nbsp;') + ' - ';

      return (
        <Fragment key={ node.data.label }>
          <span dangerouslySetInnerHTML={ { __html: spacing } } />
          { node.data.label }
          <br/>
        </Fragment>
      );
    });
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
