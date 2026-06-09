# Event Site Design

_Started 2026-06-09 12:10 UTC_

---

## User

I've been working in Claude Chat to build the whole Future. Destination. Brand site, but the design wasn't consistent so I've decided it's best to prompt here and get you to build the entire event site design in Claude Design. Please see the attached prompt.

## Assistant

_[tool: read_file]_

_[tool: list_files]_

I'll start by reading the design brief you've attached.

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

This is a rich project with an existing design system. Let me explore what's already here before planning.

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

Strong, well-documented system. Let me read the tokens, the existing marketing site, and the UI kit components.

_[tool: read_file]_

_[tool: read_file]_

Let me look at the existing marketing site build and the UI kit components — this is my structural reference.

_[tool: read_file]_

_[tool: read_file]_

The FDB Marketing Site.html is a 2MB bundle. Let me read the pages composition and the kit's entry point.

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

I have a strong grasp of the system. Let me look at the actual brand visuals — the logos and social frames — to understand the visual flex.

_[tool: list_files]_

_[tool: view_image]_

_[tool: view_image]_

Let me check the dark assets and a couple more brand frames to understand the dark treatment and motif flex.

_[tool: questions_v2]_

This is an exceptionally complete brief, and the design system is mature and well-documented. I understand the brand deeply now: cream canvas, single confident purple in five weights, Geist throughout, the stacked-square motif, the editorial voice, the X. Awards sub-brand with its italic *x.* glyph, and a selective dark treatment.

Before I build, I want to lock a few genuinely open decisions. The brief tells me *what the design must do* but deliberately leaves the *how* to this phase — so these matter.

## User

