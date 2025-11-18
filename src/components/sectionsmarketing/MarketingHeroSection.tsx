import React, { useState } from 'react';
import { HeroTitleDoc, HeroImage, WaitlistButton } from '@/components/uishared/HeroSectionParts';
import { WaitlistModal } from '@/components/uishared/WaitlistModal';    
import MarketingHeader from './MarketingHeader';
import { HeroBackground } from '@/components/uishared/HeroBackground';
import { HeroContainer } from '@/components/uishared/HeroContainer';
import { HeroLayout, HeroContentSection, HeroMobileLayout } from '@/components/uishared/HeroLayout';

const MarketingHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop (large screens) */}
      <div className="relative overflow-hidden min-h-screen flex items-center m-4 rounded-3xl justify-left">
        <MarketingHeader />
        <HeroContainer variant="desktop">
          <HeroBackground className="lg:w-1/2 mr-4 mt-12 mb-12" />
          <HeroLayout>
            <HeroContentSection>
              <HeroTitleDoc />
              <div className="flex mt-4">
                <WaitlistButton onClick={() => setIsModalOpen(true)} />
              </div>
            </HeroContentSection>
          </HeroLayout>
          {/* Waitlist Modal */}
          <div className="absolute inset-0 mb-16">
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </HeroContainer>
      </div>

      {/* Tablet (medium screens) */}
      <div className="hidden md:block lg:hidden z-40 px-4 pt-4">
        <HeroContainer variant="tablet">
          <HeroBackground 
            className="w-1/2 mr-4 mt-8 mb-8" 
            imageClassName="h-auto max-h-[500px] w-full object-cover object-top"
          />
          <HeroLayout className="justify-center items-center">
            <HeroContentSection className="items-center">
              <HeroTitleDoc />
              <div className="flex mt-4">
                <WaitlistButton onClick={() => setIsModalOpen(true)} />
              </div>
            </HeroContentSection>
          </HeroLayout>
          {/* Waitlist Modal */}
          <div className="absolute inset-0 mb-16">
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </HeroContainer>
      </div>

      {/* Mobile (small screens) */}
      <div className="md:hidden">
        <HeroContainer variant="mobile">
          <HeroMobileLayout>
            <div className="relative pt-32">
              <HeroTitleDoc />
            </div>
            <div className="relative mt-12 flex flex-col items-center justify-center">
              <div className="w-full h-96 flex items-center justify-center">
                <HeroImage className="w-full h-full items-center justify-center object-cover object-top" alt="Nurse" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
              </div>
            </div>
          </HeroMobileLayout>
        </HeroContainer>
      </div>
    </>
  );
};

export default MarketingHeroSection;