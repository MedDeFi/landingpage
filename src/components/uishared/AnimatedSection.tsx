"use client";

import React from 'react'; // Import the entire React object
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// Define the component's props
interface AnimatedSectionProps {
  children: React.ReactNode;
  className: string;
}

// Define the component using React.forwardRef to allow it to accept a ref
export const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className }, ref) => {
    // This hook gets a function `setNode` to attach to the element we want to observe
    const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });

    return (
      <div
        // This special ref callback combines two functionalities:
        // 1. It gives the DOM node to the Intersection Observer via `setNode(node)`.
        // 2. It also correctly forwards the ref from the parent component.
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
        // Apply dynamic classes for the fade-in animation
        className={`${className} transition-all duration-1000 ease-out ${entry?.isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {children}
      </div>
    );
  }
);

// Good practice for debugging with React DevTools
AnimatedSection.displayName = 'AnimatedSection';