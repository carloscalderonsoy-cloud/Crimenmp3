import Image from 'next/image';

const TRACKS_ROW1 = [
  { song: 'Psycho Killer',           artist: 'Talking Heads'                      },
  { song: "I Don't Like Mondays",    artist: 'The Boomtown Rats'                  },
  { song: 'Dead Skin Mask',          artist: 'Slayer'                             },
  { song: 'Amityville',              artist: 'Eminem'                             },
  { song: 'Ma Baker',                artist: 'Boney M.'                           },
  { song: '1913 Massacre',           artist: 'Woody Guthrie'                      },
  { song: 'Teenage Dirtbag',         artist: 'Wheatus'                            },
  { song: 'Claudine',                artist: 'Rolling Stones'                     },
  { song: 'Love Crime',              artist: 'Siouxsie Sioux'                     },
  { song: 'Pistol',                  artist: 'Modest Mouse'                       },
]
const TRACKS_ROW2 = [
  { song: 'Bonnie and Clyde',        artist: 'Gainsbourg & Bardot'                },
  { song: 'Suffer Little Children',  artist: 'The Smiths'                         },
  { song: 'Katherine Knight',        artist: 'SKYND'                              },
  { song: 'Choking Games',           artist: 'Nicole Dollanganger'                },
  { song: 'Born to Raise Hell',      artist: 'Church of Misery'                   },
  { song: 'Creeks',                  artist: 'Big Gipp'                           },
  { song: 'Ponzi Scheme',            artist: 'Leipzig'                            },
  { song: 'Cutie Honey',             artist: 'Kumi Koda'                          },
  { song: 'Black Christmas',         artist: 'Poly Styrene'                       },
  { song: 'Menendez Brothers',       artist: 'Dancody'                            },
]

const GUESTS: { name: string; role: string }[] = [
  { name: 'Chaparro Salazar',   role: 'Comediante'      },
  { name: 'Hueycoyote',         role: 'Músico'          },
  { name: 'Sebastián Camelo',   role: 'Podcaster'       },
  { name: 'Yubeili',            role: 'Artista'         },
  { name: 'Luiki Wiki',         role: 'Comediante'      },
  { name: 'Josafat',            role: 'Comediante'      },
  { name: 'Caro Frausto',       role: 'Comediante'      },
  { name: 'Ilich Flores',       role: 'Comediante'      },
  { name: 'Alexa Bueno',        role: 'Actriz'          },
  { name: 'Gabo Serna',         role: 'Comediante'      },
  { name: 'Guy Trejo',          role: 'Comediante'      },
  { name: 'Carlos Achepe',      role: 'Content Creator' },
  { name: 'Lisette Cuevas',     role: 'Actriz'          },
  { name: 'Carlos Mosco',       role: 'Comediante'      },
  { name: 'Daniela Fridman',    role: 'Cantante'        },
  { name: 'Alberto Velarde',    role: 'Comediante'      },
  { name: 'Jerry Balderrama',   role: 'Comediante'      },
  { name: 'Adrian Gutierrez',   role: 'Economista'      },
  { name: 'Iker Peredo',        role: 'Comediante'      },
  { name: 'Andy Vargas',        role: 'Comediante'      },
  { name: 'El Cesar Nava',      role: 'Comediante'      },
  { name: 'Mane Ibarra',        role: 'Director'        },
  { name: 'Crissa.Fit',         role: 'Content Creator' },
  { name: 'Nancy Olvera',       role: 'Comediante'      },
  { name: 'Armando Corona',     role: 'Cantante'        },
]

