import Image from 'next/image';

const FEATURED = {
  number: 41,
  title: 'Gianni Versace:',
  titleLine2: 'La Muerte de la Moda.',
  description:
    'Miami, 1996. Andrew Cunanan cruza el país dejando un rastro de cuatro víctimas antes de apretar el gatillo frente a la reja de Casa Casuarina. Ocho semanas de caza, una Pistol de Modest Mouse de fondo, y una industria que nunca volvió a coser igual.',
  track: 'Pistol',
  artist: 'Modest Mouse',
  duration: '47:02',
  guest: '@Crissa.Fit',
  caso: 'Miami · 1996',
  genre: 'Indie Rock',
  spotify_url: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk',
  youtube_url: 'https://www.youtube.com/@crimen.mp3',
};

export default function EpisodioDestacado() {
  const epNum = String(FEATURED.number).padStart(3, '0');

  return (
    <section
      id="episodio-destacado"
      className="relative bg-carbon overflow-hidden border-t border-light-purple/20"
    >
      <div className="noise" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-center max-w-[1400px] mx-auto px-8 md:px-14 py-16 lg:py-20">

        {/* ── Left: cover card ── */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-full max-w-[460px]"
            style={{
              border: '2px solid rgba(252,71,175,0.4)',
              boxShadow: '0 0 40px rgba(252,71,175,0.12), 6px 6px 0 0 rgba(252,71,175,0.18)',
            }}
          >
            {/* Top label bar */}
            <div
              className="absolute top-3 left-3 z-10 font-mono-brand text-[10px] tracking-[0.25em] text-magenta uppercase bg-carbon/80 px-2.5 py-1 backdrop-blur-sm"
              style={{ border: '1px solid rgba(252,71,175,0.3)' }}
            >
              EP-{epNum} / AHORA SONANDO
            </div>

            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/covers/41.png"
                alt={`EP ${epNum} - ${FEATURED.title} ${FEATURED.titleLine2}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="flex flex-col justify-center lg:pl-14 mt-10 lg:mt-0">

          {/* Section label */}
          <p className="font-mono-brand text-[10px] tracking-[0.35em] text-magenta uppercase mb-5">
            Episodio Destacado
          </p>

          {/* Title */}
          <h2
            className="font-comic text-cream leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            {FEATURED.title}<br />
            {FEATURED.titleLine2}
          </h2>

          {/* Description */}
          <p className="font-nunito text-teal/85 text-[0.9rem] leading-relaxed mb-8 max-w-[480px]">
            {FEATURED.description}
          </p>

          {/* Metadata grid */}
          <div className="grid grid-cols-3 gap-px bg-light-purple/15 border border-light-purple/15 mb-8">
            {[
              { label: 'Track',    value: FEATURED.track  },
              { label: 'Artista',  value: FEATURED.artist  },
              { label: 'Duración', value: FEATURED.duration },
              { label: 'Invitada', value: FEATURED.guest   },
              { label: 'Caso',     value: FEATURED.caso    },
              { label: 'Género',   value: FEATURED.genre   },
            ].map(({ label, value }) => (
              <div key={label} className="bg-carbon px-4 py-3">
                <p className="font-mono-brand text-[9px] tracking-[0.25em] text-teal/50 uppercase mb-1">
                  {label}
                </p>
                <p className="font-comic text-cream text-[0.85rem] leading-tight">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={FEATURED.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-bebas text-[1rem] tracking-[0.12em] bg-magenta text-carbon px-8 py-3 transition-all duration-200 hover:bg-light-purple hover:text-cream hover:-translate-y-0.5"
              style={{ boxShadow: '3px 3px 0 0 #1A1617' }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <polygon points="2,1 11,6 2,11" />
              </svg>
              REPRODUCIR EN SPOTIFY
            </a>
            <a
              href={FEATURED.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bebas text-[1rem] tracking-[0.12em] text-cream px-8 py-3 border border-cream/35 transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
            >
              VER EN YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
