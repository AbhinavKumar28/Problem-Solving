import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import minusIcon from "../assets/minus.svg";
import plusIcon from "../assets/plus.svg";
[
{
"id": 0,
"title": "string",
"price": 0.1,
"description": "string",
"category": "string",
"image": "http://example.com"
}
]
function Card({
          id,
          title,
          price,
          image,
          quantity,
          setCartitems
}) {
  const handleAdd = () =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      duplicate[id]=duplicate[id]+1  
      return duplicate
    })
  }
  const handleMinus = () =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      if (duplicate[id]>0){
        duplicate[id]=duplicate[id]-1
      }
      return duplicate
    })
  }
  const handlePlus = () =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      duplicate[id]=duplicate[id]+1  
      return duplicate
    })
  }
  const handleInput = (value) =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      duplicate[id]=value
      return duplicate
    })
  }
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='card-items'>
        <p className='card-title'>{title}</p>
        <div className='flex-item'>
          <img src={image} alt="" className='card-images'/>
        </div>
        {(quantity===0)?<button onClick={handleAdd}>Add to Cart</button>:null}
        {(quantity!==0)?<div className='plus-minus'>
          <div className='flex-item'><img onClick={handleMinus} className="card-btn" src={minusIcon} alt="" />
          </div>
          <p>Qt : <input value={quantity} onChange={(e)=>handleInput(e.target.value)}></input></p>
          <div className='flex-item'><img onClick={handlePlus} className="card-btn" src={plusIcon} alt="" />
        </div>
        </div>:null}
        <p>Price : {price}</p>
      </div>
    </>
  )
}
export default Card
