import React from 'react'
import logo from "../assets/logo.svg"
import googleplay from "../assets/google-play.jpg"
import appstore from "../assets/app-store.jpg"
import { HiMiniBars3 } from "react-icons/hi2"
import { BiSolidUserCircle } from "react-icons/bi"
import countrylogo from "../assets/sa.svg"
import { GrCircleQuestion } from "react-icons/gr"

const Navbar = () => {
    return (
        <>
            <div className='border-b border-gray-200 h-20 flex items-center justify-center'>
                <div className='max-w-container w-full flex items-center justify-between'>
                    <div>
                        <img src={logo} />
                    </div>
                    <div className='flex items-center'>
                        <p className='p-3 text-xs font-semibold'>
                            العربية
                        </p>
                        <div className='p-3'>
                            <img src={countrylogo} />
                        </div>
                        <div className='p-3 border border-gray-200 rounded-full flex gap-x-2 text-xl ml-3'>
                            <BiSolidUserCircle />
                            <HiMiniBars3 />
                        </div>
                    </div>
                    <div className='absolute pt-2 px-4 pb-4 bg-white shadow-custom-light mt-2.5 max-w-[360px] w-full right-56 top-16 rounded-lg'>
                        <button className='mb-4 py-2 px-5 bg-[#FFD03E] text-base text-white text-center font-bold rounded-full w-full'>Sign Up or Log in</button>
                        <a href='' className='flex items-center gap-x-1 text-base py-4 border-b border-gray-300'><GrCircleQuestion className='text-xl' /><span>Help</span></a>
                        <div className='flex items-center justify-center gap-x-2 py-4'>
                            <img src={googleplay} className='w-[150px]'/>
                            <img src={appstore} className='w-[150px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
