/* @ds-bundle: {"format":3,"namespace":"FDBDesignSystem_e22335","components":[],"sourceHashes":{"components.jsx":"08edacbe4339","fdb-design/slides/deck-stage.js":"d8d952171670","fdb-design/ui_kits/marketing-site/components-standalone.jsx":"49fa4d78fed9","fdb-design/ui_kits/marketing-site/components.jsx":"ac05e3501e23","fdb-design/ui_kits/marketing-site/pages-standalone.jsx":"357b8b3b18c0","fdb-design/ui_kits/marketing-site/pages.jsx":"f12b96f10bd7","page-overview.jsx":"8d96a55a57aa","site/components.jsx":"55c79a89e721","site/design-canvas.jsx":"bd8746af6e58","site/marks-lab.jsx":"1ac8eb03cc63","site/motif.jsx":"7c528019c798","site/page-aiact.jsx":"e9f6501250c8","site/page-awards.jsx":"99fec45243e2","site/page-keynotes.jsx":"75137a8546d7","site/page-leadership.jsx":"45e6fbd77e02","site/page-overview.jsx":"b78716cd1d19","site/page-register.jsx":"0747acac9bdb","site/page-workstream.jsx":"ced761d1341e","site/x-glyph-path.js":"c1771f8494f6","slides/deck-stage.js":"d8d952171670","ui_kits/marketing-site/components-standalone.jsx":"4a39a77ca3f6","ui_kits/marketing-site/components.jsx":"ca0c13657f36","ui_kits/marketing-site/pages-standalone.jsx":"357b8b3b18c0","ui_kits/marketing-site/pages.jsx":"f12b96f10bd7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FDBDesignSystem_e22335 = window.FDBDesignSystem_e22335 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
// FDB 2026 — Shared component library
// Nav context, type primitives, header, footer, buttons, tags, frames.
// Per-day MOTIF + JOURNEY RAIL live in motif.jsx.
// Everything shared is assigned to window so each text/babel page file can use it.

const {
  useState,
  useRef,
  useEffect
} = React;

// ─── NAV CONTEXT ─────────────────────────────────────────────────────────────
const NavContext = React.createContext({
  nav: () => {},
  path: '/',
  station: null
});
function useNav() {
  return React.useContext(NavContext);
}

// The arc, in order. Used by header nav and the journey rail.
const ARC = [{
  path: '/leadership',
  station: 'council',
  short: 'Day One',
  day: '02 Dec',
  kicker: 'Council'
}, {
  path: '/awards',
  station: 'awards',
  short: 'X. Awards',
  day: '02 Dec',
  kicker: 'Evening'
}, {
  path: '/keynotes',
  station: 'programme',
  short: 'Day Two',
  day: '03 Dec',
  kicker: 'Programme'
}, {
  path: '/workstream',
  station: 'workstream',
  short: 'Day Three',
  day: '04 Dec',
  kicker: 'Workstream'
}];

// ─── TYPE PRIMITIVES ──────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '38ch',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '62ch',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}
function MetaRow({
  label,
  value,
  tbc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 96,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: tbc ? 500 : 600,
      fontStyle: tbc ? 'italic' : 'normal',
      color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)'
    }
  }, value));
}

// A reusable uppercase section heading with a leading hairline — the structural
// device used to open every band on a page.
function SectionHead({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '3.5rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, children));
}

// ─── BRAND MARK (header / footer scale) ───────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple-mid)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple-soft)",
    strokeWidth: sw
  }));
}

// ─── ICONS (Feather-style, 2.5 stroke) ────────────────────────────────────────
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const DownloadIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
}));

// ─── BUTTONS ──────────────────────────────────────────────────────────────────
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  style,
  type = 'button',
  fixed
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.73rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.7rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    whiteSpace: 'nowrap',
    ...(fixed ? {
      minWidth: 132
    } : null)
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.78rem',
      padding: '0 0 2px',
      borderRadius: 0,
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)'}`
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant],
      ...style
    }
  }, icon, children);
}

// A text link that routes inside the site.
function NavLink({
  to,
  children,
  style
}) {
  const {
    nav
  } = useNav();
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(to),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: '0.85rem',
      fontWeight: 600,
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'transparent'}`,
      transition: 'color 0.15s, border-color 0.15s',
      ...style
    }
  }, children);
}

// ─── TAGS / PILLS ───────────────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.22rem 0.5rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    ink: {
      background: 'transparent',
      border: '1px solid var(--fdb-border-strong)',
      color: 'var(--fdb-ink-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function TagRow({
  tags = [],
  variant
}) {
  if (!tags.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.35rem',
      marginTop: '0.6rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: variant
  }, t)));
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function FDBHeader({
  currentPath,
  onNav
}) {
  const links = [{
    path: '/',
    label: 'Overview'
  }, ...ARC.map(s => ({
    path: s.path,
    label: s.short
  }))];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-header-inner",
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      height: '100%',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem'
    },
    "data-comment-anchor": "05ed8de9e6-div-195-7"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('/'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 36,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fdb-header-meta",
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem',
      lineHeight: 1.4,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  }, "Dublin", /*#__PURE__*/React.createElement("br", null), "02\u201304 Dec 2026")), /*#__PURE__*/React.createElement("nav", {
    className: "fdb-header-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    }
  }, links.map(l => {
    const active = currentPath === l.path || l.path === '/leadership' && currentPath === '/ai-act';
    return /*#__PURE__*/React.createElement("button", {
      key: l.path,
      className: "fdb-nav-link",
      onClick: () => onNav(l.path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 2px',
        fontSize: '0.78rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        borderBottom: active ? '1.5px solid var(--fdb-purple)' : '1.5px solid transparent',
        transition: 'color 0.15s, border-color 0.15s',
        whiteSpace: 'nowrap'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)';
      }
    }, l.label);
  }), /*#__PURE__*/React.createElement(Button, {
    fixed: true,
    onClick: () => onNav('/register'),
    style: {
      padding: '0.6rem 1.2rem'
    }
  }, "Register"))));
}

// ─── HOST PARTNER (Fáilte Ireland) ────────────────────────────────────────────
function HostPartner({
  label = 'Host partner',
  size = 24
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/failte-ireland.png",
    alt: "F\xE1ilte Ireland",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }));
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function FDBFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      marginTop: '5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '2.5rem 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 26,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), /*#__PURE__*/React.createElement("br", null), "Digital Tourism Think Tank")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/leadership"
  }, "Day One"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/awards"
  }, "X. Awards"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/keynotes"
  }, "Day Two"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/workstream"
  }, "Day Three"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/register"
  }, "Register"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.5rem 2rem'
    }
  }, /*#__PURE__*/React.createElement(HostPartner, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Convened under Ireland's EU Council Presidency \xB7 H2 2026"))));
}

// ─── STACK FRAME ───────────────────────────────────────────────────────────
// Wraps a block in one offset purple-soft outline, echoing a single square of
// the brand mark. The signature framing gesture.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.75,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      height: '100%'
    }
  }, children));
}

// ─── SPEAKER / PARTICIPANT PORTRAIT FRAME ─────────────────────────────────────
// Purple-outlined rectangle with two offset decorative frames behind it.
// Placeholder fill is a cool desaturated blue-grey, per the brand book.
function PortraitFrame({
  name,
  org,
  role,
  tbc,
  src,
  tone = '#6F8FA8',
  w = '100%',
  ratio = '4/5'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.55,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover no-repeat url(${src})` : tone,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: 0,
      left: '8%',
      width: '84%',
      height: '92%',
      opacity: 0.9
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "33",
    rx: "17",
    ry: "21",
    fill: "rgba(26,30,40,0.55)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 100 Q18 58 50 58 Q82 58 88 100 Z",
    fill: "rgba(26,30,40,0.55)"
  })), tbc && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(26,26,26,0.45)',
      padding: '2px 5px',
      borderRadius: 2
    }
  }, "TBC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.98rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: tbc ? 'italic' : 'normal',
      lineHeight: 1.15
    }
  }, name), org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.25rem',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: org
    }
  }), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginTop: '0.35rem'
    }
  }, role)));
}

// ─── DAY HERO ─────────────────────────────────────────────────────────────
// Shared shell for the four day heroes: a quiet journey rail up top, then the
// editorial title block, with the day's motif bleeding off the right. Each day
// passes its own motif `state` and accent register — the differentiation lives
// in what each page puts inside.
function DayHero({
  station,
  eyebrow,
  title,
  lead,
  meta,
  children,
  motifSize = 420,
  motifTop = -20,
  motifRight = -80,
  motifSoft = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fdb-rise",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(JourneyRail, {
    current: station,
    style: {
      maxWidth: 680,
      marginLeft: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      position: 'relative',
      padding: '3rem 3rem 3.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroMotif, {
    state: station,
    size: motifSize,
    top: motifTop,
    right: motifRight,
    soft: motifSoft
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 600
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.6rem, 5.4vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.035em',
      color: 'var(--fdb-ink)',
      marginBottom: lead ? '1.6rem' : '1.75rem',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '44ch',
      marginBottom: meta ? '2.25rem' : '2rem'
    }
  }, lead), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(MetaRow, _extends({
    key: i
  }, m)))), children)));
}

// ─── PROGRAMME ROW ─────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst,
  accent = 'var(--fdb-purple)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '78px 1fr',
      gap: '0 2rem',
      padding: '1.6rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: accent,
      paddingTop: '0.15rem',
      fontVariantNumeric: 'tabular-nums'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.98rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: desc ? '0.4rem' : 0,
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.65,
      maxWidth: 620
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement(TagRow, {
    tags: tags
  }), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.78rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)',
      flexShrink: 0
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.95rem 1.05rem',
      background: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ──────────────────────────────────────────────────────
// Solid purple punctuation block. Rare. Used for policy / value summaries.
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.9rem 2.1rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '1.75rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '1.75rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.5rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.84rem',
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.6
    }
  }, it.text))));
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────────
Object.assign(window, {
  NavContext,
  useNav,
  ARC,
  Eyebrow,
  SectionLabel,
  SectionHead,
  Statement,
  BodyText,
  Accent,
  MetaRow,
  Mark,
  ArrowIcon,
  ChatIcon,
  DownloadIcon,
  Button,
  NavLink,
  Tag,
  TagRow,
  FDBHeader,
  FDBFooter,
  HostPartner,
  StackFrame,
  PortraitFrame,
  DayHero,
  ProgrammeRow,
  SessionCard,
  PolicyBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components.jsx", error: String((e && e.message) || e) }); }

// fdb-design/slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Delete (opens a Cancel/Delete confirm
 *      dialog). Drag the rail's right edge to resize; width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, and via the `no-rail`
 *      attribute. Rail mutations dispatch a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }
    :host([data-rail-anim]) .tapzones { transition: left 200ms cubic-bezier(.3,.7,.4,1); }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .tapzones, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-noncommentable', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-noncommentable', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-noncommentable', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-noncommentable', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, tapzones, overlay, menu, confirm);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._tapzones = tapzones;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        if (this._tapzones) this._tapzones.style.left = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region. Tapzones just inset from rw.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      if (this._tapzones) this._tapzones.style.left = rw + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTapBack(e) {
      e.preventDefault();
      this._advance(-1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._advance(1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "fdb-design/slides/deck-stage.js", error: String((e && e.message) || e) }); }

// fdb-design/ui_kits/marketing-site/components-standalone.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Atomic components
// Mark, Wordmark, Header, Footer, Eyebrow, SectionLabel, Tag, Pill, Button,
// MetaRow, ProgrammeRow, SessionCard, ParticipantCell, OutputItem, PolicyBar,
// SpeakerFrame
// All shared on window so other JSX files can import them.

const {
  useState
} = React;

// ─── BRAND MARKS ───────────────────────────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#8239C1",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#9B6FE0",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#C9AAEE",
    strokeWidth: sw
  }));
}
function MarkLarge({
  size = 140
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 144 144",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#8239C1",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "30",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#9B6FE0",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "58",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#C9AAEE",
    strokeWidth: "2"
  }));
}
function Wordmark({
  size = 'sm'
}) {
  const fs = size === 'lg' ? '1.6rem' : size === 'md' ? '1rem' : '0.82rem';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, "Future Destination ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand."));
}

// ─── TYPO PRIMITIVES ────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      padding: '2.5rem 0 1.5rem',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '680px',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '620px',
      marginTop: '0.85rem',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}

// ─── TAGS / PILLS / BUTTONS ────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.2rem 0.5rem',
    marginRight: '0.35rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    dark: {
      background: 'var(--fdb-ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.64rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      padding: '0.28rem 0.65rem',
      borderRadius: '2px'
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.75rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s'
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.72rem',
      padding: '0 0 1px',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong, rgba(26,26,26,0.18))'}`,
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant]
    }
  }, icon, children);
}
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));

// ─── HEADER / FOOTER ────────────────────────────────────────────────────────
function Header({
  currentPath = '/',
  onNav,
  dark = false,
  onToggleDark
}) {
  const link = (path, label) => {
    const active = currentPath === path;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav?.(path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.72rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        padding: '0 0 2px',
        borderBottom: active ? '1px solid var(--fdb-purple)' : '1px solid transparent',
        transition: 'color 0.15s, border-color 0.15s'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)';
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav?.('/'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.bannerDark : window.__resources.banner,
    alt: "Future Destination Brand.",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, "Dublin \xB7 December 2026")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    }
  }, link('/', 'Overview'), link('/leadership', 'Leadership Day'), link('/summit', 'Summit'), link('/awards', 'X. Awards'), /*#__PURE__*/React.createElement(Pill, null, "Invite Only"), /*#__PURE__*/React.createElement(DarkToggle, {
    dark: dark,
    onToggle: onToggleDark
  })));
}
function Footer({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.25rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.bannerDark : window.__resources.banner,
    alt: "Future Destination Brand.",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), ' · Hosted by Fáilte Ireland · Digital Tourism Think Tank')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Ireland EU Council Presidency \xB7 H2 2026"));
}

// ─── DARK MODE TOGGLE ───────────────────────────────────────────────────────
function DarkToggle({
  dark,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    title: dark ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      background: 'none',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '6px 8px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--fdb-ink-muted)',
      transition: 'border-color 0.15s, color 0.15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-purple)';
      e.currentTarget.style.color = 'var(--fdb-purple)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-border-strong)';
      e.currentTarget.style.color = 'var(--fdb-ink-muted)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, dark ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })));
}

// ─── META ROW ───────────────────────────────────────────────────────────────
function MetaRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 80,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 600,
      color: 'var(--fdb-ink)'
    }
  }, value));
}

// ─── PROGRAMME ──────────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0 2rem',
      padding: '1.5rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: 'var(--fdb-purple)',
      paddingTop: '0.1rem'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.35rem',
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.62,
      maxWidth: 600
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.55rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)'
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.9rem 1rem',
      background: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ─────────────────────────────────────────────────────
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.75rem 2rem',
      margin: '2.5rem 0',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '2rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '2rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.4rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.55
    }
  }, it.text))));
}

// ─── PARTICIPANTS GRID ──────────────────────────────────────────────────────
function ParticipantsGrid({
  cells
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: '0.5rem'
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: c.tint ? 'var(--fdb-purple-tint)' : 'var(--fdb-cream)',
      padding: '1.25rem',
      gridColumn: c.span ? `span ${c.span}` : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: c.tint ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      marginBottom: '0.35rem'
    }
  }, c.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: c.long ? '0.82rem' : '0.88rem',
      fontWeight: c.tbc ? 500 : 700,
      fontStyle: c.tbc ? 'italic' : 'normal',
      color: c.tbc ? 'var(--fdb-ink-muted)' : c.long ? 'var(--fdb-ink-mid)' : 'var(--fdb-ink)',
      marginBottom: '0.15rem',
      lineHeight: 1.3
    }
  }, c.name), c.org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: c.org
    }
  }))));
}

// ─── OUTPUT ITEM ────────────────────────────────────────────────────────────
function OutputItem({
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.4rem',
      lineHeight: 1.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, desc));
}

// ─── SPEAKER FRAME ──────────────────────────────────────────────────────────
function SpeakerFrame({
  src,
  name,
  org,
  role,
  color = '#6F8FA8'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 260,
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover url(${src})` : color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -10,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, role)));
}

// ─── STACK FRAME ────────────────────────────────────────────────────────────
// Wraps any block in a single offset purple-soft outline (echoing one square
// of the stacked-square brand mark). Use sparingly — on hero blocks, output
// cards, award categories.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}

// ─── HERO STACK DECOR ───────────────────────────────────────────────────────
// The three big offset squares motif used as the hero's right-hand decoration.
// Sits mostly on-canvas with a gentle bleed off the top-right edge.
function HeroStackDecor() {
  const sq = {
    position: 'absolute',
    borderRadius: 8,
    borderStyle: 'solid'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: -80,
      width: 560,
      height: 560,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 100,
      left: 0,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 50,
      left: 50,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-mid)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 0,
      left: 100,
      borderWidth: 3,
      borderColor: 'var(--fdb-purple)'
    }
  }));
}

// ─── EXPORTS ────────────────────────────────────────────────────────────────
Object.assign(window, {
  Mark,
  MarkLarge,
  Wordmark,
  Eyebrow,
  SectionLabel,
  Statement,
  BodyText,
  Accent,
  Tag,
  Pill,
  Button,
  ChatIcon,
  ArrowIcon,
  Header,
  Footer,
  DarkToggle,
  MetaRow,
  ProgrammeRow,
  SessionCard,
  PolicyBar,
  ParticipantsGrid,
  OutputItem,
  SpeakerFrame,
  StackFrame,
  HeroStackDecor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "fdb-design/ui_kits/marketing-site/components-standalone.jsx", error: String((e && e.message) || e) }); }

// fdb-design/ui_kits/marketing-site/components.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Atomic components
// Mark, Wordmark, Header, Footer, Eyebrow, SectionLabel, Tag, Pill, Button,
// MetaRow, ProgrammeRow, SessionCard, ParticipantCell, OutputItem, PolicyBar,
// SpeakerFrame
// All shared on window so other JSX files can import them.

const {
  useState
} = React;

// ─── BRAND MARKS ───────────────────────────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#8239C1",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#9B6FE0",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#C9AAEE",
    strokeWidth: sw
  }));
}
function MarkLarge({
  size = 140
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 144 144",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#8239C1",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "30",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#9B6FE0",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "58",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#C9AAEE",
    strokeWidth: "2"
  }));
}
function Wordmark({
  size = 'sm'
}) {
  const fs = size === 'lg' ? '1.6rem' : size === 'md' ? '1rem' : '0.82rem';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, "Future Destination ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand."));
}

// ─── TYPO PRIMITIVES ────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      padding: '2.5rem 0 1.5rem',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '680px',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '620px',
      marginTop: '0.85rem',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}

// ─── TAGS / PILLS / BUTTONS ────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.2rem 0.5rem',
    marginRight: '0.35rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    dark: {
      background: 'var(--fdb-ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.64rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      padding: '0.28rem 0.65rem',
      borderRadius: '2px'
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.75rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s'
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.72rem',
      padding: '0 0 1px',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong, rgba(26,26,26,0.18))'}`,
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant]
    }
  }, icon, children);
}
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));

// ─── HEADER / FOOTER ────────────────────────────────────────────────────────
function Header({
  currentPath = '/',
  onNav,
  dark = false,
  onToggleDark
}) {
  const link = (path, label) => {
    const active = currentPath === path;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav?.(path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.72rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        padding: '0 0 2px',
        borderBottom: active ? '1px solid var(--fdb-purple)' : '1px solid transparent',
        transition: 'color 0.15s, border-color 0.15s'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)';
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav?.('/'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/fdb-banner-dark.png" : "../../assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, "Dublin \xB7 December 2026")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    }
  }, link('/', 'Overview'), link('/leadership', 'Leadership Day'), link('/summit', 'Summit'), link('/awards', 'X. Awards'), /*#__PURE__*/React.createElement(Pill, null, "Invite Only"), /*#__PURE__*/React.createElement(DarkToggle, {
    dark: dark,
    onToggle: onToggleDark
  })));
}
function Footer({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.25rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/fdb-banner-dark.png" : "../../assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), ' · Hosted by Fáilte Ireland · Digital Tourism Think Tank')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Ireland EU Council Presidency \xB7 H2 2026"));
}

// ─── DARK MODE TOGGLE ───────────────────────────────────────────────────────
function DarkToggle({
  dark,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    title: dark ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      background: 'none',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '6px 8px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--fdb-ink-muted)',
      transition: 'border-color 0.15s, color 0.15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-purple)';
      e.currentTarget.style.color = 'var(--fdb-purple)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-border-strong)';
      e.currentTarget.style.color = 'var(--fdb-ink-muted)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, dark ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })));
}

// ─── META ROW ───────────────────────────────────────────────────────────────
function MetaRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 80,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 600,
      color: 'var(--fdb-ink)'
    }
  }, value));
}

// ─── PROGRAMME ──────────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0 2rem',
      padding: '1.5rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: 'var(--fdb-purple)',
      paddingTop: '0.1rem'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.35rem',
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.62,
      maxWidth: 600
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.55rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)'
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.9rem 1rem',
      background: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ─────────────────────────────────────────────────────
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.75rem 2rem',
      margin: '2.5rem 0',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '2rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '2rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.4rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.55
    }
  }, it.text))));
}

// ─── PARTICIPANTS GRID ──────────────────────────────────────────────────────
function ParticipantsGrid({
  cells
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: '0.5rem'
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: c.tint ? 'var(--fdb-purple-tint)' : 'var(--fdb-cream)',
      padding: '1.25rem',
      gridColumn: c.span ? `span ${c.span}` : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: c.tint ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      marginBottom: '0.35rem'
    }
  }, c.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: c.long ? '0.82rem' : '0.88rem',
      fontWeight: c.tbc ? 500 : 700,
      fontStyle: c.tbc ? 'italic' : 'normal',
      color: c.tbc ? 'var(--fdb-ink-muted)' : c.long ? 'var(--fdb-ink-mid)' : 'var(--fdb-ink)',
      marginBottom: '0.15rem',
      lineHeight: 1.3
    }
  }, c.name), c.org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: c.org
    }
  }))));
}

// ─── OUTPUT ITEM ────────────────────────────────────────────────────────────
function OutputItem({
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.4rem',
      lineHeight: 1.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, desc));
}

