import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { TestimonialCard } from '../uipatients/TestimonialCard';
import { testimonialsData } from '@/lib/data';

export const TestimonialsSection = () => (
  <AnimatedSection className="py-20 bg-gray-50 mb-16 mt-16 backdrop-blur-2xl rounded-3xl">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 px-6">Loved by Our First Users</h2>
    <div className="flex overflow-x-auto space-x-4 pb-6 px-6 testimonial-carousel">
      {testimonialsData.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
    </div>
  </AnimatedSection>
);