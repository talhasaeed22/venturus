import React from 'react'
import { CountUp } from 'use-count-up'

const CounterBox = ({counter, heading}) => {
    return (
        <div className='flex flex-col gap-2 bg-gray-700 px-5 rounded-md py-14 items-center'>
            <div className='text-5xl font-bold text-white'>
                <CountUp thousandsSeparator="," end={counter} isCounting duration={4} />
            </div>
            <div>
                <span className='text-xl text-white font-semibold'>{heading}</span>
            </div>
        </div>
    )
}

export default CounterBox
