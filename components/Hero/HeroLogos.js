import React from 'react'

const HeroLogos = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5 md:grid-cols-3 md:gap-3 sm:gap-3 gap-2'>
        <div className='flex items-center justify-center'>
            <img src="/images/logos/logo1.png" alt="logo"  className=' sm:w-2/3 cursor-pointer' />
        </div>
        <div className='flex items-center justify-center'>
            <img src="/images/logos/logo2.svg" alt="logo"  className=' sm:w-2/3 cursor-pointer' />
        </div>
        <div className='flex items-center justify-center'>
            <img src="/images/logos/logo3.svg" alt="logo"  className=' sm:w-2/3 cursor-pointer grayscale hover:grayscale-0 transition ease-in-out duration-500' />
        </div>
        <div className='flex items-center justify-center'>
            <img src="/images/logos/logo4.png" alt="logo"  className=' sm:w-2/3 cursor-pointer grayscale hover:grayscale-0 transition ease-in-out duration-500' />
        </div>
        <div className='flex items-center justify-center'>
            <img src="/images/logos/logo5.png" alt="logo"  className=' sm:w-2/3 cursor-pointer grayscale hover:grayscale-0 transition ease-in-out duration-500' />
        </div>
    </div>
  )
}

export default HeroLogos
