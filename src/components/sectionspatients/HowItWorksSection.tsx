import React from 'react';
import { AnimatedSection } from '../uishared/AnimatedSection';
import { HowItWorksStep } from '../uishared/HowItWorksStep';

export const HowItWorksSection = () => (
  <AnimatedSection className="py-20 -mt-12 pt-32 px-6 bg-gray-100 shadow-xl mb-24 backdrop-blur-2xl rounded-b-3xl z-20">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">A Simple Way to Go Global</h2>
    <p className="text-center text-gray-600 mb-10">Serve more patients. Make more money. Keep your freedom.</p>
    <div className="space-y-6">
        <HowItWorksStep number="1" title="Join MedDeFi" description="Set up your profile in minutes." />
        <HowItWorksStep number="2" title="We Bring You Patients" description="AI filters and pre-qualifies global patients for you." />
        <HowItWorksStep number="3" title="Accept Appointments & Get Paid" description="Work on your terms. Earn more—faster." />
    </div>
  </AnimatedSection>
);