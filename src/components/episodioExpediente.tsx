interface EpisodioExpedienteProps {
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

function splitTitle(title: string): { before: string; highlight: string; useBreak: boolean } {
  const colonIdx = title.indexOf(': ')
  if (colonIdx !== -1) {
    return {
      before: title.substring(0, colonIdx + 1),
      highlight: title.substring(colonIdx + 2),
      useBreak: true,
    }
  }
  const lastSpace = title.lastIndexOf(' ')
  if (lastSpace !== -1) {
    return {
      before: title.substring(0, lastSpace),
      highlight: title.substring(lastSpace + 1),
      useBreak: false,
    }
  }
  return { before: '', highlight: title, useBreak: false }
}

export default function EpisodioExpediente({
  podcast_number,
  title,
  descripcion,
  track,
  artista,
  duracion,
  invitado,
  caso,
  genero,
  spotify_url,
  youtube_url,
  amazon_url,
}: EpisodioExpedienteProps) {
  const epNum = String(podcast_number).padStart(3, '0')
  const { before, highlight, useBreak } = splitTitle(title)

  const meta = [
    { k: 'Track',    v: track    },
    { k: 'Artista',  v: artista  },
    { k: 'Duración', v: duracion },
    { k: 'Invitado', v: invitado },
    { k: 'Caso',     v: caso     },
    { k: 'Género',   v: genero   },
  ]

  return (
    <section
      className="relative bg-carbon-deep overflow-hidden"
      style={{ borderTop: '1px solid rgba(252,71,175,0.18)' }}
    >
      {/* Purple radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(150,64,161,0.18), transparent 60%)',
        }}
      />

      <div
        className="relative z-10"
        style={{ padding: 'clamp(48px,7vw,100px) clamp(24px,6vw,80px)' }}
      >
        <div className="featured__grid">
          {/* Cover placeholder */}
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
                EP·{epNum}
              </span>
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, #1a1617 0%, #2A2626 50%, #1a1215 100%)',
                }}
              >
                <span
                  className="font-swell select-none"
                  style={{
                    fontSize: 'clamp(5rem, 14vw, 9rem)',
                    letterSpacing: '0.05em',
                    color: 'rgba(252,71,175,0.15)',
                  }}
                >
                  {epNum}
                </span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p
              className="font-mono-brand uppercase text-magenta"
              style={{ fontSize: 11, letterSpacing: '0.35em' }}
            >
              EXPEDIENTE · #{epNum}
            </p>

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
              {before && (
                useBreak
                  ? <>{before}<br /></>
                  : <>{before}{' '}</>
              )}
              <em style={{ fontStyle: 'normal', color: '#FC47AF' }}>{highlight}</em>
            </h2>

            {descripcion && descripcion !== '—' && (
              <p
                className="font-neue text-teal"
                style={{ fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 520 }}
              >
                {descripcion}
              </p>
            )}

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
              {meta.map(({ k, v }) => (
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

            {/* CTA buttons — only render when URL is available */}
            <div className="flex flex-wrap" style={{ gap: 12, marginTop: 8 }}>
              {spotify_url && (
                <a
                  href={spotify_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-swell text-carbon bg-magenta transition-all duration-200 hover:bg-light-purple hover:text-cream"
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
                  SPOTIFY
                </a>
              )}
              {youtube_url && (
                <a
                  href={youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-swell text-cream transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
                  style={{
                    fontSize: '1.05rem',
                    letterSpacing: '0.12em',
                    padding: '0.9rem 2.2rem',
                    border: '1.5px solid rgba(250,235,216,0.45)',
                  }}
                >
                  YOUTUBE
                </a>
              )}
              {amazon_url && (
                <a
                  href={amazon_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-swell text-cream transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
                  style={{
                    fontSize: '1.05rem',
                    letterSpacing: '0.12em',
                    padding: '0.9rem 2.2rem',
                    border: '1.5px solid rgba(250,235,216,0.45)',
                  }}
                >
                  AMAZON
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
