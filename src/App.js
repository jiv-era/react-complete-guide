import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jordan', age: 29 },
      { name: 'Austin', age: 25 },
      { name: 'Josh', age: 28 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked')
    // DON'T DO THIS: this.state.persons[0].name = "Yorudan";
    this.setState({
      persons: [
        { name: 'Yorudan', age: 29 },
        { name: 'Austin', age: 25 },
        { name: 'Rat', age: 28 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > My Hobbies: Coding!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}  />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Does this work now?'));
  }
}

export default App;
