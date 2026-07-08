import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  let add=()=>{
    setCount(count+1)
    
  }

  let remove=()=>{
    setCount(count-1)
  }

  return (
    <>
    <div className="numbers bg-amber-900 text-white m-5 text-4xl rounded-b-xl">Numbers</div>
    <button onClick={add}> Add_Number{count} </button>
    <button onClick={remove}> Remove_Number{count} </button>
    </>
  )
}

export default App
