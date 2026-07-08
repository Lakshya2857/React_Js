
import './App.css'
import Card from './components/Card'

function App() {

  let myobj={
    username:"hitesh",
    age:21
  }

  return (
    <>
      <h1 className="bg-green-500 text-blue-300 p-4 rounded-xl">
        TailWind CSS
      </h1>
      <Card username="1-No"  someobj={myobj}/>
      <Card username="2-No"  someobj={myobj}/>
    </>
  )
}

export default App
