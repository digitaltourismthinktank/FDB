/* eslint-disable */
// FDB 2026 - EU AI Act companion. A public-facing companion to Day One, carrying
// the fifteen-question readiness assessment participants complete before they
// arrive. Tonally aligned with Day One: restrained, considered, the council
// register. The assessment is a working, interactive instrument.

const AIACT_SECTIONS = [
  { theme: 'Governance and accountability', items: [
    'A named individual is accountable for AI use across our organisation.',
    'We maintain a current inventory of the AI systems we deploy or procure.',
    'AI decisions of consequence are subject to meaningful human review.',
  ]},
  { theme: 'Transparency and disclosure', items: [
    'We disclose to visitors when they are interacting with an AI system.',
    'We can explain, in plain language, how our key AI tools reach their outputs.',
    'Published content distinguishes AI-generated material where it matters.',
  ]},
  { theme: 'Risk and classification', items: [
    "We have assessed which of our AI uses fall under the Act's risk tiers.",
    'We avoid prohibited practices, including manipulative and social-scoring uses.',
    'High-risk uses, where present, have documented risk management in place.',
  ]},
  { theme: 'Data and rights', items: [
    'We have a lawful basis and a clear consent path for data feeding our AI.',
    'Training and prompt data is sourced and documented defensibly.',
    'Visitors can contest or correct AI-influenced decisions about them.',
  ]},
  { theme: 'Capability and procurement', items: [
    'Our teams hold a baseline AI literacy appropriate to their roles.',
    'Transparency, liability and audit clauses sit in our vendor contracts.',
    'We monitor regulatory change and update practice on a set cadence.',
  ]},
];

const ANSWERS = [
  { key: 2, label: 'Yes' },
  { key: 1, label: 'Partly' },
  { key: 0, label: 'Not yet' },
];

function bandFor(score, answered) {
  if (answered < 15) return null;
  if (score <= 10) return { name: 'Early', note: 'Foundational work is still ahead. The day exists for exactly this conversation.', pct: 0.25 };
  if (score <= 20) return { name: 'Developing', note: 'The shape is right and gaps remain. Bring the open questions to the room.', pct: 0.55 };
  if (score <= 27) return { name: 'Advanced', note: 'A strong footing across most dimensions. The room will sharpen the edges.', pct: 0.85 };
  return { name: 'Leadership-ready', note: 'Ready across the board. Your practice is a reference point for the room.', pct: 1 };
}

