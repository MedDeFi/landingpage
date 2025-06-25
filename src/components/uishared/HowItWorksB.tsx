import React from 'react';

interface HowItWorksBProps {
  number: string;
  title: string;
  description: string;
}

export const HowItWorksB = ({ number, title, description }: HowItWorksBProps) => (
  <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 text-xl font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
          {number}
      </div>
      <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-gray-100 text-sm mt-1">{description}</p>
      </div>
  </div>
);