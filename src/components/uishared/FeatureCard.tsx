"use client";
import React, { useRef, useEffect } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useTilt(tiltRef);
  
  useEffect(() => {
      const el = tiltRef.current; // Use the same ref for the glow effect
      if (!el) return;

      const onMouseMove = (e: MouseEvent) => {
          const { left, top } = el.getBoundingClientRect();
          el.style.setProperty('--x', `${e.clientX - left}px`);
          el.style.setProperty('--y', `${e.clientY - top}px`);
      };
      el.addEventListener('mousemove', onMouseMove);
      return () => el.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div ref={tiltRef} className="feature-card group bg-white/50 backdrop-blur-2xl rounded-3xl px-4 flex flex-row items-center space-x-4 h-full border border-white/80 shadow-lg">
      <div className="bg-blue-100 text-blue-600 rounded-lg p-4 flex group-hover:bg-blue-500 group-hover:text-white shadow-inner-sm">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}; 