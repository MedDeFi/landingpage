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
    <div className="flex flex-col items-center justify-center flex-1 p-2 sm:p-3 md:p-4 lg:p-6 min-w-0">
      <span
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 leading-tight text-center break-words"
        ref={countUpRef}
        data-suffix={suffix}
      >
        {0}
      </span>
      <span 
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mt-1 sm:mt-2 md:mt-3 text-center leading-relaxed max-w-full break-words px-1" 
        dangerouslySetInnerHTML={{ __html: label }} 
      />
    </div>
  );
};