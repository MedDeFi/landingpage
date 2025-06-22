import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const AnimatedSection = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className: string }>(({ children, className }, ref) => {
    const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });
    return (
        <div
            ref={(node) => {
                setNode(node);
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(node);
                    } else {
                        ref.current = node;
                    }
                }
            }}
            className={`${className} transition-all duration-1000 ease-out ${entry ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    );
}); 