// Pink tones → performance/creative   Teal → non-performance   Purple → music/art
const ROLE_COLOR: Record<string, string> = {
  'Comediante':      'rgba(252,71,175,0.16)',
  'Actriz':          'rgba(252,71,175,0.14)',
  'Content Creator': 'rgba(252,71,175,0.12)',
  'Músico':          'rgba(150,64,161,0.22)',
  'Cantante':        'rgba(150,64,161,0.20)',
  'Artista':         'rgba(150,64,161,0.18)',
  'Podcaster':       'rgba(176,204,201,0.14)',
  'Periodista':      'rgba(176,204,201,0.14)',
  'Economista':      'rgba(176,204,201,0.14)',
  'Director':        'rgba(176,204,201,0.14)',
}

const PILLARS = [
  { value: '41',  label: 'Casos reales',        sub: 'y contando'               },
  { value: '41',  label: 'Canciones reales',     sub: 'un soundtrack por caso'   },
  { value: '25+', label: 'Invitados especiales', sub: 'músicos · comediantes · artistas' },
]

// BTS photo collage — 7 frames from studio recordings
const BTS_COLLAGE = [
  { src: '/bts/andrea.jpg',     style: { left: '-1%',  top:    '-8%',  width: '33%' }, rotate: -2,   opacity: 0.38 },
  { src: '/bts/andy_vargas.jpg',style: { right: '-2%', top:    '2%',   width: '30%' }, rotate: 1.5,  opacity: 0.32 },
  { src: '/bts/camacholos.jpg', style: { left: '22%',  bottom: '-6%',  width: '31%' }, rotate: 1,    opacity: 0.30 },
  { src: '/bts/fredy_regio.jpg',style: { left: '48%',  top:    '8%',   width: '27%' }, rotate: -1,   opacity: 0.28 },
  { src: '/bts/lisett.jpg',     style: { right: '12%', bottom: '-5%',  width: '33%' }, rotate: -2.5, opacity: 0.32 },
  { src: '/bts/nancy.jpg',      style: { left: '4%',   top:    '38%',  width: '26%' }, rotate: 2,    opacity: 0.26 },
  { src: '/bts/velarde.jpg',    style: { right: '-1%', bottom: '18%',  width: '29%' }, rotate: -1.5, opacity: 0.30 },
]

function TrackPill({ song, artist }: { song: string; artist: string }) {
  return (
    <span
      className="inline-flex items-center gap-3 font-mono-brand text-[11px] tracking-[0.18em] uppercase whitespace-nowrap px-5 py-2.5 mx-2"
      style={{
        border: '1px solid rgba(252,71,175,0.22)',
        background: 'rgba(26,22,23,0.6)',
        color: '#FAEBD6',
      }}
    >
      <span className="text-magenta" aria-hidden="true">♪</span>
      <span>{song}</span>
      <span className="text-teal opacity-60">·</span>
      <span className="text-teal">{artist}</span>
    </span>
  )
}