// ─── SPEAKER FRAME ──────────────────────────────────────────────────────────
function SpeakerFrame({
  src,
  name,
  org,
  role,
  color = '#6F8FA8'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 260,
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover url(${src})` : color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -10,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, role)));
}

// ─── STACK FRAME ────────────────────────────────────────────────────────────
// Wraps any block in a single offset purple-soft outline (echoing one square
// of the stacked-square brand mark). Use sparingly — on hero blocks, output
// cards, award categories.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}

// ─── HERO STACK DECOR ───────────────────────────────────────────────────────
// The three big offset squares motif used as the hero's right-hand decoration.
// Sits mostly on-canvas with a gentle bleed off the top-right edge.
function HeroStackDecor() {
  const sq = {
    position: 'absolute',
    borderRadius: 8,
    borderStyle: 'solid'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: -80,
      width: 560,
      height: 560,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 100,
      left: 0,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 50,
      left: 50,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-mid)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 0,
      left: 100,
      borderWidth: 3,
      borderColor: 'var(--fdb-purple)'
    }
  }));
}

// ─── EXPORTS ────────────────────────────────────────────────────────────────
Object.assign(window, {
  Mark,
  MarkLarge,
  Wordmark,
  Eyebrow,
  SectionLabel,
  Statement,
  BodyText,
  Accent,
  Tag,
  Pill,
  Button,
  ChatIcon,
  ArrowIcon,
  Header,
  Footer,
  DarkToggle,
  MetaRow,
  ProgrammeRow,
  SessionCard,
  PolicyBar,
  ParticipantsGrid,
  OutputItem,
  SpeakerFrame,
  StackFrame,
  HeroStackDecor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "fdb-design/ui_kits/marketing-site/components.jsx", error: String((e && e.message) || e) }); }

// fdb-design/ui_kits/marketing-site/pages-standalone.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Page compositions
// Overview (home) · Leadership Day · Summit · X. Awards

const PAGE_WRAP = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 3rem 5rem'
};
const HR = () => /*#__PURE__*/React.createElement("hr", {
  style: {
    border: 'none',
    borderTop: '1px solid var(--fdb-border)',
    margin: 0
  }
});

// ─── OVERVIEW (LANDING) ─────────────────────────────────────────────────────
function OverviewPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Future \xB7 Destination \xB7 Brand \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "A global", /*#__PURE__*/React.createElement("br", null), "gathering of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "CMOs of leading", /*#__PURE__*/React.createElement("br", null), "destinations.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "Two days in Dublin. A working leadership day on AI in destination management, a senior marketing summit and the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => onNav('/leadership')
  }, "View programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Request an invitation")))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The two days"), /*#__PURE__*/React.createElement(Statement, null, "FDB 2026 is convened by ", /*#__PURE__*/React.createElement(Accent, null, "F\xE1ilte Ireland"), " under Ireland's EU Council Presidency and facilitated by the ", /*#__PURE__*/React.createElement(Accent, null, "Digital Tourism Think Tank.")), /*#__PURE__*/React.createElement(BodyText, null, "The room is small by design. Outputs reach EU institutions, national governments and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 1 \xB7 Leadership Programme",
    title: "Leadership in the Age of AI.",
    desc: "Invite-only working day for ~30\u201340 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format, no stage. Outputs published to EU institutions.",
    cta: "Day 1 programme",
    onClick: () => onNav('/leadership')
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 2 \xB7 Summit",
    title: "The state of destination brand.",
    desc: "The annual gathering of destination CMOs and senior marketers, followed in the evening by the X. Awards \u2014 the sector's most respected recognition of branding, transformation and digital innovation.",
    cta: "Day 2 programme",
    onClick: () => onNav('/summit')
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    n: '30–40',
    l: 'Senior leaders in the room'
  }, {
    n: '8–10',
    l: 'Active contributors'
  }, {
    n: '2',
    l: 'Published policy outputs'
  }, {
    n: '1',
    l: 'EU Presidency submission'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-purple)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.5rem',
      lineHeight: 1.4
    }
  }, s.l)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Hosted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '3rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostLogo, null, "F\xE1ilte", /*#__PURE__*/React.createElement("br", null), "Ireland"), /*#__PURE__*/React.createElement(HostLogo, null, "Digital Tourism", /*#__PURE__*/React.createElement("br", null), "Think Tank"), /*#__PURE__*/React.createElement(HostLogo, null, "Irish EU Council", /*#__PURE__*/React.createElement("br", null), "Presidency"))));
}
function DayCard({
  label,
  title,
  desc,
  cta,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '1.75rem 1.75rem 1.5rem',
      background: 'rgba(255,255,255,0.4)',
      borderColor: hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)',
      transition: 'border-color 0.15s',
      cursor: 'pointer'
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.75rem'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.75rem',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)'
    }
  }, cta, " \u2192"));
}
function HostLogo({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--fdb-ink-faint)',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.2
    }
  }, children));
}

// ─── LEADERSHIP DAY (canonical recreation) ──────────────────────────────────
function LeadershipPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day One \xB7 Leadership Programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "Leadership", /*#__PURE__*/React.createElement("br", null), "in the Age", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement(Accent, null, "AI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "A global leadership day for national tourism organisation CEOs, senior government ministers and the technology leaders shaping AI's role in destination marketing and management."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Location",
    value: "Dublin, Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Invite-only \xB7 30 to 40 participants"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Host",
    value: "F\xE1ilte Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Presidency",
    value: "Irish EU Council Presidency \xB7 H2 2026"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About the day"), /*#__PURE__*/React.createElement(Statement, null, "AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is ", /*#__PURE__*/React.createElement(Accent, null, "not whether to engage."), " It is whether leadership is ready."), /*#__PURE__*/React.createElement(BodyText, null, "Leadership in the Age of AI is a structured, invite-only day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level. The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design."), /*#__PURE__*/React.createElement(BodyText, null, "The day is convened by F\xE1ilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. It precedes Future. Destination. Brand. 2026, DTTT's flagship annual summit."), /*#__PURE__*/React.createElement(PolicyBar, {
    items: [{
      label: 'For destinations',
      text: "A mechanism for the sector to speak with one voice on AI policy, rather than leaving that agenda to platform companies alone."
    }, {
      label: 'For technology leaders',
      text: "Direct engagement with the leaders responsible for tourism at national scale, and a role in shaping the sector's position on AI governance."
    }, {
      label: 'For EU institutions',
      text: "A structured, expert contribution to the AI and digital policy agenda from one of the sector's most senior international forums."
    }]
  }), /*#__PURE__*/React.createElement(BodyText, null, "The outputs of this day are submitted to EU institutions as a sector contribution during the Irish Presidency and distributed to the technology companies shaping the tools and regulations that govern destination marketing. What participants bring to this table does not stay in the room."), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement(SectionLabel, null, "Programme"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "08:30",
    title: "Private breakfast",
    desc: "Seated breakfast for all participants. Introductions happen informally before the working day begins."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Welcome and framing",
    desc: "F\xE1ilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method.",
    speakers: [{
      name: 'Caroline Bocquel, CEO · Fáilte Ireland'
    }, {
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Opening provocation",
    desc: "A senior voice with direct experience of NTO leadership and the AI and data investment landscape delivers a deliberate challenge to the room. Twenty minutes, no slides.",
    tags: ['Provocation', 'Open response'],
    speakers: [{
      name: 'Oliver Csendes · Former CEO, Visit Hungary'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:00",
    title: "AI in destination leadership: a shared framework",
    desc: "DTTT introduces the AI Transparency Framework as a leadership instrument. Illustrated with practice from NTOs already deploying it nationally.",
    tags: ['Framework', 'Peer testimony'],
    speakers: [{
      name: 'NTO leaders engaged in AI governance programmes · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Working sessions",
    desc: "Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session A",
    title: "AI readiness and organisational leadership",
    desc: "What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."
  }), /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session B",
    title: "AI and destination competitiveness",
    desc: "How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."
  }))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "13:00",
    title: "Private lunch",
    desc: "Seated, hosted, informal. The conversation continues."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Big Tech intelligence briefing",
    desc: "A senior representative from one of Dublin's major technology companies delivers a briefing on what the platforms are building and what they are observing in travel and destination search.",
    tags: ['Intelligence briefing'],
    speakers: [{
      name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "The European policy landscape",
    desc: "A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective.",
    tags: ['Policy'],
    speakers: [{
      name: 'EU institutional or government representative · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Synthesis and shared conclusions",
    desc: "DTTT facilitates a structured synthesis of the day's working sessions. The output is a small number of documented priorities forming the basis of the Executive Briefing Summary submitted to EU institutions.",
    tags: ['Policy output']
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Dublin city experience",
    desc: "A curated late afternoon in Dublin, in partnership with F\xE1ilte Ireland's Winter in Dublin programme. Details to be confirmed."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "19:30",
    title: "X. Awards",
    desc: "Transition to the X. Awards evening. The industry's most respected recognition of destination branding, transformation and digital innovation."
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Who is in the room"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated by invitation only."), /*#__PURE__*/React.createElement(ParticipantsGrid, {
    cells: [{
      type: 'Host',
      name: 'Caroline Bocquel',
      org: 'CEO · Fáilte Ireland'
    }, {
      type: 'Provocation',
      name: 'Oliver Csendes',
      org: 'Former CEO · Visit Hungary<br/>UN Tourism advisor'
    }, {
      type: 'Facilitation',
      name: 'Nick Hall',
      org: 'CEO · Digital Tourism Think Tank'
    }, {
      type: 'Technology briefing',
      name: 'Senior representative',
      org: 'Google / Microsoft / OpenAI<br/>Dublin · TBC',
      tbc: true
    }, {
      type: 'Policy voice',
      name: 'EU institutional representative',
      org: 'European institution or government<br/>TBC',
      tbc: true
    }, {
      type: 'NTO leadership',
      name: 'North American CEO',
      org: 'National or major regional tourism organisation · TBC',
      tbc: true
    }, {
      type: 'Further participants',
      long: true,
      span: 3,
      tint: true,
      name: '20 to 30 additional NTO and DMO chief executives and C-suite leaders, by personal invitation.'
    }]
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Published outputs"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day produces two formal outputs, both published after the event and distributed beyond the room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "State of Destination AI Report",
    desc: "A comprehensive synthesis of insights from the leadership day. Published post-event, distributed across the industry and submitted to relevant EU institutions."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Executive Briefing Summary",
    desc: "A structured summary of the leadership day's conclusions and priority recommendations. Concise, formal, designed to be read by policy audiences."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3.5rem',
      paddingTop: '2.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, "The outputs of this day reach ", /*#__PURE__*/React.createElement(Accent, null, "EU institutions, national governments"), " and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-muted)',
      marginBottom: '1.5rem'
    }
  }, "Places on the leadership day are by personal invitation only. To discuss participation, please get in touch."), /*#__PURE__*/React.createElement(Button, {
    icon: ChatIcon
  }, "Get in touch")))));
}

// ─── SUMMIT (DAY 2) ─────────────────────────────────────────────────────────
function SummitPage() {
  const speakers = [{
    name: 'Nick Hall',
    org: 'Digital Tourism Think Tank',
    role: 'CEO · Host',
    color: '#6F8FA8'
  }, {
    name: 'Caroline Bocquel',
    org: 'Fáilte Ireland',
    role: 'CEO',
    color: '#94816A'
  }, {
    name: 'Speaker TBC',
    org: 'European NTO',
    role: 'Provocation',
    color: '#A09EB4'
  }, {
    name: 'Speaker TBC',
    org: 'Major NTO · Asia-Pacific',
    role: 'Keynote',
    color: '#7B8C7A'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Summit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The state", /*#__PURE__*/React.createElement("br", null), "of destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The annual gathering of destination CMOs and senior marketers. A working programme on positioning, narrative and digital channels, followed in the evening by the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Audience",
    value: "Senior destination marketers"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Summit + X. Awards evening"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Speakers"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2.5rem'
    }
  }, "A confirmed and TBC line-up of senior destination, brand and platform leaders. Full schedule and additional speakers are released closer to the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem 1.5rem',
      rowGap: '5rem',
      marginTop: '0.5rem'
    }
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 9,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: s.color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -8,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, s.org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, s.role))))), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      paddingTop: '6rem'
    }
  }, "What the summit covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Destination positioning in AI search",
    desc: "How visitors discover places when an answer-engine sits between them and the brand."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The new visitor brief",
    desc: "Narrative, voice, and the shift from campaign to permanent content surface."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Measurement after the funnel",
    desc: "Reporting destination marketing performance to boards and ministers in 2026."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The X. Awards",
    desc: "Recognising the year's strongest work in branding, transformation and digital innovation."
  })))));
}

// ─── X. AWARDS ──────────────────────────────────────────────────────────────
function AwardsPage({
  dark
}) {
  const cats = [{
    name: 'Destination Brand of the Year',
    desc: 'The strongest national or regional brand expression of 2026.'
  }, {
    name: 'Digital Transformation',
    desc: 'Most ambitious end-to-end digital programme inside an NTO/DMO.'
  }, {
    name: 'Sustainable Tourism Communications',
    desc: 'Most credible, measurable sustainability narrative.'
  }, {
    name: 'AI in Destination Marketing',
    desc: 'Material, deployed use of AI — not a pitch deck.'
  }, {
    name: 'Best Campaign',
    desc: 'Single campaign, judged on craft and effect.'
  }, {
    name: 'Emerging Destination',
    desc: 'Newer brands punching above their weight.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Evening"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.xAwardsWordmarkDark : window.__resources.xAwardsWordmark,
    alt: "X. Awards",
    style: {
      height: 72,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The year's strongest work in ", /*#__PURE__*/React.createElement(Accent, null, "destination branding.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The industry's most respected recognition of destination branding, transformation and digital innovation. Awarded the evening of Day Two."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon
  }, "Submit your entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Past winners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.xAwardsWordmarkDark : window.__resources.xAwardsMark,
    alt: "X. Awards",
    style: {
      width: dark ? 320 : 200,
      height: 'auto',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Categories"), /*#__PURE__*/React.createElement(Statement, null, "Six categories. ", /*#__PURE__*/React.createElement(Accent, null, "One ceremony."), " Judged by a panel of senior destination, brand and policy leaders."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
      marginTop: '2.5rem'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem',
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--fdb-purple)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, c.desc)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Key dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    lbl: 'Entries open',
    val: 'June 2026'
  }, {
    lbl: 'Entries close',
    val: 'October 2026'
  }, {
    lbl: 'Ceremony',
    val: 'December 2026 · Dublin'
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.4rem'
    }
  }, d.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, d.val))))));
}
Object.assign(window, {
  OverviewPage,
  LeadershipPage,
  SummitPage,
  AwardsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "fdb-design/ui_kits/marketing-site/pages-standalone.jsx", error: String((e && e.message) || e) }); }

// fdb-design/ui_kits/marketing-site/pages.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Page compositions
// Overview (home) · Leadership Day · Summit · X. Awards

const PAGE_WRAP = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 3rem 5rem'
};
const HR = () => /*#__PURE__*/React.createElement("hr", {
  style: {
    border: 'none',
    borderTop: '1px solid var(--fdb-border)',
    margin: 0
  }
});

// ─── OVERVIEW (LANDING) ─────────────────────────────────────────────────────
function OverviewPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Future \xB7 Destination \xB7 Brand \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "A global", /*#__PURE__*/React.createElement("br", null), "gathering of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "CMOs of leading", /*#__PURE__*/React.createElement("br", null), "destinations.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "Two days in Dublin. A working leadership day on AI in destination management, a senior marketing summit and the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => onNav('/leadership')
  }, "View programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Request an invitation")))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The two days"), /*#__PURE__*/React.createElement(Statement, null, "FDB 2026 is convened by ", /*#__PURE__*/React.createElement(Accent, null, "F\xE1ilte Ireland"), " under Ireland's EU Council Presidency and facilitated by the ", /*#__PURE__*/React.createElement(Accent, null, "Digital Tourism Think Tank.")), /*#__PURE__*/React.createElement(BodyText, null, "The room is small by design. Outputs reach EU institutions, national governments and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 1 \xB7 Leadership Programme",
    title: "Leadership in the Age of AI.",
    desc: "Invite-only working day for ~30\u201340 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format, no stage. Outputs published to EU institutions.",
    cta: "Day 1 programme",
    onClick: () => onNav('/leadership')
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 2 \xB7 Summit",
    title: "The state of destination brand.",
    desc: "The annual gathering of destination CMOs and senior marketers, followed in the evening by the X. Awards \u2014 the sector's most respected recognition of branding, transformation and digital innovation.",
    cta: "Day 2 programme",
    onClick: () => onNav('/summit')
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    n: '30–40',
    l: 'Senior leaders in the room'
  }, {
    n: '8–10',
    l: 'Active contributors'
  }, {
    n: '2',
    l: 'Published policy outputs'
  }, {
    n: '1',
    l: 'EU Presidency submission'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-purple)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.5rem',
      lineHeight: 1.4
    }
  }, s.l)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Hosted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '3rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostLogo, null, "F\xE1ilte", /*#__PURE__*/React.createElement("br", null), "Ireland"), /*#__PURE__*/React.createElement(HostLogo, null, "Digital Tourism", /*#__PURE__*/React.createElement("br", null), "Think Tank"), /*#__PURE__*/React.createElement(HostLogo, null, "Irish EU Council", /*#__PURE__*/React.createElement("br", null), "Presidency"))));
}
function DayCard({
  label,
  title,
  desc,
  cta,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '1.75rem 1.75rem 1.5rem',
      background: 'rgba(255,255,255,0.4)',
      borderColor: hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)',
      transition: 'border-color 0.15s',
      cursor: 'pointer'
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.75rem'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.75rem',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)'
    }
  }, cta, " \u2192"));
}
function HostLogo({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--fdb-ink-faint)',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.2
    }
  }, children));
}

// ─── LEADERSHIP DAY (canonical recreation) ──────────────────────────────────
function LeadershipPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day One \xB7 Leadership Programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "Leadership", /*#__PURE__*/React.createElement("br", null), "in the Age", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement(Accent, null, "AI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "A global leadership day for national tourism organisation CEOs, senior government ministers and the technology leaders shaping AI's role in destination marketing and management."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Location",
    value: "Dublin, Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Invite-only \xB7 30 to 40 participants"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Host",
    value: "F\xE1ilte Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Presidency",
    value: "Irish EU Council Presidency \xB7 H2 2026"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About the day"), /*#__PURE__*/React.createElement(Statement, null, "AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is ", /*#__PURE__*/React.createElement(Accent, null, "not whether to engage."), " It is whether leadership is ready."), /*#__PURE__*/React.createElement(BodyText, null, "Leadership in the Age of AI is a structured, invite-only day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level. The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design."), /*#__PURE__*/React.createElement(BodyText, null, "The day is convened by F\xE1ilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. It precedes Future. Destination. Brand. 2026, DTTT's flagship annual summit."), /*#__PURE__*/React.createElement(PolicyBar, {
    items: [{
      label: 'For destinations',
      text: "A mechanism for the sector to speak with one voice on AI policy, rather than leaving that agenda to platform companies alone."
    }, {
      label: 'For technology leaders',
      text: "Direct engagement with the leaders responsible for tourism at national scale, and a role in shaping the sector's position on AI governance."
    }, {
      label: 'For EU institutions',
      text: "A structured, expert contribution to the AI and digital policy agenda from one of the sector's most senior international forums."
    }]
  }), /*#__PURE__*/React.createElement(BodyText, null, "The outputs of this day are submitted to EU institutions as a sector contribution during the Irish Presidency and distributed to the technology companies shaping the tools and regulations that govern destination marketing. What participants bring to this table does not stay in the room."), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement(SectionLabel, null, "Programme"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "08:30",
    title: "Private breakfast",
    desc: "Seated breakfast for all participants. Introductions happen informally before the working day begins."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Welcome and framing",
    desc: "F\xE1ilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method.",
    speakers: [{
      name: 'Caroline Bocquel, CEO · Fáilte Ireland'
    }, {
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Opening provocation",
    desc: "A senior voice with direct experience of NTO leadership and the AI and data investment landscape delivers a deliberate challenge to the room. Twenty minutes, no slides.",
    tags: ['Provocation', 'Open response'],
    speakers: [{
      name: 'Oliver Csendes · Former CEO, Visit Hungary'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:00",
    title: "AI in destination leadership: a shared framework",
    desc: "DTTT introduces the AI Transparency Framework as a leadership instrument. Illustrated with practice from NTOs already deploying it nationally.",
    tags: ['Framework', 'Peer testimony'],
    speakers: [{
      name: 'NTO leaders engaged in AI governance programmes · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Working sessions",
    desc: "Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session A",
    title: "AI readiness and organisational leadership",
    desc: "What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."
  }), /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session B",
    title: "AI and destination competitiveness",
    desc: "How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."
  }))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "13:00",
    title: "Private lunch",
    desc: "Seated, hosted, informal. The conversation continues."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Big Tech intelligence briefing",
    desc: "A senior representative from one of Dublin's major technology companies delivers a briefing on what the platforms are building and what they are observing in travel and destination search.",
    tags: ['Intelligence briefing'],
    speakers: [{
      name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "The European policy landscape",
    desc: "A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective.",
    tags: ['Policy'],
    speakers: [{
      name: 'EU institutional or government representative · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Synthesis and shared conclusions",
    desc: "DTTT facilitates a structured synthesis of the day's working sessions. The output is a small number of documented priorities forming the basis of the Executive Briefing Summary submitted to EU institutions.",
    tags: ['Policy output']
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Dublin city experience",
    desc: "A curated late afternoon in Dublin, in partnership with F\xE1ilte Ireland's Winter in Dublin programme. Details to be confirmed."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "19:30",
    title: "X. Awards",
    desc: "Transition to the X. Awards evening. The industry's most respected recognition of destination branding, transformation and digital innovation."
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Who is in the room"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated by invitation only."), /*#__PURE__*/React.createElement(ParticipantsGrid, {
    cells: [{
      type: 'Host',
      name: 'Caroline Bocquel',
      org: 'CEO · Fáilte Ireland'
    }, {
      type: 'Provocation',
      name: 'Oliver Csendes',
      org: 'Former CEO · Visit Hungary<br/>UN Tourism advisor'
    }, {
      type: 'Facilitation',
      name: 'Nick Hall',
      org: 'CEO · Digital Tourism Think Tank'
    }, {
      type: 'Technology briefing',
      name: 'Senior representative',
      org: 'Google / Microsoft / OpenAI<br/>Dublin · TBC',
      tbc: true
    }, {
      type: 'Policy voice',
      name: 'EU institutional representative',
      org: 'European institution or government<br/>TBC',
      tbc: true
    }, {
      type: 'NTO leadership',
      name: 'North American CEO',
      org: 'National or major regional tourism organisation · TBC',
      tbc: true
    }, {
      type: 'Further participants',
      long: true,
      span: 3,
      tint: true,
      name: '20 to 30 additional NTO and DMO chief executives and C-suite leaders, by personal invitation.'
    }]
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Published outputs"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day produces two formal outputs, both published after the event and distributed beyond the room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "State of Destination AI Report",
    desc: "A comprehensive synthesis of insights from the leadership day. Published post-event, distributed across the industry and submitted to relevant EU institutions."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Executive Briefing Summary",
    desc: "A structured summary of the leadership day's conclusions and priority recommendations. Concise, formal, designed to be read by policy audiences."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3.5rem',
      paddingTop: '2.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, "The outputs of this day reach ", /*#__PURE__*/React.createElement(Accent, null, "EU institutions, national governments"), " and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-muted)',
      marginBottom: '1.5rem'
    }
  }, "Places on the leadership day are by personal invitation only. To discuss participation, please get in touch."), /*#__PURE__*/React.createElement(Button, {
    icon: ChatIcon
  }, "Get in touch")))));
}

// ─── SUMMIT (DAY 2) ─────────────────────────────────────────────────────────
function SummitPage() {
  const speakers = [{
    name: 'Nick Hall',
    org: 'Digital Tourism Think Tank',
    role: 'CEO · Host',
    color: '#6F8FA8'
  }, {
    name: 'Caroline Bocquel',
    org: 'Fáilte Ireland',
    role: 'CEO',
    color: '#94816A'
  }, {
    name: 'Speaker TBC',
    org: 'European NTO',
    role: 'Provocation',
    color: '#A09EB4'
  }, {
    name: 'Speaker TBC',
    org: 'Major NTO · Asia-Pacific',
    role: 'Keynote',
    color: '#7B8C7A'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Summit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The state", /*#__PURE__*/React.createElement("br", null), "of destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The annual gathering of destination CMOs and senior marketers. A working programme on positioning, narrative and digital channels, followed in the evening by the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Audience",
    value: "Senior destination marketers"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Summit + X. Awards evening"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Speakers"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2.5rem'
    }
  }, "A confirmed and TBC line-up of senior destination, brand and platform leaders. Full schedule and additional speakers are released closer to the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem 1.5rem',
      rowGap: '5rem',
      marginTop: '0.5rem'
    }
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 9,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: s.color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -8,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, s.org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, s.role))))), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      paddingTop: '6rem'
    }
  }, "What the summit covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Destination positioning in AI search",
    desc: "How visitors discover places when an answer-engine sits between them and the brand."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The new visitor brief",
    desc: "Narrative, voice, and the shift from campaign to permanent content surface."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Measurement after the funnel",
    desc: "Reporting destination marketing performance to boards and ministers in 2026."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The X. Awards",
    desc: "Recognising the year's strongest work in branding, transformation and digital innovation."
  })))));
}

// ─── X. AWARDS ──────────────────────────────────────────────────────────────
function AwardsPage({
  dark
}) {
  const cats = [{
    name: 'Destination Brand of the Year',
    desc: 'The strongest national or regional brand expression of 2026.'
  }, {
    name: 'Digital Transformation',
    desc: 'Most ambitious end-to-end digital programme inside an NTO/DMO.'
  }, {
    name: 'Sustainable Tourism Communications',
    desc: 'Most credible, measurable sustainability narrative.'
  }, {
    name: 'AI in Destination Marketing',
    desc: 'Material, deployed use of AI — not a pitch deck.'
  }, {
    name: 'Best Campaign',
    desc: 'Single campaign, judged on craft and effect.'
  }, {
    name: 'Emerging Destination',
    desc: 'Newer brands punching above their weight.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Evening"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-wordmark.png",
    alt: "X. Awards",
    style: {
      height: 72,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The year's strongest work in ", /*#__PURE__*/React.createElement(Accent, null, "destination branding.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The industry's most respected recognition of destination branding, transformation and digital innovation. Awarded the evening of Day Two."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon
  }, "Submit your entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Past winners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-mark.png",
    alt: "X. Awards",
    style: {
      width: dark ? 320 : 200,
      height: 'auto',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Categories"), /*#__PURE__*/React.createElement(Statement, null, "Six categories. ", /*#__PURE__*/React.createElement(Accent, null, "One ceremony."), " Judged by a panel of senior destination, brand and policy leaders."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
      marginTop: '2.5rem'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem',
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--fdb-purple)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, c.desc)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Key dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    lbl: 'Entries open',
    val: 'June 2026'
  }, {
    lbl: 'Entries close',
    val: 'October 2026'
  }, {
    lbl: 'Ceremony',
    val: 'December 2026 · Dublin'
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.4rem'
    }
  }, d.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, d.val))))));
}
Object.assign(window, {
  OverviewPage,
  LeadershipPage,
  SummitPage,
  AwardsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "fdb-design/ui_kits/marketing-site/pages.jsx", error: String((e && e.message) || e) }); }

// page-overview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
// FDB 2026 — Overview (Home). The arc: a private start, a celebratory pivot,
// a public day, a generative close. The journey rail is the page's centrepiece.

function OverviewPage() {
  const {
    nav
  } = useNav();

  // The event, in four parts — in the conceptual framing: the private meeting,
  // the public day, the working day, then the evening of recognition.
  const parts = [{
    part: '01',
    station: 'council',
    kicker: 'Day One · 02 Dec · Invite only',
    title: 'The Leadership Meeting.',
    sub: 'Leadership in the Age of AI',
    path: '/leadership',
    desc: 'A private, invite-only working day for 30 to 40 NTO and DMO chief executives, ministers and senior leaders. Boardroom format, no stage, no panels. The room constitutes a Council and issues the Dublin Declaration.'
  }, {
    part: '02',
    station: 'programme',
    kicker: 'Day Two · 03 Dec',
    title: 'The Keynote Day.',
    sub: 'Talks from leading destinations',
    path: '/keynotes',
    desc: 'Back-to-back keynotes from the destination marketers and brand leads actually doing the work, across six themes, with a transatlantic fireside mid-morning.'
  }, {
    part: '03',
    station: 'workstream',
    kicker: 'Day Three · 04 Dec · Members only',
    title: 'The Trends Workstream.',
    sub: 'Future Destination Trends 2027',
    path: '/workstream',
    desc: 'A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The day the next year gets written.'
  }, {
    part: '04',
    station: 'awards',
    kicker: 'Day One · The evening',
    title: 'X. Awards.',
    sub: 'The first AI-Positive Industry Awards',
    path: '/awards',
    desc: 'Held on the evening of Day One. Eight categories, human-only final judging, reasoning notes published with every winner. Celebratory, considered.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "fdb-rise",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem 2rem',
      flexWrap: 'wrap',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "An event by"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.84rem',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, "Digital Tourism Think Tank")), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 22,
      background: 'var(--fdb-border-strong)'
    }
  }), /*#__PURE__*/React.createElement(HostPartner, {
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      position: 'relative',
      padding: '3rem 3rem 3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.78fr',
      gap: '3rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "2026 Edition \xB7 Dublin \xB7 02\u201304 December"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.7rem, 6vw, 4.6rem)',
      fontWeight: 800,
      lineHeight: 0.96,
      letterSpacing: '-0.04em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.6rem'
    }
  }, "Future", /*#__PURE__*/React.createElement("br", null), "Destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.25rem'
    }
  }, "The Digital Tourism Think Tank's invite-only summit on the future of destination marketing in the age of AI. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink)',
      fontWeight: 700
    }
  }, "Four parts, across three days.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/leadership')
  }, "View the programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav('/register')
  }, "Register your place"))), /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-motif",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: "awards",
    size: 300,
    sw: 1.8
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Convened under"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, "Ireland's EU Council Presidency \xB7 H2 2026")))), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The event, in four parts"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "A private meeting, a public programme, a working day, and an ", /*#__PURE__*/React.createElement(Accent, null, "evening of recognition.")), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1rem'
    }
  }, "One gathering with four distinct moments. Three of them run across the days; the X. Awards is held on the evening of Day One.")), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      marginTop: '2rem'
    }
  }, parts.map((m, i) => /*#__PURE__*/React.createElement(MomentRow, _extends({
    key: m.path
  }, m, {
    isFirst: i === 0,
    onOpen: () => nav(m.path)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Across three days"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: '1rem',
      marginBottom: '2.5rem'
    }
  }, "How the event runs, in sequence \u2014 the leadership meeting and X. Awards on Day One, the keynote day, then the members' workstream."), /*#__PURE__*/React.createElement(JourneyRail, {
    allLit: true,
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    },
    "data-comment-anchor": "5586820b83-section-96-7"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    n: '30–40',
    l: 'Senior leaders in the Council room'
  }, {
    n: '8',
    l: 'X. Awards categories'
  }, {
    n: '6',
    l: 'Keynote themes on Day Two'
  }, {
    n: '8',
    l: 'Trend tables on Day Three'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.75rem 1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.2rem',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      color: 'var(--fdb-purple)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.6rem',
      lineHeight: 1.45
    }
  }, s.l))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What makes it different"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '2.5rem'
    }
  }, "Most events in this category are political, sponsor-heavy and panel-led. FDB is built to be ", /*#__PURE__*/React.createElement(Accent, null, "the opposite.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2.5rem 2rem'
    }
  }, [{
    h: 'The room is the asset.',
    b: 'No paid speakers, no keynote fees. The most valuable voices are destination marketers actively doing the work.'
  }, {
    h: 'No commercial layer.',
    b: 'No vendors, no sponsor halls, no commercial agenda. The X. Awards has its own evening; the rest of the event does not.'
  }, {
    h: 'Editorial, not promotional.',
    b: 'Restrained and declarative, written like a memo to a knowledgeable peer rather than a conference landing page.'
  }, {
    h: 'No tokenistic interaction.',
    b: 'No live polls, no word clouds, no audience-response gimmicks. The substance is the point.'
  }, {
    h: 'Peer authority.',
    b: 'Outside speakers expand the frame; they do not fill time. The sector speaks for itself.'
  }, {
    h: 'Small by design.',
    b: 'The leadership room holds 30 to 40 people. A stated choice, not a constraint.'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.2,
      marginBottom: '0.6rem'
    }
  }, p.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, p.b))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      textWrap: 'pretty'
    }
  }, "Places are by ", /*#__PURE__*/React.createElement(Accent, null, "personal invitation only."), " To discuss participation, register your interest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Register your place"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: ChatIcon,
    onClick: () => nav('/register')
  }, "Get in touch")))));
}

// One part in the event — hairline-separated editorial row with a part number.
function MomentRow({
  part,
  station,
  kicker,
  title,
  sub,
  desc,
  isFirst,
  onOpen
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      cursor: 'pointer',
      border: 'none',
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.75rem 0',
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      gap: '0 1.75rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)'
    }
  }, part), /*#__PURE__*/React.createElement(Motif, {
    state: station,
    size: 44,
    sw: 3,
    muted: !hover
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.6rem',
      flexWrap: 'wrap',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, kicker)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '1.5rem',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.1,
      marginBottom: '0.2rem'
    }
  }, title), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.82rem',
      fontWeight: 600,
      fontStyle: 'italic',
      color: 'var(--fdb-ink-muted)',
      marginBottom: '0.6rem'
    }
  }, sub), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.88rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.65,
      maxWidth: '64ch'
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      whiteSpace: 'nowrap',
      paddingTop: '1.5rem'
    }
  }, "Open \u2192"));
}
window.OverviewPage = OverviewPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "page-overview.jsx", error: String((e && e.message) || e) }); }

// site/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
// FDB 2026 - Shared component library
// Nav context, type primitives, header, footer, buttons, tags, frames.
// Per-day MOTIF + JOURNEY RAIL live in motif.jsx.
// Everything shared is assigned to window so each text/babel page file can use it.

const {
  useState,
  useRef,
  useEffect
} = React;

// ─── NAV CONTEXT ─────────────────────────────────────────────────────────────
const NavContext = React.createContext({
  nav: () => {},
  path: '/',
  station: null
});
function useNav() {
  return React.useContext(NavContext);
}

// The arc, in order. Used by header nav and the journey rail.
// navDay / navTitle drive the header menu: the day (or moment) over the title,
// so the menu reads consistently with each day's own title.
// The arc. The three days flow in sequence; X. Awards is held on the evening of
// Day One but sits APART in the system (`apart: true`) so 1·2·3 read cleanly.
const ARC = [{
  path: '/leadership',
  station: 'council',
  short: 'Day One',
  day: '02 Dec',
  kicker: 'Day One',
  navDay: 'Day One',
  navTitle: 'Leadership'
}, {
  path: '/keynotes',
  station: 'programme',
  short: 'Day Two',
  day: '03 Dec',
  kicker: 'Day Two',
  navDay: 'Day Two',
  navTitle: 'Keynotes'
}, {
  path: '/workstream',
  station: 'workstream',
  short: 'Day Three',
  day: '04 Dec',
  kicker: 'Day Three',
  navDay: 'Day Three',
  navTitle: 'Workstream'
}, {
  path: '/awards',
  station: 'awards',
  short: 'X. Awards',
  day: 'Eve · 02 Dec',
  kicker: 'The evening',
  navDay: 'Evening',
  navTitle: 'X. Awards',
  apart: true
}];

// ─── TYPE PRIMITIVES ──────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '38ch',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '62ch',
      textWrap: 'pretty',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}
function MetaRow({
  label,
  value,
  tbc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 96,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: tbc ? 500 : 600,
      fontStyle: tbc ? 'italic' : 'normal',
      color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)'
    }
  }, value));
}

// A reusable uppercase section heading with a leading hairline - the structural
// device used to open every band on a page.
function SectionHead({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '3.5rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, children));
}

// ─── BRAND MARK (header / footer scale) ───────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple-mid)",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "var(--fdb-purple-soft)",
    strokeWidth: sw
  }));
}

// ─── ICONS (Feather-style, 2.5 stroke) ────────────────────────────────────────
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const DownloadIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
}));

// ─── BUTTONS ──────────────────────────────────────────────────────────────────
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  style,
  type = 'button',
  fixed
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.73rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.7rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    whiteSpace: 'nowrap',
    ...(fixed ? {
      minWidth: 132
    } : null)
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.78rem',
      padding: '0 0 2px',
      borderRadius: 0,
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)'}`
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant],
      ...style
    }
  }, icon, children);
}

