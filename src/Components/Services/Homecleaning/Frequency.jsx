import React from 'react'
import { RxCross2 } from "react-icons/rx"

const Frequency = ({ toggleFrequencyPopup }) => {

    const choosefrequency = [
        {
            id: 1,
            freq: "Weekly",
            disc: "10% Off",
            des1: "Enjoy having the same professional every week.",
            des2: "Pause or cancel anytime."
        },
        {
            id: 2,
            freq: "Every 2 Weeks",
            disc: "5% Off",
            des1: "Enjoy having the same professional every 2 weeks.",
            des2: "Pause or cancel anytime."
        },
        {
            id: 3,
            freq: "One Time",
            des1: "Perfect pick when your schedule is uncertain.",
            des2: "Pause or cancel anytime."
        }

    ]


    return (
        <div>
            <div className='flex justify-between border-b'>
                <h4 className="text-lg font-bold mb-4">Choose Your Frequency</h4>
                <RxCross2 className='text-2xl font-semibold'  onClick={toggleFrequencyPopup} />
            </div>
            <div className="flex flex-col gap-4 pt-6">
                {
                    choosefrequency.map((data) => (
                        <div key={data.id} className='border px-5 py-3 rounded-lg space-y-4 hover:bg-[#ebfaff] hover:border-[#00c3ff]'>
                            <div className="flex justify-between border-b pb-3">
                                <div className='space-y-3'>
                                    <h3 className='text-2xl font-bold'>{data.freq}</h3>
                                    <p className='bg-[#49a36126] text-[#49a361] w-fit px-3 font-semibold rounded-md'>{data.disc}</p>
                                </div>
                                <div>
                                    <input type='radio' className='cursor-pointer custom-radio' />
                                </div>
                            </div>
                            <div className='text-base'>
                                <ul className='list-disc pl-5'>
                                    <li>{data.des1}</li>
                                    <li>{data.des2}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Frequency;
