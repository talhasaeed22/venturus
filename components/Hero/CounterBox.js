import React from 'react'
import { CountUp } from 'use-count-up'

const CounterBox = ({counter, heading}) => {
    return (
        <div className='flex flex-col gap-2 bg-[#212121] px-5 rounded-md py-14 items-center'>
            <div className='text-5xl font-bold text-white'>
                <CountUp thousandsSeparator="," end={counter} isCounting duration={4} />
            </div>
            <div className='text-center'>
                <span className='text-xl text-center text-white font-semibold'>{heading}</span>
            </div>
        </div>
    )
}

export default CounterBox