// A text link that routes inside the site.
function NavLink({
  to,
  children,
  style
}) {
  const {
    nav
  } = useNav();
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(to),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: '0.85rem',
      fontWeight: 600,
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'transparent'}`,
      transition: 'color 0.15s, border-color 0.15s',
      ...style
    }
  }, children);
}

// ─── TAGS / PILLS ───────────────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.22rem 0.5rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    ink: {
      background: 'transparent',
      border: '1px solid var(--fdb-border-strong)',
      color: 'var(--fdb-ink-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function TagRow({
  tags = [],
  variant
}) {
  if (!tags.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.35rem',
      marginTop: '0.6rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: variant
  }, t)));
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
function BrandLockup({
  state = 'brand',
  markSize = 32,
  fontSize = '1.05rem',
  sw = 1.7,
  gap = '0.72rem'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap
    }
  }, /*#__PURE__*/React.createElement(TwistMark, {
    state: state,
    size: markSize,
    sw: sw
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize,
      fontWeight: 500,
      letterSpacing: '-0.012em',
      color: 'var(--fdb-ink)',
      whiteSpace: 'nowrap',
      lineHeight: 1
    }
  }, "Future Destination ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 800,
      color: 'var(--fdb-purple)'
    }
  }, "Brand.")));
}

// ─── HEADER ───────────────────────────────────────────────────────────────────
function FDBHeader({
  currentPath,
  onNav
}) {
  const markState = pathToStation(currentPath);
  const links = [{
    path: '/',
    day: '',
    label: 'Overview'
  }, ...ARC.map(s => ({
    path: s.path,
    day: s.navDay,
    label: s.navTitle,
    apart: s.apart
  }))];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-header-inner",
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      height: '100%',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('/'),
    title: "Future. Destination. Brand.",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(BrandLockup, {
    state: "brand",
    markSize: 34,
    fontSize: "1.08rem"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fdb-header-meta",
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem',
      lineHeight: 1.4,
      textAlign: 'left',
      whiteSpace: 'nowrap'
    }
  }, "Dublin", /*#__PURE__*/React.createElement("br", null), "02\u201304 Dec 2026")), /*#__PURE__*/React.createElement("nav", {
    className: "fdb-header-nav",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '1.35rem'
    }
  }, links.map(l => {
    const active = currentPath === l.path || l.path === '/leadership' && currentPath === '/ai-act';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: l.path
    }, l.apart && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        alignSelf: 'stretch',
        width: 1,
        background: 'var(--fdb-border-strong)',
        margin: '0.2rem 0'
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: "fdb-nav-link",
      onClick: () => onNav(l.path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.15rem',
        borderBottom: active ? '1.5px solid var(--fdb-purple)' : '1.5px solid transparent',
        transition: 'color 0.15s, border-color 0.15s',
        whiteSpace: 'nowrap'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.querySelector('[data-navtitle]').style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.querySelector('[data-navtitle]').style.color = 'var(--fdb-ink-muted)';
      }
    }, l.day && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.52rem',
        fontWeight: 700,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: active ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)'
      }
    }, l.day), /*#__PURE__*/React.createElement("span", {
      "data-navtitle": true,
      style: {
        fontSize: '0.82rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        lineHeight: 1.1
      }
    }, l.label)));
  }), /*#__PURE__*/React.createElement(Button, {
    fixed: true,
    onClick: () => onNav('/register'),
    style: {
      padding: '0.6rem 1.2rem'
    }
  }, "Register"))));
}

// ─── HOST PARTNER (Fáilte Ireland) ────────────────────────────────────────────
function HostPartner({
  label = 'Host partner',
  size = 24
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.failte || "assets/logos/failte-ireland.png",
    alt: "F\xE1ilte Ireland",
    style: {
      height: size,
      width: 'auto',
      display: 'block'
    }
  }));
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function FDBFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      marginTop: '5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '2.5rem 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(BrandLockup, {
    state: "brand",
    markSize: 26,
    fontSize: "0.9rem",
    sw: 1.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), /*#__PURE__*/React.createElement("br", null), "Dublin \xB7 02\u201304 December")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/leadership"
  }, "Leadership"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/awards"
  }, "X. Awards"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/keynotes"
  }, "Keynotes"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/workstream"
  }, "Workstream"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/register"
  }, "Register"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.5rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem 2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, "An event by"), /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.dtttBlack || "assets/logos/dttt-logo-landscape-black.svg",
    alt: "Digital Tourism Think Tank",
    style: {
      height: 20,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 22,
      background: 'var(--fdb-border-strong)'
    }
  }), /*#__PURE__*/React.createElement(HostPartner, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Convened under Ireland's EU Council Presidency \xB7 H2 2026"))));
}

// ─── STACK FRAME ───────────────────────────────────────────────────────────
// Wraps a block in one offset purple-soft outline, echoing a single square of
// the brand mark. The signature framing gesture.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.75,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      height: '100%'
    }
  }, children));
}

// ─── SPEAKER / PARTICIPANT PORTRAIT FRAME ─────────────────────────────────────
// Purple-outlined rectangle with two offset decorative frames behind it.
// Placeholder fill is a cool desaturated blue-grey, per the brand book.
function PortraitFrame({
  name,
  org,
  role,
  tbc,
  src,
  tone = '#6F8FA8',
  w = '100%',
  ratio = '4/5'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: w
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: ratio
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.55,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover no-repeat url(${src})` : tone,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: 0,
      left: '8%',
      width: '84%',
      height: '92%',
      opacity: 0.9
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "33",
    rx: "17",
    ry: "21",
    fill: "rgba(26,30,40,0.55)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 100 Q18 58 50 58 Q82 58 88 100 Z",
    fill: "rgba(26,30,40,0.55)"
  })), tbc && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#fff',
      background: 'rgba(26,26,26,0.45)',
      padding: '2px 5px',
      borderRadius: 2
    }
  }, "TBC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.98rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: tbc ? 'italic' : 'normal',
      lineHeight: 1.15
    }
  }, name), org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.25rem',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: org
    }
  }), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginTop: '0.35rem'
    }
  }, role)));
}

// ─── DAY HERO ─────────────────────────────────────────────────────────────
// Shared shell for the four day heroes: a quiet journey rail up top, then the
// editorial title block, with the day's motif bleeding off the right. Each day
// passes its own motif `state` and accent register - the differentiation lives
// in what each page puts inside.
function DayHero({
  station,
  eyebrow,
  title,
  lead,
  meta,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fdb-rise",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(JourneyRail, {
    current: station,
    style: {
      maxWidth: 680,
      marginLeft: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      padding: '3rem 3rem 3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.78fr',
      gap: '3rem',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.6rem, 5.4vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.035em',
      color: 'var(--fdb-ink)',
      marginBottom: lead ? '1.6rem' : '1.75rem',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '44ch',
      marginBottom: meta ? '2.25rem' : '2rem'
    }
  }, lead), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem'
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement(MetaRow, _extends({
    key: i
  }, m)))), children), /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-motif",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-mark-pivot",
    key: station
  }, /*#__PURE__*/React.createElement(Motif, {
    state: station,
    size: 300,
    sw: 1.9
  }))))));
}

// ─── PROGRAMME ROW ─────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst,
  accent = 'var(--fdb-purple)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '78px 1fr',
      gap: '0 2rem',
      padding: '1.6rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: accent,
      paddingTop: '0.15rem',
      fontVariantNumeric: 'tabular-nums'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.98rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: desc ? '0.4rem' : 0,
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.65,
      maxWidth: 620
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement(TagRow, {
    tags: tags
  }), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.78rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)',
      flexShrink: 0
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.95rem 1.05rem',
      background: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ──────────────────────────────────────────────────────
// Solid purple punctuation block. Rare. Used for policy / value summaries.
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.9rem 2.1rem',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '1.75rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '1.75rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.5rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.84rem',
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.6
    }
  }, it.text))));
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────────
Object.assign(window, {
  NavContext,
  useNav,
  ARC,
  Eyebrow,
  SectionLabel,
  SectionHead,
  Statement,
  BodyText,
  Accent,
  MetaRow,
  Mark,
  ArrowIcon,
  ChatIcon,
  DownloadIcon,
  Button,
  NavLink,
  Tag,
  TagRow,
  FDBHeader,
  FDBFooter,
  HostPartner,
  BrandLockup,
  pathToStation,
  StackFrame,
  PortraitFrame,
  DayHero,
  ProgrammeRow,
  SessionCard,
  PolicyBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/components.jsx", error: String((e && e.message) || e) }); }

// site/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/design-canvas.jsx", error: String((e && e.message) || e) }); }

// site/marks-lab.jsx
try { (() => {
/* eslint-disable */
// FDB 2026 — DAY-MARK EXPLORATION (round 2)
// The filled-pane idea read as too subtle. This round explores BOLDER, more
// distinct ways to inflect the one logo shape across the three days — while the
// X. Awards mark (squares + the real calligraphic x.) stays the fixed anchor.
// Three systems, each shown as a full set so the family reads together.
const {
  useState
} = React;
const TINT = {
  soft: '#C9AAEE',
  mid: '#9B6FE0',
  deep: '#8239C1'
};
const S = 42,
  C = 50;
const CASCADE = [[39, 39, 'soft'], [50, 50, 'mid'], [61, 61, 'deep']]; // back → front
const XF = () => window.FDB_X || {
  vb: '0 0 173 113',
  d: '',
  ar: 1.531
};
function Rect(cx, cy, tint, {
  rot = 0,
  piv,
  fill = 'none',
  sw = 3.4,
  key
} = {}) {
  const t = rot ? `rotate(${rot} ${piv ? piv[0] : cx} ${piv ? piv[1] : cy})` : undefined;
  return /*#__PURE__*/React.createElement("rect", {
    key: key,
    x: cx - S / 2,
    y: cy - S / 2,
    width: S,
    height: S,
    rx: "6",
    fill: fill,
    stroke: TINT[tint],
    strokeWidth: sw,
    transform: t
  });
}

// The fixed X. Awards mark — cascade, white front square, the crisp vector x.
function AwardsMark({
  size = 76
}) {
  const F = XF();
  const gw = 0.44 * size,
    gh = gw / F.ar;
  const cx = 61 / 100 * size,
    cy = 61 / 100 * size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block'
    }
  }, Rect(39, 39, 'soft', {
    key: 'b'
  }), Rect(50, 50, 'mid', {
    key: 'm'
  }), Rect(61, 61, 'deep', {
    key: 'f',
    fill: '#FFFFFF'
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: F.vb,
    width: gw,
    height: gh,
    style: {
      position: 'absolute',
      left: cx - gw / 2,
      top: cy - gh / 2,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: F.d,
    fill: TINT.deep
  })));
}

// A day mark for a given system + role.
function DayMark({
  system,
  role,
  size = 76
}) {
  if (role === 'logo') {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none",
      style: {
        display: 'block'
      }
    }, CASCADE.map((s, i) => Rect(s[0], s[1], s[2], {
      key: i
    })));
  }
  if (system === 'fan') {
    const A = {
      d1: 9,
      d2: 18,
      d3: 28
    }[role];
    const angs = [-A, 0, A],
      piv = [50, 84],
      tints = ['soft', 'mid', 'deep'];
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none",
      style: {
        display: 'block'
      }
    }, [0, 1, 2].map(i => Rect(50, 50, tints[i], {
      key: i,
      rot: angs[i],
      piv
    })));
  }
  if (system === 'twist') {
    const A = {
      d1: 16,
      d2: 34,
      d3: 52
    }[role];
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none",
      style: {
        display: 'block'
      }
    }, CASCADE.map((s, i) => Rect(s[0], s[1], s[2], {
      key: i,
      rot: A,
      piv: [50, 50]
    })));
  }
  if (system === 'persp') {
    const t = {
      d1: 'rotateY(22deg)',
      d2: 'rotateY(38deg) rotateX(8deg)',
      d3: 'rotateY(52deg) rotateX(14deg)'
    }[role];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        perspective: size * 2.6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: t,
        transformStyle: 'preserve-3d'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 100 100",
      fill: "none",
      style: {
        display: 'block'
      }
    }, CASCADE.map((s, i) => Rect(s[0], s[1], s[2], {
      key: i
    })))));
  }
  return null;
}
const SET = [{
  role: 'logo',
  label: 'Logo',
  on: false
}, {
  role: 'd1',
  label: 'Day One',
  on: true
}, {
  role: 'd2',
  label: 'Day Two',
  on: true
}, {
  role: 'd3',
  label: 'Day Three',
  on: true
}];
function SetRow({
  system,
  size = 78,
  showLabels = true
}) {
  const Cell = ({
    children,
    label,
    on
  }) => /*#__PURE__*/React.createElement("div", {
    className: "mk-cell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children), showLabels && /*#__PURE__*/React.createElement("span", {
    className: 'mk-label' + (on ? ' on' : '')
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      flex: 1,
      justifyContent: 'space-between'
    }
  }, SET.map(m => /*#__PURE__*/React.createElement(Cell, {
    key: m.role,
    label: m.label,
    on: m.on
  }, /*#__PURE__*/React.createElement(DayMark, {
    system: system,
    role: m.role,
    size: size
  })))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      alignSelf: 'stretch',
      width: 1,
      background: 'var(--fdb-border-strong)',
      margin: '0 0.7rem'
    }
  }), /*#__PURE__*/React.createElement(Cell, {
    label: "X. Awards",
    on: true
  }, /*#__PURE__*/React.createElement(AwardsMark, {
    size: size
  })));
}
const SYSTEMS = [{
  id: 'fan',
  n: '01',
  name: 'Radial fan',
  tag: 'Fans open',
  rule: 'The three squares pivot from a shared base and fan wider each day — a hand of cards opening. Day One barely parts; Day Three is wide open. One clear, escalating gesture.'
}, {
  id: 'twist',
  n: '02',
  name: 'Twist',
  tag: 'Turns',
  rule: 'The whole stacked mark rotates a set amount more each day — the logo, turned by hand. Distinct angle per day, identical form. The most literal echo of the brand mark.'
}, {
  id: 'persp',
  n: '03',
  name: 'Perspective',
  tag: 'Tilts in space',
  rule: 'The mark tilts in 3D, leaning further each day — the perspective shift from the earlier animation, frozen. Dynamic and architectural; strongest in motion.'
}];
function SystemBoard({
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.9rem 2rem 1.7rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.7rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--fdb-purple)',
      letterSpacing: '0.04em'
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.55rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-deep)',
      background: 'var(--fdb-purple-tint)',
      borderRadius: 2,
      padding: '0.2rem 0.45rem'
    }
  }, s.tag)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8rem',
      lineHeight: 1.55,
      color: 'var(--fdb-ink-muted)',
      margin: '0.6rem 0 0',
      maxWidth: '66ch'
    }
  }, s.rule)), /*#__PURE__*/React.createElement(SetRow, {
    system: s.id,
    size: 78
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      display: 'block',
      marginBottom: '0.8rem'
    }
  }, "At 40px \xB7 the size it ships"), /*#__PURE__*/React.createElement(SetRow, {
    system: s.id,
    size: 40,
    showLabels: false
  })));
}
function MarksLab() {
  return /*#__PURE__*/React.createElement(DesignCanvas, null, /*#__PURE__*/React.createElement(DCSection, {
    id: "ref",
    title: "The fixed anchors",
    subtitle: "The FDB logo and the X. Awards mark (now with the crisp vector x., dot intact) stay as they are. Each system below only inflects the three days."
  }, /*#__PURE__*/React.createElement(DCArtboard, {
    id: "logo",
    label: "Future. Destination. Brand.",
    width: 300,
    height: 300
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--fdb-cream)'
    }
  }, /*#__PURE__*/React.createElement(DayMark, {
    system: "fan",
    role: "logo",
    size: 150
  }))), /*#__PURE__*/React.createElement(DCArtboard, {
    id: "xawards",
    label: "X. Awards \xB7 the anchor",
    width: 300,
    height: 300
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--fdb-cream)'
    }
  }, /*#__PURE__*/React.createElement(AwardsMark, {
    size: 168
  })))), /*#__PURE__*/React.createElement(DCSection, {
    id: "systems",
    title: "Three systems \xB7 bolder & more distinct",
    subtitle: "Each takes the one logo shape and inflects it one clear way across the days. The X. Awards mark is shown set apart in each. Pick a direction (or a hybrid)."
  }, SYSTEMS.map(s => /*#__PURE__*/React.createElement(DCArtboard, {
    key: s.id,
    id: s.id,
    label: `${s.n} · ${s.name}`,
    width: 820,
    height: 350
  }, /*#__PURE__*/React.createElement(SystemBoard, {
    s: s
  })))));
}
window.MarksLab = MarksLab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/marks-lab.jsx", error: String((e && e.message) || e) }); }