Questions answered:
- pages: Home / Overview (the arc), Day One · Leadership in the Age of AI, EU AI Act companion (15-question readiness tool), X. Awards (Day One evening), Day Two · The Keynote Programme, Day Three · The Trends Workstream, Registration
- delivery: One connected click-through site — every page linked, navigable like the real thing
- differentiation: Pronounced — each day has a distinct layout rhythm, motif behaviour and register
- motif_journey: Yes — make the motif a wayfinding system that visibly progresses across the arc
- imagery: Speaker/participant portraits in the purple-outlined frame (placeholders for now)
- awards_dark: Keep it cream like the rest
- registration: We'll embed / integrate a type form based registration which will load intelligently depending on whether the user is logged in or not. Members should be prompted to log-in first (memberstack / webflow) where they'll then be able to register for free.
- council_outputs: Decide for me
- dttt_portfolio: Leave it out of this phase
- anything_else: X. Design Week (Accessible in the overall Claude account) gives a reference for how the ticketing part should be handled. The approach, principle etc. should be the same (https://www.thinkdigital.travel/x-design-week) whilst when we build it in webflow we will eventually pull in speaker details from the Webflow CMS as we did there. We've build this already in a separate claude project.

## User

Questions answered:
- pages: Home / Overview (the arc), Day One · Leadership in the Age of AI, EU AI Act companion (15-question readiness tool), X. Awards (Day One evening), Day Two · The Keynote Programme, Day Three · The Trends Workstream, Registration
- delivery: One connected click-through site — every page linked, navigable like the real thing
- differentiation: Pronounced — each day has a distinct layout rhythm, motif behaviour and register
- motif_journey: Yes — make the motif a wayfinding system that visibly progresses across the arc
- imagery: Speaker/participant portraits in the purple-outlined frame (placeholders for now)
- awards_dark: Keep it cream like the rest
- registration: We'll embed / integrate a type form based registration which will load intelligently depending on whether the user is logged in or not. Members should be prompted to log-in first (memberstack / webflow) where they'll then be able to register for free.
- council_outputs: Decide for me
- dttt_portfolio: Leave it out of this phase
- anything_else: X. Design Week (Accessible in the overall Claude account) gives a reference for how the ticketing part should be handled. The approach, principle etc. should be the same (https://www.thinkdigital.travel/x-design-week) whilst when we build it in webflow we will eventually pull in speaker details from the Webflow CMS as we did there. We've build this already in a separate claude project.

## Assistant

_[tool: snip]_

_[tool: update_todos]_

Excellent — that's everything I need. The brief and system are crystal clear, and your answers lock the approach. Let me capture the key decisions and get building.

**What I'm building:** one connected click-through site, 7 surfaces, with each day in a *pronounced* but unified register, and the stacked-square motif working as a visible wayfinding system across the arc.

_[tool: copy_files]_

_[tool: list_files]_

Let me scaffold the folder and copy the assets I'll need.

_[tool: write_file]_

Good. Now I'll build the foundation. Let me write the shell, base styles, and the shared component library — including the journey-rail wayfinding system and the per-day motif states that are central to this brief.

_[tool: write_file]_

_[tool: write_file]_

Now the core component library — the header, footer, type primitives, and shared UI. This is the foundation every page builds on.

_[tool: str_replace_edit]_

Now let me fix the index.html inline script to pull `NavContext` from window (it's a `const`, not auto-global).

_[tool: write_file]_

Now the heart of the brief — the motif system. Each day gets a distinct motif *state* (nested/private → locked/ceremonial → spread/public → dispersed/generative), and a journey rail makes the arc legible as wayfinding.

_[tool: str_replace_edit]_

Let me refine the journey rail to support a "map mode" for the overview (all stations lit), then build the Overview page.

_[tool: str_replace_edit]_

_[tool: write_file]_

Now the Overview page — the arc, with the journey rail as its centrepiece.

_[tool: run_script]_

Let me create lightweight stubs for the remaining pages so I can verify the foundation renders before building each out fully.

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

The header renders but the body is blank and the nav is missing the arc links. Let me check the console.

_[tool: eval_js]_

No errors. The nav is missing labels (ARC items use `short`, not `label`) — but the blank body is more concerning. Let me inspect the live DOM.

_[tool: str_replace_edit]_

Content is rendering fine (61KB) — the screenshot just captured early. The real bug is the empty nav labels. Let me fix that.

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: eval_js]_

The hero is strong and on-brand — the motif bleeds beautifully off the edge and the nav is complete. Let me verify the journey rail and lower sections render correctly.

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

My preview iframe auto-sizes to content so it won't scroll. Let me zoom out to capture lower sections for a quick check.

_[tool: save_screenshot]_

_[tool: eval_js]_

Let me see further down — the journey rail and moments — and verify the Fáilte Ireland logo loads.

_[tool: eval_js]_

All images load. Let me eyeball the journey rail — the centrepiece.

_[tool: save_screenshot]_

_[tool: eval_js]_

The Fáilte Ireland logo loads in full colour, as required. My iframe won't scroll (it auto-sizes), so I'll lean on the verifier for full-page review at the end. Let me reset and confirm the rail rendered, then move on to building the day pages.

_[tool: update_todos]_

Foundation is solid — journey rail renders with all four stations. Let me mark progress and add the shared programme components, then build Day One.

_[tool: str_replace_edit]_

Let me add the shared programme components and a flexible day-hero to the component library.

_[tool: str_replace_edit]_

_[tool: write_file]_

Now the Day One · Leadership page — the private, considered register with the Council formation and published outputs treated as designed objects.

_[tool: eval_js]_

_[tool: show_html]_

The iframe still has the old stub cached. Let me reload and check.

_[tool: eval_js]_

_[tool: save_screenshot]_

Day One renders. Let me capture the hero with its journey rail.

_[tool: save_screenshot]_

_[tool: update_todos]_

The DOM confirms Day One renders correctly (124KB, journey rail + hero + Council all present). My iframe's blank-capture issue is a known quirk — I'll rely on DOM checks while building and do full visual QA via the verifier at the end (it has a working iframe). This keeps things moving.

Now the EU AI Act companion — an interactive 15-question readiness tool, tonally aligned to Day One.

_[tool: write_file]_

_[tool: write_file]_

Now the X. Awards — the sub-brand pivot. Cream, as you asked, but unmistakably its own moment with the canonical lockup and roundel.

_[tool: str_replace_edit]_

Let me fix that broken scroll handler on the Awards hero.

_[tool: write_file]_

Now Day Two — the public, paced keynote programme. Six themes as structural rhythm, the transatlantic fireside as a featured moment, and a close that reconnects to the Council.

_[tool: write_file]_

Now Day Three — the generative close. The lightest, most open register, with the eight trend tables and a forward-looking method that carries through 2027.

_[tool: write_file]_

Finally, the registration page — member-gated, by-day routing, with the Typeform/Webflow-style embed that loads intelligently by auth state (mirroring the X. Design Week principle you referenced).

_[tool: show_html]_

All seven pages are built. Let me reload and run through every page checking for errors.

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: get_webview_logs]_

All seven pages render with no broken images. Let me confirm the console is clean.

_[tool: eval_js]_

Clean. Let me verify the two interactive pieces work — the AI Act assessment scoring and the registration sign-in flow.

_[tool: eval_js]_

The assessment works — 15 answers → 30/30 → "Leadership-ready" band revealed. Now the registration flow.

_[tool: grep]_

Both interactive flows work end-to-end. Let me check for any stray em dashes (a brand non-negotiable) before finishing.

_[tool: read_file]_

Only one em dash is in visible copy — the rest are code comments. Let me fix that one line in Day One.

_[tool: str_replace_edit]_

_[tool: update_todos]_

All built and functional, copy is clean. Let me mark complete and hand off.

_[tool: done]_

_[tool: fork_verifier_agent]_

The FDB 2026 event site is built and live — a single connected click-through prototype across all seven surfaces.

**What's there**
- **Overview** — the arc, with the journey rail as centrepiece, four moments as an editorial list, by-the-numbers, and the "what makes it different" principles.
- **Day One · Leadership** — a private, restrained register; the Council formation rendered as a charter plate; the four published outputs (Declaration, Code, Report, Briefing) as designed document objects.
- **EU AI Act companion** — a working 15-question readiness assessment that scores live and reveals a readiness band.
- **X. Awards** — the sub-brand pivot using the canonical lockup and roundel unaltered, eight categories, the human-only judging process, and the published reasoning note as a designed object.
- **Day Two · Keynotes** — six themes, the transatlantic fireside as a featured moment, speaker portraits, a paced schedule that closes by reconnecting to the Council.
- **Day Three · Workstream** — the lightest, most open register; eight live trend tables; a forward method carrying through 2027; "your name on the work" credit.
- **Registration** — member-gated per the X. Design Week principle: sign-in → by-day form (Typeform/Webflow CMS embed mock) → confirmation, with a prototype toggle to view both auth states.

**The central brief moves**
- The **stacked-square motif works as wayfinding** — four states (nested → locked → spread → dispersed) that make position in the journey felt, tied together by the journey rail.
- Each day reads distinctly (layout rhythm, motif behaviour, accent weight, whitespace) while staying inside the one cream-and-purple Geist system.

Everything loads clean, both interactive flows verified working, no broken assets, and the one stray em dash has been removed. A verifier is doing a full visual pass in the background.

Two notes: portraits are placeholders in the brand's purple-outlined frame, ready for real photography; and the registration embed is mocked to show the intended member-gated behaviour rather than a live Typeform. Tell me if you'd like me to adjust the per-day differentiation dial, or wire any real endpoints.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

The verifier caught a real one: the header row overflows below ~1030px and clips the Register button. Let me make the header responsive with classes + media queries.

_[tool: str_replace_edit]_

Now the media queries in fdb.css:

_[tool: str_replace_edit]_

_[tool: show_html]_

Let me verify the overflow is gone at the default viewport.

_[tool: eval_js]_

_[tool: get_webview_logs]_

Fixed cleanly — at 924px there's no horizontal scroll, the Register CTA is fully visible, all five nav links still show, and only the decorative date meta drops out. Let me confirm the console and re-verify.

_[tool: done]_

_[tool: fork_verifier_agent]_

Header overflow is fixed — no horizontal scrollbar, the Register CTA stays fully visible, and the nav degrades gracefully as the viewport narrows (date meta drops first, then the inline links below 860px). Console is clean and a full verifier sweep is running in the background.

The FDB 2026 site is complete: seven connected pages, each day in its own register, the stacked-square motif working as a wayfinding system across the arc, and both interactive pieces (the AI Act readiness tool and the member-gated registration) verified working. Let me know what you'd like to refine next.

## User

I don't like the logo motif here going off the frame and would think a cleaner design would see it comfortably within the frame and similarly aligned to the main hero message.

I also think this section should include a clear framing of the event, with an event by Digital Tourism Think Tank and the Digital Tourism Think Tank logo as well as Host Partner Fáilte Ireland with their logo.

We should also consider whether this headline message is right or if simply the event brand should be the primary focus.

Lastly-  a problem throughout the site is the framing.

It is:

1. A C-Level Meeting 'Leadership in the Age of AI' this part is invite only.

2. A Keynote Day with talks from leading destinations etc.

3. 2027 Trends Workstream Day

4. X. Awards, which is held on the first evening.

## Assistant

_[tool: list_files]_

_[tool: grep]_

You're right on all counts — especially the framing. Let me check what brand assets I have to work with before redesigning the hero.

_[tool: view_image]_

_[tool: view_image]_

_[tool: snip]_

No DTTT logo file exists — so I'll render "Digital Tourism Think Tank" as a clean typographic credit. Let me look at the full FDB lockup to decide the hero treatment.

_[tool: read_file]_

Now I understand the assets. The full lockup (mark + "Future Destination Brand.") is the brand's primary expression. Your instinct is right — let me lead with the event brand, contain the motif, add the credit framing (DTTT as event owner, Fáilte Ireland as host partner), and make the four-part structure explicit. Let me re-read the current overview.

_[tool: grep]_

Let me check the wordmark class so I can compose the lockup crisply.

_[tool: str_replace_edit]_

I have everything I need. No DTTT logo exists, so I'll render it as a clean typographic credit. Here's my plan for the hero and the framing fix:

- **Lead with the event brand** — the "Future Destination Brand." wordmark becomes the hero, not the "Three days/Three rooms" line.
- **Contain the motif** — a large motif sits comfortably *within* the frame on the right, vertically aligned to the hero message (no more bleeding off-edge).
- **Clear event framing** — "An event by Digital Tourism Think Tank" + "Host Partner: Fáilte Ireland" with its logo.
- **Fix the framing throughout** — make the four parts explicit and accurate, in your conceptual order (Leadership Meeting → Keynote Day → Trends Workstream → X. Awards on the first evening).

Let me rewrite the hero and the four-parts section.

_[tool: str_replace_edit]_

Now update `MomentRow` to show the part number and the sub-line.

_[tool: str_replace_edit]_

_[tool: show_html]_

Now add responsive handling for the new hero grid so the motif stacks gracefully on narrow viewports.

_[tool: show_html]_

_[tool: view_image]_

_[tool: eval_js]_

Much cleaner — the brand leads, the motif is contained and aligned. But the Fáilte Ireland logo isn't visible in the Host Partner slot. Let me check that asset.

_[tool: str_replace_edit]_

The Fáilte logo is loading — it's just small (64×24) in the credit strip. Since the host partner deserves prominence in the hero, let me make `HostPartner` scalable and bump it up there.

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: eval_js]_

