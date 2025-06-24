import React from 'react';
import { AnimatedSection } from '@/components/sections/AnimatedSection';        
import { FeatureCard } from '@/components/ui/FeatureCard';
import { featuresData } from '@/lib/data';  

export const FeaturesSection = () => (
  <AnimatedSection className="relative -mt-8 sm:-mt-12 pt-16 sm:pt-28 pb-10 sm:pb-20 px-2 sm:px-6 bg-gray-200 shadow-xl backdrop-blur-2xl rounded-b-3xl z-30"> 
    <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">Smarter, Faster Healthcare</h2>
    <p className="text-center text-gray-600 mb-6 sm:mb-10">Stop guessing. Start knowing.</p>
    <div className="space-y-4">
        {featuresData.map((feature, i) => <FeatureCard key={i} {...feature} />)}
    </div>
  </AnimatedSection>
);