// site/motif.jsx
try { (() => {
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
//   awards      — X. Awards · white front square + purple x. (set apart)
//
// On navigation the header mark plays "step & pop": the lit pane pops in with an
// overshoot and the mark steps forward; arriving at X. Awards the front fills and
// the x. scales in.
const X_AR = window.FDB_X && window.FDB_X.ar || 1.531; // crisp vector x. aspect (w/h)
function XGlyph({
  color,
  left,
  top,
  wPx,
  style
}) {
  const F = window.FDB_X || {
    vb: '0 0 173 113',
    d: ''
  };
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: F.vb,
    width: wPx,
    height: wPx / X_AR,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left,
      top,
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: F.d,
    fill: color
  }));
}
const S = 46,
  C = 50,
  UO = 9; // square side, centre, cascade offset
const STROKE = {
  deep: 'var(--fdb-purple)',
  mid: 'var(--fdb-purple-mid)',
  soft: 'var(--fdb-purple-soft)'
};
const TINTNAME = ['soft', 'mid', 'deep']; // back → front
const FILLIDX = {
  brand: -1,
  council: 2,
  programme: 1,
  workstream: 0
}; // Day 1 front → Day 3 back
const DAYORDER = {
  council: 0,
  programme: 1,
  workstream: 2
}; // sequence, for the forward step
const PANE = 'var(--fdb-purple-tint)'; // the filled-pane tint

function squarePositions() {
  return [[C - UO, C - UO], [C, C], [C + UO, C + UO]]; // back, mid, front
}

// ─── STATIC MARK ──────────────────────────────────────────────────────────────
// `state` selects which pane fills (or the awards x.); `muted` greys it for
// inactive journey stations; `sw` is the base stroke (viewBox is 100).
function Motif({
  state = 'brand',
  size = 120,
  sw = 2.4,
  muted = false,
  style
}) {
  const pos = squarePositions();
  const awards = state === 'awards';
  const fillIdx = awards ? 2 : FILLIDX[state] ?? -1;
  const gwPx = 0.39 * size,
    ghPx = gwPx / X_AR;
  const cxPx = pos[2][0] / 100 * size,
    cyPx = pos[2][1] / 100 * size;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    style: {
      display: 'block',
      position: 'absolute',
      inset: 0
    }
  }, pos.map((p, idx) => {
    let fill = 'none';
    if (!muted) {
      if (awards && idx === 2) fill = '#FFFFFF';else if (idx === fillIdx) fill = PANE;
    }
    return /*#__PURE__*/React.createElement("rect", {
      key: idx,
      x: p[0] - S / 2,
      y: p[1] - S / 2,
      width: S,
      height: S,
      rx: "6",
      fill: fill,
      stroke: muted ? 'var(--fdb-ink-faint)' : STROKE[TINTNAME[idx]],
      strokeOpacity: muted ? 0.5 : 1,
      strokeWidth: sw
    });
  })), awards && !muted && /*#__PURE__*/React.createElement(XGlyph, {
    color: "var(--fdb-purple)",
    left: cxPx - gwPx / 2,
    top: cyPx - ghPx / 2,
    wPx: gwPx
  }));
}

