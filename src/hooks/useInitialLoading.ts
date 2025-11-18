import { useState, useEffect } from 'react';

/**
 * Hook to manage initial page loading state
 * Shows loading screen on first mount until page is fully loaded
 * 
 * @returns {boolean} - Whether the initial loading is complete
 */
export function useInitialLoading(): boolean {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsLoading(false);
    };

    // If already loaded, complete immediately
    if (document.readyState === 'complete') {
      // Use a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        handleLoadingComplete();
      }, 100);
      return () => clearTimeout(timer);
    }

    // Otherwise wait for load event
    window.addEventListener('load', handleLoadingComplete);
    return () => {
      window.removeEventListener('load', handleLoadingComplete);
    };
  }, []);

  return isLoading;
}

