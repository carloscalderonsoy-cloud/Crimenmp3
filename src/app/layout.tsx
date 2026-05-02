import type { Metadata } from 'next';
import type { Viewport } from 'next';
import './globals.css';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://crimen-podcast.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Crimen!.mp3 — True Crime Podcast en Español',
    template: '%s | Crimen!.mp3',
  },
  description:
    'Crímenes reales, canciones reales. El podcast de true crime donde cada caso tiene su propio soundtrack. 41 episodios en Spotify, YouTube y Amazon Music.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Crimen!.mp3 — True Crime Podcast en Español',
    description:
      'Crímenes reales, canciones reales. 41 episodios de true crime, cada uno con su propio soundtrack.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Crimen!.mp3',
    locale: 'es_MX',
    images: [
      {
        url: '/main.png',
        width: 1200,
        height: 630,
        alt: 'Crimen!.mp3 — True Crime Podcast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimen!.mp3 — True Crime Podcast en Español',
    description:
      'Crímenes reales, canciones reales. 41 episodios de true crime con su propio soundtrack.',
    images: ['/main.png'],
    creator: '@SoyCarlosCalderon',
    site: '@SoyCarlosCalderon',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#FC47AF',
};

const podcastJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PodcastSeries',
  name: 'Crimen!.mp3',
  description:
    'Crímenes reales, canciones reales. El podcast de true crime donde cada caso tiene su propio soundtrack.',
  url: BASE_URL,
  image: `${BASE_URL}/main.png`,
  inLanguage: 'es',
  author: {
    '@type': 'Person',
    name: 'Carlos Calderón',
    url: BASE_URL,
    sameAs: [
      'https://open.spotify.com/show/2NX89HGIa0vkXQLGV9OYDa',
      'https://www.youtube.com/@SoyCarlosCalderon',
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Crimen!.mp3',
    logo: `${BASE_URL}/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastJsonLd) }}
        />
      </body>
    </html>
  );
}
