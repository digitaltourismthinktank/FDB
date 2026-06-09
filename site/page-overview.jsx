/* eslint-disable */
// FDB 2026 - Overview (Home). The arc: a private start, a celebratory pivot,
// a public day, a generative close. The journey rail is the page's centrepiece.

function OverviewPage() {
  const { nav } = useNav();

  // The event, in four parts — in CHRONOLOGICAL order: the private meeting and
  // the awards on Day One, the keynote day, then the members' workstream.
  const parts = [
    { part: '01', station: 'council', kicker: 'Day One · 02 Dec', access: 'Invite only', title: 'The Leadership Meeting.', sub: 'Leadership in the Age of AI', path: '/leadership',
      desc: 'A private, invite-only working day for 30 to 40 NTO and DMO chief executives, ministers and senior leaders. Boardroom format, no stage, no panels. The room constitutes a Council and issues the Dublin Declaration.' },
    { part: '02', station: 'awards', kicker: 'Day One · The evening', title: 'X. Awards.', sub: 'The first AI-Positive Industry Awards', path: '/awards',
      desc: 'Held on the evening of Day One. Eight categories, human-only final judging, reasoning notes published with every winner. Celebratory, considered.' },
    { part: '03', station: 'programme', kicker: 'Day Two · 03 Dec', title: 'The Keynote Day.', sub: 'Talks from leading destinations', path: '/keynotes',
      desc: 'Back-to-back keynotes from the destination marketers and brand leads actually doing the work, across six themes, with a transatlantic fireside mid-morning. Free for DTTT members; ticketed for delegates, with separate tickets for DMOs and commercial partners.' },
    { part: '04', station: 'workstream', kicker: 'Day Three · 04 Dec', access: 'Members only', title: 'The Trends Workstream.', sub: 'Future Destination Trends 2027', path: '/workstream',
      desc: 'A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The day the next year gets written.' },
  ];

  return (
    <>
      {/* ── HERO - event brand as the primary focus ──────────────────── */}
      <section className="fdb-rise" style={{ position: 'relative' }}>
        {/* credit strip: who runs it, who hosts it */}
        <div className="fdb-wrap" style={{ paddingTop: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem 2rem', flexWrap: 'wrap', paddingBottom: '1.5rem', borderBottom: '1px solid var(--fdb-border)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>An event by</span>
              <img src={window.__resources?.dtttBlack || "assets/logos/dttt-logo-landscape-black.svg"} alt="Digital Tourism Think Tank" style={{ height: 22, width: 'auto', display: 'block' }}/>
            </span>
            <span aria-hidden="true" style={{ width: 1, height: 22, background: 'var(--fdb-border-strong)' }}/>
            <HostPartner size={34}/>
          </div>
        </div>

        <div className="fdb-wrap" style={{ position: 'relative', padding: '3rem 3rem 3.5rem' }}>
          <div className="fdb-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.78fr', gap: '3rem', alignItems: 'flex-start' }}>
            {/* LEFT - the brand wordmark leads */}
            <div>
              <Eyebrow style={{ marginBottom: '1.5rem' }}>2026 Edition · Dublin · 02–04 December</Eyebrow>
              <h1 style={{ fontSize: 'clamp(2.7rem, 6vw, 4.6rem)', fontWeight: 800, lineHeight: 0.96, letterSpacing: '-0.04em', color: 'var(--fdb-ink)', marginBottom: '1.6rem' }}>
                Future<br/>Destination<br/><span style={{ color: 'var(--fdb-purple)' }}>Brand.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.25rem' }}>
                The Digital Tourism Think Tank's global forum on the future of destination brand and leadership in the age of AI. <strong style={{ color: 'var(--fdb-ink)', fontWeight: 700 }}>Four parts, across three days.</strong>
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button icon={ArrowIcon} onClick={() => nav('/leadership')}>View the programme</Button>
                <Button variant="ghost" onClick={() => nav('/register')}>Register your place</Button>
              </div>
            </div>

            {/* RIGHT - the motif, contained and aligned to the message */}
            <div className="fdb-hero-motif" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="fdb-mark-pivot"><Motif state="brand" size={300} sw={1.9}/></div>
            </div>
          </div>

          {/* presidency line */}
          <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--fdb-border)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>Convened under</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--fdb-ink)' }}>Ireland's EU Council Presidency · H2 2026</span>
          </div>
        </div>
      </section>

      <hr className="fdb-rule"/>

      {/* ── THE EVENT, IN FOUR PARTS ─────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>The event, in four parts</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '0.5rem' }}>
          A private leadership meeting, an open keynote day, a members' working day, and an <Accent>evening of recognition.</Accent>
        </Statement>
        <BodyText style={{ marginBottom: '1rem' }}>
          One gathering with four distinct moments, each with its own way in, from the invitation-only Council room to the keynote day open to members and delegates. Three run across the days; the X. Awards is held on the evening of Day One.
        </BodyText>
      </section>

      {/* four parts as an editorial list */}
      <section className="fdb-wrap" style={{ marginTop: '2rem' }}>
        {parts.map((m, i) => <MomentRow key={m.path} {...m} isFirst={i === 0} onOpen={() => nav(m.path)}/>)}
      </section>

      {/* ── WHO CAN ATTEND WHAT ── (removed: dark band was too heavy / redundant) */}

      {/* ── ACROSS THREE DAYS - chronological wayfinding ─────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Across three days</SectionLabel>
        <BodyText style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
          How the event runs, in sequence: the leadership meeting and X. Awards on Day One, the keynote day, then the members' workstream.
        </BodyText>
        <JourneyRail allLit markSize={56} style={{ maxWidth: 840, margin: '0 auto' }}/>
      </section>

      {/* ── BY THE NUMBERS ───────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Who it's for</SectionLabel>
        <div className="fdb-audience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '1.25rem', alignItems: 'start' }}>
          <Statement style={{ marginBottom: 0 }}>
            Critical conversations on destination strategy and leadership in the <Accent>age of AI</Accent>, built for the people who lead the world's destination brands.
          </Statement>
          <div>
            {[
              { h: 'C-level destination leaders', b: 'The chief executives and senior teams setting destination strategy.' },
              { h: 'National, regional & city DMOs', b: "The world's leading destination management and marketing organisations." },
              { h: 'Marketing & digital teams', b: 'The people turning strategy into brand, campaigns and content.' },
              { h: 'DTTT members', b: 'The global membership community at the heart of the trends workstream.' },
            ].map((a, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--fdb-border)', padding: '1rem 0' }}>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.2, marginBottom: '0.3rem' }}>{a.h}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.55 }}>{a.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ──────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>What sets it apart</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '2.5rem' }}>
          A global forum with a <Accent>100% destination lens</Accent>, focused entirely on how destinations build brand and lead in a rapidly changing landscape.
        </Statement>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 2rem' }}>
          {[
            { h: 'A 100% destination lens.', b: 'Every session is framed around destinations and the organisations that market them. A single, undiluted focus you will not find at a general industry event.' },
            { h: 'The room is the asset.', b: 'The most valuable voices are the destination marketers and brand leaders actively doing the work: peers speaking candidly to peers.' },
            { h: 'Value across the programme.', b: "Leadership strategy on Day One, peer keynotes on Day Two, and a members' trends workstream on Day Three. Each day adds a distinct layer." },
            { h: 'Editorial and declarative.', b: 'Restrained and substantive throughout, written like a memo to a knowledgeable peer. The work itself is the point.' },
            { h: 'Peer authority.', b: 'Outside voices expand the frame rather than fill time. The sector speaks for itself.' },
            { h: 'Small by design.', b: 'The leadership room holds 30 to 40 people, a deliberate choice that keeps the conversation candid.' },
          ].map((p, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.2, marginBottom: '0.6rem' }}>{p.h}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{p.b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', textWrap: 'pretty' }}>
            Four moments, one conversation on the <Accent>future of destination brand.</Accent> Register your interest and we'll be in touch about the parts you can join.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button icon={ArrowIcon} onClick={() => nav('/register')}>Register your place</Button>
            <Button variant="outline" icon={ChatIcon} onClick={() => nav('/register')}>Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}

// One part in the event - hairline-separated editorial row with a part number.
function MomentRow({ part, station, kicker, access, title, sub, desc, isFirst, onOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onOpen} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: '100%', textAlign: 'left', background: 'none', cursor: 'pointer',
        border: 'none', borderTop: '1px solid var(--fdb-border)',
        padding: '1.75rem 0', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: '0 1.75rem', alignItems: 'start',
      }}>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)' }}>{part}</span>
        <Motif state={station} size={44} sw={3} muted={!hover}/>
      </span>
      <span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>{kicker}</span>
          {access && (
            <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-deep)', background: 'var(--fdb-purple-tint)', borderRadius: 2, padding: '0.2rem 0.45rem' }}>{access}</span>
          )}
        </span>
        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', lineHeight: 1.1, marginBottom: '0.2rem' }}>{title}</span>
        {sub && <span style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--fdb-ink-muted)', marginBottom: '0.6rem' }}>{sub}</span>}
        <span style={{ display: 'block', fontSize: '0.88rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.65, maxWidth: '64ch' }}>{desc}</span>
      </span>
      <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)', whiteSpace: 'nowrap', paddingTop: '1.5rem' }}>
        Open →
      </span>
    </button>
  );
}

// ── ACCESS BAND ──────────────────────────────────────────────────────────────
// The single dark element on the page: a clear, scannable answer to "who can
// attend what", in chronological order. Breaks the editorial flow once, makes
// access unmistakable, and shows the day-mark family read on ink.
function AccessBand({ nav }) {
  const items = [
    { station: 'council',    path: '/leadership', name: 'Leadership Meeting', day: 'Day One',           tag: 'Invite only',  note: '30–40 senior destination leaders.' },
    { station: 'awards',     path: '/awards',     name: 'X. Awards',          day: 'Day One · evening', tag: 'Ticketed',     note: 'The awards celebration.' },
    { station: 'programme',  path: '/keynotes',   name: 'Keynote Day',        day: 'Day Two',           tag: 'Open',         note: 'Free for members · ticketed for delegates.' },
    { station: 'workstream', path: '/workstream', name: 'Trends Workstream',  day: 'Day Three',         tag: 'Members only', note: 'Open to DTTT members.' },
  ];
  return (
    <div style={{ background: 'var(--fdb-ink)', borderRadius: 'var(--fdb-radius-md)', padding: '2.4rem 2.5rem 2.6rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(245,240,233,0.55)' }}>Who can attend what</span>
        <span style={{ fontSize: '0.82rem', lineHeight: 1.5, color: 'rgba(245,240,233,0.7)', maxWidth: '40ch' }}>Each part has its own way in. Register your interest and we'll confirm what you can join.</span>
      </div>
      <div className="fdb-access-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.75rem' }}>
        {items.map((a) => (
          <button key={a.path} onClick={() => nav(a.path)} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '1.1rem 0 0', textAlign: 'left',
            borderTop: '1px solid rgba(245,240,233,0.18)', display: 'flex', flexDirection: 'column', gap: '0.9rem',
          }}>
            <span style={{ height: 42, display: 'flex', alignItems: 'center' }}><Motif state={a.station} size={40} sw={3}/></span>
            <span>
              <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,233,0.45)', marginBottom: '0.3rem' }}>{a.day}</span>
              <span style={{ display: 'block', fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-cream)', lineHeight: 1.15 }}>{a.name}</span>
            </span>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-soft)', border: '1px solid rgba(201,170,238,0.4)', borderRadius: 2, padding: '0.25rem 0.5rem' }}>{a.tag}</span>
            <span style={{ fontSize: '0.78rem', lineHeight: 1.5, color: 'rgba(245,240,233,0.62)' }}>{a.note}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

window.OverviewPage = OverviewPage;
