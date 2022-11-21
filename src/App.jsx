import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Services from './pages/services'
import Location from './pages/location'
import Doctors from './pages/doctors'
import Date from './pages/date'

import './App.css'

function App() {
  return (
    <Router basename='/hospital'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/location' element={<Location />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/date' element={<Date />} /> 
      </Routes>
    </Router>
  )

}


export default App
