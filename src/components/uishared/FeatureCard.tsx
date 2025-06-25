"use client";
import React, { useRef, useEffect } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
    <div ref={tiltRef} className="feature-card group bg-white/50 backdrop-blur-2xl rounded-3xl p-5 flex items-start space-x-4 h-full border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-blue-100 text-blue-600 rounded-lg p-3 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}; 