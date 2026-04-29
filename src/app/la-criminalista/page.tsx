import { promises as fs } from 'fs';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface Episodio {
  podcast_number: number
  title: string
  track: string
  artista: string
  genero: string
  caso: string
  youtube_url: string | null
}

function TrackCard({ podcast_number, title, track, artista, genero, caso, youtube_url }: Episodio) {
  const epNum = String(podcast_number).padStart(3, '0')

  return (
    <div
      className="relative bg-carbon-deep overflow-hidden flex flex-col"
      style={{
        borderTop: '1px solid rgba(252,71,175,0.18)',
        padding: '28px 24px 24px',
      }}
    >
      {/* Purple corner glow */}
      <div
        className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(150,64,161,0.18), transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Episode badge */}
        <span
          className="font-mono-brand text-[10px] tracking-[0.3em] text-magenta uppercase mb-5 self-start"
          style={{
            background: 'rgba(42,38,38,0.85)',
            padding: '4px 8px',
            borderLeft: '2px solid #FC47AF',
          }}
        >
          EP·{epNum}
        </span>

        {/* Track name */}
        <div
          className="font-comic text-cream"
          style={{
            fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            marginBottom: 8,
          }}
        >
          {track}
        </div>

        {/* Artist */}
        <div
          className="font-neue text-teal"
          style={{ fontSize: '0.88rem', marginBottom: 14 }}
        >
          {artista}
        </div>

        {/* Genre pill */}
        <span
          className="font-mono-brand text-[9px] tracking-[0.15em] uppercase self-start"
          style={{
            color: '#9640A1',
            border: '1px solid rgba(150,64,161,0.35)',
            padding: '3px 8px',
            borderRadius: 999,
          }}
        >
          {genero}
        </span>

        {/* Divider */}
        <div
          className="flex-1"
          style={{ minHeight: 20, borderBottom: '1px solid rgba(252,71,175,0.12)', marginTop: 18, marginBottom: 16 }}
        />

        {/* Episode reference */}
        <div>
          <div
            className="font-mono-brand uppercase text-light-purple"
            style={{ fontSize: 9, letterSpacing: '0.22em', marginBottom: 5 }}
          >
            Episodio
          </div>
          <div
            className="font-neue text-cream/70"
            style={{ fontSize: '0.82rem', lineHeight: 1.35, marginBottom: 12 }}
          >
            {title}
          </div>
          <div
            className="font-mono-brand text-[9px] text-teal/60 tracking-[0.15em] uppercase"
          >
            {caso}
          </div>
        </div>

        {/* Listen CTA */}
        {youtube_url && (
          <a
            href={youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono-brand text-[10px] tracking-[0.18em] uppercase text-magenta hover:text-cream transition-colors duration-200 self-start"
          >
            <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <polygon points="2,1 11,6 2,11" />
            </svg>
            Ver episodio
          </a>
        )}
      </div>
    </div>
  )
}

export default async function LaCriminalista() {
  const file = await fs.readFile(process.cwd() + '/src/data/episodios.json', 'utf8')
  const data = JSON.parse(file)
  const episodios: Episodio[] = data.episodios

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
            opacity: 0.4,
            transform: 'scale(1.04) scaleX(-1)',
            filter: 'saturate(0.8) contrast(1.1) hue-rotate(20deg)',
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
              'linear-gradient(180deg,rgba(42,38,38,0.80) 0%,rgba(42,38,38,0.22) 40%,rgba(42,38,38,0.95) 100%),' +
              'radial-gradient(ellipse 80% 60% at center,transparent 0%,rgba(42,38,38,0.88) 100%)',
          }}
        />

        {/* VHS Scanlines */}
        <div className="hero__scanlines absolute inset-0 z-[3]" />

        {/* Noise */}
        <div className="hero__noise absolute z-[3]" style={{ inset: '-50%' }} />

        {/* Chromatic aberration — teal side reversed */}
        <div
          className="absolute inset-0 z-[4] pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg,rgba(176,204,201,0.1) 0%,transparent 8%,transparent 92%,rgba(252,71,175,0.1) 100%)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Corner telemetry */}
        <div
          className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase hidden sm:block"
          style={{ top: 96, left: 'clamp(20px,4vw,56px)' }}
        >
          PLAYLIST<span className="mx-1.5 text-magenta">·</span>CURADA
        </div>
        <div
          className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase text-right hidden sm:block"
          style={{ top: 96, right: 'clamp(20px,4vw,56px)' }}
        >
          {episodios.length} TRACKS<span className="mx-1.5 text-magenta">·</span>SELECCIONADOS
        </div>

        {/* Content */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-end"
          style={{ padding: 'clamp(24px,6vw,80px)', paddingTop: 0 }}
        >
          <p className="font-mono-brand text-[11px] tracking-[0.35em] text-magenta uppercase mb-3">
            Banda Sonora · {episodios.length} tracks
          </p>
          <h1
            className="font-swell text-cream leading-none"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 7rem)',
              letterSpacing: '0.03em',
              textShadow: '0 2px 0 rgba(0,0,0,0.5), 0 0 40px rgba(252,71,175,0.12)',
            }}
          >
            LA<br />
            <em className="not-italic text-magenta">CRIMINALISTA</em>.
          </h1>
          <p className="font-neue text-teal text-base mt-3 max-w-xl" style={{ lineHeight: 1.5 }}>
            Cada crimen tiene su canción. Esta es la playlist.
          </p>
        </div>
      </div>

      {/* Tracks grid */}
      <div style={{ padding: 'clamp(48px,7vw,100px) clamp(24px,6vw,80px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 2,
          }}
        >
          {[...episodios].reverse().map((ep) => (
            <TrackCard
              key={ep.podcast_number}
              podcast_number={ep.podcast_number}
              title={ep.title}
              track={ep.track}
              artista={ep.artista}
              genero={ep.genero}
              caso={ep.caso}
              youtube_url={ep.youtube_url}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
