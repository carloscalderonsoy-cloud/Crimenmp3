import Image from 'next/image';

const FEATURED = {
  number:      41,
  titleLine1:  'Gianni Versace:',
  titleLine2:  'la muerte de la',
  titleEm:     'moda',
  description: 'Miami, 1996. Andrew Cunanan cruza el país dejando un rastro de cuatro víctimas antes de apretar el gatillo frente a la reja de Casa Casuarina. Ocho semanas de caza, una Pistol de Modest Mouse de fondo, y una industria que nunca volvió a coser igual.',
  meta: [
    { k: 'Track',    v: 'Pistol'       },
    { k: 'Artista',  v: 'Modest Mouse' },
    { k: 'Duración', v: '47:02'        },
    { k: 'Invitada', v: '@Crissa.Fit'  },
    { k: 'Caso',     v: 'Miami · 1996' },
    { k: 'Género',   v: 'Indie Rock'   },
  ],
  spotify_url: 'https://open.spotify.com/show/2NX89HGIa0vkXQLGV9OYDa',
  youtube_url: 'https://www.youtube.com/@SoyCarlosCalderon',
};

export default function EpisodioDestacado() {
  const epNum = String(FEATURED.number).padStart(3, '0');

  return (
    <section
      id="featured"
      className="relative bg-carbon-deep overflow-hidden"
      style={{ borderTop: '1px solid rgba(252,71,175,0.18)' }}
    >
      {/* VHS scanlines */}
      <div className="hero__scanlines absolute inset-0 z-[1]" style={{ opacity: 0.03 }} />

      {/* Purple radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(150,64,161,0.25), transparent 60%)',
        }}
      />

      {/* Corner: top-left */}
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase hidden sm:block"
        style={{ top: 32, left: 'clamp(24px, 6vw, 80px)' }}
      >
        <span className="text-magenta" style={{ animation: 'blink 1.2s steps(1) infinite' }}>●</span>
        {' '}EN VIVO<span className="mx-1.5 text-magenta">·</span>ÚLTIMO LANZAMIENTO
      </div>

      {/* Corner: top-right */}
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase text-right hidden sm:block"
        style={{ top: 32, right: 'clamp(24px, 6vw, 80px)' }}
      >
        SEMANA 16<span className="mx-1.5 text-magenta">·</span>ABR 2026
      </div>

      {/* Main content */}
      <div
        className="relative z-10"
        style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,80px)' }}
      >
        <div className="featured__grid">
          {/* ── Cover image ── */}
          <div className="max-w-[420px] md:max-w-none w-full">
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: '1',
                boxShadow:
                  '14px 14px 0 0 #2A2626, 14px 14px 0 1px #FC47AF, 0 30px 80px rgba(252,71,175,0.2)',
              }}
            >
              <span
                className="absolute top-[18px] left-[18px] z-10 font-mono-brand text-[10px] tracking-[0.3em] text-cream uppercase"
                style={{
                  background: 'rgba(42,38,38,0.85)',
                  padding: '6px 10px',
                  borderLeft: '2px solid #FC47AF',
                }}
              >
                EP·{epNum} / AHORA SONANDO
              </span>
              <Image
                src="/covers/41.png"
                alt="Gianni Versace — La muerte de la moda"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Text content ── */}
          <div>
            {/* Eyebrow */}
            <p
              className="font-mono-brand uppercase text-magenta"
              style={{ fontSize: 11, letterSpacing: '0.35em' }}
            >
              EPISODIO DESTACADO
            </p>

            {/* Title */}
            <h2
              className="font-comic text-cream"
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 4rem)',
                lineHeight: 0.95,
                margin: '16px 0 14px',
                letterSpacing: '0.02em',
                textShadow: '0 2px 0 rgba(0,0,0,0.4)',
              }}
            >
              {FEATURED.titleLine1}<br />
              {FEATURED.titleLine2}<br />
              <em style={{ fontStyle: 'normal', color: '#FC47AF' }}>{FEATURED.titleEm}</em>.
            </h2>

            {/* Description */}
            <p
              className="font-nunito text-teal"
              style={{ fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 520 }}
            >
              {FEATURED.description}
            </p>

            {/* Meta grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 18,
                margin: '28px 0',
                maxWidth: 520,
              }}
            >
              {FEATURED.meta.map(({ k, v }) => (
                <div
                  key={k}
                  style={{
                    paddingTop: 10,
                    borderTop: '1px solid rgba(252,71,175,0.35)',
                  }}
                >
                  <div
                    className="font-mono-brand uppercase text-light-purple"
                    style={{ fontSize: 9, letterSpacing: '0.22em', marginBottom: 4 }}
                  >
                    {k}
                  </div>
                  <div
                    className="font-comic text-cream"
                    style={{ fontSize: '0.92rem', letterSpacing: '0.04em' }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap" style={{ gap: 12, marginTop: 8 }}>
              <a
                href={FEATURED.spotify_url}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-btn-primary inline-flex items-center font-comic text-carbon bg-magenta transition-all duration-200 hover:bg-light-purple hover:text-cream"
                style={{
                  fontSize: '1.05rem',
                  letterSpacing: '0.12em',
                  padding: '0.9rem 2.2rem',
                  gap: 10,
                  boxShadow: '4px 4px 0 0 #2A2626, 4px 4px 0 1px #FAEBD6',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                  <polygon points="2,1 11,6 2,11" />
                </svg>
                REPRODUCIR EN SPOTIFY
              </a>
              <a
                href={FEATURED.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-comic text-cream transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
                style={{
                  fontSize: '1.05rem',
                  letterSpacing: '0.12em',
                  padding: '0.9rem 2.2rem',
                  border: '1.5px solid rgba(250,235,216,0.45)',
                }}
              >
                VER EN YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
