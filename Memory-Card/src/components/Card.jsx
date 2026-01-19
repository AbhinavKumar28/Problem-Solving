// import { useState } from 'react'
// import './App.css'

function Card({name,image}) {
  return (
    <>
        <div><img src={image} alt="" /></div>
        <div>{name}</div>
    </>
  )
}

export default Card
