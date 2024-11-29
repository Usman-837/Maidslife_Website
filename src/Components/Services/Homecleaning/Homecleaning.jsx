import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { FaArrowLeft } from "react-icons/fa"
import Servicesdetails from './Servicesdetails'
import { useSelector } from 'react-redux'


const Homecleaning = () => {
  
  const { duration, professionals, material } = useSelector((state) => state.booking)

  const bookingdetails = [
    {
      id: 1,
      title: "Address",
      des: <div>Axis - Beach Walk -<br />Dubai Marina - Dubai -<br />United Arab Emirates</div>
    },
    {
      id: 2,
      title: "Service",
      des: "Home Cleaning"
    },
    {
      id: 3,
      title: "Service Details",
      des: "2x Party Cleaning"
    },
    {
      id: 4,
      title: "Duration",
      des: duration
    },
    {
      id: 5,
      title: "Number of Professionals",
      des: professionals
    },
    {
      id: 6,
      title: "Material",
      des: material
    }
  ]

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center bg-[#fafafa] px-4'>
        <section className='max-w-container w-full grid justify-center items-center'>
          <header className='py-5'>
            <div className='flex items-center gap-x-3 pb-2'>
              <FaArrowLeft className='text-xl max-mobile:text-lg'/>
              <span className='font-semibold'>Step 1 of 4</span>
            </div>
            <div className='mt-7'>
              <h2 className='font-semibold text-3xl max-mobile:text-2xl'>Service Details</h2>
            </div>
          </header>
          <main className='pb-16'>
            <div className='gap-x-6 grid grid-cols-2 max-md:grid-cols-1'>
              <div className='bg-white max-w-[558px] w-full border rounded-xl p-6'>
                <Servicesdetails />
                {/* Next Button */}
                <div className='py-6'>
                  <p className='text-center bg-[#FFD03E] hover:bg-yellow-400 py-3 max-mobile:py-2 rounded-full text-white font-bold'>Next</p>
                </div>
              </div>
              <div className='flex flex-col w-full gap-y-7 max-md:mt-10'>
                {/* Booking Details */}
                <div className='bg-white max-w-[364px] w-full h-fit border rounded-xl p-6'>
                  <h4 className='font-bold text-lg mb-4'>Booking Details</h4>
                  <div>
                    {
                      bookingdetails.map((data) => {
                        return (
                          <div className='flex justify-between pb-3 max-mobile:text-sm'>
                            <p className='text-[#00000061]'>{data.title}</p>
                            <p className='text-right'>{data.des}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                {/* Payment Details */}
                <div className='bg-white max-w-[364px] w-full h-fit border rounded-xl p-6'>
                  <h4 className='font-bold text-lg mb-4'>Payment Details</h4>
                  <div className='flex items-center justify-between pb-3'>
                    <p className='text-[#00000061]'>Total</p>
                    <p className='text-right'>AED 55.00</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div >
      <Footer />
    </>
  )
}

export default Homecleaning
