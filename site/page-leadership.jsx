/* eslint-disable */
// FDB 2026 - Day One · Leadership in the Age of AI
// Register: close, considered, almost private. Single column, deep whitespace,
// hairlines, the council motif nested and contained. The Council formation and
// the published outputs are treated as designed moments, not section headers.

function LeadershipPage() {
  const { nav } = useNav();
  return (
    <>
      <DayHero
        station="council"
        eyebrow="Day One · 02 December · Leadership programme"
        title={<>Leadership<br/>in the Age<br/>of <Accent>AI.</Accent></>}
        lead="A structured, invite-only working day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level."
        meta={[
          { label: 'Date', value: 'Tuesday 02 December 2026' },
          { label: 'Location', value: 'Dublin, Ireland' },
          { label: 'Format', value: 'Invite-only · 30 to 40 participants' },
          { label: 'Convention', value: 'Held under the Chatham House Rule' },
          { label: 'Host', value: 'Fáilte Ireland · Irish EU Presidency' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── ABOUT THE DAY ─────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>About the day</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The critical question for destination leadership is <Accent>not whether to engage, but how to lead with clarity.</Accent>
        </Statement>
        <BodyText style={{ marginBottom: '1rem' }}>
          The meeting is structured around two parallel questions: how AI changes the competitive environment for destination brands, and what it requires of the organisations and leaders responsible for them. Sessions are designed for working through both in depth, with time for candid peer exchange.
        </BodyText>
        <BodyText>
          The day is convened by Fáilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. Its conclusions are documented and submitted to EU institutions under the Irish Presidency.
        </BodyText>
      </section>

      {/* ── THE COUNCIL - the standing output, treated as a moment ──────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-cream-deep)', borderTop: '1px solid var(--fdb-border)', borderBottom: '1px solid var(--fdb-border)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ marginBottom: '1.5rem' }}>The standing output</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.5rem', textWrap: 'balance' }}>
                The room constitutes the <Accent>Global Tourism Council</Accent> for AI Governance and Leadership.
              </h2>
              <BodyText>
                This is not a panel and not a session. It is the formation of a standing body. The Council issues the Dublin Declaration on AI in Tourism and establishes the Global Tourism Code of Practice on AI, submitted to EU institutions under the Irish Presidency.
              </BodyText>
            </div>
            {/* the charter plate - a designed object */}
            <StackFrame offset={12} strokeWidth={1.5}>
              <div style={{ background: 'var(--fdb-cream)', border: '1px solid var(--fdb-border-strong)', borderRadius: 4, padding: '2.25rem 2rem' }}>
                <Mark size={44}/>
                <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', margin: '1.5rem 0 0.6rem' }}>Constituted at FDB 2026</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--fdb-ink)' }}>
                  Global Tourism Council<br/>for AI Governance<br/>and Leadership.
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--fdb-border)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <CouncilLine n="01">Dublin Declaration on AI in Tourism</CouncilLine>
                  <CouncilLine n="02">Global Tourism Code of Practice on AI</CouncilLine>
                  <CouncilLine n="03">Standing through 2027, reporting on Day Two</CouncilLine>
                </div>
              </div>
            </StackFrame>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ─────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>Programme</SectionLabel>
        <ProgrammeRow isFirst time="08:30" title="Private breakfast" desc="Seated breakfast for all participants. Introductions happen informally before the working day begins."/>
        <ProgrammeRow time="09:30" title="Welcome and framing" desc="Fáilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method."
          speakers={[{ name: 'Caroline Bocquel, CEO · Fáilte Ireland' }, { name: 'Nick Hall, CEO · Digital Tourism Think Tank' }]}/>
        <ProgrammeRow time="10:00" title="Opening provocation" tags={['Provocation', 'Open response']}
          desc="A senior voice with direct experience of NTO leadership delivers a deliberate challenge to the room. Twenty minutes, no slides."
          speakers={[{ name: 'Oliver Csendes · Former CEO, Visit Hungary' }]}/>
        <ProgrammeRow time="11:00" title="AI in destination leadership: a shared framework" tags={['Framework', 'Peer testimony']}
          desc="DTTT introduces the AI Transparency Framework as a leadership instrument, illustrated with practice from NTOs already deploying it nationally."
          speakers={[{ name: 'NTO leaders engaged in AI governance programmes · TBC', tbc: true }]}/>
        <ProgrammeRow time="11:30" title="Working sessions"
          desc="Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs.">
          <div style={{ marginTop: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <SessionCard label="Session A" title="AI readiness and organisational leadership" desc="What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."/>
            <SessionCard label="Session B" title="AI and destination competitiveness" desc="How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."/>
          </div>
        </ProgrammeRow>
        <ProgrammeRow time="13:00" title="Private lunch" desc="Seated, hosted, informal. The conversation continues."/>
        <ProgrammeRow time="14:30" title="Big Tech intelligence briefing" tags={['Intelligence briefing']}
          desc="A senior representative from one of Dublin's major technology companies briefs the room on what the platforms are building and observing in travel and destination search."
          speakers={[{ name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC', tbc: true }]}/>
        <ProgrammeRow time="15:15" title="The European policy landscape" tags={['Policy']}
          desc="A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective."
          speakers={[{ name: 'EU institutional or government representative · TBC', tbc: true }]}/>
        <ProgrammeRow time="15:45" title="Synthesis and shared conclusions" tags={['Policy output']}
          desc="DTTT facilitates a structured synthesis of the day's work into a small number of documented priorities, forming the basis of the Executive Briefing submitted to EU institutions."/>
        <ProgrammeRow time="16:30" title="Dublin city experience"
          desc="A curated late afternoon in Dublin, in partnership with Fáilte Ireland's Winter in Dublin programme. Details to be confirmed."/>
        <ProgrammeRow time="19:30" title="X. Awards"
          desc="Transition to the X. Awards evening. The first AI-Positive Industry Awards.">
          <div style={{ marginTop: '0.85rem' }}>
            <Button variant="ghost" onClick={() => nav('/awards')}>See the X. Awards →</Button>
          </div>
        </ProgrammeRow>
      </section>

      {/* ── BEFORE YOU ARRIVE - AI Act companion teaser ───────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <StackFrame offset={10}>
          <div style={{ border: '1px solid var(--fdb-purple-soft)', background: 'var(--fdb-purple-tint)', borderRadius: 4, padding: '2rem 2.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '54ch' }}>
              <Eyebrow style={{ marginBottom: '0.75rem' }}>Before you arrive</Eyebrow>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.5rem' }}>The EU AI Act readiness assessment.</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.6 }}>Participants complete a fifteen-question readiness assessment before the day. A public-facing companion to Day One.</div>
            </div>
            <Button icon={ArrowIcon} onClick={() => nav('/ai-act')}>Open the assessment</Button>
          </div>
        </StackFrame>
      </section>

      {/* ── WHO IS IN THE ROOM - portraits ────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Who is in the room</SectionLabel>
        <BodyText style={{ marginTop: '1rem', marginBottom: '2.5rem' }}>
          The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated <Accent>by invitation only.</Accent>
        </BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem 1.5rem' }}>
          <PortraitFrame name="Caroline Bocquel" org="CEO · Fáilte Ireland" role="Host" tone="#94816A"/>
          <PortraitFrame name="Nick Hall" org="CEO · Digital Tourism Think Tank" role="Facilitation" tone="#6F8FA8"/>
          <PortraitFrame name="Oliver Csendes" org="Former CEO · Visit Hungary<br/>Destination AI Strategist" role="Provocation" tone="#7B8C7A"/>
          <PortraitFrame name="Senior representative" org="Google / Microsoft / OpenAI · Dublin" role="Technology briefing" tbc tone="#A09EB4"/>
        </div>
        <div style={{ marginTop: '2.5rem', borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem', background: 'var(--fdb-purple-tint)', padding: '1.25rem 1.5rem', borderRadius: 4 }}>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-deep)', marginBottom: '0.4rem' }}>Further participants</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.5 }}>20 to 30 additional NTO and DMO chief executives and C-suite leaders, one or two EU and member-state policy voices, by personal invitation.</div>
        </div>
      </section>

      {/* ── PUBLISHED OUTPUTS - designed document objects ─────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Published outputs</SectionLabel>
        <Statement style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
          Four documents leave this room. They are written to be read in <Accent>Brussels and in national capitals.</Accent>
        </Statement>
        <BodyText style={{ marginBottom: '2.5rem' }}>Published after the event and distributed beyond the room, to EU institutions and to the technology companies shaping the tools and regulations that govern destination work.</BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem 1.75rem' }}>
          <DocumentObject kind="Declaration" title="Dublin Declaration on AI in Tourism" desc="The Council's founding statement of principle. Submitted under the Irish Presidency."/>
          <DocumentObject kind="Code of Practice" title="Global Tourism Code of Practice on AI" desc="The operating standard the sector commits to. Built on the AI Transparency Framework."/>
          <DocumentObject kind="Report" title="State of Destination AI Report" desc="A comprehensive synthesis of the day, distributed across the industry."/>
          <DocumentObject kind="Briefing" title="Executive Briefing Summary" desc="Concise, formal, designed to be read by policy audiences."/>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <p style={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', textWrap: 'pretty' }}>
            The outputs of this day reach <Accent>EU institutions, national governments</Accent> and the technology companies shaping destination marketing.
          </p>
          <div>
            <BodyText style={{ marginBottom: '1.5rem' }}>Places on the leadership day are by personal invitation only. To discuss participation, please get in touch.</BodyText>
            <Button icon={ChatIcon} onClick={() => nav('/register')}>Get in touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function CouncilLine({ n, children }) {
  return (
    <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'baseline' }}>
      <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--fdb-purple)', flexShrink: 0 }}>{n}</span>
      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--fdb-ink-mid)', lineHeight: 1.4 }}>{children}</span>
    </div>
  );
}

// A published document rendered as a designed object - a paper plate with the
// mark, a kind label, the title, and suggested body lines.
function DocumentObject({ kind, title, desc }) {
  return (
    <div>
      <StackFrame offset={8} strokeWidth={1}>
        <div style={{ background: 'var(--fdb-white)', border: '1px solid var(--fdb-border-strong)', borderRadius: 3, padding: '1.25rem 1.25rem 1.4rem', aspectRatio: '3/4', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Mark size={24}/>
            <span style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-purple)' }}>{kind}</span>
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--fdb-ink)', marginTop: '1.5rem' }}>{title}</div>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6, paddingTop: '1.25rem' }}>
            {[1, 0.92, 0.78, 0.6].map((w, i) => <span key={i} style={{ height: 2, width: `${w * 100}%`, background: 'var(--fdb-border-strong)', borderRadius: 2 }}/>)}
          </div>
          <div style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', marginTop: '1rem' }}>Submitted · EU institutions · 2026</div>
        </div>
      </StackFrame>
      <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.55, marginTop: '1rem' }}>{desc}</div>
    </div>
  );
}

window.LeadershipPage = LeadershipPage;
