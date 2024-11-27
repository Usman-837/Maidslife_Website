import React from 'react'
import appstore from "../assets/appstore.png"
import playstore from "../assets/playstore.png"
import appimg from "../assets/apps.webp"

const Mobileapp = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-container w-full pt-10 flex justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center'>
        <div className='max-w-[570px] w-full max-sm:text-center'>
          <span className='text-[#00000061] mb-2'>Download our Super app!</span>
          <p className='text-3xl font-semibold max-sm:text-2xl'>Manage all to-dos with a single tap!</p>
          <p className='text-lg mt-4'>Book and manage your appointments, view your professional’s profile and ratings, get the latest offers, and much more.</p>
          <div className='flex my-8 gap-x-9 max-sm:justify-center'>
            <img src={appstore} className='w-32 h-10' />
            <img src={playstore} className='w-32 h-10' />
          </div>
        </div>
        <div>
          <img src={appimg} className='w-96' />
        </div>
      </div>
    </div>
  )
}

export default Mobileapp
