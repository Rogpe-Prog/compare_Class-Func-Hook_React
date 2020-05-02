import React, { useState } from 'react';
import './App.css';

export class Apps extends React.Component {
      state = {
        counter: 0
      }
    render(){
      return(
        <div className='Apps'>
        <h2>Here example with classes ES6</h2>
          <button onClick={() => this.setState({ counter: this.state.counter + 1})}>
            Inc - Class
          </button>
          <p>{this.state.counter}</p>
        </div>
      )
    }
}


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
    <h2>Here example with component Function - about Hook</h2>
      <button onClick={() => setCounter(counter + 1)}>Inc - Hook</button>
      <p>{counter}</p>
    </div>
  );
}

export default App

//destructuring assignamet
const arr = ['lime', 'mangos']
const [lime, mangos] = arr
console.log('arr', arr)
console.log('lime and mangos:', lime, mangos )
 

