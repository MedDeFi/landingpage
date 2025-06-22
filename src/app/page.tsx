'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/LandingPage/Hero';
import { Features } from '@/components/LandingPage/Features';
import { HowItWorks } from '@/components/LandingPage/HowItWorks';
import { PoweredByAI } from '@/components/LandingPage/PoweredByAI';
import { Testimonials } from '@/components/LandingPage/Testimonials';
import { Partners } from '@/components/LandingPage/Partners';
import { FAQ } from '@/components/LandingPage/FAQ';
import { CallToAction } from '@/components/LandingPage/CallToAction';
import { WaitlistModal } from '@/components/LandingPage/WaitlistModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <PoweredByAI />
      <Testimonials />
      <Partners />
      <FAQ />
      <CallToAction onOpenModal={handleOpenModal} />
      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}
