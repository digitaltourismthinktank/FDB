/* eslint-disable */
// FDB 2026 — DAY-MARK EXPLORATION (round 2)
// The filled-pane idea read as too subtle. This round explores BOLDER, more
// distinct ways to inflect the one logo shape across the three days — while the
// X. Awards mark (squares + the real calligraphic x.) stays the fixed anchor.
// Three systems, each shown as a full set so the family reads together.
const { useState } = React;

const TINT = { soft: '#C9AAEE', mid: '#9B6FE0', deep: '#8239C1' };
const S = 42, C = 50;
const CASCADE = [[39, 39, 'soft'], [50, 50, 'mid'], [61, 61, 'deep']];   // back → front
const XF = () => window.FDB_X || { vb: '0 0 173 113', d: '', ar: 1.531 };

function Rect(cx, cy, tint, { rot = 0, piv, fill = 'none', sw = 3.4, key } = {}) {
  const t = rot ? `rotate(${rot} ${piv ? piv[0] : cx} ${piv ? piv[1] : cy})` : undefined;
  return <rect key={key} x={cx - S / 2} y={cy - S / 2} width={S} height={S} rx="6" fill={fill} stroke={TINT[tint]} strokeWidth={sw} transform={t}/>;
}

// The fixed X. Awards mark — cascade, white front square, the crisp vector x.
function AwardsMark({ size = 76 }) {
  const F = XF();
  const gw = 0.44 * size, gh = gw / F.ar;
  const cx = (61 / 100) * size, cy = (61 / 100) * size;
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', inset: 0, display: 'block' }}>
        {Rect(39, 39, 'soft', { key: 'b' })}
        {Rect(50, 50, 'mid', { key: 'm' })}
        {Rect(61, 61, 'deep', { key: 'f', fill: '#FFFFFF' })}
      </svg>
      <svg viewBox={F.vb} width={gw} height={gh} style={{ position: 'absolute', left: cx - gw / 2, top: cy - gh / 2, display: 'block' }}><path d={F.d} fill={TINT.deep}/></svg>
    </div>
  );
}

// A day mark for a given system + role.
function DayMark({ system, role, size = 76 }) {
  if (role === 'logo') {
    return <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block' }}>{CASCADE.map((s, i) => Rect(s[0], s[1], s[2], { key: i }))}</svg>;
  }
  if (system === 'fan') {
    const A = { d1: 9, d2: 18, d3: 28 }[role];
    const angs = [-A, 0, A], piv = [50, 84], tints = ['soft', 'mid', 'deep'];
    return <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block' }}>{[0, 1, 2].map((i) => Rect(50, 50, tints[i], { key: i, rot: angs[i], piv }))}</svg>;
  }
  if (system === 'twist') {
    const A = { d1: 16, d2: 34, d3: 52 }[role];
    return <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block' }}>{CASCADE.map((s, i) => Rect(s[0], s[1], s[2], { key: i, rot: A, piv: [50, 50] }))}</svg>;
  }
  if (system === 'persp') {
    const t = { d1: 'rotateY(22deg)', d2: 'rotateY(38deg) rotateX(8deg)', d3: 'rotateY(52deg) rotateX(14deg)' }[role];
    return (
      <div style={{ width: size, height: size, perspective: size * 2.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: t, transformStyle: 'preserve-3d' }}>
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block' }}>{CASCADE.map((s, i) => Rect(s[0], s[1], s[2], { key: i }))}</svg>
        </div>
      </div>
    );
  }
  return null;
}

const SET = [
  { role: 'logo', label: 'Logo', on: false },
  { role: 'd1', label: 'Day One', on: true },
  { role: 'd2', label: 'Day Two', on: true },
  { role: 'd3', label: 'Day Three', on: true },
];

function SetRow({ system, size = 78, showLabels = true }) {
  const Cell = ({ children, label, on }) => (
    <div className="mk-cell">
      <div style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
      {showLabels && <span className={'mk-label' + (on ? ' on' : '')}>{label}</span>}
    </div>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
        {SET.map((m) => <Cell key={m.role} label={m.label} on={m.on}><DayMark system={system} role={m.role} size={size}/></Cell>)}
      </div>
      <div aria-hidden="true" style={{ alignSelf: 'stretch', width: 1, background: 'var(--fdb-border-strong)', margin: '0 0.7rem' }}/>
      <Cell label="X. Awards" on><AwardsMark size={size}/></Cell>
    </div>
  );
}

const SYSTEMS = [
  { id: 'fan', n: '01', name: 'Radial fan', tag: 'Fans open', rule: 'The three squares pivot from a shared base and fan wider each day — a hand of cards opening. Day One barely parts; Day Three is wide open. One clear, escalating gesture.' },
  { id: 'twist', n: '02', name: 'Twist', tag: 'Turns', rule: 'The whole stacked mark rotates a set amount more each day — the logo, turned by hand. Distinct angle per day, identical form. The most literal echo of the brand mark.' },
  { id: 'persp', n: '03', name: 'Perspective', tag: 'Tilts in space', rule: 'The mark tilts in 3D, leaning further each day — the perspective shift from the earlier animation, frozen. Dynamic and architectural; strongest in motion.' },
];

function SystemBoard({ s }) {
  return (
    <div style={{ padding: '1.9rem 2rem 1.7rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--fdb-purple)', letterSpacing: '0.04em' }}>{s.n}</span>
          <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fdb-ink)' }}>{s.name}</span>
          <span style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fdb-purple-deep)', background: 'var(--fdb-purple-tint)', borderRadius: 2, padding: '0.2rem 0.45rem' }}>{s.tag}</span>
        </div>
        <p style={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--fdb-ink-muted)', margin: '0.6rem 0 0', maxWidth: '66ch' }}>{s.rule}</p>
      </div>
      <SetRow system={s.id} size={78}/>
      <div style={{ borderTop: '1px solid var(--fdb-border)', paddingTop: '1.1rem' }}>
        <span style={{ fontSize: '0.5rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fdb-ink-faint)', display: 'block', marginBottom: '0.8rem' }}>At 40px · the size it ships</span>
        <SetRow system={s.id} size={40} showLabels={false}/>
      </div>
    </div>
  );
}

function MarksLab() {
  return (
    <DesignCanvas>
      <DCSection id="ref" title="The fixed anchors" subtitle="The FDB logo and the X. Awards mark (now with the crisp vector x., dot intact) stay as they are. Each system below only inflects the three days.">
        <DCArtboard id="logo" label="Future. Destination. Brand." width={300} height={300}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--fdb-cream)' }}><DayMark system="fan" role="logo" size={150}/></div>
        </DCArtboard>
        <DCArtboard id="xawards" label="X. Awards · the anchor" width={300} height={300}>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--fdb-cream)' }}><AwardsMark size={168}/></div>
        </DCArtboard>
      </DCSection>

      <DCSection id="systems" title="Three systems · bolder & more distinct" subtitle="Each takes the one logo shape and inflects it one clear way across the days. The X. Awards mark is shown set apart in each. Pick a direction (or a hybrid).">
        {SYSTEMS.map((s) => (
          <DCArtboard key={s.id} id={s.id} label={`${s.n} · ${s.name}`} width={820} height={350}>
            <SystemBoard s={s}/>
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}

window.MarksLab = MarksLab;
