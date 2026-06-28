# SEO TODO

## homepage

- [ ] **P0 — Add H1.** No heading tag exists. ASCII art is `<pre>`, body text is `<p>`. Add `<h1>Ömer Uğur</h1>` hidden visually (sr-only) or visibly above content.
- [ ] **P1 — Unify descriptions.** Meta (147 chars longer), OG (shorter), Twitter (different) all say different things. Pick one base and reuse. Suggested: `"Full-stack developer based in Poland. AI agents, TTS research, scraping. Personal blog and project portfolio."`
- [ ] **P2 — Expand content.** ~30 words is thin for Google. Add 2-3 sentence intro paragraph before latest posts.
- [ ] **P2 — Fix double space in og:title.** `"Ömer Uğur  - Full-Stack"` has double space before dash.
- [ ] **P3 — Title suffix.** Drop `| Poland` from `<title>`. Location not needed in SERP snippet.
- [ ] **P3 — JSON-LD Person.** Add `@id` and `image` properties.

## /blog

- [ ] **P0 — Broken canonical.** Points to homepage, not `/blog`. Fix to `https://dav1lex.github.io/blog`. Check paginated pages too.
- [ ] **P1 — Twitter title/desc.** Copies homepage values instead of page-specific. Same root cause as /projects — layout metadata not overridden per-page.
- [ ] **P1 — Og description.** Drops `"by Ömer Uğur"` suffix — shorter than meta desc. Align.
- [ ] **P2 — Weak H1.** `"blog"` alone is minimal. Consider `"Articles & Research"` or similar if keyword density matters.

## /projects

- [ ] **P0 — Broken canonical.** Points to homepage, not `/projects`. Fix to `https://dav1lex.github.io/projects`.
- [ ] **P1 — OG title.** Shows homepage `"Ömer Uğur  -  Full-Stack Developer & Tinkerer"` with double space. Should be `"Projects | Ömer Uğur"`.
- [ ] **P1 — OG description.** Shows homepage `"Full-stack developer. AI agents..."` instead of page meta description.
- [ ] **P1 — OG url.** `https://dav1lex.github.io` — should be `/projects`.
- [ ] **P1 — Twitter title/desc.** Homepage values. Same root cause: page metadata not overriding layout fallbacks.
- [ ] **P2 — Same double-space in OG title.** Symptom of layout fallback leaking.

## /about

- [ ] **P0 — Broken canonical.** Points to homepage, not `/about`. Same root cause.
- [ ] **P1 — OG title/desc/url, Twitter title/desc.** All leak layout homepage values. Same root cause.
- [ ] **P1 — Meta desc double space.** `"Ömer Uğur  -  full-stack..."` has double space before dash.
- [ ] **P2 — Meta desc length.** 161 chars, slightly over 155 limit. Trim.

## root cause (layout metadata leak)

OG + Twitter + canonical fallbacks from layout bleeding onto subpages. Per-page `generateMetadata` doesn't properly override all fields. Fix: either add explicit per-page metadata exports, or audit layout `metadata` to use template strings that pages can extend.

## do once (all pages)

- [ ] **P1 — og:image.** Not set on any page. Add a site-wide default OG image (1200×630 PNG, same styling as favicon — floppy or terminal art) via root `layout.tsx` metadata. Blog posts optionally override with per-post images later.
- [ ] **P1 — Unify twitter card across all pages.** Twitter tags currently hand-rolled in layout. Switch to Next.js `twitter` metadata key so OG and Twitter pull from same source.
- [ ] **P2 — Check title double-space.** Homepage has `"  - "` — may exist on other pages. Audit all `title` + `og:title` templates.
