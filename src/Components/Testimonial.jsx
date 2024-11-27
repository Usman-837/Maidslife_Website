import React from 'react'
import { LiaStarSolid } from "react-icons/lia"

const Testimonial = () => {
    return (
        <div>
            <div className='flex items-center justify-center bg-[#f5f5f5]'>
                <div className='max-w-container py-12 px-8 text-center'>
                    <h2 className='text-3xl font-bold'>What customers say about Justlife</h2>
                    <p className='text-lg mt-4'>Justlife has been rated 4.8 out of 5 based on 1626 reviews as of March 2024.</p>
                    <div className='pt-12'>
                        <div className="relative py-9 px-6 flex flex-col items-center justify-center bg-white rounded-lg">
                            <p className="text-[#4A4A4A] text-2xl my-6">I recently decided to give the cleaning service a try, and I have to say, I'm incredibly impressed. The cleaning lady arrived right on time, and the service she provided was exceptional! I booked a 4-hour cleaning session, and my apartment was left absolutely spotless.The lady worked tirelessly the entire time.I intend to make regular use of this service; it's so convenient and competitively priced, and the level of service is truly outstanding.</p>
                            <p className='text-3xl font-bold text-[#00c3ff]'>Oliver</p>
                            <div className='absolute flex text-3xl top-[-20px] py-1.5 px-2.5 bg-white border shadow-lg text-yellow-500 rounded-full'>
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                                <LiaStarSolid />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
