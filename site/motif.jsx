/* eslint-disable */
// FDB 2026 — THE UNIFIED MARK SYSTEM  +  JOURNEY RAIL
// ───────────────────────────────────────────────────────────────────────────
// One shape for everything: the three stacked squares of the Future. Destination.
// Brand. logo. The day is shown by a tinted FILLED PANE stepping forward through
// the stack; the X. Awards carries the real calligraphic x. in a white front
// square. The 1·2·3 days flow together; X. Awards sits apart.
//
//   brand       — the cascade at rest (the logo, no pane)
//   council     — Day One   · FRONT pane filled (foreground)
//   programme   — Day Two   · MIDDLE pane filled
//   workstream  — Day Three · BACK pane filled (background)
//   awards      — X. Awards · the MIDDLE square is bold and carries the x. dead-
//                  centre; the front & back squares are faded (set apart)
//
// On navigation the header mark plays "step & pop": the lit pane pops in with an
// overshoot and the mark steps forward; arriving at X. Awards the cascade settles
// to outlines and the x. scales in.
const X_AR = (window.FDB_X && window.FDB_X.ar) || 1.569;     // crisp vector x. aspect (w/h)
function XGlyph({ color, left, top, wPx, style }) {
  const F = window.FDB_X || { vb: '0 0 173 113', d: '' };
  return <svg viewBox={F.vb} width={wPx} height={wPx / X_AR} aria-hidden="true" style={{ position: 'absolute', left, top, display: 'block', ...style }}><path d={F.d} fill={color}/></svg>;
}

// ─── X. AWARDS — the authoritative logo, used directly ────────────────────────
// Renders the agreed X. Awards SVG (assets/logos/x-awards-mark.svg) inline, so it
// is pixel-faithful and crisp at any size — never reconstructed. `muted` greys it
// for inactive journey stations. Sized to the mark's square footprint.
const XAW = window.FDB_XAWARDS || { vb: '0 0 282 266', ar: 1.06, inner: '' };
function AwardsLogo({ size = 120, muted = false, style }) {
  const w = size, h = size / XAW.ar;
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: size, height: size, flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      filter: muted ? 'grayscale(1)' : 'none', opacity: muted ? 0.45 : 1, ...style }}>
      <svg viewBox={XAW.vb} width={w} height={h} fill="none" style={{ display: 'block' }} dangerouslySetInnerHTML={{ __html: XAW.inner }}/>
    </div>
  );
}

const S = 46, C = 50, UO = 9;                           // square side, centre, cascade offset
const STROKE = { deep: 'var(--fdb-purple)', mid: 'var(--fdb-purple-mid)', soft: 'var(--fdb-purple-soft)' };
const TINTNAME = ['soft', 'mid', 'deep'];               // back → front
const FILLIDX = { brand: -1, council: 2, programme: 1, workstream: 0 };   // Day 1 front → Day 3 back
const DAYORDER = { council: 0, programme: 1, workstream: 2 };               // sequence, for the forward step
const PANE = 'var(--fdb-purple-tint)';                  // the filled-pane tint

function squarePositions() {
  return [[C - UO, C - UO], [C, C], [C + UO, C + UO]];  // back, mid, front
}

// ─── STATIC MARK ──────────────────────────────────────────────────────────────
// `state` selects which pane fills (or the awards x.); `muted` greys it for
// inactive journey stations; `sw` is the base stroke (viewBox is 100).
function Motif({ state = 'brand', size = 120, sw = 2.4, muted = false, style }) {
  if (state === 'awards') return <AwardsLogo size={size} muted={muted} style={style}/>;
  const pos = squarePositions();
  const fillIdx = (FILLIDX[state] ?? -1);
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', position: 'absolute', inset: 0 }}>
        {pos.map((p, idx) => {
          const fill = (!muted && idx === fillIdx) ? PANE : 'none';
          return <rect key={idx} x={p[0] - S / 2} y={p[1] - S / 2} width={S} height={S} rx="6"
            fill={fill} stroke={muted ? 'var(--fdb-ink-faint)' : STROKE[TINTNAME[idx]]}
            strokeOpacity={muted ? 0.5 : 1} strokeWidth={sw}/>;
        })}
      </svg>
    </div>
  );
}

