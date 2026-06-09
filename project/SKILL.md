---
name: fdb-design
description: Use this skill to generate well-branded interfaces and assets for Future. Destination. Brand. (FDB) — the Digital Tourism Think Tank's senior tourism leadership summit and the X. Awards. Contains essential design guidelines, colors, type, fonts, assets, slide templates and a marketing-site UI kit for prototyping.
user-invocable: true
---

# FDB Design — Future. Destination. Brand.

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Where to find things

- `README.md` — the full brand book: content fundamentals, visual foundations, iconography, palette and type tokens.
- `colors_and_type.css` — drop-in CSS variables + semantic type classes. **Import this first** in any artifact.
- `assets/logos/` — FDB mark (PNG + SVG), full lockup, wordmark only, X. Awards horizontal + roundel.
- `assets/social/` — reference Instagram-format brand frames showing how the visual language flexes.
- `ui_kits/marketing-site/` — full click-through React JSX UI kit. `components.jsx` exports every shared component used across the FDB marketing site (header, footer, hero, programme rows, callout bar, participants grid, speaker frame, buttons, tags). `pages.jsx` shows them composed into four pages. **Start here when building a new page.**
- `slides/` — 16:9 slide templates (cover, statement, stat, agenda, speaker, section divider, X. Awards moment, closing). Built on `deck-stage.js`; static HTML, easy to fork.
- `preview/` — small specimen cards used to populate the Design System review tab.

## Cheat-sheet

- **Light (cream) is the default treatment.** Dark mode (`.fdb-dark`) is an opt-in alternate, not the everyday surface.
- **One typeface: Geist** (loaded locally via @font-face, weights 300–900).
- **Two color families: cream + ink** for 95% of surfaces; **purple `#8239C1`** for the brand. No other hues.
- **Editorial voice.** Short declarative sentences, periods carry weight, **bold + purple** for inline emphasis (one fragment per paragraph, max).
- **UPPERCASE micro-labels** with `0.10em–0.14em` tracking do enormous structural work. Eyebrows are purple; section labels are ink-faint.
- **Small radii** (2–6px). **No fully rounded shapes** anywhere. The X. Awards roundel is the only circle.
- **No emoji. No gradients. No drop shadows.** Almost no animation.
- **Hero titles**: Geist 800 (ExtraBold), tight tracking (`-0.03em`), near-1.0 line-height, wrap into 3–4 short lines.

## Quick start (single-file artifact)

```html
<link rel="stylesheet" href="/path/to/colors_and_type.css">

<div style="background: var(--fdb-cream); padding: 5rem 3rem;">
  <div class="fdb-eyebrow">Day One · Leadership Programme</div>
  <h1 class="fdb-display">Leadership<br>in the Age<br>of <strong>AI.</strong></h1>
</div>
```

For richer compositions, copy components out of `ui_kits/marketing-site/components.jsx` rather than rebuilding from primitives.
