'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// TypeScript interfaces
interface GalleryItem {
  id: string;
  title: string;
  description: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  captionPosition: 'pin-bottom-left' | 'pin-bottom-right' | 'large-pin-bottom-left';
  theme: 'dark' | 'light';
}

// Gallery data - Technical Architecture Highlights
const galleryItems: GalleryItem[] = [
  {
    id: 'smart-contracts',
    title: 'Smart Contracts',
    description:
      'Automated payment escrow smart contracts, insurance claims processing, and subscription management built on Blockchain technology.',
    media: {
      type: 'image',
      src: '/MedDeFi-bgBig2.webp',
      alt: 'Smart contract architecture visual'
    },
    captionPosition: 'large-pin-bottom-left',
    theme: 'dark'
  },
  {
    id: 'wdk-integration',
    title: 'Biometric Wallets',
    description:
      'Biometric wallets for seamless, secure healthcare payments.',
    media: {
      type: 'image',
      src: '/meddefi-globe.png',
      alt: 'MedDeFi global payment network'
    },
    captionPosition: 'pin-bottom-left',
    theme: 'dark'
  },
  {
    id: 'backend-services',
    title: 'Easy Management',
    description:
      'Handle your schedule with ease, everything in a single place.',
    media: {
      type: 'image',
      src: '/Doctor2.webp',
      alt: 'Backend services and EHR integration'
    },
    captionPosition: 'pin-bottom-left',
    theme: 'dark'
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    description:
      'AES-256-GCM encryption, HIPAA controls, multi-factor authentication, and regulatory compliance infrastructure.',
    media: {
      type: 'image',
      src: '/MedDeFiProfessionals4.webp',
      alt: 'Security and compliance infrastructure'
    },
    captionPosition: 'large-pin-bottom-left',
    theme: 'dark'
  }
];

export default function Highlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeCard, setActiveCard] = useState(0);

  // Theme management with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme-changer');
          if (theme) {
            document.body.setAttribute('data-theme', theme);
            // Optional: Update nav bar theme
            const nav = document.querySelector('nav');
            if (nav) {
              nav.setAttribute('data-theme', theme);
            }
          }
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px'
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-triggered video playback
  useEffect(() => {
    const videos = document.querySelectorAll('.gallery-item video');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;

        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play().catch(e => console.log('Autoplay prevented:', e));
        } else {
          video.pause();
        }
      });
    }, {
      threshold: [0.3, 0.5, 0.7]
    });

    videos.forEach(video => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading parallax with fade
      gsap.to(headingRef.current, {
        y: 150,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      });

      // Staggered card entrance - no CSS variable conflicts
      const staggeredItems = cardsRef.current.filter(item => item !== null);

      gsap.from(staggeredItems, {
        opacity: 1,
        y: 80,
        scale: 0.92,
        rotationX: 5,
        transformOrigin: 'center center',
        stagger: {
          each: 0.2,
          from: 'start'
        },
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll to card when tab is clicked
  const scrollToCard = (index: number) => {
    setActiveCard(index);
    const card = cardsRef.current[index];
    if (card) {
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
      // Add highlight effect
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
      });
    }
  };


  return (
    <section
      ref={sectionRef}
      className="highlights-section relative min-h-screen rounded-3xl py-24 md:py-32 bg-gradient-to-bl from-blue-500 to-blue-700 overflow-hidden"
      data-anim-scroll-group="Highlights"
      data-theme-changer="dark"
      data-analytics-section-engagement="name:highlights"
      role="region"
      aria-label="Product Highlights"
    >
      <div className="relative z-10">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-44 px-6">
          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-4">
            A clear Path to Care
          </h2>
          <p className="text-xl md:text-2xl text-gray-100">
            We're here to help you grow as a professional.
          </p>
        </div>

        {/* Gallery Grid */}
        <ul 
          role="presentation"
          className="flex flex-row overflow-x-auto gap-4 md:gap-8 px-6 md:px-12 w-full mx-auto"
        >
          {galleryItems.map((item, index) => (
            <li
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              id={`panel-${index}`}
              role="tabpanel"
              aria-labelledby={`trigger-${index}`}
              tabIndex={activeCard === index ? 0 : -1}
              data-staggered-item=""
              data-ac-gallery-item={item.id}
              data-analytics-gallery-item-id={item.id}
              className="gallery-item relative bg-zinc-900 w-full aspect-video rounded-3xl overflow-hidden group"
              style={{
                '--animation-position': `${index * 0.5}s`,
                minHeight: '60vh',
                minWidth: '80vw',
                maxWidth: '90vw',
                maxHeight: '80vh',
              } as React.CSSProperties}
            >
              {/* Media + Caption Container */}
              <div className="media-container relative w-full min-w-96 h-full aspect-video object-cover object-center">
                {item.media.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    src={item.media.src}
                    loop
                    muted
                    playsInline
                    aria-label={item.media.alt}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={item.media.src}
                    alt={item.media.alt || item.title}
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

                {/* Caption Overlay */}
                <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 z-10 flex flex-col items-start">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-200 md:text-zinc-300 leading-relaxed min-w-[60%] max-w-[70%]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-500 pointer-events-none" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
