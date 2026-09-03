# Mathematics Reality Lab — Technical SEO Improvement

## Overview
- **Summary**: Implement a complete technical SEO pass for the Mathematics Reality Lab (MRL) single‑page website. Work covers metadata, structured data, canonicals, robots/sitemap, headings, image SEO, internal anchors, content copy fixes, performance touches, and a single centralized `SITE_URL` constant so the future domain (`mathrealitylab.in` / `mathrealitylab.com`) can be swapped from one place.
- **Purpose**: Give the site the strongest possible technical foundation for Google / Bing indexation and ranking for queries around applied mathematics, real‑world mathematics experiments, mathematics projects, engineering mathematics, mathematics education, and STEM mathematics.
- **Target Users**: Search-engine crawlers (Googlebot, Bingbot, etc.) and users searching for MRL / applied math / mathematics labs / STEM mathematics education in India.

## Goals
- Produce a single-page site with valid, non‑duplicate metadata (title, description, canonical, robots), Open Graph / Twitter, JSON‑LD (Organization + WebSite + BreadcrumbList), and clean heading hierarchy (H1 → H2 → H3).
- Ensure all images rendered directly in HTML or via JS templates have descriptive, non‑keyword‑stuffed `alt` text; preserve existing image assets; add `width`/`height` where helpful.
- Add valid, crawlable `/robots.txt` and `/sitemap.xml` (for the single homepage + section anchors if appropriate, or single page only).
- Centralize the public origin (`SITE_URL`) so canonical, OG URLs, JSON‑LD `@id`s, sitemap, and robots Sitemap reference one changeable value; default to the current Vercel URL, without hard‑coding that URL everywhere individually.
- Improve internal linking (anchor IDs, nav labels, section cross‑links), clean up copy/spelling/grammar, and touch Core Web Vitals where practical (lazy loading, preconnect, resource hints, deferring non‑critical JS) without breaking existing design or functionality.
- No black‑hat SEO: no hidden text, no fake reviews, no fake schema, no cloaking, no keyword stuffing.

## Non-Goals
- No new pages / keyword pages / multiple routes. Keep the existing single‑page design; “unique title and meta description for every important page” applies to the homepage (the only page) and to section‑level semantic labeling via OG/JSON‑LD/Breadcrumb where helpful — it does NOT mean inventing multi‑page routes.
- No content redesign; preserve existing design, animations, glass‑morphism, neon theme.
- No new build tools, package installs, npm modules, or framework migration.
- No domain migration / redirects. SITE_URL is centralized; redirects are explicitly out of scope.
- No inventing facts (address not confirmed, affiliation TBD stays TBD, etc.).
- No image format conversion of user‑owned assets (can add modern format hints only if safe; no re‑encoding).

## Background & Context
- Inventory: single `index.html` + `style.css` + `script.js`, `asset/` folder. Sections: About/Landing (id=about), Carousel, Faculty, Projects, Gallery, Videos, Testimonials, FAQ, Contact.
- Existing content: 15 projects, 9 gallery, 3 videos, 5 testimonials, 6 FAQs, 1 faculty, carousel slides, nav with 5 items: About / Project(s) / Gallery / Videos / Contact.
- Existing SEO state: `<title>` + one `<meta description>`, basic OG title/description/type, no Twitter meta, no canonical, no JSON‑LD, no robots.txt, no sitemap, missing theme-color deep links, some alt text templated as just project/gallery title (can be more descriptive without stuffing).
- Future domain uncertainty: current `https://mathrealitylab.vercel.app/`; possible future `https://mathrealitylab.in/` or `.com`. All SEO URLs (canonical, OG `og:url`, JSON‑LD `@id`/`url`, sitemap `<loc>`, robots `Sitemap:`) must derive from a single `SITE_URL` constant (or equivalent centralized mechanism), editable in one place.

