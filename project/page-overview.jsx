/* eslint-disable */
// FDB 2026 — Overview (Home). The arc: a private start, a celebratory pivot,
// a public day, a generative close. The journey rail is the page's centrepiece.

function OverviewPage() {
  const { nav } = useNav();

  // The event, in four parts — in the conceptual framing: the private meeting,
  // the public day, the working day, then the evening of recognition.
  const parts = [
  { part: '01', station: 'council', kicker: 'Day One · 02 Dec · Invite only', title: 'The Leadership Meeting.', sub: 'Leadership in the Age of AI', path: '/leadership',
    desc: 'A private, invite-only working day for 30 to 40 NTO and DMO chief executives, ministers and senior leaders. Boardroom format, no stage, no panels. The room constitutes a Council and issues the Dublin Declaration.' },
  { part: '02', station: 'programme', kicker: 'Day Two · 03 Dec', title: 'The Keynote Day.', sub: 'Talks from leading destinations', path: '/keynotes',
    desc: 'Back-to-back keynotes from the destination marketers and brand leads actually doing the work, across six themes, with a transatlantic fireside mid-morning.' },
  { part: '03', station: 'workstream', kicker: 'Day Three · 04 Dec · Members only', title: 'The Trends Workstream.', sub: 'Future Destination Trends 2027', path: '/workstream',
    desc: 'A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The day the next year gets written.' },
  { part: '04', station: 'awards', kicker: 'Day One · The evening', title: 'X. Awards.', sub: 'The first AI-Positive Industry Awards', path: '/awards',
    desc: 'Held on the evening of Day One. Eight categories, human-only final judging, reasoning notes published with every winner. Celebratory, considered.' }];


  return (
    <>
      {/* ── HERO — event brand as the primary focus ──────────────────── */}
      <section className="fdb-rise" style={{ position: 'relative' }}>
        {/* credit strip: who runs it, who hosts it */}
        <div className="fdb-wrap" style={{ paddingTop: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem 2rem', flexWrap: 'wrap', paddingBottom: '1.5rem', borderBottom: '1px solid var(--fdb-border)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>An event by</span>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--fdb-ink)' }}>Digital Tourism Think Tank</span>
            </span>
            <span aria-hidden="true" style={{ width: 1, height: 22, background: 'var(--fdb-border-strong)' }} />
            <HostPartner size={34} />
          </div>
        </div>

        <div className="fdb-wrap" style={{ position: 'relative', padding: '3rem 3rem 3.5rem' }}>
          <div className="fdb-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.78fr', gap: '3rem', alignItems: 'center' }}>
            {/* LEFT — the brand wordmark leads */}
            <div>
              <Eyebrow style={{ marginBottom: '1.5rem' }}>2026 Edition · Dublin · 02–04 December</Eyebrow>
              <h1 style={{ fontSize: 'clamp(2.7rem, 6vw, 4.6rem)', fontWeight: 800, lineHeight: 0.96, letterSpacing: '-0.04em', color: 'var(--fdb-ink)', marginBottom: '1.6rem' }}>
                Future<br />Destination<br /><span style={{ color: 'var(--fdb-purple)' }}>Brand.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.25rem' }}>
                The Digital Tourism Think Tank's invite-only summit on the future of destination marketing in the age of AI. <strong style={{ color: 'var(--fdb-ink)', fontWeight: 700 }}>Four parts, across three days.</strong>
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button icon={ArrowIcon} onClick={() => nav('/leadership')}>View the programme</Button>
                <Button variant="ghost" onClick={() => nav('/register')}>Register your place</Button>
              </div>
            </div>

            {/* RIGHT — the motif, contained and aligned to the message */}
            <div className="fdb-hero-motif" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Motif state="awards" size={300} sw={1.8} />
            </div>
          </div>

          {/* presidency line */}
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--fdb-border)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>Convened under</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--fdb-ink)' }}>Ireland's EU Council Presidency · H2 2026</span>
          </div>
        </div>
      </section>

      <hr className="fdb-rule" />

      {/* ── THE EVENT, IN FOUR PARTS ─────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>The event, in four parts</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
          A private meeting, a public programme, a working day, and an <Accent>evening of recognition.</Accent>
        </Statement>
        <BodyText style={{ marginBottom: '1rem' }}>
          One gathering with four distinct moments. Three of them run across the days; the X. Awards is held on the evening of Day One.
        </BodyText>
      </section>

      {/* four parts as an editorial list */}
      <section className="fdb-wrap" style={{ marginTop: '2rem' }}>
        {parts.map((m, i) => <MomentRow key={m.path} {...m} isFirst={i === 0} onOpen={() => nav(m.path)} />)}
      </section>

      {/* ── ACROSS THREE DAYS — chronological wayfinding ─────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Across three days</SectionLabel>
        <BodyText style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
          How the event runs, in sequence — the leadership meeting and X. Awards on Day One, the keynote day, then the members' workstream.
        </BodyText>
        <JourneyRail allLit style={{ maxWidth: 760, margin: '0 auto' }} />
      </section>

      {/* ── BY THE NUMBERS ───────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }} data-comment-anchor="5586820b83-section-96-7">
        <SectionLabel style={{ marginBottom: '1.5rem' }}>By the numbers</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--fdb-border)', border: '1px solid var(--fdb-border)', borderRadius: 4, overflow: 'hidden' }}>
          {[
          { n: '30–40', l: 'Senior leaders in the Council room' },
          { n: '8', l: 'X. Awards categories' },
          { n: '6', l: 'Keynote themes on Day Two' },
          { n: '8', l: 'Trend tables on Day Three' }].
          map((s, i) =>
          <div key={i} style={{ background: 'var(--fdb-cream)', padding: '1.75rem 1.4rem' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--fdb-purple)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fdb-ink-muted)', marginTop: '0.6rem', lineHeight: 1.45 }}>{s.l}</div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ──────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>What makes it different</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '2.5rem' }}>
          Most events in this category are political, sponsor-heavy and panel-led. FDB is built to be <Accent>the opposite.</Accent>
        </Statement>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 2rem' }}>
          {[
          { h: 'The room is the asset.', b: 'No paid speakers, no keynote fees. The most valuable voices are destination marketers actively doing the work.' },
          { h: 'No commercial layer.', b: 'No vendors, no sponsor halls, no commercial agenda. The X. Awards has its own evening; the rest of the event does not.' },
          { h: 'Editorial, not promotional.', b: 'Restrained and declarative, written like a memo to a knowledgeable peer rather than a conference landing page.' },
          { h: 'No tokenistic interaction.', b: 'No live polls, no word clouds, no audience-response gimmicks. The substance is the point.' },
          { h: 'Peer authority.', b: 'Outside speakers expand the frame; they do not fill time. The sector speaks for itself.' },
          { h: 'Small by design.', b: 'The leadership room holds 30 to 40 people. A stated choice, not a constraint.' }].
          map((p, i) =>
          <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.2, marginBottom: '0.6rem' }}>{p.h}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{p.b}</div>
            </div>
          )}
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', textWrap: 'pretty' }}>
            Places are by <Accent>personal invitation only.</Accent> To discuss participation, register your interest.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button icon={ArrowIcon} onClick={() => nav('/register')}>Register your place</Button>
            <Button variant="outline" icon={ChatIcon} onClick={() => nav('/register')}>Get in touch</Button>
          </div>
        </div>
      </section>
    </>);

}

// One part in the event — hairline-separated editorial row with a part number.
function MomentRow({ part, station, kicker, title, sub, desc, isFirst, onOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{
      width: '100%', textAlign: 'left', background: 'none', cursor: 'pointer',
      border: 'none', borderTop: '1px solid var(--fdb-border)',
      padding: '1.75rem 0', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: '0 1.75rem', alignItems: 'start'
    }}>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)' }}>{part}</span>
        <Motif state={station} size={44} sw={3} muted={!hover} />
      </span>
      <span>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>{kicker}</span>
        </span>
        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', lineHeight: 1.1, marginBottom: '0.2rem' }}>{title}</span>
        {sub && <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--fdb-ink-muted)', marginBottom: '0.6rem' }}>{sub}</span>}
        <span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.65, maxWidth: '64ch' }}>{desc}</span>
      </span>
      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)', whiteSpace: 'nowrap', paddingTop: '1.5rem' }}>
        Open →
      </span>
    </button>);

}

window.OverviewPage = OverviewPage;