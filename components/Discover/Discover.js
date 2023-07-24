import React from 'react'
import DiscoverBox from './DiscoverBox'
import { svgs, discoverData } from './Svgs'
const Discover = () => {
  return (
    <div className='lg:px-22 xl:px-32 sm:px-10 px-2 py-14 flex flex-col bg-[#2e3b52]'>

        <div className='flex flex-col gap-5 p-5'>
            <h1 className='text-4xl font-bold text-white'>Discover the potential of your business idea</h1>
            <span className='text-[#8f95a0] text-[1.25rem] max-w-screen-md'>Our tool delivers in-depth business analysis tailored to your proposed venture, including SWOT, PESTEL, and Porter's Five Forces assessments.</span>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 my-14'>

            {svgs.map((item, index)=>{
                return <DiscoverBox svg={item} key={index} heading={discoverData[index].heading} para={discoverData[index].para}/>
                
            })}


        </div>

        
      
    </div>
  )
}

export default Discover
