import React from 'react';
import { FeatureCard } from './FeatureCard';
import { AnimatedSection } from './AnimatedSection';

const features = [
    { icon: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-6.364-1.636l.707-.707m12.728 0l.707-.707" /></svg>, title: 'AI Symptom Analysis', description: 'Understand symptoms with intelligent, data-driven insights.' },
    { icon: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Verified Specialists', description: 'Connect with trusted, board-certified medical professionals.' },
    { icon: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, title: '24/7 Virtual Access', description: 'Get advice and consultations anytime, from anywhere.' },
];

export const Features = () => {
    return (
        <AnimatedSection className="relative -mt-8 sm:-mt-12 pt-20 sm:pt-28 pb-16 sm:pb-20 bg-gray-200 backdrop-blur-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 sm:mb-3">Smarter, Faster Healthcare</h2>
                <p className="text-center text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">Stop guessing. Start knowing.</p>
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
                </div>
            </div>
        </AnimatedSection>
    )
} 