import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Report examples', href: '/', current: true },

  { name: 'Pricing', href: '/', current: false },
  { name: 'Contact', href: '/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  return (

    <Disclosure as="nav" className=" bg-[#242e42]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:py-2 px-2 sm:px-6 lg:px-6">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <div className=' p-2 rounded bg-gray-700 focus:outline-none'>
                      <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className=' p-2 rounded bg-gray-700 focus:outline-none'><Bars3Icon className="block h-6 w-6 " aria-hidden="true" /></div>
                  )}
                </Disclosure.Button>
              </div>
              <img
                className="block h-12 w-28 md:ml-0 ml-5 "
                src="/images/logo.svg"
                alt="Your Company"
              />
              <div className="flex flex-1 items-center justify-center sm:items-stretch ">




                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <Disclosure key={item.name} as="div" className="relative">
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={classNames(
                                item.current ? 'text-[#5a6a83] text-[0.875rem] font-[500] hover:text-white transition duration-300 ease-in-out' : 'text-[#5a6a83] font-[500] text-[0.875rem] hover:text-white transition duration-300 ease-in-out',
                                'px-2 py-2  font-medium cursor-pointer'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              <span className="flex items-center">
                                {item.name}

                              </span>
                            </Disclosure.Button>

                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </div>

              </div>
              <div className="absolut inset-y-0 right-0 gap-3 items-center pr-12 sm:static sm:inset-auto sm:ml-6 md:pr-0">

                <button className='text-[#22c55e] py-2 px-4 sm:text-[15px] text-[13px] hover:bg-gray-700 rounded-[0.5rem]'>Login/Register</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden ">
            <div className="space-y-1 px-3 pr-14 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? ' text-[#5a6a83] text-[0.875rem] font-[500] hover:text-white' : 'text-[#5a6a83] text-[0.875rem] font-[500] hover:text-white',
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
}

export default Navbar