import { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import Card from './Card.jsx';
function Cart({
            products,
            setProducts,
            cartitems,
            setCartitems}) {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
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
            <p>{item}</p>
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
