import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/ui/MobileStickyCTA';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { SCROLLSHIELD_RELEASE, PLAY_STORE } from '@/lib/config/release';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(SCROLLSHIELD_RELEASE.officialDomain),
  title: {
    default: 'ScrollShield — Protect Your Attention',
    template: '%s | ScrollShield',
  },
  description:
    'ScrollShield is an Android digital-wellbeing tool that helps interrupt automatic feed scrolling with protected apps, gesture awareness, breaks and local insights.',
  keywords: [
    'ScrollShield',
    'ScrollShield app',
    'stop doomscrolling Android',
    'scroll blocker Android',
    'digital wellbeing app',
    'reduce scrolling',
    'screen time awareness',
    'social media scroll blocker',
    'Instagram scrolling control',
    'YouTube Shorts scrolling control',
    'attention protection app',
  ],
  authors: [{ name: 'Peerlynk' }],
  creator: 'Peerlynk',
  publisher: 'Peerlynk',
  alternates: {
    canonical: SCROLLSHIELD_RELEASE.officialDomain,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SCROLLSHIELD_RELEASE.officialDomain,
    title: 'ScrollShield — Protect Your Attention',
    description:
      'ScrollShield helps interrupt automatic phone scrolling with protected apps, milestone check-ins, local insights, and 100% privacy.',
    siteName: 'ScrollShield',
    images: [
      {
        url: `${SCROLLSHIELD_RELEASE.officialDomain}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'ScrollShield — Protect Your Attention',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScrollShield — Protect Your Attention',
    description:
      'Interrupt mindless feed scrolling on Android with local gesture counting and mindful check-ins.',
    images: [`${SCROLLSHIELD_RELEASE.officialDomain}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPlayStoreLive = PLAY_STORE.state === 'LIVE';

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ScrollShield',
    operatingSystem: 'Android 8.0 and up',
    applicationCategory: 'UtilitiesApplication',
    downloadUrl: `${SCROLLSHIELD_RELEASE.officialDomain}/download`,
    url: SCROLLSHIELD_RELEASE.officialDomain,
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peerlynk',
      url: SCROLLSHIELD_RELEASE.officialDomain,
    },
  };

  if (isPlayStoreLive) {
    jsonLd.sameAs = PLAY_STORE.url;
  }

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased min-h-screen flex flex-col overflow-x-hidden">
        <SmoothScrollProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <MobileStickyCTA />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
