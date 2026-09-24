export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      aria-label="Sekcja główna"
      style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 64,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      {/* Top label strip */}
      <div
        className="section-container hero-top-labels"
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171' }}>
          Firma sprzątająca - Warszawa
        </span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171' }}>
          Est. 2024
        </span>
      </div>

      {/* Editorial Foam Graphic (anchors the sight) - wrapped to prevent floating away on 4K screens */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ width: '100%', maxWidth: '1440px', position: 'relative' }}>
          <div 
            className="hero-foam-image"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50vw',
              maxWidth: '800px',
              height: '100%',
              backgroundImage: 'url(/foam-bg-optimized.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
              maskImage: 'radial-gradient(ellipse 120% 100% at 100% 0%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 100% 0%, black 40%, transparent 100%)',
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Main content block - bottom-anchored */}
      <div
        className="hero-parallax-target"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingBottom: '5rem',
        }}
      >
        {/* Two-column layout: big H1 left, details right */}
        <div className="hero-content section-container" style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(2rem, 4vw, 5rem)', rowGap: '3rem', alignItems: 'flex-end', paddingTop: '3rem' }}>
          {/* H1 */}
          <div style={{ flex: '0 1 auto', maxWidth: '800px' }}>
            <h1
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(24px, 5vw, 76px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: '#172136',
                margin: 0,
                minHeight: '2.05em', // Pre-allocate space for 2 lines to prevent CLS
              }}
            >
              Czyste biuro.<br />
              <span style={{ whiteSpace: 'nowrap' }}>Bez kompromisów.</span>
            </h1>

            {/* Divider + subtext row */}
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
              <div style={{ width: 1, height: 48, background: '#C8C4BE', flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: '#717171', lineHeight: 1.6, maxWidth: 440, margin: '0 0 1.5rem', minHeight: '4.8em' }}>
                  Wy skupiacie się na swoim biznesie, a my bierzemy na siebie porządek w biurze. Przyjedziemy, poznamy Wasze potrzeby i zajmiemy się resztą.                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a
                    href="#wycena"
                    id="hero-cta-primary"
                    className="btn-primary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '14px 28px',
                      background: '#1B3A2D', color: '#fff',
                      fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                      textDecoration: 'none', borderRadius: 2, letterSpacing: '0.02em',
                    }}
                  >
                    Sprawdź, co możemy zrobić
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="#uslugi"
                    id="hero-cta-secondary"
                    className="btn-secondary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '14px 28px',
                      background: 'transparent', color: '#172136',
                      fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                      textDecoration: 'none', borderRadius: 2,
                      border: '1px solid #C8C4BE',
                    }}
                  >
                    Poznaj usługi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: service index list */}
          <div
            className="hero-sidebar"
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
              { n: '04', label: 'Polimeryzacja podłóg' },
            ].map((item, i) => (
              <a
                key={i}
                href={`#${['sprzatanie-biur', 'mycie-przeszklen', 'pranie-wykladziN', 'polimeryzacja-podlog'][i]}`}
                className="hero-sidebar-link"
                style={{
                  display: 'flex', alignItems: 'baseline', gap: 10,
                  padding: '10px 0',
                  borderBottom: i < 3 ? '1px solid #EEECEA' : 'none',
                  textDecoration: 'none',
                  color: '#172136',
                }}
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
        .hero-section {
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-section {
            justify-content: center !important;
          }
          .hero-top-labels {
            flex-direction: column;
            gap: 8px;
            top: 100px !important;
          }
          #hero .hero-content {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          #hero .hero-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
