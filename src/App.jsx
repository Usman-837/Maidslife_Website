import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Services from './Components/Services'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <Features/>
      <Testimonial/>
    </div>
  )
}

export default App
