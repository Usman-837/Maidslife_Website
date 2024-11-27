import React from 'react'
import { LiaStarSolid } from "react-icons/lia"

const Testimonial = () => {

    const testimonialcards = [
        {
            id: 1,
            des: "I recently decided to give the cleaning service a try, and I have to say, I'm incredibly impressed. The cleaning lady arrived right on time, and the service she provided was exceptional! I booked a 4-hour cleaning session, and my apartment was left absolutely spotless.The lady worked tirelessly the entire time.I intend to make regular use of this service; it's so convenient and competitively priced, and the level of service is truly outstanding.",
            title: "Oliver"
        },
        {
            id: 2,
            des: "Today, I spontaneously booked a cleaning service, and despite the short notice, they efficiently arranged for a highly skilled professional to assist me. The service was exceptional, and the individual who performed it surpassed all expectations. She definitely deserves more than a perfect rating!",
            title: "Lidya"
        },
        {
            id: 1,
            des: "Amazing! I always rely on Justlife to clean my apartment because their staff are exceptionally professional and efficient. They also offer fantastic discounts, making it the perfect choice for me.",
            title: "Anna"
        }
    ]


    return (
        <div>
            <div className='flex items-center justify-center bg-[#f5f5f5]'>
                <div className='max-w-container py-12 px-8 text-center'>
                    <h2 className='text-3xl font-bold'>What customers say about Justlife</h2>
                    <p className='text-lg mt-4'>Justlife has been rated 4.8 out of 5 based on 1626 reviews as of March 2024.</p>
                    <div className='pt-12 grid grid-cols-2 gap-8'>
                        {
                            testimonialcards.map((data) => {
                                return (
                                    <div key={data.id} className="relative py-9 px-6 flex flex-col items-center justify-center bg-white rounded-lg">
                                        <p className="text-[#4A4A4A] text-2xl my-6 text-justify">{data.des}</p>
                                        <p className='text-3xl font-bold text-[#00c3ff]'>{data.title}</p>
                                        <div className='absolute flex text-3xl top-[-20px] py-1.5 px-2.5 bg-white border shadow-lg text-yellow-400 rounded-full'>
                                            <LiaStarSolid />
                                            <LiaStarSolid />
                                            <LiaStarSolid />
                                            <LiaStarSolid />
                                            <LiaStarSolid />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
