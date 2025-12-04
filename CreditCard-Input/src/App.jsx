import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [one,setOne]=useState("")
  const [two, setTwo]=useState("")
  const [three, setThree]= useState("")
  const [four, setFour]= useState("")
  const refs={
    "1":useRef(),
    "2":useRef(),
    "3":useRef(),
    "4":useRef()
  }
  const [cur,setCur]=useState()
  const handleInput=(value)=>{
    if (value.length===4){

    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form action="" method="post">
          <input ref={refs["1"]} type="text" name="one" id="one" value={one} onChange={(e)=>handleInput(e.target.value)}/>
          <input ref={refs["2"]} type="text" name="two" id="two" value={two} onChange={(e)=>handleInput(e.target.value)}/>
          <input ref={refs["3"]} type="text" name="three" id="three" value={three} onChange={(e)=>handleInput(e.target.value)}/>
          <input ref={refs["4"]} type="text" name="four" id="four" value={four} onChange={(e)=>handleInput(e.target.value)}/>
          <button type="submit" >Submit</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
