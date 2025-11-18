"use client";

import React from 'react';
import { AnimatedSection } from '@/components/uishared/AnimatedSection';
import { Globe } from '../magicui/globe';
import { FeatureCard } from '@/components/uishared/FeatureCard';
import { featuresDoctors1Data, featuresDoctors2Data, featuresDoctors3Data } from '@/lib/datadoctors';  
import { AuroraText } from '../magicui/aurora-text';
import Image from 'next/image';

export const AcrossBorders = () => {
  return (
    <AnimatedSection className="flex flex-col items-center justify-center shadow-xl rounded-3xl relative bg-gradient-to-br from-white/50 via-blue-50 to-white/50 z-20 pb-8 backdrop-blur-2xl sm:rounded-3xl my-12 md:mx-4 px-4">
      <div className='flex flex-col-1 w-full py-8 items-center md:items-start justify-center md:justify-start '>
      <div className='w-full items-center justify-center md:items-start md:justify-start'>
      <AuroraText className='text-6xl md:text-8xl items-center justify-center md:items-start md:justify-start font-semibold'> Healthcare</AuroraText>
      <h2 className="text-5xl md:text-6xl items-center justify-center md:items-start md:justify-start font-semibold">Across Borders</h2>
      </div>
      
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full items-around justify-center">
        {/* Title/Description */}
        <div className="md:col-span-1 flex flex-col justify-between rounded-3xl min-w-50 p-8 bg-gradient-to-tr from-blue-600 to-blue-500 backdrop-blur-2xl text-left">
          <h2 className='font-semibold text-white text-3xl'>5x Your Income with Worldwide Patients</h2>
          <Image className='h-32 w-32' src="/MedDeFiLogotypedark.svg" alt="MedDeFi Logotype for dark backgrounds" width={128} height={128} />
          <p className='text-white'>
            No more waiting for patients to find you. We bring the patients to you.
          </p>
        </div>
        
        {/* Features section: full width below */}
        <div className="md:col-span-2 flex flex-wrap justify-center items-stretch w-full min-w-50 max-w-full gap-4 items-around justify-center pl-4">
          <div className="flex flex-col w-full">{featuresDoctors1Data.map((feature, i) => <FeatureCard key={i} {...feature} />)}</div>
          <div className="flex flex-col w-full">{featuresDoctors2Data.map((feature, i) => <FeatureCard key={i} {...feature} />)}</div>
          <div className="flex flex-col w-full">{featuresDoctors3Data.map((feature, i) => <FeatureCard key={i} {...feature} />)}</div>
        </div>
          {/* Globe */}
          <div className="md:col-span-2 flex items-center justify-center bg-white/50 backdrop-blur-xl rounded-3xl w-full h-full">
          <Globe className="relative items-center justify-center" />
        </div>
      </div>
    </AnimatedSection>
  )
} 