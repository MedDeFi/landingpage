"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../navbar/NavBar';
import { Hero } from '../LandingPage/Hero';
import { Features } from '../LandingPage/Features';
import { HowItWorks } from '../LandingPage/HowItWorks';
import { PoweredByAI } from '../LandingPage/PoweredByAI';
import { Testimonials } from '../LandingPage/Testimonials';
import { Partners } from '../LandingPage/Partners';
import { FAQ } from '../LandingPage/FAQ';
import { CallToAction } from '../LandingPage/CallToAction';
import { WaitlistModal } from '../LandingPage/WaitlistModal';

export default function Landing3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDontMissOutVisible, setIsDontMissOutVisible] = useState(false);
  const dontMissOutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDontMissOutVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = dontMissOutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isModalOpen ? 'animate-blur-in' : 'animate-blur-out'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      <main className="main-content relative">
        <Hero />
        <Features />
        <HowItWorks />
        <PoweredByAI />
        <Testimonials />
        <Partners />
        <FAQ />
        <CallToAction ref={dontMissOutRef} onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <div className={`fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-gray-100/90 via-gray-100/90 to-transparent pointer-events-none z-30 transition-opacity duration-300 ${isDontMissOutVisible ? 'opacity-0' : 'opacity-100'}`}>
        <div className="pointer-events-auto max-w-sm sm:max-w-lg mx-auto">
          <button onClick={() => setIsModalOpen(true)} className="cta-button group w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ease-in-out transform hover:scale-105 active:scale-100">
            <span className="text-base sm:text-lg">Join the Waitlist</span>
          </button>
        </div>
      </div>
      <style jsx>{`
          html { scroll-behavior: smooth; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
          
          .main-content::-webkit-scrollbar { width: 0; background: transparent; }
          .testimonial-carousel { scroll-snap-type: x mandatory; -ms-overflow-style: none; scrollbar-width: none; }
          .testimonial-carousel > div { scroll-snap-align: start; }
          .testimonial-carousel::-webkit-scrollbar { display: none; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) both; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
          .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) both; animation-delay: 0.2s; }
          
          /* Custom Blur Animations */
          @keyframes blurIn {
            from { filter: blur(0px); }
            to { filter: blur(4px); }
          }
          
          @keyframes blurOut {
            from { filter: blur(4px); }
            to { filter: blur(0px); }
          }
          
          .animate-blur-in {
            animation: blurIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          .animate-blur-out {
            animation: blurOut 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          /* Aurora Background */
          .aurora-background {
            position: absolute;
            inset: 0;
            background: linear-gradient(125deg, #e0f2fe, #ffffff, #bae6fd);
            background-size: 400% 400%;
            animation: aurora 15s ease infinite;
            z-index: -1;
            opacity: 0.3;
          }
          @keyframes aurora {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
          }
          
          /* Cursor Glow Effect */
          .feature-card {
            position: relative;
            overflow: hidden;
          }
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
          .feature-card:hover::before {
            opacity: 1;
          }
          
          /* Pulsating CTA Button */
          .cta-button {
            animation: pulse-shadow 2s infinite;
          }
          @keyframes pulse-shadow {
            0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }
          /* Mobile-specific improvements */
          @media (max-width: 640px) {
            .feature-card {
              margin-bottom: 1rem;
            }
            
            .testimonial-carousel {
              scroll-padding: 0 1rem;
            }
            
            .cta-button {
              font-size: 0.875rem;
              padding: 0.75rem 1.5rem;
            }
          }
          /* Tablet improvements */
          @media (min-width: 641px) and (max-width: 1024px) {
            .feature-card {
              margin-bottom: 1.5rem;
            }
          }
          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .feature-card:hover::before {
              opacity: 0;
            }
            
            .feature-card:active {
              transform: scale(0.98);
            }
          }
        `}</style>
    </div>
  );
}
