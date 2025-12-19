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
  metadataBase: new URL('https://research.yaudit.dev'),
  title: {
    default: 'yAudit Research Blog',
    template: '%s | yAudit Research'
  },
  description: 'Security research, smart contract auditing insights, and blockchain security analysis from the yAudit team.',
  keywords: ['blockchain security', 'smart contract audits', 'web3 security', 'yAudit', 'security research', 'audit reports'],
  authors: [{ name: 'yAudit Team' }],
  creator: 'yAudit',
  publisher: 'yAudit',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://research.yaudit.dev',
    siteName: 'yAudit Research Blog',
    title: 'yAudit Research Blog',
    description: 'Security research, smart contract auditing insights, and blockchain security analysis from the yAudit team.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'yAudit Research Blog',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yAudit Research Blog',
    description: 'Security research, smart contract auditing insights, and blockchain security analysis from the yAudit team.',
    images: ['/og-image.png'],
    creator: '@yAudit_',
    site: '@yAudit_',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    // Add verification codes here if needed for Google Search Console, etc.
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
