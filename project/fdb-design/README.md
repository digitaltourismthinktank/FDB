# FDB — Future. Destination. Brand. — Design System

> The visual + verbal system for **Future. Destination. Brand. (FDB)**, the
> Digital Tourism Think Tank's invite‑only summit for senior destination
> marketers and national tourism leaders, and its award programme, **X. Awards**.

---

## What is FDB?

**Future. Destination. Brand.** is the Digital Tourism Think Tank's (DTTT)
flagship annual summit. Edition **FDB 2026** takes place in **Dublin, December
2026**, hosted by **Fáilte Ireland** under Ireland's EU Council Presidency
(H2 2026).

It is a two‑day programme:

| Day | Programme |
|---|---|
| Day 1 | **Leadership in the Age of AI** — invite‑only working day for ~30‑40 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format; no stage, no panels. Outputs (a *State of Destination AI Report* and an *Executive Briefing Summary*) are submitted to EU institutions. |
| Day 2 | **The main FDB summit** for destination CMOs and senior marketers, followed in the evening by the **X. Awards**. |
| Award | **X. Awards** — the industry's most respected recognition of destination branding, transformation and digital innovation. A specific moment of the event with its own logo. |

The audience is global, senior, and small. The room is "small by design."

---

## Default & dark mode

**The light (cream) treatment is the default for this brand.** Every component is documented and built against the cream canvas first. The dark mode is a selective alternate — used for evening / X. Awards / contrast moments, not as the everyday surface.

When in doubt, design on cream. Switch to dark only when the context calls for it.

---

## What's in this design system?

```
/
├── README.md                 ← this file
├── SKILL.md                  ← Claude Code skill manifest
├── colors_and_type.css       ← tokens (colors, type, spacing, radii)
├── assets/
│   ├── logos/                ← FDB mark, wordmark, X. Awards lockups
│   └── social/               ← reference Instagram-format frames
├── preview/                  ← Design‑System‑tab preview cards (registered)
├── ui_kits/
│   └── marketing-site/       ← FDB 2026 marketing site UI kit
└── slides/                   ← 16:9 slide templates that match the brand
```

There is **one product surface** in this system: the **FDB marketing site**
(used for the Leadership Day, the main summit, and the X. Awards). The supplied
reference HTML (`Mockup_website_FDB_specific page.txt` / `FDB2026_Leadership_Day_v2-1.html`)
is the canonical implementation we recreated.

### Source materials we worked from

- `uploads/Mockup_website_FDB_specific page.txt` — production HTML mockup of the Leadership Day page (most complete source of truth: tokens, components, copy voice). Also delivered as `FDB2026_Leadership_Day_v2-1.html`.
- `uploads/LogoFuture Destination Brand.png` — full lockup (mark + wordmark)
- `uploads/FDBlogo.png` — wordmark only
- `uploads/Logo-element.png` — the stacked‑square mark on its own
- `uploads/X.Awards 2026 Logo.png` — X. Awards horizontal wordmark
- `uploads/Logo=X. Awards.png` — X. Awards roundel (navy‑purple)
- `uploads/Frame 852/853/855/856/878/879/884/896.png` — Instagram‑format brand frames showing how the system flexes for social

We were **not** given Figma access or a codebase outside the single HTML
mockup. Everything in this system is derived from the mockup + the brand
frames; if a Figma source exists, hook it up and we'll refine.

---

## Content fundamentals

The voice is **editorial, restrained, declarative**. It is not chatty, never
casual, and avoids the corporate "we." It addresses an audience that already
knows the territory.

### Casing
- **Sentence case** for body, page titles, programme titles, button labels.
- **UPPERCASE micro‑labels** with wide tracking for section eyebrows, metadata labels, micro tags ("DAY ONE · LEADERSHIP PROGRAMME", "DATE", "POLICY OUTPUT").
- The product name appears in three accepted forms:
  - **Future. Destination. Brand.** — full, with the trailing period on *Brand.*
  - **Future Destination Brand** — alternative without inner periods (used in compact contexts)
  - **FDB** — initialism for navigation, file names, internal references

