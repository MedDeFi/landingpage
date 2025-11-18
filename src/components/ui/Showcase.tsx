'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ShowcaseProps {
  animationsEnabled?: boolean;
}

const Showcase = ({ animationsEnabled = false }: ShowcaseProps) => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    // Only initialize GSAP animations after loading is complete
    if (!isTablet && animationsEnabled) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#showcase',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
          pinSpacing: true,  // Controls spacing behavior
          anticipatePin: 1,  // Prevents layout shift
          invalidateOnRefresh: true,  // Fixes responsive issues
        },
      });
      
      timeline
        .to('.mask img', {
          transform: 'scale(1.1)',
        })
        .to('.content', { 
          opacity: 1, 
          y: 0, 
          ease: 'power1.in' 
        });
    } else if (!animationsEnabled || isTablet) {
      // Cleanup any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [isTablet, animationsEnabled]);

  return (
    <section className="flex flex-col bg-black w-full rounded-3xl" id="showcase">
      <div className="media rounded-3xl overflow-hidden w-full relative">
        <Image 
          src="/meddefi-globe.webp" 
          alt="MedDeFi Globe" 
          width={1000} 
          height={1000}
          quality={100}
          priority
          fetchPriority="high"
          className="w-full object-cover object-bottom"
        />
        <div className="mask">
          <img 
            src="/meddefi-mask-logo.svg" 
            alt="Mask logo"
            loading="eager"
          />
        </div>
      </div>
      <div className="content h-auto">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Healthcare Payments, Reimagined</h2>
            <div className="space-y-5 mt-8 pe-10 text-zinc-400/80">
              <p>
                Introducing{' '}
               
                  MedDeFi, the Airbnb of Medical Tourism.
              
                {' '}It powers instant, secure medical payments with programmable escrow smart contracts and built-in compliance.
              </p>
              <p>
                Based on Blockchain technology, <span className="text-white">MedDeFi eliminates the friction of traditional healthcare payments—high fees</span>, slow settlement, and compliance nightmares—all while maintaining HIPAA compliance.
              </p>
              <p>
                From medical tourism to cross-border telemedicine, from pharmacy networks to insurance claim settlements, experience the future of Medical Tourism with MedDeFi.
              </p>
              
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3 className="green-gradient">99% secure</h3>
              <p>vs traditional systems</p>
            </div>
            <div className="space-y-2">
              <p>Settle payments in</p>
              <h3>~2 seconds</h3>
              <p className="text-zinc-200/50">vs 3-5 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;