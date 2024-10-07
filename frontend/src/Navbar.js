import React from 'react';
import capvalistypelogo from '../src/Capvalislogo2.jpg';

const Navbar = () => {
  return ( 
    <div className='navbar h-20 w-full bg-black flex flex-row  justify-between items-center px-4 border-b-2 rounded-b-md border-cyan-200'>
      <div className='logo-container'>
        <img 
          src={capvalistypelogo} 
          alt="Company Logo"
          className='h-16 object-contain'
        />
      </div>
      <div className='flex flex-col items-center text-white  sm:flex-row'>
        <div className='px-4 '>Home</div>
        <div className='px-4 hover:text-gray-300 cursor-pointer'>About</div>
        <div className='px-4 hover:text-gray-300 cursor-pointer'>Career</div>
        <div className='px-4 hover:text-gray-300 cursor-pointer'>Login</div>
        <div className='px-4 hover:text-gray-300 cursor-pointer'>Register</div>
      </div>
    </div>
  );
};

export default Navbar;