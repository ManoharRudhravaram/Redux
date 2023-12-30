import React from 'react'
import Home from './Pages/Home'
import Single from './Pages/Single'
import { Route,Routes } from 'react-router-dom'
import Cart from './Pages/Cart'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single/:id' element={<Single/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App