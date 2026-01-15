import { useState } from 'react'
import {data,error} from "../data.js"
import ElementPart from './ElementPart.jsx'
function Section({sec_name, mark}) {
  return (
    <>
      {data[sec_name].map((cur,index)=>(
        <ElementPart key={index} field={cur} mark={mark} />
        ))}
    </>
  )
}

export default Section
