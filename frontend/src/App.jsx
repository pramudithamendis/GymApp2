import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    
    <Routes>
      <Route path='/gym/home' element={<Home />} />
      <Route path='/gym/create' element={<Home />} />
    </Routes>
  )
}

export default App