import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


import Counter from './counter'
function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = React.useState(false);
  return (
    <div data-test="component-app" className="App">

     
        <div data-test="error-message" className={`error ${error==true ? '' : 'hidden'}`}>
          The counter cannot go below 0
      </div>
        <div data-test="counter-display">
          You clicked <span data-test="count">{count}</span>
             times
             </div>
        <button data-test="increment-button" onClick={() => {
          if (error) { setError(false) } setCount(count + 1)
        }}>
          Increment me
          </button>

        <button data-test="decrement-button" onClick={() =>{
          if(count>0){
           setCount(count - 1)
          }
          else{
            
            setError(true)
          }
          }
           }>
          Decrement me
          </button>
      </div>
  );
}

export default App;
