import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Services'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route to="/header" element={<Navbar />} />
          <Route to="/banner" element={<Banner />} />
          <Route to="/services" element={<Services />} />
          <Route to="/features" element={<Features />} />
          <Route to="/testimonial" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
