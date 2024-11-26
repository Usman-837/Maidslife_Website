import React from 'react'
import BannerImg from "../assets/banner.webp"

const Banner = () => {
    return (
        <div   className="bg-cover h-96 min-h-[583px] flex items-center justify-center" // Add height or other classes as needed
        style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
        }}>
            <h1 className='text-5xl font-bold'>#1 Super app for all home services</h1>
        </div>
    )
}

export default Banner
