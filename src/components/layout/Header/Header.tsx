"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/dental-implant-costs' },
    { name: 'Treatments', href: '/affordable-dental-implants' },
    { name: 'Our Labs', href: '/dental-implant-financing' },
    { name: 'Free Estimate', href: '/dental-implant-free-estimate' },
  ];

  return (
    <header className="absolute top-2 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/MedDeFi logo.svg"
              alt="Dental Implant Center Costa Rica Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="ml-2 md:text-xl font-bold text-white">
              MedDeFi
            </span>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:hidden lg:block shadow-md bg-gray-800/40 backdrop-blur-md rounded-full px-4 py-2 md:flex space-x-8">
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
          <div className="flex items-center space-x-4">
            {/* Contact Button */}
            <Link
              href="/dental-implant-consultation"
              className="hidden sm:inline-flex items-center px-8 py-2 text-sm font-medium rounded-full text-white bg-blue-700 hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="md:block lg:hidden p-2 rounded-md text-gray-100 hover:text-blue-100 transition-colors"
            >
            {isMenuOpen ? (
                <Image src="/images/icons/MenuIsOpen.svg" alt="Close menu" width={24} height={24} className="h-6 w-6" />
              ) : (
                <Image src="/images/icons/MenuIsClosed.svg" alt="Open menu" width={24} height={24} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:block lg:hidden" role="navigation" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-3xl">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/dental-implant-consultation"
                className="text-blue-600 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
