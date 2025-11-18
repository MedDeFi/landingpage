"use client";

import React, { useState, useEffect, useRef } from 'react';
import { WaitlistModal } from '@/components/uishared/WaitlistModal';
import BentoGrid1 from './BentoGrid1';
import HeroMar from './HeroMar';
import Bento from './bento';
import BentoBox2 from './BentoBox2';
import HeroSecs from '../ui/HeroSecs';

// Note: Metadata export doesn't work with "use client" components
// This would need to be moved to a separate layout.tsx file or the page needs to be server component

export default function MarketingClientPage() {
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
      <div className="absolute inset-0">{/* <Scene /> */}</div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />  
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-full bg-gray-50 shadow-2xl overflow-hidden relative">
        {/* The Scene and Modal remain at the top level */}
        <div className="absolute inset-0">{/* <Scene /> */}</div>
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


        <div className="h-full overflow-hidden bg-gray-200 main-content relative">
            {/* Composing the page with Section Components */}
            <HeroMar onOpenModal={() => setIsModalOpen(true)} />
            <HeroSecs
              title="The Airbnb of Medical Tourism"
              description="Connect with verified healthcare professionals worldwide. Secure payments, transparent pricing, and comprehensive care coordination."
              imageSrc="/nurse2.webp"
              imageVisibility={{hideOnMobile: false}}
              imageAlt="Safest Platform for Medical Tourism"
              linkHref="#form"
              backgroundImage=""
              backgroundVisibility={{hideOnMobile: true}}
              backgroundColor="bg-gradient-to-tl from-blue-500/80 via-blue-500/50 to-blue-300/80"
              buttonText="Join waitlist"
              cardButton="true"
              className="backdrop-blur-sm"
            />


            <BentoGrid1 />
            <BentoBox2 />
            <Bento />
        </div>

     </div>
     </div>
     </div>

      
     
    </div>
  );
}