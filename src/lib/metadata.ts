import type { Metadata } from 'next';

/**
 * Required Environment Variables for MedDeFi Metadata Utility
 * 
 * Add these to your .env.local file:
 * 
 * # Site Configuration (Required)
 * NEXT_PUBLIC_SITE_URL=https://med-defi.com
 * 
 * # Search Engine Verification Codes (Optional but Recommended)
 * GOOGLE_VERIFICATION_CODE=your_google_verification_code
 * YANDEX_VERIFICATION_CODE=your_yandex_verification_code
 * YAHOO_VERIFICATION_CODE=your_yahoo_verification_code
 * BING_VERIFICATION_CODE=your_bing_verification_code
 * 
 * # Social Media Integration (Optional)
 * FACEBOOK_APP_ID=your_facebook_app_id
 * FACEBOOK_VERIFICATION_CODE=your_facebook_domain_verification_code
 * TWITTER_HANDLE=@meddefi
 * TWITTER_CREATOR_ID=your_twitter_creator_id
 * TWITTER_SITE_ID=your_twitter_site_id
 * 
 * # Analytics & Tracking (Optional)
 * GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
 * FACEBOOK_PIXEL_ID=your_facebook_pixel_id
 * 
 * Example .env.local file:
 * NEXT_PUBLIC_SITE_URL=https://med-defi.com
 * GOOGLE_VERIFICATION_CODE=abc123def456ghi789
 * FACEBOOK_APP_ID=123456789012345
 * TWITTER_HANDLE=@meddefi
 */

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  canonical?: string;
  structuredData?: Record<string, string>; // Fix: Replace 'any' with proper type
  noindex?: boolean;
  nofollow?: boolean;
  // locale?: string; // Fix: Remove unused parameter
  alternateLanguages?: Record<string, string>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  lastModified?: string;
  publishedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}

// Environment Variables Configuration
const ENV_VARS = {
  // Required
  SITE_URL: 'NEXT_PUBLIC_SITE_URL',
  
  // Search Engine Verification (Optional)
  GOOGLE_VERIFICATION: 'GOOGLE_VERIFICATION_CODE',
  YANDEX_VERIFICATION: 'YANDEX_VERIFICATION_CODE', 
  YAHOO_VERIFICATION: 'YAHOO_VERIFICATION_CODE',
  BING_VERIFICATION: 'BING_VERIFICATION_CODE',
  
  // Social Media (Optional)
  FACEBOOK_APP_ID: 'FACEBOOK_APP_ID', // Fix: Change from hardcoded value to env var name
  FACEBOOK_VERIFICATION: 'FACEBOOK_VERIFICATION_CODE',
  TWITTER_HANDLE: 'TWITTER_HANDLE',
  TWITTER_CREATOR_ID: 'TWITTER_CREATOR_ID',  
  TWITTER_SITE_ID: 'TWITTER_SITE_ID',
  
  // Analytics (Optional)
  GOOGLE_ANALYTICS: 'GOOGLE_ANALYTICS_ID',
  FACEBOOK_PIXEL: 'FACEBOOK_PIXEL_ID'
} as const;

// Utility function to validate required environment variables
function validateEnvironment(): void {
  const siteUrl = process.env[ENV_VARS.SITE_URL];
  
  if (!siteUrl) {
    console.error(`❌ Missing required environment variable: ${ENV_VARS.SITE_URL}`);
    console.log('Please add the following to your .env.local file:');
    console.log(`${ENV_VARS.SITE_URL}=https://med-defi.com`);
  }
  
  // Warn about missing optional but recommended variables
  const recommendedVars = [
    ENV_VARS.GOOGLE_VERIFICATION,
    ENV_VARS.FACEBOOK_APP_ID,
    ENV_VARS.TWITTER_HANDLE
  ];
  
  const missingRecommended = recommendedVars.filter(varName => !process.env[varName]);
  
  if (missingRecommended.length > 0) {
    console.warn('⚠️  Missing recommended environment variables for better SEO:');
    missingRecommended.forEach(varName => console.warn(`  - ${varName}`));
  }
}

// Validate environment on module load
if (typeof window === 'undefined') {
  validateEnvironment();
}
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Utility function to format phone number
function formatPhoneNumber(phone: string): string {
  // Remove non-digit characters and validate
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  return phone; // Return original if can't format
}

