---
description: Zasady projektu i wytyczne dla agentów AI pracujących nad SaturShine
---

# SaturShine - Wytyczne Projektowe i Reguły (AGENTS.md)

Ten plik zawiera kluczowe reguły biznesowe, techniczne i designerskie dotyczące projektu SaturShine. Zawsze kieruj się tymi zasadami, wprowadzając zmiany w kodzie.

## 1. Kontekst Biznesowy i Treść
- **Firma:** SaturShine, startup z branży profesjonalnego sprzątania (B2B) w Warszawie.
- **Zaufanie i Autentyczność:** Kategoryczny **zakaz dodawania fałszywych referencji**, zmyślonych statystyk ("1000 zadowolonych klientów") czy sztucznych logotypów partnerów. Startup buduje zaufanie poprzez bezpośredni kontakt, transparentny proces i brak "korporacyjnego bełkotu".
- **Tone of Voice:** Konkretny, biznesowy, bez pośredników (kontakt z osobami decyzyjnymi, a nie call center).

## 2. Design i UI/UX (Boutique / Editorial Style)
- **Kategoryczny zakaz wyglądu "AI-generated":** Unikaj symetrycznych siatek kart (typu "grid 2x2 z ikonkami"), ciemnych, generycznych teł z gradientami oraz typowych landing page'owych układów.
- **Asymetria i Styl Magazynowy:** Sekcje mają wyglądać jak rozkładówki w nowoczesnym magazynie – duże zróżnicowanie fontów, ułożenie asymetryczne, "pull quotes" na pełną szerokość. 
- **Typografia:** 
  - Główne nagłówki: `Syne` (często ogromne, kontrolowane za pomocą CSS `clamp()`).
  - Tekst czytany (body) / etykiety: `DM Sans`.
  - Pamiętaj o dbaniu o sieroty typograficzne i zakazie "brzydkiego" dzielenia wyrazów (`word-break`). Zamiast tego steruj responsywnością rozmiaru za pomocą płynnego skalowania.
- **Paleta Kolorów (Jasna i elegancka):**
  - Tło: Biel (`#fff`) oraz ciepły szary/beż (`#F6F6F4`).
  - Akcenty: Złoty/bursztyn (`#B8832A`).
  - Teksty i ciemne akcenty: Sosnowa zieleń (`#1B3A2D`) oraz złamana czerń (`#141414`).

## 3. Tech Stack
- **Framework:** React 19 + TypeScript + Vite.
- **Stylowanie:** Pomimo dostępności Tailwind CSS v4 w `package.json`, layouty "editorialowe" są implementowane głównie przez zaawansowane `style inline` (CSS Grid / Flexbox), aby zachować absolutną precyzję, lub w pliku `index.css`.
- **Formularze:** Strona nie posiada backendu ani własnego API dla bazy danych. Formularze korzystają z logiki generowania linków `mailto:`.
- **Animacje:** Brak ciężkich bibliotek do animacji (framer-motion). Animacje wejścia opierają się na hooku `useReveal` wykorzystującym natywne API `IntersectionObserver`.

## 4. Zasady Responsywności
- Wykorzystuj `clamp(MIN, PREF, MAX)` do czcionek oraz marginesów, ale uważaj przy jednostkach `vw` – strona musi poprawnie skalować się nawet przy gigantycznych rozdzielczościach (lub oddaleniu zoom na 25%), dlatego fonty muszą mieć sztywny `MAX` a layout opierać się na `max-width` (zazwyczaj 1200px).
- Długie, pojedyncze wyrazy i hasła (np. "Bez kompromisów") wymuszaj do jednej linii przy pomocy `<span style={{ whiteSpace: 'nowrap' }}>` na urządzeniach mobilnych.
