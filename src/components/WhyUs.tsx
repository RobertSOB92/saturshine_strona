const REASONS = [
  {
    label: 'Bezpośredni kontakt',
    headline: 'Rozmawiasz z nami - nie z call center.',
    body: 'Telefon i e-mail prowadzą bezpośrednio do osób, które planują i wykonują prace. Bez pośredników i czekania w kolejce.',
  },
  {
    label: 'Elastyczne podejście',
    headline: 'Brak sztywnych pakietów - każdy obiekt to osobna rozmowa.',
    body: 'Zakres, częstotliwość i harmonogram ustalamy wspólnie - dopasowując się do rytmu Twojej firmy, nie odwrotnie.',
  },
  {
    label: 'Transparentny cennik',
    headline: 'Cena po oględzinach, z wyszczególnieniem zakresu.',
    body: 'Nie podajemy widełek na stronie, bo to bez sensu przy każdym różnym obiekcie. Po wizycie dostaniesz konkretną kwotę. Negocjowalną.',
  },
  {
    label: 'Szybka reakcja',
    headline: 'Odpowiadamy w ciągu 24 godzin roboczych.',
    body: 'Przy standardowym zgłoszeniu odpisujemy lub oddzwaniamy tego samego dnia. Pilne sprawy traktujemy priorytetowo.',
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego" className="reveal-section" style={{ background: '#fff', padding: '6rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Big pull-quote style header */}
        <div
          className="fade-up"
          style={{
            borderTop: '1px solid #E2E0DC',
            paddingTop: '3rem',
            marginBottom: '4rem',
          }}
        >
        <div className="whyus-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3rem' }}>
            <div style={{ flex: '0 0 auto' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171' }}>
                Dlaczego SaturShine
              </span>
            </div>
            <div style={{ flex: 1, maxWidth: 820 }}>
              <h2
                id="whyus-heading"
                style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 'clamp(24px, 3vw, 40px)',
                  letterSpacing: '-0.02em', color: '#172136',
                  lineHeight: 1.25, margin: 0,
                }}
              >
                Jesteśmy startupem - nie mamy 500 referencji.<br />
                <span style={{ color: '#1B3A2D' }}>Mamy za to czas i uwagę dla każdego klienta.</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Reasons - NOT 2x2 identical cards.
            Layout: left full-height text block + right vertical list */}
        <div className="whyus-content" style={{ display: 'grid', gridTemplateColumns: '1fr 2px 1fr', gap: '3rem', alignItems: 'start' }}>

          {/* Left: first 2 reasons stacked vertically with large typography */}
          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {REASONS.slice(0, 2).map((r, i) => (
              <div key={i} style={{ paddingBottom: i === 0 ? '3rem' : 0, borderBottom: i === 0 ? '1px solid #E2E0DC' : 'none' }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 11,
                  color: '#B8832A', letterSpacing: '0.2em', textTransform: 'uppercase',
                  display: 'block', marginBottom: 12,
                }}>{r.label}</span>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 22, letterSpacing: '-0.02em', color: '#172136',
                  margin: '0 0 10px', lineHeight: 1.3,
                }}>{r.headline}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.7 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          {/* Center divider */}
          <div className="whyus-divider" style={{ background: '#E2E0DC', alignSelf: 'stretch' }} aria-hidden="true" />

          {/* Right: last 2 reasons + large number decoration */}
          <div className="fade-up delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {REASONS.slice(2).map((r, i) => (
              <div key={i} style={{ paddingBottom: i === 0 ? '3rem' : 0, borderBottom: i === 0 ? '1px solid #E2E0DC' : 'none' }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 11,
                  color: '#B8832A', letterSpacing: '0.2em', textTransform: 'uppercase',
                  display: 'block', marginBottom: 12,
                }}>{r.label}</span>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: 22, letterSpacing: '-0.02em', color: '#172136',
                  margin: '0 0 10px', lineHeight: 1.3,
                }}>{r.headline}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.7 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #dlaczego .whyus-header {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          #dlaczego .whyus-content {
            grid-template-columns: 1fr !important;
          }
          #dlaczego .whyus-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
