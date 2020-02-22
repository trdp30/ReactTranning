import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Options from './options';
import AddAction from './addAction';
import Action from './action';
import Counter from './statedemo';
import AddOption from './addoption';

export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      departments: ['d1', 'd2', 'd3']
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleOne = this.handleOne.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDelete () {
    this.setState(() => {
      return {
        users: []
      }
    })
  }

  handleOne(type, option) {
    this.setState((preState) => {
      return {
        users: preState[type].filter((value) => value !== option)
      }
    })
  }

  handleAddOption(option) {
    if(!option) {
      return alert('Enter a valid data')
    } else if (this.state.users.indexOf(option) > -1){
      return alert('User already added')
    }
    this.setState((preState) => {
      return {
        users: preState.users.concat(option)
      }
    })
  }

  render() {
    return (
      <div>
        <Header headerName="Header component rendered"/>
        <h1>
        <Options
          data={this.state.users}
          dept={this.state.departments}
          deleteAll={this.handleDelete}
          deleteRecord={this.handleOne}
          hasUsers={this.state.users.length > 0}
          />
        <AddOption hasUsers={this.state.users.length > 0} addOption={this.handleAddOption}/>
        {/* <Action hasUsers={this.state.users.length > 0} addUser={this.handleAddOption}/> */}
        <AddAction />
          {this.props.name} {this.props.email}
          Hello this is the page
        </h1>
        <Footer />
        <Counter/>
      </div>
    )
  }
}