/* eslint-disable */
// FDB 2026 - X. Awards (Day One evening). The sub-brand pivot. Cream, considered,
// celebratory. Uses the canonical X. Awards lockup and roundel unaltered. The
// awards motif locks into the lockup offset. Eight categories. Human-only final
// judging. Reasoning notes published with every winner.

const AWARD_CATEGORIES = [
  { name: 'Destination Brand of the Year', desc: 'The strongest national or regional brand expression of the year.' },
  { name: 'AI in Destination Marketing', desc: 'Material, deployed use of AI in the work, disclosed in full. Not a pitch deck.' },
  { name: 'Digital Transformation', desc: 'The most ambitious end-to-end digital programme inside an NTO or DMO.' },
  { name: 'Best Campaign', desc: 'A single campaign, judged on craft, intent and measurable effect.' },
  { name: 'Content and Storytelling', desc: 'Narrative and voice that move a destination beyond the brochure.' },
  { name: 'Data and Insight', desc: 'Insight that visibly changed a decision, an investment or a position.' },
  { name: 'Sustainable Tourism Communications', desc: 'The most credible, measurable sustainability narrative of the year.' },
  { name: 'Emerging Destination', desc: 'Newer brands punching above their weight, with the work to prove it.' },
];

function AwardsPage() {
  const { nav } = useNav();
  return (
    <>
      {/* ── HERO — same DayHero shell as the day pages, for consistency ── */}
      <DayHero
        station="awards"
        eyebrow="X. Awards · Day One evening · 02 December"
        title={<>The first <Accent>AI-Positive</Accent> Industry Awards.</>}
        lead="The sector's recognition of destination branding, transformation and digital innovation, awarded the evening of Day One. Celebratory in atmosphere, serious in recognition. No black tie."
        meta={[
          { label: 'When', value: 'Evening of Day One · 02 Dec' },
          { label: 'Judging', value: 'Eight categories · human-only final round' },
        ]}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '2.25rem' }}>
          <Button icon={ArrowIcon} onClick={() => nav('/register')}>Submit an entry</Button>
          <Button variant="ghost" onClick={() => { const el = document.getElementById('categories'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' }); }}>Eight categories ↓</Button>
        </div>
      </DayHero>

      <hr className="fdb-rule"/>

      {/* ── THE PROPOSITION ───────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>What it recognises</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem', maxWidth: '44ch' }}>
          The first awards to be explicit about <Accent>how AI takes part</Accent> in the work being recognised.
        </Statement>
        <BodyText>
          Entrants disclose the role AI played in what they are submitting. Disclosure is the price of entry, not a disadvantage. The awards reward judgement and craft, including the judgement to use these tools well. The final round is human-only, and the panel's reasoning is published with every winner.
        </BodyText>
      </section>

      {/* ── HOW JUDGING WORKS ─────────────────────────────────────────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-cream-deep)', borderTop: '1px solid var(--fdb-border)', borderBottom: '1px solid var(--fdb-border)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <SectionLabel style={{ marginBottom: '2rem' }}>How judging works</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { n: '01', h: 'Disclose', b: 'Every entry declares the role AI played in the work. Built on the DTTT AI Transparency Framework.' },
              { n: '02', h: 'Shortlist', b: 'A panel of senior destination, brand and policy leaders draws the shortlist in each category.' },
              { n: '03', h: 'Human judging', b: 'The final decision is made by people, in a room. No automated scoring at the final round.' },
              { n: '04', h: 'Published reasoning', b: 'Every winner is published with the panel\u2019s reasoning. No black box, no unexplained verdicts.' },
            ].map((s) => (
              <div key={s.n} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--fdb-purple)', marginBottom: '0.6rem' }}>{s.n}</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.5rem' }}>{s.h}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{s.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EIGHT CATEGORIES ──────────────────────────────────────────── */}
      <section id="categories" className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>The categories</SectionLabel>
        <Statement style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
          Eight categories. <Accent>One evening.</Accent>
        </Statement>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2.5rem' }}>
          {AWARD_CATEGORIES.map((c, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.45rem' }}>
                <div style={{ fontSize: '1.02rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.25 }}>{c.name}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--fdb-purple)', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REASONING NOTE - the distinctive object ───────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Eyebrow style={{ marginBottom: '1rem' }}>Published with every winner</Eyebrow>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fdb-ink)', marginBottom: '1rem' }}>The reasoning note.</h2>
            <BodyText>A short, signed explanation of why the work won. It travels with the award and holds the panel to its own standard.</BodyText>
          </div>
          <StackFrame offset={12} strokeWidth={1.5}>
            <div style={{ background: 'var(--fdb-white)', border: '1px solid var(--fdb-border-strong)', borderRadius: 4, padding: '2rem 2.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>Reasoning note · Sample</span>
                <Motif state="awards" size={34} sw={3}/>
              </div>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.55, letterSpacing: '-0.01em', color: 'var(--fdb-ink)', marginBottom: '1.25rem', textWrap: 'pretty' }}>
                "Recognised for a brand system that used AI to widen access without thinning the voice. The disclosure was complete, and the judgement behind the tooling was the work."
              </p>
              <div style={{ fontSize: '0.72rem', color: 'var(--fdb-ink-muted)', borderTop: '1px solid var(--fdb-border)', paddingTop: '1rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--fdb-ink)' }}>AI in Destination Marketing</span> · Panel reasoning, FDB 2026
              </div>
            </div>
          </StackFrame>
        </div>
      </section>

      {/* ── KEY DATES ─────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>Key dates</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--fdb-border)', border: '1px solid var(--fdb-border)', borderRadius: 4, overflow: 'hidden' }}>
          {[
            { lbl: 'Entries open', val: 'June 2026' },
            { lbl: 'Entries close', val: 'October 2026' },
            { lbl: 'Ceremony', val: '02 December · Dublin' },
          ].map((d, i) => (
            <div key={i} style={{ background: 'var(--fdb-cream)', padding: '1.75rem 1.4rem' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '0.5rem' }}>{d.lbl}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--fdb-ink)' }}>{d.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--fdb-border)', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', maxWidth: '24ch', textWrap: 'pretty' }}>
            Entries are open to the <Accent>destination sector worldwide.</Accent>
          </p>
          <Button icon={ArrowIcon} onClick={() => nav('/register')}>Submit an entry</Button>
        </div>
      </section>
    </>
  );
}

window.AwardsPage = AwardsPage;
