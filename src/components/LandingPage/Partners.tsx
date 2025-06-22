import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const PartnerLogo = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center h-8 sm:h-10 text-gray-500 font-bold text-sm sm:text-lg opacity-80 hover:opacity-100 transition-opacity">
        {children}
    </div>
);

export const Partners = () => {
    return (
        <AnimatedSection className="py-12 sm:py-16">
            <h3 className="text-center text-xs sm:text-sm font-semibold px-4 sm:px-8 text-gray-500 tracking-wider uppercase">Trusted by leading health organizations</h3>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-6 max-w-3xl mx-auto text-center items-center">
                <PartnerLogo>HealthHub</PartnerLogo>
                <PartnerLogo>Vitality AI</PartnerLogo>
                <PartnerLogo>MedPioneers</PartnerLogo>
            </div>
        </AnimatedSection>
    )
} 