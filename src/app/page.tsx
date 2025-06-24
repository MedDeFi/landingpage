"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import NavBar from '@/components/layout/NavBar';
import { WaitlistModal } from '@/components/ui/WaitlistModal';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PoweredByAISection } from '@/components/sections/PoweredByAISection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CtaSection } from '@/components/sections/CtaSection';
import HeroSectionUnified from '@/components/sections/HeroSectionUnified';





export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const ctaSectionRef = useRef(null);

  // Observer for the final CTA section to hide the sticky footer button
  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              setIsCtaVisible(entry.isIntersecting);
          },
          { threshold: 0.1 }
      );

      if (ctaSectionRef.current) {
          observer.observe(ctaSectionRef.current);
      }

      return () => {
        if (ctaSectionRef.current) {
          observer.unobserve(ctaSectionRef.current)
        }
      };
  }, []);

  return (
    <div className="flex justify-center items-center bg-black min-h-screen hide-scrollbar overflow-y-auto">
      <div className="w-full bg-gray-50 shadow-2xl overflow-hidden relative">
        {/* The Scene and Modal remain at the top level */}
        <div className="absolute inset-0 z-0">{/* <Scene /> */}</div>
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


        <div className="h-full overflow-y-auto bg-gray-200 main-content relative">
            <header className={`flex-1 justify-between items-center transition-all duration-700 ease-in-out relative z-50 bg-gray-200/80 backdrop-blur-sm px-4 ${isModalOpen ? 'animate-blur-in' : 'animate-blur-out'}`}>
              <NavBar />
            </header>

            {/* Composing the page with Section Components */}
            <HeroSectionUnified />
            <FeaturesSection />
            <HowItWorksSection />
            <PoweredByAISection />
            <TestimonialsSection />
            <PartnersSection />
            <FAQSection />
            <CtaSection ref={ctaSectionRef} onClaimSpot={() => setIsModalOpen(true)} />
        </div>

        {/* Sticky Footer CTA */}
        <div className={`lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent z-40 transition-opacity duration-300 ${(isCtaVisible || isModalOpen) ? 'opacity-0' : 'opacity-100'}`}>
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