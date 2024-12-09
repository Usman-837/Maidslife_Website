import React from 'react'
import starimg from "../assets/star.svg"
import scheduleimg from "../assets/schdle.svg"
import graphimg from "../assets/gph.svg"
import frameimg from "../assets/frame.svg"

const Features = () => {

    const featurecards = [
        {
            id: 1,
            img: starimg,
            title: "Top rated professionals",
            des: "Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!"
        },
        {
            id: 2,
            img: scheduleimg,
            title: "Same-day availability",
            des: "Book in less than 60 seconds, and even select same-day slots."
        },
        {
            id: 3,
            img: graphimg,
            title: "Top quality, value for money services",
            des: "Our professionals are equipped with the best tools and our services are always priced with you in mind."
        },
        {
            id: 4,
            img: frameimg,
            title: "Super app",
            des: "Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!"
        }
    ]



    return (
        <div className='flex items-center justify-center bg-[#fafafa]'>
            <div className='max-w-container py-12 px-8 text-center'>
                <h2 className='text-3xl font-bold'>There are so many reasons to love Maidslife!</h2>
                <p className='text-lg mt-4'>Here are the top 4!</p>
                <div className='pt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                    {
                        featurecards.map((data) => {
                            return (
                                <div key={data.id} className="py-9 px-6 flex flex-col items-center justify-center bg-white rounded-lg">
                                    <img
                                        src={data.img}
                                        className="w-24"
                                    />
                                    <p className="font-bold text-2xl my-6">{data.title}</p>
                                    <p className='text-lg text-[#4A4A4A]'>{data.des}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features
