import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    el.querySelectorAll('.fade-up').forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const STEPS = [
  {
    number: '01',
    title: 'Zgłoszenie',
    body: 'Wypełnij formularz na stronie lub zadzwoń. Opisz obiekt i rodzaj usługi — wystarczy kilka zdań.',
    meta: 'Odpowiadamy w ciągu 24 h',
  },
  {
    number: '02',
    title: 'Bezpłatne oględziny',
    body: 'Przyjeżdżamy na obiekt. Oceniamy stan pomieszczeń, metraż i dostępność. Bez zobowiązań — wizyta jest bezpłatna.',
    meta: 'Termin ustalamy elastycznie',
  },
  {
    number: '03',
    title: 'Konkretna oferta',
    body: 'Na podstawie oględzin przygotowujemy wycenę z wyszczególnieniem zakresu. Negocjowalną — jeśli coś nie pasuje, rozmawiamy.',
    meta: 'Oferta w 48 h od oględzin',
  },
  {
    number: '04',
    title: 'Start współpracy',
    body: 'Po akceptacji oferty ustalamy harmonogram. Masz bezpośredni kontakt z ekipą — piszesz lub dzwonisz do nas, nie do biura.',
    meta: 'Elastyczny termin startu',
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section
      id="wspolpraca"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="process-heading"
      style={{ background: '#F6F6F4', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          <h2
            id="process-heading"
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.03em', color: '#141414',
              lineHeight: 1.05, margin: 0,
            }}
          >
            Jak&nbsp;wygląda<br />współpraca
          </h2>
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 4 }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.7 }}>
              Od pierwszego kontaktu do startu prac — zazwyczaj kilka dni roboczych.
              Przy pilnych zleceniach staramy się działać szybciej.
            </p>
          </div>
        </div>

        {/* Steps — NOT 4 equal columns. Large step, then vertical list structure */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#E2E0DC' }}>
          {/* Steps 01 & 02 — top row, different sizes */}
          <div className="fade-up" style={{ background: '#F6F6F4', padding: '2.5rem 2.5rem 2.5rem 0' }}>
            {/* Big featured step */}
            <div style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid #E2E0DC' }}>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 96, color: '#EEECEA', lineHeight: 1,
                display: 'block', marginBottom: -16,
                letterSpacing: '-0.04em',
              }} aria-hidden="true">01</span>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 24, color: '#141414', margin: '0 0 10px' }}>
                {STEPS[0].title}
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, margin: '0 0 16px' }}>
                {STEPS[0].body}
              </p>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B8832A', letterSpacing: '0.1em' }}>
                → {STEPS[0].meta}
              </span>
            </div>

            {/* Step 02 — compact */}
            <div>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 56, color: '#EEECEA', lineHeight: 1,
                display: 'block', marginBottom: -8,
                letterSpacing: '-0.03em',
              }} aria-hidden="true">02</span>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#141414', margin: '0 0 8px' }}>
                {STEPS[1].title}
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, margin: '0 0 12px' }}>
                {STEPS[1].body}
              </p>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B8832A', letterSpacing: '0.1em' }}>
                → {STEPS[1].meta}
              </span>
            </div>
          </div>

          {/* Steps 03 & 04 — right column */}
          <div className="fade-up delay-2" style={{ background: '#fff', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[STEPS[2], STEPS[3]].map((step, i) => (
              <div key={step.number} style={{ paddingBottom: i === 0 ? '2.5rem' : 0, borderBottom: i === 0 ? '1px solid #E2E0DC' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                  <span style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: '1.5px solid #1B3A2D',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: '#1B3A2D',
                    flexShrink: 0,
                  }}>{step.number}</span>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#141414', margin: 0, paddingTop: 7 }}>
                    {step.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, margin: '0 0 12px', paddingLeft: 52 }}>
                  {step.body}
                </p>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B8832A', letterSpacing: '0.1em', paddingLeft: 52, display: 'block' }}>
                  → {step.meta}
                </span>
              </div>
            ))}

            {/* CTA inside the box */}
            <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid #E2E0DC' }}>
              <a
                href="#wycena"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 24px', background: '#1B3A2D', color: '#fff',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13,
                  textDecoration: 'none', borderRadius: 2, transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2d5c45')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1B3A2D')}
              >
                Zacznij od zgłoszenia →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #wspolpraca [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
