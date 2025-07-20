"use client";

import React, { useState } from 'react';

// Define the component's props
interface FAQItemProps {
  question: string;
  answer: string;
}

// Ensure the "export" keyword is here to make the component importable
export const FAQItem = ({ question, answer }: FAQItemProps) => {
  // This component manages its own state for whether it's open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/80 bg-black/10 mb-4 rounded-3xl pl-8 pr-8 py-4 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <div 
          className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path>
          </svg>
        </div>
      </button>

      {/* This div uses a CSS grid trick to animate its height from 0 to auto */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-gray-600 text-sm pt-2">{answer}</p>
        </div>
      </div>
    </div>
  );
};