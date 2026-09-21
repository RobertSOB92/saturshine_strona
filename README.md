# SaturShine — Strona firmowa

Statyczny landing page firmy sprzątającej SaturShine. Zbudowany na Vite + React + TypeScript + Tailwind CSS. Gotowy do wdrożenia na Cloudflare Pages.

## Szybki start (lokalnie)

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod `http://localhost:5173`.

## Budowanie do produkcji

```bash
npm run build
```

Pliki statyczne trafiają do katalogu `dist/`.

---

## Wdrożenie na Cloudflare Pages (auto-deploy z GitHub)

### 1. Wgraj projekt na GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TWOJ-LOGIN/saturshine-strona.git
git push -u origin main
```

### 2. Połącz repo z Cloudflare Pages

1. Zaloguj się do [Cloudflare Dashboard](https://dash.cloudflare.com/) i przejdź do **Pages** → **Create a project**.
2. Wybierz **Connect to Git** → autoryzuj dostęp do GitHub → wybierz repozytorium.
3. W konfiguracji buildu ustaw:

| Pole | Wartość |
|---|---|
| Framework preset | None (lub Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (domyślnie) |

4. Kliknij **Save and Deploy** — Cloudflare Pages automatycznie zbuduje i opublikuje stronę.

### 3. Własna domena (opcjonalnie)

W ustawieniach projektu: **Custom domains** → dodaj `saturshine.pl` → skonfiguruj rekordy DNS zgodnie z instrukcją Cloudflare.

### 4. Auto-deploy

Każdy `git push` do gałęzi `main` automatycznie wyzwoli nowy build i deploy.

---

## Zmiana danych kontaktowych

Wszystkie dane firmy (telefon, e-mail, obszar działania) znajdują się w **jednym pliku**:

```
src/config/site.ts
```

Zmień wartości tam — zaktualizują się automatycznie w całej aplikacji (Hero, formularz mailto:, sekcja kontaktowa, stopka).

---

## Struktura projektu

```
src/
├── config/
│   └── site.ts          <- dane firmy (tu zmieniasz kontakt)
├── components/
│   ├── Header.tsx        <- nawigacja
│   ├── Hero.tsx          <- sekcja główna
│   ├── Services.tsx      <- 4 usługi
│   ├── Process.tsx       <- jak działamy (4 kroki)
│   ├── WhyUs.tsx         <- dlaczego SaturShine
│   ├── ContactForm.tsx   <- formularz wyceny (mailto:)
│   ├── ContactInfo.tsx   <- dane kontaktowe
│   └── Footer.tsx        <- stopka
├── hooks/
│   └── useFadeUp.ts      <- animacje przy scrollu
├── App.tsx
├── main.tsx
└── index.css             <- design tokens (kolory, fonty)
public/
├── robots.txt
├── sitemap.xml
└── favicon.svg
```

---

## SEO

- Meta title i description w `index.html`
- Semantyczny HTML (H1 do H3, sekcje z aria-label)
- `robots.txt` — zezwolenie na indeksowanie
- `sitemap.xml` — mapa sekcji strony
- Zaktualizuj URL w `sitemap.xml` po wdrożeniu na własną domenę

## Notatki techniczne

- **Brak backendu** — formularz otwiera klienta pocztowego użytkownika przez mailto: z uzupełnioną treścią.
- **SPA** — cała treść w jednym pliku HTML, nawigacja przez scroll/anchor.
- Cloudflare Pages automatycznie serwuje SPA; nie potrzebujesz dodatkowej konfiguracji przekierowań.
