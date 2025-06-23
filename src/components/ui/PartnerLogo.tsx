import React from 'react';

interface PartnerLogoProps {
  children: React.ReactNode;
}

export const PartnerLogo = ({ children }: PartnerLogoProps) => (
    <div className="flex items-center justify-center h-10 text-gray-500 font-bold text-lg opacity-80 hover:opacity-100 transition-opacity">
        {children}
    </div>
);