## Functional Requirements
- **FR-1 Centralized site URL**: Introduce a single `SITE_URL` in `script.js` (and/or inline in `<head>` before SEO‑dependent code) that defaults to the current Vercel URL. All SEO URLs (canonical, OG/Twitter URL, JSON‑LD `url`/`@id`, sitemap `<loc>`, robots Sitemap) derive from it.
- **FR-2 Home metadata**: A unique, descriptive `<title>` (≤ ~60 chars) and `<meta name="description">` (≤ ~160 chars) targeting the MRL keyword themes above, plus `robots` meta (`index, follow`) and a self-referencing canonical link computed from SITE_URL.
- **FR-3 Social metadata**: Open Graph (og:title, og:description, og:type=website, og:url, og:image, og:site_name, og:locale) and Twitter/X (twitter:card=summary_large_image, twitter:title, twitter:description, twitter:image, twitter:site/@handle optional twitter:creator) with values/computed URLs from SITE_URL.
- **FR-4 Structured data (JSON‑LD)**: Three valid, parsable blocks:
  (a) `Organization` — name “Mathematics Reality Lab”, `alternateName` “MRL”, `url`, `logo` (if the logo path is reachable), `sameAs` only for confirmed profiles (LinkedIn text-only provided → skip `sameAs` until URL confirmed; allow empty/omitted safely), `contactPoint` only for real email/WhatsApp/phone as appropriate and honest;
  (b) `WebSite` with `name`, `url`, optional `inLanguage`;
  (c) `BreadcrumbList` representing the nav hierarchy (Home → About, Projects, Gallery, Videos, Contact) using section anchors as `item` URLs.
- **FR-5 Heading hierarchy**: Exactly one `<h1>` on the page (the MRL landing title “Math Reality Lab”). Section headings under `<main>` become `<h2>` (Faculty, Projects, Gallery, Videos, Testimonials, FAQ, Contact, and an appropriate H2 for the carousel if needed). H3s remain card titles (projects, faculty, slides, FAQ questions). Fix any accidental nested heading misuse.
- **FR-6 Image SEO (HTML + JS‑rendered)**:
  - Static `<img>` in `index.html` gain descriptive `alt`; add explicit `width`/`height` where the intrinsic size is known or can be safely hinted to reduce CLS.
  - JS‑rendered images (projects, gallery, carousel) in `script.js` templates emit descriptive alt text combining project/gallery concept and title (not stuffed). e.g., `"${p.title} — ${p.concept} experiment at Mathematics Reality Lab"`; avoid repeating MRL on every single image.
- **FR-7 Canonical / robots crawlability**:
  - A `<link rel="canonical">` computed from SITE_URL pointing to the homepage root.
  - Add a `/robots.txt` (new file) allowing `/` and pointing to sitemap via absolute URL derived from SITE_URL. No `noindex` anywhere unless user says so.
- **FR-8 Sitemap**: A `/sitemap.xml` (new file) that includes at minimum the homepage `<url>` with `<lastmod>`, `<changefreq>` weekly, `<priority>` 1.0. Optionally include section anchors as separate `<url>` entries only if best‑practice compatible (the primary URL is still the root).
- **FR-9 Internal linking & clean URLs**:
  - Nav labels and mobile menu: existing single “Project” label becomes the grammatically correct “Projects” everywhere.
  - Ensure every section `id` is stable, snake‑case / kebab‑case consistent, and nav links match exactly.
  - Add modest, user‑visible cross‑links where natural: e.g., “Explore our [Projects]” from About CTA already exists; add a “See [Faculty] / [Contact]” contextual cross‑link or footer links without overdoing it. Do not add spammy footer keyword lists.
- **FR-10 Copy fixes**: Fix spelling / grammar / capitalization / punctuation errors in visible copy *without changing meaning*. Examples already observed to clean up: “Geteway” → “Gateway”; nav “Project” → “Projects”; duplicated gallery descriptions; “Presenting the final model to the client” should not duplicate a tank description. Do not invent facts (affiliation blank stays blank in FAQ).
- **FR-11 Mobile & performance touches**:
  - Preserve existing responsive CSS; ensure meta viewport remains and no accidental `maximum-scale=1` issues.
  - Ensure all non‑above‑the‑fold images are `loading="lazy"`; above‑the‑fold logo in slider slide 0 can keep `"eager"`; add `decoding="async"` to images if useful.
  - Keep / add `preconnect` to third parties already in use (Google Fonts, Vercel Insights, EmailJS CDN as appropriate); ensure `crossorigin` on fonts preconnect.
  - Optionally `dns-prefetch` for EmailJS / YouTube iframes where appropriate.
  - Defer analytics/EmailJS where safe; keep form functionality intact.

## Non-Functional Requirements
- **NFR-1 Validation**: JSON‑LD blocks must parse (use Schema.org types and valid JSON). HTML/CSS/JS must not introduce syntax errors. `GetDiagnostics` (CSS/TS) / manual HTML read-through should be clean.
- **NFR-2 No fact invention**: `Organization` schema must not include address, location, foundingDate, founder names, awards, etc., unless they are present in existing content.
- **NFR-3 One-place URL change**: A maintainer must be able to change the public domain by editing exactly ONE value (e.g., `SITE_URL`) and have canonical / OG / JSON‑LD `@id` / sitemap / robots `Sitemap:` reference the new domain without touching multiple strings.
- **NFR-4 Preserve functionality**: EmailJS form, WhatsApp link, gallery lightbox, carousel autoplay, reveal animations, mobile hamburger, video embeds, map iframe must continue working exactly as before.
- **NFR-5 Performance‑neutral or better**: No new heavy libraries; avoid layout shifts; try to reduce CLS via width/height attributes on logo/key images where possible.

