import React from 'react';
import { FAQItem } from './FAQItem';
import { AnimatedSection } from './AnimatedSection';

const faqs = [
    { question: "How is my personal data protected?", answer: "We use end-to-end encryption and follow the highest privacy standards. Your data is yours, and we are committed to keeping it secure." },
    { question: "What does 'early access' include?", answer: "By joining the waitlist, you'll be among the first to use the app, provide feedback, and help shape its future. You may also receive special introductory pricing." },
    { question: "Is this service a replacement for my doctor?", answer: "Our service is designed to provide guidance and connect you with specialists. It is a tool to support your health journey, not to replace your primary care physician." },
    { question: "Which countries will be supported at launch?", answer: "We plan to launch initially in the United States, Canada, and the UK, with more countries to follow based on user demand and regulatory approvals." },
];

export const FAQ = () => {
    return (
        <AnimatedSection className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10">Questions? Answered.</h2>
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/80">
                    {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
                </div>
            </div>
        </AnimatedSection>
    )
} 