The logo loads in the DOM but isn't appearing in the capture. Let me inspect its actual rendered state.

_[tool: eval_js]_

The logo is actually there — 91×34, fully visible at the right position. The screenshot capture tool just isn't painting that particular PNG (a known quirk); it renders fine in a real browser. Let me verify the four-parts section and overall page integrity.

_[tool: done]_

Everything checks out — the four parts render in exactly your framing (Leadership Meeting → Keynote Day → Trends Workstream → X. Awards on the first evening), the old "Three rooms" headline is gone, the brand wordmark leads, and there's no overflow. Let me hand off.

_[tool: fork_verifier_agent]_

All four points are addressed. Here's what changed on the Overview hero:

1. **Event brand leads** — the "Future Destination Brand." wordmark is now the hero, with "Brand." in the signature purple. The old "Three days. Three rooms." headline is gone, replaced by a concise descriptor.
2. **Motif contained** — the stacked-square motif now sits comfortably *within* the frame on the right, vertically aligned to the hero message, no longer bleeding off the edge.
3. **Clear event framing** — a credit strip reads "An event by Digital Tourism Think Tank" with the Fáilte Ireland logo under "Host Partner," plus the EU Presidency line. (No DTTT logo exists in the asset set, so it's set as a clean typographic credit — if you have a DTTT logo file, drop it in and I'll place it.)
4. **Framing fixed** — a new "The event, in four parts" section spells out the structure exactly as you described: **The Leadership Meeting** (Leadership in the Age of AI, invite only) → **The Keynote Day** → **The Trends Workstream** (2027) → **X. Awards** (held on the evening of Day One). An "Across three days" timeline follows for chronological wayfinding.

