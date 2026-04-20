import { promises as fs } from 'fs';
import EpisodioTarjeta from './episodioTarjeta';

interface Episodio {
  podcast_number: number
  title: string
  spotify_url: string
  youtube_url: string
  amazon_url: string
}

export default async function EpisodiosRecientes() {
  const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8');
  const data = JSON.parse(file);
  const episodios: Episodio[] = data.episodios;

  const recientes = episodios.slice(-6).reverse();

  return (
    <section id="episodios-recientes" className="py-24 px-8 md:px-16 bg-carbon">
      <p className="font-mono-brand text-xs text-magenta tracking-[0.2em] mb-2 uppercase">
        Episodios Recientes
      </p>
      <div className="w-16 h-0.5 bg-magenta mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
        {recientes.map((ep, index) => (
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
              variant="square"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