### Pronouns / voice
- Almost no first‑person plural ("we"). When the sector is referenced it is named directly: *"the sector,"* *"destinations,"* *"the room."*
- Second person is rare; the page reads like a private memo to a knowledgeable peer.
- Avoid the imperative ("Sign up today!") — replace with state ("Places are by personal invitation only.").

### Tone, examples
- **Declarative, slightly cold.** Example: *"The question is **not whether to engage.** It is whether leadership is ready."*
- **Specific over aspirational.** Example: *"Two concurrent structured sessions of 75 minutes each. Participants are pre‑assigned."*
- **Use the body to qualify, not to dramatise.** A statement of intent, then the constraints. No exclamation marks.
- **Embrace the period.** Short sentences. Periods carry weight in this brand — they are even embedded in the wordmark itself.

### Emphasis
- Inline emphasis is **bold + purple** on a small fragment of the sentence — usually 2–5 words. *"AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is **not whether to engage.**"*
- Never italic for emphasis. Italic is reserved for "TBC" placeholder names and the X. Awards roundel "x." glyph.
- One purple emphasis per paragraph, at most.

### Numerals / dates
- Spell out small numbers in flowing prose ("eight to ten active contributors").
- Use digits for times and ranges in programme schedules ("08:30", "30 to 40 participants").
- Dates: `December 2026`, `Dublin · December 2026`, `H2 2026`. Middle‑dot `·` is the canonical separator.

### Emoji
- **None.** The brand does not use emoji anywhere. Use uppercase labels or the
  stacked‑square mark when a glyph is needed.

### Sample copy lines for reference
- Eyebrow: *"Day One · Leadership Programme"*
- Hero title: *"Leadership in the Age of **AI.**"* — note the purple word, the period, the line breaks
- Statement: *"AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led."*
- Meta label / value: *"FORMAT — Invite‑only · 30 to 40 participants"*
- CTA label: *"Get in touch"* (verb phrase, never "Click here", never "Submit")
- Tag: *"PROVOCATION"*, *"FRAMEWORK"*, *"POLICY OUTPUT"*

---

## Visual foundations

### Palette

A two‑family palette: **warm neutral** (cream + greyscale ink) and a **single confident purple** in four steps.

| Token | Hex | Role |
|---|---|---|
| `--fdb-cream` | `#F5F0E9` | The canvas. Used on ~95% of surfaces. |
| `--fdb-cream-deep` | `#E6E2DA` | Slightly darker block fill, very rare. |
| `--fdb-white` | `#FFFFFF` | Inverse text on purple; near‑white card fills. |
| `--fdb-ink` | `#1A1A1A` | Headlines, primary text. |
| `--fdb-ink-mid` | `#3A3A3A` | Body. |
| `--fdb-ink-muted` | `#7A7A7A` | Captions, secondary text. |
| `--fdb-ink-faint` | `#B0B0B0` | Labels, dividers, "TBC" italics. |
| `--fdb-purple` | `#8239C1` | **The brand.** Wordmark accent, CTAs, emphasis, callout blocks. |
| `--fdb-purple-deep` | `#5B1FBF` | Hover/pressed; X. Awards type. |
| `--fdb-purple-mid` | `#9B6FE0` | Middle square of the stacked mark. |
| `--fdb-purple-soft` | `#C9AAEE` | Light square / chip borders / decorative outlines. |
| `--fdb-purple-tint` | `#EDE5F8` | Tinted chip backgrounds, large fills. |

**Never** introduce a second hue. Greens, blues, oranges are off‑limits. If you
need to differentiate, change *weight* of the purple or *opacity* of ink.

### Typography

