import React from 'react';
import { HeroImage } from './HeroSectionParts';

interface HeroBackgroundProps {
  className?: string;
  imageClassName?: string;
  imageAlt?: string;
  style?: React.CSSProperties;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  className = '',
  imageClassName = 'h-auto max-h-[80%] w-3/5 object-cover',
  imageAlt = 'Healthcare Professional',
  style
}) => {
  return (
    <div 
      className={`absolute inset-y-0 right-0 items-end justify-center bottom-0 bg-gradient-to-t from-blue-600 to-white rounded-full overflow-hidden max-h-[85%] max-w-[80%] ${className}`}
      style={style}
    >
      {/* Main Image */}
      <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
        <HeroImage className={imageClassName} alt={imageAlt} />
      </div>
      {/* Background pattern on blue section */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-3/4 h-full bg-blue-500 opacity-10 transform rotate-12 rounded-full"></div>
        <div className="absolute -right-1/2 top-1/4 -translate-y-1/2 w-full h-full bg-blue-400 opacity-10 transform -rotate-12 rounded-full"></div>
      </div>
    </div>
  );
};

