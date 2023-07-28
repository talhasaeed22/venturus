import React from 'react';
import CounterBox from './CounterBox';

const Countup = () => {
  return (
    <div className='grid sm:grid-cols-3 sm:gap-3 grid-cols-1 gap-5 lg:px-32 sm:px-14 px-5'>
      <CounterBox heading={'Avg. generation time (seconds)'} counter={81} />
      <CounterBox heading={'Accounts created'} counter={33537} />
      <CounterBox heading={'Reports generated'} counter={51775} />
    </div>
  );
};

export default Countup;
