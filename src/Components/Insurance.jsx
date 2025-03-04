import React from 'react'
import insurancelogo from "../assets/insurance-logo.svg"
import patternimg from "../assets/pattern.png"

const Insurance = () => {
    return (
        <div className='object-cover flex items-center justify-center bg-[#00C3FF] p-12'
            style={{
                backgroundImage: `url(${patternimg})`,
            }}>
            <div className='max-w-container text-center flex gap-10 max-sm:flex-col max-sm:items-center'>
                <img src={insurancelogo} className='max-sm:w-36' />
                <div className='text-white text-left max-w-[660px] w-full'>
                    <h2 className='text-3xl max-sm:text-2xl font-semibold'>The Maidslife Promise – Excellence in Every Home</h2>
                    <p className='text-lg mt-4'>At Maidslife, we commit to the highest standards of home care. Our trained professionals deliver a superior service experience, ensuring your home is in expert hands. Your peace of mind is our promise.</p>
                </div>
            </div>
        </div>
    )
}

export default Insurance

