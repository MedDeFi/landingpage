"use client";

import React from 'react';
import { AnimatedSection } from '@/components/uishared/AnimatedSection';
import { FAQItem } from '@/components/uishared/FAQItem';
import { faqsData } from '@/lib/datapatients';

// Ensure the "export" keyword is here to make the component importable
export const FAQSection = () => {
  return (
    <AnimatedSection className="py-20 px-6 mx-4 mb-16 mt-16 shadow-xl rounded-3xl bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Questions? Answered.</h2>
      <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-4 border border-white/80">
        {faqsData.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </AnimatedSection>
  );
};