// ─── ANIMATED HEADER MARK (step & pop) ────────────────────────────────────────
// The same shape, animated. When `state` changes (on navigation) the lit pane
// pops in and the mark steps forward; X. Awards fills white and the x. scales in.
function TwistMark({ state = 'brand', size = 34, sw = 1.7, style }) {
  if (state === 'awards') return <AwardsLogo size={size} style={style}/>;
  const pos = squarePositions();
  const fillIdx = (FILLIDX[state] ?? -1);
  const litIdx = fillIdx < 0 ? 0 : fillIdx;
  const step = DAYORDER[state] ?? 0;
  const cpx = (i) => (pos[i][0] / 100) * size, cpy = (i) => (pos[i][1] / 100) * size;
  return (
    <div aria-hidden="true" style={{ position: 'relative', width: size, height: size, flexShrink: 0,
      transition: 'transform .5s cubic-bezier(.34,1.4,.64,1)', transform: `translate(${step * 0.6}px, ${step * 0.6}px)`, ...style }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', inset: 0 }}>
        {pos.map((p, idx) => {
          const isLit = fillIdx === idx;
          return <rect key={'f' + idx} x={p[0] - S / 2} y={p[1] - S / 2} width={S} height={S} rx="6" fill={PANE}
            style={{ transformBox: 'fill-box', transformOrigin: 'center', transform: isLit ? 'scale(1)' : 'scale(0.45)', opacity: isLit ? 1 : 0, transition: 'transform .5s cubic-bezier(.34,1.56,.64,1), opacity .3s ease' }}/>;
        })}
        {pos.map((p, idx) => (
          <rect key={'o' + idx} x={p[0] - S / 2} y={p[1] - S / 2} width={S} height={S} rx="6" fill="none"
            stroke={STROKE[TINTNAME[idx]]} strokeWidth={fillIdx === idx ? sw * 1.3 : sw} style={{ transition: 'stroke-width .4s ease' }}/>
        ))}
      </svg>
    </div>
  );
}

// Large decorative hero mark, bleeding gently off the top-right edge.
function HeroMotif({ state = 'council', size = 460, top = -60, right = -90, soft = false, style }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', top, right, width: size, height: size, pointerEvents: 'none', zIndex: 0, opacity: soft ? 0.55 : 1, ...style }}>
      <Motif state={state} size={size} sw={1.6}/>
    </div>
  );
}

// ─── JOURNEY RAIL ─────────────────────────────────────────────────────────────
// The 1·2·3 days flow together along a connector; X. Awards sits apart past a
// divider. The active station is lit; the connector fills up to the active day.
function JourneyRail({ current, allLit = false, markSize = 40, style }) {
  const { nav } = useNav();
  const [hovered, setHovered] = React.useState(null);
  const days = ARC.filter((s) => !s.apart);
  const awards = ARC.find((s) => s.apart);
  const dayIdx = days.findIndex((s) => s.station === current);
  const n = days.length;
  const centre = (i) => ((i + 0.5) / n) * 100;
  const fillTo = dayIdx >= 0 ? centre(dayIdx) : (allLit ? centre(n - 1) : centre(0));

  const Station = (s, active, done) => (
    <button key={s.path} onClick={() => nav(s.path)} onMouseEnter={() => setHovered(s.station)} onMouseLeave={() => setHovered(null)} style={{
      flex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem',
    }} title={`${s.kicker} · ${s.short}`}>
      <span className="fdb-rail-mark" style={{ width: markSize, height: markSize, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--fdb-cream)', borderRadius: 4, position: 'relative', zIndex: 1,
        outline: active ? '1px solid var(--fdb-purple-soft)' : 'none', outlineOffset: 3 }}>
        <Motif state={s.station} size={markSize} sw={3.2} muted={!active && !done && hovered !== s.station}/>
      </span>
      <span style={{ textAlign: 'center', lineHeight: 1.3 }}>
        <span style={{ display: 'block', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: active ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)' }}>{s.kicker}</span>
        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: active ? 700 : 600, color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)', marginTop: '0.15rem' }}>{s.short}</span>
        <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 600, color: 'var(--fdb-ink-faint)', marginTop: '0.1rem' }}>{s.day}</span>
      </span>
    </button>
  );

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', ...style }}>
      {/* the 1·2·3 flow with its connector */}
      <div style={{ position: 'relative', flex: n, display: 'flex' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: markSize / 2, left: `${centre(0)}%`, right: `${centre(0)}%`, height: 1, background: 'var(--fdb-border-strong)' }}/>
        {(allLit || dayIdx > 0) && (
          <div aria-hidden="true" style={{ position: 'absolute', top: markSize / 2, left: `${centre(0)}%`, width: `${fillTo - centre(0)}%`, height: 1.5, background: 'var(--fdb-purple)' }}/>
        )}
        {days.map((s, i) => Station(s, i === dayIdx, allLit || (dayIdx >= 0 && i < dayIdx)))}
      </div>
      {/* X. Awards — set apart */}
      <div aria-hidden="true" style={{ alignSelf: 'stretch', width: 1, background: 'var(--fdb-border-strong)', margin: '0 0.7rem' }}/>
      <div style={{ flex: 1, display: 'flex' }}>{Station(awards, current === awards.station, allLit)}</div>
    </div>
  );
}

Object.assign(window, { Motif, TwistMark, HeroMotif, JourneyRail });
