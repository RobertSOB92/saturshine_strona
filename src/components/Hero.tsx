import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle parallax on scroll
    const onScroll = () => {
      if (!textRef.current) return;
      const y = window.scrollY;
      textRef.current.style.transform = `translateY(${y * 0.08}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Sekcja główna"
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: 64,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Top label strip */}
      <div
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2.5rem',
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171' }}>
          Firma sprzątająca — Warszawa
        </span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171' }}>
          Est. 2024
        </span>
      </div>

      {/* Main content block — bottom-anchored */}
      <div
        ref={textRef}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          padding: '0 2.5rem 5rem',
        }}
      >
        {/* Two-column layout: big H1 left, details right */}
        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(4rem, 8vw, 12rem)', rowGap: '3rem', alignItems: 'flex-end' }}>
          {/* H1 */}
          <div>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(28px, 5vw, 76px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: '#141414',
                margin: 0,
              }}
            >
              Czyste biuro.<br />
              <span style={{ whiteSpace: 'nowrap' }}>Bez kompromisów.</span>
            </h1>

            {/* Divider + subtext row */}
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{ width: 1, height: 48, background: '#C8C4BE', flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#717171', lineHeight: 1.6, maxWidth: 440, margin: '0 0 1.5rem' }}>
                  Sprzątanie biur, mycie przeszkleń, pranie wykładzin,
                  polimerowanie podłóg. Wycena po bezpłatnych oględzinach —
                  bo każdy obiekt jest inny.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a
                    href="#wycena"
                    id="hero-cta-primary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '14px 28px',
                      background: '#1B3A2D', color: '#fff',
                      fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                      textDecoration: 'none', borderRadius: 2, letterSpacing: '0.02em',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#2d5c45')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#1B3A2D')}
                  >
                    Poproś o bezpłatną wycenę
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href="#uslugi"
                    id="hero-cta-secondary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '14px 28px',
                      background: 'transparent', color: '#141414',
                      fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                      textDecoration: 'none', borderRadius: 2,
                      border: '1px solid #C8C4BE', transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = '#C8C4BE')}
                  >
                    Poznaj usługi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: service index list */}
          <div
            style={{
              display: 'flex', flexDirection: 'column', gap: 0,
              borderLeft: '1px solid #E2E0DC',
              paddingLeft: '2.5rem',
              minWidth: 220,
            }}
            aria-label="Nasze usługi"
          >
            {[
              { n: '01', label: 'Sprzątanie biur' },
              { n: '02', label: 'Mycie przeszkleń' },
              { n: '03', label: 'Pranie wykładzin' },
              { n: '04', label: 'Polimerowanie podłóg' },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${['sprzatanie-biur','mycie-przeszklen','pranie-wykladziN','polimerowanie-podlog'][i]}`}
                style={{
                  display: 'flex', alignItems: 'baseline', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid #EEECEA' : 'none',
                  textDecoration: 'none',
                  color: '#141414', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1B3A2D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#141414')}
              >
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#B8832A', letterSpacing: '0.15em' }}>{item.n}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13 }}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border with scroll hint */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: '#E2E0DC' }} aria-hidden="true" />

      <style>{`
        @media (max-width: 768px) {
          #hero [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
          #hero [style*="minWidth: 220"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
