import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const PoweredByAISection = () => (
  <AnimatedSection className="py-20 -mt-12 px-6 bg-gray-50 shadow-xl mb-16 mt-16 mr-4 ml-4 backdrop-blur-2xl rounded-3xl text-center">
    <div className="inline-block bg-blue-100 text-blue-600 p-4 rounded-3xl mb-4 shadow-inner-sm">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-7h3m-18 0h3"></path><circle cx="12" cy="12" r="4"></circle></svg>
    </div>
    <h2 className="text-4xl font-bold text-gray-900">Simplified Patient Matching</h2>
    <p className="text-gray-600 mt-3 max-w-md mx-auto">We bring qualified global patients to your practice—no extra effort needed.</p>
  </AnimatedSection>
);