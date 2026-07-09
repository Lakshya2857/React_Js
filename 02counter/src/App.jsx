import { useState } from 'react'


function App() {
let[counter,setcounter]=useState(15)
const addValue=()=>{
  
  console.log("Clicked",counter)
  // counter=counter+1
  setcounter(counter+1)
  setcounter(prevCounter=>prevCounter+1)
  
}

const removeValue=()=>{
 
  console.log("Clicked",counter)
  setcounter(counter-1)
  
}
  return (
    <>
  <h1>Chai Aur React</h1>
  <h2>Counter Value:{counter}</h2>

  <button onClick={addValue}>
    
    Add_Value{counter}</button>
  <br />
  <button onClick={removeValue}>Remove_Value{counter}</button>
  <p>THIS IS COUNTER {counter}</p>
    </>
  )
}

export default App
