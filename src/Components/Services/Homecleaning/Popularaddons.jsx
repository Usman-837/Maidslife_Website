import React from 'react'
import balconycleaning from "../../../assets/balcony-cleaning.webp"
import partycleaning from "../../../assets/party-category.webp"
import ironingfolding from "../../../assets/ironing-folding.webp"
import wardrobecleaning from "../../../assets/wardrobe-cleaning.webp"
import cupboardcleaning from "../../../assets/cupboard-cleaning.webp"
import fridgecleaning from "../../../assets/fridge-cleaning.webp"
import Slider from 'react-slick'

const Popularaddons = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const popularaddonscards = [
        {
            id: 1,
            img: balconycleaning,
            title: "Balcony Cleaning",
            des: "Get your balcony freshly cleaned.",
            currentprice: "AED 19",
            previousprice: "AED 25"
        },
        {
            id: 2,
            img: partycleaning,
            title: "Party Cleaning",
            des: "No-stress party prep & cleanup",
            currentprice: "AED 25",
            previousprice: "AED 30"
        },
        {
            id: 3,
            img: ironingfolding,
            title: "Ironing and Foldi...",
            des: "We will press and fold your clothes.",
            currentprice: "AED 25",
            previousprice: "AED 30"
        },
        {
            id: 4,
            img: wardrobecleaning,
            title: "Wardrobe Cleani...",
            des: "Thorough cleaning and arrangement...",
            currentprice: "AED 25",
            previousprice: "AED 30"
        },
        {
            id: 5,
            img: cupboardcleaning,
            title: "Cupboard Cleani...",
            des: "Messy cupboards? We will clean and...",
            currentprice: "AED 25",
            previousprice: "AED 30"
        },
        {
            id: 6,
            img: fridgecleaning,
            title: "Fridge Cleaning...",
            des: "We will clean the refrigerator inside...",
            currentprice: "AED 19",
            previousprice: "AED 25"
        }
    ]

    return (
        <div>
            <h4 className='text-lg font-semibold'>People also added</h4>
            <Slider {...settings} className='mt-4 mb-16'>
                {
                    popularaddonscards.map((data) => {
                        return (
                            <div className='grid grid-cols-3 px-2 mb-10 '>
                                <div key={data.id} className='border rounded-lg hover:border-[#00C3FF]'>
                                    <img src={data.img} className='rounded-t-lg h-20 bg-cover'/>
                                    <div className='px-2 py-2'>
                                        <p className='font-semibold'>{data.title}</p>
                                        <p className='text-sm'>{data.des}</p>
                                        <p className='text-[#00C3FF] font-semibold'>Learn more</p>
                                        <p className='text-sm pb-4'>{data.currentprice} <s className='text-gray-400'>{data.previousprice}</s></p>
                                    </div>
                                    <div className='absolute top-[205px] ml-9 text-sm flex items-center justify-center gap-x-1 bg-[#00C3FF] text-white font-bold w-20 rounded-full py-[2px]'>
                                        <p>ADD</p> <p className='text-xl'>+</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>

        </div>
    )
}

export default Popularaddons
