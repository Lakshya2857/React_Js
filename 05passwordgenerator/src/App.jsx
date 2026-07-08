
import { useState } from 'react'
import './App.css'

function App() {
const [length,setLength]=useState(8)
const [numberAllowed]=useState(false)

  return (
    <>
    <h1 className='text-4xl text-centre'>Password Generator</h1>
    </>
  )
}

export default App
