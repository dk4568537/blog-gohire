"use client"
import Link from 'next/link'
import React from 'react'
import Navlogo from '../../../public/images/Navlogo.svg'
import Accountlogo from '../../../public/images/Accountlogo.svg'
import Locationlogo from '../../../public/images/Locationlogo.svg'
import Worldlogo from '../../../public/images/Worldlogo.svg'
const Bgssimg = '/images/Dashboard-bg.png'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'


const Navber = () => {
    return (
        <div className=' bg-black bg-cover'>
            <div className={`w-[100%] h-full  bg-cover bg-center`} style={{ backgroundImage: `url(${Bgssimg})` }}>

                {/* <Image src={Dashboardbg} alt="" /> */}
                <nav class=" border-gray-200 dark:bg-gray-900">
                    <div class=" w-full sm:max-w-screen-xl flex items-center justify-between mx-auto p-4">
                        <Link href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <span class="self-center sm:text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Rent Hire</span>
                            <Image src={Navlogo} className="h-6 bg-white rounded-full" alt="Flowbite Logo" />
                        </Link>
                        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
                            <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link href="#" className="block text-lg font-semibold py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block text-lg font-semibold py-2 px-3 md:p-0 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block text-lg font-semibold py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='flex justify-center items-center min-h-screen text-center px-4'>
                    <div className='max-w-2xl text-white'>
                        <h3 className='mb-4 font-semibold text-xs sm:text-3xl md:text-2xl'>Streamline Your Rental Business with Go-Hire.com</h3>
                        <h1 className='mb-6 text-sm sm:text-3xl md:text-3xl font-bold'>Connecting Sellers and Customers Globally with Efficient Rental Management.</h1>
                        <p className='font-semibold text-xs sm:text-lg md:text-lg'>
                            Lorem ipsum dolor sit amet consectetur. Luctus duis lectus risus augue suspendisse interdum felis. Hac eu nulla quam mauris urna vitae amet elit. Rutrum tortor ut porta magna praesent eget mauris lectus velit. Sed mattis faucibus imperdiet pretium egestas nunc pretium eu condimentum.
                        </p>
                        <Button colorScheme='green' className='mt-5'>Get Started Today</Button>
                        {/* <button class="relative inline-flex items-center bg-green-500 text-white font-bold py-2 px-6 rounded-lg">
                            Get started
                            <div class="absolute top-0 right-0 w-6 h-full bg-gray-800 transform -skew-x-15 translate-x-1/2 rounded-tr-lg"></div>
                        </button> */}
                    </div>
                </div>

                <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pb-5'>
                    <div className=' flex justify-center items-center gap-5'>
                        <div className=' flex gap-5 items-center text-lg font-bold'>
                            <div className=' border p-3 bg-white border-black rounded-full'>
                                <Image className=' sm:w-8 sm:h-8' src={Accountlogo} alt="" />
                            </div>
                            <div className=' text-white flex flex-col'>
                                <p>1K+</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center gap-5'>
                        <div className=' flex gap-5 items-center text-lg font-bold'>
                            <div className=' border p-3 bg-white border-black rounded-full'>
                                <Image className=' sm:w-8 sm:h-8' src={Locationlogo} alt="" />
                            </div>
                            <div className=' text-white flex flex-col'>
                                <p>50K+</p>
                                <p>Location</p>
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-center items-center gap-5'>
                        <div className=' flex gap-5 items-center text-lg font-bold'>
                            <div className=' border p-3 bg-white border-black rounded-full'>
                                <Image className=' sm:w-8 sm:h-8' src={Worldlogo} alt="" />
                            </div>
                            <div className=' text-white flex flex-col'>
                                <p>50K+</p>
                                <p>Server</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navber