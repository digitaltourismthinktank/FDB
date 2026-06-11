/* eslint-disable */
// FDB 2026 - Day Two · The Keynote Programme
// Register: a serious room for serious work. Public, paced, with breathing room.
// Six themes are the structural rhythm. The programme motif spreads horizontally.
// The transatlantic fireside is a visual moment; the day closes by reconnecting
// to the Council formed on Day One.

const KEYNOTE_THEMES = [
  { name: 'Brand', desc: 'Positioning a destination when an answer-engine sits between it and the visitor.' },
  { name: 'Marketing', desc: 'The new visitor brief, and the shift from campaign to permanent surface.' },
  { name: 'Content', desc: 'Narrative and voice as a destination\u2019s most durable asset.' },
  { name: 'Data', desc: 'Reporting performance to boards and ministers after the funnel.' },
  { name: 'AI', desc: 'Material, disclosed deployment inside real destination teams.' },
  { name: 'Organisation', desc: 'Structuring the modern destination team for the work ahead.' },
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
        lead="A full day of keynotes from destination marketers, brand leads and digital teams at the world's leading NTOs and DMOs, structured around six themes with a transatlantic conversation mid-morning."
        meta={[
          { label: 'Date', value: 'Wednesday 03 December 2026' },
          { label: 'Audience', value: '125 to 200 senior delegates' },
          { label: 'Format', value: 'Full-day keynote programme' },
          { label: 'Themes', value: 'Six, across the day' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── INTRO ─────────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>The day</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          Six themes, one keynote each, with a <Accent>transatlantic fireside</Accent> mid-morning and a report from the Day One leadership meeting at the close.
        </Statement>
        <BodyText>
          The audience is primarily DTTT members and senior delegates from national, regional and city destinations. The programme is paced to allow time for discussion alongside the talks, and closes by reconnecting to the conclusions of the leadership meeting the day before.
        </BodyText>
      </section>

      {/* ── SIX THEMES ────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>Six themes</SectionLabel>
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

      {/* ── TRANSATLANTIC FIRESIDE - the visual moment ────────────────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-cream-deep)', borderTop: '1px solid var(--fdb-border)', borderBottom: '1px solid var(--fdb-border)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.25rem' }}>
            <div>
              <Eyebrow style={{ marginBottom: '0.75rem' }}>Mid-morning · Featured</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--fdb-ink)' }}>The transatlantic fireside.</h2>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6, maxWidth: '36ch' }}>
              Three of the world's most-watched destination brands, in one room, on one stage. A rare exchange across the Atlantic.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem 1.5rem' }}>
            <PortraitFrame name="Destination Canada" org="National tourism organisation" role="Fireside" tbc tone="#8A9BA8"/>
            <PortraitFrame name="Brand USA" org="National tourism organisation" role="Fireside" tbc tone="#94816A"/>
            <PortraitFrame name="European NTO" org="To be confirmed" role="Fireside" tbc tone="#7B8C7A"/>
          </div>
        </div>
      </section>

      {/* ── SPEAKERS · holding treatment until the line-up is confirmed ── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
          <div>
            <SectionLabel>Speakers</SectionLabel>
            <BodyText style={{ marginTop: '1rem', marginBottom: 0 }}>
              One keynote per theme, plus the transatlantic fireside, from the destination marketers and brand leads doing the work. <Accent>The full line-up is announced closer to the event.</Accent>
            </BodyText>
          </div>
          <Button variant="outline" onClick={() => nav('/register')}>Get notified</Button>
        </div>
        <div className="fdb-speaker-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.25rem 1.5rem' }}>
          {[
            { theme: 'Brand', org: 'Major NTO · Brand lead' },
            { theme: 'Marketing', org: 'European NTO · Marketing' },
            { theme: 'Content', org: 'DMO · Content lead' },
            { theme: 'Data', org: 'NTO · Head of insight' },
            { theme: 'AI', org: 'DMO · AI lead' },
            { theme: 'Organisation', org: 'NTO · Organisation' },
          ].map((t) => (
            <div key={t.theme}>
              <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 3, border: '1px solid var(--fdb-border-strong)',
                background: 'repeating-linear-gradient(135deg, rgba(130,57,193,0.045) 0 9px, rgba(130,57,193,0.09) 9px 18px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.7rem', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '0.6rem', left: '0.6rem', fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple)', background: 'var(--fdb-white)', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, padding: '0.2rem 0.45rem' }}>{t.theme}</span>
                <Motif state="programme" size={46} sw={3.2} muted/>
                <span style={{ fontFamily: 'var(--fdb-font-mono)', fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>Announced soon</span>
              </div>
              <div style={{ marginTop: '0.85rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.2 }}>Keynote · {t.theme}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-muted)', marginTop: '0.2rem' }}>{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMME (paced) ─────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>The day</SectionLabel>
        <ProgrammeRow isFirst time="09:00" title="Doors and coffee" desc="Arrivals. The room settles."/>
        <ProgrammeRow time="09:30" title="Opening: the state of destination brand" tags={['Brand']}
          desc="The host opens with where the work stands and where the day is heading."
          speakers={[{ name: 'Nick Hall, CEO · Digital Tourism Think Tank' }]}/>
        <ProgrammeRow time="10:00" title="Keynote: building a national brand for AI search" tags={['Brand', 'Marketing']}
          speakers={[{ name: 'Major NTO · Brand lead · TBC', tbc: true }]}/>
        <ProgrammeRow time="10:30" title="Transatlantic fireside" tags={['Featured']}
          desc="Destination Canada, Brand USA and a European NTO, in conversation."
          speakers={[{ name: 'Destination Canada · Brand USA · European NTO · TBC', tbc: true }]}/>
        <ProgrammeRow time="11:15" title="Break"/>
        <ProgrammeRow time="11:30" title="Keynote: content as a permanent surface" tags={['Content']}
          speakers={[{ name: 'DMO · Content lead · TBC', tbc: true }]}/>
        <ProgrammeRow time="12:00" title="Keynote: measurement after the funnel" tags={['Data']}
          speakers={[{ name: 'NTO · Head of insight · TBC', tbc: true }]}/>
        <ProgrammeRow time="12:30" title="Lunch" desc="Hosted. The conversations carry over."/>
        <ProgrammeRow time="14:00" title="Keynote: deploying AI without losing the voice" tags={['AI']}
          speakers={[{ name: 'DMO · AI lead · TBC', tbc: true }]}/>
        <ProgrammeRow time="14:30" title="Keynote: organising the modern destination team" tags={['Organisation']}
          speakers={[{ name: 'NTO · Organisation · TBC', tbc: true }]}/>
        <ProgrammeRow time="15:00" title="Break"/>
        <ProgrammeRow time="15:15" title="Keynote: the new visitor brief" tags={['Marketing']}
          speakers={[{ name: 'European NTO · Marketing · TBC', tbc: true }]}/>
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
            Day Two is open to <Accent>DTTT members and invited delegates.</Accent>
          </p>
          <Button icon={ArrowIcon} onClick={() => nav('/register')}>Register your place</Button>
        </div>
      </section>
    </>
  );
}

window.KeynotesPage = KeynotesPage;
