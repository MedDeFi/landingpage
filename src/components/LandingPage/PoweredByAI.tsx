import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const PoweredByAI = () => {
    return (
        <AnimatedSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto bg-gray-50 shadow-xl backdrop-blur-2xl rounded-2xl sm:rounded-3xl py-8 sm:py-12 px-4 sm:px-6">
                <div className="inline-block bg-blue-100 text-blue-600 p-3 sm:p-4 rounded-2xl sm:rounded-3xl mb-4 shadow-inner-sm">
                    <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3m6-7h3m-18 0h3"></path><circle cx="12" cy="12" r="4"></circle></svg>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Powered by Intelligence</h2>
                <p className="text-gray-600 mt-3 max-w-md mx-auto text-sm sm:text-base">Our platform is built on a sophisticated AI engine trained on millions of data points to provide safe and reliable insights.</p>
            </div>
        </AnimatedSection>
    )
}
