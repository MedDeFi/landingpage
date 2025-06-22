import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200/80 py-3 sm:py-4 last:border-b-0">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">{question}</span>
                <div className={`transform transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v12m6-6H6"></path></svg>
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="text-gray-600 text-xs sm:text-sm pt-2 leading-relaxed">{answer}</p>
                </div>
            </div>
        </div>
    );
}; 