- **One typeface: Geist** (weights 100, 200, 300, 400, 500, 600, 700, 800, 900).
- Loaded **locally** from `fonts/` via `@font-face` in `colors_and_type.css`. The source mockup originally used Inter; Geist replaces that with the brand's official cut.
- The brand reaches for **800** ("Black") for hero titles and key emphasis, and **400/500** for body. **Headings have very tight tracking** (`-0.03em`) and **near‑1.0 line‑height** — they wrap deliberately into 3–4 short lines.
- **Micro‑labels are uppercase Geist 700** with `0.10em–0.14em` tracking — they do an enormous amount of structural work and must always be set this way.

See `colors_and_type.css` for the full scale.

### Spacing & layout
- **Page max‑width: 1000 px**, centred. The system is built for editorial reading width, not full‑bleed.
- **Generous vertical rhythm.** Hero padding `5rem 3rem 4.5rem`; section labels add `2.5rem` of breathing room above their content.
- **Spacing scale** based on 4/8: `4, 8, 12, 16, 24, 32, 48, 64, 96` (see CSS vars). Most cards use `1rem–2rem` padding; the canvas itself does the heavy lifting on whitespace.
- **Twelve‑column thinking, two‑column delivery.** Most layouts are simple 1‑col or 50/50 splits with a generous gutter (`2rem–4rem`).

### Backgrounds
- **Always cream.** No gradients, no patterns, no textures, no full‑bleed photography on the page chrome. Imagery is **contained inside cards or photo frames** — never bled.
- The **stacked‑square outline motif** is the only decorative pattern. It appears at three scales (logo, hero mark, large decorative outlines drifting off the page edge) and three opacities (deep, mid, soft).
- Solid **purple callout bars** (`--fdb-purple` fill, white text) provide rare punctuation — used for policy/value summaries, never for hero blocks.

### Imagery
- **Portraits**: clean studio shots on a desaturated blue‑grey backdrop, framed inside a **purple‑outlined rectangle** with a decorative offset frame behind it.
- **Location shots**: cool, slightly desaturated, daylight or magic‑hour. Light purple cast on neutrals. Never warm/golden.
- **No grain, no duotone, no b&w treatments.** No round photos.
- **Aspect ratio** for portraits: tall rectangle (~4:5 or 5:7). Cropped at the chest.

### Borders & corners
- **Small radii.** `2px` for pills/tags, `3–4px` for buttons and cards, `6px` for the mark itself. **No fully‑rounded shapes** anywhere — including buttons (no `border-radius: 999px`). The X. Awards roundel is the only circle in the system.
- **Borders**: hairline `1px` at `rgba(26,26,26,0.1)` for dividers and card outlines; `rgba(26,26,26,0.18)` for stronger separation. Purple outlines (`--fdb-purple-soft`) on decorative frames only.
- Cards have a border **or** a faint background tint, never both.

### Shadows
- **Almost none.** The brand is intentionally flat — no drop shadows on cards, no inner shadows on inputs.
- The only acceptable shadow is the optional `--fdb-shadow-2` on a floating modal or pop‑over (`0 6px 24px -8px rgba(26,26,26,0.12)`).

### Hover & press
- **Hover (links/buttons)**: switch from `--fdb-ink-muted` to `--fdb-purple`; underline border colour swaps to match. **No opacity changes.**
- **Hover (primary button)**: background shifts from `--fdb-purple` → `--fdb-purple-deep`. No scale, no shadow.
- **Press**: nothing. The brand does not animate press states.
- **Transitions**: `0.15s` ease on color/border properties only. No transforms.

### Animation
- **Minimal.** Smooth scroll, color transitions on hover, that's it.
- No bouncy easings, no entrance animations, no parallax. The brand is still.

### Transparency & blur
- Used sparingly. White‑on‑purple text sits at 0.88 opacity on the purple callout to soften contrast against the deep fill. `backdrop-filter: blur(...)` is **not** used.
- Card backgrounds inside dense grids may use `rgba(255,255,255,0.6)` over cream for subtle layering.