// Utility function to safely get environment variables with validation
function getEnvVar(key: string, fallback: string = ''): string {
  const value = process.env[key];
  
  if (!value && !fallback) {
    console.warn(`⚠️  Environment variable ${key} is not set and no fallback provided`);
  }
  
  return value || fallback;
}

// Get all environment variables with proper validation
function getEnvironmentConfig() {
  return {
    siteUrl: getEnvVar(ENV_VARS.SITE_URL, 'https://med-defi.com'),
    googleVerification: getEnvVar(ENV_VARS.GOOGLE_VERIFICATION),
    yandexVerification: getEnvVar(ENV_VARS.YANDEX_VERIFICATION),
    yahooVerification: getEnvVar(ENV_VARS.YAHOO_VERIFICATION),
    bingVerification: getEnvVar(ENV_VARS.BING_VERIFICATION),
    facebookAppId: getEnvVar(ENV_VARS.FACEBOOK_APP_ID),
    facebookVerification: getEnvVar(ENV_VARS.FACEBOOK_VERIFICATION),
    twitterHandle: getEnvVar(ENV_VARS.TWITTER_HANDLE, '@meddefi'),
    twitterCreatorId: getEnvVar(ENV_VARS.TWITTER_CREATOR_ID),
    twitterSiteId: getEnvVar(ENV_VARS.TWITTER_SITE_ID),
    googleAnalytics: getEnvVar(ENV_VARS.GOOGLE_ANALYTICS),
    facebookPixel: getEnvVar(ENV_VARS.FACEBOOK_PIXEL)
  };
}

