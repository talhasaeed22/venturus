import React from 'react'
import HeroLogos from './HeroLogos'
import Countup from './Countup'

const Hero = () => {
    return (
        <div className='py-8 bg-gradient-to-b from-[#2af598] to-[#009efd]'>
            <div className='flex justify-between gap-5 lg:py-20 py-10 lg:px-22 xl:px-32 sm:px-10 px-2 pl-5'>

                <div className='flex-1 flex flex-col gap-5'>
                    <h3 className='text-[#1e51fd] md:text-[3.75rem] text-[2.25rem] font-[800] leading-tight'>Instant feedback <span className='text-black'>on your business ideas</span></h3>
                    <span className='text-gray-700 text-[1.25rem]'>Turn your business idea into reality! We use GPT-3.5 and GPT-4 to generate an analysis of your business idea and give you feedback on how to make it successful.</span>

                    <div className='flex gap-5 my-5 sm:flex-row flex-col'>
                        <button className='hover:bg-[#0e32a6] bg-[#1e51fd] text-white rounded-md px-4 py-3'>Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                        <button className='px-4 py-3 hover:bg-gray-700 rounded-md border border-gray-700 hover:text-white'>Learn more</button>
                    </div>

                </div>

                <div className="flex-1  items-center justify-center hidden xl:flex">
                    <img src="/images/hero.png" alt="logo" className=' w-[90%] rounded-lg' />
                </div>



            </div>
            {/* <div className=' lg:px-20 px-5'>
                <HeroLogos />
            </div> */}

            <div className='my-16'>
                <Countup/>
            </div>
        </div>
    )
}

export default Hero
