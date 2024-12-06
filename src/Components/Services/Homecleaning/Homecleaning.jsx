import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { FaArrowLeft } from "react-icons/fa"
import Servicesdetails from './Servicesdetails'
import { useSelector, useDispatch } from 'react-redux'
import Popularaddons from './Popularaddons'
import DateTime from "./DateTime"
import { nextStep, prevStep, resetStep } from '../../../redux/actions/stepActions'
import { useNavigate } from 'react-router-dom'
import SubmitPopup from './SubmitPopup'


const Homecleaning = () => {

  const { services } = useSelector((state) => state.booking); // Get services dynamically
  const { frequency} = useSelector((state) => state.booking);

  const bookingTotalCost = useSelector((state) => state.booking.totalCost);
  const addonsTotalCost = useSelector((state) => state.popularAddons.totalCost);

  const totalCost = bookingTotalCost + addonsTotalCost;

  const { duration, professionals, material } = useSelector((state) => state.booking)
  const currentStep = useSelector((state) => state.step.currentStep); // Access step state
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showSubmitPopup, setShowSubmitPopup] = useState(false)

  const toggleSubmitPopup = () => {
    setShowSubmitPopup(!showSubmitPopup); // Toggle popup visibility
  };

  // Reset step on page refresh
  useEffect(() => {
    dispatch(resetStep());
  }, [dispatch]);

  const handleBackClick = () => {
    if (currentStep === 1) {
      navigate('/'); // Navigate to the home page
    } else {
      dispatch(prevStep()); // Go to the previous step
    }
  };

  const handleNextClick = () => {
    if (currentStep === 3) {
      setShowSubmitPopup(true); // Show the submit popup
    } else {
      dispatch(nextStep()); // Advance to the next step
    }
  };

  const bookingdetails = [
    {
      id: 1,
      title: "Address",
      des: <div>Axis - Beach Walk -<br />Dubai Marina - Dubai -<br />United Arab Emirates</div>
    },
    {
      id: 2,
      title: "Frequency",
      des: frequency
    },
    {
      id: 3,
      title: "Service",
      des: "Home Cleaning"
    },
    {
      id: 4, 
      title: "Service Details", 
      des: (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              {service.count}x &nbsp; {service.title}
            </li>
          ))}
        </ul>
      )
    },
    {
      id: 5,
      title: "Duration",
      des: duration
    },
    {
      id: 6,
      title: "Date and Start Time",
      des: <div>01 Dec 2024 <br /> 13:00-13:30</div>
    },
    {
      id: 7,
      title: "Number of Professionals",
      des: professionals
    },
    {
      id: 8,
      title: "Material",
      des: material
    }
  ]

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center bg-[#fafafa] px-4'>
        <section className='max-w-container w-full grid justify-center items-center'>
          <header className='py-5 pt-28'>
            <div className='flex items-center gap-x-3 pb-2'>
              <FaArrowLeft className='text-xl max-mobile:text-lg cursor-pointer' onClick={handleBackClick} />
              <span className='font-semibold'>Step {currentStep} of 4</span>
            </div>
            <div className='mt-1 font-semibold text-2xl max-mobile:text-2xl'>
              {currentStep === 1 ? (
                <h2>Service Details</h2>
              ) : currentStep === 2 ? (
                <h2>Popular Add-ons</h2>
              )
                : (
                  <h2>Date & Time</h2>
                )}
            </div>
          </header>
          <main className='pb-16'>
            <div className='gap-x-6 grid grid-cols-2 max-md:grid-cols-1'>
              <div className='bg-white max-w-[558px] w-full border rounded-xl p-6'>
                {currentStep === 1 && <Servicesdetails />}
                {currentStep === 2 && <Popularaddons />}
                {currentStep === 3 && <DateTime />}
                {/* Next Button */}
                <div className='py-6'>
                  <p className='text-center bg-[#FFD03E] hover:bg-yellow-400 py-3 max-mobile:py-2 rounded-full text-white font-bold' onClick={handleNextClick}>Next</p>
                </div>
              </div>
              <div className='flex flex-col w-full gap-y-7 max-md:mt-10'>
                {/* Booking Details */}
                <div className='bg-white max-w-[364px] w-full h-fit border rounded-xl p-6'>
                  <h4 className='font-bold text-lg mb-4'>Booking Details</h4>
                  <div>
                    {
                      bookingdetails.map((data) => {
                        return (
                          <div className='flex justify-between pb-3 max-mobile:text-sm'>
                            <p className='text-[#00000061]'>{data.title}</p>
                            <p className='text-right'>{data.des}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                {/* Payment Details */}
                <div className='bg-white max-w-[364px] w-full h-fit border rounded-xl p-6'>
                  <h4 className='font-bold text-lg mb-4'>Payment Details</h4>
                  <div className='flex items-center justify-between pb-3'>
                    <p className='text-[#00000061]'>Total</p>
                    <p className='text-right'>AED {totalCost.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div >
      <Footer />
      {showSubmitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-96 w-full">
            <SubmitPopup toggleSubmitPopup={toggleSubmitPopup} />
          </div>
        </div>
      )}
    </>
  )
}

export default Homecleaning
