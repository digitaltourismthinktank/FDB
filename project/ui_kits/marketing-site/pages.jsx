/* eslint-disable */
// FDB Marketing Site — Page compositions
// Overview (home) · Leadership Day · Summit · X. Awards

const PAGE_WRAP = {
  maxWidth: 1000, margin: '0 auto', padding: '0 3rem 5rem',
};

const HR = () => <hr style={{ border: 'none', borderTop: '1px solid var(--fdb-border)', margin: 0 }}/>;

// ─── OVERVIEW (LANDING) ─────────────────────────────────────────────────────
function OverviewPage({ onNav }) {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', maxWidth: 1000, margin: '0 auto', padding: '5rem 3rem 4.5rem' }}>
        <HeroStackDecor/>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 540 }}>
          <Eyebrow>Future · Destination · Brand · 2026</Eyebrow>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.75rem' }}>
            A global<br/>gathering of<br/><Accent>CMOs of leading<br/>destinations.</Accent>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
            Two days in Dublin. A working leadership day on AI in destination management, a senior marketing summit and the X. Awards.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button icon={ArrowIcon} onClick={() => onNav('/leadership')}>View programme</Button>
            <Button variant="ghost">Request an invitation</Button>
          </div>
        </div>
      </section>

      <HR/>

      <div style={PAGE_WRAP}>
        <SectionLabel>The two days</SectionLabel>

        <Statement>FDB 2026 is convened by <Accent>Fáilte Ireland</Accent> under Ireland's EU Council Presidency and facilitated by the <Accent>Digital Tourism Think Tank.</Accent></Statement>
        <BodyText>The room is small by design. Outputs reach EU institutions, national governments and the technology companies shaping the tools and regulations that govern destination marketing.</BodyText>

        {/* TWO-CARD GRID for the days */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 1.75rem', marginTop: '2.5rem' }}>
          <StackFrame offset={10}>
            <DayCard
              label="Day 1 · Leadership Programme"
              title="Leadership in the Age of AI."
              desc="Invite-only working day for ~30–40 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format, no stage. Outputs published to EU institutions."
              cta="Day 1 programme"
              onClick={() => onNav('/leadership')}
            />
          </StackFrame>
          <StackFrame offset={10}>
            <DayCard
              label="Day 2 · Summit"
              title="The state of destination brand."
              desc="The annual gathering of destination CMOs and senior marketers, followed in the evening by the X. Awards — the sector's most respected recognition of branding, transformation and digital innovation."
              cta="Day 2 programme"
              onClick={() => onNav('/summit')}
            />
          </StackFrame>
        </div>

        <SectionLabel>By the numbers</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--fdb-border)', border: '1px solid var(--fdb-border)', borderRadius: 4, overflow: 'hidden' }}>
          {[
            { n: '30–40', l: 'Senior leaders in the room' },
            { n: '8–10', l: 'Active contributors' },
            { n: '2', l: 'Published policy outputs' },
            { n: '1', l: 'EU Presidency submission' },
          ].map((s, i) => (
            <div key={i} style={{ background: 'var(--fdb-cream)', padding: '1.5rem 1.25rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--fdb-purple)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--fdb-ink-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <SectionLabel>Hosted by</SectionLabel>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <HostLogo>Fáilte<br/>Ireland</HostLogo>
          <HostLogo>Digital Tourism<br/>Think Tank</HostLogo>
          <HostLogo>Irish EU Council<br/>Presidency</HostLogo>
        </div>
      </div>
    </>
  );
}

function DayCard({ label, title, desc, cta, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      border: '1px solid var(--fdb-border-strong)', borderRadius: 4,
      padding: '1.75rem 1.75rem 1.5rem', background: 'rgba(255,255,255,0.4)',
      borderColor: hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)',
      transition: 'border-color 0.15s',
      cursor: 'pointer',
    }} onClick={onClick}>
      <div style={{
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '0.75rem',
      }}>{label}</div>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.75rem', lineHeight: 1.15 }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{desc}</p>
      <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)' }}>{cta} →</span>
    </div>
  );
}

function HostLogo({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{ width: 36, height: 36, border: '1px solid var(--fdb-border-strong)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 14, height: 14, background: 'var(--fdb-ink-faint)', borderRadius: 1 }}></div>
      </div>
      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--fdb-ink)', lineHeight: 1.2 }}>{children}</span>
    </div>
  );
}

