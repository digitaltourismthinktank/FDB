/* eslint-disable */
// FDB 2026 - Day Two · The Keynote Programme
// Register: a serious room for serious work. Public, paced, with breathing room.
// Six themes are the structural rhythm. The programme motif spreads horizontally.
// The transatlantic fireside is a visual moment; the day closes by reconnecting
// to the Council formed on Day One.

const KEYNOTE_THEMES = [
  { name: 'Brand', desc: 'AI has changed how destinations are found. When discovery moves from search results to AI-generated answers, brand visibility becomes a technical and strategic challenge. Sessions explore how leading DMOs are rethinking positioning and content architecture in response.' },
  { name: 'Marketing', desc: 'The campaign cycle is giving way to a more permanent, always-on model. How DMOs set their briefs, plan their channels and measure success is changing fast. Sessions surface the emerging practice from organisations navigating this now.' },
  { name: 'Content', desc: 'A flood of synthetic AI-generated content is raising the stakes for credibility and distinctiveness. The DMOs cutting through are building distinct editorial voice and content systems designed to hold up. Sessions explore what the best content programmes have in common.' },
  { name: 'Data', desc: 'Traditional attribution breaks down when the path to a booking is increasingly indirect. What should destinations measure, and how do they make the case to boards and governments? Sessions bring the most rigorous current thinking on performance and insight.' },
  { name: 'AI', desc: 'The organisations gaining ground are the ones treating AI as a leadership decision, not a technology choice. Real deployments from destination teams — disclosed in full, examined in depth — form the backbone of this theme.' },
  { name: 'Organisation', desc: 'The destination team of 2027 looks different from its predecessor. Capability, structure and governance are becoming competitive variables. Sessions draw on the experience of DMOs that have already begun the work.' },
];

