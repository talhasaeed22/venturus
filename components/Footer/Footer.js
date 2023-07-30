import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#212121] md:px-28 py-10 px-5'>
      <div className='flex lg:flex-row flex-col gap-5 justify-between items-center border-b pb-4 border-gray-700'>
        <div className='flex '>
          <img
            onClick={() => router.push('/')}
            className='block w-20 md:ml-0 ml-5 cursor:pointer'
            src='/images/logos/main.png'
            alt='Your Company'
          />
        </div>

        <div className='grid sm:flex sm:flex-row sm:justify-between gap-5 grid-cols-3'>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Pricing
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Status
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Terms and conditions
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Privacy policy
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Affiliates
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Changelog
          </span>
          <span className='text-gray-400 text-[14px] hover:underline cursor-pointer'>
            Contact
          </span>
        </div>
      </div>

      <div className='flex sm:flex-row flex-col gap-5 justify-between items-center pt-10'>
        <span className='text-white'>
          © Copyright 2023. All Rights Reserved by{' '}
          <span className='underline text-[#1e51fd]'>Orgops AI.</span>
        </span>

        <div className='flex gap-10'>
          <i
            style={{ fontSize: '24px', color: 'rgb(156 163 175 ' }}
            className='fa fa-linkedin-square cursor-pointer'
            aria-hidden='true'
          ></i>
          <i
            style={{ fontSize: '24px', color: 'rgb(156 163 175 ' }}
            className='fa fa-twitter-square cursor-pointer'
            aria-hidden='true'
          ></i>
          <i
            style={{ fontSize: '24px', color: 'rgb(156 163 175 ' }}
            className='fa fa-envelope cursor-pointer'
            aria-hidden='true'
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
