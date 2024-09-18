import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import { LogoutBtn, LoginBtn, openmenu, cross } from '../index';
import { useSelector } from 'react-redux';
import { ThemeBtn } from '../index';
import { no } from '../index';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [visible, setvisible] = useState(false);

  const onchange = () => {
    setvisible(!visible);
  };

  const onhome = () => {
    setvisible(!visible);
  }

  const onAbout = () => {
    setvisible(!visible);
  }

  const onContact = () => {
    setvisible(!visible);
  }

  const onAllPost = () => {
    setvisible(!visible);
  }

  const onAddPost = () => {
    setvisible(!visible);
  }

  const onProfile = () => {
    setvisible(!visible);
  }


  return (
    <div className='text-black '>
      <header className='bg-[#1a1b33] w-full py-3 sticky top-0 z-50'>
        <nav className='flex sm:flex-row sm:justify-between items-center px-4'>
          <div className='flex items-center justify-between sm:justify-start md:justify-start lg:justify-start mr-auto'>
            <Link to='/' className='flex items-center'>
              <img
                src={logo}
                alt="logo"
                className='rounded-full h-11 w-12 sm:h-12 sm:w-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-2'
              />
              <p className='text-sm sm:text-sm md:text-md lg:text-xl text-white'>VIBΞLY</p>
            </Link>
          </div>
          <div className='hidden lg:flex mr-auto'>
            <div className='flex flex-col lg:flex-row lg:gap-10 lg:text-lg mt-4 lg:visible'>
              <Link
                to='/'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                About us
              </Link>
              <Link
                to='/contact'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                Contact us
              </Link>
              <Link
                to='/add-post'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                Add Post
              </Link>
              <Link
                to='/all-posts'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                All Posts
              </Link>
              <Link
                to='/profile'
                className='border-transparent text-white hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-xs sm:text-sm md:text-md lg:text-xl'
              >
                Profile
              </Link>
            </div>
          </div>
          <div className='flex gap-5 items-center justify-end mr-6'>
            <ThemeBtn />
            <div className='lg:hidden'>
              <img src={openmenu} alt="menu" onClick={onchange} className='w-7 h-7 cursor-pointer' />
            </div>
            {authStatus ? <LogoutBtn /> : <LoginBtn />}
          </div>
        </nav>
      </header>

      {visible && (
        <div className="fixed z-50 lg:hidden">
          <div
            className={`dark:shadow-sm dark:shadow-white h-96 w-56 bg-white dark:bg-black shadow-lg transition-transform duration-500 transform fixed right-0  `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='cursor-pointer w-10 h-10 pl-4 pt-4 dark:text-white' onClick={onchange}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className="flex flex-col px-7 py-5 text-black gap-2">
              <Link
                to="/"
                onClick={onhome}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={onAbout}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                About us
              </Link>
              <Link
                to="/contact"
                onClick={onContact}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                Contact us
              </Link>
              <Link
                to="/add-post"
                onClick={onAddPost}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                Add Post
              </Link>
              <Link
                to="/all-posts"
                onClick={onAllPost}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                All Posts
              </Link>
              <Link
                to="/profile"
                onClick={onProfile}
                className="border-transparent hover:border-[#6368e5] hover:text-[#6368e5] inline-flex items-center border-b-4 text-sm sm:text-md md:text-lg dark:text-white"
              >
                Profile
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
