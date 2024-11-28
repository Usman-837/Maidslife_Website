import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { FaArrowLeft } from "react-icons/fa"


const Homecleaning = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center'>
        <section className='max-w-container w-full'>
          <header className='py-5'>
            <div className='flex items-center gap-x-3 pb-2'>
              <FaArrowLeft className='text-xl'/>
              <span className='font-semibold'>Step 1 of 4</span>
            </div>
            <div>
              <h2 className='font-bold text-xl'>Service Details</h2>
            </div>
          </header>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Homecleaning