// ─── ANIMATED HEADER MARK (step & pop) ────────────────────────────────────────
// The same shape, animated. When `state` changes (on navigation) the lit pane
// pops in and the mark steps forward; X. Awards fills white and the x. scales in.
function TwistMark({
  state = 'brand',
  size = 34,
  sw = 1.7,
  style
}) {
  const pos = squarePositions();
  const awards = state === 'awards';
  const fillIdx = awards ? 2 : FILLIDX[state] ?? -1;
  const litIdx = fillIdx < 0 ? 0 : fillIdx;
  const step = DAYORDER[state] ?? 0;
  const cpx = i => pos[i][0] / 100 * size,
    cpy = i => pos[i][1] / 100 * size;
  const gwPx = 0.40 * size,
    ghPx = gwPx / X_AR;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      width: size,
      height: size,
      flexShrink: 0,
      transition: 'transform .5s cubic-bezier(.34,1.4,.64,1)',
      transform: awards ? 'scale(1.03)' : `translate(${step * 0.6}px, ${step * 0.6}px)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    fill: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, pos.map((p, idx) => {
    const isLit = fillIdx === idx;
    const f = awards && idx === 2 ? '#FFFFFF' : PANE;
    return /*#__PURE__*/React.createElement("rect", {
      key: 'f' + idx,
      x: p[0] - S / 2,
      y: p[1] - S / 2,
      width: S,
      height: S,
      rx: "6",
      fill: f,
      style: {
        transformBox: 'fill-box',
        transformOrigin: 'center',
        transform: isLit ? 'scale(1)' : 'scale(0.45)',
        opacity: isLit ? 1 : 0,
        transition: 'transform .5s cubic-bezier(.34,1.56,.64,1), opacity .3s ease'
      }
    });
  }), pos.map((p, idx) => /*#__PURE__*/React.createElement("rect", {
    key: 'o' + idx,
    x: p[0] - S / 2,
    y: p[1] - S / 2,
    width: S,
    height: S,
    rx: "6",
    fill: "none",
    stroke: STROKE[TINTNAME[idx]],
    strokeWidth: fillIdx === idx ? sw * 1.3 : sw,
    style: {
      transition: 'stroke-width .4s ease'
    }
  }))), /*#__PURE__*/React.createElement(XGlyph, {
    color: "var(--fdb-purple)",
    left: cpx(2) - gwPx / 2,
    top: cpy(2) - ghPx / 2,
    wPx: gwPx,
    style: {
      transformOrigin: 'center',
      transition: 'opacity .35s ease .1s, transform .45s cubic-bezier(.34,1.56,.64,1) .08s',
      opacity: awards ? 1 : 0,
      transform: awards ? 'scale(1)' : 'scale(0.4)'
    }
  }));
}

// Large decorative hero mark, bleeding gently off the top-right edge.
function HeroMotif({
  state = 'council',
  size = 460,
  top = -60,
  right = -90,
  soft = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top,
      right,
      width: size,
      height: size,
      pointerEvents: 'none',
      zIndex: 0,
      opacity: soft ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: state,
    size: size,
    sw: 1.6
  }));
}

// ─── JOURNEY RAIL ─────────────────────────────────────────────────────────────
// The 1·2·3 days flow together along a connector; X. Awards sits apart past a
// divider. The active station is lit; the connector fills up to the active day.
function JourneyRail({
  current,
  allLit = false,
  markSize = 40,
  style
}) {
  const {
    nav
  } = useNav();
  const [hovered, setHovered] = React.useState(null);
  const days = ARC.filter(s => !s.apart);
  const awards = ARC.find(s => s.apart);
  const dayIdx = days.findIndex(s => s.station === current);
  const n = days.length;
  const centre = i => (i + 0.5) / n * 100;
  const fillTo = dayIdx >= 0 ? centre(dayIdx) : allLit ? centre(n - 1) : centre(0);
  const Station = (s, active, done) => /*#__PURE__*/React.createElement("button", {
    key: s.path,
    onClick: () => nav(s.path),
    onMouseEnter: () => setHovered(s.station),
    onMouseLeave: () => setHovered(null),
    style: {
      flex: 1,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.7rem'
    },
    title: `${s.kicker} · ${s.short}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "fdb-rail-mark",
    style: {
      width: markSize,
      height: markSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--fdb-cream)',
      borderRadius: 4,
      position: 'relative',
      zIndex: 1,
      outline: active ? '1px solid var(--fdb-purple-soft)' : 'none',
      outlineOffset: 3
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: s.station,
    size: markSize,
    sw: 3.2,
    muted: !active && !done && hovered !== s.station
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.55rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: active ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)'
    }
  }, s.kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.8rem',
      fontWeight: active ? 700 : 600,
      color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
      marginTop: '0.15rem'
    }
  }, s.short), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.62rem',
      fontWeight: 600,
      color: 'var(--fdb-ink-faint)',
      marginTop: '0.1rem'
    }
  }, s.day)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.4rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: n,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: markSize / 2,
      left: `${centre(0)}%`,
      right: `${centre(0)}%`,
      height: 1,
      background: 'var(--fdb-border-strong)'
    }
  }), (allLit || dayIdx > 0) && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: markSize / 2,
      left: `${centre(0)}%`,
      width: `${fillTo - centre(0)}%`,
      height: 1.5,
      background: 'var(--fdb-purple)'
    }
  }), days.map((s, i) => Station(s, i === dayIdx, allLit || dayIdx >= 0 && i < dayIdx))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      alignSelf: 'stretch',
      width: 1,
      background: 'var(--fdb-border-strong)',
      margin: '0 0.7rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex'
    }
  }, Station(awards, current === awards.station, allLit)));
}
Object.assign(window, {
  Motif,
  TwistMark,
  HeroMotif,
  JourneyRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/motif.jsx", error: String((e && e.message) || e) }); }

// site/page-aiact.jsx
try { (() => {
/* eslint-disable */
// FDB 2026 - EU AI Act companion. A public-facing companion to Day One, carrying
// the fifteen-question readiness assessment participants complete before they
// arrive. Tonally aligned with Day One: restrained, considered, the council
// register. The assessment is a working, interactive instrument.

const AIACT_SECTIONS = [{
  theme: 'Governance and accountability',
  items: ['A named individual is accountable for AI use across our organisation.', 'We maintain a current inventory of the AI systems we deploy or procure.', 'AI decisions of consequence are subject to meaningful human review.']
}, {
  theme: 'Transparency and disclosure',
  items: ['We disclose to visitors when they are interacting with an AI system.', 'We can explain, in plain language, how our key AI tools reach their outputs.', 'Published content distinguishes AI-generated material where it matters.']
}, {
  theme: 'Risk and classification',
  items: ["We have assessed which of our AI uses fall under the Act's risk tiers.", 'We avoid prohibited practices, including manipulative and social-scoring uses.', 'High-risk uses, where present, have documented risk management in place.']
}, {
  theme: 'Data and rights',
  items: ['We have a lawful basis and a clear consent path for data feeding our AI.', 'Training and prompt data is sourced and documented defensibly.', 'Visitors can contest or correct AI-influenced decisions about them.']
}, {
  theme: 'Capability and procurement',
  items: ['Our teams hold a baseline AI literacy appropriate to their roles.', 'Transparency, liability and audit clauses sit in our vendor contracts.', 'We monitor regulatory change and update practice on a set cadence.']
}];
const ANSWERS = [{
  key: 2,
  label: 'Yes'
}, {
  key: 1,
  label: 'Partly'
}, {
  key: 0,
  label: 'Not yet'
}];
function bandFor(score, answered) {
  if (answered < 15) return null;
  if (score <= 10) return {
    name: 'Early',
    note: 'Foundational work is still ahead. The day exists for exactly this conversation.',
    pct: 0.25
  };
  if (score <= 20) return {
    name: 'Developing',
    note: 'The shape is right and gaps remain. Bring the open questions to the room.',
    pct: 0.55
  };
  if (score <= 27) return {
    name: 'Advanced',
    note: 'A strong footing across most dimensions. The room will sharpen the edges.',
    pct: 0.85
  };
  return {
    name: 'Leadership-ready',
    note: 'Ready across the board. Your practice is a reference point for the room.',
    pct: 1
  };
}
function AiActPage() {
  const {
    nav
  } = useNav();
  const flat = AIACT_SECTIONS.flatMap(s => s.items);
  const [answers, setAnswers] = useState({}); // index -> 0|1|2
  const answered = Object.keys(answers).length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const band = bandFor(score, answered);
  const progress = answered / 15;
  let qi = 0; // running question index across sections

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayHero, {
    station: "council",
    eyebrow: "Day One \xB7 Companion briefing",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The EU AI Act,", /*#__PURE__*/React.createElement("br", null), "for destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "leadership.")),
    lead: "A public-facing companion to the leadership day. It carries the readiness assessment participants complete before they arrive, and frames the regulation in the terms that matter to a national tourism body.",
    meta: [{
      label: 'Relates to',
      value: 'Day One · Leadership programme'
    }, {
      label: 'Audience',
      value: 'NTO and DMO leadership teams'
    }, {
      label: 'Before the day',
      value: 'Fifteen-question assessment'
    }]
  }), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Why it matters"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '1.5rem'
    }
  }, "The Act is the first comprehensive AI law. For destinations, it is ", /*#__PURE__*/React.createElement(Accent, null, "a leadership question"), " before it is a compliance one."), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2rem'
    }
  }, "National tourism organisations sit upstream of how a country is discovered, recommended and chosen. As that work moves through AI systems, the obligations of the Act follow it. Readiness is not a legal afterthought. It is a measure of whether leadership understands the tools it now depends on."), /*#__PURE__*/React.createElement(PolicyBar, {
    items: [{
      label: 'Unacceptable risk',
      text: 'Practices the Act prohibits outright, including manipulative and social-scoring uses. Off the table.'
    }, {
      label: 'High risk',
      text: 'Permitted with documented risk management, human oversight and transparency obligations.'
    }, {
      label: 'Limited / minimal',
      text: 'The majority of destination uses, carrying transparency duties and good-practice expectations.'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The readiness assessment"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: '1rem',
      marginBottom: '2rem'
    }
  }, "Fifteen statements across five dimensions. Answer honestly. The result is for your own preparation, and a version is collated, without attribution, to frame the room's starting point."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 88,
      zIndex: 30,
      background: 'var(--fdb-cream)',
      paddingTop: '0.75rem',
      paddingBottom: '1rem',
      marginBottom: '1.5rem',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, answered, " of 15 answered"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: band ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)'
    }
  }, band ? band.name : 'Result pending')), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--fdb-border)',
      borderRadius: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${progress * 100}%`,
      background: 'var(--fdb-purple)',
      transition: 'width 0.2s'
    }
  }))), AIACT_SECTIONS.map((sec, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.75rem',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--fdb-purple)'
    }
  }, String(si + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, sec.theme)), sec.items.map(q => {
    const idx = qi++;
    return /*#__PURE__*/React.createElement(QuestionRow, {
      key: idx,
      q: q,
      value: answers[idx],
      onPick: v => setAnswers(a => ({
        ...a,
        [idx]: v
      }))
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 12,
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: band ? 'var(--fdb-purple)' : 'var(--fdb-cream)',
      border: band ? 'none' : '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '2.25rem 2.25rem',
      transition: 'background 0.2s'
    }
  }, !band ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 32
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.95rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, "Answer all fifteen statements to reveal your readiness band.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '2rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.75rem'
    }
  }, "Your readiness band"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: '#fff',
      lineHeight: 1,
      marginBottom: '0.85rem'
    }
  }, band.name, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.92rem',
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.6,
      maxWidth: '46ch',
      marginBottom: '1.5rem'
    }
  }, band.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    },
    onClick: () => setAnswers({})
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('/register'),
    style: {
      background: '#fff',
      color: 'var(--fdb-purple-deep)',
      border: 'none',
      borderRadius: 3,
      padding: '0.7rem 1.4rem',
      fontSize: '0.73rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Bring this to Day One \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '4rem',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      color: '#fff',
      lineHeight: 1
    }
  }, score, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.5rem',
      color: 'var(--fdb-purple-soft)'
    }
  }, "/30")))))))));
}
function QuestionRow({
  q,
  value,
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '1.5rem',
      alignItems: 'center',
      padding: '1rem 0',
      borderTop: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.92rem',
      fontWeight: 500,
      color: 'var(--fdb-ink)',
      lineHeight: 1.5,
      maxWidth: '54ch'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      overflow: 'hidden',
      flexShrink: 0
    }
  }, ANSWERS.map((a, i) => {
    const sel = value === a.key;
    return /*#__PURE__*/React.createElement("button", {
      key: a.key,
      onClick: () => onPick(a.key),
      style: {
        background: sel ? 'var(--fdb-purple)' : 'transparent',
        color: sel ? '#fff' : 'var(--fdb-ink-muted)',
        border: 'none',
        borderLeft: i === 0 ? 'none' : '1px solid var(--fdb-border-strong)',
        padding: '0.5rem 0.95rem',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'background 0.15s, color 0.15s',
        minWidth: 72
      }
    }, a.label);
  })));
}
window.AiActPage = AiActPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-aiact.jsx", error: String((e && e.message) || e) }); }

// site/page-awards.jsx
try { (() => {
/* eslint-disable */
// FDB 2026 - X. Awards (Day One evening). The sub-brand pivot. Cream, considered,
// celebratory. Uses the canonical X. Awards lockup and roundel unaltered. The
// awards motif locks into the lockup offset. Eight categories. Human-only final
// judging. Reasoning notes published with every winner.

const AWARD_CATEGORIES = [{
  name: 'Destination Brand of the Year',
  desc: 'The strongest national or regional brand expression of the year.'
}, {
  name: 'AI in Destination Marketing',
  desc: 'Material, deployed use of AI in the work, disclosed in full. Not a pitch deck.'
}, {
  name: 'Digital Transformation',
  desc: 'The most ambitious end-to-end digital programme inside an NTO or DMO.'
}, {
  name: 'Best Campaign',
  desc: 'A single campaign, judged on craft, intent and measurable effect.'
}, {
  name: 'Content and Storytelling',
  desc: 'Narrative and voice that move a destination beyond the brochure.'
}, {
  name: 'Data and Insight',
  desc: 'Insight that visibly changed a decision, an investment or a position.'
}, {
  name: 'Sustainable Tourism Communications',
  desc: 'The most credible, measurable sustainability narrative of the year.'
}, {
  name: 'Emerging Destination',
  desc: 'Newer brands punching above their weight, with the work to prove it.'
}];
function AwardsPage() {
  const {
    nav
  } = useNav();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayHero, {
    station: "awards",
    eyebrow: "X. Awards \xB7 Day One evening \xB7 02 December",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The first ", /*#__PURE__*/React.createElement(Accent, null, "AI-Positive"), " Industry Awards."),
    lead: "The sector's recognition of destination branding, transformation and digital innovation, awarded the evening of Day One. Celebratory in atmosphere, serious in recognition. No black tie.",
    meta: [{
      label: 'When',
      value: 'Evening of Day One · 02 Dec'
    }, {
      label: 'Judging',
      value: 'Eight categories · human-only final round'
    }]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '2.25rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Submit an entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      const el = document.getElementById('categories');
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 96,
        behavior: 'smooth'
      });
    }
  }, "Eight categories \u2193"))), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What it recognises"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '1.5rem',
      maxWidth: '44ch'
    }
  }, "The first awards to be explicit about ", /*#__PURE__*/React.createElement(Accent, null, "how AI takes part"), " in the work being recognised."), /*#__PURE__*/React.createElement(BodyText, null, "Entrants disclose the role AI played in what they are submitting. Disclosure is the price of entry, not a disadvantage. The awards reward judgement and craft, including the judgement to use these tools well. The final round is human-only, and the panel's reasoning is published with every winner.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '4rem',
      background: 'var(--fdb-cream-deep)',
      borderTop: '1px solid var(--fdb-border)',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '2rem'
    }
  }, "How judging works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem'
    }
  }, [{
    n: '01',
    h: 'Disclose',
    b: 'Every entry declares the role AI played in the work. Built on the DTTT AI Transparency Framework.'
  }, {
    n: '02',
    h: 'Shortlist',
    b: 'A panel of senior destination, brand and policy leaders draws the shortlist in each category.'
  }, {
    n: '03',
    h: 'Human judging',
    b: 'The final decision is made by people, in a room. No automated scoring at the final round.'
  }, {
    n: '04',
    h: 'Published reasoning',
    b: 'Every winner is published with the panel\u2019s reasoning. No black box, no unexplained verdicts.'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'var(--fdb-purple)',
      marginBottom: '0.6rem'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.5rem'
    }
  }, s.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, s.b)))))), /*#__PURE__*/React.createElement("section", {
    id: "categories",
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The categories"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1rem',
      marginBottom: '2.5rem'
    }
  }, "Eight categories. ", /*#__PURE__*/React.createElement(Accent, null, "One evening.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem 2.5rem'
    }
  }, AWARD_CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '1rem',
      marginBottom: '0.45rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.02rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.25
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: 'var(--fdb-purple)',
      flexShrink: 0
    }
  }, String(i + 1).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.84rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, c.desc))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: '3rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1rem'
    }
  }, "Published with every winner"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.9rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: 'var(--fdb-ink)',
      marginBottom: '1rem'
    }
  }, "The reasoning note."), /*#__PURE__*/React.createElement(BodyText, null, "A short, signed explanation of why the work won. It travels with the award and holds the panel to its own standard.")), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 12,
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-white)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '2rem 2.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, "Reasoning note \xB7 Sample"), /*#__PURE__*/React.createElement(Motif, {
    state: "awards",
    size: 34,
    sw: 3
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 600,
      lineHeight: 1.55,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.25rem',
      textWrap: 'pretty'
    }
  }, "\"Recognised for a brand system that used AI to widen access without thinning the voice. The disclosure was complete, and the judgement behind the tooling was the work.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, "AI in Destination Marketing"), " \xB7 Panel reasoning, FDB 2026"))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "Key dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    lbl: 'Entries open',
    val: 'June 2026'
  }, {
    lbl: 'Entries close',
    val: 'October 2026'
  }, {
    lbl: 'Ceremony',
    val: '02 December · Dublin'
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.75rem 1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.5rem'
    }
  }, d.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, d.val))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      maxWidth: '24ch',
      textWrap: 'pretty'
    }
  }, "Entries are open to the ", /*#__PURE__*/React.createElement(Accent, null, "destination sector worldwide.")), /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Submit an entry"))));
}
window.AwardsPage = AwardsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-awards.jsx", error: String((e && e.message) || e) }); }

// site/page-keynotes.jsx
try { (() => {
/* eslint-disable */
// FDB 2026 - Day Two · The Keynote Programme
// Register: a serious room for serious work. Public, paced, with breathing room.
// Six themes are the structural rhythm. The programme motif spreads horizontally.
// The transatlantic fireside is a visual moment; the day closes by reconnecting
// to the Council formed on Day One.

const KEYNOTE_THEMES = [{
  name: 'Brand',
  desc: 'Positioning a destination when an answer-engine sits between it and the visitor.'
}, {
  name: 'Marketing',
  desc: 'The new visitor brief, and the shift from campaign to permanent surface.'
}, {
  name: 'Content',
  desc: 'Narrative and voice as a destination\u2019s most durable asset.'
}, {
  name: 'Data',
  desc: 'Reporting performance to boards and ministers after the funnel.'
}, {
  name: 'AI',
  desc: 'Material, disclosed deployment inside real destination teams.'
}, {
  name: 'Organisation',
  desc: 'Structuring the modern destination team for the work ahead.'
}];
function KeynotesPage() {
  const {
    nav
  } = useNav();
  const speakers = [{
    name: 'Nick Hall',
    org: 'Digital Tourism Think Tank',
    role: 'Host · Opening',
    tone: '#6F8FA8'
  }, {
    name: 'Caroline Bocquel',
    org: 'Fáilte Ireland',
    role: 'Welcome',
    tone: '#94816A'
  }, {
    name: 'Speaker TBC',
    org: 'Major NTO · Brand lead',
    role: 'Brand',
    tbc: true,
    tone: '#7B8C7A'
  }, {
    name: 'Speaker TBC',
    org: 'European NTO · Marketing',
    role: 'Marketing',
    tbc: true,
    tone: '#A09EB4'
  }, {
    name: 'Speaker TBC',
    org: 'DMO · Content lead',
    role: 'Content',
    tbc: true,
    tone: '#8A9BA8'
  }, {
    name: 'Speaker TBC',
    org: 'NTO · Head of insight',
    role: 'Data',
    tbc: true,
    tone: '#9A8674'
  }, {
    name: 'Speaker TBC',
    org: 'DMO · AI lead',
    role: 'AI',
    tbc: true,
    tone: '#7E8B7C'
  }, {
    name: 'Speaker TBC',
    org: 'NTO · Organisation',
    role: 'Organisation',
    tbc: true,
    tone: '#9E9AAE'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayHero, {
    station: "programme",
    eyebrow: "Day Two \xB7 03 December \xB7 Keynote programme",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The keynote", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "programme.")),
    lead: "Back-to-back keynotes from the destination marketers, brand leads and digital teams doing the work. Not a tech conference. A destination marketing conference that takes AI seriously.",
    meta: [{
      label: 'Date',
      value: 'Wednesday 03 December 2026'
    }, {
      label: 'Audience',
      value: '125 to 200 senior delegates'
    }, {
      label: 'Format',
      value: 'Full-day keynote programme'
    }, {
      label: 'Themes',
      value: 'Six, across the day'
    }]
  }), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The room"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '1.5rem'
    }
  }, "Peer authority over outside expertise. The most valuable voices are ", /*#__PURE__*/React.createElement(Accent, null, "destinations doing the work.")), /*#__PURE__*/React.createElement(BodyText, null, "Pace, but with breathing room. Outside speakers expand the frame; they do not fill time. Mostly DTTT members, mostly senior, mostly active. The day moves through six themes and closes by reconnecting to the Council formed the day before.")), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "Six themes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem'
    }
  }, KEYNOTE_THEMES.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.6rem',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--fdb-purple)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, t.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, t.desc))))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '4rem',
      background: 'var(--fdb-cream-deep)',
      borderTop: '1px solid var(--fdb-border)',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '0.75rem'
    }
  }, "Mid-morning \xB7 Featured"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.05,
      color: 'var(--fdb-ink)'
    }
  }, "The transatlantic fireside.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      maxWidth: '36ch'
    }
  }, "Three of the world's most-watched destination brands, in one room, on one stage. A rare exchange across the Atlantic.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem 1.5rem'
    }
  }, /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Destination Canada",
    org: "National tourism organisation",
    role: "Fireside",
    tbc: true,
    tone: "#8A9BA8"
  }), /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Brand USA",
    org: "National tourism organisation",
    role: "Fireside",
    tbc: true,
    tone: "#94816A"
  }), /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "European NTO",
    org: "To be confirmed",
    role: "Fireside",
    tbc: true,
    tone: "#7B8C7A"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: '1.5rem',
      flexWrap: 'wrap',
      marginBottom: '2.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Speakers"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: '1rem',
      marginBottom: 0
    }
  }, "One keynote per theme, plus the transatlantic fireside \u2014 the destination marketers and brand leads doing the work. ", /*#__PURE__*/React.createElement(Accent, null, "The full line-up is announced closer to the event."))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => nav('/register')
  }, "Get notified")), /*#__PURE__*/React.createElement("div", {
    className: "fdb-speaker-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2.25rem 1.5rem'
    }
  }, [{
    theme: 'Brand',
    org: 'Major NTO · Brand lead'
  }, {
    theme: 'Marketing',
    org: 'European NTO · Marketing'
  }, {
    theme: 'Content',
    org: 'DMO · Content lead'
  }, {
    theme: 'Data',
    org: 'NTO · Head of insight'
  }, {
    theme: 'AI',
    org: 'DMO · AI lead'
  }, {
    theme: 'Organisation',
    org: 'NTO · Organisation'
  }].map(t => /*#__PURE__*/React.createElement("div", {
    key: t.theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 3,
      border: '1px solid var(--fdb-border-strong)',
      background: 'repeating-linear-gradient(135deg, rgba(130,57,193,0.045) 0 9px, rgba(130,57,193,0.09) 9px 18px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.7rem',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '0.6rem',
      left: '0.6rem',
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      background: 'var(--fdb-white)',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      padding: '0.2rem 0.45rem'
    }
  }, t.theme), /*#__PURE__*/React.createElement(Motif, {
    state: "programme",
    size: 46,
    sw: 3.2,
    muted: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--fdb-font-mono)',
      fontSize: '0.58rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Announced soon")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.2
    }
  }, "Keynote \xB7 ", t.theme), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.2rem'
    }
  }, t.org)))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "09:00",
    title: "Doors and coffee",
    desc: "Arrivals. The room settles."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Opening: the state of destination brand",
    tags: ['Brand'],
    desc: "The host opens with where the work stands and where the day is heading.",
    speakers: [{
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Keynote: building a national brand for AI search",
    tags: ['Brand', 'Marketing'],
    speakers: [{
      name: 'Major NTO · Brand lead · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:30",
    title: "Transatlantic fireside",
    tags: ['Featured'],
    desc: "Destination Canada, Brand USA and a European NTO, in conversation.",
    speakers: [{
      name: 'Destination Canada · Brand USA · European NTO · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:15",
    title: "Break"
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Keynote: content as a permanent surface",
    tags: ['Content'],
    speakers: [{
      name: 'DMO · Content lead · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "12:00",
    title: "Keynote: measurement after the funnel",
    tags: ['Data'],
    speakers: [{
      name: 'NTO · Head of insight · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "12:30",
    title: "Lunch",
    desc: "Hosted. The conversations carry over."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:00",
    title: "Keynote: deploying AI without losing the voice",
    tags: ['AI'],
    speakers: [{
      name: 'DMO · AI lead · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Keynote: organising the modern destination team",
    tags: ['Organisation'],
    speakers: [{
      name: 'NTO · Organisation · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:00",
    title: "Break"
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "Keynote: the new visitor brief",
    tags: ['Marketing'],
    speakers: [{
      name: 'European NTO · Marketing · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Report from the Council",
    tags: ['Policy', 'Reconnects to Day One'],
    desc: "The Council formed on Day One reports back to the wider room. The private morning meets the public day."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav('/leadership')
  }, "See the Council \xB7 Day One \u2192"))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Close",
    desc: "The programme ends. Day Three is for members."
  })), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      maxWidth: '26ch',
      textWrap: 'pretty'
    }
  }, "Day Two is open to ", /*#__PURE__*/React.createElement(Accent, null, "DTTT members and invited delegates.")), /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Register your place"))));
}
window.KeynotesPage = KeynotesPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-keynotes.jsx", error: String((e && e.message) || e) }); }

// site/page-leadership.jsx
try { (() => {
/* eslint-disable */
// FDB 2026 - Day One · Leadership in the Age of AI
// Register: close, considered, almost private. Single column, deep whitespace,
// hairlines, the council motif nested and contained. The Council formation and
// the published outputs are treated as designed moments, not section headers.

function LeadershipPage() {
  const {
    nav
  } = useNav();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayHero, {
    station: "council",
    eyebrow: "Day One \xB7 02 December \xB7 Leadership programme",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Leadership", /*#__PURE__*/React.createElement("br", null), "in the Age", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement(Accent, null, "AI.")),
    lead: "A structured, invite-only working day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level.",
    meta: [{
      label: 'Date',
      value: 'Tuesday 02 December 2026'
    }, {
      label: 'Location',
      value: 'Dublin, Ireland'
    }, {
      label: 'Format',
      value: 'Invite-only · 30 to 40 participants'
    }, {
      label: 'Convention',
      value: 'Held under the Chatham House Rule'
    }, {
      label: 'Host',
      value: 'Fáilte Ireland · Irish EU Presidency'
    }]
  }), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About the day"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '1.5rem'
    }
  }, "AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is ", /*#__PURE__*/React.createElement(Accent, null, "not whether to engage."), " It is whether leadership is ready."), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1rem'
    }
  }, "The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design, and what is said in it is held under the Chatham House Rule."), /*#__PURE__*/React.createElement(BodyText, null, "The day is convened by F\xE1ilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. ", /*#__PURE__*/React.createElement(Accent, null, "What participants bring to this table does not stay in the room."))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '4rem',
      background: 'var(--fdb-cream-deep)',
      borderTop: '1px solid var(--fdb-border)',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: '3.5rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The standing output"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.5rem',
      textWrap: 'balance'
    }
  }, "The room constitutes the ", /*#__PURE__*/React.createElement(Accent, null, "Global Tourism Council"), " for AI Governance and Leadership."), /*#__PURE__*/React.createElement(BodyText, null, "This is not a panel and not a session. It is the formation of a standing body. The Council issues the Dublin Declaration on AI in Tourism and establishes the Global Tourism Code of Practice on AI, submitted to EU institutions under the Irish Presidency.")), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 12,
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-cream)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '2.25rem 2rem'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      margin: '1.5rem 0 0.6rem'
    }
  }, "Constituted at FDB 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
      color: 'var(--fdb-ink)'
    }
  }, "Global Tourism Council", /*#__PURE__*/React.createElement("br", null), "for AI Governance", /*#__PURE__*/React.createElement("br", null), "and Leadership."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.5rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.45rem'
    }
  }, /*#__PURE__*/React.createElement(CouncilLine, {
    n: "01"
  }, "Dublin Declaration on AI in Tourism"), /*#__PURE__*/React.createElement(CouncilLine, {
    n: "02"
  }, "Global Tourism Code of Practice on AI"), /*#__PURE__*/React.createElement(CouncilLine, {
    n: "03"
  }, "Standing through 2027, reporting on Day Two"))))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "Programme"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "08:30",
    title: "Private breakfast",
    desc: "Seated breakfast for all participants. Introductions happen informally before the working day begins."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Welcome and framing",
    desc: "F\xE1ilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method.",
    speakers: [{
      name: 'Caroline Bocquel, CEO · Fáilte Ireland'
    }, {
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Opening provocation",
    tags: ['Provocation', 'Open response'],
    desc: "A senior voice with direct experience of NTO leadership delivers a deliberate challenge to the room. Twenty minutes, no slides.",
    speakers: [{
      name: 'Oliver Csendes · Former CEO, Visit Hungary'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:00",
    title: "AI in destination leadership: a shared framework",
    tags: ['Framework', 'Peer testimony'],
    desc: "DTTT introduces the AI Transparency Framework as a leadership instrument, illustrated with practice from NTOs already deploying it nationally.",
    speakers: [{
      name: 'NTO leaders engaged in AI governance programmes · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Working sessions",
    desc: "Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session A",
    title: "AI readiness and organisational leadership",
    desc: "What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."
  }), /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session B",
    title: "AI and destination competitiveness",
    desc: "How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."
  }))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "13:00",
    title: "Private lunch",
    desc: "Seated, hosted, informal. The conversation continues."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Big Tech intelligence briefing",
    tags: ['Intelligence briefing'],
    desc: "A senior representative from one of Dublin's major technology companies briefs the room on what the platforms are building and observing in travel and destination search.",
    speakers: [{
      name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "The European policy landscape",
    tags: ['Policy'],
    desc: "A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective.",
    speakers: [{
      name: 'EU institutional or government representative · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Synthesis and shared conclusions",
    tags: ['Policy output'],
    desc: "DTTT facilitates a structured synthesis of the day's work into a small number of documented priorities, forming the basis of the Executive Briefing submitted to EU institutions."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Dublin city experience",
    desc: "A curated late afternoon in Dublin, in partnership with F\xE1ilte Ireland's Winter in Dublin programme. Details to be confirmed."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "19:30",
    title: "X. Awards",
    desc: "Transition to the X. Awards evening. The first AI-Positive Industry Awards."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav('/awards')
  }, "See the X. Awards \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      borderRadius: 4,
      padding: '2rem 2.25rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '54ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '0.75rem'
    }
  }, "Before you arrive"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.5rem'
    }
  }, "The EU AI Act readiness assessment."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-mid)',
      lineHeight: 1.6
    }
  }, "Participants complete a fifteen-question readiness assessment before the day. A public-facing companion to Day One.")), /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/ai-act')
  }, "Open the assessment")))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Who is in the room"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: '1rem',
      marginBottom: '2.5rem'
    }
  }, "The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated ", /*#__PURE__*/React.createElement(Accent, null, "by invitation only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem 1.5rem'
    }
  }, /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Caroline Bocquel",
    org: "CEO \xB7 F\xE1ilte Ireland",
    role: "Host",
    tone: "#94816A"
  }), /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Nick Hall",
    org: "CEO \xB7 Digital Tourism Think Tank",
    role: "Facilitation",
    tone: "#6F8FA8"
  }), /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Oliver Csendes",
    org: "Former CEO \xB7 Visit Hungary<br/>Destination AI Strategist",
    role: "Provocation",
    tone: "#7B8C7A"
  }), /*#__PURE__*/React.createElement(PortraitFrame, {
    name: "Senior representative",
    org: "Google / Microsoft / OpenAI \xB7 Dublin",
    role: "Technology briefing",
    tbc: true,
    tone: "#A09EB4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.5rem',
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem',
      background: 'var(--fdb-purple-tint)',
      padding: '1.25rem 1.5rem',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-deep)',
      marginBottom: '0.4rem'
    }
  }, "Further participants"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--fdb-ink-mid)',
      lineHeight: 1.5
    }
  }, "20 to 30 additional NTO and DMO chief executives and C-suite leaders, one or two EU and member-state policy voices, by personal invitation."))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Published outputs"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1rem',
      marginBottom: '0.5rem'
    }
  }, "Four documents leave this room. They are written to be read in ", /*#__PURE__*/React.createElement(Accent, null, "Brussels and in national capitals.")), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2.5rem'
    }
  }, "Published after the event and distributed beyond the room, to EU institutions and to the technology companies shaping the tools and regulations that govern destination work."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2.5rem 1.75rem'
    }
  }, /*#__PURE__*/React.createElement(DocumentObject, {
    kind: "Declaration",
    title: "Dublin Declaration on AI in Tourism",
    desc: "The Council's founding statement of principle. Submitted under the Irish Presidency."
  }), /*#__PURE__*/React.createElement(DocumentObject, {
    kind: "Code of Practice",
    title: "Global Tourism Code of Practice on AI",
    desc: "The operating standard the sector commits to. Built on the AI Transparency Framework."
  }), /*#__PURE__*/React.createElement(DocumentObject, {
    kind: "Report",
    title: "State of Destination AI Report",
    desc: "A comprehensive synthesis of the day, distributed across the industry."
  }), /*#__PURE__*/React.createElement(DocumentObject, {
    kind: "Briefing",
    title: "Executive Briefing Summary",
    desc: "Concise, formal, designed to be read by policy audiences."
  }))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.35rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      textWrap: 'pretty'
    }
  }, "The outputs of this day reach ", /*#__PURE__*/React.createElement(Accent, null, "EU institutions, national governments"), " and the technology companies shaping destination marketing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "Places on the leadership day are by personal invitation only. To discuss participation, please get in touch."), /*#__PURE__*/React.createElement(Button, {
    icon: ChatIcon,
    onClick: () => nav('/register')
  }, "Get in touch")))));
}
function CouncilLine({
  n,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.7rem',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'var(--fdb-purple)',
      flexShrink: 0
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 600,
      color: 'var(--fdb-ink-mid)',
      lineHeight: 1.4
    }
  }, children));
}

// A published document rendered as a designed object - a paper plate with the
// mark, a kind label, the title, and suggested body lines.
function DocumentObject({
  kind,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8,
    strokeWidth: 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-white)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '1.25rem 1.25rem 1.4rem',
      aspectRatio: '3/4',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, kind)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.92rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      color: 'var(--fdb-ink)',
      marginTop: '1.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingTop: '1.25rem'
    }
  }, [1, 0.92, 0.78, 0.6].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 2,
      width: `${w * 100}%`,
      background: 'var(--fdb-border-strong)',
      borderRadius: 2
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.5rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      marginTop: '1rem'
    }
  }, "Submitted \xB7 EU institutions \xB7 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.55,
      marginTop: '1rem'
    }
  }, desc));
}
window.LeadershipPage = LeadershipPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-leadership.jsx", error: String((e && e.message) || e) }); }

// site/page-overview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
// FDB 2026 - Overview (Home). The arc: a private start, a celebratory pivot,
// a public day, a generative close. The journey rail is the page's centrepiece.

function OverviewPage() {
  const {
    nav
  } = useNav();

  // The event, in four parts — in CHRONOLOGICAL order: the private meeting and
  // the awards on Day One, the keynote day, then the members' workstream.
  const parts = [{
    part: '01',
    station: 'council',
    kicker: 'Day One · 02 Dec',
    access: 'Invite only',
    title: 'The Leadership Meeting.',
    sub: 'Leadership in the Age of AI',
    path: '/leadership',
    desc: 'A private, invite-only working day for 30 to 40 NTO and DMO chief executives, ministers and senior leaders. Boardroom format, no stage, no panels. The room constitutes a Council and issues the Dublin Declaration.'
  }, {
    part: '02',
    station: 'awards',
    kicker: 'Day One · The evening',
    title: 'X. Awards.',
    sub: 'The first AI-Positive Industry Awards',
    path: '/awards',
    desc: 'Held on the evening of Day One. Eight categories, human-only final judging, reasoning notes published with every winner. Celebratory, considered.'
  }, {
    part: '03',
    station: 'programme',
    kicker: 'Day Two · 03 Dec',
    title: 'The Keynote Day.',
    sub: 'Talks from leading destinations',
    path: '/keynotes',
    desc: 'Back-to-back keynotes from the destination marketers and brand leads actually doing the work, across six themes, with a transatlantic fireside mid-morning. Free for DTTT members; ticketed for delegates, with separate tickets for DMOs and commercial partners.'
  }, {
    part: '04',
    station: 'workstream',
    kicker: 'Day Three · 04 Dec',
    access: 'Members only',
    title: 'The Trends Workstream.',
    sub: 'Future Destination Trends 2027',
    path: '/workstream',
    desc: 'A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The day the next year gets written.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "fdb-rise",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem 2rem',
      flexWrap: 'wrap',
      paddingBottom: '1.5rem',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "An event by"), /*#__PURE__*/React.createElement("img", {
    src: window.__resources?.dtttBlack || "assets/logos/dttt-logo-landscape-black.svg",
    alt: "Digital Tourism Think Tank",
    style: {
      height: 22,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 1,
      height: 22,
      background: 'var(--fdb-border-strong)'
    }
  }), /*#__PURE__*/React.createElement(HostPartner, {
    size: 34
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fdb-wrap",
    style: {
      position: 'relative',
      padding: '3rem 3rem 3.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.78fr',
      gap: '3rem',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "2026 Edition \xB7 Dublin \xB7 02\u201304 December"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.7rem, 6vw, 4.6rem)',
      fontWeight: 800,
      lineHeight: 0.96,
      letterSpacing: '-0.04em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.6rem'
    }
  }, "Future", /*#__PURE__*/React.createElement("br", null), "Destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.25rem'
    }
  }, "The Digital Tourism Think Tank's global forum on the future of destination brand and leadership in the age of AI. ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink)',
      fontWeight: 700
    }
  }, "Four parts, across three days.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/leadership')
  }, "View the programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => nav('/register')
  }, "Register your place"))), /*#__PURE__*/React.createElement("div", {
    className: "fdb-hero-motif",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fdb-mark-pivot"
  }, /*#__PURE__*/React.createElement(Motif, {
    state: "brand",
    size: 300,
    sw: 1.9
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Convened under"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, "Ireland's EU Council Presidency \xB7 H2 2026")))), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The event, in four parts"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '0.5rem'
    }
  }, "A private leadership meeting, an open keynote day, a members' working day, and an ", /*#__PURE__*/React.createElement(Accent, null, "evening of recognition.")), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1rem'
    }
  }, "One gathering with four distinct moments, each with its own way in, from the invitation-only Council room to the keynote day open to members and delegates. Three run across the days; the X. Awards is held on the evening of Day One.")), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      marginTop: '2rem'
    }
  }, parts.map((m, i) => /*#__PURE__*/React.createElement(MomentRow, _extends({
    key: m.path
  }, m, {
    isFirst: i === 0,
    onOpen: () => nav(m.path)
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Across three days"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: '1rem',
      marginBottom: '2.5rem'
    }
  }, "How the event runs, in sequence: the leadership meeting and X. Awards on Day One, the keynote day, then the members' workstream."), /*#__PURE__*/React.createElement(JourneyRail, {
    allLit: true,
    markSize: 56,
    style: {
      maxWidth: 840,
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Who it's for"), /*#__PURE__*/React.createElement("div", {
    className: "fdb-audience-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      marginTop: '1.25rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginBottom: 0
    }
  }, "Critical conversations on destination strategy and leadership in the ", /*#__PURE__*/React.createElement(Accent, null, "age of AI"), ", built for the people who lead the world's destination brands."), /*#__PURE__*/React.createElement("div", null, [{
    h: 'C-level destination leaders',
    b: 'The chief executives and senior teams setting destination strategy.'
  }, {
    h: 'National, regional & city DMOs',
    b: "The world's leading destination management and marketing organisations."
  }, {
    h: 'Marketing & digital teams',
    b: 'The people turning strategy into brand, campaigns and content.'
  }, {
    h: 'DTTT members',
    b: 'The global membership community at the heart of the trends workstream.'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid var(--fdb-border)',
      padding: '1rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.98rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.2,
      marginBottom: '0.3rem'
    }
  }, a.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.55
    }
  }, a.b)))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What sets it apart"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '2.5rem'
    }
  }, "A global forum with a ", /*#__PURE__*/React.createElement(Accent, null, "100% destination lens"), ", focused entirely on how destinations build brand and lead in a rapidly changing landscape."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2.5rem 2rem'
    }
  }, [{
    h: 'A 100% destination lens.',
    b: 'Every session is framed around destinations and the organisations that market them. A single, undiluted focus you will not find at a general industry event.'
  }, {
    h: 'The room is the asset.',
    b: 'The most valuable voices are the destination marketers and brand leaders actively doing the work: peers speaking candidly to peers.'
  }, {
    h: 'Value across the programme.',
    b: "Leadership strategy on Day One, peer keynotes on Day Two, and a members' trends workstream on Day Three. Each day adds a distinct layer."
  }, {
    h: 'Editorial and declarative.',
    b: 'Restrained and substantive throughout, written like a memo to a knowledgeable peer. The work itself is the point.'
  }, {
    h: 'Peer authority.',
    b: 'Outside voices expand the frame rather than fill time. The sector speaks for itself.'
  }, {
    h: 'Small by design.',
    b: 'The leadership room holds 30 to 40 people, a deliberate choice that keeps the conversation candid.'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.2,
      marginBottom: '0.6rem'
    }
  }, p.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, p.b))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      textWrap: 'pretty'
    }
  }, "Four moments, one conversation on the ", /*#__PURE__*/React.createElement(Accent, null, "future of destination brand."), " Register your interest and we'll be in touch about the parts you can join."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Register your place"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: ChatIcon,
    onClick: () => nav('/register')
  }, "Get in touch")))));
}

// One part in the event - hairline-separated editorial row with a part number.
function MomentRow({
  part,
  station,
  kicker,
  access,
  title,
  sub,
  desc,
  isFirst,
  onOpen
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: '100%',
      textAlign: 'left',
      background: 'none',
      cursor: 'pointer',
      border: 'none',
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.75rem 0',
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      gap: '0 1.75rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)'
    }
  }, part), /*#__PURE__*/React.createElement(Motif, {
    state: station,
    size: 44,
    sw: 3,
    muted: !hover
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      flexWrap: 'wrap',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, kicker), access && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-deep)',
      background: 'var(--fdb-purple-tint)',
      borderRadius: 2,
      padding: '0.2rem 0.45rem'
    }
  }, access)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '1.5rem',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.1,
      marginBottom: '0.2rem'
    }
  }, title), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.82rem',
      fontWeight: 600,
      fontStyle: 'italic',
      color: 'var(--fdb-ink-muted)',
      marginBottom: '0.6rem'
    }
  }, sub), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.88rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.65,
      maxWidth: '64ch'
    }
  }, desc)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      whiteSpace: 'nowrap',
      paddingTop: '1.5rem'
    }
  }, "Open \u2192"));
}

// ── ACCESS BAND ──────────────────────────────────────────────────────────────
// The single dark element on the page: a clear, scannable answer to "who can
// attend what", in chronological order. Breaks the editorial flow once, makes
// access unmistakable, and shows the day-mark family read on ink.
function AccessBand({
  nav
}) {
  const items = [{
    station: 'council',
    path: '/leadership',
    name: 'Leadership Meeting',
    day: 'Day One',
    tag: 'Invite only',
    note: '30–40 senior destination leaders.'
  }, {
    station: 'awards',
    path: '/awards',
    name: 'X. Awards',
    day: 'Day One · evening',
    tag: 'Ticketed',
    note: 'The awards celebration.'
  }, {
    station: 'programme',
    path: '/keynotes',
    name: 'Keynote Day',
    day: 'Day Two',
    tag: 'Open',
    note: 'Free for members · ticketed for delegates.'
  }, {
    station: 'workstream',
    path: '/workstream',
    name: 'Trends Workstream',
    day: 'Day Three',
    tag: 'Members only',
    note: 'Open to DTTT members.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-ink)',
      borderRadius: 'var(--fdb-radius-md)',
      padding: '2.4rem 2.5rem 2.6rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '1.5rem',
      flexWrap: 'wrap',
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(245,240,233,0.55)'
    }
  }, "Who can attend what"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      lineHeight: 1.5,
      color: 'rgba(245,240,233,0.7)',
      maxWidth: '40ch'
    }
  }, "Each part has its own way in. Register your interest and we'll confirm what you can join.")), /*#__PURE__*/React.createElement("div", {
    className: "fdb-access-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.75rem'
    }
  }, items.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.path,
    onClick: () => nav(a.path),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '1.1rem 0 0',
      textAlign: 'left',
      borderTop: '1px solid rgba(245,240,233,0.18)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 42,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: a.station,
    size: 40,
    sw: 3
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(245,240,233,0.45)',
      marginBottom: '0.3rem'
    }
  }, a.day), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-cream)',
      lineHeight: 1.15
    }
  }, a.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      border: '1px solid rgba(201,170,238,0.4)',
      borderRadius: 2,
      padding: '0.25rem 0.5rem'
    }
  }, a.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      lineHeight: 1.5,
      color: 'rgba(245,240,233,0.62)'
    }
  }, a.note)))));
}
window.OverviewPage = OverviewPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-overview.jsx", error: String((e && e.message) || e) }); }

// site/page-register.jsx
try { (() => {
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

const ACCESS = [{
  station: 'council',
  day: 'Day One',
  name: 'Leadership Meeting',
  tier: 'Invite only',
  open: false,
  note: 'Invitation code required. 30–40 senior leaders.'
}, {
  station: 'programme',
  day: 'Day Two',
  name: 'Keynote Day',
  tier: 'Members free · delegates ticketed',
  open: true,
  note: 'Free for DTTT members; ticketed for delegates.'
}, {
  station: 'workstream',
  day: 'Day Three',
  name: 'Trends Workstream',
  tier: 'Members only',
  open: true,
  note: 'DTTT members only. Capped per table.'
}, {
  station: 'awards',
  day: 'Evening',
  name: 'X. Awards',
  tier: 'Ticketed',
  open: true,
  note: 'The awards evening, on Day One.'
}];
const ROUTES = [{
  id: 'member',
  label: 'DTTT Member'
}, {
  id: 'delegate',
  label: 'Delegate'
}, {
  id: 'invited',
  label: 'Invited'
}];
function RegisterPage() {
  const {
    nav
  } = useNav();
  const [route, setRoute] = useState('member');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "fdb-rise fdb-wrap",
    style: {
      position: 'relative',
      padding: '4rem 3rem 2.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "Registration \xB7 FDB 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.6rem, 5.4vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.035em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.5rem'
    }
  }, "Register your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "place.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.02rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '52ch'
    }
  }, "Free for DTTT members \u2014 sign in with your DTTT Account and your details carry straight through. Delegates register and pay in a few steps. The Leadership Meeting is by invitation."))), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap fdb-reg-grid",
    style: {
      paddingTop: '3rem',
      display: 'grid',
      gridTemplateColumns: '0.82fr 1.18fr',
      gap: '3.5rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "What you can register for"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, ACCESS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.station,
    onClick: () => nav('/' + {
      council: 'leadership',
      awards: 'awards',
      programme: 'keynotes',
      workstream: 'workstream'
    }[a.station]),
    style: {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.1rem 0',
      display: 'grid',
      gridTemplateColumns: '34px 1fr',
      gap: '0 1rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: a.station,
    size: 30,
    sw: 3.4,
    muted: true
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.94rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, a.day, " \xB7 ", a.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: a.open ? 'var(--fdb-purple)' : 'var(--fdb-ink-faint)',
      margin: '0.35rem 0'
    }
  }, a.tier), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, a.note)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 12,
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-white)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: '1px solid var(--fdb-border)'
    }
  }, ROUTES.map(r => {
    const on = route === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      onClick: () => setRoute(r.id),
      style: {
        flex: 1,
        background: on ? 'var(--fdb-white)' : 'var(--fdb-cream)',
        border: 'none',
        cursor: 'pointer',
        padding: '1rem 0.5rem',
        fontFamily: 'inherit',
        fontSize: '0.66rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: on ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
        borderBottom: on ? '2px solid var(--fdb-purple)' : '2px solid transparent',
        borderRight: r.id !== 'invited' ? '1px solid var(--fdb-border)' : 'none',
        transition: 'color 0.15s, background 0.15s'
      }
    }, r.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.9rem'
    }
  }, route === 'member' && /*#__PURE__*/React.createElement(MemberFlow, {
    nav: nav
  }), route === 'delegate' && /*#__PURE__*/React.createElement(DelegateFlow, null), route === 'invited' && /*#__PURE__*/React.createElement(InvitedFlow, null)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1rem',
      fontSize: '0.74rem',
      color: 'var(--fdb-ink-faint)',
      lineHeight: 1.5
    }
  }, "Not sure which applies to you? ", /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('/leadership'),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--fdb-purple)',
      borderBottom: '1px solid var(--fdb-purple-soft)',
      fontFamily: 'inherit',
      fontSize: '0.74rem'
    }
  }, "Get in touch"), " and we'll point you the right way."))));
}

// ── MEMBER ───────────────────────────────────────────────────────────────────
// Sign in with DTTT Account → returns here → Typeform confirms pre-filled details.
function MemberFlow({
  nav
}) {
  const [authed, setAuthed] = useState(false);
  const [done, setDone] = useState(false);
  if (done) return /*#__PURE__*/React.createElement(Confirmed, {
    lines: ["Day Two · Keynote Day", "Day Three · Trends Workstream"],
    onReset: () => setDone(false)
  });
  if (!authed) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FlowHead, {
      title: "Sign in to register",
      body: "Registration is free for DTTT members. Sign in with your DTTT Account \u2014 your name, organisation and role carry straight through."
    }), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setAuthed(true),
      icon: ArrowIcon,
      style: {
        width: '100%',
        padding: '0.85rem'
      }
    }, "Sign in with your DTTT Account"), /*#__PURE__*/React.createElement(SignInNote, null));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FlowHead, {
    title: "Welcome back.",
    body: "Your details are pre-filled from your DTTT Account. The form just confirms them \u2014 a few seconds and you're done."
  }), /*#__PURE__*/React.createElement(PrefillCard, null), /*#__PURE__*/React.createElement(EmbedSlot, {
    note: "Typeform \xB7 details confirmed from your DTTT Account (hidden fields)"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setDone(true),
    icon: ArrowIcon,
    style: {
      width: '100%',
      padding: '0.85rem',
      marginTop: '1.4rem'
    }
  }, "Confirm registration"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAuthed(false),
    style: {
      display: 'block',
      margin: '0.9rem auto 0',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--fdb-font-mono)',
      fontSize: '0.66rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "prototype \xB7 sign out"));
}

// ── DELEGATE ───────────────────────────────────────────────────────────────
function DelegateFlow() {
  const [done, setDone] = useState(false);
  if (done) return /*#__PURE__*/React.createElement(Confirmed, {
    lines: ["Day Two · Keynote Day (delegate)", "X. Awards · evening"],
    paid: true,
    onReset: () => setDone(false)
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FlowHead, {
    title: "Register as a delegate",
    body: "Not a DTTT member? Register here. A short form tailors your options \u2014 DMO, commercial partner or individual \u2014 and payment is taken on the final step."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement(StepLine, {
    n: "1",
    t: "Tell us who you are",
    s: "Branching questions set the right delegate type and price."
  }), /*#__PURE__*/React.createElement(StepLine, {
    n: "2",
    t: "Choose your days",
    s: "Keynote Day and the X. Awards evening are open to delegates."
  }), /*#__PURE__*/React.createElement(StepLine, {
    n: "3",
    t: "Pay & confirm",
    s: "Secure payment on the last screen; confirmation by email."
  })), /*#__PURE__*/React.createElement(EmbedSlot, {
    note: "Typeform \xB7 branching rules + payment on the final screen"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setDone(true),
    icon: ArrowIcon,
    style: {
      width: '100%',
      padding: '0.85rem',
      marginTop: '1.4rem'
    }
  }, "Start delegate registration"));
}

// ── INVITED ──────────────────────────────────────────────────────────────────
function InvitedFlow() {
  const [code, setCode] = useState('');
  const [done, setDone] = useState(false);
  if (done) return /*#__PURE__*/React.createElement(Confirmed, {
    lines: ["Day One · Leadership Meeting", "X. Awards · evening"],
    onReset: () => setDone(false)
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FlowHead, {
    title: "Invitation code",
    body: "The Leadership Meeting is a private, invite-only room. Enter the code from your invitation to register."
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      marginBottom: '0.4rem'
    }
  }, "Your code"), /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: e => setCode(e.target.value.toUpperCase()),
    placeholder: "FDB-XXXX-XXXX",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--fdb-font-mono)',
      fontSize: '0.95rem',
      letterSpacing: '0.12em',
      color: 'var(--fdb-ink)',
      background: 'var(--fdb-cream)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '0.7rem 0.8rem'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: () => code.trim() && setDone(true),
    icon: ArrowIcon,
    style: {
      width: '100%',
      padding: '0.85rem',
      opacity: code.trim() ? 1 : 0.5
    }
  }, "Verify & register"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--fdb-ink-faint)',
      lineHeight: 1.5,
      marginTop: '1rem',
      textAlign: 'center'
    }
  }, "Believe you should be in the room but have no code? ", /*#__PURE__*/React.createElement("button", {
    onClick: () => setDone(false),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--fdb-purple)',
      fontFamily: 'inherit',
      fontSize: '0.74rem',
      borderBottom: '1px solid var(--fdb-purple-soft)'
    }
  }, "Request an invitation"), "."));
}

// ── shared bits ───────────────────────────────────────────────────────────────
function FlowHead({
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.86rem',
      color: 'var(--fdb-ink-mid)',
      lineHeight: 1.6,
      maxWidth: '46ch',
      margin: 0
    }
  }, body));
}
function SignInNote() {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-faint)',
      lineHeight: 1.5,
      marginTop: '1rem',
      textAlign: 'center'
    }
  }, "Signing in opens your DTTT Account, then returns you here to finish.");
}
function StepLine({
  n,
  t,
  s
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.85rem',
      alignItems: 'flex-start',
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--fdb-purple)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.76rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5,
      marginTop: '0.1rem'
    }
  }, s)));
}
function PrefillCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.85rem',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    value: "Member name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Organisation",
    value: "Member organisation"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Role",
    value: "Head of brand"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    value: "member@organisation.ie"
  }));
}
function Field({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '0.56rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-mid)',
      background: 'var(--fdb-cream)',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '0.55rem 0.65rem'
    }
  }, value));
}
function EmbedSlot({
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px dashed var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '1.5rem 1.25rem',
      background: 'var(--fdb-cream)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--fdb-font-mono)',
      fontSize: '0.64rem',
      color: 'var(--fdb-ink-faint)',
      lineHeight: 1.5
    }
  }, note));
}
function Confirmed({
  lines,
  paid,
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '0.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: "programme",
    size: 52,
    sw: 3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.5rem'
    }
  }, "You're registered."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.86rem',
      color: 'var(--fdb-ink-mid)',
      lineHeight: 1.6,
      maxWidth: '40ch',
      margin: '0 auto 1.4rem'
    }
  }, "A confirmation is on its way", paid ? ', including your payment receipt' : '', ". We'll send joining details closer to December."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '0.4rem',
      marginBottom: '1.5rem',
      textAlign: 'left'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.82rem',
      fontWeight: 600,
      color: 'var(--fdb-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--fdb-purple)'
    }
  }), l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onReset
  }, "Amend registration")));
}
window.RegisterPage = RegisterPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-register.jsx", error: String((e && e.message) || e) }); }

// site/page-workstream.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
// FDB 2026 - Day Three · The Trends Workstream
// Register: generative, forward-looking, almost optimistic. The most open and
// airy treatment. The workstream motif breaks formation and drifts forward. Not
// a report launch - the report does not exist yet. It gets built in the room.

const TREND_TABLES = [{
  title: 'Agentic discovery',
  prov: 'When an AI agent plans the trip, what is a destination optimising for.'
}, {
  title: 'The post-search destination',
  prov: 'Visibility and demand without a results page to rank on.'
}, {
  title: 'Synthetic content and trust',
  prov: 'Provenance as a brand asset when anything can be generated.'
}, {
  title: 'Regenerative demand',
  prov: 'Shaping where visitors go, not only how many arrive.'
}, {
  title: 'The resident-visitor balance',
  prov: 'Social licence to grow, and the marketing that protects it.'
}, {
  title: 'Value beyond arrivals',
  prov: 'Measuring contribution when headline numbers stop meaning much.'
}, {
  title: 'The AI-native team',
  prov: 'The capability a destination organisation needs to hold inside.'
}, {
  title: 'Sovereignty and data',
  prov: "Who owns a destination's signal, and what that is worth."
}];
function WorkstreamPage() {
  const {
    nav
  } = useNav();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DayHero, {
    station: "workstream",
    eyebrow: "Day Three \xB7 04 December \xB7 Trends workstream",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The day the", /*#__PURE__*/React.createElement("br", null), "next year gets", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "written.")),
    lead: "A members-only working day. The Future Destination Trends 2027 report is built in the room, across eight trend tables. The most generative day of the three.",
    meta: [{
      label: 'Date',
      value: 'Thursday 04 December 2026'
    }, {
      label: 'Audience',
      value: 'DTTT members only'
    }, {
      label: 'Format',
      value: 'Working day · capped per table'
    }, {
      label: 'Output',
      value: 'Future Destination Trends 2027'
    }]
  }), /*#__PURE__*/React.createElement("hr", {
    className: "fdb-rule"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '3.5rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "What this is"), /*#__PURE__*/React.createElement(Statement, {
    style: {
      marginTop: '1.25rem',
      marginBottom: '1.5rem'
    }
  }, "This is not a report launch. The report ", /*#__PURE__*/React.createElement(Accent, null, "does not exist yet."), " It gets built in this room."), /*#__PURE__*/React.createElement(BodyText, null, "Members move between eight trend tables. Each table writes a position. The positions become the published Future Destination Trends 2027 report, and contributors are named on every trend they shaped. After Dublin, the tables continue as quarterly working groups through 2027. The room does not watch the future. It writes it.")), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Eight trend tables"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)'
    }
  }, "Move freely. Shape what you know.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem'
    }
  }, TREND_TABLES.map((t, i) => /*#__PURE__*/React.createElement(TableCard, _extends({
    key: i,
    n: i + 1
  }, t))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      marginBottom: '2rem'
    }
  }, "From the room to the year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    }
  }, [{
    n: '01',
    h: 'In the room',
    b: 'Members rotate through the tables, building on each other across the day.'
  }, {
    n: '02',
    h: 'A written position',
    b: 'Each table commits a position to the page. Sharp, attributable, defensible.'
  }, {
    n: '03',
    h: 'The published report',
    b: 'Positions become Future Destination Trends 2027, distributed across the sector.'
  }, {
    n: '04',
    h: 'Quarterly working groups',
    b: 'Tables continue through 2027. The conversation does not end in Dublin.'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      position: 'relative',
      paddingRight: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginBottom: '0.85rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: 'var(--fdb-purple)',
      borderRadius: 2
    }
  }), i < 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--fdb-purple-soft)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--fdb-purple)',
      marginBottom: '0.5rem'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.5rem',
      lineHeight: 1.2
    }
  }, s.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      paddingRight: '0.5rem'
    }
  }, s.b))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: '3rem',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: '1rem'
    }
  }, "The privilege of membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.9rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: 'var(--fdb-ink)',
      marginBottom: '1rem'
    }
  }, "Your name on the work."), /*#__PURE__*/React.createElement(BodyText, null, "Day Three is open to DTTT members. Every contributor is named in the published report, against each trend they helped shape. Contribution is visible, and it carries into the working groups that run through the year."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => nav('/register')
  }, "Join as a member"))), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 12,
    strokeWidth: 1.5
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-white)',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 4,
      padding: '2rem 2.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, "Future Destination Trends 2027"), /*#__PURE__*/React.createElement(Mark, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.1rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.4rem'
    }
  }, "Trend 01 \xB7 Agentic discovery"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      marginBottom: '0.75rem'
    }
  }, "Contributors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.4rem 0.4rem'
    }
  }, ['Head of strategy, member NTO', 'Head of insight, member DMO', 'Head of innovation, member NTO', 'Your name here'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: '0.72rem',
      fontWeight: 600,
      color: i === 3 ? 'var(--fdb-purple)' : 'var(--fdb-ink-mid)',
      border: `1px solid ${i === 3 ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)'}`,
      borderRadius: 2,
      padding: '0.25rem 0.55rem',
      fontStyle: i === 3 ? 'normal' : 'normal'
    }
  }, c))))))), /*#__PURE__*/React.createElement("section", {
    className: "fdb-wrap",
    style: {
      paddingTop: '4.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
      borderTop: '1px solid var(--fdb-border)',
      paddingTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.025em',
      color: 'var(--fdb-ink)',
      maxWidth: '28ch',
      textWrap: 'pretty'
    }
  }, "The room does not watch the future. ", /*#__PURE__*/React.createElement(Accent, null, "It writes it.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: ChatIcon,
    onClick: () => nav('/register')
  }, "Become a member"))));
}

