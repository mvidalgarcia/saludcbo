# Design Plan: Salud CBO Visual Revamp

## Goal

Transform the site from green-heavy to a clean, light, predominantly white design. Green becomes an accent color only (buttons, links, icons, small highlights). No changes to content or site structure — only visual/styling changes.

---

## Current State

- **Hero**: Dark green background (`brand-950` #133e29) with white text
- **Footer**: Same dark green background
- **Lead magnet section**: Dark green background
- **Final CTA section**: Dark green background
- **Service cards**: Green-50 alternating backgrounds, green featured card
- **Buttons**: Solid green (`brand-600`) throughout
- **Icons/accents**: Green everywhere
- **Overall feel**: Professional but heavily saturated with green

---

## Target State

Inspired by: thewell-beinglab.com and atmosfisioterapia.com

- **Hero**: White/light background, dark text, green accent on key word only
- **Footer**: White or very light gray background
- **Lead magnet**: Light background (white or brand-50)
- **Final CTA**: Light background
- **Cards**: White with subtle shadows, no colored backgrounds
- **Buttons**: Green (`brand-600`) for primary CTAs, outline/ghost variants elsewhere
- **Icons/accents**: Green used selectively for emphasis
- **Overall feel**: Airy, clean, modern, professional — green pops as accent

---

## Color Palette Changes

### Keep (as accent only)
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-600` | `#3d9e6e` | Primary buttons, active states |
| `brand-700` | `#32865c` | Button hover, links |
| `brand-500` | `#51b885` | Icons, small highlights |

### Reduce usage
| Token | Hex | Change |
|-------|-----|--------|
| `brand-950` | `#133e29` | Remove from hero/footer backgrounds; keep for text only if needed |
| `brand-900` | `#1f5c3d` | Minimal use |
| `brand-50` | `#f5f9f7` | Use sparingly for subtle section alternation |

### Add/Emphasize
| Token | Hex | Usage |
|-------|-----|-------|
| `gray-50` | `#f9fafb` | Light section backgrounds |
| `gray-100` | `#f3f4f6` | Card hover states, subtle borders |
| `gray-200` | `#e5e7eb` | Borders, dividers |
| `gray-900` | `#111827` | Headings on light backgrounds |

---

## Section-by-Section Plan

### 1. Header/Nav
- **Current**: White bg, green text/logo
- **Change**: Keep white bg. Logo stays. Nav links stay dark. CTA button stays green (accent).

### 2. Hero Section
- **Current**: Dark green bg, white text
- **Change**: White background, dark text (`gray-900`). The word "salud" stays green as accent. Stats section gets a light border or subtle bg. Remove green overlay.

### 3. Services Section
- **Current**: White bg, green-50 alternating cards, one featured green card
- **Change**: All cards white with subtle `shadow-sm` and `border-gray-100`. Featured card gets a green border or green icon instead of full green bg. Remove green-50 alternation.

### 4. Method Section
- **Current**: White bg, green numbered circles
- **Change**: Keep white bg. Numbered circles become green outline or green text (not filled). Reduce visual weight.

### 5. Team Section
- **Current**: Green-50 bg, green icons
- **Change**: White bg. Icons stay green (accent). Cards get subtle shadows.

### 6. Centers Section
- **Current**: Green-50 bg, green cards
- **Change**: White bg. Center cards white with subtle shadows. Green used only on "Cómo llegar" links and small icons.

### 7. Reviews Section
- **Current**: White bg, green stars
- **Change**: Keep as-is. Stars are already yellow. Minimal changes needed.

### 8. Instagram Section
- **Current**: Green-50 bg
- **Change**: White bg or very light gray.

### 9. Lead Magnet Section
- **Current**: Dark green bg, white text
- **Change**: White or brand-50 bg, dark text. CTA button stays green. Remove dark overlay.

### 10. Final CTA Section
- **Current**: Dark green bg, white text
- **Change**: White bg, dark text. Buttons stay green (accent). Add subtle top border or shadow for separation.

### 11. Footer
- **Current**: Dark green bg, white text
- **Change**: White or light gray bg, dark text. Green only on social icons hover and links. Logo stays. Remove dark overlay.

### 12. Sticky Bottom Bar
- **Current**: Green pill
- **Change**: Keep green — it's an accent/CTA element. This is fine as accent.

### 13. Cookie Banner
- **Current**: White bg, green accept button
- **Change**: No change needed. Already works as accent.

---

## Component Changes Summary

| Component | Change |
|-----------|--------|
| `.btn-primary` | Keep (green accent) |
| `.btn-outline` | Keep (green accent) |
| `.eyebrow` | Keep green — it's small accent text |
| `.section-title` | Already gray-900, keep |
| Hero backgrounds | Remove `bg-brand-950`, use `bg-white` |
| Footer backgrounds | Remove `bg-brand-950`, use `bg-white` or `bg-gray-50` |
| Card backgrounds | Remove `bg-brand-50`, use `bg-white` with `shadow-sm` |
| Featured service card | Replace `bg-brand-600` with white + green border |
| Numbered circles | Replace `bg-brand-600` with outline or text-only |
| Dark section text classes | Update `.section-title-light` to work on white bg |

---

## Implementation Order

1. **Update `global.css` theme tokens** — adjust any color definitions if needed
2. **Update global component classes** — `.eyebrow-light`, `.section-title-light`, `.section-subtitle-light` → make them work on light bg
3. **Hero section** — remove dark bg, update text colors
4. **Footer** — remove dark bg, update text colors
5. **Service cards** — remove colored backgrounds, add shadows
6. **Method section** — update numbered circles
7. **Team section** — update background
8. **Centers section** — update background and cards
9. **Instagram section** — update background
10. **Lead magnet section** — remove dark bg
11. **Final CTA section** — remove dark bg
12. **Final review** — test all pages, check contrast, verify accent consistency

---

## Design Principles

1. **White is the canvas** — backgrounds should be white or very light gray
2. **Green is the accent** — used for CTAs, links, icons, and emphasis words only
3. **Shadows over colors** — use `shadow-sm` / `shadow` for card depth instead of colored backgrounds
4. **Less is more** — remove visual weight, add breathing room (white space)
5. **Contrast matters** — ensure text remains readable on white backgrounds (use gray-900 for headings, gray-600/700 for body)

---

## Pages Affected

- Homepage (`/`)
- Método (`/metodo`)
- Equipo (`/equipo`)
- Centros (`/centros`)
- Contacto (`/contacto`)
- All service pages (`/entrenamiento`, `/nutricion`, `/fisioterapia`, `/pilates`, `/entrenamiento-online`, `/empresa`)

---

## Notes

- Content and structure remain unchanged
- No new components needed — only styling changes
- The accent palette (gold/amber) defined in theme is unused and can stay or be removed
- WhatsApp button stays green (separate from brand green, but compatible)