### Fixed elements & layout rules
- The header is **sticky** (`position: sticky; top: 0`), 60 px tall, on cream with a single 1px ink‑border bottom.
- Footer is a simple end‑of‑page bar — never fixed.
- No floating action buttons. No bottom navs. No sidebars on the marketing site.

---

## Iconography

The brand uses **very few icons.** What it does use:

1. **The stacked‑square mark** — appears at three scales:
   - 20 px next to the wordmark in the footer
   - 30 px next to the wordmark in the header
   - 120–140 px as a hero decoration
   - 200+ px as decorative outlines bleeding off the page in social frames

   Provided in this kit as:
   - `assets/logos/fdb-mark.svg` (140 × 140, 2 px stroke — hero scale)
   - `assets/logos/fdb-mark-sm.svg` (30 × 30, 1.5 px stroke — header scale)
   - `assets/logos/fdb-mark.png` (raster fallback)

2. **The X. Awards mark** — the FDB stacked-square frame with an italic *"x."* glyph inside, accompanied by a bold *"Awards"* wordmark. Uses the brand purple, **not** a separate hue. Used only for the X. Awards moment.

3. **Functional UI glyphs** — stroke‑style line icons drawn inline as SVG: chat bubble for "Get in touch", arrow chevrons for navigation, small speaker dots (filled circles, 6 px). Stroke weight `2`–`2.5`. Sourced from Feather Icons.

4. **No icon font is in use.** No Material, no Phosphor, no FontAwesome. Where additional UI glyphs are needed, we substitute **Lucide** (`lucide-icons`) loaded via CDN. Lucide matches the stroke‑style, `2 px` weight, slightly rounded corners of the existing inline SVGs and is a clean drop‑in. **This is a substitution — please confirm the brand has a preferred icon library.**

5. **No emoji. No unicode pictograms.** A middle dot `·` (U+00B7) is the canonical separator. Use it freely.

CDN for Lucide if you need it:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

---

## Font availability & substitutions

| Asset | Status |
|---|---|
| **Geist** (100–900) | ✅ Brand font, supplied as TTF in `fonts/`. Loaded via `@font-face` in `colors_and_type.css`. |
| ~~Inter~~ | ⛔ Previously used as a substitute in the source mockup; **replaced by Geist**. |
| Icon library | Substitution: **Lucide** (CDN) approximates the existing inline SVG style. Please confirm. |

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">

<header style="background: var(--fdb-cream); padding: 0 3rem;">
  <img src="assets/logos/fdb-mark-sm.svg" width="30" height="30" alt="">
  <span class="fdb-wordmark">Future Destination <span class="accent">Brand.</span></span>
</header>

<section style="padding: 5rem 3rem;">
  <div class="fdb-eyebrow">Day One · Leadership Programme</div>
  <h1 class="fdb-display">Leadership<br>in the Age<br>of <strong>AI.</strong></h1>
</section>
```

---

## Index — go here next

- 🎨 [`colors_and_type.css`](./colors_and_type.css) — every design token, ready to import.
- 📐 [`preview/`](./preview/) — the cards rendered into the **Design System** tab. Open this folder to see every foundation rendered.
- 🖥️ [`ui_kits/marketing-site/`](./ui_kits/marketing-site/) — the FDB 2026 marketing site UI kit. Start at `index.html`.
- 🖼️ [`slides/`](./slides/) — 16:9 slide templates (title, statement, stat, agenda, speaker, awards moment, closing).
- 🧰 [`SKILL.md`](./SKILL.md) — Claude Code skill manifest. Drop this folder into `.claude/skills/fdb-design/` to use it from Claude Code.
- 🖼️ [`assets/logos/`](./assets/logos/) — raster + vector marks and X. Awards lockups.
- 📷 [`assets/social/`](./assets/social/) — supplied reference brand frames (Instagram aspect).
