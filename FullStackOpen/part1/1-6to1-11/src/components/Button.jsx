import { useState } from 'react'
const Button = ({name,feedback,setFeedback}) => {
  return (
      <button onClick={()=>{setFeedback(feedback+1)}}>{name}</button>
  )
}
export default Button