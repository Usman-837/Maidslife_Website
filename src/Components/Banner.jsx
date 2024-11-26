import React from 'react'
import BannerImg from "../assets/banner.webp"
import { FaLocationDot } from "react-icons/fa6"
import { MdMyLocation } from "react-icons/md"

const Banner = () => {
    return (
        <div className="bg-cover h-96 min-h-[583px] flex flex-col gap-y-6 items-center justify-center" // Add height or other classes as needed
            style={{
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: "cover",
            }}>
            <h1 className='text-5xl font-bold'>#1 Super app for all home services</h1>
            <div className='flex flex-col gap-y-4 bg-white border border-gray-300 rounded-lg max-w-[558px] w-full p-4'>
                <p className='text-lg font-bold'>Where would you like to receive your sevice?</p>
                <div className='p-2.5 flex gap-x-2 items-center border border-gray-300 rounded-full'>
                    <FaLocationDot className='text-2xl' />
                    <input type='text' placeholder='Search for area, street name, landmark...' className='w-full outline-none' />
                    <div className='bg-[#D9F6FF] rounded-full py-1.5 flex items-center justify-center gap-x-2 text-[#00C3FF] max-w-[141px] w-full'>
                        <p className='text-sm'>Set my location</p>
                        <MdMyLocation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
