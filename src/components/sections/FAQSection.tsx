"use client";

import React from 'react';
import { AnimatedSection } from '@/components/sections/AnimatedSection';
import { FAQItem } from '@/components/ui/FAQItem';
import { faqsData } from '@/lib/data';

// Ensure the "export" keyword is here to make the component importable
export const FAQSection = () => {
  return (
    <AnimatedSection className="py-10 sm:py-20 px-2 sm:px-6 mx-2 sm:mx-4 mb-8 sm:mb-16 mt-8 sm:mt-16 shadow-xl rounded-3xl bg-gray-50">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-10">Questions? Answered.</h2>
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-2 sm:p-4 border border-white/80">
        {faqsData.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </AnimatedSection>
  );
};