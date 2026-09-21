import { useState, useEffect } from 'react';
import { COMPANY_NAME } from '../config/site';

const navLinks = [
  { label: 'Usługi', href: '#uslugi' },
  { label: 'Jak działamy', href: '#wspolpraca' },
  { label: 'Dlaczego my', href: '#dlaczego' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid #E2E0DC' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Wordmark */}
        <a href="#" aria-label={`${COMPANY_NAME} — strona główna`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#1B3A2D', letterSpacing: '-0.5px' }}>
            Satur<span style={{ color: '#B8832A' }}>Shine</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 36 }} className="hidden-mobile" aria-label="Nawigacja główna">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#3a3a3a', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1B3A2D')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3a3a3a')}
            >{link.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#wycena"
          className="hidden-mobile"
          style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 13,
            padding: '10px 22px', background: '#1B3A2D', color: '#fff',
            textDecoration: 'none', borderRadius: 2, transition: 'background 0.2s',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#2d5c45')}
          onMouseLeave={e => (e.currentTarget.style.background = '#1B3A2D')}
        >
          Bezpłatna wycena
        </a>

        {/* Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#141414', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#141414', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#141414', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        background: '#fff', borderTop: '1px solid #E2E0DC',
        maxHeight: menuOpen ? 400 : 0, overflow: 'hidden',
        transition: 'max-height 0.3s ease',
      }} className="show-mobile">
        <nav style={{ padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#141414',
                textDecoration: 'none', padding: '12px 0',
                borderBottom: '1px solid #E2E0DC',
              }}
            >{link.label}</a>
          ))}
          <a href="#wycena" onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12, padding: '12px 0', textAlign: 'center',
              background: '#1B3A2D', color: '#fff',
              fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
              textDecoration: 'none', borderRadius: 2,
            }}
          >Bezpłatna wycena</a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
