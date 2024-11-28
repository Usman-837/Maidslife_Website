import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { FaArrowLeft } from "react-icons/fa"
import Servicesdetails from './Servicesdetails'


const Homecleaning = () => {

  const bookingdetails = [
    {
      id: 1,
      title: "Address",
      des: <div>Axis - Beach Walk -<br />Dubai Marina - Dubai -<br />United Arab Emirates</div>
    },
    {
      id: 2,
      title: "Frequency",
      des: "One Time"
    },
    {
      id: 3,
      title: "Service",
      des: "Home Cleaning"
    },
    {
      id: 4,
      title: "Duration",
      des: "1 hour"
    },
    {
      id: 5,
      title: "Number of Professionals",
      des: "1"
    },
    {
      id: 6,
      title: "Material",
      des: "No"
    }
  ]

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center bg-[#fafafa]'>
        <section className='max-w-container w-full'>
          <header className='py-5'>
            <div className='flex items-center gap-x-3 pb-2'>
              <FaArrowLeft className='text-xl' />
              <span className='font-semibold'>Step 1 of 4</span>
            </div>
            <div className='mt-7'>
              <h2 className='font-semibold text-3xl'>Service Details</h2>
            </div>
          </header>
          <main className='pb-16'>
            <div className='flex gap-x-10'>
              <div className='bg-white max-w-[558px] w-full border rounded-xl p-6'>
                <Servicesdetails />
                {/* Next Button */}
                <div className='py-6'>
                  <p className='text-center bg-[#FFD03E] hover:bg-yellow-400 py-3 rounded-full text-white font-bold'>Next</p>
                </div>
              </div>
              <div className='bg-white max-w-[364px] w-full h-fit border rounded-xl p-6'>
                <h4 className='font-bold text-lg'>Booking Details</h4>
                <div>
                  {
                    bookingdetails.map((data) => {
                      return (
                        <div className='flex items-center justify-between pb-3'>
                          <p className='text-[#00000061]'>{data.title}</p>
                          <p className='text-right'>{data.des}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Homecleaning
