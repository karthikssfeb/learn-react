// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0); // any function with use prefix is called a hook in react.
    // counter is a state 
    //setCounter is a function
    // 0 is the initial value of the state

    useEffect(() => {
      alert("counter changed to " + counter); // First parameter is a function to run
    },
    [counter] // Second parameters is a dependency list
    )

    return(
        <div className="App">
            <button onClick={() =>setCounter((x)=>x-1)}> - </button> 
            <h1> {counter} </h1>         
            <button onClick={() => setCounter((x)=>x+1) }> + </button>
        </div>
      );
}

export default App;
