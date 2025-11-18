import React, { useState } from 'react';
import { HeroTitle, HeroStats, HeroImage, HeroWaitlistButton } from '../uipatients/HeroSectionParts';
import { WaitlistModal } from '../uishared/WaitlistModal';
import { HeroBackground } from '../uishared/HeroBackground';
import { HeroContainer } from '../uishared/HeroContainer';
import { HeroLayout, HeroContentSection, HeroMobileLayout } from '../uishared/HeroLayout';

const HeroSectionPatient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Desktop (large screens) */}
      <div className="hidden lg:block z-50 px-4 pt-4">
        <HeroContainer variant="desktop">
          <HeroBackground 
            className="lg:w-1/2 mr-4 mt-12 mb-12" 
            imageClassName="h-auto max-h-[700px]"
            imageAlt="Doctor"
          />
          <HeroLayout>
            <HeroContentSection className="justify-start mt-28">
              <HeroTitle />
              <HeroStats />
              <div className="flex mt-4">
                <HeroWaitlistButton onClick={() => setIsModalOpen(true)} />
              </div>
            </HeroContentSection>
          </HeroLayout>
          {/* Waitlist Modal */}
          <div className="absolute inset-0 mb-16">
            <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
        </HeroContainer>
      </div>
      {/* Mobile/Tablet (small/medium screens) */}
      <div className="lg:hidden">
        <HeroContainer variant="mobile" className="pb-32">
          <HeroMobileLayout>
            <div className="relative pt-32">
              <HeroTitle />
            </div>
            <div className="relative mt-4">
              <div className="w-full h-96 items-center justify-center flex">
                <HeroImage className="w-3/5 h-full items-center justify-center object-cover object-top" alt="Nurse" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
              </div>
              <HeroStats />
            </div>
          </HeroMobileLayout>
        </HeroContainer>
      </div>
    </>
  );
};

export default HeroSectionPatient; 