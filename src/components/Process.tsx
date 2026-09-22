const STEPS = [
  {
    number: '01',
    title: 'Zgłoszenie',
    body: 'Wypełnij formularz na stronie lub zadzwoń. Opisz obiekt i rodzaj usługi — wystarczy kilka zdań.',
    meta: 'Odpowiadamy w ciągu 24 h',
  },
  {
    number: '02',
    title: 'Wizja lokalna',
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
  return (
    <section id="wspolpraca" className="reveal-section" style={{ background: '#F6F6F4', padding: '6rem 0' }}>
      <div className="section-container">

        {/* Header */}
        <div className="fade-up process-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          <h2
            id="process-heading"
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(32px, 5vw, 64px)',
              letterSpacing: '-0.03em', color: '#172136',
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

        {/* Steps */}
        <div className="process-content fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', background: '#fff', padding: '3rem' }}>
          {/* Steps 01 & 02 — Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[STEPS[0], STEPS[1]].map((step, i) => (
              <div key={step.number} style={{ paddingBottom: i === 0 ? '2.5rem' : 0, borderBottom: i === 0 ? '1px solid #E2E0DC' : 'none' }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 56, color: '#EEECEA', lineHeight: 1,
                  display: 'block', marginBottom: -8,
                  letterSpacing: '-0.03em',
                }} aria-hidden="true">{step.number}</span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#172136', margin: '0 0 8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, margin: '0 0 12px' }}>
                  {step.body}
                </p>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B8832A', letterSpacing: '0.1em' }}>
                  → {step.meta}
                </span>
              </div>
            ))}
          </div>

          {/* Steps 03 & 04 — Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[STEPS[2], STEPS[3]].map((step, i) => (
              <div key={step.number} style={{ paddingBottom: i === 0 ? '2.5rem' : 0, borderBottom: i === 0 ? '1px solid #E2E0DC' : 'none' }}>
                <span style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 800,
                  fontSize: 56, color: '#EEECEA', lineHeight: 1,
                  display: 'block', marginBottom: -8,
                  letterSpacing: '-0.03em',
                }} aria-hidden="true">{step.number}</span>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#172136', margin: '0 0 8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, margin: '0 0 12px' }}>
                  {step.body}
                </p>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#B8832A', letterSpacing: '0.1em' }}>
                  → {step.meta}
                </span>
              </div>
            ))}

            {/* CTA inside the box */}
            <div style={{ marginTop: 'auto', paddingTop: 24, borderTop: '1px solid #E2E0DC' }}>
              <a
                href="#wycena"
                className="btn-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 24px', background: '#1B3A2D', color: '#fff',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13,
                  textDecoration: 'none', borderRadius: 2,
                }}
              >
                Zacznij od zgłoszenia →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #wspolpraca .process-header,
          #wspolpraca .process-content {
            grid-template-columns: 1fr !important;
          }
          #wspolpraca .process-content {
            padding: 1.5rem !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
