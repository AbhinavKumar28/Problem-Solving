import { useState } from 'react'
import Section from './Section.jsx'
function FormPart({sec_name}) {
  const [arr, setArr] = useState([crypto.randomUUID()])
  const [mark,setMark]=useState("submit")
  const handleMark = ()=>{
    setMark((i)=>{return (i==="edit")?"submit":"edit"})
  }
  const handleCount = ()=>{
    setArr([...arr, crypto.randomUUID()])
  }
  const deleteSection = (id) =>{
    setArr((arr)=>{return arr.filter(item => item !== id)})
  }
  return (
    <>
        {arr.map((id, i) => (
    <div
      key={id}>
    <Section
      sec_name={sec_name}
      mark={mark}
    />
    {["sec_2", "sec_3"].includes(sec_name) && mark === "submit" && (
    <button onClick={()=>deleteSection(id)}>Delete</button>
  )}
    </div>
  ))}
        {["sec_2", "sec_3"].includes(sec_name) && mark === "submit" && (
    <button onClick={handleCount}>Add</button>
  )}
  <button onClick={handleMark}>{mark.toUpperCase()}</button>
    </>
  )
}

export default FormPart
