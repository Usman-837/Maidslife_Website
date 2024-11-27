import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-center bg-[#212121] py-2 px-4'>
            <div className='max-w-container w-full text-white'>
                <div className='flex justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='py-4 text-lg font-semibold'>United Arab Emirates</p>
                        <div className='pb-6 flex flex-col text-center w-36 gap-2'>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Dubai</a>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Abu Dhabi</a>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Sharjah</a>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Ajman</a>
                        </div>
                    </div>
                    <div>
                        <p className='py-4 text-lg text-center font-semibold'>Saudi Arabia</p>
                        <div className='pb-6 flex flex-col text-center w-36 gap-2'>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Jeddah</a>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Riyadh</a>
                        </div>
                    </div>
                    <div>
                        <p className='py-4 text-lg text-center font-semibold'>Qatar</p>
                        <div className='pb-6 flex flex-col text-center w-36 gap-2'>
                            <a href='' className='bg-black rounded-full px-2 py-0.5 text-sm'>Doha</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
