"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MarketingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'For Doctors', href: '/doctors' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      <div className="max-w-8xl mx-auto pt-2 px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/MedDeFiLogotypedark.svg" 
                alt="MedDeFi Logo" 
                className="h-8 w-auto" 
                width={128} 
                height={32} 
              />
        
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:hidden lg:block shadow-md bg-white/20 backdrop-blur-md rounded-full px-4 py-2 md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-200 px-3 py-2 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Contact and Theme Toggle */}
          <div className="lg:block flex items-center space-x-4">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:hidden lg:block items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-100 hover:text-blue-200 transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-3xl border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-white hover:text-blue-700 bg-blue-500 rounded-full block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

 
