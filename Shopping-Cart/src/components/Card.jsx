import { useState } from 'react'
import { useNavigate } from "react-router-dom";
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
          image
}) {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='card-items'>
        <p className='card-title'>{title}</p>
        <img src={image} alt="" className='card-images'/>
        <button>Add to Cart</button>
        <p>Price : {price}</p>
      </div>
    </>
  )
}
export default Card