A verifier is confirming the motif stays in-frame and the Fáilte logo paints in a real browser. 

One thing to flag: your note about framing applies "throughout the site." I've corrected the home page; the inner pages already use accurate per-day framing, but if you'd like the "four parts" language and part numbers carried consistently into the day-page heroes too, I can roll that through. Want me to?

## User

No issues found

## Assistant

The verifier confirmed the hero redesign is clean — the brand wordmark leads, the motif stays in-frame, the Fáilte logo paints, and the four-part framing reads in your exact order.

_[tool: snip]_

The Overview hero is done and verified. The offer still stands: I corrected the framing on the home page, and I can carry the "four parts" language and part numbering consistently into the day-page heroes too if you'd like that throughline across the whole site. Just say the word — otherwise, what's next?

## User

I don't see any changes

## Assistant

_[tool: show_to_user]_

You're looking at **FDB Marketing Site.html** — the older single-file build. I built the new site (and made all these changes) in a separate, cleaner multi-page version at **site/index.html**. Let me open it for you now.

That's the disconnect — you were viewing `FDB Marketing Site.html`, the original single-file build from before. Everything I've built this session lives in **`site/index.html`**, which I've just opened in your tab.

It's the full seven-page connected site: Overview (with the redesigned brand-led hero, contained motif, DTTT/Fáilte credits, and the four-part framing), Day One · Leadership, the EU AI Act readiness tool, X. Awards, Day Two · Keynotes, Day Three · Workstream, and Registration. Navigate via the top nav or the journey rail.

