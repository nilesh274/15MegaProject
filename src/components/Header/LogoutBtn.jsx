import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/AuthSlice';
import authService from '../../appwrite/Auth';
import { Link, useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutBtn() {
    authService.logout().then(() => {
      dispatch(logout());
        navigate('/login')
    })
  }

  return (
    <>
      <Link>
        <button
          onClick={logoutBtn}
          className='border-[1px] border-slate-200 text-slate-200 text-xs items-center rounded-lg w-auto my-4 px-4 py-2 justify-end hover:bg-[#2a2ea8] transition duration-200 hover:scale-105 sm:text-sm md:text-md lg:text-xl'
        >
          logout
        </button>
      </Link>
    </>
  )
}
export default LogoutBtn;