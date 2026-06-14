/* eslint-disable */
// FDB 2026 - Global Tourism Council for AI Governance and Leadership
// Supporting page to the Leadership day. One level more formal.
// Terms of reference, Q&A and outputs. No new design tokens.

const COUNCIL_GAPS = [
  {
    label: 'The discovery gap',
    body: 'AI now sits between the traveller and the destination. Results are generated rather than listed, assistants summarise and recommend, and much of this happens through systems destinations neither own nor influence. A shared vocabulary for describing destinations to these systems exists, yet most destination organisations barely use it, and there is no agreed way to signal the official and accurate source.',
  },
  {
    label: 'The governance gap',
    body: 'AI regulation is arriving, led by the EU AI Act and echoed in other markets. It is written for AI in general, not for destinations. No one has yet translated what it means for how a destination organisation markets a place, handles visitor data or represents itself through AI.',
  },
  {
    label: 'The capability gap',
    body: 'Adoption across the sector is uneven and mostly tactical. Few organisations hold a leadership-level position on where AI strengthens the brand and the visitor relationship, where it erodes them and where the lines should sit. Significant decisions are being deferred because the questions feel too large to answer alone.',
  },
  {
    label: 'The voice gap',
    body: 'While the sector hesitates, platforms and regulators are setting the terms. The bodies that represent tourism carry broad mandates and move at the pace breadth requires. On this specific and fast-moving question, destinations risk inheriting a framework shaped around platform and regulatory priorities rather than the interests of places and the people who visit them.',
  },
  {
    label: 'The imperative for global leadership',
    body: 'None of these gaps stops at a border. Travellers are global, the platforms are global, and the regulatory direction set in one market shapes the tools used in all of them. The questions are common to destinations everywhere, so the answer has to be developed by leaders across regions together, or it fractures into incompatible national approaches that serve no one.',
  },
];

const COUNCIL_TOR = [
  {
    label: 'Purpose',
    body: 'To establish a shared leadership position on AI in destination tourism, and to produce durable outputs the sector and its institutions can use.',
  },
  {
    label: 'Scope',
    body: 'AI as it affects destination branding, marketing, management and the visitor relationship. Questions of principle, practice and positioning at the leadership level. Not technical standards, and not the internal AI operations of any single organisation.',
  },
  {
    label: 'Participation',
    body: 'Senior leaders of national, regional and city destination organisations, by invitation. Participation is personal, carries no fee and creates no binding obligation. Participants contribute in their own capacity and that of their organisation, not on behalf of the sector as a whole.',
  },
  {
    label: 'Convening and facilitation',
    body: "Hosted by Fáilte Ireland and facilitated by the Digital Tourism Think Tank, which convenes the Council, facilitates its discussion and documents its outputs. It takes place during Ireland's EU Council Presidency. The Digital Tourism Think Tank does not own the outputs, which belong to the participating leaders.",
  },
  {
    label: 'Timeline',
    body: 'Convened for Future. Destination. Brand. 2026. Outputs are drafted at the meeting, finalised in the weeks that follow, and their progress is reported at the next gathering in 2027. There is no permanent secretariat.',
  },
  {
    label: 'Outputs',
    body: 'The Dublin Declaration on AI in Tourism, a proposed Global Tourism Code of Practice on AI built on the AI Transparency Framework, and a contribution to the State of Destination AI Report and Executive Briefing.',
  },
  {
    label: 'How positions are agreed',
    body: 'Positions are developed through facilitated discussion and circulated to participants for endorsement after the meeting. Participants choose whether to be named.',
  },
  {
    label: 'What it does not do',
    body: 'It does not regulate, certify, accredit or speak on behalf of any organisation. It creates no permanent institution and no continuing obligation, and it does not duplicate the work of established international bodies.',
  },
];

const COUNCIL_QA = [
  {
    q: 'Is this not the role of existing international bodies?',
    a: 'The Council supports their role, it does not assume it. The intergovernmental and sector bodies carry broad mandates and set high-level direction. The Council works a layer below, among the organisations that market and manage destinations day to day, turning principle into practice at a speed a fast-moving question demands. Its outputs are designed to feed that wider system, not to compete with it.',
  },
  {
    q: 'Where does its authority come from?',
    a: 'From the seniority and international breadth of the leaders who take part, and from the quality of what they produce. The Council claims no mandate over anyone. It does not regulate or certify, and it speaks for no organisation but those whose leaders choose to stand behind its outputs.',
  },
  {
    q: 'What am I committing to by taking part?',
    a: 'Your contribution to a shared position, and nothing beyond it. There is no fee, no membership and no continuing obligation. Your name is attached to the outputs only if you choose.',
  },
  {
    q: 'Is this a Digital Tourism Think Tank initiative under another name?',
    a: 'The Digital Tourism Think Tank convenes, facilitates and documents the work. It does not own the result. The Dublin Declaration and the Code of Practice belong to the leaders who shape them.',
  },
  {
    q: 'How does it relate to UN Tourism and the Riyadh Declaration?',
    a: "It complements them. UN Tourism's work is intergovernmental and ministerial, and its adoption of the Riyadh Declaration in 2025 placed AI firmly on the global agenda. The Council operates at the level of destination organisations and their practice. The two are designed to reinforce one another, not to overlap.",
  },
  {
    q: 'What happens after 2027?',
    a: 'The Council is time-bound by design. It is convened for Future. Destination. Brand. 2026 and reports on its outputs through 2027. Any continuation would be a decision for the participating leaders, not an assumption built into its creation.',
  },
];

