"use client";

import React from 'react'; // Import the entire React object
import { AnimatedSection } from '@/components/sectionspatients/AnimatedSection';    

// Define the props for our section
interface CtaSectionProps {
  onClaimSpot: () => void;
}

// Define the component using React.forwardRef
// This allows the component to receive a ref and forward it to a DOM element (like AnimatedSection)
export const CtaSection = React.forwardRef<HTMLDivElement, CtaSectionProps>(
  ({ onClaimSpot }, ref) => {
    return (
      <AnimatedSection ref={ref} className="py-20 px-6 mx-4 mb-16 mt-16 text-center rounded-3xl bg-gray-100 z-60">
        <h2 className="text-4xl font-bold text-gray-900">Don&apos;t Miss Out</h2>
        <p className="text-gray-600 mt-3 mb-8">Join the waitlist for exclusive early access and be a part of the healthcare revolution.</p>
        <button 
          onClick={onClaimSpot} 
          className="cta-button bg-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 transition-all duration-300"
        >
            Claim Your Spot
        </button>
      </AnimatedSection>
    );
  }
);

// This is good practice for debugging with React DevTools
CtaSection.displayName = 'CtaSection';