import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {

  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Jordan', age: 29 },
        { name: 'Austin', age: 25 },
        { name: 'Josh', age: 28 }
      ]
    });

    const switchNameHandler = () => {
        // console.log('was clicked')
        // DON'T DO THIS: this.state.persons[0].name = "Yorudan";
        setPersonsState({
          persons: [
            { name: 'Yorudan', age: 29 },
            { name: 'Austin', age: 25 },
            { name: 'Rat', age: 28 }
          ]
        });
      };

      const [otherState, setOtherState] = useState('some other state');

      console.log(personsState, otherState);



    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} > My Hobbies: Coding!</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Does this work now?'));
}


export default app;


// state = {
//   persons: [
//     { name: 'Jordan', age: 29 },
//     { name: 'Austin', age: 25 },
//     { name: 'Josh', age: 28 }
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   // console.log('was clicked')
//   // DON'T DO THIS: this.state.persons[0].name = "Yorudan";
//   this.setState({
//     persons: [
//       { name: 'Yorudan', age: 29 },
//       { name: 'Austin', age: 25 },
//       { name: 'Rat', age: 28 }
//     ]
//   })
// }
