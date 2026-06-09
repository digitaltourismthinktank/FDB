/* eslint-disable */
// FDB Marketing Site — Atomic components
// Mark, Wordmark, Header, Footer, Eyebrow, SectionLabel, Tag, Pill, Button,
// MetaRow, ProgrammeRow, SessionCard, ParticipantCell, OutputItem, PolicyBar,
// SpeakerFrame
// All shared on window so other JSX files can import them.

const { useState } = React;

// ─── BRAND MARKS ───────────────────────────────────────────────────────────
function Mark({ size = 30, stroke }) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="18" height="18" rx="2" stroke="#8239C1" strokeWidth={sw}/>
      <rect x="6" y="6" width="18" height="18" rx="2" stroke="#9B6FE0" strokeWidth={sw}/>
      <rect x="11" y="11" width="18" height="18" rx="2" stroke="#C9AAEE" strokeWidth={sw}/>
    </svg>
  );
}

function MarkLarge({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 144 144" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="80" height="80" rx="6" stroke="#8239C1" strokeWidth="2"/>
      <rect x="30" y="30" width="80" height="80" rx="6" stroke="#9B6FE0" strokeWidth="2"/>
      <rect x="58" y="58" width="80" height="80" rx="6" stroke="#C9AAEE" strokeWidth="2"/>
    </svg>
  );
}

function Wordmark({ size = 'sm' }) {
  const fs = size === 'lg' ? '1.6rem' : size === 'md' ? '1rem' : '0.82rem';
  return (
    <span style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: fs, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--fdb-ink)' }}>
      Future Destination <span style={{ color: 'var(--fdb-purple)' }}>Brand.</span>
    </span>
  );
}

// ─── TYPO PRIMITIVES ────────────────────────────────────────────────────────
function Eyebrow({ children, muted, style }) {
  return (
    <div style={{
      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      marginBottom: '1.25rem',
      ...style
    }}>{children}</div>
  );
}

function SectionLabel({ children, style }) {
  return (
    <div style={{
      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: 'var(--fdb-ink-faint)',
      padding: '2.5rem 0 1.5rem', ...style
    }}>{children}</div>
  );
}

function Statement({ children, style }) {
  return (
    <p style={{
      fontSize: '1.45rem', fontWeight: 700, lineHeight: 1.35,
      letterSpacing: '-0.02em', color: 'var(--fdb-ink)',
      maxWidth: '680px', marginBottom: '1.25rem', ...style
    }}>{children}</p>
  );
}

function BodyText({ children, style }) {
  return (
    <p style={{
      fontSize: '0.92rem', lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)', maxWidth: '620px',
      marginTop: '0.85rem', ...style
    }}>{children}</p>
  );
}

function Accent({ children }) {
  return <strong style={{ color: 'var(--fdb-purple)', fontWeight: 800 }}>{children}</strong>;
}

// ─── TAGS / PILLS / BUTTONS ────────────────────────────────────────────────
function Tag({ children, variant = 'fill' }) {
  const base = {
    display: 'inline-block', fontSize: '0.6rem', fontWeight: 700,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    borderRadius: '2px', padding: '0.2rem 0.5rem', marginRight: '0.35rem',
  };
  const variants = {
    fill:    { background: 'var(--fdb-purple-tint)', color: 'var(--fdb-purple-deep)' },
    outline: { background: 'transparent', border: '1px solid var(--fdb-purple-soft)', color: 'var(--fdb-purple)' },
    dark:    { background: 'var(--fdb-ink)', color: '#fff' },
  };
  return <span style={{ ...base, ...variants[variant] }}>{children}</span>;
}

function Pill({ children }) {
  return (
    <span style={{
      fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.08em',
      textTransform: 'uppercase', color: 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      padding: '0.28rem 0.65rem', borderRadius: '2px',
    }}>{children}</span>
  );
}

