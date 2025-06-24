import React from 'react';
import { StatCard } from '../ui/StatCard';

export const HeroSection = () => (
  <div className="lg:hidden">
  <div className="relative text-gray-800 bg-gray-100 pb-44 overflow-hidden shadow-xl backdrop-blur-xl rounded-b-3xl z-40 flex-1">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white-100 to-gray-100 opacity-50"></div>

    <div className="relative pt-32">
        <h1 className="text-5xl text-center text-black font-bold tracking-tight animate-fade-in">Healthcare,</h1>
        <div className="flex justify-center">
        <h1 className="text-5xl md:text-[100px] text-center text-black !font-semibold animate-fade-in">
          Re<span className='bg-gradient-to-t from-blue-600 to-blue-400 bg-clip-text text-transparent font-semibold'>defi</span>ned
        </h1>
        </div>
    </div>
    <div className="relative mt-12">
        <div className="w-full h-96 items-center justify-center flex">
            <img src="/nurse2.png" alt="Nurse" className="w-3/5 h-full items-center justify-center object-cover object-top animate-fade-in-up" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
        </div>
        <div className="relative flex text-center justify-around items-center px-4 py-4 bg-white/60 backdrop-blur-xl rounded-2xl mx-4 shadow-lg -mt-4 animate-fade-in-up border border-white/80">
            <StatCard value={1500} label="Waitlist Members" />
            <div className="w-px text-center h-12 bg-gray-300/70"></div>
            <StatCard value={95} label="Healthcare Providers" />
            <div className="w-px h-12 bg-gray-300/70"></div>
            <StatCard value={6} label="Supported Countries" suffix="+" />
        </div>
    </div>
  </div>
  </div>
);