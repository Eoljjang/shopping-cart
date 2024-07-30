// This "App.jsx" component will just be my homepage.
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/home.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import mascot from './assets/mascot.png'

/* Treat this as the top level parent component */
function App() {
  // Since cart must be maintained across the entire app, we put it in the top level component.
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} cart={cart} setCartCount={setCartCount} setCart={setCart}/>
      <Outlet context={{ cart, setCart, setCartCount, cartCount }} />
    </>
  )
}

export default App