## Constraints
- **Technical**: Vanilla HTML/CSS/JS. No npm, no build step. `SITE_URL` can be a JS constant; to apply SEO values that must exist at parse time (canonical, meta tags), inject them from a small inline `<script>` placed in `<head>` right after declaring `SITE_URL` (the same constant), OR compute in the existing `script.js` DOMContentLoaded path. Prefer the approach that gives crawlers the values reliably (inline head injection with fallback static meta as insurance).
- **Business**: Honesty. No fake claims, no keyword stuffing.
- **Dependencies**: No new runtime dependencies. Existing: EmailJS CDN, Vercel Analytics CDN, Google Fonts, YouTube iframes, Google Maps embed.

## Assumptions
- “Every important page” = the single homepage (no server‑side routing). Section‑level “important pages” intent is addressed via H2 hierarchy, BreadcrumbList with anchors, and ensuring section content is crawlable headings.
- `SITE_URL` default value: `https://mathrealitylab.vercel.app/` (trailing slash canonical). User can later change to `https://mathrealitylab.in/` or `.com` in one place.
- LinkedIn URL is currently commented as a string name only; do NOT fabricate a LinkedIn `sameAs` URL. Leave it out unless a real URL is in CONTACT_INFO (commented URLs do not count).
- Images: Most project PNGs/webp have unknown intrinsic pixel size. We add `width`/`height` only where reasonably safe (logo 36x36 in nav can keep it; for project/gallery images we rely on CSS aspect ratio box + lazy load which already exists; avoid incorrect width/height that causes distortions). If unsure, improve alt text only.

## Open Questions
- None blocking; proceed with implementation under the Assumptions above.

## Acceptance Criteria

### AC-1: Centralized SITE_URL used for all SEO URLs
- **Type**: `rule`
- **Given**: A single source of truth for the public site origin, `SITE_URL` (defaulting to `https://mathrealitylab.vercel.app/`).
- **When**: A maintainer edits `SITE_URL` to `https://mathrealitylab.in/` (or `.com`).
- **Then**: Every SEO‑related URL in the site (canonical link, `og:url`, Twitter URL if present, JSON‑LD `url`/`@id` attributes, sitemap `<loc>` elements, and `Sitemap:` directive in robots.txt) uses the new origin with no additional edits.
- **Pass Condition**: Searching the repo for the literal string `mathrealitylab.vercel.app` after centralization returns ONLY the single default assignment (and comments), with the rest reading the centralized value.
- **Evidence**: `grep -R "mathrealitylab.vercel.app" .` output plus a grep for `SITE_URL` usage sites.

### AC-2: Homepage has unique valid title/description/robots/canonical
- **Type**: `rule`
- **Given**: `index.html` loaded in a browser (or statically by a crawler, with head injection run).
- **When**: Inspecting `<head>`.
- **Then**: Exactly one `<title>` (50–65 chars); exactly one `<meta name="description">` (120–165 chars); a `<meta name="robots" content="index, follow">`; a `<link rel="canonical">` whose `href` equals `SITE_URL` (normalized). No duplicate `<title>` or `<meta description>` tags.
- **Pass Condition**: All four tags present; canonical matches SITE_URL root; lengths within recommended ranges; no duplicates.
- **Evidence**: DOM head innerHTML snapshot + manual character counts.

### AC-3: OG and Twitter/X metadata present and consistent
- **Type**: `rule`
- **Given**: A browser DOM after head SEO injection.
- **When**: Checking meta properties.
- **Then**: Open Graph has `og:type=website`, `og:site_name=Mathematics Reality Lab`, `og:title`, `og:description`, `og:url=SITE_URL`, `og:image` pointing to a real image (e.g., asset/logo.png under SITE_URL), `og:locale=en_IN` or `en_US`. Twitter/X has `twitter:card=summary_large_image` plus title, description, image. All absolute URLs derive from `SITE_URL`.
- **Pass Condition**: All listed meta tags present, non‑empty, image path resolves under SITE_URL.
- **Evidence**: Meta tag list + validated URLs.

