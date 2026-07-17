import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <UserContextProvider>
    <h1>Chai and Code </h1>
  </UserContextProvider>
    </>
  )
}

export default App