// ─── LEADERSHIP DAY (canonical recreation) ──────────────────────────────────
function LeadershipPage() {
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', maxWidth: 1000, margin: '0 auto', padding: '5rem 3rem 4.5rem' }}>
        <HeroStackDecor/>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 540 }}>
          <Eyebrow>Day One · Leadership Programme</Eyebrow>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.75rem' }}>
            Leadership<br/>in the Age<br/>of <Accent>AI.</Accent>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
            A global leadership day for national tourism organisation CEOs, senior government ministers and the technology leaders shaping AI's role in destination marketing and management.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <MetaRow label="Date" value="December 2026 (TBC)"/>
            <MetaRow label="Location" value="Dublin, Ireland"/>
            <MetaRow label="Format" value="Invite-only · 30 to 40 participants"/>
            <MetaRow label="Host" value="Fáilte Ireland"/>
            <MetaRow label="Presidency" value="Irish EU Council Presidency · H2 2026"/>
          </div>
        </div>
      </section>

      <HR/>

      <div style={PAGE_WRAP}>
        <SectionLabel>About the day</SectionLabel>
        <Statement>AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is <Accent>not whether to engage.</Accent> It is whether leadership is ready.</Statement>
        <BodyText>Leadership in the Age of AI is a structured, invite-only day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level. The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design.</BodyText>
        <BodyText>The day is convened by Fáilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. It precedes Future. Destination. Brand. 2026, DTTT's flagship annual summit.</BodyText>

        <PolicyBar items={[
          { label: 'For destinations', text: "A mechanism for the sector to speak with one voice on AI policy, rather than leaving that agenda to platform companies alone." },
          { label: 'For technology leaders', text: "Direct engagement with the leaders responsible for tourism at national scale, and a role in shaping the sector's position on AI governance." },
          { label: 'For EU institutions', text: "A structured, expert contribution to the AI and digital policy agenda from one of the sector's most senior international forums." },
        ]}/>

        <BodyText>The outputs of this day are submitted to EU institutions as a sector contribution during the Irish Presidency and distributed to the technology companies shaping the tools and regulations that govern destination marketing. What participants bring to this table does not stay in the room.</BodyText>

        <HR/>

        <SectionLabel>Programme</SectionLabel>
        <ProgrammeRow isFirst time="08:30" title="Private breakfast" desc="Seated breakfast for all participants. Introductions happen informally before the working day begins."/>
        <ProgrammeRow time="09:30" title="Welcome and framing" desc="Fáilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method."
          speakers={[{ name: 'Caroline Bocquel, CEO · Fáilte Ireland' }, { name: 'Nick Hall, CEO · Digital Tourism Think Tank' }]}/>
        <ProgrammeRow time="10:00" title="Opening provocation"
          desc="A senior voice with direct experience of NTO leadership and the AI and data investment landscape delivers a deliberate challenge to the room. Twenty minutes, no slides."
          tags={['Provocation', 'Open response']}
          speakers={[{ name: 'Oliver Csendes · Former CEO, Visit Hungary' }]}/>
        <ProgrammeRow time="11:00" title="AI in destination leadership: a shared framework"
          desc="DTTT introduces the AI Transparency Framework as a leadership instrument. Illustrated with practice from NTOs already deploying it nationally."
          tags={['Framework', 'Peer testimony']}
          speakers={[{ name: 'NTO leaders engaged in AI governance programmes · TBC', tbc: true }]}/>
        <ProgrammeRow time="11:30" title="Working sessions"
          desc="Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs.">
          <div style={{ marginTop: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <SessionCard label="Session A" title="AI readiness and organisational leadership" desc="What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."/>
            <SessionCard label="Session B" title="AI and destination competitiveness" desc="How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."/>
          </div>
        </ProgrammeRow>
        <ProgrammeRow time="13:00" title="Private lunch" desc="Seated, hosted, informal. The conversation continues."/>
        <ProgrammeRow time="14:30" title="Big Tech intelligence briefing"
          desc="A senior representative from one of Dublin's major technology companies delivers a briefing on what the platforms are building and what they are observing in travel and destination search."
          tags={['Intelligence briefing']}
          speakers={[{ name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC', tbc: true }]}/>
        <ProgrammeRow time="15:15" title="The European policy landscape"
          desc="A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective."
          tags={['Policy']}
          speakers={[{ name: 'EU institutional or government representative · TBC', tbc: true }]}/>
        <ProgrammeRow time="15:45" title="Synthesis and shared conclusions"
          desc="DTTT facilitates a structured synthesis of the day's working sessions. The output is a small number of documented priorities forming the basis of the Executive Briefing Summary submitted to EU institutions."
          tags={['Policy output']}/>
        <ProgrammeRow time="16:30" title="Dublin city experience"
          desc="A curated late afternoon in Dublin, in partnership with Fáilte Ireland's Winter in Dublin programme. Details to be confirmed."/>
        <ProgrammeRow time="19:30" title="X. Awards"
          desc="Transition to the X. Awards evening. The industry's most respected recognition of destination branding, transformation and digital innovation."/>

        <SectionLabel>Who is in the room</SectionLabel>
        <BodyText style={{ marginBottom: '1.5rem' }}>The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated by invitation only.</BodyText>

        <ParticipantsGrid cells={[
          { type: 'Host', name: 'Caroline Bocquel', org: 'CEO · Fáilte Ireland' },
          { type: 'Provocation', name: 'Oliver Csendes', org: 'Former CEO · Visit Hungary<br/>UN Tourism advisor' },
          { type: 'Facilitation', name: 'Nick Hall', org: 'CEO · Digital Tourism Think Tank' },
          { type: 'Technology briefing', name: 'Senior representative', org: 'Google / Microsoft / OpenAI<br/>Dublin · TBC', tbc: true },
          { type: 'Policy voice', name: 'EU institutional representative', org: 'European institution or government<br/>TBC', tbc: true },
          { type: 'NTO leadership', name: 'North American CEO', org: 'National or major regional tourism organisation · TBC', tbc: true },
          { type: 'Further participants', long: true, span: 3, tint: true, name: '20 to 30 additional NTO and DMO chief executives and C-suite leaders, by personal invitation.' },
        ]}/>

        <SectionLabel>Published outputs</SectionLabel>
        <BodyText style={{ marginBottom: '1.5rem' }}>The day produces two formal outputs, both published after the event and distributed beyond the room.</BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 1.75rem', marginTop: '0.5rem' }}>
          <StackFrame offset={8}><OutputItem name="State of Destination AI Report" desc="A comprehensive synthesis of insights from the leadership day. Published post-event, distributed across the industry and submitted to relevant EU institutions."/></StackFrame>
          <StackFrame offset={8}><OutputItem name="Executive Briefing Summary" desc="A structured summary of the leadership day's conclusions and priority recommendations. Concise, formal, designed to be read by policy audiences."/></StackFrame>
        </div>

        {/* CLOSING */}
        <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--fdb-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.02em', color: 'var(--fdb-ink)' }}>
            The outputs of this day reach <Accent>EU institutions, national governments</Accent> and the technology companies shaping the tools and regulations that govern destination marketing.
          </p>
          <div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--fdb-ink-muted)', marginBottom: '1.5rem' }}>
              Places on the leadership day are by personal invitation only. To discuss participation, please get in touch.
            </p>
            <Button icon={ChatIcon}>Get in touch</Button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── SUMMIT (DAY 2) ─────────────────────────────────────────────────────────
function SummitPage() {
  const speakers = [
    { name: 'Nick Hall',         org: 'Digital Tourism Think Tank', role: 'CEO · Host', color: '#6F8FA8' },
    { name: 'Caroline Bocquel',  org: 'Fáilte Ireland',             role: 'CEO',        color: '#94816A' },
    { name: 'Speaker TBC',       org: 'European NTO',               role: 'Provocation',color: '#A09EB4' },
    { name: 'Speaker TBC',       org: 'Major NTO · Asia-Pacific',   role: 'Keynote',    color: '#7B8C7A' },
  ];
  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', maxWidth: 1000, margin: '0 auto', padding: '5rem 3rem 4.5rem' }}>
        <HeroStackDecor/>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 540 }}>
          <Eyebrow>Day Two · Summit</Eyebrow>
          <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.75rem' }}>
            The state<br/>of destination<br/><Accent>brand.</Accent>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
            The annual gathering of destination CMOs and senior marketers. A working programme on positioning, narrative and digital channels, followed in the evening by the X. Awards.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <MetaRow label="Date" value="December 2026 (TBC)"/>
            <MetaRow label="Audience" value="Senior destination marketers"/>
            <MetaRow label="Format" value="Summit + X. Awards evening"/>
          </div>
        </div>
      </section>

      <HR/>

      <div style={PAGE_WRAP}>
        <SectionLabel>Speakers</SectionLabel>
        <BodyText style={{ marginBottom: '2.5rem' }}>A confirmed and TBC line-up of senior destination, brand and platform leaders. Full schedule and additional speakers are released closer to the event.</BodyText>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem 1.5rem', rowGap: '5rem', marginTop: '0.5rem' }}>
          {speakers.map((s, i) => (
            <div key={i} style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
              <div style={{ position: 'absolute', top: 18, left: 18, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, opacity: 0.6, zIndex: 0 }}></div>
              <div style={{ position: 'absolute', top: 9, left: 9, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, zIndex: 1 }}></div>
              <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--fdb-purple)', borderRadius: 2, background: s.color, zIndex: 2, overflow: 'hidden' }}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: -8, left: '10%', width: '80%', height: '90%', opacity: 0.85 }}>
                  <ellipse cx="50" cy="32" rx="18" ry="22" fill="#2A3F50"/>
                  <path d="M14 100 Q20 56 50 56 Q80 56 86 100 Z" fill="#2A3F50"/>
                </svg>
              </div>
              <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: '1rem', width: '100%' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.15 }}>{s.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-mid)', marginTop: '0.2rem' }}>{s.org}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--fdb-ink-muted)', marginTop: '0.1rem' }}>{s.role}</div>
              </div>
            </div>
          ))}
        </div>

        <SectionLabel style={{ paddingTop: '6rem' }}>What the summit covers</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem 1.75rem' }}>
          <StackFrame offset={8}><OutputItem name="Destination positioning in AI search" desc="How visitors discover places when an answer-engine sits between them and the brand."/></StackFrame>
          <StackFrame offset={8}><OutputItem name="The new visitor brief" desc="Narrative, voice, and the shift from campaign to permanent content surface."/></StackFrame>
          <StackFrame offset={8}><OutputItem name="Measurement after the funnel" desc="Reporting destination marketing performance to boards and ministers in 2026."/></StackFrame>
          <StackFrame offset={8}><OutputItem name="The X. Awards" desc="Recognising the year's strongest work in branding, transformation and digital innovation."/></StackFrame>
        </div>
      </div>
    </>
  );
}

