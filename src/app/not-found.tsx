import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-carbon flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Decorative glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(252,71,175,0.12), transparent 70%)',
            inset: 0,
          }}
        />

        <p className="font-mono-brand text-[11px] tracking-[0.35em] text-magenta uppercase mb-4 relative z-10">
          ERROR · 404
        </p>

        <h1
          className="font-swell text-cream leading-none relative z-10"
          style={{
            fontSize: 'clamp(5rem, 18vw, 12rem)',
            letterSpacing: '0.03em',
            textShadow: '0 2px 0 rgba(0,0,0,0.5), 0 0 60px rgba(252,71,175,0.15)',
          }}
        >
          404
        </h1>

        <p
          className="font-comic text-cream relative z-10 mt-4"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '0.02em' }}
        >
          Este expediente no existe
          <em style={{ fontStyle: 'normal', color: '#FC47AF' }}>.</em>
        </p>

        <p className="font-neue text-teal mt-4 max-w-md relative z-10" style={{ lineHeight: 1.65 }}>
          El caso que buscas se perdió en el archivo. Quizás fue transferido, eliminado, o nunca existió.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 relative z-10 justify-center">
          <Link
            href="/"
            className="inline-flex items-center font-comic text-carbon bg-magenta transition-all duration-200 hover:bg-light-purple hover:text-cream"
            style={{
              fontSize: '1rem',
              letterSpacing: '0.12em',
              padding: '0.85rem 2rem',
              boxShadow: '4px 4px 0 0 #2A2626, 4px 4px 0 1px #FAEBD6',
            }}
          >
            VOLVER AL INICIO
          </Link>
          <Link
            href="/episodios"
            className="inline-flex items-center font-comic text-cream transition-all duration-200 hover:border-cream hover:bg-cream/[0.06]"
            style={{
              fontSize: '1rem',
              letterSpacing: '0.12em',
              padding: '0.85rem 2rem',
              border: '1.5px solid rgba(250,235,216,0.45)',
            }}
          >
            VER EPISODIOS
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
