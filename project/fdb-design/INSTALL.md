# Installing the FDB design skill

This folder is a **Claude skill package** for the Future. Destination. Brand. (FDB) design system. It teaches Claude the brand and ships every asset it needs to design with it.

## Install (Claude Code)

```bash
# from your project root
mkdir -p .claude/skills
cp -R path/to/fdb-design .claude/skills/fdb-design
```

That's it. Next time Claude Code runs in this project, the skill is auto-discovered. Trigger it by mentioning **FDB**, **Future. Destination. Brand.**, **X. Awards**, or by asking for "the brand" in an FDB project.

## Install (other Claude surfaces)

Drop the entire `fdb-design/` folder into any project Claude can see. The skill is self-contained — relative paths only, no network requirements except optional Lucide icons.

## What's inside

| Path | What it is |
|---|---|
| `SKILL.md` | The manifest Claude reads first. Hard rules, quick-start snippets, when-to-ask vs when-to-ship. |
| `README.md` | The full brand book: voice, palette, type scale, iconography, substitution policy. |
| `colors_and_type.css` | Tokens (`:root` CSS vars), `@font-face` for Geist, semantic type classes. Import this first. |
| `fonts/` | Geist TTFs, weights 100–900. |
| `assets/logos/` | FDB mark + wordmark + full lockup, X. Awards horizontal + roundel, both light and dark. |
| `assets/social/` | Reference Instagram-format brand frames. |
| `ui_kits/marketing-site/` | React JSX UI kit — every shared component used across the FDB marketing site. |
| `slides/` | 16:9 deck templates on `deck-stage.js` (cover, statement, stat, agenda, speaker, X. Awards, closing). |
| `preview/` | Specimen cards — every foundation rendered for visual reference. |

## Triggering manually

If you want to be explicit:

> "Use the **fdb-design** skill to build me a one-pager for the Day 1 leadership programme."

Claude will load `SKILL.md`, then `README.md`, then start producing on-brand work.

## Updating the skill

Edit files inside the skill folder directly. The next conversation picks up the changes. The single source of truth is `README.md`; if you tweak rules there, mirror them into the "Non-negotiable brand rules" block of `SKILL.md` so Claude sees them up front.
