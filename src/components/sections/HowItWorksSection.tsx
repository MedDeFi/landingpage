import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { HowItWorksStep } from '../ui/HowItWorksStep';

export const HowItWorksSection = () => (
  <AnimatedSection className="py-20 -mt-12 pt-32 px-6 bg-gray-100 shadow-xl mb-24 backdrop-blur-2xl rounded-b-3xl z-20">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">A Clear Path to Care</h2>
    <p className="text-center text-gray-600 mb-10">Guidance in three simple steps.</p>
    <div className="space-y-6">
        <HowItWorksStep number="1" title="Describe Your Symptoms" description="Tell us what's wrong in plain language. Our smart system understands." />
        <HowItWorksStep number="2" title="Get AI-Powered Insights" description="Receive an instant analysis of potential causes and recommendations." />
        <HowItWorksStep number="3" title="Connect with a Specialist" description="We'll help you find and book an appointment with a verified doctor." />
    </div>
  </AnimatedSection>
);