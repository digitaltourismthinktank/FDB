# Marketing site UI kit — FDB 2026

A faithful recreation of the FDB 2026 marketing site, derived from the
`Mockup_website_FDB_specific page` HTML in the project uploads. Four
click-through screens, one shared component library.

## Run it

Open `index.html` in a browser. There are no build steps — components are
loaded as inline JSX via Babel.

## Screens

| Path | Page | What it shows |
|---|---|---|
| `/` | `OverviewPage` | Landing page for FDB 2026 — hero, two-day pitch cards, by-the-numbers, hosts. |
| `/leadership` | `LeadershipPage` | **The canonical recreation** of the source HTML. Day 1, Leadership in the Age of AI. |
| `/summit` | `SummitPage` | Day 2 main summit, speaker portrait grid using the brand frame motif. |
| `/awards` | `AwardsPage` | X. Awards sub-brand: badge, categories grid, key dates. |

Navigate by clicking the header links or the day cards on the overview.

## Component library — `components.jsx`

| Component | Purpose |
|---|---|
| `<Mark size />` `<MarkLarge />` | Stacked-square brand mark, three shades of purple. |
| `<Wordmark />` | "Future Destination Brand." inline wordmark. |
| `<Header />` `<Footer />` | Page chrome — sticky header with nav + pill, end-of-page footer. |
| `<Eyebrow />` `<SectionLabel />` | Two uppercase micro-label variants — eyebrow (purple, hero) and section label (faint, body). |
| `<Statement />` `<BodyText />` `<Accent />` | Editorial body type. `<Accent>` is the purple inline emphasis. |
| `<Button variant="primary\|outline\|ghost" icon />` | All three button treatments. |
| `<Tag variant="fill\|outline\|dark" />` `<Pill />` | Uppercase chips. |
| `<MetaRow label value />` | Hero metadata row (DATE · LOCATION · FORMAT). |
| `<ProgrammeRow time title desc tags speakers />` | A single row in the day's programme. Optional children for embedded session cards. |
| `<SessionCard label title desc />` | A bordered card inside a programme row. |
| `<PolicyBar items />` | The purple three-up callout. |
| `<ParticipantsGrid cells />` | Hairline-divided participant grid with TBC italics + tinted span row. |
| `<OutputItem name desc />` | A purple-top-rule output block. |
| `<SpeakerFrame src name org role color />` | Portrait inside the purple frame + offset outlines motif. |

## Tokens

Everything pulls from `../../colors_and_type.css` at the project root. The kit
makes no new tokens.

## Caveats

- **No real photography.** The speaker grid uses solid-colour placeholders with
  a generic silhouette where headshots would go. Drop real images in via the
  `src` prop of `<SpeakerFrame>`.
- **No host logos.** The "Hosted by" row on the overview uses generic
  placeholder marks. Fáilte Ireland / DTTT / Irish Presidency wordmarks should
  replace these when supplied.
- **One product surface.** This kit covers the marketing site only. If FDB has
  a delegate portal, ticketing flow, or report-distribution app, those are
  additional surfaces we have not modelled.
