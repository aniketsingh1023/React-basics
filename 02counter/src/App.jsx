import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  const addValue = () => {
    console.log(" add value clicked",counter);
    if(counter >= 20){
      console.log("Counter is already at maximum value");
      return
    }
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue =() => {
    console.log("remove value clicked", counter);
    if(counter <= 0){
      console.log("Counter is already at zero");
      return
    }
    counter = counter - 1
    setCounter(counter)
  }

  return (
    <>
<h1>Counter Project</h1>
<h3>Counter Value :{counter} </h3>
<button
onClick={addValue}
>Add Value</button>
<br />
<button 
onClick={removeValue}
>remove Value</button>
    </>
  )
}

export default App
