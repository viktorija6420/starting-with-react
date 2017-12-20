// bring in React and Component from React
import React, { Component } from 'react';

// define our Hello component
class Hello extends Component {
// what should the component render?
  render() {
    // make sure to return some UI
    return (
      <div>
        <p>Seems like React cannot handle more than one
        JSX element per component, so putting more elements
        in one is a good solution. Cool!</p>
        <h1>Hello {this.props.name}!</h1>
        <h3>You are {this.props.age} years old!</h3>
        <h3>Your favorite animal: {this.props.animals[0] + " "} </h3>
      </div>
    );
  }
}
//<h1>Hello {this.props.name}!</h1>
//this=specific component instance
//this.props=will collect all the props
//for this component instance
//this.props.name=pulls out the name
//property from this.props

//This exposes the Hello class to other files.
//It means that other files can import from the
//App.js file in order to use the Hello class.
export default Hello

//The default keyword means that if we try
//to import anything from this file that the
// app can't find, JavaScript will automatically
// revert to importing Hello instead.

//Only one default export is allowed per file.
