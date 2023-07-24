import React from 'react'

const DiscoverBox = ({svg, heading, para}) => {
    return (
        <div className='flex flex-col gap-5 p-6'>
            <div className='border rounded-full p-2 bg-white w-fit'>
                {svg}
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-semibold text-white'>{heading}</h1>
                <span className='text-[#9ca3af] text-[1rem]'>{para}</span>
            </div>
        </div>
    )
}

export default DiscoverBox
