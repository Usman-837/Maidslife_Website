import React from 'react'
import { LuRefreshCw } from "react-icons/lu"
import autoasignimg from "../../../assets/funnel-auto-assign-image-logo.svg"
import phoebe from "../../../assets/phoebe.webp"
import marlyn from "../../../assets/marlyn.webp"
import grace from "../../../assets/grace.webp"
import goma from "../../../assets/goma.webp"
import sheryl from "../../../assets/sheryl.webp"
import { IoStar } from "react-icons/io5"
import Slider from 'react-slick'

const DateTime = () => {

  const ProfessionalCards = [
    {
      id: 1,
      img: phoebe,
      name: "Phoebe",
      rating: "4.9",
      des: "Recommended in your area"
    },
    {
      id: 2,
      img: marlyn,
      name: "Marlyn",
      rating: "4.7",
      des: "Recommended in your area"
    },
    {
      id: 3,
      img: grace,
      name: "Grace",
      rating: "4.7",
      des: "Recommended in your area"
    },
    {
      id: 4,
      img: goma,
      name: "Goma",
      rating: "4.7",
      des: "Recommended in your area"
    },
    {
      id: 5,
      img: sheryl,
      name: "Sheryl",
      rating: "4.7",
      des: "Recommended in your area"
    }
  ]

  const daydatecircle = [
    { id: 1, date: "1" },
    { id: 2, date: "2" },
    { id: 3, date: "3" },
    { id: 4, date: "4" },
    { id: 5, date: "5" },
    { id: 6, date: "6" },
    { id: 7, date: "7" },
    { id: 8, date: "8" },
    { id: 9, date: "9" },
    { id: 10, date: "10" },
    { id: 11, date: "11" },
    { id: 12, date: "12" },
    { id: 13, date: "13" },
    { id: 14, date: "14" },
    { id: 15, date: "15" },
    { id: 16, date: "16" },
  ];

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
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
        breakpoint: 993,
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


  return (
    <>
      <div className='flex flex-col gap-y-6'>
        {/* Frequency Box */}
        <div className='flex flex-col gap-2 border border-[#00C3FF] px-5 py-3 rounded-lg bg-[#ebfaff]'>
          <div className='flex justify-between'>
            <h4 className='text-lg font-bold'>Frequency</h4>
            <a href='' className='text-[#00C3FF] underline font-semibold'>Change</a>
          </div>
          <div className='bg-[#00C3FF] text-white flex items-center font-semibold gap-x-2 p-2 rounded-lg w-fit text-sm'>
            <LuRefreshCw />
            <p>One Time Service</p>
          </div>
        </div>
        {/* Professionals */}
        <div>
          <h4 className='text-lg font-semibold'>Which professional do you prefer?</h4>
          <Slider {...settings} className="my-4 pb-4">
            {/* Auto Assign Card */}
            <div className="flex items-center justify-center h-full px-2">
              <div className="border rounded-lg hover:border-[#00C3FF] p-4 flex flex-col items-center justify-center">
                <img src={autoasignimg} className="rounded-full w-20 h-20 object-cover" />
                <div className="flex flex-col gap-y-12 text-center">
                  <p className="font-semibold text-center pt-2">Auto assign</p>
                  <p className="text-sm text-[rgba(0,0,0,.6)]">We'll assign the best professional</p>
                </div>
              </div>
            </div>

            {ProfessionalCards.map((data) => (
              <div key={data.id} className="flex items-center justify-center h-full px-2">
                <div className="border rounded-lg hover:border-[#00C3FF] group p-4 flex flex-col items-center justify-center">
                  <img src={data.img} className="rounded-full w-20 h-20 border group-hover:border-[#00C3FF]" />
                  <div className="flex flex-col gap-y-2 text-center">
                    <p className="font-semibold pt-2 text-[#00C3FF] underline text-lg">{data.name}</p>
                    <p className="text-yellow-400 text-lg flex gap-x-1 items-center justify-center">
                      <IoStar />
                      {data.rating}
                    </p>
                    <p className="text-sm text-[rgba(0,0,0,.6)]">{data.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Date and Day */}
        <div>
          <div className="pb-4">
            <h4 className="font-semibold text-lg">When would you like your service?</h4>
          </div>
          {
            daydatecircle.map((data) => {
              return (
                <div key={data.id}  className="flex flex-col gap-y-1 pb-9">
                  <p className='font-semibold text-gray-700'>Mon</p>
                  <div className="w-10 h-10 max-mobile:w-7 max-mobile:h-7 border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer bg-[#d9f6ff] hover:border-blue hover:text-[#00c3ff]">
                    {data.date}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default DateTime
