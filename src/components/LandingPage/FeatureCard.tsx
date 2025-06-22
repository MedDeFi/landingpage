import React, { useRef, useEffect } from 'react';
import { useTilt } from '@/hooks/useTilt';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const tiltRef = useRef<HTMLDivElement>(null);
    useTilt(tiltRef);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const onMouseMove = (e: MouseEvent) => {
            const { left, top } = el.getBoundingClientRect();
            el.style.setProperty('--x', `${e.clientX - left}px`);
            el.style.setProperty('--y', `${e.clientY - top}px`);
        };
        el.addEventListener('mousemove', onMouseMove);
        return () => el.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <div ref={tiltRef} className="feature-card group bg-white/50 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 text-blue-600 rounded-lg p-2 sm:p-3 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 shadow-inner-sm self-start">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}; 