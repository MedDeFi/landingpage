"use client"

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Preview = dynamic(() => import('../../components/landingpagebaby/Landing3'), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse" />,
  ssr: false
});

export default function PreviewPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return <Preview />;
} 