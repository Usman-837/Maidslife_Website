import React, { useState } from "react"
import BannerImg from "../assets/banner.webp"
import { FaLocationDot } from "react-icons/fa6"
import { MdMyLocation } from "react-icons/md"

const Banner = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const handlePopupToggle = () => {
        setShowPopup((prev) => !prev);
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div
            className="bg-cover h-96 min-h-[583px] flex flex-col gap-y-6 items-center justify-center max-sm:px-3 mt-20"
            style={{
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: "cover",
            }}
        >
            <h1 className="text-5xl font-bold pb-3 text-[#333] max-smalllaptop:text-4xl max-sm:text-center max-sm:text-3xl">
                #1 Super app for all home services
            </h1>
            <div className="flex flex-col gap-y-4 bg-white border border-gray-300 rounded-lg max-w-[558px] w-full p-4">
                <p className="text-lg max-sm:text-[15px] font-bold">
                    Where would you like to receive your service?
                </p>
                <div className="p-2.5 flex gap-x-2 items-center border border-gray-300 rounded-full">
                    <FaLocationDot className="text-2xl" />
                    <input
                        type="text"
                        placeholder="Search for area, street name, landmark..."
                        className="w-full outline-none"
                    />
                    <div
                        className="bg-[#D9F6FF] rounded-full py-1.5 flex items-center justify-center gap-x-2 text-[#00C3FF] max-w-[141px] w-full cursor-pointer"
                        onClick={handlePopupToggle}
                    >
                        <p className="text-sm max-sm:text-xs">Set my location</p>
                        <MdMyLocation />
                    </div>
                </div>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-[90%] max-w-2xl p-6 relative">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                            onClick={handlePopupToggle}
                        >
                            ✖
                        </button>
                        <h2 className="text-lg font-bold mb-4">Select Your Location</h2>

                        {/* Search Field */}
                        <div className="mb-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Search for area, street name, or landmark"
                                className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                            />
                        </div>

                        {/* Google Maps Iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27241.710658938286!2d73.12994591584597!3d31.408234140416752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1733483535124!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
