import React from 'react'
import homecleaning from "../assets/home-cleaning.png"
import furniturecleaning from "../assets/furniture-cleaning.jpg"
import deepcleaning from "../assets/deep-cleaning.png"
import accleaning from "../assets/ac-cleaning.jpg"
import drycleaning from "../assets/dry-cleaning.jpg"
import carcleaning from "../assets/car-cleaning.jpg"
import Slider from "react-slick"

const Services = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
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


    const servicescards = [
        {
            id: 1,
            img: homecleaning,
            title: "Home cleaning"
        },
        {
            id: 2,
            img: furniturecleaning,
            title: "Furniture Cleaning"
        },
        {
            id: 3,
            img: deepcleaning,
            title: "Deep Cleaning"
        },
        {
            id: 4,
            img: accleaning,
            title: "AC Cleaning at Home"
        }, {
            id: 5,
            img: drycleaning,
            title: "Laundry and dry Cleaning"
        },
        {
            id: 6,
            img: carcleaning,
            title: "Car Wash at Home"
        },

    ]

    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-container w-full py-12 px-8 text-center'>
                <h2 className='text-3xl font-bold'>Leave your to-do list to us!</h2>
                <p className='mt-4 text-lg'>Check out some of our top home services:</p>
                 <div className="pt-12">
                    <Slider {...settings}>
                        {servicescards.map((data) => (
                            <div key={data.id} className="w-full px-3">
                                <div className="flex flex-col items-center transition ease-out duration-100 z-10">
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        className="rounded-xl h-40 w-52 object-cover"
                                    />
                                    <p className="font-bold py-2">{data.title}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Services
