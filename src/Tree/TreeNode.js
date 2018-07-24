import React, { Component } from 'react';

export default class TreeNode extends Component {
  static defaultProps = {
    depth: 0,
    data: null,
    onAdd: null
  };

  state = {
    showForm: false
  };

  input;

  handleToggle = () => {
    this.setState(state => ({ showForm: ! state.showForm }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.onAdd) {
      this.props.onAdd(this.input.value, this.props.data);
      this.setState({ showForm: false });
    }
  };

  renderForm() {
    if ( ! this.state.showForm) return;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input ref={ ref => this.input = ref } />
        <button>Add to this node</button>
      </form>
    );
  }

  render() {
    if ( ! this.props.data || ! this.props.data.label) {
      return null;
    }

    return (
      <div style={ { marginLeft: `${this.props.depth}rem` } }>
        { this.props.data.label }

        <button onClick={ this.handleToggle }>
          { this.state.showForm ? '-' : '+' }
        </button>

        { this.renderForm() }
      </div>
    );
  }
}
