---
name: fdb-design
description: Apply the Future. Destination. Brand. (FDB) visual + verbal design system — the Digital Tourism Think Tank's senior tourism-leadership summit and the X. Awards. Use whenever the user asks for FDB-branded slides, mocks, prototypes, marketing pages, social posts, or production code. Ships with brand tokens, Geist font files, logos & X. Awards lockups, a marketing-site UI kit, 16:9 slide templates, and reference social frames.
user-invocable: true
---

# FDB Design — Future. Destination. Brand.

This skill makes you fluent in the FDB brand. Treat the contents of this folder as the brand book — `README.md` is the source of truth, every other file is referenced from it.

## When to use this skill

Activate whenever the user mentions any of:

- **FDB** / **Future. Destination. Brand.** / **Future Destination Brand**
- **X. Awards** (the FDB sub-brand)
- **Digital Tourism Think Tank** (DTTT) summit work
- **Fáilte Ireland / Dublin December 2026** event materials
- Anything described as "the FDB brand", "FDB style", "in our brand", etc., inside a project that contains this skill

If a user invokes it cold, ask what they want to build (slide, page, social post, prototype, production component) and act as a senior brand designer.

## First five seconds — orient yourself

1. **Read `README.md` in full** before producing anything. It contains the voice rules, palette, type scale, iconography rules and substitution policy. Following the brand requires it.
2. **Import `colors_and_type.css`** in any HTML artifact. It registers `@font-face` for Geist (loaded from the bundled `fonts/` folder), the full token palette, and semantic type classes (`fdb-display`, `fdb-eyebrow`, `fdb-statement`, `fdb-body`, `fdb-section-label`, etc.).
3. **For multi-component work, start from `ui_kits/marketing-site/components.jsx`** — copy the components you need rather than rebuilding primitives. `pages.jsx` shows them composed.
4. **For decks, fork `slides/index.html`** (built on the shared `deck-stage.js`). It already has cover, statement, stat, agenda, speaker, X. Awards moment, section divider and closing layouts.
5. **For social posts, see `assets/social/`** for the eight reference Instagram-format frames the brand has shipped, and `social/` (if present in the consuming project) for working HTML versions.

## Folder map

```
fdb-design/
├── SKILL.md                       ← you are here
├── README.md                      ← the brand book (read this first)
├── colors_and_type.css            ← tokens + @font-face + semantic type classes
├── fonts/                         ← Geist 100–900, local TTFs
├── assets/
│   ├── logos/                     ← FDB banner (primary), stacked lockup, wordmark, mark + X. Awards
│   │   └── dark/                  ← dark-mode versions of all lockups
│   └── social/                    ← reference Instagram-format brand frames (PNG)
├── ui_kits/
│   └── marketing-site/            ← React JSX UI kit (components + pages)
├── slides/                        ← 16:9 deck templates on deck-stage.js
└── preview/                       ← specimen cards (every foundation rendered)
```

## Non-negotiable brand rules

The brand fails fast when these are violated:

- **One typeface: Geist.** No system stack, no Inter, no Helvetica. Loaded locally — never reach for Google Fonts.
- **One accent: brand purple `#8239C1`.** No second hue. No green, no blue, no orange. If you need differentiation, change the *weight* of purple or the *opacity* of ink.
- **Cream `#F5F0E9` is the canvas.** Light is the default treatment; dark (`.fdb-dark`) is selective, for evening / X. Awards / contrast moments only.
- **No emoji. No gradients. No drop shadows. No fully rounded shapes** (radii are 2–6 px; the X. Awards roundel is the only circle).
- **Editorial voice.** Short, declarative sentences. Periods carry weight. Inline emphasis is `<strong>` in purple, on a 2–5 word fragment, **one per paragraph max**.
- **UPPERCASE micro-labels** with `0.10em–0.14em` tracking do the structural work — eyebrows are purple, section labels are ink-faint.
- **Hero titles** are Geist 800, tracking `-0.03em`, line-height ~1.0, wrapping into 3–4 short lines on purpose.
- **Almost no animation.** 0.15s color transitions on hover only. No transforms, no parallax, no entrance animation.
- **Imagery is contained**, never full-bleed across page chrome. Portraits use a purple-outlined frame with an offset decorative frame behind.
- The middle-dot `·` (U+00B7) is the canonical separator.

