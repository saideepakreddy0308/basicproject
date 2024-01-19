import { React, useState } from "react";

function App() {

  const [counter,setCounter] = useState(3)

  // let counter = 3

  const addValue = () => {
    // console.log("value added", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }
  const removeValue = () => {
    // console.log("value removed", counter);
    // counter = counter + 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Deepak first react project</h1>
      <h2>Counter Value : {counter} </h2>
      <br />
      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
