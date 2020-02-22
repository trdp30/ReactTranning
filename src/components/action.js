import React, { Component } from 'react';

export default class Action extends Component {
  addApp(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    alert(option)
  }
  render() {
    return (
      <form onSubmit={this.addApp}>
        <div>
          <input type="text" name="option" />
          {this.props.hasUsers &&
            <button>Click</button>
          }
        </div>
      </form>
    )
  }
}