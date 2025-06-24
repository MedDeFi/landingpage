'use client';

import React, { useState } from 'react';
import { FiMenu, FiPhone, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MedDeFiLogoType = () => (
    <div className="flex items-center space-x-2">
      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
      </svg>
      <span className="font-semibold text-xl text-blue-600">MedDeFi</span>
    </div>
  );

  return (
    <nav className="absolute top-2 sm:top-4 left-0 right-0 z-50 flex items-center justify-between rounded-3xl m-2 sm:m-4 px-2 sm:px-4 md:px-8">
      {/* Left Section - Logo and Desktop Navigation */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <MedDeFiLogoType/>
        {/* Desktop Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-8 ml-2 sm:ml-8">
          <ul className="flex space-x-4 sm:space-x-8 text-gray-800 text-sm sm:text-base">
            <li><a href="#" className="px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200">About us</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200">Services</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200">Doctors</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Right Section - Mobile Phone, Mobile Hamburger, Desktop Login */}
      <div className="flex items-center space-x-2 sm:space-x-4 pr-2 sm:pr-4">
        {/* Mobile Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 sm:p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200 md:hidden">
            <FiMenu className="h-4 w-4" />
        </button>
        {/* Desktop Login Button removed */}
      </div>
      {/* Mobile Nav Links Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg p-2 sm:p-4">
          <ul className="flex flex-col space-y-1 sm:space-y-2 text-gray-800 text-base">
            <li><a href="#" className="px-2 sm:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">About us</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">Services</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">Doctors</a></li>
            <li><a href="#" className="px-2 sm:px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 