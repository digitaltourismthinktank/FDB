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
        lead="An invite-only working day for NTO and DMO Chief Executives and their senior leadership teams, including Chief Marketing Officers and strategy and digital leads."
        meta={[
          { label: 'Date', value: 'Tuesday 02 December 2026' },
          { label: 'Location', value: 'Dublin, Ireland' },
          { label: 'Format', value: 'Invite-only · 30 to 40 participants' },
          { label: 'Convention', value: 'Held under Chatham House Rules' },
          { label: 'Host', value: 'Fáilte Ireland' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── ABOUT THE DAY ─────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>About the day</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          AI is reshaping how destinations are discovered, how visitors choose and how tourism is managed. The question this raises is about the role of destination marketing and management organisations in leading that change. The critical leadership question is <Accent>not whether to engage, but how to lead with clarity.</Accent>
        </Statement>
        <BodyText style={{ marginBottom: '1rem' }}>
          The meeting addresses two questions directly. The first is competitive: how AI is reshaping the environment for destination brands and what that means for positioning and investment. The second is organisational: what AI requires of the leaders and teams responsible for destination management and marketing. Sessions are structured to work through both in depth, with time for candid peer exchange.
        </BodyText>
        <BodyText>
          The day is hosted by Fáilte Ireland and facilitated by the Digital Tourism Think Tank. It takes place during Ireland's EU Council Presidency.
        </BodyText>
      </section>

      {/* ── THE COUNCIL - the standing output, treated as a moment ──────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-cream-deep)', borderTop: '1px solid var(--fdb-border)', borderBottom: '1px solid var(--fdb-border)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ marginBottom: '1.5rem' }}>Programme output</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.5rem', textWrap: 'balance' }}>
                The day is designed to constitute the <Accent>Global Tourism Council for AI Governance and Leadership.</Accent>
              </h2>
              <BodyText style={{ marginBottom: '1rem' }}>
                Participants are invited to form a focused leadership coalition representing destination leadership at the national, regional and city level. The Council is intended to issue the Dublin Declaration on AI in Tourism and to establish a Global Tourism Code of Practice on AI.
              </BodyText>
              <BodyText>
                The Council is convened as a focused leadership coalition rather than a new permanent institution, working a layer below established intergovernmental bodies to translate principle into practice at destination level.
              </BodyText>
              <div style={{ marginTop: '1.25rem' }}>
                <Button variant="ghost" onClick={() => nav('/council')}>Read the terms of reference →</Button>
              </div>
            </div>
            {/* the charter plate - a designed object */}
            <StackFrame offset={12} strokeWidth={1.5}>
              <div style={{ background: 'var(--fdb-cream)', border: '1px solid var(--fdb-border-strong)', borderRadius: 4, padding: '2.25rem 2rem' }}>
                <Mark size={44}/>
                <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', margin: '1.5rem 0 0.6rem' }}>Proposed · FDB 2026</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--fdb-ink)' }}>
                  Global Tourism Council<br/>for AI Governance<br/>and Leadership.
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--fdb-border)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <CouncilLine n="01">Dublin Declaration on AI in Tourism</CouncilLine>
                  <CouncilLine n="02">Global Tourism Code of Practice on AI</CouncilLine>
                  <CouncilLine n="03">Active through 2027, reporting on Day Two</CouncilLine>
                </div>
              </div>
            </StackFrame>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME ─────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>Programme</SectionLabel>
        <ProgrammeRow isFirst time="08:30" title="Networking breakfast" desc="An informal networking breakfast as participants arrive, before the working day begins."/>
        <ProgrammeRow time="09:30" title="Opening: the AI decisions that will define 2027" desc="Fáilte Ireland welcomes participants and DTTT sets the context for the year ahead: where AI moved in 2026, which leadership decisions are becoming critical as 2027 approaches, and how the day is structured to move from discussion to documented conclusions."
          speakers={[{ name: 'Caroline Bocquel, CEO · Fáilte Ireland' }, { name: 'Nick Hall, CEO · Digital Tourism Think Tank' }]}/>
        <ProgrammeRow time="10:00" title="Who is setting your organisation's AI direction?" tags={['Provocation']}
          desc="Oliver Csendes brings deep practical expertise in destination AI strategy and the organisational questions it raises. His provocation puts a single challenge to the room: whether destination leaders are actively shaping how AI positions their destination, or whether those terms are being determined by platforms, vendors and the systems already in place."
          speakers={[{ name: 'Oliver Csendes · Former CEO, Visit Hungary' }]}/>
        <ProgrammeRow time="11:00" title="Transparency, disclosure and capability: the leadership questions" tags={['Discussion']}
          desc="What does it mean for a destination organisation to be transparent about AI in its work? What should disclosure look like, and for whom? How does leadership build the organisational capability to act on these questions? This session explores these questions through the AI Transparency Framework, drawing on practice from organisations already working through them."/>
        <ProgrammeRow time="11:30" title="Working sessions"
          desc="Two concurrent working sessions, each 75 minutes. Participants are pre-assigned by relevance to the session theme. Each session produces a set of documented conclusions that feed directly into the day's published outputs.">
          <div style={{ marginTop: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <SessionCard label="Session A" title="AI readiness and organisational leadership" desc="What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."/>
            <SessionCard label="Session B" title="AI and destination competitiveness" desc="How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."/>
          </div>
        </ProgrammeRow>
        <ProgrammeRow time="13:00" title="Business lunch" desc="A working lunch that carries the morning's discussion forward, before the room reconvenes to reflect on what has emerged."/>
        <ProgrammeRow time="14:30" title="Technology platform briefing" tags={['Intelligence briefing']}
          desc="An intelligence briefing on what the major AI and search platforms are building and observing in travel and destination discovery."
          />
        <ProgrammeRow time="15:15" title="The European policy landscape" tags={['Policy']}
          desc="A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective."
          />
        <ProgrammeRow time="15:45" title="Synthesis and shared conclusions" tags={['Policy output']}
          desc="DTTT facilitates a structured synthesis of the day's work, producing the documented conclusions that form the published outputs."/>
        <ProgrammeRow time="16:30" title="Winter in Dublin"
          desc="An introduction to Fáilte Ireland's Winter in Dublin campaign, with a short contribution from Visit Dublin on the role of product and experience development in the city's strategy, followed by time to experience it before the X. Awards."/>
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

      {/* ── WHO SHOULD ATTEND ─────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <div style={{ borderTop: '2px solid var(--fdb-purple)', background: 'var(--fdb-purple-tint)', padding: '1.25rem 1.5rem', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-deep)', marginBottom: '0.5rem' }}>Who should attend</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.55, maxWidth: '52ch' }}>Chief Executives and senior leaders of national, regional, city and state destination organisations who hold a direct mandate for their organisation's direction on AI.</div>
          </div>
          <button onClick={() => window.Intercom && window.Intercom('show')} style={{ flexShrink: 0, fontFamily: 'var(--fdb-font-sans)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', color: 'var(--fdb-purple-deep)', background: 'var(--fdb-white)', border: '1px solid var(--fdb-purple-soft)', borderRadius: 3, padding: '0.6rem 1.1rem', cursor: 'pointer' }}>Request an invitation</button>
        </div>
      </section>

      {/* ── PUBLISHED OUTPUTS - designed document objects ─────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Published outputs</SectionLabel>
        <Statement style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
          The day produces a set of documents <Accent>built for destination leaders:</Accent> a shared position on AI they can take to their own boards and governments, and practical instruments they can apply at home.
        </Statement>
        <BodyText style={{ marginBottom: '2.5rem' }}>Because the sector speaks with one voice, these outputs also reach national governments, EU institutions and the technology companies shaping the tools and regulatory environment that affects destination work.</BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem 1.75rem' }}>
          <DocumentObject kind="Declaration" title="Dublin Declaration on AI in Tourism" desc="A shared statement of principle that destination leaders can take to their own boards and governments."/>
          <DocumentObject kind="Code of Practice" title="Global Tourism Code of Practice on AI" desc="A proposed operating standard for the sector, built on the AI Transparency Framework."/>
          <DocumentObject kind="Report" title="State of Destination AI Report" desc="A comprehensive synthesis of the day, distributed across the industry."/>
          <DocumentObject kind="Briefing" title="Executive Briefing Summary" desc="Concise, formal, designed to be read by policy audiences."/>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <p style={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', textWrap: 'pretty' }}>
            The day gives destination leaders a <Accent>shared position on AI</Accent> and practical instruments they can apply within their own organisations.
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

// Role-only card for defined but unconfirmed contributor slots.
// Uses the council motif and diagonal pattern in place of a portrait.
function RoleCard({ role, desc }) {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
        <div style={{ position: 'absolute', top: 16, left: 16, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, opacity: 0.55, zIndex: 0 }}/>
        <div style={{ position: 'absolute', top: 8, left: 8, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, zIndex: 1 }}/>
        <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--fdb-purple)', borderRadius: 2, zIndex: 2, overflow: 'hidden',
          background: 'repeating-linear-gradient(135deg, rgba(130,57,193,0.03) 0 9px, rgba(130,57,193,0.07) 9px 18px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Motif state="council" size={40} sw={2.5} muted/>
          <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--fdb-purple)', textAlign: 'center', padding: '0 1.25rem', lineHeight: 1.5 }}>{role}</span>
        </div>
      </div>
      <div style={{ marginTop: '0.85rem' }}>
        <div style={{ fontSize: '0.98rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.15 }}>{role}</div>
        {desc && <div style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-mid)', marginTop: '0.25rem', lineHeight: 1.4 }}>{desc}</div>}
      </div>
    </div>
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
          <div style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', marginTop: '1rem' }}>FDB 2026</div>
        </div>
      </StackFrame>
      <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.55, marginTop: '1rem' }}>{desc}</div>
    </div>
  );
}

window.LeadershipPage = LeadershipPage;
window.DocumentObject = DocumentObject;
