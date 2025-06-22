import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface CallToActionProps {
    onOpenModal: () => void;
}

export const CallToAction = React.forwardRef<HTMLDivElement, CallToActionProps>(({ onOpenModal }, ref) => {
    return (
        <AnimatedSection ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 text-center z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Don't Miss Out</h2>
            <p className="text-gray-600 mt-3 mb-6 sm:mb-8 text-sm sm:text-base">Join the waitlist for exclusive early access and be a part of the healthcare revolution.</p>
            <button onClick={onOpenModal} className="cta-button bg-blue-600 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-100 transition-all duration-300 text-sm sm:text-base">
                Claim Your Spot
            </button>
        </AnimatedSection>
    )
}); 