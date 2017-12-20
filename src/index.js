import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

let person = {
  personName: "John",
  personAge: 24,
  favorites: [
    "cat",
    "Tyronnosaurus",
    "whatever"
  ]
}

ReactDOM.render(
  <Hello name={person.personName} age={person.personAge} animals={person.favorites}/>,
  document.getElementById('root')
);



//The render method generates a Virtual
//DOM node to be added to the actual DOM.

//<Hello/> is the name of the component
//to render

// name={"John"} - we are passing data
// whenever we are rendering our component
// in this case a prop called name with a
// value of John

//document.getElementById finds the
//DOM element to append the content
//of the component Hello to.

// When our index.js is processed, React
// compares the virtual DOM to the regular
// DOM and only updates the root element
// on the page.
