import React, { ReactNode } from 'react';

interface HeroLayoutProps {
  children: ReactNode;
  className?: string;
}

export const HeroLayout: React.FC<HeroLayoutProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row rounded-3xl ${className}`}
         style={{ minHeight: 'var(--hero-container-min-height)' }}>
      {children}
    </div>
  );
};

interface HeroContentSectionProps {
  children: ReactNode;
  className?: string;
}

export const HeroContentSection: React.FC<HeroContentSectionProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`w-full md:w-1/2 flex flex-col text-gray-800 relative justify-center items-start rounded-3xl ${className}`}
         style={{ 
           padding: 'var(--hero-padding-lg)',
           marginLeft: 'var(--hero-margin-md)'
         }}>
      <div className="item-evenly">
        {children}
      </div>
    </div>
  );
};

interface HeroMobileLayoutProps {
  children: ReactNode;
  showGradient?: boolean;
}

export const HeroMobileLayout: React.FC<HeroMobileLayoutProps> = ({
  children,
  showGradient = true
}) => {
  return (
    <>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white-100 to-gray-100 opacity-50"></div>
      )}
      {children}
    </>
  );
};

