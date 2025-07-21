import type { Metadata } from 'next';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateMetadata({
  title,
  description,
  image = '/MedDeFi-Socialmedia.png', // Keep the default as a relative path
  url,
  type = 'website',
  keywords
}: GenerateMetadataProps): Metadata {
  // Define your base URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://med-defi.com';

  const fullTitle = title ? `${title} | MedDeFi` : 'MedDeFi - Healthcare Across Borders';
  const fullDescription = description || 'MedDeFi is revolutionizing healthcare through technologic solutions, connecting patients and doctors globally.';
  
  // Construct the absolute URL for the image
  const absoluteImageUrl = `${siteUrl}${image}`;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords ?? ['healthcare', 'decentralized', 'medical', 'defi', 'blockchain', 'telemedicine', 'medical tourism'],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url || siteUrl, // Use siteUrl as the default
      siteName: 'MedDeFi',
      images: [
        {
          url: absoluteImageUrl, // Use the absolute URL here
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [absoluteImageUrl], // And also here
    },
  };
}

// Predefined metadata for common pages
export const metadataConfig = {
  home: {
    title: 'Medical Tourism | MedDeFi',
    description: 'Welcome to MedDeFi - The future of healthcare. Connect patients and healthcare professionals globally through secure, transparent innovative technology.',
    keywords: ['MedDeFi','decentralized medical tourism', 'healthcare', 'decentralized healthcare', 'blockchain medicine', 'global healthcare', 'telemedicine platform'],
    image: '/MedDeFi-Socialmedia.png'
  },
  doctors: {
    title: 'Medical Tourism For Doctors',
    description: 'Join MedDeFi as a healthcare professional. Access global patients, secure payments, and innovative healthcare solutions powered by advanced technology.',
    keywords: ['healthcare professionals', 'doctors', 'nurses', 'telemedicine', 'global healthcare', 'blockchain payments'],
    image: '/MedDeFi-Socialmedia.png'
  },
  patients: {
    title: 'Medical Tourism For Patients',
    description: 'Access global healthcare professionals through MedDeFi. Secure, transparent, and affordable healthcare services powered by innovative technology.',
    keywords: ['patients', 'healthcare access', 'global doctors', 'telemedicine', 'blockchain healthcare', 'secure payments', 'medical tourism'],
    image: '/MedDeFi-Socialmedia.png'
  }
}; 