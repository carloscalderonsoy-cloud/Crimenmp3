import Image from 'next/image';
import Link from 'next/link';

const EXPLORE_LINKS = [
  { label: 'Inicio',      href: '/' },
  { label: 'Episodios',   href: '/episodios' },
  { label: 'Newsletter',  href: '/#newsletter-section' },
  { label: 'Shop',        href: '/#shop-section' },
];

const PLATFORM_LINKS = [
  { label: 'Spotify',       href: 'https://open.spotify.com/show/4VB9XlfWgpksjUbQQEVS8l?si=28a31be2ffd54e60' },
  { label: 'Amazon Music',  href: 'https://music.amazon.com.mx/podcasts/64b8759f-18f8-4bb7-835e-b2e214482935/crimen-mp3' },
  { label: 'YouTube',       href: 'https://www.youtube.com/@crimenmp3' },
];

const CONTACT_LINKS = [
  { label: 'Prensa',         href: '#' },
  { label: 'Invitados',      href: '#' },
  { label: 'Patrocinios',    href: '#' },
  { label: 'hola@crimenmp3.com', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-carbon-deep border-t-2 border-light-purple py-16 px-8 md:px-16 relative overflow-hidden">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="absolute right-[-5%] bottom-[-20%] font-bebas leading-none pointer-events-none select-none"
        style={{ fontSize: '40vw', color: 'rgba(252,71,175,0.04)' }}
      >
        C!
      </span>

      {/* 4-col grid */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image src="/logo.png" alt="Crimen.mp3" width={112} height={44} className="h-12 w-auto mb-4" />
          <p className="font-nunito italic text-sm text-teal max-w-[280px] leading-relaxed">
            &ldquo;Crímenes reales, canciones reales. Donde cada delito tiene su propio soundtrack.&rdquo;
          </p>
          <div className="font-mono-brand text-[10px] text-light-purple mt-4 tracking-[0.2em] leading-relaxed">
            CREADO POR CARLOS CALDERÓN<br />@SOYCARLOSCALDERON · GDL · MX
          </div>
        </div>

        {/* Explorar */}
        <div>
          <p className="font-bebas text-magenta tracking-widest text-sm mb-4 uppercase">Explorar</p>
          <ul className="flex flex-col gap-2">
            {EXPLORE_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="font-nunito text-sm text-teal hover:text-cream transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Escuchar */}
        <div>
          <p className="font-bebas text-magenta tracking-widest text-sm mb-4 uppercase">Escuchar En</p>
          <ul className="flex flex-col gap-2">
            {PLATFORM_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="font-nunito text-sm text-teal hover:text-cream transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p className="font-bebas text-magenta tracking-widest text-sm mb-4 uppercase">Contacto</p>
          <ul className="flex flex-col gap-2">
            {CONTACT_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-nunito text-sm text-teal hover:text-cream transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-light-purple/20 pt-6 flex flex-wrap justify-between gap-3">
        <span className="font-mono-brand text-[10px] text-teal/30 tracking-[0.18em]">
          © 2026 CRIMEN!.MP3 · TODOS LOS DERECHOS RESERVADOS
        </span>
        <span className="font-mono-brand text-[10px] text-teal/30 tracking-[0.18em]">
          Creado, conducido y dirigido por Carlos Calderón
        </span>
      </div>
    </footer>
  );
}
