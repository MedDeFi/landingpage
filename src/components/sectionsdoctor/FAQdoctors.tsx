"use client";

import React from 'react';
import { AnimatedSection } from '@/components/uishared/AnimatedSection';
import { FAQItem } from '@/components/uishared/FAQItem';
import { faqsDoctorsData } from '@/lib/datadoctors';
import Image from 'next/image';

// Ensure the "export" keyword is here to make the component importable
export const FAQdoctors = () => {
  return (
    <AnimatedSection className="my-12 md:mx-4 flex flex-col items-center justify-center shadow-xl rounded-3xl bg-gray-50 z-10 relative">
      <div className="flex flex-col items-end md:items-center justify-center relative w-full h-screen md:h-full md:w-full">
        <Image
          src="/solidbluebg.webp"
          alt="SmileDoc"
          className="w-full h-full max-w-full max-h-full object-cover object-right rounded-3xl"
          width={800}
          height={600}
        />
      </div>
      <div className='flex flex-col md:flex-row absolute justify-center items-center p-4 lg:p-64'>
      <h2 className="text-5xl font-bold text-center md:text-start text-gray-50 mb-10">Frequently Asked Questions</h2>
      <div className="bg-blue-50 backdrop-blur-xl rounded-3xl p-4 border border-white/80">
        {faqsDoctorsData.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </div>
    </AnimatedSection>
  );
};