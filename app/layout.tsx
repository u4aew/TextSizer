import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import type { Viewport } from 'next';
import { Header } from '@/components/Header';
import styles from './layout.module.scss';
import './globals.css';

const roboto = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.layout}>
      <Header />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <footer className={styles.footer}></footer>
      </body>
    </html>
  );
};

export default RootLayout;

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#2196f3',
};

export const metadata: Metadata = {
  title: {
    default: 'i18n helper',
    template: '%s | i18n helper',
  },
  description:
    'An intuitive tool for JSON localization and length analysis across languages.',
  applicationName: 'i18n helper',
  authors: [
    {
      name: 'i18n helper',
      url: 'https://text-size.fancyapp.site/',
    },
  ],
  metadataBase: new URL('https://text-size.fancyapp.site'),
  generator: 'Next.js',
  keywords: ['localization', 'JSON', 'translation', 'language', 'length analysis'],
  referrer: 'origin',
  creator: 'i18n helper Team',
  publisher: 'i18n helper Inc.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://text-size.fancyapp.site',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'i18n helper',
    description:
      'An intuitive tool for JSON localization and length analysis across languages.',
    type: 'website',
    url: 'https://text-size.fancyapp.site/',
    siteName: 'i18n helper',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'i18n helper',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'i18n helper',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  abstract: 'An intuitive tool for JSON localization and length analysis.',
  category: 'Software',
  classification: 'Localization Tools',
  other: {
    'msapplication-TileColor': '#0a74da',
  },
};
