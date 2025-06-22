
import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export const StatCard = ({ value, label, suffix = '' }: StatCardProps) => {
  const countUpRef = useCountUp(value);
  return (
    <div className="flex flex-col items-center flex-1 p-2 sm:p-3">
      <span
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800"
        ref={countUpRef}
        data-suffix={suffix}
      >
        {0}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 mt-1 text-center leading-tight" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}; 