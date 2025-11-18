import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add redirects for production
  async redirects() {
    // Only apply in production - check via environment variable
    if (process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/',
          destination: '/doctors',
          permanent: false, // Use 307 redirect
        },
      ];
    }
    return [];
  },
  webpack: (config, { isServer }) => {
    // Exclude Supabase Realtime from client-side bundle since it's not used
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Exclude realtime functionality that's not being used
        'ws': false,
        'events': false,
      };
    }

    // Optimize bundle by excluding unused Supabase realtime code
    config.externals = config.externals || [];
    if (typeof config.externals === 'function') {
      const originalExternals = config.externals;
      config.externals = (context: any, request: string, callback: (err: Error | null, result?: string) => void) => {
        // Exclude realtime-js from client bundle
        if (request === '@supabase/realtime-js') {
          return callback(null, 'commonjs @supabase/realtime-js');
        }
        return originalExternals(context, request, callback);
      };
    }

    return config;
  },
  // Additional optimizations
  experimental: {
    optimizePackageImports: ['@supabase/supabase-js'],
  },
  // Turbopack config (empty to use webpack for custom optimizations)
  turbopack: {},
};

export default nextConfig;
