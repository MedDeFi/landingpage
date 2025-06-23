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
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="w-full max-w-sm h-[844px] max-h-[844px] bg-gray-50 rounded-[44px] shadow-2xl overflow-hidden relative border-8 border-black">
        {/* The Scene and Modal remain at the top level */}
        <div className="absolute inset-0 z-0">{/* <Scene /> */}</div>
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
            <PoweredByAISection />
            <TestimonialsSection />
            <PartnersSection />
            <FAQSection />
            <CtaSection ref={ctaSectionRef} onClaimSpot={() => setIsModalOpen(true)} />
        </div>

        {/* Sticky Footer CTA */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent pointer-events-none z-40 transition-opacity duration-300 ${isCtaVisible ? 'opacity-0' : 'opacity-100'}`}>
          <div className="pointer-events-auto">
            <button onClick={() => setIsModalOpen(true)} className="cta-button group w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-4 px-6 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100">
              <span className="text-lg">Join the Waitlist</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* All the original JSX styles go here */
        html { scroll-behavior: smooth; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
        
        .main-content::-webkit-scrollbar { display: none; }
        .main-content { scrollbar-width: none; -ms-overflow-style: none; }
        .testimonial-carousel { scroll-snap-type: x mandatory; }
        .testimonial-carousel > div { scroll-snap-align: start; }
        .testimonial-carousel::-webkit-scrollbar { display: none; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) both; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) both; animation-delay: 0.2s; }
        
        @keyframes blurIn { from { filter: blur(0px); } to { filter: blur(4px); } }
        @keyframes blurOut { from { filter: blur(4px); } to { filter: blur(0px); } }
        .animate-blur-in { animation: blurIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-blur-out { animation: blurOut 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards; }

        .feature-card { position: relative; overflow: hidden; }
        .feature-card::before {
          content: '';
          position: absolute;
          top: var(--y, 0);
          left: var(--x, 0);
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 179, 237, 0.2), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease-out;
          pointer-events: none;
        }
        .feature-card:hover::before { opacity: 1; }
        
        .cta-button { animation: pulse-shadow 2s infinite; }
        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
      `}</style>
    </div>
  );
}