// An open, generative table card - light, airy, the workstream register.
function TableCard({
  n,
  title,
  prov
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-purple-soft)'}`,
      background: hover ? 'var(--fdb-purple-tint)' : 'transparent',
      borderRadius: 4,
      padding: '1.25rem 1.25rem 1.4rem',
      transition: 'background 0.15s, border-color 0.15s',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Motif, {
    state: "workstream",
    size: 32,
    sw: 3.4,
    muted: !hover
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Table ", String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.02rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.2,
      marginBottom: '0.5rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.55,
      marginBottom: '1rem'
    }
  }, prov), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--fdb-purple)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)'
    }
  }, "Position forming")));
}
window.WorkstreamPage = WorkstreamPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/page-workstream.jsx", error: String((e && e.message) || e) }); }

// site/x-glyph-path.js
try { (() => {
window.FDB_X = {
  "d": "M48.2399 14.9833L138.754 0C155.18 24.8056 166.765 52.1083 173.508 81.9087C190.452 57.7688 203.247 40.871 211.892 31.2151C223.477 18.2296 232.986 9.82235 240.421 5.99329C248.029 1.99775 256.069 0 264.541 0C274.05 0 281.312 2.49721 286.327 7.49162C291.514 12.486 294.108 19.2285 294.108 27.719C294.108 35.7101 291.514 42.2861 286.327 47.4471C281.312 52.4412 275.002 54.9385 267.394 54.9385C261.861 54.9385 255.464 54.0231 248.202 52.1917C241.113 50.194 236.185 49.1952 233.419 49.1952C226.157 49.1952 219.24 51.6925 212.67 56.6866C203.679 63.5121 192.614 78.0797 179.473 100.388C194.17 150.332 205.927 180.798 214.745 191.786C219.932 198.279 225.206 201.525 230.566 201.525C235.061 201.525 238.952 200.443 242.237 198.279C247.251 194.783 254.945 186.042 265.319 172.058L274.656 177.302C259.44 200.942 244.571 217.59 230.047 227.246C218.981 234.738 208.088 238.484 197.368 238.484C186.303 238.484 177.052 236.153 169.618 231.491C162.356 226.663 155.872 218.922 150.166 208.267C144.46 197.446 137.717 180.216 129.936 156.575C109.707 181.381 93.7997 199.527 82.2152 211.014C70.8038 222.335 61.294 229.743 53.6862 233.239C46.0785 236.736 37.9522 238.484 29.307 238.484C20.316 238.484 13.2271 235.986 8.03999 230.992C2.67999 225.998 0 219.504 0 211.514C0 203.023 2.8529 196.031 8.55867 190.537C14.2645 185.043 21.5264 182.297 30.3444 182.297C35.0128 182.297 40.2863 183.628 46.165 186.292C54.8102 190.288 61.0348 192.285 64.8384 192.285C69.8525 192.285 74.3482 191.286 78.325 189.288C83.5117 186.791 90.0822 181.381 98.0357 173.057C102.877 167.896 111.782 156.908 124.749 140.093C108.151 80.8266 95.1829 45.366 85.8462 33.7123C79.9673 26.2207 72.5327 22.4749 63.5418 22.4749C58.8735 22.4749 53.1678 23.1408 46.4244 24.4726L48.2399 14.9833Z",
  "vb": "0 0 296 239",
  "ar": 1.2385
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/x-glyph-path.js", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Delete (opens a Cancel/Delete confirm
 *      dialog). Drag the rail's right edge to resize; width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, and via the `no-rail`
 *      attribute. Rail mutations dispatch a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }
    :host([data-rail-anim]) .tapzones { transition: left 200ms cubic-bezier(.3,.7,.4,1); }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .tapzones, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-noncommentable', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-noncommentable', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-noncommentable', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-noncommentable', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, tapzones, overlay, menu, confirm);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._tapzones = tapzones;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        if (this._tapzones) this._tapzones.style.left = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region. Tapzones just inset from rw.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      if (this._tapzones) this._tapzones.style.left = rw + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTapBack(e) {
      e.preventDefault();
      this._advance(-1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._advance(1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/components-standalone.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Atomic components
// Mark, Wordmark, Header, Footer, Eyebrow, SectionLabel, Tag, Pill, Button,
// MetaRow, ProgrammeRow, SessionCard, ParticipantCell, OutputItem, PolicyBar,
// SpeakerFrame
// All shared on window so other JSX files can import them.

const {
  useState
} = React;

// ─── BRAND MARKS ───────────────────────────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#8239C1",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#9B6FE0",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#C9AAEE",
    strokeWidth: sw
  }));
}
function MarkLarge({
  size = 140
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 144 144",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#8239C1",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "30",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#9B6FE0",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "58",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#C9AAEE",
    strokeWidth: "2"
  }));
}
function Wordmark({
  size = 'sm'
}) {
  const fs = size === 'lg' ? '1.6rem' : size === 'md' ? '1rem' : '0.82rem';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, "Future Destination ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand."));
}