### AC-4: Valid JSON‑LD (Organization + WebSite + BreadcrumbList)
- **Type**: `rule`
- **Given**: `index.html` output.
- **When**: Parsing all `<script type="application/ld+json">` blocks.
- **Then**: Three distinct @graph items (or three separate blocks): Organization with name/MRL alternateName/url/logo (safe path), no made‑up address/awards; WebSite with name/url/inLanguage; BreadcrumbList with at least 4 entries corresponding to nav anchors (About/Projects/Gallery/Videos/Contact or similar) with absolute URLs from SITE_URL + fragment.
- **Pass Condition**: JSON parses, each @type matches, no schema properties invented for missing facts, URLs absolute using SITE_URL.
- **Evidence**: Copy of rendered JSON‑LD and a parse check.

### AC-5: Correct heading hierarchy (one H1, H2 sections, H3 cards)
- **Type**: `rule`
- **Given**: Rendered `index.html` DOM including JS‑rendered cards.
- **When**: Counting headings by level.
- **Then**: Exactly one `<h1>` (the About/Landing “Math Reality Lab” title). Each major section (Carousel or Highlights, Faculty, Projects, Gallery, Videos, Testimonials, FAQ, Contact) has exactly one appropriate `<h2>` (no orphan H2s). Card/subsection titles use `<h3>` (e.g., Vision/Objectives/Outcomes, project titles, faculty names, slide titles, FAQ questions). No H4 used where H3 should be, no multiple H1s.
- **Pass Condition**: Heading counts: H1=1, H2 = 8 ± 1, H3 matches card inventory, order never jumps H1→H3 without H2.
- **Evidence**: Tabulated heading list from DOM querySelectorAll.

### AC-6: Image alt text descriptive + lazy/eager loading correct
- **Type**: `rubric`
- **Dimension**: Image SEO quality
- **Scale**: 1–5
- **Anchors**: 1 = missing / generic / repeated alts (just filename or “MRL” everywhere); 3 = project/gallery/slide title only, loading attributes mostly present; 5 = each important image has a unique, human‑readable description ~6–16 words combining concept + title; no keyword stuffing; above‑the‑fold hero image (slide 0) eager, rest lazy; nav logo alt sensible; no empty alts on meaningful images.
- **Pass Threshold**: >= 4
- **Evidence**: Snapshot of all `<img>` tags from static + JS templates with alt and loading attributes.

### AC-7: robots.txt and sitemap.xml present and crawlable from repo root
- **Type**: `rule`
- **Given**: Project deployed to Vercel with static files served from root.
- **When**: Requesting `/robots.txt` and `/sitemap.xml`.
- **Then**: robots.txt contains `User-agent: *` + `Allow: /` + `Sitemap: <absolute sitemap URL under SITE_URL>`. sitemap.xml is well‑formed XML with urlset schema, includes homepage `<url>` with `<loc>` from SITE_URL, `<lastmod>` in ISO date, `<changefreq>` weekly, `<priority>1.0</priority>`.
- **Pass Condition**: Files exist at repo root `/robots.txt` and `/sitemap.xml`; XML is parseable; Sitemap URL matches canonical sitemap location; no `Disallow: /`.
- **Evidence**: File contents + xmllint or Python XML parse pass.

### AC-8: No new runtime deps; existing functionality preserved
- **Type**: `rule`
- **Given**: Completed implementation.
- **When**: Running the site locally with `python3 -m http.server`.
- **Then**: Nav mobile hamburger works, carousel autoplay + prev/next + dots work, faculty/projects/gallery/videos/testimonials/FAQ render correctly, gallery clicks open lightbox, contact form fields are present, EmailJS SDK loads, WhatsApp URL opens, map iframe has required attributes.
- **Pass Condition**: No console errors; all interactive features match baseline; visual design unchanged.
- **Evidence**: Local server smoke test + browser console clean.

### AC-9: Copy edits improve English without semantic change and without stuffing
- **Type**: `rubric`
- **Dimension**: Copy accuracy / SEO naturalness
- **Scale**: 1–5
- **Anchors**: 1 = spelling errors / grammar issues remaining (e.g., Geteway, singular Project nav, duplicated gallery descriptions unchanged); 3 = some fixes applied but inconsistencies remain; 5 = all observable typos, grammar, punctuation issues fixed without adding keyword‑stuffed paragraphs; nav labels consistent, repeated gallery descriptions de‑duplicated, claims still honest (affiliation “placeholder” remains).
- **Pass Threshold**: >= 4
- **Evidence**: Diff summary of copy edits in index.html + script.js strings.
