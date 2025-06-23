import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { PartnerLogo } from '../ui/PartnerLogo';

export const PartnersSection = () => (
  <AnimatedSection className="py-16 rounded-3xl mx-4 bg-gray-50">
    <h3 className="text-center text-sm font-semibold px-8 text-gray-500 tracking-wider uppercase">Trusted by leading health organizations</h3>
    <div className="mt-8 grid grid-cols-3 gap-8 px-6 mx-4 text-center items-center">
        <PartnerLogo>HealthHub</PartnerLogo>
        <PartnerLogo>Vitality AI</PartnerLogo>
        <PartnerLogo>MedPioneers</PartnerLogo>
    </div>
  </AnimatedSection>
);