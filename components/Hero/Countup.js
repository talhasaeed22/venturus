import React from 'react'
import CounterBox from './CounterBox'

const Countup = () => {
    return (
        <div className='grid grid-cols-3 gap-3 px-32'>
            

        <CounterBox heading={"Avg. generation time (seconds)"} counter={81}/>
        <CounterBox heading={'Accounts created'} counter={33537}/>
        <CounterBox heading={"Reports generated"} counter={51775}/>


        </div>
    )
}

export default Countup
