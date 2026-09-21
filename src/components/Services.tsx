import { useEffect, useRef } from 'react';

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold });
    el.querySelectorAll('.fade-up').forEach(t => obs.observe(t));
    if (el.classList.contains('fade-up')) obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// Each service has a completely different layout
const SERVICES = [
  {
    id: 'sprzatanie-biur',
    number: '01',
    title: 'Sprzątanie biur',
    tags: ['Cykliczne', 'Jednorazowe', 'B2B'],
    lead: 'Utrzymanie czystości, które nie wymaga myślenia z Twojej strony.',
    forWho: 'Biura, przestrzenie coworkingowe, siedziby firm, recepcje i ciągi komunikacyjne.',
    includes: [
      'Odkurzanie i mycie podłóg',
      'Czyszczenie powierzchni roboczych i mebli',
      'Sanitariaty — dezynfekcja i uzupełnienie środków',
      'Opróżnianie koszy, wymiana worków',
      'Mycie kuchni i strefy socjalnej',
    ],
    note: 'Wycena po oględzinach — zależy od metrażu i częstotliwości.',
    accent: '#e8f0eb',
    accentText: '#1B3A2D',
  },
  {
    id: 'mycie-przeszklen',
    number: '02',
    title: 'Mycie przeszkleń',
    tags: ['Fasady szklane', 'Okna', 'Balustrady'],
    lead: 'Fasady i okna bez smug, nalotów i zacieków — widok, który robi wrażenie.',
    forWho: 'Budynki biurowe z elewacjami szklanymi, biurowce wielokondygnacyjne, galerie, hotele, banki.',
    includes: [
      'Mycie okien i fasad szklanych (jedno- i dwustronnie)',
      'Czyszczenie ram, uszczelek i parapetów',
      'Szklane ściany działowe i balustrady',
      'Usunięcie wapna i nalotów mineralnych',
      'Praca z drabiny i rusztowań',
    ],
    note: 'Cena zależy od powierzchni i dostępności — wycena po oględzinach.',
    accent: '#fdf4e3',
    accentText: '#7a4f10',
  },
  {
    id: 'pranie-wykladziN',
    number: '03',
    title: 'Pranie wykładzin',
    tags: ['Ekstrakcja', 'Odplamianie', 'Impregnacja'],
    lead: 'Wykładzina jak nowa — bez długiego przestoju i nieprzyjemnych zapachów.',
    forWho: 'Biura i sale konferencyjne z wykładziną dywanową, hotele, obiekty wystawiennicze.',
    includes: [
      'Odkurzanie wstępne przed praniem',
      'Pranie ekstrakcyjne (szybkie schnięcie)',
      'Odplamianie punktowe (kawa, atrament, tłuszcz)',
      'Pranie wstępne środkiem pre-spray',
      'Impregnacja po praniu (opcjonalnie)',
    ],
    note: 'Wycena od metrażu i stopnia zabrudzenia — ustalamy po oględzinach.',
    accent: '#F6F6F4',
    accentText: '#3a3a3a',
  },
  {
    id: 'polimerowanie-podlog',
    number: '04',
    title: 'Polimerowanie podłóg',
    tags: ['PCV', 'Linoleum', 'Wylewka', 'Lastriko'],
    lead: 'Posadzka z lustrzanym połyskiem i ochroną przed następnym zabrudzeniem.',
    forWho: 'Biura, korytarze, hale z posadzkami PCV, linoleum, wylewką, lastriko lub terakotą.',
    includes: [
      'Zdejmowanie starej powłoki (stripping)',
      'Gruntowne mycie i odtłuszczanie posadzki',
      'Nakładanie świeżych warstw polimeru',
      'Polerowanie maszyną jednotarczową / highspeed',
      'Impregnacja — ochrona przed zabrudzeniem',
    ],
    note: 'Cena od metrażu i stanu posadzki — wycena po oględzinach.',
    accent: '#e8f0eb',
    accentText: '#1B3A2D',
  },
];

