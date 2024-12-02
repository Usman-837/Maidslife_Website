import React from 'react'
import balconycleaning from "../../../assets/balcony-cleaning.webp"
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
            img: balconycleaning,
            title: "Balcony Cleaning",
            des: "Get your balcony freshly cleaned.",
            currentprice: "AED 19",
            previousprice: "AED 25"
        },
        {
            id: 3,
            img: balconycleaning,
            title: "Balcony Cleaning",
            des: "Get your balcony freshly cleaned.",
            currentprice: "AED 19",
            previousprice: "AED 25"
        }
    ]

    return (
        <div>
            <h4 className='text-lg font-semibold'>People also added</h4>
            <Slider {...settings}>
                {
                    popularaddonscards.map((data) => {
                        return (
                            <div className='grid grid-cols-3 mt-5 px-2'>
                                <div key={data.id} className='border rounded-lg hover:border-[#00C3FF]'>
                                    <img src={data.img} className='rounded-t-lg' />
                                    <div className='px-2 py-2'>
                                        <p className='font-semibold'>{data.title}</p>
                                        <p className='text-sm'>{data.des}</p>
                                        <p className='text-[#00C3FF] font-semibold'>Learn more</p>
                                        <p className='text-sm'>{data.currentprice} <s className='text-gray-400'>{data.previousprice}</s></p>
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
