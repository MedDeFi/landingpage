'use client';

import React, { useState } from 'react';
import { FiMenu, FiPhone, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MedDeFiLogoType = () => (
    <div className="flex items-center space-x-2">
      <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
      </svg>
      <span className="font-semibold text-xl text-white">MedDeFi</span>
    </div>
  );

  return (
    <nav className="relative bg-gray-900/80 backdrop-blur-lg top-4 left-0 right-0 z-50 flex items-center justify-between rounded-full m-4 p-2 md:p-3 shadow-lg">
      {/* Left Section - Logo and Desktop Navigation */}
      <div className="flex items-center space-x-4">
        <MedDeFiLogoType/>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 ml-6">
          <ul className="flex space-x-6 text-gray-300">
            <li><a href="#" className="text-sm font-medium hover:text-white transition-colors duration-200">About us</a></li>
            <li><a href="#" className="text-sm font-medium hover:text-white transition-colors duration-200">Services</a></li>
            <li><a href="#" className="text-sm font-medium hover:text-white transition-colors duration-200">Doctors</a></li>
            <li><a href="#" className="text-sm font-medium hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Right Section - Mobile Phone, Mobile Hamburger, Desktop Login */}
      <div className="flex items-center space-x-2 md:space-x-4">
        
        {/* Mobile Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-800/50 rounded-full text-gray-300 hover:bg-gray-700/70 transition-colors duration-200 md:hidden">
            <FiMenu className="h-5 w-5" />
          </button>
          {/* Desktop Login Button */}
          <button className="hidden md:flex px-4 py-2 items-center gap-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
            <FiUser className="h-4 w-4" /> Login 
          </button>
      </div>
      
      {/* Mobile Nav Links Overlay */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-full mt-2 left-0 w-full bg-gray-900/90 backdrop-blur-lg shadow-lg rounded-2xl p-4 border border-gray-700/50"
          onClick={() => setIsOpen(false)}
        >
          <ul className="flex flex-col space-y-2 text-gray-300">
            <li><a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">About us</a></li>
            <li><a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">Services</a></li>
            <li><a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">Doctors</a></li>
            <li><a href="#" className="block px-4 py-3 rounded-lg hover:bg-gray-800/70 transition-colors duration-200">Contact</a></li>
            <li className="pt-2">
              <button className="w-full flex px-4 py-3 items-center justify-center gap-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-200 font-semibold">
                <FiUser className="h-4 w-4" /> Login 
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 