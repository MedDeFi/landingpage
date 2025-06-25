import React from 'react';
import { AnimatedSection } from '@/components/uishared/AnimatedSection';
import { HowItWorksStep } from '../uishared/HowItWorksStep';
import { HowItWorksB } from '../uishared/HowItWorksB';

export const HowDoc = () => (
  <AnimatedSection className="flex md:flex-row flex-col items-center justify-center relative gap-8 py-20 sm:-mt-16 md:mt-16 md:mx-4 px-6 bg-gray-100 shadow-xl mb-64 backdrop-blur-2xl rounded-3xl !z-20">
    <div className="flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">Grow As a Professional</h2>
    <p className="text-center text-gray-600 mb-10">Guidance in three simple steps.</p>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4">
    <div className="flex flex-col md:flex-row text-white bg-blue-600 md:space-x-4 space-y-4 lg:space-y-10 w-full max-w-4xl rounded-3xl p-8 shadow-lg justify-center items-center items-stretch">
        <HowItWorksB number="1" title="Describe Your Symptoms" description="Tell us what's wrong in plain language. Our smart system understands." />
    </div>
    <div className="flex md:flex-row p-8 bg-white/70 md:space-x-4 space-y-4 lg:space-y-10 w-full max-w-4xl rounded-3xl shadow-lg justify-center items-stretch">
    <HowItWorksStep number="2" title="Get AI-Powered Insights" description="Receive an instant analysis of potential causes and recommendations." />
    </div>
    <div className="flex flex-col md:flex-row bg-white/60 md:space-x-4 space-y-4 lg:space-y-10 w-full max-w-4xl rounded-3xl p-8 shadow-lg justify-center items-stretch">
    <HowItWorksStep number="3" title="Connect with a Specialist" description="We'll help you find and book an appointment with a verified doctor." />
    </div>
    </div>
  </AnimatedSection>
);
