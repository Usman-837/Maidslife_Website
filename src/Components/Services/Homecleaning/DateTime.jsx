import React from 'react'
import { LuRefreshCw } from "react-icons/lu"
import autoasignimg from "../../../assets/funnel-auto-assign-image-logo.svg"
import phoebe from "../../../assets/phoebe.webp"
import marlyn from "../../../assets/marlyn.webp"
import grace from "../../../assets/grace.webp"
import goma from "../../../assets/goma.webp"
import sheryl from "../../../assets/sheryl.webp"

const DateTime = () => {

  const ProfessionalCards = [
    {
      id: 1,
      img: phoebe,
      rating: "45",
      des: "Recommended in your area"
    },
    {
      id: 2,
      img: marlyn,
      rating: "45",
      des: "Recommended in your area"
    },
    {
      id: 3,
      img: grace,
      rating: "45",
      des: "Recommended in your area"
    },
    {
      id: 4,
      img: goma,
      rating: "45",
      des: "Recommended in your area"
    },
    {
      id: 5,
      img: sheryl,
      rating: "45",
      des: "Recommended in your area"
    }
  ]


  return (
    <>
      <div>
        <div className='flex flex-col gap-y-6'>
          {/* Frequency Box */}
          <div className='flex flex-col gap-2 border border-[#00C3FF] px-5 py-3 rounded-lg bg-[#ebfaff]'>
            <div className='flex justify-between'>
              <h4 className='text-lg font-bold'>Frequency</h4>
              <a href='' className='text-[#00C3FF] underline font-semibold'>Change</a>
            </div>
            <div className='bg-[#00C3FF] text-white flex items-center font-semibold gap-x-2 p-2 rounded-lg'>
              <LuRefreshCw />
              <p>One Time Service</p>
            </div>
          </div>
          {/* Professionals */}
          <div>
            <h4 className='text-lg font-semibold'>Which professional do you prefer?</h4>
            <div className='border rounded-lg hover:border-[#00C3FF] p-4 flex flex-col items-center justify-center mt-4'>
              <img src={autoasignimg} className='rounded-full w-20' />
              <div className='flex flex-col gap-y-8'>
                <p className='font-semibold text-center pt-2'>Auto assign</p>
                <p className='text-sm text-[rgba(0,0,0,.6)]'>We'll assign the best professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DateTime
