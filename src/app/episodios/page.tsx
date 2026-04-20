import { promises as fs } from 'fs';
import Header from '@/components/header';
import Footer from '@/components/footer';
import EpisodioTarjeta from '@/components/episodioTarjeta';

interface Episodio {
  podcast_number: number
  title: string
  spotify_url: string
  youtube_url: string
  amazon_url: string
}

export default async function Episodios() {
  const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
  const data = JSON.parse(file);
  const episodios: Episodio[] = data.episodios;

  return (
    <div className="min-h-screen bg-carbon">
      <Header />

      {/* Page header */}
      <div className="pt-32 pb-16 px-8 md:px-16 bg-carbon-deep border-b border-magenta/15 relative overflow-hidden">
        <div className="scanlines absolute inset-0 opacity-[0.07]" />
        <div className="relative z-10">
          <p className="font-mono-brand text-xs text-magenta tracking-[0.2em] mb-2 uppercase">
            Archivo · {episodios.length} expedientes
          </p>
          <div className="w-16 h-0.5 bg-magenta mb-6" />
          <h1
            className="font-bebas text-cream leading-none tracking-wide"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            TODOS LOS<br />
            <em className="not-italic text-magenta">EPISODIOS</em>.
          </h1>
          <p className="font-nunito text-teal text-base mt-4 max-w-xl">
            {episodios.length} casos. Cada expediente, su canción.
          </p>
        </div>
      </div>

      {/* Episodes grid — 4 cols on large screens, thin magenta gap lines */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-magenta/10">
        {[...episodios].reverse().map((ep, index) => (
          <div
            key={ep.podcast_number}
            className="animate-fade-in-up"
            style={{ animationDelay: `${Math.min(index * 0.055, 0.55)}s` }}
          >
            <EpisodioTarjeta
              podcast_number={ep.podcast_number}
              title={ep.title}
              spotify_url={ep.spotify_url}
              youtube_url={ep.youtube_url}
              amazon_url={ep.amazon_url}
              variant="full"
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