// ─── TYPO PRIMITIVES ────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      padding: '2.5rem 0 1.5rem',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '680px',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '620px',
      marginTop: '0.85rem',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}

// ─── TAGS / PILLS / BUTTONS ────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.2rem 0.5rem',
    marginRight: '0.35rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    dark: {
      background: 'var(--fdb-ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.64rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      padding: '0.28rem 0.65rem',
      borderRadius: '2px'
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.75rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s'
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.72rem',
      padding: '0 0 1px',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong, rgba(26,26,26,0.18))'}`,
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant]
    }
  }, icon, children);
}
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));

// ─── HEADER / FOOTER ────────────────────────────────────────────────────────
function Header({
  currentPath = '/',
  onNav,
  dark = false,
  onToggleDark
}) {
  const link = (path, label) => {
    const active = currentPath === path;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav?.(path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.72rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        padding: '0 0 2px',
        borderBottom: active ? '1px solid var(--fdb-purple)' : '1px solid transparent',
        transition: 'color 0.15s, border-color 0.15s'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)';
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav?.('/'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.bannerDark : window.__resources.banner,
    alt: "Future Destination Brand.",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, "Dublin \xB7 December 2026")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    }
  }, link('/', 'Overview'), link('/leadership', 'Leadership Day'), link('/summit', 'Summit'), link('/awards', 'X. Awards'), /*#__PURE__*/React.createElement(Pill, null, "Invite Only"), /*#__PURE__*/React.createElement(DarkToggle, {
    dark: dark,
    onToggle: onToggleDark
  })));
}
function Footer({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.25rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.25rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.bannerDark : window.__resources.banner,
    alt: "Future Destination Brand.",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), ' · Digital Tourism Think Tank')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostPartner, {
    dark: dark
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Ireland EU Council Presidency \xB7 H2 2026")));
}

// ─── HOST PARTNER LOCKUP ────────────────────────────────────────────────────
// Fáilte Ireland is the host partner of FDB 2026. Its logo is full-colour green
// and stays full-colour on both treatments; on dark it sits on a small light
// plate so the green type stays legible. Use in footers and host headers.
function HostPartner({
  dark = false,
  label = 'Host partner'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: dark ? '4px 8px' : 0,
      background: dark ? '#fff' : 'transparent',
      borderRadius: dark ? 3 : 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.failteIreland,
    alt: "F\xE1ilte Ireland",
    style: {
      height: 22,
      width: 'auto',
      display: 'block'
    }
  })));
}

// ─── DARK MODE TOGGLE ───────────────────────────────────────────────────────
function DarkToggle({
  dark,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    title: dark ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      background: 'none',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '6px 8px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--fdb-ink-muted)',
      transition: 'border-color 0.15s, color 0.15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-purple)';
      e.currentTarget.style.color = 'var(--fdb-purple)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-border-strong)';
      e.currentTarget.style.color = 'var(--fdb-ink-muted)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, dark ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })));
}

// ─── META ROW ───────────────────────────────────────────────────────────────
function MetaRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 80,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 600,
      color: 'var(--fdb-ink)'
    }
  }, value));
}

// ─── PROGRAMME ──────────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0 2rem',
      padding: '1.5rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: 'var(--fdb-purple)',
      paddingTop: '0.1rem'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.35rem',
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.62,
      maxWidth: 600
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.55rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)'
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.9rem 1rem',
      background: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ─────────────────────────────────────────────────────
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.75rem 2rem',
      margin: '2.5rem 0',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '2rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '2rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.4rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.55
    }
  }, it.text))));
}

// ─── PARTICIPANTS GRID ──────────────────────────────────────────────────────
function ParticipantsGrid({
  cells
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: '0.5rem'
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: c.tint ? 'var(--fdb-purple-tint)' : 'var(--fdb-cream)',
      padding: '1.25rem',
      gridColumn: c.span ? `span ${c.span}` : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: c.tint ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      marginBottom: '0.35rem'
    }
  }, c.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: c.long ? '0.82rem' : '0.88rem',
      fontWeight: c.tbc ? 500 : 700,
      fontStyle: c.tbc ? 'italic' : 'normal',
      color: c.tbc ? 'var(--fdb-ink-muted)' : c.long ? 'var(--fdb-ink-mid)' : 'var(--fdb-ink)',
      marginBottom: '0.15rem',
      lineHeight: 1.3
    }
  }, c.name), c.org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: c.org
    }
  }))));
}

// ─── OUTPUT ITEM ────────────────────────────────────────────────────────────
function OutputItem({
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.4rem',
      lineHeight: 1.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, desc));
}

// ─── SPEAKER FRAME ──────────────────────────────────────────────────────────
function SpeakerFrame({
  src,
  name,
  org,
  role,
  color = '#6F8FA8'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 260,
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover url(${src})` : color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -10,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, role)));
}

// ─── STACK FRAME ────────────────────────────────────────────────────────────
// Wraps any block in a single offset purple-soft outline (echoing one square
// of the stacked-square brand mark). Use sparingly — on hero blocks, output
// cards, award categories.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}

// ─── HERO STACK DECOR ───────────────────────────────────────────────────────
// The three big offset squares motif used as the hero's right-hand decoration.
// Sits mostly on-canvas with a gentle bleed off the top-right edge.
function HeroStackDecor() {
  const sq = {
    position: 'absolute',
    borderRadius: 8,
    borderStyle: 'solid'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: -80,
      width: 560,
      height: 560,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 100,
      left: 0,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 50,
      left: 50,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-mid)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 0,
      left: 100,
      borderWidth: 3,
      borderColor: 'var(--fdb-purple)'
    }
  }));
}

// ─── EXPORTS ────────────────────────────────────────────────────────────────
Object.assign(window, {
  Mark,
  MarkLarge,
  Wordmark,
  Eyebrow,
  SectionLabel,
  Statement,
  BodyText,
  Accent,
  Tag,
  Pill,
  Button,
  ChatIcon,
  ArrowIcon,
  Header,
  Footer,
  DarkToggle,
  HostPartner,
  MetaRow,
  ProgrammeRow,
  SessionCard,
  PolicyBar,
  ParticipantsGrid,
  OutputItem,
  SpeakerFrame,
  StackFrame,
  HeroStackDecor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/components-standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/components.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Atomic components
// Mark, Wordmark, Header, Footer, Eyebrow, SectionLabel, Tag, Pill, Button,
// MetaRow, ProgrammeRow, SessionCard, ParticipantCell, OutputItem, PolicyBar,
// SpeakerFrame
// All shared on window so other JSX files can import them.

const {
  useState
} = React;

// ─── BRAND MARKS ───────────────────────────────────────────────────────────
function Mark({
  size = 30,
  stroke
}) {
  const sw = stroke ?? (size <= 30 ? 1.5 : size <= 80 ? 2 : 2.5);
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 30 30",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#8239C1",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#9B6FE0",
    strokeWidth: sw
  }), /*#__PURE__*/React.createElement("rect", {
    x: "11",
    y: "11",
    width: "18",
    height: "18",
    rx: "2",
    stroke: "#C9AAEE",
    strokeWidth: sw
  }));
}
function MarkLarge({
  size = 140
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 144 144",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#8239C1",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "30",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#9B6FE0",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "58",
    y: "58",
    width: "80",
    height: "80",
    rx: "6",
    stroke: "#C9AAEE",
    strokeWidth: "2"
  }));
}
function Wordmark({
  size = 'sm'
}) {
  const fs = size === 'lg' ? '1.6rem' : size === 'md' ? '1rem' : '0.82rem';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Geist', sans-serif",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--fdb-ink)'
    }
  }, "Future Destination ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fdb-purple)'
    }
  }, "Brand."));
}

// ─── TYPO PRIMITIVES ────────────────────────────────────────────────────────
function Eyebrow({
  children,
  muted,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: muted ? 'var(--fdb-ink-muted)' : 'var(--fdb-purple)',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function SectionLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      padding: '2.5rem 0 1.5rem',
      ...style
    }
  }, children);
}
function Statement({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.45rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      maxWidth: '680px',
      marginBottom: '1.25rem',
      ...style
    }
  }, children);
}
function BodyText({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.92rem',
      lineHeight: 1.75,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '620px',
      marginTop: '0.85rem',
      ...style
    }
  }, children);
}
function Accent({
  children
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-purple)',
      fontWeight: 800
    }
  }, children);
}

// ─── TAGS / PILLS / BUTTONS ────────────────────────────────────────────────
function Tag({
  children,
  variant = 'fill'
}) {
  const base = {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    borderRadius: '2px',
    padding: '0.2rem 0.5rem',
    marginRight: '0.35rem'
  };
  const variants = {
    fill: {
      background: 'var(--fdb-purple-tint)',
      color: 'var(--fdb-purple-deep)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--fdb-purple-soft)',
      color: 'var(--fdb-purple)'
    },
    dark: {
      background: 'var(--fdb-ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variants[variant]
    }
  }, children);
}
function Pill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.64rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple-soft)',
      background: 'var(--fdb-purple-tint)',
      padding: '0.28rem 0.65rem',
      borderRadius: '2px'
    }
  }, children);
}
function Button({
  children,
  variant = 'primary',
  icon,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: "'Geist', sans-serif",
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '0.75rem 1.4rem',
    borderRadius: '3px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s'
  };
  const v = {
    primary: {
      background: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      color: '#fff'
    },
    outline: {
      background: hover ? 'var(--fdb-purple)' : 'transparent',
      color: hover ? '#fff' : 'var(--fdb-purple)',
      border: '1px solid var(--fdb-purple)'
    },
    ghost: {
      background: 'none',
      color: hover ? 'var(--fdb-purple)' : 'var(--fdb-ink-muted)',
      textTransform: 'none',
      letterSpacing: 'normal',
      fontWeight: 600,
      fontSize: '0.72rem',
      padding: '0 0 1px',
      borderBottom: `1px solid ${hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong, rgba(26,26,26,0.18))'}`,
      borderRadius: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v[variant]
    }
  }, icon, children);
}
const ChatIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
}));
const ArrowIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));

// ─── HEADER / FOOTER ────────────────────────────────────────────────────────
function Header({
  currentPath = '/',
  onNav,
  dark = false,
  onToggleDark
}) {
  const link = (path, label) => {
    const active = currentPath === path;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onNav?.(path),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.72rem',
        fontWeight: active ? 700 : 600,
        color: active ? 'var(--fdb-ink)' : 'var(--fdb-ink-muted)',
        padding: '0 0 2px',
        borderBottom: active ? '1px solid var(--fdb-purple)' : '1px solid transparent',
        transition: 'color 0.15s, border-color 0.15s'
      },
      onMouseOver: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-purple)';
      },
      onMouseOut: e => {
        if (!active) e.currentTarget.style.color = 'var(--fdb-ink-muted)';
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--fdb-cream)',
      borderBottom: '1px solid var(--fdb-border)',
      padding: '0 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 88,
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav?.('/'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/fdb-banner-dark.png" : "../../assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 38,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-muted)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, "Dublin \xB7 December 2026")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem'
    }
  }, link('/', 'Overview'), link('/leadership', 'Leadership Day'), link('/summit', 'Summit'), link('/awards', 'X. Awards'), /*#__PURE__*/React.createElement(Pill, null, "Invite Only"), /*#__PURE__*/React.createElement(DarkToggle, {
    dark: dark,
    onToggle: onToggleDark
  })));
}
function Footer({
  dark = false
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--fdb-border)',
      padding: '1.25rem 3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.25rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/fdb-banner-dark.png" : "../../assets/logos/fdb-banner.png",
    alt: "Future Destination Brand.",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)',
      borderLeft: '1px solid var(--fdb-border-strong)',
      paddingLeft: '1rem'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fdb-ink-muted)',
      fontWeight: 600
    }
  }, "2026 Edition"), ' · Digital Tourism Think Tank')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostPartner, {
    dark: dark
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--fdb-ink-faint)'
    }
  }, "Ireland EU Council Presidency \xB7 H2 2026")));
}

// ─── HOST PARTNER LOCKUP ────────────────────────────────────────────────────
// Fáilte Ireland is the host partner of FDB 2026. Its logo is full-colour green
// and stays full-colour on both treatments; on dark it sits on a small light
// plate so the green type stays legible. Use in footers and host headers.
function HostPartner({
  dark = false,
  label = 'Host partner'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.58rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: dark ? '4px 8px' : 0,
      background: dark ? '#fff' : 'transparent',
      borderRadius: dark ? 3 : 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/failte-ireland.png",
    alt: "F\xE1ilte Ireland",
    style: {
      height: 22,
      width: 'auto',
      display: 'block'
    }
  })));
}

// ─── DARK MODE TOGGLE ───────────────────────────────────────────────────────
function DarkToggle({
  dark,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    title: dark ? 'Switch to light mode' : 'Switch to dark mode',
    style: {
      background: 'none',
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 3,
      padding: '6px 8px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--fdb-ink-muted)',
      transition: 'border-color 0.15s, color 0.15s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-purple)';
      e.currentTarget.style.color = 'var(--fdb-purple)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'var(--fdb-border-strong)';
      e.currentTarget.style.color = 'var(--fdb-ink-muted)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, dark ? /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })));
}

// ─── META ROW ───────────────────────────────────────────────────────────────
function MetaRow({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-ink-faint)',
      width: 80,
      flexShrink: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 600,
      color: 'var(--fdb-ink)'
    }
  }, value));
}

// ─── PROGRAMME ──────────────────────────────────────────────────────────────
function ProgrammeRow({
  time,
  title,
  desc,
  tags = [],
  speakers = [],
  children,
  isFirst
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '0 2rem',
      padding: '1.5rem 0',
      borderTop: isFirst ? '1px solid var(--fdb-border)' : 'none',
      borderBottom: '1px solid var(--fdb-border)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.05em',
      color: 'var(--fdb-purple)',
      paddingTop: '0.1rem'
    }
  }, time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.35rem',
      lineHeight: 1.35
    }
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.62,
      maxWidth: 600
    }
  }, desc), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.55rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: '0.6rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.75rem',
      fontWeight: s.tbc ? 500 : 600,
      color: s.tbc ? 'var(--fdb-ink-muted)' : 'var(--fdb-ink)',
      fontStyle: s.tbc ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: s.tbc ? 'var(--fdb-ink-faint)' : 'var(--fdb-purple)'
    }
  }), s.name)), children));
}
function SessionCard({
  label,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '0.9rem 1rem',
      background: 'rgba(255,255,255,0.6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.6rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.3rem'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.83rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.25rem',
      lineHeight: 1.3
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.5
    }
  }, desc));
}

// ─── POLICY CALLOUT BAR ─────────────────────────────────────────────────────
function PolicyBar({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--fdb-purple)',
      borderRadius: 4,
      padding: '1.75rem 2rem',
      margin: '2.5rem 0',
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      gap: '2rem'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingLeft: i === 0 ? 0 : '2rem',
      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple-soft)',
      marginBottom: '0.4rem'
    }
  }, it.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.88)',
      lineHeight: 1.55
    }
  }, it.text))));
}

// ─── PARTICIPANTS GRID ──────────────────────────────────────────────────────
function ParticipantsGrid({
  cells
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden',
      marginTop: '0.5rem'
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: c.tint ? 'var(--fdb-purple-tint)' : 'var(--fdb-cream)',
      padding: '1.25rem',
      gridColumn: c.span ? `span ${c.span}` : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: c.tint ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)',
      marginBottom: '0.35rem'
    }
  }, c.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: c.long ? '0.82rem' : '0.88rem',
      fontWeight: c.tbc ? 500 : 700,
      fontStyle: c.tbc ? 'italic' : 'normal',
      color: c.tbc ? 'var(--fdb-ink-muted)' : c.long ? 'var(--fdb-ink-mid)' : 'var(--fdb-ink)',
      marginBottom: '0.15rem',
      lineHeight: 1.3
    }
  }, c.name), c.org && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.4
    },
    dangerouslySetInnerHTML: {
      __html: c.org
    }
  }))));
}

// ─── OUTPUT ITEM ────────────────────────────────────────────────────────────
function OutputItem({
  name,
  desc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      marginBottom: '0.4rem',
      lineHeight: 1.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, desc));
}

// ─── SPEAKER FRAME ──────────────────────────────────────────────────────────
function SpeakerFrame({
  src,
  name,
  org,
  role,
  color = '#6F8FA8'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 260,
      height: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 24,
      left: 24,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: src ? `center/cover url(${src})` : color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, !src && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -10,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, role)));
}

// ─── STACK FRAME ────────────────────────────────────────────────────────────
// Wraps any block in a single offset purple-soft outline (echoing one square
// of the stacked-square brand mark). Use sparingly — on hero blocks, output
// cards, award categories.
function StackFrame({
  children,
  offset = 10,
  color = 'var(--fdb-purple-soft)',
  strokeWidth = 1
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: offset,
      left: offset,
      right: -offset,
      bottom: -offset,
      border: `${strokeWidth}px solid ${color}`,
      borderRadius: 4,
      opacity: 0.7,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}

// ─── HERO STACK DECOR ───────────────────────────────────────────────────────
// The three big offset squares motif used as the hero's right-hand decoration.
// Sits mostly on-canvas with a gentle bleed off the top-right edge.
function HeroStackDecor() {
  const sq = {
    position: 'absolute',
    borderRadius: 8,
    borderStyle: 'solid'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: -80,
      width: 560,
      height: 560,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 100,
      left: 0,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-soft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 50,
      left: 50,
      borderWidth: 2.5,
      borderColor: 'var(--fdb-purple-mid)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...sq,
      width: 380,
      height: 380,
      top: 0,
      left: 100,
      borderWidth: 3,
      borderColor: 'var(--fdb-purple)'
    }
  }));
}

// ─── EXPORTS ────────────────────────────────────────────────────────────────
Object.assign(window, {
  Mark,
  MarkLarge,
  Wordmark,
  Eyebrow,
  SectionLabel,
  Statement,
  BodyText,
  Accent,
  Tag,
  Pill,
  Button,
  ChatIcon,
  ArrowIcon,
  Header,
  Footer,
  DarkToggle,
  HostPartner,
  MetaRow,
  ProgrammeRow,
  SessionCard,
  PolicyBar,
  ParticipantsGrid,
  OutputItem,
  SpeakerFrame,
  StackFrame,
  HeroStackDecor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/pages-standalone.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Page compositions
// Overview (home) · Leadership Day · Summit · X. Awards

const PAGE_WRAP = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 3rem 5rem'
};
const HR = () => /*#__PURE__*/React.createElement("hr", {
  style: {
    border: 'none',
    borderTop: '1px solid var(--fdb-border)',
    margin: 0
  }
});

// ─── OVERVIEW (LANDING) ─────────────────────────────────────────────────────
function OverviewPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Future \xB7 Destination \xB7 Brand \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "A global", /*#__PURE__*/React.createElement("br", null), "gathering of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "CMOs of leading", /*#__PURE__*/React.createElement("br", null), "destinations.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "Two days in Dublin. A working leadership day on AI in destination management, a senior marketing summit and the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => onNav('/leadership')
  }, "View programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Request an invitation")))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The two days"), /*#__PURE__*/React.createElement(Statement, null, "FDB 2026 is convened by ", /*#__PURE__*/React.createElement(Accent, null, "F\xE1ilte Ireland"), " under Ireland's EU Council Presidency and facilitated by the ", /*#__PURE__*/React.createElement(Accent, null, "Digital Tourism Think Tank.")), /*#__PURE__*/React.createElement(BodyText, null, "The room is small by design. Outputs reach EU institutions, national governments and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 1 \xB7 Leadership Programme",
    title: "Leadership in the Age of AI.",
    desc: "Invite-only working day for ~30\u201340 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format, no stage. Outputs published to EU institutions.",
    cta: "Day 1 programme",
    onClick: () => onNav('/leadership')
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 2 \xB7 Summit",
    title: "The state of destination brand.",
    desc: "The annual gathering of destination CMOs and senior marketers, followed in the evening by the X. Awards \u2014 the sector's most respected recognition of branding, transformation and digital innovation.",
    cta: "Day 2 programme",
    onClick: () => onNav('/summit')
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    n: '30–40',
    l: 'Senior leaders in the room'
  }, {
    n: '8–10',
    l: 'Active contributors'
  }, {
    n: '2',
    l: 'Published policy outputs'
  }, {
    n: '1',
    l: 'EU Presidency submission'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-purple)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.5rem',
      lineHeight: 1.4
    }
  }, s.l)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Hosted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '3rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostLogo, null, "F\xE1ilte", /*#__PURE__*/React.createElement("br", null), "Ireland"), /*#__PURE__*/React.createElement(HostLogo, null, "Digital Tourism", /*#__PURE__*/React.createElement("br", null), "Think Tank"), /*#__PURE__*/React.createElement(HostLogo, null, "Irish EU Council", /*#__PURE__*/React.createElement("br", null), "Presidency"))));
}
function DayCard({
  label,
  title,
  desc,
  cta,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '1.75rem 1.75rem 1.5rem',
      background: 'rgba(255,255,255,0.4)',
      borderColor: hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)',
      transition: 'border-color 0.15s',
      cursor: 'pointer'
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.75rem'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.75rem',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)'
    }
  }, cta, " \u2192"));
}
function HostLogo({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--fdb-ink-faint)',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.2
    }
  }, children));
}

// ─── LEADERSHIP DAY (canonical recreation) ──────────────────────────────────
function LeadershipPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day One \xB7 Leadership Programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "Leadership", /*#__PURE__*/React.createElement("br", null), "in the Age", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement(Accent, null, "AI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "A global leadership day for national tourism organisation CEOs, senior government ministers and the technology leaders shaping AI's role in destination marketing and management."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Location",
    value: "Dublin, Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Invite-only \xB7 30 to 40 participants"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Host",
    value: "F\xE1ilte Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Presidency",
    value: "Irish EU Council Presidency \xB7 H2 2026"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About the day"), /*#__PURE__*/React.createElement(Statement, null, "AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is ", /*#__PURE__*/React.createElement(Accent, null, "not whether to engage."), " It is whether leadership is ready."), /*#__PURE__*/React.createElement(BodyText, null, "Leadership in the Age of AI is a structured, invite-only day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level. The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design."), /*#__PURE__*/React.createElement(BodyText, null, "The day is convened by F\xE1ilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. It precedes Future. Destination. Brand. 2026, DTTT's flagship annual summit."), /*#__PURE__*/React.createElement(PolicyBar, {
    items: [{
      label: 'For destinations',
      text: "A mechanism for the sector to speak with one voice on AI policy, rather than leaving that agenda to platform companies alone."
    }, {
      label: 'For technology leaders',
      text: "Direct engagement with the leaders responsible for tourism at national scale, and a role in shaping the sector's position on AI governance."
    }, {
      label: 'For EU institutions',
      text: "A structured, expert contribution to the AI and digital policy agenda from one of the sector's most senior international forums."
    }]
  }), /*#__PURE__*/React.createElement(BodyText, null, "The outputs of this day are submitted to EU institutions as a sector contribution during the Irish Presidency and distributed to the technology companies shaping the tools and regulations that govern destination marketing. What participants bring to this table does not stay in the room."), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement(SectionLabel, null, "Programme"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "08:30",
    title: "Private breakfast",
    desc: "Seated breakfast for all participants. Introductions happen informally before the working day begins."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Welcome and framing",
    desc: "F\xE1ilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method.",
    speakers: [{
      name: 'Caroline Bocquel, CEO · Fáilte Ireland'
    }, {
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Opening provocation",
    desc: "A senior voice with direct experience of NTO leadership and the AI and data investment landscape delivers a deliberate challenge to the room. Twenty minutes, no slides.",
    tags: ['Provocation', 'Open response'],
    speakers: [{
      name: 'Oliver Csendes · Former CEO, Visit Hungary'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:00",
    title: "AI in destination leadership: a shared framework",
    desc: "DTTT introduces the AI Transparency Framework as a leadership instrument. Illustrated with practice from NTOs already deploying it nationally.",
    tags: ['Framework', 'Peer testimony'],
    speakers: [{
      name: 'NTO leaders engaged in AI governance programmes · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Working sessions",
    desc: "Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session A",
    title: "AI readiness and organisational leadership",
    desc: "What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."
  }), /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session B",
    title: "AI and destination competitiveness",
    desc: "How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."
  }))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "13:00",
    title: "Private lunch",
    desc: "Seated, hosted, informal. The conversation continues."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Big Tech intelligence briefing",
    desc: "A senior representative from one of Dublin's major technology companies delivers a briefing on what the platforms are building and what they are observing in travel and destination search.",
    tags: ['Intelligence briefing'],
    speakers: [{
      name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "The European policy landscape",
    desc: "A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective.",
    tags: ['Policy'],
    speakers: [{
      name: 'EU institutional or government representative · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Synthesis and shared conclusions",
    desc: "DTTT facilitates a structured synthesis of the day's working sessions. The output is a small number of documented priorities forming the basis of the Executive Briefing Summary submitted to EU institutions.",
    tags: ['Policy output']
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Dublin city experience",
    desc: "A curated late afternoon in Dublin, in partnership with F\xE1ilte Ireland's Winter in Dublin programme. Details to be confirmed."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "19:30",
    title: "X. Awards",
    desc: "Transition to the X. Awards evening. The industry's most respected recognition of destination branding, transformation and digital innovation."
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Who is in the room"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated by invitation only."), /*#__PURE__*/React.createElement(ParticipantsGrid, {
    cells: [{
      type: 'Host',
      name: 'Caroline Bocquel',
      org: 'CEO · Fáilte Ireland'
    }, {
      type: 'Provocation',
      name: 'Oliver Csendes',
      org: 'Former CEO · Visit Hungary<br/>UN Tourism advisor'
    }, {
      type: 'Facilitation',
      name: 'Nick Hall',
      org: 'CEO · Digital Tourism Think Tank'
    }, {
      type: 'Technology briefing',
      name: 'Senior representative',
      org: 'Google / Microsoft / OpenAI<br/>Dublin · TBC',
      tbc: true
    }, {
      type: 'Policy voice',
      name: 'EU institutional representative',
      org: 'European institution or government<br/>TBC',
      tbc: true
    }, {
      type: 'NTO leadership',
      name: 'North American CEO',
      org: 'National or major regional tourism organisation · TBC',
      tbc: true
    }, {
      type: 'Further participants',
      long: true,
      span: 3,
      tint: true,
      name: '20 to 30 additional NTO and DMO chief executives and C-suite leaders, by personal invitation.'
    }]
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Published outputs"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day produces two formal outputs, both published after the event and distributed beyond the room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "State of Destination AI Report",
    desc: "A comprehensive synthesis of insights from the leadership day. Published post-event, distributed across the industry and submitted to relevant EU institutions."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Executive Briefing Summary",
    desc: "A structured summary of the leadership day's conclusions and priority recommendations. Concise, formal, designed to be read by policy audiences."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3.5rem',
      paddingTop: '2.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, "The outputs of this day reach ", /*#__PURE__*/React.createElement(Accent, null, "EU institutions, national governments"), " and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-muted)',
      marginBottom: '1.5rem'
    }
  }, "Places on the leadership day are by personal invitation only. To discuss participation, please get in touch."), /*#__PURE__*/React.createElement(Button, {
    icon: ChatIcon
  }, "Get in touch")))));
}

