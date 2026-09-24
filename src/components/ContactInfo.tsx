import { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../config/site';

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

export default function ContactInfo() {
  const ref = useReveal();

  return (
    <section
      id="kontakt"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="contact-heading"
      style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid #E2E0DC' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>
        <div className="fade-up contact-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171', display: 'block', marginBottom: 10 }}>Kontakt</span>
            <h2 id="contact-heading" style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              letterSpacing: '-0.025em', color: '#172136',
              lineHeight: 1.1, margin: '0 0 20px',
            }}>
              Napisz lub zadzwoń<br />
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.7, maxWidth: 340 }}>
              Nie masz czasu na formularz? Możesz po prostu zadzwonić lub napisać.
            </p>
          </div>

          {/* Right - contact entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              id="contact-phone"
              aria-label={`Zadzwoń: ${SITE_CONFIG.phone}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 0', borderBottom: '1px solid #E2E0DC',
                textDecoration: 'none', color: 'inherit',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: 4 }}>Telefon</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#172136' }}>{SITE_CONFIG.phone}</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: '#767676' }}>
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              id="contact-email"
              aria-label={`Napisz: ${SITE_CONFIG.email}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 0', borderBottom: '1px solid #E2E0DC',
                textDecoration: 'none', color: 'inherit',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: 4 }}>E-mail</span>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#172136' }}>{SITE_CONFIG.email}</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: '#767676' }}>
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Area */}
            <div style={{ padding: '20px 0' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#767676', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: 4 }}>Obszar działania</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#172136', display: 'block', marginBottom: 4 }}>{SITE_CONFIG.serviceArea}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171' }}>{SITE_CONFIG.serviceAreaDetail}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #kontakt .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
