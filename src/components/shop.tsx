'use client'
import Image from 'next/image';

export default function Shop() {
  const scrollToNewsletter = () => {
    const el = document.getElementById('newsletter-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="shop-section"
      className="py-24 bg-carbon relative overflow-hidden"
    >
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(252,71,175,0.12), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(150,64,161,0.18), transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6">
        <p className="font-mono-brand text-xs text-teal tracking-[0.2em] uppercase">
          PRÓXIMAMENTE
        </p>

        <h2 className="font-bebas text-7xl md:text-8xl text-cream leading-none">
          TIENDA OFICIAL
        </h2>

        <div className="max-w-sm w-full mt-4 group">
          <Image
            src="/shop.png"
            alt="Merch oficial de Crimen.mp3"
            width={400}
            height={400}
            className="w-full h-auto rotate-[-2deg] group-hover:rotate-0 transition-transform duration-[400ms]"
            style={{ boxShadow: '0 30px 80px rgba(150,64,161,0.25)' }}
          />
        </div>

        <p className="font-nunito text-teal text-base max-w-sm">
          Piezas limitadas para quienes escuchan a todo volumen. Serigrafía manual, numerada y con certificado firmado.
        </p>

        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <button className="bg-magenta text-carbon font-bebas tracking-widest px-8 py-3 hover:bg-light-purple hover:text-cream transition-all duration-200">
            PRE-ORDENAR AHORA
          </button>
          <button
            onClick={scrollToNewsletter}
            className="border border-light-purple text-light-purple font-bebas tracking-widest px-8 py-3 hover:border-magenta hover:text-magenta transition-all duration-200"
          >
            REGISTRARME
          </button>
        </div>
      </div>
    </section>
  );
}
