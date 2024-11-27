import React from 'react'
import homecleaning from "../assets/home-cleaning.png"
import furniturecleaning from "../assets/furniture-cleaning.jpg"
import deepcleaning from "../assets/deep-cleaning.png"
import accleaning from "../assets/ac-cleaning.jpg"
import drycleaning from "../assets/dry-cleaning.jpg"
import carcleaning from "../assets/car-cleaning.jpg"
import malecleaning from "../assets/male-cleaning.png"
import shoecleaning from "../assets/shoe-cleaning.jpg"
import womensalon from "../assets/women-salon.png"
import womenspa from "../assets/women-spa.png"
import menssalon from "../assets/mens-salon.jpg"
import mensspa from "../assets/mens-spa.png"


const Services = () => {

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
        {
            id: 7,
            img: malecleaning,
            title: "Male Cleaning Professionals"
        },
        {
            id: 8,
            img: shoecleaning,
            title: "Shoe Cleaning"
        },
        {
            id: 9,
            img: womensalon,
            title: "Women's Salon"
        },
        {
            id: 10,
            img: womenspa,
            title: "Women's Spa"
        }, {
            id: 11,
            img: menssalon,
            title: "Premium Men's Salon"
        },
        {
            id: 12,
            img: mensspa,
            title: "Men's Spa"
        },

    ]

    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-container w-full py-12 px-8 text-center'>
                <h2 className='text-3xl font-bold'>Leave your to-do list to us!</h2>
                <p className='mt-4 text-lg'>Check out some of our top home services:</p>
                <div className="pt-12 grid grid-cols-5 gap-6">
                    {servicescards.map((data) => (
                        <div key={data.id} className="flex flex-col items-center transition ease-out duration-100 z-10">
                            <img
                                src={data.img}
                                alt={data.title}
                                className="rounded-full w-52 h-48 object-cover"
                            />
                            <p className="font-bold py-2">{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
