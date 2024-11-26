import React from 'react'
import logo from "../assets/logo.svg"
import { HiMiniBars3 } from "react-icons/hi2"
import { BiSolidUserCircle } from "react-icons/bi"

const Navbar = () => {
    return (
        <div className='border-b border-gray-200 h-20 flex items-center justify-center'>
            <div className='max-w-container w-full flex items-center justify-between'>
                <div>
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
