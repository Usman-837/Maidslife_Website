import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import googleplay from "../assets/google-play.jpg"
import appstore from "../assets/app-store.jpg"
import { HiMiniBars3 } from "react-icons/hi2"
import countrylogo from "../assets/sa.svg"
import aelogo from "../assets/ae.svg"
import qalogo from "../assets/qa.svg"
import { BiSolidUserCircle } from "react-icons/bi"
import { GrCircleQuestion } from "react-icons/gr"

const Navbar = () => {

    const [loginbox, setloginbox] = useState(false)
    const [selectcountry, setselectcountry] = useState(false)

    return (
        <>
            <div className='border-b border-gray-200 h-20 flex items-center justify-center fixed w-full bg-white z-50 top-0'>
                <div className='max-w-container w-full flex items-center justify-between px-4'>
                    <div>
                        <img src={logo} className='w-28 h-16 max-mobile:w-24' />
                    </div>
                    <div className='flex items-center'>
                        <p className='p-3 text-sm font-semibold hover:border border-gray-300 rounded-full'>
                            العربية
                        </p>
                        <div className='p-3 hover:border border-gray-300 rounded-full' onClick={() => { setselectcountry(!selectcountry), setloginbox(false) }}>
                            <img src={countrylogo} className='w-6' />
                        </div>
                        <div className='px-3 py-2.5 max-mobile:px-2 max-mobile:py-2 border border-gray-200 rounded-full flex gap-x-2 text-2xl max-mobile:text-xl ml-3 hover:bg-gray-100' onClick={() => { setloginbox(!loginbox), setselectcountry(false) }}>
                            <BiSolidUserCircle />
                            <HiMiniBars3 />
                        </div>
                    </div>
                    {/* Signin and Signup Box */}
                    <div className="absolute w-full top-20">
                        <div className="max-w-container w-full px-8 flex justify-end">
                            {
                                loginbox ?
                                    <div className='pt-2 px-4 pb-4 bg-white shadow-custom-light mt-2.5 max-w-[360px] w-full rounded-lg'>
                                        <button className='mb-4 py-2 px-5 bg-[#FFD03E] text-base text-white text-center font-bold rounded-full w-full'>Sign Up or Log in</button>
                                        <a href='' className='flex items-center gap-x-1 text-base py-4 border-b border-gray-300'><GrCircleQuestion className='text-xl' /><span>Help</span></a>
                                        <div className='flex items-center justify-center gap-x-2 py-4'>
                                            <img src={googleplay} className='w-[150px]' />
                                            <img src={appstore} className='w-[150px]' />
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>

                    {/* Select Country Box */}
                    {/* <div className="absolute w-full top-20">
                        <div className="max-w-container w-full px-8 flex justify-end">
                            {
                                selectcountry ? <div className='max-w-64 w-full flex flex-col gap-y-3 p-4 mt-2.5 rounded-md bg-white shadow-sm shadow-gray-300'>
                                    <span className='font-bold'>Select Country</span>
                                    <a href=''>
                                        <div className='flex gap-x-2 border border-gray-300 rounded-md py-3 px-2 hover:border-[#79daf9] hover:bg-[#ebf3f5]'>
                                            <img src={aelogo} />
                                            <span className='font-semibold'>United Arab Emirates</span>
                                        </div>
                                    </a>
                                    <a href=''>
                                        <div className='flex gap-x-2 border border-gray-300 rounded-md py-3 px-2 hover:border-[#79daf9] hover:bg-[#ebf3f5]'>
                                            <img src={countrylogo} />
                                            <span className='font-semibold'>Saudia Arabia</span>
                                        </div>
                                    </a>
                                    <a href=''>
                                        <div className='flex gap-x-2 border border-gray-300 rounded-md py-3 px-2 hover:border-[#79daf9] hover:bg-[#ebf3f5]'>
                                            <img src={qalogo} />
                                            <span className='font-semibold'>Qatar</span>
                                        </div>
                                    </a>
                                </div> : null
                            }
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Navbar
