import React from 'react'

const TestimonialBox = ({heading, para, name}) => {
    return (
        <div className='flex flex-col gap-5 p-5 bg-[#212121]'>
            <div>

                <h3 className='text-[0.875rem] text-[#9ca3af]'>{para}</h3>

            </div>

            <div className='flex flex-col gap-1'>
                <span className='text-white font-medium text-[1rem]'>{name}</span>
                <span className='text-[0.875rem] text-[#9ca3af]'>{heading}</span>
            </div>
        </div>
    )
}

export default TestimonialBox
