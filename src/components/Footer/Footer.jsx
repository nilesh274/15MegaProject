import React from 'react';
import logoWhite from '../image/logoWhite.png'
import { Link } from 'react-router-dom'
import LinkedInLogo from '../image/LinkedInLogo.png'

const Footer = () => {
    return (
        <>
            <footer className=' bg-[#1a1b33] text-white h-auto w-auto py-10 bottom-0 '>
                <div>
                    <div className='text-center pb-4'>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:mb-8 mb-4'>SignUp</p>
                        <div className='text-sm sm:text-md md:text-lg lg:text-2xl mb-4 flex justify-center items-center'>
                            <input
                                type="text"
                                className='rounded-xl outline-none bg-transparent  rounded-br-none rounded-tr-none p-4 border-[1px] border-r[1px] text-sm sm:text-md md:text-lg lg:text-xl'
                                placeholder='Enter mail Id'
                            />
                            <Link
                                to='/signup'
                                className='px-4 border-l-0 rounded-xl rounded-bl-none rounded-tl-none p-4 bg-[#2a2ea8] hover:bg-[#1c1f73] border-[1px] border-r[1px] text-sm sm:text-md md:text-lg lg:text-xl'
                            >
                                SignUp
                            </Link>
                        </div>
                        <p className='text-sm sm:text-md md:text-lg lg:text-xl mb-10 mx-3 sm:mx-5 md:mx-6'>Ready to share your vibe? SignUp & get started</p>
                    </div>

                    <div className='md:mx-16 px-12 relative'>
                        <div className='flex lg:gap-56'>
                            <div className='flex gap-4 mb-4 items-center'>
                                <img
                                    src={logoWhite}
                                    alt="logo"
                                    className='w-10 h-7 sm:w-12 sm:h-8 md:w-14 md:h-9 lg:w-16 lg:h-10 rounded-lg' />
                                <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>VIBΞLY</p>
                            </div>
                            <div className='md:flex ml-auto'>
                                <div className='flex md:gap-10 lg:text-lg text-xs sm:text-sm md:text-md'>
                                    <div className='flex md:gap-10 flex-col md:flex-row mr-5 sm:mr-7 md:mr-0'>
                                        <p className='text-xs font-bold sm:text-sm md:text-md md:hidden mb-1 text-sky-400'>About</p>
                                        <Link
                                            to="/"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            to="/about"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            About us
                                        </Link>

                                        <Link
                                            to="/features"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            Features
                                        </Link>
                                    </div>
                                    <div className='flex md:gap-10 flex-col md:flex-row mr-2 sm:mr-7 md:mr-0'>
                                        <p className='text-xs font-bold sm:text-sm md:text-md md:hidden mb-1 text-sky-400'>Contact</p>
                                        <Link
                                            to="/helpcenter"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            Help Center
                                        </Link>
                                        <Link
                                            to="/userguideline"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            GuideLines
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className='hover:text-[#6368e5] hover:underline'
                                        >
                                            Contact us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border-[1px] border-gray-500 my-3'></div>
                        <div className='flex flex-col md:flex-row items-center justify-between pt-2'>
                            <div>
                                <select className='text-xs sm:text-sm md:text-md lg:text-lg bg-transparent block w-auto mt-1 px-2 lg:px-4 py-2 border border-gray-300 text-white-900 rounded-md shadow-sm focus:border-transparent hidden md:block'>
                                    <option className='text-black'>English</option>
                                    <option className='text-black'>Hindi</option>
                                </select>
                            </div>

                            <p className='text-xs sm:text-sm md:text-md lg:text-xl w-full text-center lg:w-auto flex-grow mb-5 md:mt-3'>
                                &copy; 2024 Vibely. All rights reserved. Terms. Privacy
                            </p>

                            <div className='flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-center justify-center'>
                                <Link to="https://www.linkedin.com/in/nilesh-parmar-4b3b1226a">
                                    <img src={LinkedInLogo} alt="LinkedInLogo" className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-6 lg:w-8 lg:h-8 hover:scale-105 transition-transform duration-300 cursor-pointer' />
                                </Link>
                                <Link to="https://leetcode.com/Nilesh_Parmar_274">
                                    <img src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" alt="" className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-6 lg:w-8 lg:h-8 hover:scale-105 transition-transform duration-300 cursor-pointer' />
                                </Link>
                                <Link to="https://www.geeksforgeeks.org/user/nileshparmargwg9/">
                                    <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="geeksforgeeks" className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-6 lg:w-8 lg:h-8 hover:scale-105 transition-transform duration-300 cursor-pointer' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;