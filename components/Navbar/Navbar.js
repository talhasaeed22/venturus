import React, { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useAuth, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { auth } from '@/FirebaseConfig';
const navigation = [
  { name: 'Report examples', href: '/', current: true },

  { name: 'Pricing', href: '/', current: false },
  { name: 'Contact', href: '/', current: false },
];

const loggedInNavigation = [
  { name: 'Create Report', href: '/create-report', current: false },
  { name: 'My Reports', href: '/reports', current: false },
  { name: 'Pricing', href: '/', current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const Navbar = () => {
  let isLoggedIn = false;
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  if (userId) {
    isLoggedIn = true;
  }

  const router = useRouter();
  const handleSignout = ()=>{
    auth.signOut().then(()=>{
      router.push('/sign-in/sign-in')
    }).catch((err)=>{
      console.log('Some error in signout')
    })
  }
  return (
    <Disclosure as='nav' className=' bg-[#212121]'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl sm:py-2 px-2 sm:px-6 lg:px-6'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 right-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <div className=' p-2 rounded bg-gray-700 focus:outline-none'>
                      <XMarkIcon
                        className='block h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </div>
                  ) : (
                    <div className=' p-2 rounded bg-gray-700 focus:outline-none'>
                      <Bars3Icon
                        className='block h-6 w-6 '
                        aria-hidden='true'
                      />
                    </div>
                  )}
                </Disclosure.Button>
              </div>
              <img
                onClick={() => router.push('/')}
                className='block w-20 md:ml-0 ml-5 cursor:pointer'
                src='/images/logos/main.png'
                alt='Your Company'
              />
              <div className='flex flex-1 items-center justify-center sm:items-stretch '>
                <div className='hidden md:ml-6 md:block'>
                  <div className='flex space-x-4 items-center'>
                    {!auth.currentUser ? navigation.map((item) => (
                      <Disclosure key={item.name} as='div' className='relative'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'text-gray-400 text-[0.875rem] font-[500] hover:text-white transition duration-300 ease-in-out'
                                  : 'text-gray-400 font-[500] text-[0.875rem] hover:text-white transition duration-300 ease-in-out',
                                'px-2 py-2  font-medium cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <span className='flex items-center'>
                                {item.name}
                              </span>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    ))

                    :
                    loggedInNavigation.map((item) => (
                      <Disclosure key={item.name} as='div' className='relative'>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current
                                  ? 'text-gray-400 text-[0.875rem] font-[500] hover:text-white transition duration-300 ease-in-out'
                                  : 'text-gray-400 font-[500] text-[0.875rem] hover:text-white transition duration-300 ease-in-out',
                                'px-2 py-2  font-medium cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <span className='flex items-center'>
                                {item.name}
                              </span>
                            </Disclosure.Button>
                          </>
                        )}
                      </Disclosure>
                    ))
                  
                  }
                  </div>
                </div>
              </div>
              <div className='absolut inset-y-0 right-0 gap-3 items-center pr-12 sm:static sm:inset-auto sm:ml-6 md:pr-0'>
                {auth.currentUser ? (
                  <Menu as="div" className="relative ml-3 mr-5">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={auth.currentUser.photoURL}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleSignout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                ) : (
                  <>
                    <button
                      onClick={() => router.push('/sign-in/sign-in')}
                      className='bg-[#1e51fd] py-2 px-4 mr-5 text-white sm:text-[15px] text-[13px] hover:bg-gray-700 rounded-[0.5rem]'
                    >
                      Login/Register
                    </button>
                  </>
                )}
                {/* <button
                  onClick={() => router.push('/sign-in')}
                  className='bg-[#1e51fd] py-2 px-4 text-white sm:text-[15px] text-[13px] hover:bg-gray-700 rounded-[0.5rem]'
                >
                  Login/Register
                </button> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden '>
            <div className='space-y-1 px-3 pr-14 pb-3 pt-2 '>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? ' text-gray-400 text-[0.875rem] font-[500] hover:text-white'
                      : 'text-gray-400 text-[0.875rem] font-[500] hover:text-white',
                    'block px-3 py-2 border-b border-[#5a6a83]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
};

export default Navbar;
