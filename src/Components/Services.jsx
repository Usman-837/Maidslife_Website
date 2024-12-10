import React from 'react'
import homecleaning from "../assets/home-cleaning.jpeg"
import furniturecleaning from "../assets/furniture-cleaning.jpg"
import deepcleaning from "../assets/deep-cleaning.jpg"
import accleaning from "../assets/ac-cleaning.jpg"
import drycleaning from "../assets/laundry-cleaning.jpg"
import carcleaning from "../assets/carwash-cleaning.jpg"
import malecleaning from "../assets/male-cleaning.jpg"
import shoecleaning from "../assets/shoe-cleaning.jpg"
import womensalon from "../assets/women-salon.jpg"
import womenspa from "../assets/women-spa.jpg"
import menssalon from "../assets/mens-salon.jpg"
import mensspa from "../assets/mens-spa.jpg"
import makeup from "../assets/makeup.jpg"
import haircare from "../assets/hair-care.jpg"
import nailextension from "../assets/nails-extension.jpg"
import lashesbrows from "../assets/lashies-brows.png"
import spraytanning from "../assets/spray-tanning.jpg"
import handyman from "../assets/handymen.jpg"
import homepainting from "../assets/home-painting.jpg"
import watertank from "../assets/water-tank-cleaning.webp"
import { NavLink } from 'react-router-dom'


const Services = () => {

    const servicescards = [
        {
            id: 1,
            img: homecleaning,
            title: "Home cleaning",
            route: "/homecleaning"
        },
        {
            id: 2,
            img: furniturecleaning,
            title: "Furniture Cleaning",
            route: "/furniturecleaning"
        },
        {
            id: 3,
            img: deepcleaning,
            title: "Deep Cleaning",
            route: "/deepcleaning"
        },
        {
            id: 4,
            img: menssalon,
            title: "Premium Men's Salon",
            route: "/premiummenssalon"
        },
        {
            id: 5,
            img: drycleaning,
            title: "Laundry and dry Cleaning",
            route: "/laundryanddrycleaning"
        },
        // {
        //     id: 6,
        //     img: carcleaning,
        //     title: "Car Wash at Home",
        //     route: "/carwashathome"
        // },
        // {
        //     id: 7,
        //     img: malecleaning,
        //     title: "Male Cleaning Professionals",
        //     route: "/malecleaning"
        // },
        // {
        //     id: 8,
        //     img: shoecleaning,
        //     title: "Shoe Cleaning",
        //     route: "/shoecleaning"
        // },
        // {
        //     id: 9,
        //     img: womensalon,
        //     title: "Women's Salon",
        //     route: "/womenssalon"
        // },
        // {
        //     id: 10,
        //     img: womenspa,
        //     title: "Women's Spa",
        //     route: "/womensspa"
        // },
        // {
        //     id: 11,
        //     img: accleaning,
        //     title: "AC Cleaning at Home",
        //     route: "/accleaning"
        // },
        // {
        //     id: 12,
        //     img: mensspa,
        //     title: "Men's Spa",
        //     route: "/mensspa"
        // },
        // {
        //     id: 13,
        //     img: makeup,
        //     title: "Makeup",
        //     route: "/makeup"
        // },
        // {
        //     id: 14,
        //     img: haircare,
        //     title: "Hair Care",
        //     route: "/haircare"
        // },
        // {
        //     id: 15,
        //     img: nailextension,
        //     title: "Nail Extensions",
        //     route: "/nailextensions"
        // },
        // {
        //     id: 16,
        //     img: lashesbrows,
        //     title: "Lashes and Brows",
        //     route: "/lashesandbrows"

        // },
        // {
        //     id: 17,
        //     img: spraytanning,
        //     title: "Spray Tanning",
        //     route: "/spraytanning"
        // },
        // {
        //     id: 18,
        //     img: handyman,
        //     title: "Handyman & Maintenance",
        //     route: "/handyman&maintenance"
        // },
        // {
        //     id: 19,
        //     img: homepainting,
        //     title: "Home Painting",
        //     route: "/homepainting"
        // },
        // {
        //     id: 20,
        //     img: watertank,
        //     title: "Water Tank Cleaning",
        //     route: "/watertankcleaning"
        // }

    ]

    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-container w-full py-12 px-8 text-center'>
                <h2 className='text-3xl font-bold'>Leave your to-do list to us!</h2>
                <p className='mt-4 text-lg'>Check out some of our top home services:</p>
                <div className="pt-12 grid grid-cols-5 gap-6 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
                    {servicescards.map((data) => (
                        <div key={data.id} className="flex flex-col items-center transition ease-out duration-100 z-10">
                            <NavLink to={data.route}>
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    className="rounded-full w-32 h-32 max-md:w-32 max-md:h-32 max-sm:w-24 max-sm:h-24 object-cover hover:border hover:border-blue hover:shadow-2xl hover:z-30 hover:scale-110 transition-transform duration-500"
                                />
                            </NavLink>
                            <p className="font-bold py-2 max-sm:text-sm">{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
