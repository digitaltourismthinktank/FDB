/* eslint-disable */
// FDB 2026 — Registration
// Three real routes, matching how it works in production:
//   • MEMBER  — signs in with their DTTT Account; the page returns here, then a
//               Typeform simply CONFIRMS their details (pre-filled via hidden
//               fields from the DTTT/Memberstack data). Free, quick.
//   • DELEGATE (non-member) — a Typeform with branching rules; payment is taken
//               on the final screen.
//   • INVITED (Leadership Day) — access by invitation code.
// This is a faithful prototype: the embeds are represented on-brand and the
// member sign-in is simulated for review.

const ACCESS = [
  { station: 'council',    day: 'Day One',   name: 'Leadership Meeting', tier: 'Invite only',  open: false, note: 'Invitation code required. 30–40 senior leaders.' },
  { station: 'programme',  day: 'Day Two',   name: 'Keynote Day',        tier: 'Members free · delegates ticketed', open: true, note: 'Free for DTTT members; ticketed for delegates.' },
  { station: 'workstream', day: 'Day Three', name: 'Trends Workstream',  tier: 'Members only', open: true, note: 'DTTT members only. Capped per table.' },
  { station: 'awards',     day: 'Evening',   name: 'X. Awards',          tier: 'Ticketed',     open: true, note: 'The awards evening, on Day One.' },
];

const ROUTES = [
  { id: 'member',   label: 'DTTT Member' },
  { id: 'delegate', label: 'Delegate' },
  { id: 'invited',  label: 'Invited' },
];

function RegisterPage() {
  const { nav } = useNav();
  const [route, setRoute] = useState('member');

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="fdb-rise fdb-wrap" style={{ position: 'relative', padding: '4rem 3rem 2.5rem' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 640 }}>
          <Eyebrow style={{ marginBottom: '1.5rem' }}>Registration · FDB 2026</Eyebrow>
          <h1 style={{ fontSize: 'clamp(2.6rem, 5.4vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.035em', color: 'var(--fdb-ink)', marginBottom: '1.5rem' }}>
            Register your<br/><Accent>place.</Accent>
          </h1>
          <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '52ch' }}>
            Free for DTTT members; sign in with your DTTT Account and your details carry straight through. Delegates register and pay in a few steps. The Leadership Meeting is by invitation.
          </p>
        </div>
      </section>

      <hr className="fdb-rule"/>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <section className="fdb-wrap fdb-reg-grid" style={{ paddingTop: '3rem', display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: '3.5rem', alignItems: 'start' }}>

        {/* access map */}
        <div>
          <SectionLabel style={{ marginBottom: '1.5rem' }}>What you can register for</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ACCESS.map((a) => (
              <button key={a.station} onClick={() => nav('/' + ({ council: 'leadership', awards: 'awards', programme: 'keynotes', workstream: 'workstream' }[a.station]))} style={{
                textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                borderTop: '1px solid var(--fdb-border)', padding: '1.1rem 0',
                display: 'grid', gridTemplateColumns: '34px 1fr', gap: '0 1rem', alignItems: 'start',
              }}>
                <span style={{ marginTop: 2 }}><Motif state={a.station} size={30} sw={3.4} muted/></span>
                <span>
                  <span style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--fdb-ink)' }}>{a.day} · {a.name}</span>
                  <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: a.open ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)', margin: '0.35rem 0' }}>{a.tier}</span>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.5 }}>{a.note}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* route panel */}
        <div>
          <StackFrame offset={12} strokeWidth={1.5}>
            <div style={{ background: 'var(--fdb-white)', border: '1px solid var(--fdb-border-strong)', borderRadius: 4, overflow: 'hidden' }}>
              {/* route picker */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--fdb-border)' }}>
                {ROUTES.map((r) => {
                  const on = route === r.id;
                  return (
                    <button key={r.id} onClick={() => setRoute(r.id)} style={{
                      flex: 1, background: on ? 'var(--fdb-white)' : 'var(--fdb-cream)', border: 'none', cursor: 'pointer',
                      padding: '1rem 0.5rem', fontFamily: 'inherit', fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: on ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
                      borderBottom: on ? '2px solid var(--fdb-purple)' : '2px solid transparent',
                      borderRight: r.id !== 'invited' ? '1px solid var(--fdb-border)' : 'none', transition: 'color 0.15s, background 0.15s',
                    }}>{r.label}</button>
                  );
                })}
              </div>

              <div style={{ padding: '1.9rem' }}>
                {route === 'member' && <MemberFlow nav={nav}/>}
                {route === 'delegate' && <DelegateFlow/>}
                {route === 'invited' && <InvitedFlow/>}
              </div>
            </div>
          </StackFrame>
          <p style={{ marginTop: '1rem', fontSize: '0.74rem', color: 'var(--fdb-ink-faint)', lineHeight: 1.5 }}>
            Not sure which applies to you? <button onClick={() => nav('/leadership')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--fdb-purple)', borderBottom: '1px solid var(--fdb-purple-soft)', fontFamily: 'inherit', fontSize: '0.74rem' }}>Get in touch</button> and we'll point you the right way.
          </p>
        </div>
      </section>
    </>
  );
}

