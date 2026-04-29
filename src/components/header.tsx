'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'INICIO',        href: '/',                 id: undefined },
  { label: 'EPISODIOS',     href: '/episodios',        id: undefined },
  { label: 'CRIMINALISTA',  href: '/la-criminalista',  id: undefined },
  { label: 'NEWSLETTER',    href: undefined,           id: 'newsletter-section' },
  { label: 'SHOP',          href: undefined,           id: 'shop-section' },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Desktop nav ── */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-carbon/95 backdrop-blur-md border-b border-magenta/15'
            : 'bg-transparent'
        }`}
      >
        <Link href="/" aria-label="Crimen.mp3 — Inicio">
          <Image
            src="/logo.png"
            alt="Crimen.mp3"
            width={112}
            height={44}
            className="h-[42px] w-auto [filter:drop-shadow(0_2px_0px_rgba(0,0,0,0.5))]"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          {NAV_ITEMS.map(({ label, href, id }) => {
            const isActive = href ? pathname === href : false;
            const base = `font-bebas tracking-widest text-sm pb-1 cursor-pointer relative
              transition-colors duration-200
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:h-0.5 after:bg-magenta after:transition-[width] after:duration-200
              ${isActive ? 'text-magenta after:w-full' : 'text-cream hover:text-magenta after:w-0 hover:after:w-full'}`;

            if (href) {
              return (
                <li key={label}>
                  <Link href={href} className={base}>{label}</Link>
                </li>
              );
            }
            return (
              <li key={label}>
                <button onClick={() => scrollTo(id!)} className={base}>{label}</button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('episodios-recientes')}
          className="hidden md:block border border-magenta text-magenta font-bebas tracking-widest px-5 py-1.5 text-sm hover:bg-magenta hover:text-carbon transition-all duration-200"
        >
          ESCUCHAR
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto text-cream p-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-carbon-deep flex flex-col items-center justify-center gap-8 transition-transform duration-[350ms] ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-cream p-2"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="4" x2="20" y2="20" />
            <line x1="20" y1="4" x2="4" y2="20" />
          </svg>
        </button>

        {NAV_ITEMS.map(({ label, href, id }, i) => {
          const isActive = href ? pathname === href : false;
          const cls = `font-bebas text-5xl leading-none transition-colors duration-200 ${
            isActive ? 'text-magenta' : 'text-cream hover:text-magenta'
          }`;
          const style = { animationDelay: `${i * 100}ms` };

          if (href) {
            return (
              <Link key={label} href={href} className={cls} style={style} onClick={() => setIsMenuOpen(false)}>
                {label}
              </Link>
            );
          }
          return (
            <button key={label} className={cls} style={style} onClick={() => scrollTo(id!)}>
              {label}
            </button>
          );
        })}

        <div className="font-mono-brand text-[10px] text-teal opacity-60 mt-8 tracking-widest">
          CRIMEN!.MP3 · 2026
        </div>
      </div>
    </>
  );
}
