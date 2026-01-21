import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
function App() {
  const [count, setCount] = useState(0)
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
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
            />
          }
        />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
