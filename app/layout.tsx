import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
      default: 'Matt Carroll',
      template: '%s | Matt Carroll',
    },
    description: 'Matt Carroll\'s personal website',
    openGraph: {
      title: 'Matt Carroll',
      description: 'Developer, writer, and creator.',
      url: 'https://mattcarrollcode.com/',
      siteName: 'Matt Carroll',
      images: [
        {
          url: 'https://mattcarrollcode.com/profile.png',
          width: 800,
          height: 800,
        },
      ],
      locale: 'en-US',
      type: 'website',
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
    twitter: {
      title: 'Matt Carroll',
      card: 'summary_large_image',
    },
    icons: {
      shortcut: '/favicon.ico',
    }
  };

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body className="antialiased mb-40 flex flex-col mx-4 mt-8 bg-gradient-to-r from-gray-900 via-stone-900 to-black text-white bg-black">
                {children}
                <Analytics />
            </body>
        </html >
    );
}
