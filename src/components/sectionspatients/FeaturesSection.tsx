import React from 'react';
import { AnimatedSection } from '@/components/sectionspatients/AnimatedSection';        
import { FeatureCard } from '@/components/uipatients/FeatureCard';
import { featuresData } from '@/lib/data';  

export const FeaturesSection = () => (
  <AnimatedSection className="relative pt-28 pb-20 px-6 bg-gray-200 shadow-xl backdrop-blur-2xl rounded-b-3xl"> 
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">Smarter, Faster Healthcare</h2>
    <p className="text-center text-gray-600 mb-10">Stop guessing. Start knowing.</p>
    <div className="space-y-4">
        {featuresData.map((feature, i) => <FeatureCard key={i} {...feature} />)}
    </div>
  </AnimatedSection>
);