import React from 'react'
import TestimonialBox from './TestimonialBox'

const Testimonials = () => {
    return (
        <div className='flex flex-col gap-5 lg:px-22 xl:px-32 sm:px-10 px-2 '>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='text-4xl font-semibold'>Testimonials</h1>
                <span className='text-[#888f9b] sm:text-xl'>Hear from our users about their experience with VenturusAI.</span>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 my-10'>
                <div className='flex flex-col gap-5'>
                    <TestimonialBox heading={"Entrepreneur"} para={"VenturusAl can analyze your business ideas and provide you with comprehensive feedback on how to make them successful. It's the perfect tool for any business owner or entrepreneur looking to take their ideas to the next level."} name={'Ayyappa N.'} />
                    <TestimonialBox heading={"Learning & Development Leader"} para={"I am still gasping at the depth, the detailing, the thought process and the application of this Al. Just unbelievable!"} name={"Harish S."} />
                    <TestimonialBox name={"Sunita B."} para={"With new launches in Al everyday, I found VenturusAI quite useful. It analyses your business idea and gives you feedback (the more details you input, the better the output)."} heading={"Entrepreneur"}  />
                </div>

                <div className='flex flex-col gap-4'>
                    <TestimonialBox name={"@businessinjogginghose"} para={"The attention to user experience and constant work on improving the platform are really great. I'm glad to be part of the VenturusAI community."} />
                    <TestimonialBox name={"Marina S."} heading={"Tech Innovator"} para={"Seriously, it’s amazing - all you need to do is write your idea in one sentence, and in just seconds, you’ll get a ton of valuable insights and analyses. If you’re looking to launch a business, I highly recommend giving VenturusAI a try."} />
                </div>

                <div className='flex flex-col gap-5'>
                    <TestimonialBox heading={"Pedro de la N."} para={"How I like this app VenturusAI - you can put an idea in the eyes of the AI and it gives you a lot of interesting data, highly recommended"} name={"Entrepreneur"} />
                    <TestimonialBox heading={"Business System Analyst"} name={"Aliaksandr K."} para={"I checked out the new features - I really liked it, it will really help speed up the idea analysis process. Thank you VenturusAI for this opportunity."} />
                    <TestimonialBox heading={"Masters Student"} para={"I tried out a business idea I had in mind with just a brief description of 3-4 lines, and the detailed analysis received from VenturusAl was incredibly amazing. I would definitely recommend checking out VenturusAl."} name={"Ishant S."} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
