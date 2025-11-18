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
    <div className="flex flex-col items-center flex-1 p-2">
      <span
        className="text-3xl font-semibold text-gray-800"
        ref={countUpRef}
        data-suffix={suffix}
        aria-live="polite"
      >
        {0}
      </span>
      <span className="text-xs text-gray-500 mt-1">
        {label}
      </span>
    </div>
  );
};