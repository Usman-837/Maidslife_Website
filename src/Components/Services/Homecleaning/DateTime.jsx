import Reac, { useRef, useState } from 'react'
import { LuRefreshCw } from "react-icons/lu"
import autoasignimg from "../../../assets/funnel-auto-assign-image-logo.svg"
import phoebe from "../../../assets/phoebe.webp"
import marlyn from "../../../assets/marlyn.webp"
import grace from "../../../assets/grace.webp"
import goma from "../../../assets/goma.webp"
import sheryl from "../../../assets/sheryl.webp"
import { IoStar } from "react-icons/io5"
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const DateTime = () => {

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 8;

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
    { id: 1, date: "1", day: "Mon" },
    { id: 2, date: "2", day: "Tue" },
    { id: 3, date: "3", day: "Wed" },
    { id: 4, date: "4", day: "Thu" },
    { id: 5, date: "5", day: "Fri" },
    { id: 6, date: "6", day: "Sat" },
    { id: 7, date: "7", day: "Sun" },
    { id: 8, date: "8", day: "Mon" },
    { id: 9, date: "9", day: "Tue" },
    { id: 10, date: "10", day: "Wed" },
    { id: 11, date: "11", day: "Thu" },
    { id: 12, date: "12", day: "Fri" },
    { id: 13, date: "13", day: "Sat" },
    { id: 14, date: "14", day: "Sun" },
    { id: 15, date: "15", day: "Mon" },
    { id: 16, date: "16", day: "Tue" },
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

  const daytimesettings = {
    dots: false,
    arrows: false, // Disable default arrows
    infinite: false, // Disable infinite scroll to handle hiding arrows
    speed: 500,
    slidesToScroll: slidesToShow,
    slidesToShow: slidesToShow,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Track current slide
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToShow,
          infinite: false,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const totalSlides = Math.ceil(daydatecircle.length / slidesToShow);

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
          <div className="relative">
            {/* Conditional Left Arrow */}
            {currentSlide > 0 && (
              <div
                className="absolute top-11 left-[-15px] z-10 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaChevronLeft className='text-xl' />
              </div>
            )}

            <Slider ref={sliderRef} {...daytimesettings}>
              {daydatecircle.map((data) => (
                <div key={data.id} className='flex items-center justify-center gap-x-3'>
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-gray-700 pl-1.5">{data.day}</p>
                    <div className="w-10 h-10 max-mobile:w-7 max-mobile:h-7 border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer bg-[#d9f6ff] hover:border-blue hover:text-[#00c3ff]">
                      {data.date}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Conditional Right Arrow */}
            {currentSlide < totalSlides - 1 && (
              <div
                className="absolute top-11 right-[-15px] z-10 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaChevronRight className='text-xl' />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DateTime
