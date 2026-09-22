import { useState, useEffect } from 'react';
import { COMPANY_NAME } from '../config/site';

const navLinks = [
  { label: 'Usługi', href: '/#uslugi' },
  { label: 'Jak działamy', href: '/#wspolpraca' },
  { label: 'Dlaczego my', href: '/#dlaczego' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s',
        background: (scrolled && !menuOpen) ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: (scrolled && !menuOpen) ? 'blur(8px)' : 'none',
        borderBottom: (scrolled && !menuOpen) ? '1px solid #E2E0DC' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Wordmark */}
        <a href="/" aria-label={`${COMPANY_NAME} — strona główna`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', zIndex: 101, position: 'relative' }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: menuOpen ? '#fff' : '#1B3A2D', letterSpacing: '-0.5px', transition: 'color 0.3s' }}>
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
        <a href="/#wycena"
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

        {/* Mobile Toggle Text Button */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          style={{ 
            background: 'none', border: 'none', cursor: 'pointer', padding: '8px 0', display: 'none', 
            fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', 
            letterSpacing: '0.1em', color: menuOpen ? '#fff' : '#1B3A2D', zIndex: 101, position: 'relative', transition: 'color 0.3s' 
          }}
        >
          {menuOpen ? 'Zamknij' : 'Menu'}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: '#111317', // Elegant dark background
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
        zIndex: 40,
      }} className="show-mobile">
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 36, color: '#fff',
                letterSpacing: '-0.02em', textDecoration: 'none',
                transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + i * 0.05}s`,
              }}
            >{link.label}</a>
          ))}
          <a href="/#wycena" onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '1.5rem', padding: '16px 36px',
              background: '#B8832A', color: '#fff',
              fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
              textDecoration: 'none', borderRadius: 2, letterSpacing: '0.05em', textTransform: 'uppercase',
              transform: menuOpen ? 'translateY(0)' : 'translateY(24px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + navLinks.length * 0.05}s`,
            }}
          >Poproś o wycenę</a>
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
