import { useState, useRef, useEffect } from 'react';
import { SITE_EMAIL } from '../config/site';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    el.querySelectorAll('.fade-up').forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);
  return ref;
}

const SERVICES = [
  'Sprzątanie biur',
  'Mycie przeszkleń / okien',
  'Pranie wykładzin',
  'Polimerowanie podłóg',
  'Kilka usług / pakiet',
  'Inne / nie wiem jeszcze',
];

interface FormData {
  company: string; name: string; phone: string; email: string;
  service: string; area: string; message: string;
}
interface FormErrors { [k: string]: string; }

const EMPTY: FormData = { company: '', name: '', phone: '', email: '', service: '', area: '', message: '' };

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.company.trim()) e.company = 'Podaj nazwę firmy.';
  if (!d.name.trim()) e.name = 'Podaj imię i nazwisko.';
  if (!d.phone.trim()) e.phone = 'Podaj numer telefonu.';
  else if (!/^[\d\s\+\-\(\)]{7,}$/.test(d.phone.trim())) e.phone = 'Nieprawidłowy numer.';
  if (!d.email.trim()) e.email = 'Podaj adres e-mail.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = 'Nieprawidłowy e-mail.';
  if (!d.service) e.service = 'Wybierz usługę.';
  if (!d.area.trim()) e.area = 'Opisz obiekt lub podaj metraż.';
  return e;
}

