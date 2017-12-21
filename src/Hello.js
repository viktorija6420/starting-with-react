import React, { Component } from 'react';

class Hello extends Component {
  // what should happen when the component is first created
  constructor (props) {
    super()
    //it means you should still do what is default in this class

    //define initial state
    this.state = {
      moodPoints: 1
    }

  }
    increaseMood(e){
      this.setState({
        moodPoints: this.state.moodPoints + 1
      });
    }

  render() {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>You are {this.props.age} years old!</h3>
        <h3>Your favorite animal: {this.props.animals[0] + " "} </h3>
        <h3>On a scale of 1-10</h3>
        <h3>Your level of happiness: {this.state.moodPoints}</h3>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>
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
