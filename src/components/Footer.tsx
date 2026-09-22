import { SITE_CONFIG, COMPANY_NAME } from '../config/site';

const SERVICES_LINKS = [
  { label: 'Sprzątanie biur', href: '#sprzatanie-biur' },
  { label: 'Mycie przeszkleń', href: '#mycie-przeszklen' },
  { label: 'Pranie wykładzin', href: '#pranie-wykladziN' },
  { label: 'Polimerowanie podłóg', href: '#polimerowanie-podlog' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ background: '#1B3A2D', borderTop: '1px solid #222' }}
      aria-label="Stopka strony"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 2.5rem 2rem' }}>
        {/* Top row */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem', paddingBottom: '3rem', borderBottom: '1px solid #2a2a2a' }}>
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'block', textDecoration: 'none', marginBottom: 12 }} aria-label={`${COMPANY_NAME} — strona główna`}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.03em' }}>
                Satur<span style={{ color: '#B8832A' }}>Shine</span>
              </span>
            </a>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#717171', lineHeight: 1.6, margin: 0 }}>
              Profesjonalne sprzątanie biur w Warszawie i okolicach.
            </p>
          </div>

          {/* Usługi */}
          <div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 12 }}>Usługi</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SERVICES_LINKS.map(l => (
                <a key={l.href} href={l.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#717171')}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Nawigacja */}
          <div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 12 }}>Firma</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Jak działamy', href: '#wspolpraca' },
                { label: 'Dlaczego SaturShine', href: '#dlaczego' },
                { label: 'Zapytaj o wycenę', href: '#wycena' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#717171')}
                >{l.label}</a>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: 12 }}>Kontakt</span>
            <a href={`tel:${SITE_CONFIG.phoneClean}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171', textDecoration: 'none', display: 'block', marginBottom: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#717171')}
            >{SITE_CONFIG.phone}</a>
            <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171', textDecoration: 'none', display: 'block', marginBottom: 12, transition: 'color 0.2s', wordBreak: 'break-all' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#717171')}
            >{SITE_CONFIG.email}</a>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#444' }}>{SITE_CONFIG.serviceArea}</span>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#444', margin: 0 }}>
            © {year} {COMPANY_NAME}. Wszelkie prawa zastrzeżone.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/polityka-prywatnosci" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#717171')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444')}
            >Polityka prywatności</a>
            <a href="/sitemap.xml" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#444', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#717171')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444')}
            >Mapa strony</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
