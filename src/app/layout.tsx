import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MedDeFi - Decentralized Healthcare Solutions",
    template: "%s | MedDeFi"
  },
  description: "MedDeFi is revolutionizing healthcare through decentralized solutions, connecting patients and healthcare professionals globally.",
  keywords: ["healthcare", "decentralized", "medical", "defi", "blockchain", "telemedicine"],
  authors: [{ name: "MedDeFi Team" }],
  creator: "MedDeFi",
  publisher: "MedDeFi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meddefi.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MedDeFi - Decentralized Healthcare Solutions",
    description: "Revolutionizing healthcare through decentralized solutions",
    url: 'https://meddefi.com',
    siteName: 'MedDeFi',
    images: [
      {
        url: '/MedDeFi logo.svg',
        width: 1200,
        height: 630,
        alt: 'MedDeFi Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MedDeFi - Decentralized Healthcare Solutions",
    description: "Revolutionizing healthcare through decentralized solutions",
    images: ['/MedDeFi logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}
