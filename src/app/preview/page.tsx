"use client"

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Preview = dynamic(() => import('../../components/landingpagebaby/PreviewLanding'), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse" />,
  ssr: false
});

export default function PreviewPage() {
  useEffect(() => {
  console.log('PreviewPage');
  }, []);

  return <Preview />;
} 