/* eslint-disable */
// FDB 2026 - Day Three · The Trends Workstream
// Register: generative, forward-looking, almost optimistic. The most open and
// airy treatment. The workstream motif breaks formation and drifts forward. Not
// a report launch - the report does not exist yet. It gets built in the room.

const TREND_TABLES = [
  { title: 'Agentic discovery', prov: 'When an AI agent plans the trip, what is a destination optimising for.' },
  { title: 'The post-search destination', prov: 'Visibility and demand without a results page to rank on.' },
  { title: 'Synthetic content and trust', prov: 'Provenance as a brand asset when anything can be generated.' },
  { title: 'Regenerative demand', prov: 'Shaping where visitors go, not only how many arrive.' },
  { title: 'The resident-visitor balance', prov: 'Social licence to grow, and the marketing that protects it.' },
  { title: 'Value beyond arrivals', prov: 'Measuring contribution when headline numbers stop meaning much.' },
  { title: 'The AI-native team', prov: 'The capability a destination organisation needs to hold inside.' },
  { title: 'Sovereignty and data', prov: "Who owns a destination's signal, and what that is worth." },
];

function WorkstreamPage() {
  const { nav } = useNav();
  return (
    <>
      <DayHero
        station="workstream"
        eyebrow="Day Three · 04 December · Trends workstream"
        title={<>The day the<br/>next year gets<br/><Accent>written.</Accent></>}
        lead="A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The most generative day of the three."
        meta={[
          { label: 'Date', value: 'Thursday 04 December 2026' },
          { label: 'Audience', value: 'DTTT members only' },
          { label: 'Format', value: 'Working day · capped per table' },
          { label: 'Output', value: 'Future Destination Trends 2027' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── NOT A LAUNCH ──────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>What this is</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          This is not a report launch. The report <Accent>does not exist yet.</Accent> It gets built in this room.
        </Statement>
        <BodyText>
          Members move between eight trend tables. Each table writes a position. The positions become the published Future Destination Trends 2027 report, and contributors are named on every trend they shaped. After Dublin, the tables continue as quarterly working groups through 2027. The room does not watch the future. It writes it.
        </BodyText>
      </section>

      {/* ── EIGHT TREND TABLES ────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <SectionLabel>Eight trend tables</SectionLabel>
          <span style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-muted)' }}>Move freely. Shape what you know.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {TREND_TABLES.map((t, i) => <TableCard key={i} n={i + 1} {...t}/>)}
        </div>
      </section>

      {/* ── HOW THE DAY MOVES FORWARD ─────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '2rem' }}>From the room to the year</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            { n: '01', h: 'In the room', b: 'Members rotate through the tables, building on each other across the day.' },
            { n: '02', h: 'A written position', b: 'Each table commits a position to the page. Sharp, attributable, defensible.' },
            { n: '03', h: 'The published report', b: 'Positions become Future Destination Trends 2027, distributed across the sector.' },
            { n: '04', h: 'Quarterly working groups', b: 'Tables continue through 2027. The conversation does not end in Dublin.' },
          ].map((s, i) => (
            <div key={s.n} style={{ position: 'relative', paddingRight: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
                <span style={{ width: 8, height: 8, background: 'var(--fdb-purple)', borderRadius: 2 }}/>
                {i < 3 && <span style={{ flex: 1, height: 1, background: 'var(--fdb-purple-soft)' }}/>}
              </div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--fdb-purple)', marginBottom: '0.5rem' }}>{s.n}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{s.h}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6, paddingRight: '0.5rem' }}>{s.b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NAMED ON THE WORK ─────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Eyebrow style={{ marginBottom: '1rem' }}>The privilege of membership</Eyebrow>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fdb-ink)', marginBottom: '1rem' }}>Your name on the work.</h2>
            <BodyText>Day Three is open to DTTT members. Every contributor is named in the published report, against each trend they helped shape. Contribution is visible, and it carries into the working groups that run through the year.</BodyText>
            <div style={{ marginTop: '1.75rem' }}>
              <Button icon={ArrowIcon} onClick={() => nav('/register')}>Join as a member</Button>
            </div>
          </div>
          {/* contributor credit fragment */}
          <StackFrame offset={12} strokeWidth={1.5}>
            <div style={{ background: 'var(--fdb-white)', border: '1px solid var(--fdb-purple-soft)', borderRadius: 4, padding: '2rem 2.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>Future Destination Trends 2027</span>
                <Mark size={28}/>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.4rem' }}>Trend 01 · Agentic discovery</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', marginBottom: '0.75rem' }}>Contributors</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 0.4rem' }}>
                {['Head of strategy, member NTO', 'Head of insight, member DMO', 'Head of innovation, member NTO', 'Your name here'].map((c, i) => (
                  <span key={i} style={{ fontSize: '0.72rem', fontWeight: 600, color: i === 3 ? 'var(--fdb-purple)' : 'var(--fdb-ink-mid)', border: `1px solid ${i === 3 ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)'}`, borderRadius: 2, padding: '0.25rem 0.55rem', fontStyle: i === 3 ? 'normal' : 'normal' }}>{c}</span>
                ))}
              </div>
            </div>
          </StackFrame>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--fdb-border)', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', maxWidth: '28ch', textWrap: 'pretty' }}>
            The room does not watch the future. <Accent>It writes it.</Accent>
          </p>
          <Button variant="outline" icon={ChatIcon} onClick={() => nav('/register')}>Become a member</Button>
        </div>
      </section>
    </>
  );
}

// An open, generative table card - light, airy, the workstream register.
function TableCard({ n, title, prov }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      border: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-purple-soft)'}`,
      background: hover ? 'var(--fdb-purple-tint)' : 'transparent',
      borderRadius: 4, padding: '1.25rem 1.25rem 1.4rem', transition: 'background 0.15s, border-color 0.15s',
      display: 'flex', flexDirection: 'column', minHeight: 200,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <Motif state="workstream" size={32} sw={3.4} muted={!hover}/>
        <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>Table {String(n).padStart(2, '0')}</span>
      </div>
      <div style={{ fontSize: '1.02rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.2, marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>{prov}</div>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fdb-purple)' }}/>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>Position forming</span>
      </div>
    </div>
  );
}

window.WorkstreamPage = WorkstreamPage;
