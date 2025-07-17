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
  image = '/MedDeFi logo.svg',
  url,
  type = 'website'
}: GenerateMetadataProps): Metadata {
  const fullTitle = title ? `${title} | MedDeFi` : 'MedDeFi - Healthcare Solutions Across Borders';
  const fullDescription = description || 'MedDeFi is revolutionizing healthcare through technologic solutions, connecting patients and healthcare professionals globally.';
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: ['healthcare', 'decentralized', 'medical', 'defi', 'blockchain', 'telemedicine', 'medical tourism'],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url || 'https://med-defi.com',
      siteName: 'MedDeFi',
      images: [
        {
          url: image,
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
      images: [image],
    },
  };
}

// Predefined metadata for common pages
export const metadataConfig = {
  home: {
    title: 'Home',
    description: 'Welcome to MedDeFi - The future of healthcare. Connect patients and healthcare professionals globally through secure, transparent innovative technology.',
    keywords: ['MedDeFi', 'decentralized healthcare', 'blockchain medicine', 'global healthcare', 'telemedicine platform'],
    image: '/MedDeFi logo.svg'
  },
  doctors: {
    title: 'For Healthcare Professionals',
    description: 'Join MedDeFi as a healthcare professional. Access global patients, secure payments, and innovative healthcare solutions powered by advanced technology.',
    keywords: ['healthcare professionals', 'doctors', 'nurses', 'telemedicine', 'global healthcare', 'blockchain payments'],
    image: '/MedDeFiProfessionals1.png'
  },
  patients: {
    title: 'For Patients',
    description: 'Access global healthcare professionals through MedDeFi. Secure, transparent, and affordable healthcare services powered by innovative technology.',
    keywords: ['patients', 'healthcare access', 'global doctors', 'telemedicine', 'blockchain healthcare', 'secure payments', 'medical tourism'],
    image: '/nurse2.png'
  }
}; 