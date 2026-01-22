import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
function App() {
  const [cartitems, setCartitems] = useState(Array(20).fill(0))
  const [products, setProducts] = useState([])
  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
            products={products}
            setProducts={setProducts}
            cartitems={cartitems}
            setCartitems={setCartitems}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
            products={products}
            setProducts={setProducts}
            cartitems={cartitems}
            setCartitems={setCartitems}
            />
          }
        />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
