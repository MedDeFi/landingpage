"use client";
import React, { useState, useEffect } from 'react';
import { addWaitlist } from '../forms/Waitlist/api/insertWaitlist';
import { toast, Toaster } from 'react-hot-toast';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: { x: number; y: number } | null;
}

export const WaitlistModal = ({ isOpen, onClose, position }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      setIsVisible(isOpen);
      if (!isOpen) {
          const timer = setTimeout(() => {
              setIsSubmitted(false);
              setEmail('');
          }, 300);
          return () => clearTimeout(timer);
      }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (email) {
          console.log("Waitlist submission:", email);
          setIsSubmitted(true);

          try {
                const result = await addWaitlist({
                  email: email,
                })
          
                if (!result.success) {
                  throw new Error('Failed to submit form')
                }
                toast.success('Added to waitlist!');
              } catch (error) {
                toast.error('Something went wrong. Please try again.');
                console.error('Error submitting form:', error);
              } finally {
                // Reset form after submission
                setTimeout(() => setIsSubmitted(false), 3000);
              }
      }
  };
  
  return (
      <div 
        className={`fixed inset-0 z-50 transition-colors duration-300 ${isOpen ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent pointer-events-none'}`}
        onClick={onClose}
      >
      <Toaster/>
          <div 
              onClick={(e) => e.stopPropagation()}
              style={position ? {
                position: 'absolute',
                left: position.x,
                top: position.y - 24, // 24px above the button
                transform: 'translate(-50%, -100%)',
                zIndex: 100,
                minWidth: 320,
                maxWidth: '90vw',
              } : {}}
              className={`$${position ? '' : 'absolute bottom-0 w-full'} bg-gray-100 backdrop-blur-2xl rounded-t-[1.5rem] sm:rounded-t-[2rem] p-4 sm:p-6 md:p-8 shadow-2xl flex-1 items-center justify-center transition-transform duration-300 ease-out ${isVisible ? (position ? '' : 'translate-y-0') : (position ? 'hidden' : 'translate-y-full')}`}
          >
              <div className="w-8 h-1 sm:w-10 sm:h-1.5 bg-gray-300 rounded-full mx-auto mb-3 sm:mb-4 md:mb-6"></div>
              <div className="w-full flex justify-center items-center mb-3 sm:mb-4 md:mb-6">
                <img src="/MedDeFiLogotype.svg" alt="Logotype" className="w-24 h-auto sm:w-28 md:w-32 lg:w-36" />
              </div>
              {isSubmitted ? (
                  <div className="text-center py-6 sm:py-8 md:py-10">
                      <div className="text-green-600 bg-green-100 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center mb-3 sm:mb-4 md:mb-6 ring-2 sm:ring-3 md:ring-4 ring-green-100">
                         <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">You're on the list!</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2 sm:px-4 md:px-6 max-w-sm sm:max-w-md md:max-w-lg mx-auto">We'll let you know when we launch. Thanks for being an early believer.</p>
                  </div>
              ) : (
                  <>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2 sm:mb-3">Get Early Access</h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 md:px-6 max-w-sm sm:max-w-md md:max-w-lg mx-auto">Join the waitlist to be first in line for the future of healthcare.</p>
                      <form onSubmit={handleSubmit} className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                              className="w-full text-base sm:text-lg md:text-xl p-3 sm:p-4 md:p-5 bg-white/80 border border-gray-300/50 rounded-lg sm:rounded-xl mb-3 sm:mb-4 md:mb-6 focus:ring-2 text-gray-900 focus:ring-blue-500 outline-none transition"
                              required
                          />
                          <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-full text-base sm:text-lg md:text-xl py-3 sm:py-4 md:py-5 hover:bg-blue-700 active:bg-blue-500 transition-colors">
                              Join Waitlist
                          </button>
                      </form>
                  </>
              )}
          </div>
      </div>
  );
}; 