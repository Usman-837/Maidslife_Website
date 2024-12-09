// src/components/Servicesdetails.js

import React, { useState, useEffect } from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { 
    setDuration, 
    setProfessionalCount, // Import the new action
    setMaterial, 
    updateTotalCost 
} from '../../../redux/actions/bookingActions';

const Servicesdetails = () => {
    const dispatch = useDispatch();

    const totalCost = useSelector((state) => state.booking.totalCost); // Access total cost from Redux state
    const professionalCount = useSelector((state) => state.booking.professionalCount); // Access professional count

    // Initial default values
    const [selectedHour, setSelectedHour] = useState(1); // Default: 1 hour
    const [selectedProfessionalCount, setSelectedProfessionalCount] = useState(professionalCount); // Initialize with professionalCount
    const [activeMaterial, setActiveMaterial] = useState('No'); // Default: No material

    const HOUR_COST = 20; // Cost per hour
    const PROFESSIONAL_COST = 50; // Cost per professional
    const MATERIAL_COST = 10; // Cost for materials

    useEffect(() => {
        // Set initial total cost with default values
        const initialCost = (selectedHour * HOUR_COST) + (professionalCount * PROFESSIONAL_COST) + (activeMaterial === 'Yes' ? MATERIAL_COST : 0);
        dispatch(updateTotalCost(initialCost));
        dispatch(setDuration(selectedHour)); // Default duration
        dispatch(setProfessionalCount(selectedProfessionalCount)); // Default professional count
        dispatch(setMaterial(activeMaterial)); // Default material selection
    }, [dispatch, selectedHour, professionalCount, selectedProfessionalCount, activeMaterial]);

    const handleSetDuration = (id) => {
        setSelectedHour(id); // Update selected hour
        const updatedCost = (id * HOUR_COST) + (professionalCount * PROFESSIONAL_COST) + (activeMaterial === 'Yes' ? MATERIAL_COST : 0);
        dispatch(updateTotalCost(updatedCost)); // Update total cost in Redux
        dispatch(setDuration(id));
    };

    const handleSetProfessionalCount = (count) => { // Changed parameter to 'count'
        setSelectedProfessionalCount(count);
        const updatedCost = (selectedHour * HOUR_COST) + (count * PROFESSIONAL_COST) + (activeMaterial === 'Yes' ? MATERIAL_COST : 0);
        dispatch(updateTotalCost(updatedCost)); // Update total cost in Redux
        dispatch(setProfessionalCount(count)); // Dispatch the new action
    };

    const handleSetMaterial = (material) => {
        setActiveMaterial(material); // Update active material
        dispatch(setMaterial(material)); // Update material selection in Redux

        const updatedCost = (selectedHour * HOUR_COST) + (professionalCount * PROFESSIONAL_COST) + (material === 'Yes' ? MATERIAL_COST : 0);
        dispatch(updateTotalCost(updatedCost)); // Update total cost in Redux
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
                            ${selectedHour === data.id ? 'bg-[#d9f6ff] border-blue text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                        onClick={() => handleSetDuration(data.id)}
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
                            ${selectedProfessionalCount === data.id ? 'bg-[#d9f6ff] border-blue text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                        onClick={() => handleSetProfessionalCount(data.id)} // Pass count instead of id
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
                        ${activeMaterial === 'No' ? 'border-blue bg-[#d9f6ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
                    onClick={() => handleSetMaterial('No')}
                >
                    No, I have them
                </div>
                <div
                    className={`px-4 py-2 max-mobile:py-1.5 max-mobile:text-sm border border-gray-500 rounded-full flex items-center justify-center font-semibold cursor-pointer
                        ${activeMaterial === 'Yes' ? 'border-blue bg-[#d9f6ff] text-[#00c3ff]' : 'hover:border-[#00c3ff] hover:text-[#00c3ff]'}`}
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
