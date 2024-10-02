import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    // console.log("clicked",counter);
    // counter = counter + 1
    // counter = counter + 1
    setCounter(counter + 1)
    /* This code is the interview perspective
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    */
    
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>footer:{counter}</p>

    </>
  )
}

export default App
