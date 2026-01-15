import { useState } from 'react'
import {data,error} from "../data.js"
function ElementPart({field, mark}) {
  const [count, setCount] = useState(0)
  const [inp, setInp]=useState("")
  return (
    <>
       <div>
            {mark==="edit"?(<><p>{field.toUpperCase()}</p><p>{inp}</p></>):(<><label htmlFor={field}>{field.toUpperCase()}</label>
            <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} name={field} id={field} /></>
          )}
            </div>
    </>
  )
}

export default ElementPart
