import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Card from './Card.jsx';
function Cart() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
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
      <div className='cart-heading'>
        <p>Total</p>
        <p></p>
        <p>500/-</p>
      </div>
    </>
  )
}
export default Cart