function Button({ children, variant = 'primary', icon, onClick, type='button' }) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    fontFamily: "'Geist', sans-serif", fontSize: '0.75rem',
    fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
    padding: '0.75rem 1.4rem', borderRadius: '3px',
    border: 'none', cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
  };
  const v = {
    primary: { background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)', color: '#fff' },
    outline: { background: hover ? 'var(--fdb-purple)' : 'transparent', color: hover ? '#fff' : 'var(--fdb-purple)', border: '1px solid var(--fdb-purple)' },
    ghost:   { background: 'none', color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)', textTransform: 'none', letterSpacing: 'normal', fontWeight: 600, fontSize: '0.72rem', padding: '0 0 1px', borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong, rgba(26,26,26,0.18))'}`, borderRadius: 0 },
  };
  return (
    <button type={type} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ ...base, ...v[variant] }}>
      {icon}{children}
    </button>
  );
}

const ChatIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);
const ArrowIcon = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7"/>
  </svg>
);

// ─── HEADER / FOOTER ────────────────────────────────────────────────────────
function Header({ currentPath = '/', onNav, dark = false, onToggleDark }) {
  const link = (path, label) => {
    const active = currentPath === path;
    return (
      <button onClick={() => onNav?.(path)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.72rem', fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        padding: '0 0 2px',
        borderBottom: active ? '1px solid var(--fdb-purple)' : '1px solid transparent',
        transition: 'color 0.15s, border-color 0.15s',
      }}
      onMouseOver={e => { if (!active) e.currentTarget.style.color = 'var(--fdb-purple)'; }}
      onMouseOut={e => { if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)'; }}>
        {label}
      </button>
    );
  };
  return (
    <header style={{
      background: 'var(--fdb-cream)', borderBottom: '1px solid var(--fdb-border)',
      padding: '0 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 88, position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <button onClick={() => onNav?.('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'block' }}>
          <img src={dark ? window.__resources.bannerDark : window.__resources.banner} alt="Future Destination Brand." style={{ height: 38, width: 'auto', display: 'block' }}/>
        </button>
        <span style={{
          fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--fdb-ink-muted)',
          borderLeft: '1px solid var(--fdb-border-strong)', paddingLeft: '1rem',
        }}>Dublin · December 2026</span>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {link('/', 'Overview')}
        {link('/leadership', 'Leadership Day')}
        {link('/summit', 'Summit')}
        {link('/awards', 'X. Awards')}
        <Pill>Invite Only</Pill>
        <DarkToggle dark={dark} onToggle={onToggleDark}/>
      </nav>
    </header>
  );
}

function Footer({ dark = false }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--fdb-border)', padding: '1.25rem 3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={dark ? window.__resources.bannerDark : window.__resources.banner} alt="Future Destination Brand." style={{ height: 24, width: 'auto', display: 'block' }}/>
        <span style={{ fontSize: '0.7rem', color: 'var(--fdb-ink-faint)', borderLeft: '1px solid var(--fdb-border-strong)', paddingLeft: '1rem' }}>
          <strong style={{ color: 'var(--fdb-ink-muted)', fontWeight: 600 }}>2026 Edition</strong>
          {' · Hosted by Fáilte Ireland · Digital Tourism Think Tank'}
        </span>
      </div>
      <span style={{ fontSize: '0.7rem', color: 'var(--fdb-ink-faint)' }}>Ireland EU Council Presidency · H2 2026</span>
    </footer>
  );
}

// ─── DARK MODE TOGGLE ───────────────────────────────────────────────────────
function DarkToggle({ dark, onToggle }) {
  return (
    <button onClick={onToggle} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} style={{
      background: 'none', border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3, padding: '6px 8px', cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', gap: 6,
      color: 'var(--fdb-ink-muted)',
      transition: 'border-color 0.15s, color 0.15s',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--fdb-purple)'; e.currentTarget.style.color = 'var(--fdb-purple)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--fdb-border-strong)'; e.currentTarget.style.color = 'var(--fdb-ink-muted)'; }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {dark
          ? <circle cx="12" cy="12" r="5"/>
          : <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>}
      </svg>
    </button>
  );
}

// ─── META ROW ───────────────────────────────────────────────────────────────
function MetaRow({ label, value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
      <span style={{
        fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--fdb-ink-faint)',
        width: 80, flexShrink: 0,
      }}>{label}</span>
      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--fdb-ink)' }}>{value}</span>
    </div>
  );
}

// ─── PROGRAMME ──────────────────────────────────────────────────────────────
function ProgrammeRow({ time, title, desc, tags = [], speakers = [], children, isFirst }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '72px 1fr', gap: '0 2rem',
      padding: '1.5rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)', alignItems: 'start',
    }}>
      <div style={{
        fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.05em',
        color: 'var(--fdb-purple)', paddingTop: '0.1rem',
      }}>{time}</div>
      <div>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--fdb-ink)', marginBottom: '0.35rem', lineHeight: 1.35 }}>{title}</div>
        {desc && <div style={{ fontSize: '0.83rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.62, maxWidth: 600 }}>{desc}</div>}
        {tags.length > 0 && <div style={{ marginTop: '0.55rem' }}>{tags.map(t => <Tag key={t}>{t}</Tag>)}</div>}
        {speakers.map((s, i) => (
          <div key={i} style={{
            marginTop: '0.6rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.75rem', fontWeight: s.tbc ? 500 : 600,
            color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
            fontStyle: s.tbc ? 'italic' : 'normal',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)' }}></span>
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
    <div style={{
      border: '1px solid var(--fdb-border-strong)', borderRadius: 4,
      padding: '0.9rem 1rem', background: 'rgba(255,255,255,0.6)',
    }}>
      <div style={{
        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--fdb-purple)', marginBottom: '0.3rem',
      }}>{label}</div>
      <div style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--fdb-ink)', marginBottom: '0.25rem', lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: '0.76rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

// ─── POLICY CALLOUT BAR ─────────────────────────────────────────────────────
function PolicyBar({ items }) {
  return (
    <div style={{
      background: 'var(--fdb-purple)', borderRadius: 4,
      padding: '1.75rem 2rem', margin: '2.5rem 0',
      display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: '2rem',
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ paddingLeft: i === 0 ? 0 : '2rem', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)' }}>
          <div style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--fdb-purple-soft)', marginBottom: '0.4rem',
          }}>{it.label}</div>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.55 }}>{it.text}</div>
        </div>
      ))}
    </div>
  );
}

// ─── PARTICIPANTS GRID ──────────────────────────────────────────────────────
function ParticipantsGrid({ cells }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)', borderRadius: 4, overflow: 'hidden',
      marginTop: '0.5rem',
    }}>
      {cells.map((c, i) => (
        <div key={i} style={{
          background: c.tint ? 'var(--fdb-purple-tint)' : 'var(--fdb-cream)',
          padding: '1.25rem',
          gridColumn: c.span ? `span ${c.span}` : 'auto',
        }}>
          <div style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: c.tint ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
            marginBottom: '0.35rem',
          }}>{c.type}</div>
          <div style={{
            fontSize: c.long ? '0.82rem' : '0.88rem',
            fontWeight: c.tbc ? 500 : 700,
            fontStyle: c.tbc ? 'italic' : 'normal',
            color: c.tbc ? 'var(--fdb-ink-muted)' : (c.long ? 'var(--fdb-ink-mid)' : 'var(--fdb-ink)'),
            marginBottom: '0.15rem', lineHeight: 1.3,
          }}>{c.name}</div>
          {c.org && <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: c.org }}/>}
        </div>
      ))}
    </div>
  );
}

// ─── OUTPUT ITEM ────────────────────────────────────────────────────────────
function OutputItem({ name, desc }) {
  return (
    <div style={{ borderTop: '2px solid var(--fdb-purple)', paddingTop: '1rem' }}>
      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--fdb-ink)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{name}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--fdb-ink-muted)', lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}

// ─── SPEAKER FRAME ──────────────────────────────────────────────────────────
function SpeakerFrame({ src, name, org, role, color = '#6F8FA8' }) {
  return (
    <div style={{ position: 'relative', width: 260, height: 320 }}>
      <div style={{ position: 'absolute', top: 24, left: 24, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, opacity: 0.6, zIndex: 0 }}></div>
      <div style={{ position: 'absolute', top: 12, left: 12, width: '100%', height: '100%', border: '1px solid var(--fdb-purple-soft)', borderRadius: 2, zIndex: 1 }}></div>
      <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--fdb-purple)', borderRadius: 2, background: src ? `center/cover url(${src})` : color, zIndex: 2, overflow: 'hidden' }}>
        {!src && (
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax meet" style={{ position: 'absolute', bottom: -10, left: '10%', width: '80%', height: '90%', opacity: 0.85 }}>
            <ellipse cx="50" cy="32" rx="18" ry="22" fill="#2A3F50"/>
            <path d="M14 100 Q20 56 50 56 Q80 56 86 100 Z" fill="#2A3F50"/>
          </svg>
        )}
      </div>
      <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: '0.75rem' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)', lineHeight: 1.15 }}>{name}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--fdb-ink-mid)', marginTop: '0.2rem' }}>{org}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--fdb-ink-muted)', marginTop: '0.1rem' }}>{role}</div>
      </div>
    </div>
  );
}

// ─── STACK FRAME ────────────────────────────────────────────────────────────
// Wraps any block in a single offset purple-soft outline (echoing one square
// of the stacked-square brand mark). Use sparingly — on hero blocks, output
// cards, award categories.
function StackFrame({ children, offset = 10, color = 'var(--fdb-purple-soft)', strokeWidth = 1 }) {
  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', top: offset, left: offset, right: -offset, bottom: -offset,
        border: `${strokeWidth}px solid ${color}`, borderRadius: 4, opacity: 0.7, pointerEvents: 'none',
      }}/>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ─── HERO STACK DECOR ───────────────────────────────────────────────────────
// The three big offset squares motif used as the hero's right-hand decoration.
// Sits mostly on-canvas with a gentle bleed off the top-right edge.
function HeroStackDecor() {
  const sq = { position: 'absolute', borderRadius: 8, borderStyle: 'solid' };
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', top: -40, right: -80, width: 560, height: 560,
      pointerEvents: 'none', zIndex: 0,
    }}>
      <div style={{ ...sq, width: 380, height: 380, top: 100, left: 0,   borderWidth: 2.5, borderColor: 'var(--fdb-purple-soft)' }}></div>
      <div style={{ ...sq, width: 380, height: 380, top: 50,  left: 50,  borderWidth: 2.5, borderColor: 'var(--fdb-purple-mid)' }}></div>
      <div style={{ ...sq, width: 380, height: 380, top: 0,   left: 100, borderWidth: 3,   borderColor: 'var(--fdb-purple)' }}></div>
    </div>
  );
}

// ─── EXPORTS ────────────────────────────────────────────────────────────────
Object.assign(window, {
  Mark, MarkLarge, Wordmark,
  Eyebrow, SectionLabel, Statement, BodyText, Accent,
  Tag, Pill, Button, ChatIcon, ArrowIcon,
  Header, Footer, DarkToggle,
  MetaRow, ProgrammeRow, SessionCard,
  PolicyBar, ParticipantsGrid, OutputItem, SpeakerFrame,
  StackFrame, HeroStackDecor,
});
