import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
      <div className='navbar'>
        <button onClick={() => navigate("/home")} className='btn-nav selected-navitem'>Home</button>
        <button onClick={() => navigate("/shop")} className='btn-nav'>Shop</button>
        <button onClick={() => navigate("/cart")} className='btn-nav'>Cart</button>
      </div>
      <h1>Best Shopping website</h1>
      <div className="home-images">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <footer className="">
        <p>Contact Us</p>
        <p>Address</p>
        <p>Phone Number</p>
      </footer>
    </>
  )
}
export default Home