function AiActPage() {
  const { nav } = useNav();
  const flat = AIACT_SECTIONS.flatMap((s) => s.items);
  const [answers, setAnswers] = useState({}); // index -> 0|1|2
  const answered = Object.keys(answers).length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const band = bandFor(score, answered);
  const progress = answered / 15;

  let qi = 0; // running question index across sections

  return (
    <>
      <DayHero
        station="council"
        eyebrow="Day One · Companion briefing"
        title={<>The EU AI Act,<br/>for destination<br/><Accent>leadership.</Accent></>}
        lead="A public-facing companion to the leadership day. It carries the readiness assessment participants complete before they arrive, and frames the regulation in the terms that matter to a national tourism body."
        meta={[
          { label: 'Relates to', value: 'Day One · Leadership programme' },
          { label: 'Audience', value: 'NTO and DMO leadership teams' },
          { label: 'Before the day', value: 'Fifteen-question assessment' },
        ]}
      />

      <hr className="fdb-rule"/>

      {/* ── WHY IT MATTERS ────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '3.5rem' }}>
        <SectionLabel>Why it matters</SectionLabel>
        <Statement style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
          The Act is the first comprehensive AI law. For destinations, it is <Accent>a leadership question</Accent> before it is a compliance one.
        </Statement>
        <BodyText style={{ marginBottom: '2rem' }}>
          National tourism organisations sit upstream of how a country is discovered, recommended and chosen. As that work moves through AI systems, the obligations of the Act follow it. Readiness is not a legal afterthought. It is a measure of whether leadership understands the tools it now depends on.
        </BodyText>
        <PolicyBar items={[
          { label: 'Unacceptable risk', text: 'Practices the Act prohibits outright, including manipulative and social-scoring uses. Off the table.' },
          { label: 'High risk', text: 'Permitted with documented risk management, human oversight and transparency obligations.' },
          { label: 'Limited / minimal', text: 'The majority of destination uses, carrying transparency duties and good-practice expectations.' },
        ]}/>
      </section>

      {/* ── THE ASSESSMENT ────────────────────────────────────────────── */}
      <section className="fdb-wrap" style={{ paddingTop: '4rem' }}>
        <SectionLabel>The readiness assessment</SectionLabel>
        <BodyText style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          Fifteen statements across five dimensions. Answer honestly. The result is for your own preparation, and a version is collated, without attribution, to frame the room's starting point.
        </BodyText>

        {/* progress meter */}
        <div style={{ position: 'sticky', top: 88, zIndex: 30, background: 'var(--fdb-cream)', paddingTop: '0.75rem', paddingBottom: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--fdb-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>{answered} of 15 answered</span>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: band ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)' }}>{band ? band.name : 'Result pending'}</span>
          </div>
          <div style={{ height: 3, background: 'var(--fdb-border)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress * 100}%`, background: 'var(--fdb-purple)', transition: 'width 0.2s' }}/>
          </div>
        </div>

        {AIACT_SECTIONS.map((sec, si) => (
          <div key={si} style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--fdb-purple)' }}>{String(si + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)' }}>{sec.theme}</span>
            </div>
            {sec.items.map((q) => {
              const idx = qi++;
              return <QuestionRow key={idx} q={q} value={answers[idx]} onPick={(v) => setAnswers((a) => ({ ...a, [idx]: v }))}/>;
            })}
          </div>
        ))}

        {/* result */}
        <div style={{ marginTop: '1rem' }}>
          <StackFrame offset={12} strokeWidth={1.5}>
            <div style={{ background: band ? 'var(--fdb-purple)' : 'var(--fdb-cream)', border: band ? 'none' : '1px solid var(--fdb-border-strong)', borderRadius: 4, padding: '2.25rem 2.25rem', transition: 'background 0.2s' }}>
              {!band ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Mark size={32}/>
                  <span style={{ fontSize: '0.95rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.5 }}>Answer all fifteen statements to reveal your readiness band.</span>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-purple-soft)', marginBottom: '0.75rem' }}>Your readiness band</div>
                    <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1, marginBottom: '0.85rem' }}>{band.name}.</div>
                    <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, maxWidth: '46ch', marginBottom: '1.5rem' }}>{band.note}</div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Button variant="outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }} onClick={() => setAnswers({})}>Reset</Button>
                      <button onClick={() => nav('/register')} style={{ background: '#fff', color: 'var(--fdb-purple-deep)', border: 'none', borderRadius: 3, padding: '0.7rem 1.4rem', fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer' }}>Bring this to Day One →</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>{score}<span style={{ fontSize: '1.5rem', color: 'var(--fdb-purple-soft)' }}>/30</span></div>
                  </div>
                </div>
              )}
            </div>
          </StackFrame>
        </div>
      </section>
    </>
  );
}

function QuestionRow({ q, value, onPick }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', padding: '1rem 0', borderTop: '1px solid var(--fdb-border)' }}>
      <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--fdb-ink)', lineHeight: 1.5, maxWidth: '54ch' }}>{q}</span>
      <div style={{ display: 'flex', gap: 0, border: '1px solid var(--fdb-border-strong)', borderRadius: 3, overflow: 'hidden', flexShrink: 0 }}>
        {ANSWERS.map((a, i) => {
          const sel = value === a.key;
          return (
            <button key={a.key} onClick={() => onPick(a.key)} style={{
              background: sel ? 'var(--fdb-purple)' : 'transparent', color: sel ? '#fff' : 'var(--fdb-ink-muted)',
              border: 'none', borderLeft: i === 0 ? 'none' : '1px solid var(--fdb-border-strong)',
              padding: '0.5rem 0.95rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.15s, color 0.15s', minWidth: 72,
            }}>{a.label}</button>
          );
        })}
      </div>
    </div>
  );
}

window.AiActPage = AiActPage;
