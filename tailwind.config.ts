import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom typography scale for consistent text sizing
      fontSize: {
        'hero-mobile': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-tablet': ['4.25rem', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-desktop': ['6.875rem', { lineHeight: '1.1', fontWeight: '600' }],
        'hero-desktop-xl': ['7.25rem', { lineHeight: '1.1', fontWeight: '600' }],
      },
      // Custom spacing for consistent layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '120': '30rem',
      },
      // Custom container sizes
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      // Animation durations
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      // Custom z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config

