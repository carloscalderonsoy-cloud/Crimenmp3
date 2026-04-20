const PLATFORMS = [
  {
    name: 'Spotify',
    meta: 'STREAMING · HQ',
    href: 'https://open.spotify.com/show/4VB9XlfWgpksjUbQQEVS8l?si=28a31be2ffd54e60',
    icon: (
      <svg className="w-[22px] h-[22px] text-magenta flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9c3-1 7-1 10 1M7.5 12c2.5-.8 6-.8 8.5.8M8 15c2-.6 5-.5 7 .6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    meta: 'PRIME · UNLIMITED',
    href: 'https://music.amazon.com.mx/podcasts/64b8759f-18f8-4bb7-835e-b2e214482935/crimen-mp3',
    icon: (
      <svg className="w-[22px] h-[22px] text-magenta flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 17c3-4 13-4 16 0M6 13c3-3 9-3 12 0M8 9c2-2 6-2 8 0"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    meta: 'VIDEO + AUDIO',
    href: 'https://www.youtube.com/@crimenmp3',
    icon: (
      <svg className="w-[22px] h-[22px] text-magenta flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="9,6 18,12 9,18" fill="currentColor"/>
        <rect x="3" y="5" width="3" height="14" rx="0.5"/>
      </svg>
    ),
  },
  {
    name: 'iVoox',
    meta: 'PODCAST · ES',
    href: '#',
    icon: (
      <svg className="w-[22px] h-[22px] text-magenta flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" strokeLinecap="round"/>
      </svg>
    ),
  },
] as const;

export default function Plataformas() {
  return (
    <section
      id="plataformas"
      className="py-16 bg-carbon-deep relative overflow-hidden border-t border-light-purple/25"
    >
      <div className="scanlines absolute inset-0 opacity-[calc(0.22*0.4)]" />

      <div className="relative z-10 text-center px-8 md:px-16">
        <p className="font-bebas text-magenta tracking-widest text-sm mb-2 uppercase">
          Distribución
        </p>
        <h2
          className="font-bebas text-cream mb-8 leading-none"
          style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)' }}
        >
          ESCUCHAR EN <em className="not-italic text-magenta">TU</em> PLATAFORMA.
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {PLATFORMS.map(({ name, meta, href, icon }) => (
            <a
              key={name}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 px-6 py-4 border border-teal/25 bg-carbon/40 hover:border-magenta hover:bg-magenta/6 hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              {icon}
              <div className="text-left">
                <div className="font-bebas text-base text-cream tracking-[0.05em]">{name}</div>
                <span className="font-mono-brand text-[9px] text-teal opacity-70 tracking-[0.18em] block mt-0.5">{meta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
