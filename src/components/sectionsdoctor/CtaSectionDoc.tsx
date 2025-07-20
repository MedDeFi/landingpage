"use client";

import React, { useEffect } from 'react'; // Import the entire React object and useEffect
import Image from 'next/image';

// Define the props for our section
interface CtaSectionDocProps {
  onClaimSpot: () => void;
}

// Define the component using React.forwardRef
// This allows the component to receive a ref and forward it to a DOM element
export const CtaSectionDoc = React.forwardRef<HTMLDivElement, CtaSectionDocProps>(
  ({ onClaimSpot }, ref) => {
    const [isCtaVisible] = React.useState(false);

    useEffect(() => {
      console.log('isCtaVisible:', isCtaVisible);
    }, [isCtaVisible]);

    return (
      <div 
        ref={ref}
        className="flex flex-col items-center justify-center relative bg-gray-100 shadow-xl backdrop-blur-2xl rounded-3xl h-[95vh] my-4 md:mx-4 z-30"
      >
        <div className="flex flex-col items-start md:items-center justify-center relative w-full h-full">
          <Image
            src="/MedDeFiProfessionals2.webp"
            alt="SmileDoc"
            className="w-full h-full max-w-full max-h-full object-cover object-right rounded-3xl"
            width={800}
            height={600}
          />
        </div>
        <div className='flex flex-col absolute bg-gray-500/40 lg:bg-white/0  backdrop-blur-sm md:left-12 lg:left-28 items-center md:items-start justify-center rounded-3xl p-4 md:p-16 mx-4 py-16 md:p-4 lg:py-20 lg:px-4 md:w-2/5'>
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