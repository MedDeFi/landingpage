import React from 'react';
import { AnimatedSection } from '@/components/sectionsdoctor/AnimatedSectionDoc';        
import { FeatureCard } from '@/components/uishared/FeatureCard';
import { featuresDoctorsData } from '@/lib/datadoctors';  

export const FeatureSectionDoctor = () => (
  <AnimatedSection className="flex flex-col items-center justify-center relative pt-28 pb-20 px-6 bg-white/80 shadow-xl backdrop-blur-2xl sm:rounded-3xl md:rounded-3xl sm:-mt-16 md:mt-16 md:mx-4"> 
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">5x Your Income with International Patients</h2>
    <p className="text-center text-gray-600 mb-10">No more waiting for patients to find you. We bring the patients to you.</p>
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 lg:space-y-10 w-full max-w-4xl justify-center items-stretch">
        {featuresDoctorsData.map((feature, i) => <FeatureCard key={i} {...feature} />)}
    </div>
  </AnimatedSection>
);