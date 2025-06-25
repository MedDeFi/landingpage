import React from 'react';

interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
}

export const HowItWorksStep = ({ number, title, description }: HowItWorksStepProps) => (
  <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 text-xl font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
          {number}
      </div>
      <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
  </div>
);