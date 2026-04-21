'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export interface LatestEpisode {
  podcast_number: number
  title: string
  spotify_url: string
  youtube_url: string
  amazon_url: string
}

interface Props {
  latestEpisode: LatestEpisode
}

export default function HeroSection({ latestEpisode }: Props) {
  const videoRef      = useRef<HTMLVideoElement>(null);
  const particlesRef  = useRef<HTMLDivElement>(null);
  const audioRef      = useRef<HTMLAudioElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  /* ── Glitch particles ── */
  useEffect(() => {
    const host = particlesRef.current;
    if (!host) return;
    for (let i = 0; i < 10; i++) {
      const p    = document.createElement('span');
      const isMagenta = Math.random() > 0.5;
      const size = 2 + Math.random() * 3;
      const dur  = 2 + Math.random() * 3;
      Object.assign(p.style, {
        position:   'absolute',
        borderRadius: '50%',
        width:      size + 'px',
        height:     size + 'px',
        left:       (6  + Math.random() * 88) + '%',
        top:        (10 + Math.random() * 80) + '%',
        background: isMagenta ? '#FC47AF' : '#B0CCC9',
        boxShadow:  isMagenta ? '0 0 8px #FC47AF' : '0 0 6px #B0CCC9',
        filter:     'blur(0.3px)',
        animation:  `flicker ${dur}s ease-in-out ${-Math.random() * dur}s infinite`,
      });
      host.appendChild(p);
    }
    return () => { host.innerHTML = ''; };
  }, []);

  /* ── Video parallax + mobile autoplay ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const p = video.play();
      if (p?.catch) p.catch(() => {});
    };
    tryPlay();
    video.addEventListener('canplay', tryPlay);
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true });
    window.addEventListener('click',      tryPlay, { once: true });

    const onScroll = () => {
      if (window.scrollY < window.innerHeight) {
        video.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.06)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      video.removeEventListener('canplay', tryPlay);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* ── Ambient audio ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    if (soundOn) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [soundOn]);

  const epNum = '041';
  const featuredTitle = 'El Asesinato de Gianni Versace';

  return (
    <section
      id="top"
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-carbon"
      style={{ isolation: 'isolate' }}
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        poster="/main-compressed.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          opacity: 0.45,
          transform: 'scale(1.06)',
          filter: 'saturate(1.1) contrast(1.05)',
          transition: 'transform 0.1s linear',
        }}
        aria-hidden="true"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* ── VHS Scanlines ── */}
      <div className="hero__scanlines absolute inset-0 z-[1]" />

      {/* ── Animated noise ── */}
      <div className="hero__noise absolute z-[1]" style={{ inset: '-50%' }} />

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg,rgba(42,38,38,0.78) 0%,rgba(42,38,38,0.25) 40%,rgba(42,38,38,0.88) 100%),' +
            'radial-gradient(ellipse 80% 60% at center,transparent 0%,rgba(42,38,38,0.92) 100%)',
        }}
      />

      {/* ── Chromatic aberration edge bleed ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg,rgba(252,71,175,0.12) 0%,transparent 8%,transparent 92%,rgba(176,204,201,0.12) 100%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* ── Glitch particles ── */}
      <div ref={particlesRef} className="absolute inset-0 z-[4] pointer-events-none" />

      {/* ── Corner telemetry chrome ── */}
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase hidden sm:block"
        style={{ top: 96, left: 'clamp(20px, 4vw, 56px)' }}
      >
        REC{' '}
        <span className="text-magenta" style={{ animation: 'blink 1.2s steps(1) infinite' }}>●</span>
        <span className="mx-1.5 text-magenta">·</span>TEMP. 01
      </div>
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase text-right hidden sm:block"
        style={{ top: 96, right: 'clamp(20px, 4vw, 56px)' }}
      >
        LAT 40.4168° N<span className="mx-1.5 text-magenta">·</span>LON 3.7038° W
      </div>
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase"
        style={{ bottom: 28, left: 'clamp(20px, 4vw, 56px)' }}
      >
        EP·{epNum}<span className="mx-1.5 text-magenta">/</span>
        <span className="hidden sm:inline">{featuredTitle.toUpperCase()}</span>
        <span className="sm:hidden">ÚLT. EP</span>
      </div>
      <div
        className="absolute z-20 font-mono-brand text-[10px] tracking-[0.22em] text-cream/55 uppercase text-right"
        style={{ bottom: 28, right: 'clamp(20px, 4vw, 56px)' }}
      >
        ES<span className="mx-1.5 text-magenta">·</span>2026
      </div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 100, paddingBottom: 120 }}
      >
        {/* Meta badge */}
        <div
          className="inline-flex items-center gap-2.5 font-mono-brand text-[11px] tracking-[0.35em] text-teal uppercase mb-6"
          style={{ opacity: 0, animation: 'fadeInUp 1.1s ease-out 0ms both' }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full bg-magenta flex-shrink-0"
            style={{ boxShadow: '0 0 10px #FC47AF', animation: 'pulseDot 1.8s ease-in-out infinite' }}
          />
          NUEVO EPISODIO · CADA JUEVES
        </div>

        {/* Logos: Crimen + By Lumo */}
        <div
          className="relative inline-block"
          style={{ opacity: 0, animation: 'fadeInUp 1.2s ease-out 150ms both' }}
        >
          <Image
            src="/logo.png"
            alt="Crimen.mp3"
            width={420}
            height={168}
            priority
            className="h-auto block"
            style={{
              width: 'clamp(240px, 52vw, 420px)',
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.55))',
            }}
          />
          {/* By Lumo — bottom-right of Crimen logo */}
          <div className="absolute -bottom-3 -right-2 sm:-right-6">
            <Image
              src="/logo-lumo.png"
              alt="By Lumo"
              width={110}
              height={88}
              className="h-auto"
              style={{
                width: 'clamp(72px, 14vw, 110px)',
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
              }}
            />
          </div>
        </div>

        {/* Tagline */}
        <h1
          className="font-bebas text-cream text-balance mt-7"
          style={{
            fontSize: 'clamp(2.25rem, 6.2vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '0.04em',
            textShadow: '0 2px 0 rgba(0,0,0,0.5), 0 0 40px rgba(252,71,175,0.15)',
            maxWidth: '14ch',
            opacity: 0,
            animation: 'fadeInUp 1.2s ease-out 450ms both',
          }}
        >
          Crímenes reales,<br />
          canciones <span className="tagline-em">reales</span>.
        </h1>

        {/* Subtitle */}
        <p
          className="font-nunito text-teal mt-5 max-w-[540px]"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            lineHeight: 1.5,
            opacity: 0,
            animation: 'fadeInUp 1.2s ease-out 700ms both',
          }}
        >
          Donde cada delito tiene su propio soundtrack. Investigación, música y
          visuales envueltos en 45 minutos de tensión.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-3.5 justify-center mt-9"
          style={{ opacity: 0, animation: 'fadeInUp 1.2s ease-out 950ms both' }}
        >
          <a
            href="#episodios-recientes"
            className="inline-flex items-center gap-2.5 font-bebas text-[1.05rem] tracking-[0.12em] bg-magenta text-carbon px-10 py-[0.95rem] transition-all duration-200 hover:bg-light-purple hover:text-cream hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{ boxShadow: '4px 4px 0 0 #1A1617, 4px 4px 0 1px #FAEBD6' }}
          >
            <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <polygon points="2,1 11,6 2,11" />
            </svg>
            ESCUCHAR AHORA
          </a>
          <a
            href="/episodios"
            className="inline-flex items-center font-bebas text-[1.05rem] tracking-[0.12em] text-cream px-10 py-[0.95rem] border border-cream/45 transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
          >
            VER EPISODIOS
          </a>
        </div>

        {/* Now-playing ticker */}
        <div
          className="flex items-center gap-3.5 mt-10 max-w-[520px] w-full"
          style={{
            padding: '10px 14px 10px 10px',
            background: 'rgba(250,235,216,0.06)',
            border: '1px solid rgba(250,235,216,0.12)',
            backdropFilter: 'blur(6px)',
            opacity: 0,
            animation: 'fadeInUp 1.2s ease-out 1200ms both',
          }}
        >
          {/* Episode cover thumbnail */}
          <div
            className="w-[46px] h-[46px] flex-shrink-0 bg-carbon-deep"
            style={{
              backgroundImage: `url('/covers/41.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(1.1)',
            }}
          />
          <div className="text-left leading-tight flex-1 min-w-0">
            <div className="font-mono-brand text-[10px] tracking-[0.3em] text-magenta uppercase">
              ▶ AHORA SONANDO · EP {epNum}
            </div>
            <div className="font-nunito font-bold text-[0.95rem] text-cream mt-0.5 truncate">
              {featuredTitle}
            </div>
            <div className="font-mono-brand text-[10px] text-teal/80 mt-0.5 tracking-[0.1em]">
              CRIMEN!.MP3 · ÚLTIMO EPISODIO
            </div>
          </div>
          <a
            href={latestEpisode.spotify_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto w-9 h-9 rounded-full bg-magenta text-carbon grid place-items-center flex-shrink-0 hover:scale-105 transition-transform duration-200"
            aria-label="Reproducir en Spotify"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="2,1 11,6 2,11" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Ambient audio (hidden) ── */}
      <audio ref={audioRef} src="/audio/FondoCrimenWeb.mp3" loop preload="none" />

      {/* ── Sound toggle ── */}
      {/* ── Sound toggle (Llamado a la acción) ── */}
      {/* ── Sound toggle (Llamado a la acción debajo del logo) ── */}
      <button
        onClick={() => setSoundOn(v => !v)}
        aria-label={soundOn ? 'Silenciar ambiente' : 'Activar sonido ambiente'}
        // Lo movimos a la izquierda y lo bajamos (top-[260px] aprox)
        className={`absolute top-[260px] md:top-[290px] left-[clamp(20px,4vw,56px)] z-50 flex items-center gap-2 font-mono-brand text-[10px] tracking-[0.22em] uppercase transition-all duration-300 ${!soundOn ? 'animate-pulse' : ''}`}
        style={{
          color: soundOn ? '#FC47AF' : '#FAEBD6', 
          background: !soundOn ? 'rgba(252,71,175,0.15)' : 'none',
          border: !soundOn ? '1px solid rgba(252,71,175,0.5)' : 'none',
          padding: !soundOn ? '6px 12px' : '0',
          boxShadow: !soundOn ? '0 0 15px rgba(252,71,175,0.2)' : 'none',
          opacity: 0,
          animation: 'fadeInUp 1.2s ease-out 1400ms both',
          cursor: 'pointer',
        }}
      >
        {soundOn ? (
          /* Speaker On */
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        ) : (
          /* Ícono de Play (Llamado a la acción) */
          <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <polygon points="2,1 11,6 2,11" />
          </svg>
        )}
        {soundOn ? 'SONIDO' : 'PLAY ME'}
      </button>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5"
        style={{ opacity: 0, animation: 'fadeInUp 1.2s ease-out 1400ms both' }}
      >
        <span className="font-mono-brand text-[0.65rem] text-magenta tracking-[0.2em]">SCROLL</span>
        <div
          className="w-px h-9 bg-gradient-to-b from-magenta to-transparent"
          style={{ animation: 'pulseDown 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}