export default function Services() {
  const ref = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="uslugi"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="services-heading"
      style={{ background: '#fff', paddingBottom: '6rem' }}
    >
      {/* Section header — full width, very minimal */}
      <div
        className="fade-up"
        style={{
          maxWidth: 1200, margin: '0 auto', padding: '5rem 2.5rem 3rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          borderBottom: '1px solid #E2E0DC',
        }}
      >
        <h2
          id="services-heading"
          style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '-0.03em', color: '#141414',
            lineHeight: 1.05,
          }}
        >
          Usługi
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', maxWidth: 280, textAlign: 'right', lineHeight: 1.6 }}>
          Każda usługa wyceniana indywidualnie — po bezpłatnych oględzinach obiektu.
        </p>
      </div>

      {/* Services — horizontal rows, NOT equal cards */}
      {SERVICES.map((service, idx) => (
        <article
          key={service.id}
          id={service.id}
          className="fade-up"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 2.5rem',
            borderBottom: '1px solid #E2E0DC',
          }}
        >
          {/* Each row has a different internal layout */}
          <div
            className="service-row"
            style={{
              display: 'grid',
              // Alternating: even rows have accent block on right, odd on left
              gridTemplateColumns: idx % 2 === 0 ? '80px 1fr 1fr' : '80px 1fr 1fr',
              gap: 0,
              minHeight: 280,
            }}
          >
            {/* Number column */}
            <div className="service-num" style={{
              display: 'flex', alignItems: 'flex-start', paddingTop: 32,
              borderRight: '1px solid #E2E0DC',
            }}>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 16, letterSpacing: '0.1em', color: '#B8832A',
                userSelect: 'none',
              }}>
                {service.number}
              </span>
            </div>

            {/* Main content */}
            <div className="service-main" style={{ padding: '2rem 2.5rem 2rem 2rem', borderRight: '1px solid #E2E0DC' }}>
              {/* Tags */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: 11,
                    padding: '3px 10px', borderRadius: 99,
                    border: '1px solid #C8C4BE', color: '#717171',
                    letterSpacing: '0.05em',
                  }}>{tag}</span>
                ))}
              </div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                letterSpacing: '-0.02em', color: '#141414',
                margin: '0 0 8px',
              }}>{service.title}</h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#3a3a3a',
                lineHeight: 1.6, margin: '0 0 16px', fontStyle: 'italic',
              }}>{service.lead}</p>

              <div style={{ marginBottom: 8 }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Dla kogo</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171', marginTop: 4, lineHeight: 1.55 }}>{service.forWho}</p>
              </div>
            </div>

            {/* Right: scope + note */}
            <div className="service-right" style={{ padding: '2rem 0 2rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: 10 }}>
                  Co obejmuje
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {service.includes.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#3a3a3a', lineHeight: 1.5 }}>
                      <span style={{ marginTop: 6, width: 4, height: 4, borderRadius: '50%', background: '#1B3A2D', flexShrink: 0 }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accent block at bottom */}
              <div style={{
                marginTop: 20, padding: '14px 16px',
                background: service.accent,
                borderRadius: 2,
              }}>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: service.accentText, fontStyle: 'italic' }}>
                  {service.note}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* CTA row */}
      <div className="fade-up" style={{ maxWidth: 1200, margin: '0 auto', padding: '2.5rem 2.5rem 0' }}>
        <a
          href="#wycena"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
            color: '#1B3A2D', textDecoration: 'none', letterSpacing: '0.02em',
            borderBottom: '1px solid #1B3A2D', paddingBottom: 2,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Zapytaj o wycenę →
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #uslugi .service-row {
            grid-template-columns: 1fr !important;
          }
          #uslugi .service-num {
            display: none !important;
          }
          #uslugi .service-main {
            border-right: none !important;
            padding: 2rem 0 1rem 0 !important;
            border-bottom: 1px solid #E2E0DC !important;
          }
          #uslugi .service-right {
            padding: 1rem 0 2rem 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
