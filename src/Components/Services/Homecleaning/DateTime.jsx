import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LuRefreshCw } from "react-icons/lu"
import { IoStar } from "react-icons/io5"
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BsInfoCircleFill } from "react-icons/bs"
import Frequency from './Frequency'
import { 
    setSelectedDate, 
    setSelectedTime,
    setProfessionals,
} from '../../../redux/actions/bookingActions'

// Import images
import autoasignimg from "../../../assets/funnel-auto-assign-image-logo.svg"
import phoebe from "../../../assets/phoebe.webp"
import marlyn from "../../../assets/marlyn.webp"
import grace from "../../../assets/grace.webp"
import goma from "../../../assets/goma.webp"
import sheryl from "../../../assets/sheryl.webp"

const DateTime = () => {
  
  const dispatch = useDispatch();
  const { frequency, selectedDate, selectedTime, professionals, professionalCount } = useSelector((state) => state.booking);
  
  const [showFrequency, setShowFrequency] = useState(false); // State to toggle popup
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 8;

  const [selectedProfessionals, setSelectedProfessionals] = useState(professionals); // Local state for selection

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
  ];

  // Generate dates dynamically from today to the next 16 days
  const daydatecircle = Array.from({ length: 16 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    const day = date.toLocaleDateString(undefined, { weekday: 'short' });
    const dateNumber = date.getDate();
    const fullDate = date.toISOString().split('T')[0]; // e.g., '2024-12-07'
    return {
      id: index + 1,
      date: dateNumber,
      day: day,
      fullDate: fullDate,
    };
  });

  const Timecards = [
    { id: 1, time: "08:00-08:30" },
    { id: 2, time: "08:30-09:00" },
    { id: 3, time: "09:00-09:30" },
    { id: 4, time: "09:30-10:00" },
    { id: 5, time: "10:00-10:30" },
    { id: 6, time: "10:30-11:00" },
    // Add more time slots as needed
  ];

  // Slider settings for Professionals
  const professionalSettings = {
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

  // Slider settings for Dates
  const daytimesettings = {
    dots: false,
    arrows: false, // Disable default arrows
    infinite: false, // Disable infinite scroll to handle hiding arrows
    speed: 500,
    slidesToScroll: slidesToShow,
    slidesToShow: slidesToShow,
    autoplay: false,
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
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const totalSlides = Math.ceil(daydatecircle.length / slidesToShow);

  // Slider settings for Times
  const Timesettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  // Handlers to dispatch selected date and time
  const handleDateClick = (fullDate) => {
    dispatch(setSelectedDate(fullDate));
  };

  const handleTimeClick = (time) => {
    dispatch(setSelectedTime(time));
  };

  // Handler for selecting professionals
  const handleProfessionalSelect = (name) => {
    if (name === 'Auto Assign') {
      // If Auto Assign is selected, clear other selections and set to 'Auto Assign' only
      setSelectedProfessionals(['Auto Assign']);
      dispatch(setProfessionals(['Auto Assign']));
      // Note: professionalCount remains managed by Servicesdetails.js
    } else {
      if (selectedProfessionals.includes('Auto Assign')) {
        // Remove Auto Assign if a professional is selected
        setSelectedProfessionals([name]);
        dispatch(setProfessionals([name]));
        // professionalCount remains unchanged
      } else {
        // Toggle selection
        if (selectedProfessionals.includes(name)) {
          const updatedProfessionals = selectedProfessionals.filter(pro => pro !== name);
          setSelectedProfessionals(updatedProfessionals);
          dispatch(setProfessionals(updatedProfessionals));
        } else {
          if (selectedProfessionals.length < professionalCount) {
            const updatedProfessionals = [...selectedProfessionals, name];
            setSelectedProfessionals(updatedProfessionals);
            dispatch(setProfessionals(updatedProfessionals));
          } else {
            alert(`You can only select up to ${professionalCount} professionals.`);
          }
        }
      }
    }
  };

  // Remove the useEffect that was modifying professionalCount
  /*
  useEffect(() => {
    dispatch(setProfessionals(selectedProfessionals));
    dispatch(setProfessionalCount(selectedProfessionals.includes('Auto Assign') ? 1 : selectedProfessionals.length));
  }, [selectedProfessionals, dispatch]);
  */

  // Adjust selectedProfessionals if professionalCount changes externally (e.g., in Servicesdetails)
  useEffect(() => {
    if (selectedProfessionals.length > professionalCount && !selectedProfessionals.includes('Auto Assign')) {
      const updatedProfessionals = selectedProfessionals.slice(0, professionalCount);
      setSelectedProfessionals(updatedProfessionals);
      dispatch(setProfessionals(updatedProfessionals));
    }
  }, [professionalCount, selectedProfessionals, dispatch]);

  return (
    <>
      <div className='flex flex-col gap-y-6'>
        {/* Frequency Box */}
        <div className='flex flex-col gap-2 border border-blue px-5 py-3 rounded-lg bg-[#ebfaff]'>
          <div className='flex justify-between'>
            <h4 className='text-lg font-bold'>Frequency</h4>
            <p className='text-blue underline font-semibold' onClick={() => setShowFrequency(!showFrequency)}>Change</p>
          </div>
          <div className='bg-blue text-white flex items-center font-semibold gap-x-2 p-2 rounded-lg w-fit text-sm max-mobile:text-xs'>
            <LuRefreshCw />
            <p>{frequency} Service</p>
          </div>
        </div>

        {/* Professionals Slider */}
        <div>
          <h4 className='text-lg font-semibold'>Which professional do you prefer?</h4>
          <Slider {...professionalSettings} className="my-4 pb-4">
            {/* Auto Assign Card */}
            <div className="flex items-center justify-center h-full px-2">
              <div 
                className={`border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer ${
                  selectedProfessionals.includes('Auto Assign') ? 'border-blue bg-[#d9f6ff]' : 'hover:border-blue hover:bg-[#d9f6ff]'
                }`}
                onClick={() => handleProfessionalSelect('Auto Assign')}
              >
                <img src={autoasignimg} className="rounded-full w-20 h-20 object-cover" alt="Auto Assign" />
                <div className="flex flex-col gap-y-2 text-center">
                  <p className="font-semibold text-center pt-2">Auto Assign</p>
                  <p className="text-sm text-[rgba(0,0,0,.6)]">We'll assign the best professional</p>
                </div>
              </div>
            </div>

            {ProfessionalCards.map((data) => (
              <div key={data.id} className="flex items-center justify-center h-full px-2">
                <div 
                  className={`border rounded-lg group p-4 flex flex-col items-center justify-center cursor-pointer ${
                    selectedProfessionals.includes(data.name) ? 'border-blue bg-[#d9f6ff]' : 'hover:border-blue hover:bg-[#d9f6ff]'
                  }`}
                  onClick={() => handleProfessionalSelect(data.name)}
                >
                  <img src={data.img} className={`rounded-full w-20 h-20 ${selectedProfessionals.includes(data.name) ? 'border-blue' : 'border'} group-hover:border-blue`} alt={data.name} />
                  <div className="flex flex-col gap-y-2 text-center">
                    <p className="font-semibold pt-2 text-blue underline text-lg">{data.name}</p>
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
          {/* Show a message if no professionals are selected */}
          {selectedProfessionals.length === 0 && (
            <p className='text-red-500 text-sm mt-2'>Please select at least one professional or choose Auto Assign.</p>
          )}
        </div>

        {/* Date Selection */}
        <div>
          <div className="pb-4">
            <h4 className="font-semibold text-lg">When would you like your service?</h4>
          </div>
          <div className="relative">
            {/* Conditional Left Arrow */}
            {currentSlide > 0 && (
              <div
                className="absolute top-11 max-mobile:top-9 left-[-15px] max-mobile:left-[-12px] z-10 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaChevronLeft className='text-xl max-mobile:text-lg' />
              </div>
            )}

            <Slider ref={sliderRef} {...daytimesettings}>
              {daydatecircle.map((data) => (
                <div key={data.id} className='flex items-center justify-center gap-x-3'>
                  <div
                    className={`flex flex-col items-center cursor-pointer p-2 rounded-lg ${
                      selectedDate === data.fullDate ? 'bg-blue text-white' : 'hover:bg-[#d9f6ff] hover:border-blue'
                    }`}
                    onClick={() => handleDateClick(data.fullDate)}
                  >
                    <p className={`font-semibold ${selectedDate === data.fullDate ? 'text-white' : 'text-gray-700'} pl-1.5 max-mobile:text-sm`}>{data.day}</p>
                    <div className={`w-10 h-10 max-mobile:w-7 max-mobile:h-7 border rounded-full flex items-center justify-center font-semibold px-2 ${selectedDate === data.fullDate ? 'border-white bg-blue text-white' : 'border-gray-500'}`}>
                      {data.date}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Conditional Right Arrow */}
            {currentSlide < totalSlides - 1 && (
              <div
                className="absolute top-11 max-mobile:top-9 right-[-15px] max-mobile:right-[-18px] z-10 -translate-y-1/2 cursor-pointer"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaChevronRight className='text-xl max-mobile:text-lg' />
              </div>
            )}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <div className="pb-4">
            <h4 className="font-semibold text-lg">What time would you like us to start?</h4>
          </div>
          <Slider {...Timesettings}>
            {Timecards.map((data) => (
              <div key={data.id} className='pb-3'>
                <div
                  className={`w-fit h-10 border rounded-full flex items-center justify-center font-semibold cursor-pointer hover:border-blue hover:text-blue px-4 py-1.5 ${
                    selectedTime === data.time ? 'border-blue text-blue' : ''
                  }`}
                  onClick={() => handleTimeClick(data.time)}
                >
                  {data.time}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Booking Cancellation Info */}
        <div className='mt-4'> 
          <div className='flex items-center max-sm:items-start justify-center gap-x-2 bg-gray-100 p-4 rounded-lg h-20'>
            <BsInfoCircleFill className="text-gray-600 text-md max-mobile:text-2xl" />
            <p className='text-sm text-gray-500'>
              Enjoy free cancellation up to 6 hours before your booking start time.
            </p>
          </div>
        </div>

        {/* Frequency Popup */}
        {showFrequency && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-[498px] w-full">
              <Frequency toggleFrequencyPopup={() => setShowFrequency(!showFrequency)} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DateTime
