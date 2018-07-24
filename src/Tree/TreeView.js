import React, { Component, Fragment } from 'react';
import './TreeView.css';

export const MSG_NO_DATA = 'No tree data is loaded.';

export default class TreeView extends Component {
  static defaultProps = {
    data: null
  };

  state = {
    renderRecursively: true
  };

  toggleRender = () => {
    this.setState(state => ({ renderRecursively: ! state.renderRecursively }));
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
      const node = queue.pop();
      nodes.push(node);

      if (node.data.children.length) {
        const children = node.data.children.map(child => ({ depth: node.depth + 1, data: child }));
        queue.push(...children);
      }
    }

    return nodes.map(node => {
      let spacing = Array(node.depth).join('&nbsp;&nbsp;') + ' - ';

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
      <div>
        <div>
          <button onClick={ this.toggleRender }>
            {
              this.state.renderRecursively ?
                "Render iteratively"
                :
                "Render recursively"
            }
          </button>
        </div>

        <br/>

        {
          this.state.renderRecursively ?
            this.renderRecursively()
            :
            this.renderIteratively()
        }
      </div>
    );
  }
}