function CouncilPage() {
  const { nav } = useNav();
  return (
    <>
      <DayHero
        station="council"
        eyebrow="Future. Destination. Brand. 2026 · Dublin"
        title={<>The <Accent>Global Tourism Council</Accent><br/>for AI Governance<br/>and Leadership.</>}
        lead="A leadership coalition of senior destination executives, convened to agree how the sector leads on AI and to set that position down in outputs the wider sector and its institutions can use."
        meta={[
          { label: 'Convened', value: 'Future. Destination. Brand. 2026' },
          { label: 'Form', value: 'Leadership coalition' },
          { label: 'Reporting', value: 'Through 2027' },
        ]}
      >
        <div style={{ marginTop: '2rem' }}>
          <Button variant="ghost" onClick={() => nav('/leadership')}>← Back to the Leadership day</Button>
        </div>
      </DayHero>

      <hr className="fdb-rule"/>

      {/* ── WHAT IT IS ───────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>What it is</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          It is the leadership of the room acting together, <Accent>with intent.</Accent>
        </Statement>
        <BodyText>
          The Council brings senior destination leaders into one room to agree a shared position on AI, and to produce a small number of durable outputs. It is not a permanent institution and it does not regulate anyone. Its authority rests on the seniority and international breadth of the leaders who take part, and its value lies in what they produce.
        </BodyText>
      </section>

      {/* ── WHY IT IS NEEDED NOW ─────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.25rem' }}>Why it is needed now</SectionLabel>
        <BodyText style={{ marginBottom: '2.5rem' }}>
          The case for a shared position rests on a set of gaps that no destination can close on its own.
        </BodyText>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem 1.75rem' }}>
          {COUNCIL_GAPS.map((g, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.25, marginBottom: '0.6rem' }}>{g.label}.</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.65 }}>{g.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TERMS OF REFERENCE ───────────────────────────────────────── */}
      <section style={{ marginTop: '4rem', background: 'var(--fdb-cream-deep)', borderTop: '1px solid var(--fdb-border)', borderBottom: '1px solid var(--fdb-border)' }}>
        <div className="fdb-wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
          <SectionLabel style={{ marginBottom: '2.5rem' }}>Terms of reference</SectionLabel>
          <div>
            {COUNCIL_TOR.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '11rem 1fr', gap: '1.5rem 3rem', borderTop: '1px solid var(--fdb-border)', padding: '1.25rem 0' }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple)', paddingTop: '0.15rem', lineHeight: 1.5 }}>{t.label}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.65 }}>{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUESTIONS THIS RAISES ────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>Questions this raises</SectionLabel>
        <BodyText style={{ marginTop: '0.75rem', marginBottom: '2.5rem' }}>
          These are the questions a senior room will ask. They are welcomed, not avoided.
        </BodyText>
        <div>
          {COUNCIL_QA.map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--fdb-border)', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>{item.q}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.65, maxWidth: '68ch' }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT IT PRODUCES ─────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel style={{ marginBottom: '1.5rem' }}>What it produces</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 1.75rem' }}>
          <DocumentObject kind="Declaration" title="Dublin Declaration on AI in Tourism" desc="A shared statement of principle that leaders can take back to their own boards and governments."/>
          <DocumentObject kind="Code of Practice" title="Global Tourism Code of Practice on AI" desc="A practical operating standard, built on the AI Transparency Framework, that an organisation can apply."/>
          <DocumentObject kind="Report + Briefing" title="State of Destination AI Report and Executive Briefing" desc="The sector's position, carried to national governments, to EU institutions during the Irish Presidency and to the technology companies shaping the tools that affect destination work."/>
        </div>
        <BodyText style={{ marginTop: '2rem', borderTop: '1px solid var(--fdb-border)', paddingTop: '1.5rem' }}>
          Because the sector speaks with one voice, these outputs reach further than any single organisation could. Their first purpose, though, is to give destination leaders a reference point and a standard where until now there has been none.
        </BodyText>
      </section>

      {/* ── WHO IT IS FOR ────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start', borderTop: '1px solid var(--fdb-border)', paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', textWrap: 'pretty' }}>
            The Council is formed of the <Accent>Chief Executives and senior leaders</Accent> who set the direction of national and destination organisations.
          </p>
          <div>
            <BodyText style={{ marginBottom: '1.5rem' }}>
              Places are by invitation. If you lead a destination and intend to shape how the sector answers the question of AI, rather than inherit someone else's answer, this is the room.
            </BodyText>
            <button onClick={() => window.Intercom && window.Intercom('show')} style={{ fontFamily: 'var(--fdb-font-sans)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.03em', color: 'var(--fdb-white)', background: 'var(--fdb-purple)', border: 'none', borderRadius: 3, padding: '0.75rem 1.4rem', cursor: 'pointer' }}>Request an invitation</button>
          </div>
        </div>
      </section>
    </>
  );
}

window.CouncilPage = CouncilPage;
