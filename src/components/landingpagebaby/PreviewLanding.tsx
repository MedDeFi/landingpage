"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Landing3 from './Landing3';

// Dynamically import components with loading fallbacks
const LandingPage = dynamic(() => import('./Landing3'), {
  loading: () => <div className="flex-1 h-screen bg-gray-100 animate-pulse" />,
  ssr: false
});

export default function PreviewLanding() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1">
        <Suspense fallback={<div className="flex-1 h-screen bg-gray-100 animate-pulse" />}>
          <Landing3 />
        </Suspense>
      </div>
    </div>
  );
} 