import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count,setCount] = useState(0)
  let myObj ={
    username:"vishal",
    age:22
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>
      Taiwind Test</h1>
      <Card username="chai aur code" btnText="purchase"/>
      <Card username="Vishal"/>
    </>
  )
}

export default App