export function generateMetadata({
  title,
  description,
  image = '/MedDeFi-Socialmedia.png',
  url,
  type = 'website',
  keywords,
  canonical,
  structuredData,
  noindex = false,
  nofollow = false,
  // locale = 'en', // Fix: Remove unused parameter
  alternateLanguages,
  breadcrumbs,
  faqData,
  lastModified,
  publishedTime,
  author,
  category,
  tags
}: GenerateMetadataProps): Metadata {
  const env = getEnvironmentConfig();
  const siteUrl = env.siteUrl;
  
  // Validate site URL
  if (!isValidUrl(siteUrl)) {
    console.warn('Invalid NEXT_PUBLIC_SITE_URL provided, using default');
  }
  
  // Dynamic title optimization with better fallback
  const fullTitle = title ? `${title} | MedDeFi` : 'MedDeFi: Global Medical Tourism Platform | Verified Healthcare Professionals';
  
  // Enhanced description with CTAs and better keyword integration
  const fullDescription = description || 'Connect with verified healthcare professionals worldwide. Secure blockchain payments, transparent pricing, and comprehensive care coordination. Join MedDeFi today.';

  // Enhanced keywords with long-tail variations and semantic search optimization
  const defaultKeywords: string[] = [
    'medical tourism',
    'global healthcare',
    'verified doctors',
    'blockchain healthcare',
    'secure medical payments',
    'international medical treatment',
    'telemedicine platform',
    'healthcare providers',
    'medical travel',
    'cross-border healthcare',
    'decentralized healthcare',
    'medical tourism booking',
    'international doctors',
    'healthcare blockchain',
    'medical tourism insurance',
    'healthcare abroad',
    'medical travel planning',
    'international medical consultation'
  ];

  // TypeScript-safe keyword combination
  let finalKeywords: string[];
  if (keywords && keywords.length > 0) {
    finalKeywords = [...keywords, ...defaultKeywords];
  } else {
    finalKeywords = defaultKeywords;
  }

  // Add tags to keywords if provided
  if (tags && tags.length > 0) {
    finalKeywords = [...finalKeywords, ...tags];
  }

  // Enhanced image URL handling with validation and optimization parameters
  let absoluteImageUrl = image;
  if (!/^https?:\/\//i.test(image)) {
    const imagePath = image.startsWith('/') ? image : `/${image}`;
    absoluteImageUrl = `${siteUrl}${imagePath}`;
  }

  // Validate constructed image URL
  if (!isValidUrl(absoluteImageUrl)) {
    console.warn('Invalid image URL constructed, using fallback');
    absoluteImageUrl = `${siteUrl}/MedDeFi-Socialmedia.png`;
  }

  // Add image optimization parameters for better performance
  const optimizedImageUrl = `${absoluteImageUrl}?w=1200&h=630&q=85&fit=crop`;

  // Build canonical URL with validation
  let canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  if (!isValidUrl(canonicalUrl)) {
    console.warn('Invalid canonical URL, using site URL');
    canonicalUrl = siteUrl;
  }

  // Generate enhanced structured data
  const enhancedStructuredData = generateEnhancedStructuredData({
    title: fullTitle,
    description: fullDescription,
    url: url || siteUrl,
    image: optimizedImageUrl,
    breadcrumbs,
    faqData,
    lastModified,
    publishedTime,
    author,
    category,
    type
  });

  // Get environment variables with validation
  const {
    googleVerification,
    yandexVerification, 
    yahooVerification,
    bingVerification,
    facebookVerification,
    facebookAppId,
    twitterCreatorId,
    twitterSiteId,
    twitterHandle
  } = env;

  // Enhanced metadata object with comprehensive SEO features
  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: finalKeywords,
    authors: [{ name: author || 'MedDeFi Team' }],
    creator: 'MedDeFi',
    publisher: 'MedDeFi',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      ...(alternateLanguages && { languages: alternateLanguages }),
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      ...(googleVerification && { google: googleVerification }),
      ...(yandexVerification && { yandex: yandexVerification }),
      ...(yahooVerification && { yahoo: yahooVerification }),
      other: {
        ...(bingVerification && { 'msvalidate.01': bingVerification }),
        ...(facebookVerification && { 'facebook-domain-verification': facebookVerification }),
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url || siteUrl,
      siteName: 'MedDeFi',
      images: [
        {
          url: optimizedImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: 'image/png',
          secureUrl: optimizedImageUrl,
        },
      ],
      locale: 'en_US',
      type,
      countryName: 'United States',
      emails: ['contact@med-defi.com'],
      phoneNumbers: [formatPhoneNumber('8006333334')], // Using properly formatted number
      faxNumbers: [],
      ttl: 86400,
      ...(publishedTime && { publishedTime }),
      ...(lastModified && { modifiedTime: lastModified }),
      ...(author && { authors: [author] }),
      ...(category && { section: category }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [optimizedImageUrl],
      creator: twitterHandle,
      site: twitterHandle,
      ...(twitterCreatorId && { creatorId: twitterCreatorId }),
      ...(twitterSiteId && { siteId: twitterSiteId }),
    },
    other: {
      // Only include Facebook App ID if provided
      ...(facebookAppId && { 'fb:app_id': facebookAppId }),
      
      // App configuration
      'msapplication-TileColor': '#2563eb',
      'theme-color': '#2563eb',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'MedDeFi',
      'application-name': 'MedDeFi',
      'msapplication-config': '/browserconfig.xml',
      'mobile-web-app-capable': 'yes',
      'viewport': 'width=device-width, initial-scale=1, maximum-scale=5',
      'X-UA-Compatible': 'IE=edge',
      'referrer': 'origin-when-cross-origin',
      'color-scheme': 'light dark',
      'format-detection': 'telephone=no,date=no,address=no,email=no',
      'HandheldFriendly': 'true',
      'MobileOptimized': '320',
      'cleartype': 'on',
      'imagetoolbar': 'no',
      
      // Only include verification codes if provided
      ...(googleVerification && { 'google-site-verification': googleVerification }),
      ...(yandexVerification && { 'yandex-verification': yandexVerification }),
      ...(bingVerification && { 'msvalidate.01': bingVerification }),
      
      // Structured data
      ...enhancedStructuredData,
    },
  };

  // Add custom structured data if provided
  if (structuredData) {
    try {
      metadata.other = {
        ...metadata.other,
        ...structuredData,
      };
    } catch (error) {
      console.error('Error adding custom structured data:', error);
    }
  }

  return metadata;
}

