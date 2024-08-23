
import React from 'react'
import { TestimonialSlider } from '../TestimonialSlider';

export const Testimonial = () => {

    const data = {
        heading: "What Our Clients Say",
        description: `A comprehensive list of testimonials of our work`,
        quote: [
            {
                rating: 5,
                description: "I am pleased to write this testimonial for Varnitech and their exceptional service in delivering the Invoice Extraction System named SimplyFlow. From the initial stages of our project, the team at Varnitech demonstrated their expertise, professionalism, and commitment to excellence in delivering a top-notch solution that has exceeded our expectations.",
                name: "Mind Master Pte Ltd, Team Lead"
            },
            {
                rating: 5,
                description: "I am delighted to provide a positive testimonial for Varnitech's excellent work in creating a connector for Pranam POS, to different accounting systems. As a business owner, It was critical for success of business to have a smooth integration between pranam point-of-sale system and accounting software, and Varnitech has truly impressed us with their exceptional service.",
                name: "UKB IT Solutions Pvt Ltd, CEO"
            },
            {
                rating: 5,
                description: "The data analytics solution provided by Varni Tech helped us to make data-driven decisions and gain a competitive edge in our industry. Their team was knowledgeable in the latest analytics tools and technologies, and were able to provide valuable insights and recommendations that helped us improve our business operations.",
                name: "SID Information Technology, Co-Founder"
            }
        ]
    }    

    if (!data || !data.heading || !data.description || !data.quote) {
        return (
            <div className='bg-[#F3F4F6]'>
                <p>Component data not found.</p>
            </div>
        );
    }

    return (
        <div className='overflow-hidden'>
            <TestimonialSlider heading={data.heading} description={data.description} quote={data.quote} />
        </div>
    )
}
