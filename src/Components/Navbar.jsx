import React from 'react'
import logo from "../assets/logo.svg"
import { HiMiniBars3 } from "react-icons/hi2"
import { BiSolidUserCircle } from "react-icons/bi"
import countrylogo from "../assets/sa.svg"

const Navbar = () => {
    return (
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
            </div>
        </div>
    )
}

export default Navbar