// Enhanced structured data generator with error handling and environment validation
function generateEnhancedStructuredData({
  title,
  description,
  url,
  image,
  breadcrumbs,
  faqData,
  lastModified,
  publishedTime,
  author,
  category,
  type
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  lastModified?: string;
  publishedTime?: string;
  author?: string;
  category?: string;
  type?: string;
}) {
  const structuredData: Record<string, string> = {}; // Fix: Replace 'any' with 'string'
  const env = getEnvironmentConfig();

  try {
    // BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      structuredData['breadcrumb-list'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: isValidUrl(crumb.url) ? crumb.url : `${getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://med-defi.com')}${crumb.url}`
        }))
      });
    }

    // FAQPage schema
    if (faqData && faqData.length > 0) {
      structuredData['faq-page'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    // Article schema for blog posts
    if (type === 'article') {
      structuredData['article'] = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image,
        author: {
          '@type': 'Person',
          name: author || 'MedDeFi Team'
        },
        publisher: {
          '@type': 'Organization',
          name: 'MedDeFi',
          logo: {
            '@type': 'ImageObject',
            url: `${env.siteUrl}/MedDeFi-Logo.png`
          }
        },
        ...(publishedTime && { datePublished: publishedTime }),
        ...(lastModified && { dateModified: lastModified }),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url
        },
        ...(category && { articleSection: category })
      });
    }

    // WebPage schema for all pages
    structuredData['webpage'] = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: description,
      url: url,
      ...(lastModified && { dateModified: lastModified }),
      ...(publishedTime && { datePublished: publishedTime }),
      publisher: {
        '@type': 'Organization',
        name: 'MedDeFi',
        url: getEnvVar('NEXT_PUBLIC_SITE_URL', 'https://med-defi.com')
      }
    });
  } catch (error) {
    console.error('Error generating structured data:', error);
  }

  return structuredData;
}

