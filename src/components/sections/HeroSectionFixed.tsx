'use client';

import React from 'react';
import NavBarbig from '@/components/layout/NavBarbig';
import { FiArrowRight, FiUser, FiPhone, FiBell, FiPlay } from 'react-icons/fi';
import { StatCard } from '../ui/StatCard';
import { useEffect, useRef, useState } from 'react';
import { WaitlistModal } from '@/components/ui/WaitlistModal';
import { AnimatedSection } from '@/components/sections/AnimatedSection';


const HeroSectionDraft = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaSectionRef = useRef(null);

  
  return (
    <div className="hidden lg:block z-50 px-4 pt-4 z-50">
    <div className="relative h-[95vh] bg-white overflow-hidden rounded-3xl w-full items-stretch">
      
      {/* Blue background on the right, containing image and patterns */}
      <div className="absolute inset-y-0 right-0 w-1/2 items-end mr-4 mt-12 mb-12 justify-center bottom-0 bg-gradient-to-t from-blue-600 to-white rounded-full !z-15 overflow-hidden">
        {/* Main Doctor Image */}
        {/* Use a flex container to center the image horizontally at the bottom */}
        <div className="absolute bottom-0 w-full flex justify-center items-end z-10">
            <img src="/nurse2.png" alt="Doctor" className="h-[82vh] object-contain animate-fade-in-up" />
        </div>

        {/* Background pattern on blue section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-3/4 h-full bg-blue-500 opacity-10 transform rotate-12 rounded-full"></div>
          <div className="absolute -right-1/2 top-1/4 -translate-y-1/2 w-full h-full bg-blue-400 opacity-10 transform -rotate-12 rounded-full"></div>
        </div>

       
      </div>
      

      <div className="relative flex flex-col md:flex-row min-h-screen rounded-3xl">
        {/* Left Section - White Background */}
        <div className="w-full md:w-1/2 flex flex-col p-8 md:p-8 text-gray-800 relative justify-start mt-28 rounded-3xl">
          <div className="item-evenly">
            {/* Main title will overlap here */}
            <h1 className="text-6xl md:text-[110px] text-black font-semibold mb-1 animate-fade-in">
              Healthcare
            </h1>
            <h1 className="text-6xl md:text-[120px] text-black !font-normal mb-1 animate-fade-in">
              Re<span className='bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent font-semibold'>defi</span>ned
            </h1>
            <p className="mt-4 mb-8 text-lg text-gray-600 animate-fade-in-up ml-4">
              We treat not only symptoms, <span className='font-semibold'>we solve the problem.</span>
            </p>
            <div className="relative flex text-center justify-around items-center px-4 py-4 bg-white/60 backdrop-blur-xl rounded-2xl mx-16 ml-4 mt-12 shadow-lg animate-fade-in-up border border-white/80">
            <StatCard value={1500} label="Waitlist Members" />
            <div className="w-px text-center h-12 bg-gray-300/70"></div>
            <StatCard value={95} label="Healthcare Providers" />
            <div className="w-px h-12 bg-gray-300/70"></div>
            <StatCard value={6} label="Supported Countries" suffix="+" />
        </div>
            <div className="flex mt-4">
            <button onClick={() => setIsModalOpen(true)} className="cta-button group w-3/5 flex items-center justify-center bg-blue-600 text-white font-semibold mt-8 ml-8 py-4 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100">
              <span className="text-lg">Join the Waitlist</span>
            </button>
            </div>

          </div>
        </div>
        {/* Waitlist Modal */}
        <div className="absolute inset-0 mb-16">
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default HeroSectionDraft; 