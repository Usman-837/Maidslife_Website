import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Services'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import Insurance from './Components/Insurance'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <Features/>
      <Testimonial/>
      <Insurance/>
    </div>
  )
}

export default App
