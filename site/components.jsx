/* eslint-disable */
// FDB 2026 - Shared component library
// Nav context, type primitives, header, footer, buttons, tags, frames.
// Per-day MOTIF + JOURNEY RAIL live in motif.jsx.
// Everything shared is assigned to window so each text/babel page file can use it.

const { useState, useRef, useEffect } = React;

// ─── NAV CONTEXT ─────────────────────────────────────────────────────────────
const NavContext = React.createContext({ nav: () => {}, path: '/', station: null });
function useNav() { return React.useContext(NavContext); }

// The arc, in order. Used by header nav and the journey rail.
// navDay / navTitle drive the header menu: the day (or moment) over the title,
// so the menu reads consistently with each day's own title.
// The arc. The three days flow in sequence; X. Awards is held on the evening of
// Day One but sits APART in the system (`apart: true`) so 1·2·3 read cleanly.
const ARC = [
  { path: '/leadership', station: 'council',    short: 'Day One',   day: '02 Dec', kicker: 'Day One',   navDay: 'Day One',   navTitle: 'Leadership' },
  { path: '/keynotes',   station: 'programme',  short: 'Day Two',   day: '03 Dec', kicker: 'Day Two',   navDay: 'Day Two',   navTitle: 'Keynotes' },
  { path: '/workstream', station: 'workstream', short: 'Day Three', day: '04 Dec', kicker: 'Day Three', navDay: 'Day Three', navTitle: 'Workstream' },
  { path: '/awards',     station: 'awards',     short: 'X. Awards', day: 'Eve · 02 Dec', kicker: 'The evening', navDay: 'Evening', navTitle: 'X. Awards', apart: true },
];

// ─── TYPE PRIMITIVES ──────────────────────────────────────────────────────────
function Eyebrow({ children, muted, style }) {
  return (
    <div style={{
      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      ...style,
    }}>{children}</div>
  );
}

function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', ...style,
    }}>{children}</div>
  );
}

function Statement({ children, style }) {
  return (
    <p style={{
      fontSize: '1.45rem', fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)', maxWidth: '38ch', textWrap: 'pretty', ...style,
    }}>{children}</p>
  );
}

function BodyText({ children, style }) {
  return (
    <p style={{
      fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--fdb-ink-mid)',
      maxWidth: '62ch', textWrap: 'pretty', ...style,
    }}>{children}</p>
  );
}

function Accent({ children }) {
  return <strong style={{ color: 'var(--fdb-purple)', fontWeight: 800 }}>{children}</strong>;
}

function MetaRow({ label, value, tbc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem' }}>
      <span style={{
        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--fdb-ink-faint)', width: 96, flexShrink: 0,
      }}>{label}</span>
      <span style={{
        fontSize: '0.88rem', fontWeight: tbc ? 500 : 600,
        fontStyle: tbc ? 'italic' : 'normal',
        color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      }}>{value}</span>
    </div>
  );
}

// A reusable uppercase section heading with a leading hairline - the structural
// device used to open every band on a page.
function SectionHead({ children, style }) {
  return (
    <div style={{ paddingTop: '3.5rem', ...style }}>
      <SectionLabel>{children}</SectionLabel>
    </div>
  );
}

// ─── BRAND MARK (header / footer scale) ───────────────────────────────────────
function Mark({ size = 30, stroke }) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true" style={{ display: 'block' }}>
      <rect x="1" y="1" width="18" height="18" rx="2" stroke="var(--fdb-purple)" strokeWidth={sw}/>
      <rect x="6" y="6" width="18" height="18" rx="2" stroke="var(--fdb-purple-mid)" strokeWidth={sw}/>
      <rect x="11" y="11" width="18" height="18" rx="2" stroke="var(--fdb-purple-soft)" strokeWidth={sw}/>
    </svg>
  );
}

// ─── ICONS (Feather-style, 2.5 stroke) ────────────────────────────────────────
const ArrowIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);
const ChatIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);
const DownloadIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

// ─── BUTTONS ──────────────────────────────────────────────────────────────────
function Button({ children, variant = 'primary', icon, onClick, style, type = 'button', fixed }) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
    fontFamily: "'Geist', sans-serif", fontSize: '0.73rem', fontWeight: 700,
    letterSpacing: '0.05em', textTransform: 'uppercase',
    padding: '0.7rem 1.4rem', borderRadius: '3px', border: 'none', cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    whiteSpace: 'nowrap', ...(fixed ? { minWidth: 132 } : null),
  };
  const v = {
    primary: { background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)', color: '#fff' },
    outline: { background: hover ? 'var(--fdb-purple)' : 'transparent', color: hover ? '#fff' : 'var(--fdb-purple)', border: '1px solid var(--fdb-purple)' },
    ghost: {
      background: 'none', color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.78rem',
      padding: '0 0 2px', borderRadius: 0,
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)'}`,
    },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...v[variant], ...style }}>
      {icon}{children}
    </button>
  );
}

