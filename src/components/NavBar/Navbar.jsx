import React from 'react';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <div className=" p-4">
      {/* Logo and Navigation */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <a href="#" className="flex items-center">
          <img
            className="h-16 w-16"
            src={logo}
            alt=" Logo"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-14">
          <div className='flex flex-col '>
          <a href="#"
            className="text-lg text-red-300 tracking-wide hover:text-red-300 transition" >
            Home
            <p className='border-red-300 border-2 rounded-full '></p>
          </a>
          </div>
          <a
            href="#"
            className="text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            About us
          </a>
          <a
            href="#"
            className="text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            Services
          </a>
          <a
            href="#"
            className=" text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            Portfolio
          </a>
          <a
            href="#"
            className=" text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            Gallery
          </a>
          <a
            href="#"
            className=" text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            Packages
          </a>
          <a
            href="#"
            className=" text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            Contact us
          </a>
          <a
            href="#"
            className=" text-lg text-gray-700 tracking-wide hover:text-red-300 transition"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