Want me to delete or archive the old `FDB Marketing Site.html` so there's no confusion about which is the live design?

## User

I like this a lot, can you do some other variations of the programme component icons? We're happy with X. Awards especially when its framed inside the icon, the council seems good but we're unsure if day 2 and 3 represent the topics perfectly.

## Assistant

## Assistant

_[tool: snip]_

_[tool: read_file]_

_[tool: read_file]_

Got it — you want to push on the Day 2 and Day 3 marks specifically, keeping Council and the framed Awards as the anchors you're happy with. Let me read the current states (done) and build you a side-by-side exploration so you can compare options in context — at hero scale, at rail/icon scale, and framed (the treatment you liked on Awards).

Let me think about what each day actually *means*, then design candidates around that:

- **Day 2 · Keynote Day** — a programme of back-to-back talks from leading destinations. It's about *sequence, cadence, a stage, voices in turn.* The current "even row" reads as generic.
- **Day 3 · Trends Workstream** — members building the 2027 report together across eight tables. It's about *convergence, assembly, contribution, writing the future.* The current "drift up-and-out" reads as dispersal, which is arguably the opposite of building-together.

Let me build the comparison.Now let me build the comparison page with rotation-capable rendering.

_[tool: write_file]_

_[tool: show_html]_

The header and approved anchors render well. Let me capture the Day 2 and Day 3 variant grids further down.

_[tool: eval_js]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Day 2 variants look strong — Cadence, Stage, and Sequence all read clearly. Let me capture Day 3.

_[tool: eval_js]_

_[tool: done]_

All eight candidates render cleanly at every scale. Let me reset and hand it over.I've opened **Motif Variations.html** for you — a side-by-side comparison so you can judge each option large, at rail/icon size, and framed (the Awards treatment you liked).

Council and the framed X. Awards sit at the top as the approved anchors. Then:

**Day 2 · The Keynote Day** — should read as *sequence / cadence / stage*:
- **Even row** (current) — flat, the first two squares collide a bit; this is the one you're unsure about.
- **Cadence** — a stair-step rising across a baseline; the rhythm of a programme building through the day.
- **Stage** — one focal square flanked by two; the most literal "talks on a stage" read.
- **Sequence** — overlapping cards front-to-back; back-to-back sessions, and it rhymes with the Awards offset.