function buildMailto(d: FormData): string {
  const subject = `Zapytanie o wycenę — ${d.service}`;
  const lines = [
    `Firma / obiekt: ${d.company}`,
    `Imię i nazwisko: ${d.name}`,
    `Telefon: ${d.phone}`,
    `E-mail: ${d.email}`,
    `Rodzaj usługi: ${d.service}`,
    `Metraż / opis: ${d.area}`,
  ];
  if (d.message.trim()) lines.push(`Wiadomość: ${d.message.trim().slice(0, 300)}${d.message.trim().length > 300 ? '...' : ''}`);
  lines.push('', '---', 'Formularz saturshine.pl');
  return `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

// Input styles
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#172136',
  background: '#fff', border: '1px solid #E2E0DC',
  borderRadius: 2, outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};
const labelStyle: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif', fontSize: 11,
  color: '#717171', letterSpacing: '0.15em', textTransform: 'uppercase',
  display: 'block', marginBottom: 6,
};
const errorStyle: React.CSSProperties = {
  fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#c0392b', marginTop: 5,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const ref = useReveal();

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (touched[name]) {
      const errs = validate({ ...form, [name]: value });
      setErrors(p => ({ ...p, [name]: errs[name] || '' }));
    }
  }
  function onBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target;
    setTouched(p => ({ ...p, [name]: true }));
    const errs = validate(form);
    setErrors(p => ({ ...p, [name]: errs[name] || '' }));
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.keys(EMPTY).reduce((a, k) => ({ ...a, [k]: true }), {});
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    window.location.href = buildMailto(form);
    setSubmitted(true);
    setForm(EMPTY);
    setErrors({});
    setTouched({});
  }

  function getInputStyle(field: string): React.CSSProperties {
    return { ...inputStyle, borderColor: errors[field] && touched[field] ? '#c0392b' : '#E2E0DC' };
  }

  return (
    <section
      id="wycena"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="form-heading"
      style={{ background: '#F6F6F4', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <div className="fade-up" style={{ borderTop: '1px solid #E2E0DC', paddingTop: '3rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#717171', display: 'block', marginBottom: 10 }}>
                Bezpłatna wycena
              </span>
              <h2 id="form-heading" style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 800,
                fontSize: 'clamp(32px, 4.5vw, 60px)',
                letterSpacing: '-0.03em', color: '#172136', lineHeight: 1.05, margin: 0,
              }}>
                Powiedz nam,<br />czego potrzebujesz
              </h2>
            </div>
            <div style={{ maxWidth: 340, paddingTop: 4 }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.7 }}>
                Formularz otworzy Twoją skrzynkę mailową z gotową wiadomością.
                Wysyłasz ją sam — Twoje dane nie trafiają na żaden serwer.
              </p>
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Skrzynka mailowa otwiera się automatycznie', 'Odpiszemy w ciągu 24 h roboczych', 'Bezpłatne oględziny po wstępnym zgłoszeniu'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ marginTop: 4, width: 14, height: 14, borderRadius: '50%', background: '#e8f0eb', border: '1px solid #c8ddd0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1B3A2D', display: 'block' }} />
                    </span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#717171' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="fade-up delay-1" style={{ background: '#fff', border: '1px solid #E2E0DC', borderRadius: 4, padding: '2.5rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: '#e8f0eb', border: '1px solid #c8ddd0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="#1B3A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: '#172136', marginBottom: 12 }}>
                Klient pocztowy się otworzył
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#717171', lineHeight: 1.65, marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
                Sprawdź swoją aplikację pocztową — wiadomość jest gotowa. Jeśli nic się nie otworzyło, napisz bezpośrednio na{' '}
                <a href={`mailto:${SITE_EMAIL}`} style={{ color: '#1B3A2D' }}>{SITE_EMAIL}</a>.
              </p>
              <button onClick={() => setSubmitted(false)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#B0B0B0',
                textDecoration: 'underline',
              }}>Wyślij kolejne zapytanie</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-label="Formularz zapytania o wycenę">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem' }}>
                {/* Company - full width */}
                <div className="full-width-field" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="form-company" style={labelStyle}>Nazwa firmy / obiektu <span style={{ color: '#B8832A' }}>*</span></label>
                  <input id="form-company" name="company" type="text" autoComplete="organization"
                    placeholder="np. Biuro Przykład Sp. z o.o."
                    value={form.company} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={getInputStyle('company')}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  />
                  {errors.company && touched.company && <p style={errorStyle} role="alert">{errors.company}</p>}
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="form-name" style={labelStyle}>Imię i nazwisko <span style={{ color: '#B8832A' }}>*</span></label>
                  <input id="form-name" name="name" type="text" autoComplete="name"
                    placeholder="Jan Kowalski"
                    value={form.name} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={getInputStyle('name')}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  />
                  {errors.name && touched.name && <p style={errorStyle} role="alert">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="form-phone" style={labelStyle}>Telefon <span style={{ color: '#B8832A' }}>*</span></label>
                  <input id="form-phone" name="phone" type="tel" autoComplete="tel"
                    placeholder="+48 500 000 000"
                    value={form.phone} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={getInputStyle('phone')}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  />
                  {errors.phone && touched.phone && <p style={errorStyle} role="alert">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="form-email" style={labelStyle}>Adres e-mail <span style={{ color: '#B8832A' }}>*</span></label>
                  <input id="form-email" name="email" type="email" autoComplete="email"
                    placeholder="jan@firma.pl"
                    value={form.email} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={getInputStyle('email')}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  />
                  {errors.email && touched.email && <p style={errorStyle} role="alert">{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="form-service" style={labelStyle}>Rodzaj usługi <span style={{ color: '#B8832A' }}>*</span></label>
                  <select id="form-service" name="service"
                    value={form.service} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={{ ...getInputStyle('service'), cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  >
                    <option value="" disabled>Wybierz usługę…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && touched.service && <p style={errorStyle} role="alert">{errors.service}</p>}
                </div>

                {/* Area - full width */}
                <div className="full-width-field" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="form-area" style={labelStyle}>Metraż / opis obiektu <span style={{ color: '#B8832A' }}>*</span></label>
                  <input id="form-area" name="area" type="text"
                    placeholder="np. 400 m² biura w centrum Warszawy, 3 piętra"
                    value={form.area} onChange={onChange} onBlur={onBlur}
                    aria-required="true" style={getInputStyle('area')}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                  />
                  {errors.area && touched.area && <p style={errorStyle} role="alert">{errors.area}</p>}
                </div>

                {/* Message - full width */}
                <div className="full-width-field" style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="form-message" style={labelStyle}>Wiadomość dodatkowa</label>
                  <textarea id="form-message" name="message" rows={3}
                    placeholder="Dodatkowe informacje, preferencje co do terminu…"
                    value={form.message} onChange={onChange}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#1B3A2D')}
                    onBlur={e => { e.currentTarget.style.borderColor = '#E2E0DC'; }}
                  />
                </div>
              </div>

              {/* RODO */}
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#B0B0B0', lineHeight: 1.6, margin: '1.5rem 0' }}>
                Klikając „Wyślij" otwierasz swojego klienta pocztowego z gotową wiadomością. Dane nie są przechowywane na serwerach strony.{' '}
                <a href="/polityka-prywatnosci" style={{ color: '#717171' }}>Polityka prywatności</a>
              </p>

              {/* Submit */}
              <button
                id="form-submit"
                type="submit"
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '14px 32px',
                  background: '#1B3A2D', color: '#fff',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                  border: 'none', borderRadius: 2, cursor: 'pointer',
                  letterSpacing: '0.02em', transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#2d5c45')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1B3A2D')}
              >
                Wyślij zapytanie →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #wycena form > div { grid-template-columns: 1fr !important; }
          #wycena form .full-width-field { grid-column: 1 !important; }
        }
      `}</style>
    </section>
  );
}
