"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { addWaitlist } from '@/components/forms/Waitlist/api/insertWaitlist';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
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
          try {
                const result = await addWaitlist({
                email: email,
                })
        
                if (!result.success) {
                throw new Error('Failed to submit form')
                }
                setIsSubmitted(true);
            } catch (error) {
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
          <div 
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className={`fixed bottom-0 w-full bg-gray-100 backdrop-blur-2xl rounded-t-[2rem] p-6 shadow-2xl flex-1 items-center justify-center transition-transform duration-300 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
          >
              <div className="w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <div className="w-full flex justify-center items-center mb-4">
                <Image src="/MedDeFiLogotype.svg" alt="Logotype" className="w-32 h-auto" width={128} height={40} />
              </div>
              {isSubmitted ? (
                  <div className="text-center py-8">
                      <div className="text-green-600 bg-green-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 ring-4 ring-green-100">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h2>
                      <p className="text-gray-600">We&apos;ll let you know when we launch. Thanks for being an early believer.</p>
                  </div>
              ) : (
                  <>
                      <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Get Early Access</h2>
                      <p className="text-gray-600 text-center mb-6">Join the waitlist to be first in line for the future of healthcare.</p>
                      <form onSubmit={handleSubmit}>
                          <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                              className="w-full text-lg p-4 bg-white/80 border border-gray-300/50 rounded-xl mb-4 focus:ring-2 text-gray-900 focus:ring-blue-500 outline-none transition"
                              required
                          />
                          <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded-full text-lg py-4 hover:bg-blue-700 active:bg-blue-500 transition-colors">
                              Join Waitlist
                          </button>
                      </form>
                  </>
              )}
          </div>
      </div>
  );
}; 