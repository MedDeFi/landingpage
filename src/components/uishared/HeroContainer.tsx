import React, { ReactNode } from 'react';

interface HeroContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'desktop' | 'tablet' | 'mobile';
}

export const HeroContainer: React.FC<HeroContainerProps> = ({
  children,
  className = '',
  variant = 'desktop'
}) => {
  const baseClasses = 'relative bg-white overflow-hidden rounded-3xl w-full items-stretch';
  
  const variantStyles = {
    desktop: { minHeight: 'var(--hero-container-min-height)' },
    tablet: { minHeight: 'clamp(500px, 85vh, 700px)' },
    mobile: { minHeight: '100vh' }
  };

  return (
    <div className={`${baseClasses} ${className}`} style={variantStyles[variant]}>
      {children}
    </div>
  );
};

