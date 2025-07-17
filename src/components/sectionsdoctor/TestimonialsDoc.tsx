import React from 'react';
import { AnimatedSection } from '../uishared/AnimatedSection';
import { TestimonialCard } from '../uishared/TestimonialCard';
import { testimonialsDoctorsData } from '@/lib/datadoctors';

export const TestimonialsDoc = () => (
  <AnimatedSection className="py-20 bg-gray-50 mb-16 mt-16 backdrop-blur-2xl rounded-3xl items-center justify-center mx-4">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 px-6">Loved by Our First Professionals</h2>
    <div className="flex items-center justify-center overflow-x-auto space-x-4 pb-6 px-6 testimonial-carousel">
      {testimonialsDoctorsData.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
    </div>
  </AnimatedSection>
);