// ─── X. AWARDS ──────────────────────────────────────────────────────────────
function AwardsPage({ dark }) {
  const cats = [
    { name: 'Destination Brand of the Year',     desc: 'The strongest national or regional brand expression of 2026.' },
    { name: 'Digital Transformation',            desc: 'Most ambitious end-to-end digital programme inside an NTO/DMO.' },
    { name: 'Sustainable Tourism Communications',desc: 'Most credible, measurable sustainability narrative.' },
    { name: 'AI in Destination Marketing',       desc: 'Material, deployed use of AI — not a pitch deck.' },
    { name: 'Best Campaign',                     desc: 'Single campaign, judged on craft and effect.' },
    { name: 'Emerging Destination',              desc: 'Newer brands punching above their weight.' },
  ];
  return (
    <>
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '5rem 3rem 4.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end' }}>
        <div>
          <Eyebrow>Day Two · Evening</Eyebrow>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <img src={dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-wordmark.png"} alt="X. Awards" style={{ height: 72, width: 'auto', display: 'block' }}/>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--fdb-ink)', marginBottom: '1.75rem' }}>
            The year's strongest work in <Accent>destination branding.</Accent>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '42ch', marginBottom: '2.5rem' }}>
            The industry's most respected recognition of destination branding, transformation and digital innovation. Awarded the evening of Day Two.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button icon={ArrowIcon}>Submit your entry</Button>
            <Button variant="outline">Past winners</Button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src={dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-mark.png"} alt="X. Awards" style={{ width: dark ? 320 : 200, height: 'auto', display: 'block' }}/>
        </div>
      </section>

      <HR/>

      <div style={PAGE_WRAP}>
        <SectionLabel>Categories</SectionLabel>
        <Statement>Six categories. <Accent>One ceremony.</Accent> Judged by a panel of senior destination, brand and policy leaders.</Statement>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2.5rem' }}>
          {cats.map((c, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem', paddingBottom: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--fdb-ink)', lineHeight: 1.3 }}>{c.name}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--fdb-purple)' }}>0{i+1}</div>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        <SectionLabel>Key dates</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--fdb-border)', border: '1px solid var(--fdb-border)', borderRadius: 4, overflow: 'hidden' }}>
          {[
            { lbl: 'Entries open', val: 'June 2026' },
            { lbl: 'Entries close', val: 'October 2026' },
            { lbl: 'Ceremony', val: 'December 2026 · Dublin' },
          ].map((d, i) => (
            <div key={i} style={{ background: 'var(--fdb-cream)', padding: '1.5rem 1.25rem' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '0.4rem' }}>{d.lbl}</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--fdb-ink)' }}>{d.val}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { OverviewPage, LeadershipPage, SummitPage, AwardsPage });
