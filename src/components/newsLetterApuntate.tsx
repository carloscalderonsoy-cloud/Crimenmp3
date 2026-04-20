'use client'
import { useState, FormEvent } from 'react';

// TODO: conectar Mailchimp/Brevo/ConvertKit
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterApuntate() {
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Error ${res.status}: no se pudo suscribir`);
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Algo salió mal. Intenta de nuevo.');
    }
  };

  return (
    <section
      id="newsletter-section"
      className="py-24 bg-carbon-deep relative overflow-hidden border-t border-light-purple/25"
    >
      <div className="noise" />

      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center px-8 md:px-16">
        {/* Left column */}
        <div>
          <p className="font-mono-brand text-xs text-magenta tracking-[0.2em] uppercase mb-4">
            Transmisión privada
          </p>
          <h2 className="font-bebas text-5xl md:text-6xl text-cream leading-none mb-3">
            MANTENTE EN EL LOOP
          </h2>
          <p className="font-nunito text-teal text-base">
            Un correo cada jueves. Avances, notas del caso y las canciones que no cupieron en el episodio. Sin spam, sin relleno.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {[
              'Avances exclusivos antes del lanzamiento público.',
              'Las canciones que se quedaron fuera del corte final.',
              'Notas del caso: documentos, líneas de tiempo, mapas.',
              'Primera fila cuando abramos nuevos episodios en vivo.',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-nunito text-sm text-teal">
                <span className="w-1.5 h-1.5 bg-magenta flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — form */}
        <div>
          {status === 'success' ? (
            <div className="form-corners bg-carbon/50 border border-magenta/20 p-7">
              <p className="font-bebas text-3xl text-cream mb-2">¡LISTO!</p>
              <p className="font-nunito text-teal">¡Bienvenido al loop. Recibirás novedades cada jueves.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-corners bg-carbon/50 border border-magenta/20 p-7">
              <label htmlFor="nl-email" className="font-mono-brand text-[10px] text-light-purple tracking-[0.25em] uppercase mb-1.5 block">
                {'// ACCESO'}
              </label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="w-full bg-transparent border-b border-teal text-cream font-nunito py-2 placeholder:text-teal/40 focus:border-magenta outline-none transition-colors duration-200 disabled:opacity-50"
              />

              {status === 'error' && (
                <p className="mt-3 font-nunito text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-magenta text-carbon font-bebas text-xl tracking-widest py-3 mt-6 hover:bg-light-purple hover:text-cream disabled:opacity-50 transition-all duration-200"
              >
                {status === 'loading' ? 'ENVIANDO...' : 'SUSCRIBIRME'}
              </button>

              <p className="font-mono-brand text-[10px] text-teal/40 mt-3 tracking-[0.12em]">
                {'// SIN SPAM · CANCELA CUANDO QUIERAS'}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