When unsure, default to `README.md` — it carries the long-form reasoning behind every rule above.

## Quick-start snippets

### Single-file HTML artifact

```html
<link rel="stylesheet" href="colors_and_type.css">

<section style="background: var(--fdb-cream); padding: 5rem 3rem; max-width: 1000px; margin: 0 auto;">
  <div class="fdb-eyebrow">Day One · Leadership Programme</div>
  <h1 class="fdb-display">Leadership<br>in the Age<br>of <strong>AI.</strong></h1>
  <p class="fdb-statement" style="margin-top: 2rem;">
    AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led.
    The question is <strong>not whether to engage.</strong>
  </p>
</section>
```

### Dark-mode block (selective)

```html
<section class="fdb-dark" style="padding: 5rem 3rem;">
  <div class="fdb-section-label">X. Awards · Evening Programme</div>
  <h2 class="fdb-h1" style="margin-top: 1rem;">The industry's most respected recognition.</h2>
</section>
```

### CTA pattern

Square-ish buttons only (`border-radius: 3px`), purple fill on primary, hover swaps to `--fdb-purple-deep`. No scale, no shadow. Label is a verb phrase in sentence case ("Get in touch", never "Submit").

### Wordmark + mark in a header

The horizontal banner lockup (`assets/logos/fdb-banner.png` / `dark/fdb-banner-dark.png`) is the **primary lockup** — use it for headers, footers and document chrome. Use the stacked `fdb-logo-full.png` only when you need a square or near-square frame (posters, cover slides, social grid).

```html
<header style="display: flex; align-items: center; gap: 1rem; padding: 0 3rem; height: 88px; border-bottom: 1px solid var(--fdb-border); background: var(--fdb-cream);">
  <img src="assets/logos/fdb-banner.png" alt="Future Destination Brand." style="height: 38px; width: auto;">
  <span style="font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--fdb-ink-muted); border-left: 1px solid var(--fdb-border-strong); padding-left: 1rem;">Dublin · December 2026</span>
</header>
```

## Substitution policy

- **Geist:** ship the TTFs from `fonts/`. Do not substitute.
- **Icons:** the brand uses very few. Inline stroke SVG matches what's already used; Lucide (`unpkg.com/lucide@latest`) is an acceptable drop-in if more glyphs are needed. **Confirm with the user before adding new icons.**
- **Imagery:** if you don't have a real asset, use a striped placeholder block with a small monospace caption (e.g. *"portrait — chest crop, blue-grey backdrop"*). Never invent illustrative SVG, never use stock-photo gradients.

## When to ask vs. when to ship

Ask before:

- introducing a second hue or alternative typeface,
- adding new imagery, illustrations, icon families,
- writing copy that uses first-person plural ("we"), exclamation marks, or aspirational marketing language,
- producing full-bleed photography or anything that breaks the 1000 px content column.

Ship without asking:

- new pages or slides built from the kit's existing components,
- new copy in the established editorial voice,
- variations that move within the token palette (different purple weight, different ink opacity, dark-mode flip).

## Production code

For real codebases (React / Next.js / Vue / etc.):

1. Lift `colors_and_type.css` directly — its `:root` variables and `.fdb-*` semantic classes work in any framework.
2. Use the `ui_kits/marketing-site/components.jsx` shapes as reference for prop signatures (header, footer, hero, programme rows, callout bar, participants grid, speaker frame, buttons, tags).
3. Copy the Geist TTFs into the consuming app's `public/fonts/` (or framework equivalent) and adjust the `url(...)` paths in the `@font-face` block.
4. Mark the dark treatment opt-in via a `.fdb-dark` class on a container — never on `<html>` by default.

Stay close to the brand book; the constraints are the brand.
