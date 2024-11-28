import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { FaArrowLeft } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"


const Homecleaning = () => {

  const Hours = [
    {
      id: 1,
      hours: "1"
    },
    {
      id: 2,
      hours: "2"
    },
    {
      id: 3,
      hours: "3"
    },
    {
      id: 4,
      hours: "4"
    },
    {
      id: 5,
      hours: "5"
    },
    {
      id: 6,
      hours: "6"
    },
    {
      id: 7,
      hours: "7"
    },
    {
      id: 8,
      hours: "8"
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
            <div>
              <h2 className='font-bold text-xl'>Service Details</h2>
            </div>
          </header>
          <main className='pb-16'>
            <div className='bg-white max-w-[558px] w-full h-80 border rounded-xl p-6'>
              <div className='flex items-center gap-x-2 pb-4'>
                <h4 className='font-semibold text-lg'>How many hours do you need your professional to stay?</h4>
                <BsInfoCircleFill className='text-gray-600' />
              </div>
              <div className='flex gap-x-2 pb-9'>
                {
                  Hours.map((data) => {
                    return (
                      <div className='w-10 h-10 border border-gray-500 hover:border-[#00c3ff] rounded-full flex items-center justify-center font-semibold hover:text-[#00c3ff] active:bg-[#d9f6ff]'>{data.hours}</div>
                    )
                  })
                }
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