// A text link that routes inside the site.
function NavLink({ to, children, style }) {
  const { nav } = useNav();
  const [hover, setHover] = useState(false);
  return (
    <button onClick={() => nav(to)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        fontSize: '0.85rem', fontWeight: 600, color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
        borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'transparent'}`,
        transition: 'color 0.15s, border-color 0.15s', ...style,
      }}>{children}</button>
  );
}

// ─── TAGS / PILLS ───────────────────────────────────────────────────────────
function Tag({ children, variant = 'fill' }) {
  const base = {
    display: 'inline-block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', borderRadius: '2px', padding: '0.22rem 0.5rem',
  };
  const variants = {
    fill: { background: 'var(--fdb-purple-tint)', color: 'var(--fdb-purple-deep)' },
    outline: { background: 'transparent', border: '1px solid var(--fdb-purple-soft)', color: 'var(--fdb-purple)' },
    ink: { background: 'transparent', border: '1px solid var(--fdb-border-strong)', color: 'var(--fdb-ink-muted)' },
  };
  return <span style={{ ...base, ...variants[variant] }}>{children}</span>;
}

function TagRow({ tags = [], variant }) {
  if (!tags.length) return null;
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.6rem' }}>
    {tags.map((t) => <Tag key={t} variant={variant}>{t}</Tag>)}
  </div>;
}

// ─── BRAND LOCKUP ─────────────────────────────────────────────────────────────
// The animated mark + the wordmark, set live in Geist. In the header the mark
// state is driven by the page, so it physically TWISTS to the active day.
function pathToStation(path) {
  if (path === '/leadership' || path === '/ai-act') return 'council';
  if (path === '/awards') return 'awards';
  if (path === '/keynotes') return 'programme';
  if (path === '/workstream') return 'workstream';
  return 'brand';
}

function BrandLockup({ state = 'brand', markSize = 32, fontSize = '1.05rem', sw = 1.7, gap = '0.72rem' }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap }}>
      <TwistMark state={state} size={markSize} sw={sw}/>
      <span style={{ fontSize, fontWeight: 500, letterSpacing: '-0.012em', color: 'var(--fdb-ink)', whiteSpace: 'nowrap', lineHeight: 1 }}>
        Future Destination <strong style={{ fontWeight: 800, color: 'var(--fdb-purple)' }}>Brand.</strong>
      </span>
    </span>
  );
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function FDBHeader({ currentPath, onNav }) {
  const markState = pathToStation(currentPath);
  const links = [
    { path: '/', day: '', label: 'Overview' },
    ...ARC.map((s) => ({ path: s.path, day: s.navDay, label: s.navTitle, apart: s.apart })),
  ];
  return (
    <header style={{
      background: 'var(--fdb-cream)', borderBottom: '1px solid var(--fdb-border)',
      height: 88, position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div className="fdb-header-inner" style={{
        maxWidth: 1240, margin: '0 auto', height: '100%', padding: '0 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem',
      }}>
        <button onClick={() => onNav('/')} title="Future. Destination. Brand." style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <BrandLockup state="brand" markSize={34} fontSize="1.08rem"/>
          <span className="fdb-header-meta" style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--fdb-ink-muted)', borderLeft: '1px solid var(--fdb-border-strong)', paddingLeft: '1rem',
            lineHeight: 1.4, textAlign: 'left', whiteSpace: 'nowrap',
          }}>Dublin<br/>02–04 Dec 2026</span>
        </button>

        <nav className="fdb-header-nav" style={{ display: 'flex', alignItems: 'flex-end', gap: '1.35rem' }}>
          {links.map((l) => {
            const active = currentPath === l.path || (l.path === '/leadership' && currentPath === '/ai-act');
            return (
              <React.Fragment key={l.path}>
              {l.apart && <span aria-hidden="true" style={{ alignSelf: 'stretch', width: 1, background: 'var(--fdb-border-strong)', margin: '0.2rem 0' }}/>}
              <button className="fdb-nav-link" onClick={() => onNav(l.path)} style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 4px',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.15rem',
                borderBottom: active ? '1.5px solid var(--fdb-purple)' : '1.5px solid transparent',
                transition: 'color 0.15s, border-color 0.15s', whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { if (!active) e.currentTarget.querySelector('[data-navtitle]').style.color = 'var(--fdb-purple)'; }}
              onMouseOut={(e) => { if (!active) e.currentTarget.querySelector('[data-navtitle]').style.color = 'var(--fdb-ink-muted)'; }}>
                {l.day && (
                  <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: active ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)' }}>{l.day}</span>
                )}
                <span data-navtitle style={{ fontSize: '0.82rem', fontWeight: active ? 700 : 600, color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)', lineHeight: 1.1 }}>{l.label}</span>
              </button>
              </React.Fragment>
            );
          })}
          <Button fixed onClick={() => onNav('/register')} style={{ padding: '0.6rem 1.2rem' }}>Register</Button>
        </nav>
      </div>
    </header>
  );
}

// ─── HOST PARTNER (Fáilte Ireland) ────────────────────────────────────────────
function HostPartner({ label = 'Host partner', size = 24 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
      <span style={{
        fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--fdb-ink-faint)', whiteSpace: 'nowrap',
      }}>{label}</span>
      <img src={window.__resources?.failte || "assets/logos/failte-ireland.png"} alt="Fáilte Ireland" style={{ height: size, width: 'auto', display: 'block' }}/>
    </div>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function FDBFooter({ onNav }) {
  return (
    <footer style={{ borderTop: '1px solid var(--fdb-border)', marginTop: '5rem' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '2.5rem 3rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BrandLockup state="brand" markSize={26} fontSize="0.9rem" sw={1.4}/>
            <span style={{ fontSize: '0.7rem', color: 'var(--fdb-ink-faint)', borderLeft: '1px solid var(--fdb-border-strong)', paddingLeft: '1rem', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--fdb-ink-muted)', fontWeight: 600 }}>2026 Edition</strong><br/>
              Dublin · 02–04 December
            </span>
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <NavLink to="/leadership">Leadership</NavLink>
            <NavLink to="/awards">X. Awards</NavLink>
            <NavLink to="/keynotes">Keynotes</NavLink>
            <NavLink to="/workstream">Workstream</NavLink>
            <NavLink to="/register">Register</NavLink>
          </nav>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--fdb-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem 2rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', whiteSpace: 'nowrap' }}>An event by</span>
              <img src={window.__resources?.dtttBlack || "assets/logos/dttt-logo-landscape-black.svg"} alt="Digital Tourism Think Tank" style={{ height: 20, width: 'auto', display: 'block' }}/>
            </span>
            <span aria-hidden="true" style={{ width: 1, height: 22, background: 'var(--fdb-border-strong)' }}/>
            <HostPartner/>
          </div>
          <span style={{ fontSize: '0.7rem', color: 'var(--fdb-ink-faint)' }}>Convened under Ireland's EU Council Presidency · H2 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ─── STACK FRAME ───────────────────────────────────────────────────────────
// Wraps a block in one offset purple-soft outline, echoing a single square of
// the brand mark. The signature framing gesture.
function StackFrame({ children, offset = 10, color = 'var(--fdb-purple-soft)', strokeWidth = 1, style }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: offset, left: offset, right: -offset, bottom: -offset,
        border: `${strokeWidth}px solid ${color}`, borderRadius: 4, opacity: 0.75, pointerEvents: 'none',
      }}/>
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>{children}</div>
    </div>
  );
}

// ─── SPEAKER / PARTICIPANT PORTRAIT FRAME ─────────────────────────────────────
// Purple-outlined rectangle with two offset decorative frames behind it.
// Placeholder fill is a cool desaturated blue-grey, per the brand book.
function PortraitFrame({ name, org, role, tbc, src, tone = '#6F8FA8', w = '100%', ratio = '4/5' }) {
  return (
    <div style={{ width: w }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: ratio }}>
        <div style={{ position: 'absolute', top: 16, left: 16, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, opacity: 0.55, zIndex: 0 }}/>
        <div style={{ position: 'absolute', top: 8, left: 8, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, zIndex: 1 }}/>
        <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--fdb-purple)', borderRadius: 2, background: src ? `center/cover no-repeat url(${src})` : tone, zIndex: 2, overflow: 'hidden' }}>
          {!src && (
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: 0, left: '8%', width: '84%', height: '92%', opacity: 0.9 }} aria-hidden="true">
              <ellipse cx="50" cy="33" rx="17" ry="21" fill="rgba(26,30,40,0.55)"/>
              <path d="M12 100 Q18 58 50 58 Q82 58 88 100 Z" fill="rgba(26,30,40,0.55)"/>
            </svg>
          )}
          {tbc && (
            <span style={{ position: 'absolute', top: 8, right: 8, fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', background: 'rgba(26,26,26,0.45)', padding: '2px 5px', borderRadius: 2 }}>TBC</span>
          )}
        </div>
      </div>
      <div style={{ marginTop: '0.85rem' }}>
        <div style={{ fontSize: '0.98rem', fontWeight: 800, letterSpacing: '-0.02em', color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)', fontStyle: tbc ? 'italic' : 'normal', lineHeight: 1.15 }}>{name}</div>
        {org && <div style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-mid)', marginTop: '0.25rem', lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: org }}/>}
        {role && <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple)', marginTop: '0.35rem' }}>{role}</div>}
      </div>
    </div>
  );
}

// ─── DAY HERO ─────────────────────────────────────────────────────────────
// Shared shell for the four day heroes: a quiet journey rail up top, then the
// editorial title block, with the day's motif bleeding off the right. Each day
// passes its own motif `state` and accent register - the differentiation lives
// in what each page puts inside.
function DayHero({ station, eyebrow, title, lead, meta, children }) {
  return (
    <section className="fdb-rise" style={{ position: 'relative' }}>
      <div className="fdb-wrap" style={{ paddingTop: '2.5rem' }}>
        <JourneyRail current={station} style={{ maxWidth: 680, marginLeft: 0 }}/>
      </div>
      <div className="fdb-wrap" style={{ padding: '3rem 3rem 3.5rem' }}>
        <div className="fdb-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 0.78fr', gap: '3rem', alignItems: 'flex-start' }}>
          <div>
            <Eyebrow style={{ marginBottom: '1.5rem' }}>{eyebrow}</Eyebrow>
            <h1 style={{ fontSize: 'clamp(2.6rem, 5.4vw, 4rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.035em', color: 'var(--fdb-ink)', marginBottom: lead ? '1.6rem' : '1.75rem', textWrap: 'balance' }}>{title}</h1>
            {lead && <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--fdb-ink-mid)', maxWidth: '44ch', marginBottom: meta ? '2.25rem' : '2rem' }}>{lead}</p>}
            {meta && <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>{meta.map((m, i) => <MetaRow key={i} {...m}/>)}</div>}
            {children}
          </div>
          <div className="fdb-hero-motif" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="fdb-mark-pivot" key={station}><Motif state={station} size={300} sw={1.9}/></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROGRAMME ROW ─────────────────────────────────────────────────────────
function ProgrammeRow({ time, title, desc, tags = [], speakers = [], children, isFirst, accent = 'var(--fdb-purple)' }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '78px 1fr', gap: '0 2rem', padding: '1.6rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none', borderBottom: '1px solid var(--fdb-border)', alignItems: 'start',
    }}>
      <div style={{ fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.04em', color: accent, paddingTop: '0.15rem', fontVariantNumeric: 'tabular-nums' }}>{time}</div>
      <div>
        <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--fdb-ink)', marginBottom: desc ? '0.4rem' : 0, lineHeight: 1.35 }}>{title}</div>
        {desc && <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.65, maxWidth: 620 }}>{desc}</div>}
        {tags.length > 0 && <TagRow tags={tags}/>}
        {speakers.map((s, i) => (
          <div key={i} style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', fontWeight: s.tbc ? 500 : 600, color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)', fontStyle: s.tbc ? 'italic' : 'normal' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)', flexShrink: 0 }}/>
            {s.name}
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}

function SessionCard({ label, title, desc }) {
  return (
    <div style={{ border: '1px solid var(--fdb-border-strong)', borderRadius: 4, padding: '0.95rem 1.05rem', background: 'rgba(255,255,255,0.5)' }}>
      <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '0.3rem' }}>{label}</div>
      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--fdb-ink)', marginBottom: '0.25rem', lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

// ─── POLICY CALLOUT BAR ──────────────────────────────────────────────────────
// Solid purple punctuation block. Rare. Used for policy / value summaries.
function PolicyBar({ items }) {
  return (
    <div style={{ background: 'var(--fdb-purple)', borderRadius: 4, padding: '1.9rem 2.1rem', display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: '1.75rem' }}>
      {items.map((it, i) => (
        <div key={i} style={{ paddingLeft: i === 0 ? 0 : '1.75rem', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)' }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-soft)', marginBottom: '0.5rem' }}>{it.label}</div>
          <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{it.text}</div>
        </div>
      ))}
    </div>
  );
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────────
Object.assign(window, {
  NavContext, useNav, ARC,
  Eyebrow, SectionLabel, SectionHead, Statement, BodyText, Accent, MetaRow,
  Mark, ArrowIcon, ChatIcon, DownloadIcon,
  Button, NavLink, Tag, TagRow,
  FDBHeader, FDBFooter, HostPartner, BrandLockup, pathToStation,
  StackFrame, PortraitFrame,
  DayHero, ProgrammeRow, SessionCard, PolicyBar,
});
