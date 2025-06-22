import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { AnimatedSection } from './AnimatedSection';

const testimonials = [
    { quote: "This is a game-changer. I got a diagnosis and found a specialist in record time!", name: "Sarah J.", role: "Early Adopter", avatar: "https://placehold.co/100x100/e2e8f0/4a5568?text=SJ" },
    { quote: "Finally, a healthcare app that's actually easy to use. The AI was surprisingly accurate.", name: "Michael B.", role: "Beta Tester", avatar: "https://placehold.co/100x100/fefcbf/4a5568?text=MB" },
    { quote: "As a busy professional, getting quick medical advice is essential. This is exactly what I needed.", name: "Emily K.", role: "Working Mom", avatar: "https://placehold.co/100x100/dbeafe/4a5568?text=EK" },
];

export const Testimonials = () => {
    return (
        <AnimatedSection className="py-16 sm:py-20 bg-transparent">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 px-4 sm:px-6">Loved by Our First Users</h2>
            <div className="flex overflow-x-auto space-x-4 pb-6 px-4 sm:px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 md:space-x-0 md:max-w-6xl md:mx-auto md:px-0 testimonial-carousel">
                {testimonials.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
            </div>
        </AnimatedSection>
    )
} 