// Predefined metadata for common pages with enhanced structured data
export const metadataConfig = {
  home: {
    title: 'MedDeFi: Global Medical Tourism Platform | Verified Doctors & Secure Healthcare',
    description: 'Find verified healthcare professionals worldwide. Secure blockchain payments, transparent pricing, and 24/7 support. Join patients who trust MedDeFi for global healthcare.',
    keywords: ['medical tourism', 'global healthcare', 'verified doctors', 'blockchain healthcare', 'secure medical payments', 'international medical treatment', 'telemedicine platform', 'healthcare providers'],
    image: '/MedDeFi-Socialmedia.png',
    canonical: '/',
    breadcrumbs: [
      { name: 'Home', url: '/' }
    ],
    faqData: [
      {
        question: 'What is MedDeFi?',
        answer: 'MedDeFi is a global medical tourism platform that connects patients with verified healthcare professionals worldwide, offering secure blockchain payments and comprehensive care coordination.'
      },
      {
        question: 'How does MedDeFi ensure doctor verification?',
        answer: 'All healthcare professionals on MedDeFi undergo rigorous verification processes including license validation, background checks, and peer reviews to ensure quality care.'
      },
      {
        question: 'What payment methods does MedDeFi accept?',
        answer: 'MedDeFi accepts cryptocurrency payments, credit cards, and traditional bank transfers, providing secure and transparent payment processing for all transactions.'
      }
    ],
    structuredData: {
      'organization': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: 'MedDeFi',
        description: 'Global medical tourism platform connecting patients with verified healthcare professionals',
        url: getEnvironmentConfig().siteUrl,
        logo: `${getEnvironmentConfig().siteUrl}/MedDeFi-Logo.png`,
        medicalSpecialty: ['Medical Tourism', 'International Healthcare', 'Telemedicine'],
        availableService: [
          {
            '@type': 'MedicalService',
            name: 'Global Healthcare Provider Booking',
            description: 'Book verified healthcare professionals worldwide'
          },
          {
            '@type': 'MedicalService', 
            name: 'Blockchain Payment Processing',
            description: 'Secure cryptocurrency and traditional payment methods'
          }
        ],
        paymentAccepted: ['Cryptocurrency', 'Credit Card', 'Bank Transfer'],
        areaServed: ['Worldwide'],
        sameAs: [
          `https://twitter.com/${getEnvironmentConfig().twitterHandle.replace('@', '')}`,
          'https://linkedin.com/company/meddefi'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: formatPhoneNumber('8006333334'),
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish', 'French']
        }
      })
    }
  },
  doctors: {
    title: 'Join MedDeFi as Healthcare Provider | Global Patient Network & Secure Payments',
    description: 'Expand your practice globally. Access patients worldwide, secure blockchain payments, and advanced telemedicine tools. Join leading healthcare professionals on MedDeFi.',
    keywords: ['healthcare provider registration', 'global patient network', 'blockchain medical payments', 'telemedicine platform', 'international healthcare', 'medical professional opportunities', 'secure healthcare payments'],
    image: '/MedDeFi-Socialmedia.png',
    canonical: '/doctors',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'For Doctors', url: '/doctors' }
    ],
    faqData: [
      {
        question: 'How do I register as a healthcare provider on MedDeFi?',
        answer: 'Healthcare providers can register through our secure verification process, which includes license validation, background checks, and platform training to ensure quality care delivery.'
      },
      {
        question: 'What are the benefits of joining MedDeFi as a doctor?',
        answer: 'Benefits include access to a global patient network, secure blockchain payments, advanced telemedicine tools, and comprehensive practice management support.'
      },
      {
        question: 'How does MedDeFi handle payments for healthcare providers?',
        answer: 'MedDeFi processes payments securely through blockchain technology and traditional methods, ensuring timely and transparent payment processing for all healthcare services.'
      }
    ],
    structuredData: {
      'medical-business': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'MedDeFi Healthcare Provider Network',
        description: 'Global platform for healthcare professionals to connect with patients worldwide',
        url: `${getEnvironmentConfig().siteUrl}/doctors`,
        medicalSpecialty: ['Medical Tourism', 'International Healthcare', 'Telemedicine'],
        availableService: [
          {
            '@type': 'MedicalService',
            name: 'Global Patient Access',
            description: 'Connect with patients worldwide through secure platform'
          },
          {
            '@type': 'MedicalService',
            name: 'Blockchain Payment Processing',
            description: 'Secure cryptocurrency and traditional payment methods'
          }
        ],
        paymentAccepted: ['Cryptocurrency', 'Credit Card', 'Bank Transfer'],
        areaServed: ['Worldwide'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: formatPhoneNumber('8006333334'),
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish', 'French']
        }
      })
    }
  },
  patients: {
    title: 'Find Verified Global Doctors | MedDeFi Medical Tourism Platform',
    description: 'Connect with verified healthcare professionals worldwide. Transparent pricing, secure payments, and comprehensive care coordination. Your health journey starts here.',
    keywords: ['find doctors worldwide', 'verified healthcare professionals', 'medical tourism booking', 'international medical treatment', 'secure healthcare payments', 'global healthcare access', 'medical travel platform'],
    image: '/MedDeFi-Socialmedia.png',
    canonical: '/patients',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'For Patients', url: '/patients' }
    ],
    faqData: [
      {
        question: 'How do I find a doctor on MedDeFi?',
        answer: 'Browse our verified healthcare professional directory by specialty, location, or treatment type. All providers undergo rigorous verification to ensure quality care.'
      },
      {
        question: 'Is it safe to book medical treatments through MedDeFi?',
        answer: 'Yes, MedDeFi ensures safety through verified healthcare providers, secure payment processing, and comprehensive care coordination throughout your medical journey.'
      },
      {
        question: 'What support does MedDeFi provide during medical travel?',
        answer: 'MedDeFi provides 24/7 support including travel coordination, accommodation assistance, translation services, and ongoing care coordination throughout your treatment.'
      }
    ],
    structuredData: {
      'medical-webpage': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Global Healthcare Provider Directory',
        description: 'Find and book verified healthcare professionals worldwide',
        url: `${getEnvironmentConfig().siteUrl}/patients`,
        mainEntity: {
          '@type': 'MedicalOrganization',
          name: 'MedDeFi',
          medicalSpecialty: ['Medical Tourism', 'International Healthcare'],
          availableService: {
            '@type': 'MedicalService',
            name: 'Global Healthcare Provider Booking',
            description: 'Book verified healthcare professionals worldwide'
          }
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: formatPhoneNumber('8006333334'),
          contactType: 'customer service',
          availableLanguage: ['English', 'Spanish', 'French']
        }
      })
    }
  }
};

// Utility function for generating hreflang tags
export function generateHreflangTags(baseUrl: string, path: string, availableLocales: string[] = ['en', 'es', 'fr']) {
  if (!isValidUrl(baseUrl)) {
    console.warn('Invalid base URL provided for hreflang tags');
    return [];
  }
  
  return availableLocales.map(locale => ({
    hreflang: locale,
    href: `${baseUrl}/${locale}${path}`
  }));
}

// Utility function for generating sitemap entries
export function generateSitemapEntry(
  url: string, 
  lastModified?: string, 
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly', 
  priority: number = 0.5
) {
  if (!isValidUrl(url)) {
    console.warn('Invalid URL provided for sitemap entry');
    return null;
  }
  
  return {
    url,
    lastModified: lastModified || new Date().toISOString(),
    changeFrequency,
    priority: Math.max(0, Math.min(1, priority)) // Clamp priority between 0 and 1
  };
}