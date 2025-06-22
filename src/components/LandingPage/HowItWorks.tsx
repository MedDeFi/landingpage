import React from 'react';
import { HowItWorksStep } from './HowItWorksStep';
import { AnimatedSection } from './AnimatedSection';

export const HowItWorks = () => {
    return (
        <AnimatedSection className="py-16 sm:py-20 bg-gray-100 backdrop-blur-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">A Clear Path to Care</h2>
                <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">Guidance in three simple steps.</p>
                <div className="space-y-6 max-w-3xl mx-auto">
                    <HowItWorksStep number="1" title="Describe Your Symptoms" description="Tell us what's wrong in plain language. Our smart system understands." />
                    <HowItWorksStep number="2" title="Get AI-Powered Insights" description="Receive an instant analysis of potential causes and recommendations." />
                    <HowItWorksStep number="3" title="Connect with a Specialist" description="We'll help you find and book an appointment with a verified doctor." />
                </div>
            </div>
        </AnimatedSection>
    )
} 