function KeynotesPage() {
  const { nav } = useNav();
  const speakers = [
    { name: 'Nick Hall', org: 'Digital Tourism Think Tank', role: 'Host · Opening', tone: '#6F8FA8' },
    { name: 'Caroline Bocquel', org: 'Fáilte Ireland', role: 'Welcome', tone: '#94816A' },
    { name: 'Speaker TBC', org: 'Major NTO · Brand lead', role: 'Brand', tbc: true, tone: '#7B8C7A' },
    { name: 'Speaker TBC', org: 'European NTO · Marketing', role: 'Marketing', tbc: true, tone: '#A09EB4' },
    { name: 'Speaker TBC', org: 'DMO · Content lead', role: 'Content', tbc: true, tone: '#8A9BA8' },
    { name: 'Speaker TBC', org: 'NTO · Head of insight', role: 'Data', tbc: true, tone: '#9A8674' },
    { name: 'Speaker TBC', org: 'DMO · AI lead', role: 'AI', tbc: true, tone: '#7E8B7C' },
    { name: 'Speaker TBC', org: 'NTO · Organisation', role: 'Organisation', tbc: true, tone: '#9E9AAE' },
  ];

  return (
    <>
      <DayHero
        station="programme"
        eyebrow="Day Two · 03 December · Keynote programme"
        title={<>The keynote<br/><Accent>programme.</Accent></>}
        lead="A full day of keynotes from brand leads, CMOs and digital teams at globally leading DMOs, curated around one theme, with a transatlantic spotlight mid-morning and a report from the Day One leadership meeting at the close."
        meta={[
          { label: 'Date', value: 'Wednesday 03 December 2026' },
          { label: 'Audience', value: '125 to 200 senior delegates' },
          { label: 'Format', value: 'Full-day keynote programme' },
          { label: 'Theme', value: 'Brand competitiveness in the age of AI' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── INTRO ─────────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>The day</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          Join <Accent>globally leading DMOs</Accent> gathered in Dublin, showcasing work that sets the bar for competitiveness in an AI-driven marketing landscape.
        </Statement>
        <BodyText>
          A carefully curated programme of inspiring keynotes from a wide range of destination perspectives, bringing together national, regional and city DMOs from across every continent. The day is paced for conversation alongside the talks, and closes with a report from the Day One leadership meeting.
        </BodyText>
      </section>

      {/* ── 2026 THEME ────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1rem' }}>2026 Theme</SectionLabel>
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--fdb-ink)', marginBottom: '0.75rem' }}>
          Brand competitiveness in the age of AI.
        </h2>
        <BodyText style={{ marginBottom: '2.5rem' }}>Six keynotes explore the theme across its core disciplines.</BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {KEYNOTE_THEMES.map((t, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--fdb-purple)' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)' }}>{t.name}</span>
              </div>
              <div style={{ fontSize: '0.83rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRANSATLANTIC SPOTLIGHT ──────────────────────────────────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-ink)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '38ch' }}>
              <div style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '1.1rem' }}>Mid-morning · Featured</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--fdb-white)', marginBottom: '1.25rem', textWrap: 'balance' }}>The transatlantic spotlight.</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                AI is developing fast on both sides of the Atlantic, but different cultural, regulatory and innovation patterns are beginning to emerge. In this mid-morning session, destinations from North America and Europe compare perspectives on a fast-moving question none of them is navigating alone.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              {[
                { label: 'Pace of transformation', desc: 'How quickly are destination organisations moving, and what does adoption look like across different markets and contexts?' },
                { label: 'Content integrity', desc: 'What does it mean to maintain a credible destination voice in a world flooded with synthetic AI-generated content?' },
                { label: 'Disclosure and transparency', desc: 'How are destinations approaching disclosure, and what standards are beginning to emerge on either side of the Atlantic?' },
                { label: 'The regulatory environment', desc: 'How the EU AI Act and North American policy direction are creating different operating contexts for destination organisations.' },
              ].map((t, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '1.1rem 0' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--fdb-white)', marginBottom: '0.35rem' }}>{t.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME (paced) ─────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>The day</SectionLabel>
        <ProgrammeRow isFirst time="09:00" title="Doors and coffee" desc="Arrivals. The room settles."/>
        <ProgrammeRow time="09:30" title="Opening: the state of destination brand" tags={['Brand']}
          desc="Nick Hall opens with an assessment of where destination brand stands heading into 2027: what has shifted in the past year, what the sector has and has not yet resolved, and how the day will move through the questions."
          speakers={[{ name: 'Nick Hall, CEO · Digital Tourism Think Tank' }]}/>
        <ProgrammeRow time="10:00" title="Keynote: brand visibility in an AI-mediated world" tags={['Brand', 'Marketing']}
          desc="When discovery moves from search results to AI-generated summaries and recommendations, what does national brand strategy look like? This talk examines how leading destination organisations are adapting their positioning, brand architecture and content to stay visible and competitive in systems they do not own."/>
        <ProgrammeRow time="10:30" title="Transatlantic spotlight" tags={['Featured']}
          desc="Destinations from North America and Europe in conversation, exploring how AI development looks different from either side of the Atlantic, across pace of adoption, content integrity and the regulatory environment."/>
        <ProgrammeRow time="11:15" title="Break"/>
        <ProgrammeRow time="11:30" title="Keynote: content as a permanent surface" tags={['Content']}
          desc="Content is no longer built for a campaign. For destination organisations it is a permanent surface, continuously indexed, that shapes how AI systems understand and represent a destination. This talk explores what a modern content programme looks like and how the leading organisations are building the systems to sustain it."/>
        <ProgrammeRow time="12:00" title="Keynote: measurement after the funnel" tags={['Data']}
          desc="When the path to a booking decision is increasingly indirect, traditional attribution tells an incomplete story. This keynote addresses how destinations are rethinking what they measure, what they report to boards and governments, and which indicators hold up in an AI-mediated world."/>
        <ProgrammeRow time="12:30" title="Lunch" desc="Hosted. The conversations carry over."/>
        <ProgrammeRow time="14:00" title="Keynote: deploying AI without losing the voice" tags={['AI']}
          desc="Deploying AI at scale creates a real risk: that the distinct voice and character of a destination gets averaged out. This keynote explores how a leading destination organisation has approached AI adoption while protecting its editorial identity, covering the governance decisions and disclosure practice that made it possible."/>
        <ProgrammeRow time="14:30" title="Keynote: organising the modern destination team" tags={['Organisation']}
          desc="The team structures, skills and decision processes built for the previous era are under pressure. This talk examines how a leading organisation has restructured to treat AI as a leadership question, covering the capability frameworks and governance arrangements that underpin their approach."/>
        <ProgrammeRow time="15:00" title="Break"/>
        <ProgrammeRow time="15:15" title="Keynote: the new visitor brief" tags={['Marketing']}
          desc="How destinations brief their teams and plan their marketing is shifting as AI changes how travellers discover and choose. This keynote examines what the emerging visitor brief looks like, how leading organisations are adapting their strategy, and what it means for the marketing function."/>
        <ProgrammeRow time="15:45" title="Report from the Council" tags={['Policy', 'Reconnects to Day One']}
          desc="The Council formed on Day One reports back to the wider room. The private morning meets the public day.">
          <div style={{ marginTop: '0.85rem' }}>
            <Button variant="ghost" onClick={() => nav('/leadership')}>See the Council · Day One →</Button>
          </div>
        </ProgrammeRow>
        <ProgrammeRow time="16:30" title="Close" desc="The programme ends. Day Three is for members."/>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid var(--fdb-border)', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', maxWidth: '26ch', textWrap: 'pretty' }}>
            Day Two is free for <Accent>DTTT Members.</Accent> Discounted tickets are available for non-member DMOs.
          </p>
          <Button icon={ArrowIcon} onClick={() => nav('/register')}>Register your place</Button>
        </div>
      </section>
    </>
  );
}

window.KeynotesPage = KeynotesPage;
