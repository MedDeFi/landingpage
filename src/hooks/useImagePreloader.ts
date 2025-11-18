import { useState, useEffect } from 'react';

interface UseImagePreloaderResult {
  isLoading: boolean;
  progress: number;
  hasError: boolean;
}

/**
 * Hook to preload and decode critical images before showing content
 * Ensures smooth, premium UX by preventing layout shifts and partial renders
 * 
 * @param imageUrls - Array of image URLs to preload
 * @returns {UseImagePreloaderResult} - Loading state, progress, and error state
 */
export function useImagePreloader(imageUrls: string[]): UseImagePreloaderResult {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    let isMounted = true;
    let loadedCount = 0;

    const loadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = async () => {
          try {
            // Decode the image to ensure it's ready for display
            // This prevents jank from lazy decoding during render
            await img.decode();
            
            if (isMounted) {
              loadedCount++;
              setProgress(Math.round((loadedCount / imageUrls.length) * 100));
            }
            resolve();
          } catch (decodeError) {
            console.warn(`Failed to decode image: ${url}`, decodeError);
            // Still resolve - we have the image even if decode failed
            if (isMounted) {
              loadedCount++;
              setProgress(Math.round((loadedCount / imageUrls.length) * 100));
            }
            resolve();
          }
        };

        img.onerror = () => {
          console.error(`Failed to load image: ${url}`);
          if (isMounted) {
            loadedCount++;
            setProgress(Math.round((loadedCount / imageUrls.length) * 100));
            setHasError(true);
          }
          // Resolve anyway to not block other images
          resolve();
        };

        // Start loading
        img.src = url;
        
        // Handle cached images
        if (img.complete) {
          img.onload = null;
          if (isMounted) {
            loadedCount++;
            setProgress(Math.round((loadedCount / imageUrls.length) * 100));
          }
          resolve();
        }
      });
    };

    // Load all images in parallel
    Promise.all(imageUrls.map(loadImage))
      .then(() => {
        if (isMounted) {
          setIsLoading(false);
          setProgress(100);
        }
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        if (isMounted) {
          setIsLoading(false);
          setHasError(true);
          setProgress(100);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return { isLoading, progress, hasError };
}

