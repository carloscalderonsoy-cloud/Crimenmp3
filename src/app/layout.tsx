import type { Metadata } from 'next';
import type { Viewport } from 'next';
import './globals.css';

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || 'https://crimen-podcast.vercel.app'
);

export const metadata: Metadata = {
  title: 'Crimen!.mp3 — True Crime Podcast en Español',
  description:
    'Crímenes reales, canciones reales. El podcast de true crime donde cada delito tiene su propio soundtrack.',
  metadataBase,
  openGraph: {
    title: 'Crimen!.mp3',
    type: 'website',
    images: [{ url: '/og-image.png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#2A2626',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