export default function SobreElPodcast() {
  const row1 = [...TRACKS_ROW1, ...TRACKS_ROW1]
  const row2 = [...TRACKS_ROW2, ...TRACKS_ROW2]

  return (
    <section
      className="relative bg-carbon overflow-hidden"
      style={{ borderTop: '1px solid rgba(252,71,175,0.12)' }}
    >
      {/* ── CONCEPT BLOCK (with BTS photo collage bg) ── */}
      <div className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(252,71,175,0.14)' }}>

        {/* BTS photo mosaic — behind everything */}
        <div className="absolute inset-0 z-[0]" aria-hidden="true">
          {BTS_COLLAGE.map(({ src, style, rotate, opacity }, i) => (
            <div
              key={i}
              className="absolute overflow-hidden"
              style={{
                ...style,
                aspectRatio: '4/3',
                transform: `rotate(${rotate}deg)`,
                filter: 'grayscale(65%) contrast(0.85) brightness(0.7)',
                opacity,
              }}
            >
              <Image
                src={src}
                fill
                sizes="33vw"
                alt=""
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Dark overlay — ensures readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(26,22,23,0.88) 0%, rgba(26,22,23,0.72) 45%, rgba(26,22,23,0.90) 100%)',
            }}
          />
          {/* Magenta edge glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 45% 55% at 85% 20%, rgba(150,64,161,0.18), transparent 60%),' +
                'radial-gradient(ellipse 35% 40% at 10% 80%, rgba(252,71,175,0.10), transparent 55%)',
            }}
          />
          {/* VHS texture */}
          <div className="hero__scanlines absolute inset-0" style={{ opacity: 0.025 }} />
        </div>

        {/* Content */}
        <div
          className="relative z-10"
          style={{ padding: 'clamp(64px,9vw,120px) clamp(24px,6vw,80px) clamp(52px,7vw,96px)' }}
        >
          {/* Eyebrow */}
          <p className="font-mono-brand text-[11px] tracking-[0.38em] text-magenta uppercase mb-6">
            EL CONCEPTO<span className="mx-2 opacity-40">·</span>QUÉ ES CRIMEN!.MP3
          </p>

          {/* Hero statement */}
          <div className="max-w-4xl mb-10">
            <h2
              className="font-comic text-cream leading-none"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 6rem)',
                letterSpacing: '0.02em',
                textShadow: '0 2px 0 rgba(0,0,0,0.5)',
              }}
            >
              UN CRIMEN REAL.
              <br />
              UNA CANCIÓN{' '}
              <em style={{ fontStyle: 'normal', color: '#FC47AF' }}>REAL</em>.
            </h2>
          </div>

          {/* Description + pillars */}
          <div className="concept-grid">
            {/* Text */}
            <div style={{ maxWidth: 620 }}>
              <p
                className="font-neue text-teal"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, marginBottom: 20 }}
              >
                Cada episodio de{' '}
                <strong className="text-cream font-normal">Crimen!.mp3</strong> toma
                un caso que sacudió al mundo y lo cuenta con la canción que lo define —
                porque todo crimen tiene su propio ritmo.
              </p>
              <p
                className="font-neue text-teal"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, marginBottom: 20 }}
              >
                Carlos Calderón investiga cada expediente a fondo y lo discute con un
                invitado diferente cada semana: comediantes, músicos, periodistas y
                artistas que aportan su perspectiva sin filtros al crimen más extraño,
                oscuro o fascinante que encontramos.
              </p>
              <p
                className="font-neue text-teal"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75 }}
              >
                Desde los Midwest años 30 hasta el Miami de los 90. Desde asesinos en
                serie hasta estafadores de guante blanco. Si el caso tiene historia —
                y tiene canción — tiene episodio.
              </p>
            </div>

            {/* Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 1,
                background: 'rgba(252,71,175,0.18)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {PILLARS.map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col justify-center"
                  style={{
                    background: 'rgba(26,22,23,0.85)',
                    padding: 'clamp(18px,2.5vw,32px) clamp(14px,1.8vw,24px)',
                    borderTop: '2px solid rgba(252,71,175,0.35)',
                  }}
                >
                  <div
                    className="font-comic text-magenta leading-none"
                    style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: 8 }}
                  >
                    {value}
                  </div>
                  <div
                    className="font-mono-brand text-cream uppercase"
                    style={{ fontSize: 9, letterSpacing: '0.22em', marginBottom: 4 }}
                  >
                    {label}
                  </div>
                  <div className="font-neue text-teal" style={{ fontSize: 11, opacity: 0.65 }}>
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MUSIC MARQUEE ── */}
      <div
        style={{
          borderBottom: '1px solid rgba(252,71,175,0.14)',
          background: '#1A1617',
          padding: 'clamp(32px,4vw,56px) 0',
        }}
      >
        <div
          className="flex items-center gap-4"
          style={{ padding: '0 clamp(24px,6vw,80px)', marginBottom: 24 }}
        >
          <p className="font-mono-brand text-[11px] tracking-[0.38em] text-magenta uppercase">
            ♪ LA MÚSICA DEL CRIMEN
          </p>
          <div style={{ flex: 1, height: 1, background: 'rgba(252,71,175,0.18)' }} />
          <p className="font-mono-brand text-[10px] tracking-[0.22em] text-teal/50 uppercase hidden sm:block">
            41 BANDAS SONORAS ORIGINALES
          </p>
        </div>

        <div
          className="marquee-wrap overflow-hidden mb-3"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)' }}
        >
          <div className="marquee-track marquee-left">
            {row1.map((t, i) => <TrackPill key={i} {...t} />)}
          </div>
        </div>

        <div
          className="marquee-wrap overflow-hidden"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)' }}
        >
          <div className="marquee-track marquee-right">
            {row2.map((t, i) => <TrackPill key={i} {...t} />)}
          </div>
        </div>

        <p className="font-mono-brand text-[9px] tracking-[0.22em] text-teal/30 uppercase text-center mt-5">
          Hover para pausar · Cada canción fue elegida por su conexión real con el caso
        </p>
      </div>

      {/* ── GUESTS BLOCK ── */}
      <div
        className="relative z-10"
        style={{ padding: 'clamp(48px,7vw,96px) clamp(24px,6vw,80px)' }}
      >
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mb-10">
          <div>
            <p className="font-mono-brand text-[11px] tracking-[0.38em] text-magenta uppercase mb-2">
              LOS INVITADOS
            </p>
            <h3
              className="font-comic text-cream leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '0.02em' }}
            >
              UNA VOZ NUEVA{' '}
              <em style={{ fontStyle: 'normal', color: '#FC47AF' }}>CADA SEMANA</em>.
            </h3>
          </div>
          <p
            className="font-neue text-teal ml-auto"
            style={{ fontSize: '0.92rem', maxWidth: 340, lineHeight: 1.6, opacity: 0.8 }}
          >
            Comediantes, músicos, periodistas y artistas se sientan con Carlos a
            desmenuzar el caso — sin guión, sin censura.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {GUESTS.map(({ name, role }) => (
            <div
              key={name}
              className="inline-flex flex-col"
              style={{
                background: ROLE_COLOR[role] ?? 'rgba(252,71,175,0.12)',
                border: '1px solid rgba(252,71,175,0.2)',
                padding: '8px 14px',
              }}
            >
              <span
                className="font-comic text-cream"
                style={{ fontSize: 'clamp(0.82rem, 1.4vw, 0.95rem)', letterSpacing: '0.04em' }}
              >
                {name}
              </span>
              <span
                className="font-mono-brand uppercase"
                style={{
                  fontSize: 8,
                  letterSpacing: '0.22em',
                  marginTop: 2,
                  opacity: 0.85,
                  color: ['Economista','Director','Podcaster','Periodista'].includes(role)
                    ? '#B0CCC9'
                    : '#FC47AF',
                }}
              >
                {role}
              </span>
            </div>
          ))}

          <div
            className="inline-flex items-center justify-center"
            style={{
              border: '1px dashed rgba(252,71,175,0.25)',
              padding: '8px 18px',
              minWidth: 80,
            }}
          >
            <span className="font-mono-brand text-teal/50 text-[11px] tracking-widest">
              +16 más
            </span>
          </div>
        </div>

        <div
          className="flex items-center gap-6 mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(252,71,175,0.14)' }}
        >
          <div className="flex-1 hidden sm:block" style={{ height: 1, background: 'rgba(252,71,175,0.1)' }} />
          <p className="font-mono-brand text-[10px] tracking-[0.3em] text-teal/50 uppercase text-center">
            DISPONIBLE EN SPOTIFY · YOUTUBE · AMAZON MUSIC
          </p>
          <div className="flex-1 hidden sm:block" style={{ height: 1, background: 'rgba(252,71,175,0.1)' }} />
        </div>
      </div>

      <style>{`
        .concept-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(40px,6vw,80px);
          align-items: start;
        }
        @media (min-width: 900px) {
          .concept-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
      `}</style>
    </section>
  )
}
