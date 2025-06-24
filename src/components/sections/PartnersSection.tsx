import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { PartnerLogo } from '../ui/PartnerLogo';

export const PartnersSection = () => (
  <AnimatedSection className="py-8 sm:py-16 rounded-3xl mx-2 sm:mx-4 bg-gray-50">
    <h3 className="text-center text-xs sm:text-sm font-semibold px-2 sm:px-8 text-gray-500 tracking-wider uppercase">Trusted by leading health organizations</h3>
    <div className="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 px-2 sm:px-6 mx-2 sm:mx-4 text-center items-center">
        <PartnerLogo>HealthHub</PartnerLogo>
        <PartnerLogo>Vitality AI</PartnerLogo>
        <PartnerLogo>MedPioneers</PartnerLogo>
    </div>
  </AnimatedSection>
);