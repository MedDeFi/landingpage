import React from 'react';

interface HowItWorksStepProps {
    number: string;
    title: string;
    description: string;
}

export const HowItWorksStep = ({ number, title, description }: HowItWorksStepProps) => (
    <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 text-lg sm:text-xl font-bold rounded-full flex items-center justify-center border-4 border-white shadow-md">
            {number}
        </div>
        <div className="flex-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">{description}</p>
        </div>
    </div>
); 