import Image from 'next/image';

interface EpisodioTarjetaProps {
  podcast_number: number
  title: string
  spotify_url: string | null
  youtube_url: string | null
  amazon_url: string | null
  variant?: 'square' | 'full'
}

export default function EpisodioTarjeta({
  podcast_number,
  title,
  spotify_url,
  youtube_url,
  amazon_url,
  variant = 'square',
}: EpisodioTarjetaProps) {

  const pills = (
    <div className="flex gap-1.5 flex-wrap">
      {spotify_url && (
        <a
          href={spotify_url} target="_blank" rel="noopener noreferrer"
          className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200"
        >SPT</a>
      )}
      {youtube_url && (
        <a
          href={youtube_url} target="_blank" rel="noopener noreferrer"
          className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200"
        >YT</a>
      )}
      {amazon_url && (
        <a
          href={amazon_url} target="_blank" rel="noopener noreferrer"
          className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200"
        >AMZ</a>
      )}
    </div>
  );

  if (variant === 'full') {
    return (
      <div className="relative aspect-square overflow-hidden group cursor-pointer bg-carbon-deep">
        <Image
          src={`/full_covers/${podcast_number}.jpeg`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          alt={`Episodio ${podcast_number}: ${title}`}
          className="object-cover transition-transform duration-[600ms] cubic-bezier(0.25,0.46,0.45,0.94) group-hover:scale-[1.04]"
        />

        <div className="absolute top-3 left-3 font-mono-brand text-[10px] text-magenta z-10 bg-carbon-deep/85 px-2 py-1 border-l-2 border-magenta tracking-[0.22em]">
          EP·{String(podcast_number).padStart(3, '0')}
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-carbon-deep/95 via-carbon-deep/35 to-carbon-deep/40" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full border-2 border-white z-20 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex items-center justify-center bg-carbon/45 backdrop-blur-sm group-hover:bg-magenta group-hover:border-magenta">
          <svg width="18" height="18" viewBox="0 0 12 12" fill="currentColor">
            <polygon points="2,1 11,6 2,11" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-2 p-3">
          <div className="font-bebas text-lg text-cream leading-tight">
            {title}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {spotify_url && (
              <a href={spotify_url} target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200">SPOTIFY</a>
            )}
            {youtube_url && (
              <a href={youtube_url} target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200">YOUTUBE</a>
            )}
            {amazon_url && (
              <a href={amazon_url} target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[10px] border border-teal/30 px-2 py-0.5 rounded-full text-teal hover:border-magenta hover:text-magenta transition-colors duration-200">AMAZON</a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // variant === 'square' (default — home page)
  return (
    <div className="relative aspect-square overflow-hidden group cursor-pointer bg-carbon-deep">
      <Image
        src={`/covers/${podcast_number}.jpeg`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={`Episodio ${podcast_number}: ${title}`}
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.08]"
      />

      <div className="absolute top-3 left-3 font-mono-brand text-[10px] text-magenta z-10 bg-carbon-deep/85 px-2 py-1 border-l-2 border-magenta tracking-[0.22em]">
        EP·{String(podcast_number).padStart(3, '0')}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-3 gap-2">
        <div className="font-bebas text-lg text-cream leading-tight translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {pills}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full border-2 border-white z-20 opacity-0 group-hover:opacity-100 transition-all duration-[250ms] flex items-center justify-center bg-carbon/45 backdrop-blur-sm group-hover:scale-100 scale-90">
        <svg width="16" height="16" viewBox="0 0 12 12" fill="white">
          <polygon points="2,1 11,6 2,11" />
        </svg>
      </div>
    </div>
  );
}
