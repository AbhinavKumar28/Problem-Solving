import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Card from './Card.jsx';
function Shop() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <>
      <div className='navbar'>
        <button onClick={() => navigate("/home")} className='btn-nav'>Home</button>
        <button onClick={() => navigate("/shop")} className='btn-nav selected-navitem'>Shop</button>
        <button onClick={() => navigate("/cart")} className='btn-nav'>Cart</button>
      </div>
      <h1>Choose the item</h1>
      <div className="home-images">
        {products.map((product)=>{
          return <Card 
          key={product.id} 
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          />
        })}
      </div>
    </>
  )
}
export default Shop