**Day 3 · The Trends Workstream** — should read as *assembly / convergence / contribution*:
- **Drift** (current) — scatters up and out; reads as dispersal, arguably the opposite of building together.
- **Ascent** — three squares forming an upward point; convergence on a shared output, forward but *together*.
- **Assembly** — three of a four-square grid with one space left open; a table being built, room to contribute — ties neatly to the "your name here" card on that page.
- **Bloom** — one square rotating open in three steps; generative, the most dynamic.

My recommendations: **Sequence** for Day 2 (clear meaning, and it harmonises with the Awards lockup you love) and **Assembly** for Day 3 (it captures "building the report together" and pays off the contributor moment). **Cadence** + **Ascent** are the safer, quieter pair if you want less visual weight.

Tell me which you'd like for each — or mix and match — and I'll wire them into the live site (journey rail, heroes, and the day cards) and refresh.

## User

Now that you've done this, could I ask you to develop variations for X. Awards and the leadership day? Whilst I like them, I feel that X. Awards we should keep as it is but the small logo should perhaps consider different versions including incorporating the italic x and the leadership day is maybe worth considering alternatives too.

## Assistant

_[tool: snip]_

_[tool: view_image]_

_[tool: view_image]_

I'll keep X. Awards' arrangement as-is and explore alternate *small marks* (including the italic **x.**), plus alternatives for the Leadership/Council mark. Let me look at the X. Awards assets to work from the real glyph.

_[tool: write_file]_

That's the key insight — the X. Awards **small mark** in the rail and lists is currently *just the three squares*, with no **x.** glyph (the glyph only appears as the full lockup image on the Awards page). So the exploration is: how to bring that calligraphic italic **x.** into the small square mark so it reads as Awards even at icon size. And separately, alternatives for the Council/Leadership mark. Let me build a second comparison.

_[tool: show_html]_

The reference row reads clearly — the real lockup PNG next to the current glyph-less small mark. Let me capture the Awards options grid.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Awards options render beautifully — the **x.** integrates cleanly, and Single frame / Glyph core hold up at rail size. Let me capture the full Council row.All four Council options read clearly. Let me reset zoom and hand off.

_[tool: eval_js]_

_[tool: done]_

I've opened **Motif Variations — Awards & Leadership.html**. At the top is the reference row: the real lockup glyph beside the *current* glyph-less small mark — which makes the problem obvious (at icon size, Awards is indistinguishable from the other days).

**X. Awards · small mark** (arrangement kept, glyph brought in):
- **Lockup** (current arrangement) — faithful three-square cascade with **x.** in the front frame; true to brand, but the glyph crowds at tiny sizes.
- **Single frame** — one bold square holds the **x.**, a single ghost square behind. The most legible; your favicon/avatar workhorse.
- **Glyph core** — two concentric frames with the **x.** as the core; visually rhymes Awards with Council — one family, one evening.
- **Brackets** — the **x.** held between two diagonal squares; airy, modern, most room for the glyph.

**Day One · Leadership / Council:**
- **Nested** (current) — concentric, drawing inward.
- **Around the table** — three squares seated around an open centre; a boardroom convened — the most literal read.
- **The dossier** — a tight cascade like stacked papers; evokes the Declaration/Code the room produces.
- **Keystone** — concentric frames around one *solid* square; a single point of authority (this one introduces a fill — a deliberate break for Day One only).

My picks: **Glyph core** for the Awards small mark (it ties the sub-brand into the system while staying distinct, and reads at every size), and **Around the table** for Leadership (it tells the story of the day, where Nested is more abstract). If you'd rather stay conservative, **Single frame** + keep **Nested**.

One note: the **x.** here is set in Playfair Display italic as a stand-in — production would drop in the brand's actual calligraphic glyph (slightly swashier). If you have that glyph as an SVG/font, send it and I'll use the real thing.

Tell me your choices for each and I'll wire them into the live site — rail, heroes, and cards — and refresh.

