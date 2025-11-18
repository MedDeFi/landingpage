# 🏥 MedDeFi Landing Page

This is the official landing page for **MedDeFi**, a decentralized health platform revolutionizing medical tourism.

## 🎯 Purpose

The goal of this landing page is to:

- Introduce **MedDeFi** to new users
- Collect email addresses for a **waitlist**
- Onboard both **doctors** and **patients** who are interested in joining the platform
- Provide a modern, accessible, and responsive user experience

## 📌 Features

- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Accessibility** - WCAG compliant with ARIA labels and semantic HTML
- ✅ **Modern UI** - Built with React, Next.js 16, and Tailwind CSS v4
- ✅ **Type Safety** - Full TypeScript support with strict mode
- ✅ **Performance** - Optimized images, code splitting, and lazy loading
- ✅ **SEO Ready** - Comprehensive metadata and structured data
- ✅ **Email Integration** - Automated waitlist confirmations via Resend
- ✅ **Database** - Supabase integration for data persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)
- Resend account (optional, for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd meddefi_landingpage_main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your credentials. See [Environment Variables](#-environment-variables) section below.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

### Required Variables

Create a `.env.local` file in the root directory with the following variables:

#### Supabase Database (Required)
Get your credentials from: https://app.supabase.com/project/_/settings/api

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

⚠️ **Important**: `SUPABASE_SERVICE_ROLE_KEY` is required for server actions and should **never** be exposed to the client.

### Optional Variables

#### Email Service (Resend)
Get your API key from: https://resend.com/api-keys

```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_EMAIL_TEMPLATE_LOGO_URL=https://yoursite.com/logo.png
```

#### Site Configuration
```env
NEXT_PUBLIC_SITE_URL=https://meddefi.app
```

#### SEO & Analytics
```env
GOOGLE_VERIFICATION_CODE=your_code
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

See `.env.example` for a complete list of all available environment variables.

## 📦 Project Structure

```
meddefi_landingpage_main/
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── (doctors)/         # Doctor-specific routes
│   │   ├── (marketing)/       # Marketing pages
│   │   ├── api/               # API routes
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── forms/             # Form components (Doctor, Patient, Waitlist)
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── magicui/           # Animated UI components
│   │   ├── sectionsdoctor/    # Doctor-specific sections
│   │   ├── sectionspatients/  # Patient-specific sections
│   │   ├── sectionsmarketing/ # Marketing sections
│   │   ├── ui/                # Reusable UI components
│   │   └── uishared/          # Shared UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and configurations
│   └── types/                 # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind CSS configuration
├── next.config.ts             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

## 🎨 Design System

This project uses a custom design system built on Tailwind CSS v4:

### Typography Scale
- `text-hero-mobile` - Mobile hero text (3.5rem)
- `text-hero-tablet` - Tablet hero text (4.25rem)
- `text-hero-desktop` - Desktop hero text (6.875rem)
- `text-hero-desktop-xl` - Large desktop hero text (7.25rem)

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility

This project follows WCAG 2.1 Level AA guidelines:

- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast compliance
- ✅ Focus indicators

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This is a standard Next.js 16 application and can be deployed to any platform that supports Node.js.

## 🤝 Contributing

1. Follow the existing code style
2. Ensure TypeScript strict mode compliance
3. Test on multiple screen sizes
4. Run `npm run lint` before committing
5. Write descriptive commit messages

## 📄 License

Copyright © 2025 MedDeFi. All rights reserved.

## 🆘 Support

For issues or questions:
- Create an issue in the repository
- Contact the development team

## 🔄 Recent Updates

- ✅ Refactored Hero sections for better code reusability
- ✅ Implemented flexible responsive design
- ✅ Added comprehensive accessibility features
- ✅ Created design token system with Tailwind config
- ✅ Improved TypeScript type safety
- ✅ Enhanced error handling and security