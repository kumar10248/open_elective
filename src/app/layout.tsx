import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Digital Marketing Question Practice App',
    template: '%s | Digital Marketing Practice',
  },
  description: 'Master Digital Marketing with 250+ practice questions, timed quizzes, and detailed explanations. Prepare for your exams with our comprehensive practice platform.',
  keywords: ['digital marketing', 'practice questions', 'quiz', 'exam preparation', 'marketing certification', 'online learning'],
  authors: [{ name: 'Kumar Devashish', url: 'https://www.devashish.top' }],
  creator: 'Kumar Devashish',
  publisher: 'Kumar Devashish',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dm.devashish.top',
    siteName: 'Digital Marketing Practice',
    title: 'Digital Marketing Question Practice App',
    description: 'Master Digital Marketing with 250+ practice questions, timed quizzes, and detailed explanations.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Practice Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Question Practice App',
    description: 'Master Digital Marketing with 250+ practice questions and timed quizzes.',
    creator: '@kumarDe10248',
    images: ['/images/og-image.svg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dm.devasish.top" />
      </head>
      <body className="bg-black font-sans antialiased">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}