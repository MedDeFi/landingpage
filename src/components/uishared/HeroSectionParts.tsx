import React from 'react';
import { StatCard } from '@/components/uishared/StatCard';
import { AuroraText } from '@/components/magicui/aurora-text';
import Image from 'next/image';

export const HeroTitleDoc = () => (
  <>
    <h1 className="text-hero-fluid text-black font-semibold animate-fade-in text-center md:text-left lg:text-left" 
        style={{ marginBottom: 'var(--hero-spacing-xs)' }}>
      Healthcare
    </h1>
    <h1 className="text-hero-fluid-xl text-black !font-semibold animate-fade-in text-center md:text-left lg:text-left"
        style={{ marginBottom: 'var(--hero-spacing-xs)' }}>
      Re
      <span className='font-semibold'>
        <AuroraText>defi</AuroraText>
      </span>
      ned
    </h1>
    <p className="hidden md:block lg:block text-hero-subtitle-fluid text-gray-600 animate-fade-in-up text-left pr-20 md:text-left"
       style={{ 
         marginTop: 'var(--hero-spacing-md)', 
         marginBottom: 'var(--hero-spacing-lg)',
         marginLeft: 'var(--hero-spacing-xs)'
       }}>
    We are building a new era of medical tourism where <span className='font-semibold'>privacy and speed are non-negotiable.</span> 
    </p>
  </>
);

export const HeroStats = () => (
  <div className="relative flex text-center justify-around items-center bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg animate-fade-in-up border border-white/80"
       style={{
         padding: 'var(--hero-padding-md)',
         margin: 'var(--hero-margin-md)',
         marginTop: 'var(--hero-spacing-xl)',
         borderRadius: 'var(--hero-spacing-md)',
         gap: 'var(--hero-stat-gap)'
       }}>
    <StatCard value={350} label="Waitlist Members" />
    <div className="bg-gray-300/70" style={{ width: '1px', height: 'clamp(2rem, 4vw, 3rem)' }}></div>
    <StatCard value={152} label="Healthcare Providers" />
    <div className="bg-gray-300/70" style={{ width: '1px', height: 'clamp(2rem, 4vw, 3rem)' }}></div>
    <StatCard value={8} label="Supported Countries" suffix="+" />
  </div>
);

export const HeroImage = ({ className = '', alt = 'Nurse' }: { className?: string; alt?: string }) => (
  <Image
    src="/nurse2.webp"
    alt={alt}
    className={`object-contain animate-fade-in-up ${className}`}
    width={800}
    height={800}
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
    quality={100}
    style={{
      maxWidth: 'var(--hero-image-max-width)',
      maxHeight: 'var(--hero-image-max-height)',
      width: 'auto',
      height: 'auto'
    }}
  />
);

export const HeroBookDemoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cta-button group flex items-center justify-center bg-gradient-to-t from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-xg hover:shadow-xl transition-all duration-300 !z-20 ease-in-out transform hover:scale-105 active:scale-100"
    style={{
      paddingTop: 'var(--hero-button-padding-y)',
      paddingBottom: 'var(--hero-button-padding-y)',
      paddingLeft: 'var(--hero-button-padding-x)',
      paddingRight: 'var(--hero-button-padding-x)',
      marginTop: 'var(--hero-spacing-lg)',
      fontSize: 'var(--hero-button-text)',
      borderRadius: 'var(--hero-button-radius)',
      width: 'clamp(200px, 80%, 400px)'
    }}
  >
    <span>Book a Demo</span>
  </button>
);

export const WaitlistButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="cta-button group flex items-center justify-center bg-gradient-to-t from-blue-500 via-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-xg hover:shadow-xl transition-all duration-300 !z-20 ease-in-out transform hover:scale-105 active:scale-100"
    style={{
      paddingTop: 'var(--hero-button-padding-y)',
      paddingBottom: 'var(--hero-button-padding-y)',
      paddingLeft: 'var(--hero-button-padding-x)',
      paddingRight: 'var(--hero-button-padding-x)',
      marginTop: 'var(--hero-spacing-lg)',
      fontSize: 'var(--hero-button-text)',
      borderRadius: 'var(--hero-button-radius)',
      width: 'clamp(200px, 80%, 400px)'
    }}
  >
    <span>Join Waitlist</span>
  </button>
);
