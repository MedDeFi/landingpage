"use client";

import React from 'react';
import Image from 'next/image';

// Define the props for our section
interface CtaSectionDocProps {
  onClaimSpot: () => void;
}

// Define the component using React.forwardRef
// This allows the component to receive a ref and forward it to a DOM element
export const CtaSectionDoc = React.forwardRef<HTMLDivElement, CtaSectionDocProps>(
  ({ onClaimSpot }, ref) => {
    return (
      <div 
        ref={ref}
        className="relative flex items-center justify-center overflow-hidden rounded-3xl min-h-[600px] lg:min-h-[700px] my-4 md:mx-4 z-20 bg-gray-100"
      >
        {/* Full-bleed background image */}
        <Image
          src="/MedDeFiProfessionals2.webp"
          alt="SmileDoc"
          fill
          className="absolute inset-0 w-full h-full object-cover object-right rounded-3xl"
        />

        {/* Content overlay */}
        <div className='flex flex-col absolute bg-gray-500/50 lg:bg-white/0  backdrop-blur-sm md:left-12 lg:left-28 items-center md:items-start justify-center rounded-3xl p-4 md:p-8 lg:p-10 mx-4 py-16 md:w-2/5'>
          <h2 className="text-4xl text-center md:text-start font-bold text-white">Unlock Your Potential as a Professional</h2>
          <p className="text-white text-center md:text-start my-4">Taking advantage of the medical tourism rising market in a seamless and secure enviroment.</p>
        
          <button 
            onClick={onClaimSpot} 
            className="cta-button bg-blue-600 text-white items-center justify-center font-semibold py-4 px-8 md:px-16 lg:px-20 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 transition-all duration-300">
              Claim Your Spot
          </button>
          
        </div>
      </div>
    );
  }
);

// This is good practice for debugging with React DevTools
CtaSectionDoc.displayName = 'CtaSectionDoc';