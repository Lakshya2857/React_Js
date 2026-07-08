import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-1000'
    style={{backgroundColor:color}}>
      
      <div className="bg-gray-400 m-2 rounded-xl ">
          <div className="flex flex-wrap justify-center gap-7">
            <button onClick={()=>{setcolor('red')}} className='border-2 p-1.5 rounded-2xl bg-white border-amber-50 text-2xl text-red-500 m-2 cursor-pointer '>Red</button>
            <button onClick={()=>{setcolor('grey')}} className='border-2 p-1.5 rounded-2xl bg-white border-amber-50 text-2xl text-gray-500 m-2 cursor-pointer '>Grey</button>
            <button onClick={()=>{setcolor('lightskyblue')}} className='border-2 p-1.5 rounded-2xl bg-white border-amber-50 text-2xl text-sky-400 m-2 cursor-pointer '>Blue</button>
            <button onClick={()=>{setcolor('lavender')}} className='border-2 p-1.5 rounded-2xl bg-white border-amber-50 text-2xl text-purple-100 m-2 cursor-pointer '>Lavender</button>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
