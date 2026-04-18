import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from 'next'

const metadataBase = new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://crimen-podcast.vercel.app");

export const metadata: Metadata = {
  title: "Crimen.mp3!",
  description: "Creado, conducido y dirigido por Carlos Calderón",
  openGraph: {
    images: '/main.png',
  },
  metadataBase
};

export const viewport: Viewport = {
  themeColor: '#FAEBD6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