// ─── SUMMIT (DAY 2) ─────────────────────────────────────────────────────────
function SummitPage() {
  const speakers = [{
    name: 'Nick Hall',
    org: 'Digital Tourism Think Tank',
    role: 'CEO · Host',
    color: '#6F8FA8'
  }, {
    name: 'Caroline Bocquel',
    org: 'Fáilte Ireland',
    role: 'CEO',
    color: '#94816A'
  }, {
    name: 'Speaker TBC',
    org: 'European NTO',
    role: 'Provocation',
    color: '#A09EB4'
  }, {
    name: 'Speaker TBC',
    org: 'Major NTO · Asia-Pacific',
    role: 'Keynote',
    color: '#7B8C7A'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Summit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The state", /*#__PURE__*/React.createElement("br", null), "of destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The annual gathering of destination CMOs and senior marketers. A working programme on positioning, narrative and digital channels, followed in the evening by the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Audience",
    value: "Senior destination marketers"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Summit + X. Awards evening"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Speakers"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2.5rem'
    }
  }, "A confirmed and TBC line-up of senior destination, brand and platform leaders. Full schedule and additional speakers are released closer to the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem 1.5rem',
      rowGap: '5rem',
      marginTop: '0.5rem'
    }
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 9,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: s.color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -8,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, s.org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, s.role))))), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      paddingTop: '6rem'
    }
  }, "What the summit covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Destination positioning in AI search",
    desc: "How visitors discover places when an answer-engine sits between them and the brand."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The new visitor brief",
    desc: "Narrative, voice, and the shift from campaign to permanent content surface."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Measurement after the funnel",
    desc: "Reporting destination marketing performance to boards and ministers in 2026."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The X. Awards",
    desc: "Recognising the year's strongest work in branding, transformation and digital innovation."
  })))));
}

// ─── X. AWARDS ──────────────────────────────────────────────────────────────
function AwardsPage({
  dark
}) {
  const cats = [{
    name: 'Destination Brand of the Year',
    desc: 'The strongest national or regional brand expression of 2026.'
  }, {
    name: 'Digital Transformation',
    desc: 'Most ambitious end-to-end digital programme inside an NTO/DMO.'
  }, {
    name: 'Sustainable Tourism Communications',
    desc: 'Most credible, measurable sustainability narrative.'
  }, {
    name: 'AI in Destination Marketing',
    desc: 'Material, deployed use of AI — not a pitch deck.'
  }, {
    name: 'Best Campaign',
    desc: 'Single campaign, judged on craft and effect.'
  }, {
    name: 'Emerging Destination',
    desc: 'Newer brands punching above their weight.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Evening"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.xAwardsWordmarkDark : window.__resources.xAwardsWordmark,
    alt: "X. Awards",
    style: {
      height: 72,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The year's strongest work in ", /*#__PURE__*/React.createElement(Accent, null, "destination branding.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The industry's most respected recognition of destination branding, transformation and digital innovation. Awarded the evening of Day Two."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon
  }, "Submit your entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Past winners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? window.__resources.xAwardsWordmarkDark : window.__resources.xAwardsMark,
    alt: "X. Awards",
    style: {
      width: dark ? 320 : 200,
      height: 'auto',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Categories"), /*#__PURE__*/React.createElement(Statement, null, "Six categories. ", /*#__PURE__*/React.createElement(Accent, null, "One ceremony."), " Judged by a panel of senior destination, brand and policy leaders."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
      marginTop: '2.5rem'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem',
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--fdb-purple)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, c.desc)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Key dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    lbl: 'Entries open',
    val: 'June 2026'
  }, {
    lbl: 'Entries close',
    val: 'October 2026'
  }, {
    lbl: 'Ceremony',
    val: 'December 2026 · Dublin'
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.4rem'
    }
  }, d.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, d.val))))));
}
Object.assign(window, {
  OverviewPage,
  LeadershipPage,
  SummitPage,
  AwardsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/pages-standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/pages.jsx
try { (() => {
/* eslint-disable */
// FDB Marketing Site — Page compositions
// Overview (home) · Leadership Day · Summit · X. Awards

const PAGE_WRAP = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '0 3rem 5rem'
};
const HR = () => /*#__PURE__*/React.createElement("hr", {
  style: {
    border: 'none',
    borderTop: '1px solid var(--fdb-border)',
    margin: 0
  }
});

// ─── OVERVIEW (LANDING) ─────────────────────────────────────────────────────
function OverviewPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Future \xB7 Destination \xB7 Brand \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "A global", /*#__PURE__*/React.createElement("br", null), "gathering of", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "CMOs of leading", /*#__PURE__*/React.createElement("br", null), "destinations.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "Two days in Dublin. A working leadership day on AI in destination management, a senior marketing summit and the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon,
    onClick: () => onNav('/leadership')
  }, "View programme"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Request an invitation")))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "The two days"), /*#__PURE__*/React.createElement(Statement, null, "FDB 2026 is convened by ", /*#__PURE__*/React.createElement(Accent, null, "F\xE1ilte Ireland"), " under Ireland's EU Council Presidency and facilitated by the ", /*#__PURE__*/React.createElement(Accent, null, "Digital Tourism Think Tank.")), /*#__PURE__*/React.createElement(BodyText, null, "The room is small by design. Outputs reach EU institutions, national governments and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 1 \xB7 Leadership Programme",
    title: "Leadership in the Age of AI.",
    desc: "Invite-only working day for ~30\u201340 NTO/DMO CEOs, ministers and senior tech leaders. Boardroom format, no stage. Outputs published to EU institutions.",
    cta: "Day 1 programme",
    onClick: () => onNav('/leadership')
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 10
  }, /*#__PURE__*/React.createElement(DayCard, {
    label: "Day 2 \xB7 Summit",
    title: "The state of destination brand.",
    desc: "The annual gathering of destination CMOs and senior marketers, followed in the evening by the X. Awards \u2014 the sector's most respected recognition of branding, transformation and digital innovation.",
    cta: "Day 2 programme",
    onClick: () => onNav('/summit')
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "By the numbers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1px',
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    n: '30–40',
    l: 'Senior leaders in the room'
  }, {
    n: '8–10',
    l: 'Active contributors'
  }, {
    n: '2',
    l: 'Published policy outputs'
  }, {
    n: '1',
    l: 'EU Presidency submission'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-purple)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.5rem',
      lineHeight: 1.4
    }
  }, s.l)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Hosted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '3rem',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HostLogo, null, "F\xE1ilte", /*#__PURE__*/React.createElement("br", null), "Ireland"), /*#__PURE__*/React.createElement(HostLogo, null, "Digital Tourism", /*#__PURE__*/React.createElement("br", null), "Think Tank"), /*#__PURE__*/React.createElement(HostLogo, null, "Irish EU Council", /*#__PURE__*/React.createElement("br", null), "Presidency"))));
}
function DayCard({
  label,
  title,
  desc,
  cta,
  onClick
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 4,
      padding: '1.75rem 1.75rem 1.5rem',
      background: 'rgba(255,255,255,0.4)',
      borderColor: hover ? 'var(--fdb-purple)' : 'var(--fdb-border-strong)',
      transition: 'border-color 0.15s',
      cursor: 'pointer'
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.75rem'
    }
  }, label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      marginBottom: '0.75rem',
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6,
      marginBottom: '1.5rem'
    }
  }, desc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: hover ? 'var(--fdb-purple-deep)' : 'var(--fdb-purple)'
    }
  }, cta, " \u2192"));
}
function HostLogo({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      border: '1px solid var(--fdb-border-strong)',
      borderRadius: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      background: 'var(--fdb-ink-faint)',
      borderRadius: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.2
    }
  }, children));
}

// ─── LEADERSHIP DAY (canonical recreation) ──────────────────────────────────
function LeadershipPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day One \xB7 Leadership Programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "Leadership", /*#__PURE__*/React.createElement("br", null), "in the Age", /*#__PURE__*/React.createElement("br", null), "of ", /*#__PURE__*/React.createElement(Accent, null, "AI.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "A global leadership day for national tourism organisation CEOs, senior government ministers and the technology leaders shaping AI's role in destination marketing and management."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Location",
    value: "Dublin, Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Invite-only \xB7 30 to 40 participants"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Host",
    value: "F\xE1ilte Ireland"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Presidency",
    value: "Irish EU Council Presidency \xB7 H2 2026"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About the day"), /*#__PURE__*/React.createElement(Statement, null, "AI is reshaping where destinations are discovered, how tourism is managed and how national bodies are led. The question is ", /*#__PURE__*/React.createElement(Accent, null, "not whether to engage."), " It is whether leadership is ready."), /*#__PURE__*/React.createElement(BodyText, null, "Leadership in the Age of AI is a structured, invite-only day for the chief executives, ministers and senior leaders who set tourism's direction at the national and international level. The format is a meeting, not a conference. Boardroom arrangement, no stage, no panels, no commercial agenda. The room is small by design."), /*#__PURE__*/React.createElement(BodyText, null, "The day is convened by F\xE1ilte Ireland under Ireland's EU Council Presidency and facilitated by the Digital Tourism Think Tank. It precedes Future. Destination. Brand. 2026, DTTT's flagship annual summit."), /*#__PURE__*/React.createElement(PolicyBar, {
    items: [{
      label: 'For destinations',
      text: "A mechanism for the sector to speak with one voice on AI policy, rather than leaving that agenda to platform companies alone."
    }, {
      label: 'For technology leaders',
      text: "Direct engagement with the leaders responsible for tourism at national scale, and a role in shaping the sector's position on AI governance."
    }, {
      label: 'For EU institutions',
      text: "A structured, expert contribution to the AI and digital policy agenda from one of the sector's most senior international forums."
    }]
  }), /*#__PURE__*/React.createElement(BodyText, null, "The outputs of this day are submitted to EU institutions as a sector contribution during the Irish Presidency and distributed to the technology companies shaping the tools and regulations that govern destination marketing. What participants bring to this table does not stay in the room."), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement(SectionLabel, null, "Programme"), /*#__PURE__*/React.createElement(ProgrammeRow, {
    isFirst: true,
    time: "08:30",
    title: "Private breakfast",
    desc: "Seated breakfast for all participants. Introductions happen informally before the working day begins."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "09:30",
    title: "Welcome and framing",
    desc: "F\xE1ilte Ireland opens with a statement of intent. DTTT frames the day's central question and working method.",
    speakers: [{
      name: 'Caroline Bocquel, CEO · Fáilte Ireland'
    }, {
      name: 'Nick Hall, CEO · Digital Tourism Think Tank'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "10:00",
    title: "Opening provocation",
    desc: "A senior voice with direct experience of NTO leadership and the AI and data investment landscape delivers a deliberate challenge to the room. Twenty minutes, no slides.",
    tags: ['Provocation', 'Open response'],
    speakers: [{
      name: 'Oliver Csendes · Former CEO, Visit Hungary'
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:00",
    title: "AI in destination leadership: a shared framework",
    desc: "DTTT introduces the AI Transparency Framework as a leadership instrument. Illustrated with practice from NTOs already deploying it nationally.",
    tags: ['Framework', 'Peer testimony'],
    speakers: [{
      name: 'NTO leaders engaged in AI governance programmes · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "11:30",
    title: "Working sessions",
    desc: "Two concurrent structured sessions of 75 minutes each. Participants are pre-assigned. Each session produces documented conclusions feeding directly into the published outputs."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.85rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session A",
    title: "AI readiness and organisational leadership",
    desc: "What AI actually requires of an NTO leadership team. Where the gaps are. What decisions are being deferred."
  }), /*#__PURE__*/React.createElement(SessionCard, {
    label: "Session B",
    title: "AI and destination competitiveness",
    desc: "How AI is reshaping where visitors go and how they choose. What this means for national positioning and investment."
  }))), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "13:00",
    title: "Private lunch",
    desc: "Seated, hosted, informal. The conversation continues."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "14:30",
    title: "Big Tech intelligence briefing",
    desc: "A senior representative from one of Dublin's major technology companies delivers a briefing on what the platforms are building and what they are observing in travel and destination search.",
    tags: ['Intelligence briefing'],
    speakers: [{
      name: 'Senior representative · Google / Microsoft / OpenAI · Dublin · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:15",
    title: "The European policy landscape",
    desc: "A structured contribution on the regulatory and investment landscape around AI from a European institutional or government perspective.",
    tags: ['Policy'],
    speakers: [{
      name: 'EU institutional or government representative · TBC',
      tbc: true
    }]
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "15:45",
    title: "Synthesis and shared conclusions",
    desc: "DTTT facilitates a structured synthesis of the day's working sessions. The output is a small number of documented priorities forming the basis of the Executive Briefing Summary submitted to EU institutions.",
    tags: ['Policy output']
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "16:30",
    title: "Dublin city experience",
    desc: "A curated late afternoon in Dublin, in partnership with F\xE1ilte Ireland's Winter in Dublin programme. Details to be confirmed."
  }), /*#__PURE__*/React.createElement(ProgrammeRow, {
    time: "19:30",
    title: "X. Awards",
    desc: "Transition to the X. Awards evening. The industry's most respected recognition of destination branding, transformation and digital innovation."
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Who is in the room"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day brings together eight to ten active contributors in a room of 30 to 40. Places are allocated by invitation only."), /*#__PURE__*/React.createElement(ParticipantsGrid, {
    cells: [{
      type: 'Host',
      name: 'Caroline Bocquel',
      org: 'CEO · Fáilte Ireland'
    }, {
      type: 'Provocation',
      name: 'Oliver Csendes',
      org: 'Former CEO · Visit Hungary<br/>UN Tourism advisor'
    }, {
      type: 'Facilitation',
      name: 'Nick Hall',
      org: 'CEO · Digital Tourism Think Tank'
    }, {
      type: 'Technology briefing',
      name: 'Senior representative',
      org: 'Google / Microsoft / OpenAI<br/>Dublin · TBC',
      tbc: true
    }, {
      type: 'Policy voice',
      name: 'EU institutional representative',
      org: 'European institution or government<br/>TBC',
      tbc: true
    }, {
      type: 'NTO leadership',
      name: 'North American CEO',
      org: 'National or major regional tourism organisation · TBC',
      tbc: true
    }, {
      type: 'Further participants',
      long: true,
      span: 3,
      tint: true,
      name: '20 to 30 additional NTO and DMO chief executives and C-suite leaders, by personal invitation.'
    }]
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Published outputs"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '1.5rem'
    }
  }, "The day produces two formal outputs, both published after the event and distributed beyond the room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "State of Destination AI Report",
    desc: "A comprehensive synthesis of insights from the leadership day. Published post-event, distributed across the industry and submitted to relevant EU institutions."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Executive Briefing Summary",
    desc: "A structured summary of the leadership day's conclusions and priority recommendations. Concise, formal, designed to be read by policy audiences."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '3.5rem',
      paddingTop: '2.5rem',
      borderTop: '1px solid var(--fdb-border)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)'
    }
  }, "The outputs of this day reach ", /*#__PURE__*/React.createElement(Accent, null, "EU institutions, national governments"), " and the technology companies shaping the tools and regulations that govern destination marketing."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-muted)',
      marginBottom: '1.5rem'
    }
  }, "Places on the leadership day are by personal invitation only. To discuss participation, please get in touch."), /*#__PURE__*/React.createElement(Button, {
    icon: ChatIcon
  }, "Get in touch")))));
}

// ─── SUMMIT (DAY 2) ─────────────────────────────────────────────────────────
function SummitPage() {
  const speakers = [{
    name: 'Nick Hall',
    org: 'Digital Tourism Think Tank',
    role: 'CEO · Host',
    color: '#6F8FA8'
  }, {
    name: 'Caroline Bocquel',
    org: 'Fáilte Ireland',
    role: 'CEO',
    color: '#94816A'
  }, {
    name: 'Speaker TBC',
    org: 'European NTO',
    role: 'Provocation',
    color: '#A09EB4'
  }, {
    name: 'Speaker TBC',
    org: 'Major NTO · Asia-Pacific',
    role: 'Keynote',
    color: '#7B8C7A'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem'
    }
  }, /*#__PURE__*/React.createElement(HeroStackDecor, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Summit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The state", /*#__PURE__*/React.createElement("br", null), "of destination", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Accent, null, "brand.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The annual gathering of destination CMOs and senior marketers. A working programme on positioning, narrative and digital channels, followed in the evening by the X. Awards."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    label: "Date",
    value: "December 2026 (TBC)"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Audience",
    value: "Senior destination marketers"
  }), /*#__PURE__*/React.createElement(MetaRow, {
    label: "Format",
    value: "Summit + X. Awards evening"
  })))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Speakers"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: '2.5rem'
    }
  }, "A confirmed and TBC line-up of senior destination, brand and platform leaders. Full schedule and additional speakers are released closer to the event."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem 1.5rem',
      rowGap: '5rem',
      marginTop: '0.5rem'
    }
  }, speakers.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      opacity: 0.6,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 9,
      left: 9,
      width: '100%',
      height: '100%',
      border: '1px solid var(--fdb-purple-soft)',
      borderRadius: 2,
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      border: '2px solid var(--fdb-purple)',
      borderRadius: 2,
      background: s.color,
      zIndex: 2,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMax meet",
    style: {
      position: 'absolute',
      bottom: -8,
      left: '10%',
      width: '80%',
      height: '90%',
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "50",
    cy: "32",
    rx: "18",
    ry: "22",
    fill: "#2A3F50"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 100 Q20 56 50 56 Q80 56 86 100 Z",
    fill: "#2A3F50"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      paddingTop: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--fdb-ink)',
      lineHeight: 1.15
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--fdb-ink-mid)',
      marginTop: '0.2rem'
    }
  }, s.org), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--fdb-ink-muted)',
      marginTop: '0.1rem'
    }
  }, s.role))))), /*#__PURE__*/React.createElement(SectionLabel, {
    style: {
      paddingTop: '6rem'
    }
  }, "What the summit covers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '3rem 1.75rem'
    }
  }, /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Destination positioning in AI search",
    desc: "How visitors discover places when an answer-engine sits between them and the brand."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The new visitor brief",
    desc: "Narrative, voice, and the shift from campaign to permanent content surface."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "Measurement after the funnel",
    desc: "Reporting destination marketing performance to boards and ministers in 2026."
  })), /*#__PURE__*/React.createElement(StackFrame, {
    offset: 8
  }, /*#__PURE__*/React.createElement(OutputItem, {
    name: "The X. Awards",
    desc: "Recognising the year's strongest work in branding, transformation and digital innovation."
  })))));
}

// ─── X. AWARDS ──────────────────────────────────────────────────────────────
function AwardsPage({
  dark
}) {
  const cats = [{
    name: 'Destination Brand of the Year',
    desc: 'The strongest national or regional brand expression of 2026.'
  }, {
    name: 'Digital Transformation',
    desc: 'Most ambitious end-to-end digital programme inside an NTO/DMO.'
  }, {
    name: 'Sustainable Tourism Communications',
    desc: 'Most credible, measurable sustainability narrative.'
  }, {
    name: 'AI in Destination Marketing',
    desc: 'Material, deployed use of AI — not a pitch deck.'
  }, {
    name: 'Best Campaign',
    desc: 'Single campaign, judged on craft and effect.'
  }, {
    name: 'Emerging Destination',
    desc: 'Newer brands punching above their weight.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: '5rem 3rem 4.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Day Two \xB7 Evening"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.75rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-wordmark.png",
    alt: "X. Awards",
    style: {
      height: 72,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
      color: 'var(--fdb-ink)',
      marginBottom: '1.75rem'
    }
  }, "The year's strongest work in ", /*#__PURE__*/React.createElement(Accent, null, "destination branding.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--fdb-ink-mid)',
      maxWidth: '42ch',
      marginBottom: '2.5rem'
    }
  }, "The industry's most respected recognition of destination branding, transformation and digital innovation. Awarded the evening of Day Two."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: ArrowIcon
  }, "Submit your entry"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Past winners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? "../../assets/logos/dark/x-awards-wordmark-dark.png" : "../../assets/logos/x-awards-mark.png",
    alt: "X. Awards",
    style: {
      width: dark ? 320 : 200,
      height: 'auto',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement(HR, null), /*#__PURE__*/React.createElement("div", {
    style: PAGE_WRAP
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Categories"), /*#__PURE__*/React.createElement(Statement, null, "Six categories. ", /*#__PURE__*/React.createElement(Accent, null, "One ceremony."), " Judged by a panel of senior destination, brand and policy leaders."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.25rem',
      marginTop: '2.5rem'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '2px solid var(--fdb-purple)',
      paddingTop: '1rem',
      paddingBottom: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)',
      lineHeight: 1.3
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      color: 'var(--fdb-purple)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--fdb-ink-muted)',
      lineHeight: 1.6
    }
  }, c.desc)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Key dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 1,
      background: 'var(--fdb-border)',
      border: '1px solid var(--fdb-border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, [{
    lbl: 'Entries open',
    val: 'June 2026'
  }, {
    lbl: 'Entries close',
    val: 'October 2026'
  }, {
    lbl: 'Ceremony',
    val: 'December 2026 · Dublin'
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--fdb-cream)',
      padding: '1.5rem 1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--fdb-purple)',
      marginBottom: '0.4rem'
    }
  }, d.lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 700,
      color: 'var(--fdb-ink)'
    }
  }, d.val))))));
}
Object.assign(window, {
  OverviewPage,
  LeadershipPage,
  SummitPage,
  AwardsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/pages.jsx", error: String((e && e.message) || e) }); }

})();
