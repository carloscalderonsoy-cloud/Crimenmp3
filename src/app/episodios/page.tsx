import { promises as fs } from 'fs';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import EpisodioExpediente from '@/components/episodioExpediente';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://crimen-podcast.vercel.app';

interface Episodio {
  podcast_number: number
  title: string
  descripcion: string
  track: string
  artista: string
  duracion: string
  invitado: string
  caso: string
  genero: string
  spotify_url: string | null
  youtube_url: string | null
  amazon_url: string | null
}

export const metadata: Metadata = {
  title: 'Todos los Episodios',
  description:
    'Archivo completo de Crimen!.mp3: 41 casos de true crime, cada uno con su propio soundtrack. Disponibles en Spotify, YouTube y Amazon Music.',
  alternates: { canonical: '/episodios' },
  openGraph: {
    title: 'Todos los Episodios | Crimen!.mp3',
    description: '41 casos de true crime, cada uno con su propio soundtrack.',
    url: `${BASE_URL}/episodios`,
    images: [{ url: '/main.png', width: 1200, height: 630, alt: 'Episodios Crimen!.mp3' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todos los Episodios | Crimen!.mp3',
    images: ['/main.png'],
  },
};

export default async function Episodios() {
  const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
  const data = JSON.parse(file);
  const episodios: Episodio[] = data.episodios;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio',    item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Episodios', item: `${BASE_URL}/episodios` },
    ],
  };

  const episodesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Todos los episodios de Crimen!.mp3',
    numberOfItems: episodios.length,
    itemListElement: episodios.map((ep, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'PodcastEpisode',
        '@id': ep.spotify_url || ep.youtube_url || `${BASE_URL}/episodios#ep${ep.podcast_number}`,
        name: ep.title,
        episodeNumber: ep.podcast_number,
        description: ep.descripcion,
        image: `${BASE_URL}/covers/${ep.podcast_number}.png`,
        partOfSeries: { '@type': 'PodcastSeries', name: 'Crimen!.mp3', url: BASE_URL },
        ...(ep.youtube_url && {
          video: {
            '@type': 'VideoObject',
            name: ep.title,
            description: ep.descripcion,
            thumbnailUrl: `${BASE_URL}/covers/${ep.podcast_number}.png`,
            url: ep.youtube_url,
          },
        }),
      },
    })),
  };

  return (
    <div className="min-h-screen bg-carbon">
      <Header />

      {/* Page header with video */}
      <div
        className="relative w-full overflow-hidden bg-carbon"
        style={{ height: 'clamp(380px, 55vh, 620px)', isolation: 'isolate' }}
      >
        {/* Video */}
        <video
          autoPlay muted loop playsInline
          poster="/main-compressed.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            opacity: 0.5,
            transform: 'scale(1.04)',
            filter: 'saturate(1.1) contrast(1.05)',
          }}
          aria-hidden="true"
        >
          <source src="/videos/loop2.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg,rgba(42,38,38,0.72) 0%,rgba(42,38,38,0.18) 40%,rgba(42,38,38,0.92) 100%),' +
              'radial-gradient(ellipse 80% 60% at center,transparent 0%,rgba(42,38,38,0.88) 100%)',
          }}
        />

        {/* VHS Scanlines */}
        <div className="hero__scanlines absolute inset-0 z-[3]" />

        {/* Noise */}
        <div className="hero__noise absolute z-[3]" style={{ inset: '-50%' }} />

        {/* Chromatic aberration edge */}
        <div
          className="absolute inset-0 z-[4] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg,rgba(252,71,175,0.1) 0%,transparent 8%,transparent 92%,rgba(176,204,201,0.1) 100%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Corner telemetry */}
        <div
          className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase hidden sm:block"
          style={{ top: 96, left: 'clamp(20px,4vw,56px)' }}
        >
          ARCHIVO<span className="mx-1.5 text-magenta">·</span>TEMP. 01
        </div>
        <div
          className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase text-right hidden sm:block"
          style={{ top: 96, right: 'clamp(20px,4vw,56px)' }}
        >
          {episodios.length} EXPEDIENTES<span className="mx-1.5 text-magenta">·</span>EN CURSO
        </div>

        {/* Content */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-end"
          style={{ padding: 'clamp(24px,6vw,80px)', paddingTop: 0 }}
        >
          <p className="font-mono-brand text-[11px] tracking-[0.35em] text-magenta uppercase mb-3">
            Archivo · {episodios.length} expedientes
          </p>
          <h1
            className="font-swell text-cream leading-none"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 7rem)',
              letterSpacing: '0.03em',
              textShadow: '0 2px 0 rgba(0,0,0,0.5), 0 0 40px rgba(252,71,175,0.12)',
            }}
          >
            TODOS LOS<br />
            <em className="not-italic text-magenta">EPISODIOS</em>.
          </h1>
          <p className="font-neue text-teal text-base mt-3 max-w-xl" style={{ lineHeight: 1.5 }}>
            {episodios.length} casos. Cada expediente, su canción.
          </p>
        </div>
      </div>

      {/* Episodes list — newest first */}
      <div>
        {[...episodios].reverse().map((ep) => (
          <EpisodioExpediente
            key={ep.podcast_number}
            podcast_number={ep.podcast_number}
            title={ep.title}
            descripcion={ep.descripcion}
            track={ep.track}
            artista={ep.artista}
            duracion={ep.duracion}
            invitado={ep.invitado}
            caso={ep.caso}
            genero={ep.genero}
            spotify_url={ep.spotify_url}
            youtube_url={ep.youtube_url}
            amazon_url={ep.amazon_url}
          />
        ))}
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodesJsonLd) }}
      />
    </div>
  );
}
