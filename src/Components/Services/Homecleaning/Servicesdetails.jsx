import React, { useState } from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setDuration, setProfessionals, setMaterial } from '../../../redux/actions/bookingActions';

const Servicesdetails = () => {
    const dispatch = useDispatch();

    // States to track active selections
    const [activeHour, setActiveHour] = useState(null); // State for active hour
    const [activeProfessional, setActiveProfessional] = useState(null); // State for active professional
    const [activeMaterial, setActiveMaterial] = useState(''); // State for active material

    const handleSetDuration = (hours, id) => {
        setActiveHour(id); // Set the active hour by ID
        dispatch(setDuration(hours));
    };

    const handleSetProfessionals = (professionals, id) => {
        setActiveProfessional(id); // Set the active professional by ID
        dispatch(setProfessionals(professionals));
    };

    const handleSetMaterial = (material) => {
        setActiveMaterial(material); // Set the active material
        dispatch(setMaterial(material));
    };

    const [text, setText] = useState('');
    const charLimit = 150; // Maximum character limit

    const handleChange = (e) => {
        const inputText = e.target.value;

        if (inputText.length <= charLimit) {
            setText(inputText); // Allow input only within character limit
        }
    };

    const Hours = [
        { id: 1, hours: "1" },
        { id: 2, hours: "2" },
        { id: 3, hours: "3" },
        { id: 4, hours: "4" },
        { id: 5, hours: "5" },
        { id: 6, hours: "6" },
        { id: 7, hours: "7" },
        { id: 8, hours: "8" },
    ];

    const Professionals = [
        { id: 1, prof: "1" },
        { id: 2, prof: "2" },
        { id: 3, prof: "3" },
        { id: 4, prof: "4" },
    ];

    return (
        <>
            {/* Hours Selection */}
            <div className="flex items-center gap-x-2 pb-4">
                <h4 className="font-semibold text-lg">How many hours do you need your professional to stay?</h4>
                <BsInfoCircleFill className="text-gray-600" />
            </div>
            <div className="flex gap-x-2 pb-9">
                {Hours.map((data) => (
                    <div
                        key={data.id}
                        className={`w-10 h-10 max-mobile:w-7 max-mobile:h-7 border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer
                            ${activeHour === data.id ? 'bg-[#d9f6ff] border-[#00c3ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                        onClick={() => handleSetDuration(data.hours, data.id)}
                    >
                        {data.hours}
                    </div>
                ))}
            </div>

            {/* Professional Selection */}
            <div className="pb-4">
                <h4 className="font-semibold text-lg">How many professionals do you need?</h4>
            </div>
            <div className="flex gap-x-2 pb-9">
                {Professionals.map((data) => (
                    <div
                        key={data.id}
                        className={`w-10 h-10 max-mobile:w-7 max-mobile:h-7 border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer
                            ${activeProfessional === data.id ? 'bg-[#d9f6ff] border-[#00c3ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                        onClick={() => handleSetProfessionals(data.prof, data.id)}
                    >
                        {data.prof}
                    </div>
                ))}
            </div>

            {/* Cleaning Material Buttons */}
            <div className="flex items-center gap-x-2 pb-4">
                <h4 className="font-semibold text-lg">Need cleaning materials?</h4>
                <BsInfoCircleFill className="text-gray-600" />
            </div>
            <div className="flex gap-x-2 pb-9">
                <div
                    className={`px-4 py-2 max-mobile:py-1.5 max-mobile:text-sm border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer
                        ${activeMaterial === 'No' ? 'bg-[#d9f6ff] border-[#00c3ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                    onClick={() => handleSetMaterial('No')}
                >
                    No, I have them
                </div>
                <div
                    className={`px-4 py-2 max-mobile:py-1.5 max-mobile:text-sm border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer
                        ${activeMaterial === 'Yes' ? 'bg-[#d9f6ff] border-[#00c3ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                    onClick={() => handleSetMaterial('Yes')}
                >
                    Yes, Please
                </div>
            </div>

            {/* Instructions */}
            <div className="pb-4">
                <h4 className="font-semibold text-lg">Any instructions or special requirements?</h4>
            </div>
            <div className="relative w-full max-w-lg">
                <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder="Example: Key under the mat, ironing, window cleaning, etc."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00c3ff] resize-none"
                />
                <div className="absolute bottom-2 right-4 text-gray-500 text-sm">
                    {text.length}/{charLimit}
                </div>
            </div>
        </>
    );
};

export default Servicesdetails;
