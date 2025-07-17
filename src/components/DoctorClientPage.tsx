"use client";

import React, { useState, useEffect, useRef } from 'react';
import NavBar from '@/components/layout/NavBar';
import { WaitlistModal } from '@/components/uishared/WaitlistModal';
import { FAQdoctors } from '@/components/sectionsdoctor/FAQdoctors';
import { CtaSectionDoc } from '@/components/sectionsdoctor/CtaSectionDoc';
import HeroSectionDoctor  from '@/components/sectionsdoctor/HeroSectionDoctor';
import { SmileDoc } from '@/components/sectionsdoctor/SmileDoc';
import { AcrossBorders } from '@/components/sectionsdoctor/AcrossBorders';

// Note: Metadata export doesn't work with "use client" components
// This would need to be moved to a separate layout.tsx file or the page needs to be server component

export default function DoctorClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaSectionRef = useRef(null);

  // Observer for the final CTA section to hide the sticky footer button
  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              console.log('CTASectionDoc intersection:', entry.isIntersecting, 'intersectionRatio:', entry.intersectionRatio);
              setIsCtaVisible(entry.isIntersecting);
          },
          { 
            threshold: [0, 0.1, 0.3, 0.5, 1.0], // Multiple thresholds for better detection
            rootMargin: '0px 0px -100px 0px' // Increased margin for earlier detection
          }
      );

      const currentRef = ctaSectionRef.current;
      if (currentRef) {
          console.log('Observing CTA section element:', currentRef);
          observer.observe(currentRef);
      } else {
          console.log('CTA section ref is null');
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
        observer.disconnect();
      };
  }, []);

  // Add this console log to see the state changes
  useEffect(() => {
    console.log('isCtaVisible changed:', isCtaVisible);
  }, [isCtaVisible]);

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-full bg-gray-50 shadow-2xl overflow-hidden relative">
        {/* The Scene and Modal remain at the top level */}
        <div className="absolute inset-0 z-0">{/* <Scene /> */}</div>
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


        <div className="h-full overflow-hidden bg-gray-200 main-content relative">
            <header className={`flex-1 justify-between items-center transition-all duration-700 ease-in-out relative z-50 bg-gray-200/80 backdrop-blur-sm px-4 ${isModalOpen ? 'animate-blur-in' : 'animate-blur-out'}`}>
              <NavBar />
            </header>

            {/* Composing the page with Section Components */}
            <HeroSectionDoctor />   
            <SmileDoc />         
            <AcrossBorders />
            <FAQdoctors />
            <CtaSectionDoc ref={ctaSectionRef} onClaimSpot={() => setIsModalOpen(true)} />
        </div>

        {/* Sticky Footer CTA */}
        <div className={`lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent z-50 transition-opacity duration-300 ${(isCtaVisible || isModalOpen) ? 'opacity-0' : 'opacity-100'}`}>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-button group w-full flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100"
            >
              <span className="text-lg">Join the Waitlist</span>
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
}

