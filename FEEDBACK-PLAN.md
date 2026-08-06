# CBO Salud — Feedback Iteration Plan (WhatsApp Group)

> Source: stakeholder feedback sent 2026 (Spanish). This plan breaks the feedback into
> ordered, independently shippable tasks so we can tackle them one by one.
> Status legend: ☐ to do · 🔵 in progress · ✅ done

## Priority grouping

- **P1 — High impact, no external assets needed** (do first)
- **P2 — Needs content/assets from stakeholders** (collect and build next)
- **P3 — Structural/technical** (backend, integration, data fixes)

---

## P1 — Quick wins (no external assets required)

### T-01 ✅ Tune brand palette: "less Matrix, more salud"
**Feedback:** *"diseño limpio y verde más claro y menos chillón, más salud. Ahora está muy de MATRIX."*
The current `brand-*` scale was the bright Tailwind green (`#22c55e` → `#4ade80`), which reads neon/"Matrix".
- Softened to a calmer, more organic health-green. `--color-brand-*` and `--color-accent-*` updated in `src/styles/global.css` (brand-500 `#51b885`, accent-500 `#b89251`).
- Hardcoded leftover `#f0fdf4` in `ContactoPage.astro` switched to `bg-brand-50`.
- Committed in `ad5685b`.

### T-02 ✅ Always-visible conversion CTA (reserva tu valoración / WhatsApp)
**Feedback:** *"que constantemente aparezca un CTA de reserva tu valoración inicial o mensaje a nuestro whatsapp."*
- Built `StickyActionBar.astro`: an always-visible floating pill (centered, all breakpoints) with **"Reserva tu valoración"** (opens WhatsApp with pre-filled `cta.bookMessage`) + a **WhatsApp** button.
- Replaced the old corner `WhatsAppButton.astro` (deleted) and added bottom padding to `Footer.astro` so content is never hidden behind the bar.
- Both CTAs use the shared `SITE` contact constants from `src/lib/site.ts`.

### T-03 ✅ Fix homepage services grid (orphaned last card)
**Feedback:** *"los servicios no caben en una linea… aparecen 4 en la primera linea y 1 en la segunda. Igual mirar si podemos colocarlo mejor…"*
- 5 main services are rendered on the homepage (empresa-saludable excluded). The `lg:grid-cols-4` grid produced a 4+1 wrap.
- Changed to `lg:grid-cols-5` in `src/components/pages/IndexPage.astro` so all 5 fit on one line at desktop; 2 columns on tablet, 1 on mobile. Verified in browser (all 5 in a single row).
- Committed in `ad5685b`.

### T-04 ☐ Upgrade iconography — more visual/aesthetic
**Feedback:** *"iconografía más visual y estética".*
- Currently `lucide-astro` stroke icons (`dumbbell`, `smartphone`, `apple`, `heart-pulse`, `person-standing`, `building-2`) in `src/data/services.json`.
- Evaluate switching to softer/filled or line+fill illustrations, larger sizes, and consistent visual treatment across `ServiceCard.astro` and service pages.
- Keep icons semantic (aria-hidden) and consistent with the new palette.

## P2 — Content & assets (needs stakeholder input)

### T-05 ☐ Center photos & videos on the site
**Feedback:** *"ENSEÑAR mucho más — vídeos del centro, fotos del centro… reciclar los vídeos y fotos profesionales que tenemos en el Google my business y ponerlos en la web."*
- Collect/share the professional photos + videos currently on Google Business (2 centers).
- Add a media section to `/centros` (and/or homepage) with real gallery + video embeds.
- **Needs:** media files/URLs shared by the team.

### T-06 ☐ Connect Google reviews (both centers)
**Feedback:** *"Conectar las reseñas de Google — tenemos que mirar cómo hacemos esto siendo 2 centros en google."*
- PLAN.md notes reviews are currently 3 hardcoded testimonials on the homepage; real Google reviews via Trustindex on the old site.
- Decide integration approach (Trustindex embed, Google Places API, or individual Business Profile embeds per center). Two centers → two review sources.
- Gate behind cookie consent (currently deferred — see T-09).
- **Needs:** decision on provider + access to both Google Business profiles.

### T-07 ☐ Message at the core outcomes
**Feedback:** *"hablar más al núcleo de: Pierde grasa, Recupera tu lesión, Siéntete mejor, Vuelve a moverte sin dolor, Recupera tu fuerza y tu energía, Entrena con seguridad y sin lesionarte."*
- Reposition copy to lead with **outcomes**, not features, across homepage + service pages.
- Add a dedicated "resultados / por qué CBO" section (homepage) built around those 6 core messages.
- **Needs:** owner confirmation of the exact ES/EN phrasing set to use.

### T-08 ☐ Add pricing (tarifas)
**Feedback:** *"poner tarifas".*
- Create a `/tarifas` page (or section on `/servicios` / `/centros`) listing the two centers' pricing.
- Add a `pricing` structure to the content model if kept data-driven.
- **Needs:** current price list from owner.

### T-09 ☐ What makes us different (differentiation)
**Feedback:** *"poner en que nos diferenciamos de otros centros (valoración, todos los servicios en 1 solo centro salud 360, individualización)."*
- Add a clear "Nuestro diferencial" section: free initial **valoración**, **360º salud** (all services under one roof), **individualización**.
- Add Spanish/English copy in `src/i18n/{es,en}.json` and render on homepage (and possibly `/metodo`).
- **Needs:** owner confirmation of ES/EN wording.

### T-10 ☐ Rename the two centers
**Feedback:** *"Centro 1 y Centro 2 son: CBO Salud. La Nave y CBO Salud. El Centro."*
- Update `src/data/centers.json`:
  - `centro-1` name → **"CBO Salud. La Nave"**
  - `centro-2` name → **"CBO Salud. El Centro"**
- Update both `translations.es.name` and `translations.en.name` (and any hardcoded references).
- **Needs:** confirm which physical location maps to which name + both full addresses.

## P3 — Structural / technical

### T-11 ☐ Cookie consent + consent-gated embeds
- Needed to legally embed Google reviews, Maps, and video (EU GDPR) per the original revamp plan.
- Build `CookieConsent.astro` + gate the embeds introduced in T-05/T-06.
- (Deferred from the original build; becomes required once reviews/video are live.)

---

## Suggested execution order

1. ✅ **T-01** palette → ✅ **T-03** grid fix → ✅ **T-02** CTA → **T-04** icons
2. **T-10** center names (quick data fix) alongside anything touching `/centros`
3. **T-07 / T-08 / T-09** once copy + pricing confirmed
4. **T-05 / T-06 + T-11** once media + Google access provided

## Open questions for the group
- Full addresses for both centers + which location is "La Nave" vs "El Centro".
- Current price list.
- Review integration provider + access to both Google Business profiles.
- Shareable photo/video assets (URLs preferred).
