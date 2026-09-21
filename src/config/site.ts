// ============================================================
// CENTRALNY PLIK KONFIGURACYJNY — DANE FIRMY
// Zmień dane tutaj — zaktualizują się automatycznie w całej aplikacji
// ============================================================

export const SITE_CONFIG = {
  // Dane kontaktowe
  companyName: 'SaturShine',
  email: 'kontakt@saturshine.pl',
  phone: '+48 511 727 196',
  phoneClean: '48511727196', // bez spacji i plusów, do linków tel:

  // Lokalizacja
  serviceArea: 'Warszawa i okolice',
  serviceAreaDetail: 'Warszawa, Piaseczno, Pruszków, Wołomin, Legionowo, Łomianki',

  // SEO / meta
  siteUrl: 'https://saturshine.pl',
  tagline: 'Czyste biuro. Bez kompromisów.',
  description:
    'Profesjonalne sprzątanie biur, mycie przeszkleń, pranie wykładzin i polimerowanie podłóg w Warszawie i okolicach.',

  // NIP / dane formalne (opcjonalnie — odblokuj gdy gotowe)
  // nip: '000-000-00-00',
  // regon: '000000000',
} as const;

// Skrót dla mailto
export const SITE_EMAIL = SITE_CONFIG.email;
export const SITE_PHONE = SITE_CONFIG.phone;
export const COMPANY_NAME = SITE_CONFIG.companyName;
