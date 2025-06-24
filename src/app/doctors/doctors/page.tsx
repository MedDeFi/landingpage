"use client";

import React, { useState, useEffect, useRef } from 'react';
import NavBar from '@/components/layout/NavBar';
import { WaitlistModal } from '@/components/ui/WaitlistModal';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CtaSection } from '@/components/sections/CtaSection';


export default function LandingPageDoctors() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dontMissOutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          // Handle intersection if needed
        },
        { threshold: 0.1 }
    );
    if (dontMissOutRef.current) observer.observe(dontMissOutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-full max-w-sm h-[844px] max-h-[844px] bg-gray-50 rounded-[44px] shadow-2xl overflow-hidden relative border-8 border-black">
       
        
        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-2xl z-50"></div>

        <div className="h-full overflow-y-auto bg-gray-200 main-content relative">
          <header className={`flex-1 justify-between items-center transition-all duration-700 ease-in-out relative z-50 bg-gray-200/80 backdrop-blur-sm px-4 ${isModalOpen ? 'animate-blur-in' : 'animate-blur-out'}`}>
            <NavBar />    
          </header>

          {/* Composing the page with Section Components */}
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PartnersSection />
          <FAQSection />
          <CtaSection onClaimSpot={() => setIsModalOpen(true)} />

          <div ref={dontMissOutRef} className="py-8 px-4">
            {/* Don't Miss Out Section content */}
          </div>
        </div>

        {/* Sticky Footer Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent pointer-events-none z-40">
          <div className="pointer-events-auto">
            <button onClick={() => setIsModalOpen(true)} className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100">
              <span className="text-lg">Join the Waitlist</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        html { scroll-behavior: smooth; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
        
        .main-content::-webkit-scrollbar { display: none; }
        .main-content { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </div>
  );
} 