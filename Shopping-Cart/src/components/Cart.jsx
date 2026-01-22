import { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import Card from './Card.jsx';
import minusIcon from "../assets/minus.svg";
import plusIcon from "../assets/plus.svg";
function Cart({
            products,
            setProducts,
            cartitems,
            setCartitems}) {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const handleMinus = (id) =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      if (duplicate[id]>0){
        duplicate[id]=duplicate[id]-1
      }
      return duplicate
    })
  }
  const handlePlus = (id) =>{
    setCartitems((prev)=>{
      let duplicate = [...prev]
      duplicate[id]=duplicate[id]+1  
      return duplicate
    })
  }
  
  let total = 0;
  return (
    <>
      <div className='navbar'>
        <button onClick={() => navigate("/home")} className='btn-nav'>Home</button>
        <button onClick={() => navigate("/shop")} className='btn-nav'>Shop</button>
        <button onClick={() => navigate("/cart")} className='btn-nav selected-navitem'>Cart</button>
      </div>
      <h1>See below for the selected items to buy.</h1>
      <div className='cart-heading'>
        <p>Title</p>
        <p>No.</p>
        <p>Price</p>
      </div>
      {cartitems.map((item,index)=>{
        if (item!==0){
          total = total+(item * products[index].price)
          return <div key={index} className='cart-heading'>
            <p>{products[index].title}</p>
            <div className='plus-minus'>
                      <div className='flex-item'><img onClick={(e)=>{handleMinus(index)}} className="card-btn" src={minusIcon} alt="" />
                      </div>
                      <p>Qt : {item}</p>
                      <div className='flex-item'><img onClick={(e)=>{handlePlus(index)}} className="card-btn" src={plusIcon} alt="" />
                    </div>
                    </div>
            <p>{item} * {products[index].price}</p>
          </div>
        }
      })}
      <div className='cart-heading'>
        <p>Total</p>
        <p></p>
        <p>{total}/-</p>
      </div>
    </>
  )
}
export default Cart
