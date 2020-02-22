import React, { Component } from 'react';

export default class AddOption extends Component {
  
  constructor(props) {
    super(props)
    this.addApp = this.addApp.bind(this)
    this.state = {data: undefined}
  }

  addApp(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const data=this.props.addOption(option)
    this.setState(() => {
      return {data}
    })
  }
  render() {
    return (
      <form onSubmit={this.addApp}>
        <div>
          <input type="text" name="option" />
          {/* {this.props.hasUsers && */}
            <button className="btn btn-primary">Click</button>
          {/* } */}
        </div>
      </form>
    )
  }
}