import React from 'react'
import { LuRefreshCw } from "react-icons/lu"

const DateTime = () => {
  return (
    <>
      <div>
        <div>
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
        </div>
      </div>
    </>
  )
}

export default DateTime
