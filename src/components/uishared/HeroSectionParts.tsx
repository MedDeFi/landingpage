import React from 'react';
import { StatCard } from '@/components/uishared/StatCard';
import { AuroraText } from '@/components/magicui/aurora-text';
import Image from 'next/image';

export const HeroTitleDoc = () => (
  <>
    <h1 className="text-5xl md:text-[60px] lg:text-[90px] text-black font-semibold mb-1 animate-fade-in text-center md:text-left lg:text-left">
      Medical Tourism
    </h1>
    <h1 className="text-6xl md:text-[72px] lg:text-[116px] text-black !font-semibold mb-1 animate-fade-in text-center md:text-left lg:text-left">
      Re
      <span className='font-semibold'>
        <AuroraText>defi</AuroraText>
      </span>
      ned
    </h1>
    <p className="hidden md:block lg:block mt-4 mb-8 text-lg text-gray-600 animate-fade-in-up ml-0 md:ml-4 text-center md:text-left">
      More Patients. More Income. No Extra Hours.
    </p>
  </>
);

export const HeroStats = () => (
  <div className="relative flex text-center justify-around items-center px-4 py-4 bg-white/60 backdrop-blur-xl rounded-2xl mx-4 md:mx-16 md:ml-4 lg:mt-12 shadow-lg animate-fade-in-up border border-white/80">
    <StatCard value={12} label="Waitlist Members" />
    <div className="w-px text-center h-12 bg-gray-300/70"></div>
    <StatCard value={30} label="Healthcare Providers" />
    <div className="w-px h-12 bg-gray-300/70"></div>
    <StatCard value={5} label="Supported Countries" suffix="+" />
  </div>
);

export const HeroImage = ({ className = '', alt = 'Nurse' }: { className?: string; alt?: string }) => (
  <Image src="/nurse2.webp" alt={alt} className={`object-contain animate-fade-in-up ${className}`} width={400} height={400} />
);

export const HeroWaitlistButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cta-button group md:w-4/5 lg:w-4/5 flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-500 text-white font-semibold mt-8 py-4 rounded-full shadow-xg hover:shadow-xl transition-all duration-300 !z-20 ease-in-out transform hover:scale-105 active:scale-100"
  >
    <span className="text-lg">Join the Waitlist</span>
  </button>
); 
