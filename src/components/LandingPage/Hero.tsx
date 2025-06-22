import React from 'react';
import { StatCard } from './StatCard';

export const Hero = () => {
  return (
    <div className="relative text-gray-800 bg-gray-100 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white-100 to-gray-100 opacity-50"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black font-bold tracking-tight animate-fade-in leading-tight">Healthcare,</h1>
        <div className="flex justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-black !font-semibold animate-fade-in leading-tight">
            Re<span className='bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent font-semibold'>defi</span>ned
          </h1>
        </div>
      </div>
      <div className="relative mt-8 sm:mt-12">
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
          <img src="./nurse2.png" alt="Nurse" className="w-full h-full object-cover object-bottom animate-fade-in-up" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
        </div>
        <div className="relative flex text-center justify-around items-center px-3 sm:px-4 py-3 sm:py-4 bg-white/60 backdrop-blur-xl rounded-2xl mx-auto max-w-[280px] sm:max-w-xs md:max-w-xl shadow-lg -mt-16 sm:-mt-20 animate-fade-in-up border border-white/80">
          <StatCard value={1500} label="Waitlist Members" />
          <div className="w-px text-center h-10 sm:h-12 bg-gray-300/70"></div>
          <StatCard value={95} label="Healthcare Providers" />
          <div className="w-px h-10 sm:h-12 bg-gray-300/70"></div>
          <StatCard value={6} label="Supported Countries" suffix="+" />
        </div>
      </div>
    </div>
  );
}; 