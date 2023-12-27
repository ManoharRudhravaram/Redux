import React from 'react'
import Home from './Pages/Home'
import Single from './Pages/Single'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single/:id' element={<Single/>}/>
    </Routes>
    </>
  )
}

export default App