// ── MEMBER ───────────────────────────────────────────────────────────────────
// Sign in with DTTT Account → returns here → Typeform confirms pre-filled details.
function MemberFlow({ nav }) {
  const [authed, setAuthed] = useState(false);
  const [done, setDone] = useState(false);
  if (done) return <Confirmed lines={["Day Two · Keynote Day", "Day Three · Trends Workstream"]} onReset={() => setDone(false)}/>;
  if (!authed) {
    return (
      <div>
        <FlowHead title="Sign in to register" body="Registration is free for DTTT members. Sign in with your DTTT Account; your name, organisation and role carry straight through."/>
        <Button onClick={() => setAuthed(true)} icon={ArrowIcon} style={{ width: '100%', padding: '0.85rem' }}>Sign in with your DTTT Account</Button>
        <SignInNote/>
      </div>
    );
  }
  return (
    <div>
      <FlowHead title="Welcome back." body="Your details are pre-filled from your DTTT Account. The form just confirms them in a few seconds."/>
      <PrefillCard/>
      <EmbedSlot note="Typeform · details confirmed from your DTTT Account (hidden fields)"/>
      <Button onClick={() => setDone(true)} icon={ArrowIcon} style={{ width: '100%', padding: '0.85rem', marginTop: '1.4rem' }}>Confirm registration</Button>
      <button onClick={() => setAuthed(false)} style={{ display: 'block', margin: '0.9rem auto 0', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--fdb-font-mono)', fontSize: '0.66rem', color: 'var(--fdb-ink-faint)' }}>prototype · sign out</button>
    </div>
  );
}

// ── DELEGATE ───────────────────────────────────────────────────────────────
function DelegateFlow() {
  const [done, setDone] = useState(false);
  if (done) return <Confirmed lines={["Day Two · Keynote Day (delegate)", "X. Awards · evening"]} paid onReset={() => setDone(false)}/>;
  return (
    <div>
      <FlowHead title="Register as a delegate" body="Not a DTTT member? Register here. A short form establishes the right delegate type (DMO, commercial partner or individual) and payment is taken on the final step."/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.4rem' }}>
        <StepLine n="1" t="Tell us who you are" s="Branching questions set the right delegate type and price."/>
        <StepLine n="2" t="Choose your days" s="Keynote Day and the X. Awards evening are open to delegates."/>
        <StepLine n="3" t="Pay & confirm" s="Secure payment on the last screen; confirmation by email."/>
      </div>
      <EmbedSlot note="Typeform · branching rules + payment on the final screen"/>
      <Button onClick={() => setDone(true)} icon={ArrowIcon} style={{ width: '100%', padding: '0.85rem', marginTop: '1.4rem' }}>Start delegate registration</Button>
    </div>
  );
}

// ── INVITED ──────────────────────────────────────────────────────────────────
function InvitedFlow() {
  const [code, setCode] = useState('');
  const [done, setDone] = useState(false);
  if (done) return <Confirmed lines={["Day One · Leadership Meeting", "X. Awards · evening"]} onReset={() => setDone(false)}/>;
  return (
    <div>
      <FlowHead title="Invitation code" body="The Leadership Meeting is a private, invite-only room. Enter the code from your invitation to register."/>
      <label style={{ display: 'block', marginBottom: '1.1rem' }}>
        <span style={{ display: 'block', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', marginBottom: '0.4rem' }}>Your code</span>
        <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="FDB-XXXX-XXXX" style={{
          width: '100%', boxSizing: 'border-box', fontFamily: 'var(--fdb-font-mono)', fontSize: '0.95rem', letterSpacing: '0.12em',
          color: 'var(--fdb-ink)', background: 'var(--fdb-cream)', border: '1px solid var(--fdb-border-strong)', borderRadius: 3, padding: '0.7rem 0.8rem',
        }}/>
      </label>
      <Button onClick={() => code.trim() && setDone(true)} icon={ArrowIcon} style={{ width: '100%', padding: '0.85rem', opacity: code.trim() ? 1 : 0.5 }}>Verify & register</Button>
      <p style={{ fontSize: '0.74rem', color: 'var(--fdb-ink-faint)', lineHeight: 1.5, marginTop: '1rem', textAlign: 'center' }}>
        Believe you should be in the room but have no code? <button onClick={() => setDone(false)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--fdb-purple)', fontFamily: 'inherit', fontSize: '0.74rem', borderBottom: '1px solid var(--fdb-purple-soft)' }}>Request an invitation</button>.
      </p>
    </div>
  );
}

// ── shared bits ───────────────────────────────────────────────────────────────
function FlowHead({ title, body }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', marginBottom: '0.5rem' }}>{title}</div>
      <p style={{ fontSize: '0.86rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.6, maxWidth: '46ch', margin: 0 }}>{body}</p>
    </div>
  );
}
function SignInNote() {
  return (
    <p style={{ fontSize: '0.72rem', color: 'var(--fdb-ink-faint)', lineHeight: 1.5, marginTop: '1rem', textAlign: 'center' }}>
      Signing in opens your DTTT Account, then returns you here to finish.
    </p>
  );
}
function StepLine({ n, t, s }) {
  return (
    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', borderTop: '1px solid var(--fdb-border)', paddingTop: '0.75rem' }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--fdb-purple)', fontVariantNumeric: 'tabular-nums', marginTop: 1 }}>{n}</span>
      <span><span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--fdb-ink)' }}>{t}</span><span style={{ display: 'block', fontSize: '0.76rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.5, marginTop: '0.1rem' }}>{s}</span></span>
    </div>
  );
}
function PrefillCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.1rem' }}>
      <Field label="Full name" value="Member name"/>
      <Field label="Organisation" value="Member organisation"/>
      <Field label="Role" value="Head of brand"/>
      <Field label="Email" value="member@organisation.ie"/>
    </div>
  );
}
function Field({ label, value }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', marginBottom: '0.3rem' }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--fdb-ink-mid)', background: 'var(--fdb-cream)', border: '1px solid var(--fdb-border-strong)', borderRadius: 3, padding: '0.55rem 0.65rem' }}>
        {value}
      </span>
    </label>
  );
}
function EmbedSlot({ note }) {
  return (
    <div style={{ border: '1px dashed var(--fdb-border-strong)', borderRadius: 4, padding: '1.5rem 1.25rem', background: 'var(--fdb-cream)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}><Mark size={26}/></div>
      <div style={{ fontFamily: 'var(--fdb-font-mono)', fontSize: '0.64rem', color: 'var(--fdb-ink-faint)', lineHeight: 1.5 }}>{note}</div>
    </div>
  );
}
function Confirmed({ lines, paid, onReset }) {
  return (
    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.1rem' }}><Motif state="programme" size={52} sw={3}/></div>
      <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--fdb-ink)', marginBottom: '0.5rem' }}>You're registered.</div>
      <p style={{ fontSize: '0.86rem', color: 'var(--fdb-ink-mid)', lineHeight: 1.6, maxWidth: '40ch', margin: '0 auto 1.4rem' }}>
        A confirmation is on its way{paid ? ', including your payment receipt' : ''}. We'll send joining details closer to December.
      </p>
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem', textAlign: 'left' }}>
        {lines.map((l) => (
          <span key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--fdb-ink)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--fdb-purple)' }}/>{l}
          </span>
        ))}
      </div>
      <div><Button variant="ghost" onClick={onReset}>Amend registration</Button></div>
    </div>
  );
}

window.RegisterPage = RegisterPage;
