# Mathematics Reality Lab — SEO Implementation Plan

## Task 1: Centralize SITE_URL + inject head SEO (canonical, robots, OG, Twitter)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Add `const SITE_URL = "https://mathrealitylab.vercel.app/";` as the single origin-of-truth in `script.js` near the top, and expose to a small inline `<script>` snippet placed inside `<head>` of `index.html` *before* SEO‑dependent tags (or use the constant in both places via one shared assignment to avoid duplication). Prefer assigning via `window.__SEO__.SITE_URL` object so canonical/og/twitter/jsonld all read it.
  - Add fallback static `<title>`, `<meta name="description">`, `robots`, `canonical`, OG, Twitter meta tags in `<head>` as static HTML (so crawlers see values even if JS is slow), AND also validate/update them from `SITE_URL` using the inline script. Ensure canonical href and `og:url` use absolute path from SITE_URL root.
  - Ensure no literal duplicate strings of the Vercel domain exist beyond the single default.
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3
- **Test Requirements**:
  - `rule` TR-1.1: `grep -R "mathrealitylab.vercel.app" .` returns exactly one default assignment (plus comments/README references, if any). Non‑default uses reference `SITE_URL` / `__SEO__`. Evidence: terminal output.
  - `rule` TR-1.2: Static `<head>` contains `<title>`, `<meta name="description">`, `<meta name="robots" content="index, follow">`, `<link rel="canonical">`, Open Graph (og:type/title/description/site_name/locale/url/image) and Twitter (twitter:card/title/description/image). Evidence: saved head innerHTML.
  - `rubric` TR-1.3: Meta copy length. Scale 1–5; 1=title <20 or >65 or description <80 or >180; 3=within range but bland; 5=title 50–62 chars, description 130–160 chars, keyword themes covered naturally without stuffing; threshold >=4; Evidence: character count table.
- **Notes**: README reference to Vercel URL may remain as documentation; the SEO code path must not hard‑code it.

## Task 2: Add JSON‑LD structured data (Organization + WebSite + BreadcrumbList)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Insert one `<script type="application/ld+json">` block at the END of `<head>` (or just before `</body>` with DOM injection from script.js) that uses `SITE_URL` for `url` and `@id`.
  - Three schema blocks inside `@graph` (or three separate <script> blocks — choose one clean approach):
    1. `Organization`: name `Mathematics Reality Lab`, alternateName `MRL`, `url: SITE_URL`, `logo: SITE_URL + "asset/logo.png"` (with safe join/normalize), optionally `contactPoint` using CONTACT_INFO.email / phone only if present; NO address, NO sameAs (since LinkedIn URL is not a confirmed absolute URL yet; CONTACT_INFO.linkedin is plain text). `@id: SITE_URL + "#organization"`.
    2. `WebSite`: name, `url: SITE_URL`, `inLanguage: "en-IN"`, `@id: SITE_URL + "#website"`, `publisher: { @id: SITE_URL + "#organization" }`.
    3. `BreadcrumbList`: 5+ items mirroring nav (Home → About → Projects → Gallery → Videos → Contact). For each item, `item: SITE_URL + "#id"` plus `name`. Ensure IDs match existing section anchors.
- **Acceptance Criteria Addressed**: AC-1, AC-4
- **Test Requirements**:
  - `rule` TR-2.1: JSON parses without error. `JSON.parse(script.textContent)` succeeds. Evidence: console output.
  - `rule` TR-2.2: `@graph` includes @type Organization, WebSite, BreadcrumbList. All `url`/`@id` start with SITE_URL; no invented address/founding/sameAs. Evidence: rendered JSON.
  - `rule` TR-2.3: BreadcrumbList itemListElement length >= 5, names include About/Projects/Gallery/Videos/Contact, each `item` is SITE_URL + "#<id>". Evidence: parsed array.

## Task 3: Fix heading hierarchy (one H1; section H2s; card H3s; Vision/Objectives/Outcomes H3)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Keep existing About/Landing `<h1 class="about-landing-title">Math Reality Lab…</h1>` as the ONLY `<h1>`.
  - In `index.html`, ensure each section has a semantic `<h2>` heading. Current state:
    - About: use H1 already; no duplicate H1 for faculty/projects etc.
    - Carousel (id=carouselSection): likely missing a section H2; add `<h2 class="visually-hidden section-title">Lab Highlights & Experiments in Action</h2>` (visually‑hidden) or an existing visible heading — preserve design.
    - Faculty section H2 already exists: `<h2 class="section-title">Led by faculty who build, not just teach.</h2>` → keep.
    - Projects H2, Gallery H2, Videos H2, Testimonials H2, FAQ H2, Contact H2: ensure each has exactly one H2; if missing, insert a visible or visually‑hidden H2 preserving design.
  - Ensure Vision/Objectives/Outcomes cards (currently `<h3 class="about-card-title-neon">`) remain H3 (correct). Project cards, faculty card, slide title `<h3>` are correct.
  - Ensure no HTML contains an H3 before the first H2.
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `rule` TR-3.1: After JS render completes, `document.querySelectorAll("h1").length === 1`. Evidence: count.
  - `rule` TR-3.2: `document.querySelectorAll("h2").length >= 8` (Highlights, Faculty, Projects, Gallery, Videos, Testimonials, FAQ, Contact → 8). Evidence: list of H2 texts.
  - `rule` TR-3.3: Heading order: for every H3, its nearest preceding heading ancestor (by DOM order) is H2, not H1. Evidence: algorithmic check.

## Task 4: Improve image alt text (HTML + JS templates) + width/height hints + decoding/loading
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Static HTML images (nav logo, about logo img, any statically present) update `alt` to be descriptive.
  - `script.js` templates:
    - PROJECTS alt: change from `${p.title}` only → `${p.title} — ${p.concept} applied‑math experiment at Mathematics Reality Lab`.
    - GALLERY alt: change from `${g.title}` only → `${g.title}: ${g.desc}`.
    - SLIDES alt: improve to `${s.title} — ${s.tag || "MRL lab highlight"}`.
    - Ensure slide 0 `loading="eager"` and the rest `"lazy"` (already coded); keep; add `decoding="async"` to all JS‑rendered and static non‑hero images.
  - Nav logo (36×36) keep explicit `width`/`height`. If any static `<img>` lacks width/height, add them when known (e.g., about logo `.about-logo` rendered in HTML via `<img src="asset/logo.png">` — add `width="540"` `height="540"` only if the CSS still respects it; otherwise omit and rely on CSS aspect ratio to avoid distortion). Prefer adding `width="" height=""` ONLY when the intrinsic size is confidently known (nav logo only, to reduce CLS).
- **Acceptance Criteria Addressed**: AC-6, AC-8
- **Test Requirements**:
  - `rubric` TR-4.1: Image alt text quality per AC-6 dimension. Threshold >=4. Evidence: all `<img>` alt/loading attribute dump.
  - `rule` TR-4.2: Slider slide‑0 image has `loading="eager"`; all project/gallery/slide‑1+ images have `loading="lazy"`. Evidence: attribute values.

## Task 5: Create robots.txt and sitemap.xml using a build‑time approach for static hosting
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1 (for URL semantics)
- **Description**:
  - Because there is no build step, create both files as *template* static files that reference a single changeable base URL. However, to satisfy AC-1 (one‑place domain change) **without** a build step, we cannot hardcode the domain inside robots.txt/sitemap.xml in a perfectly DRY way. To solve this practically while preserving the “edit SITE_URL in one place” guarantee:
    - Store the canonical `SITE_URL` once in `script.js` AND create a tiny helper comment at the top of `robots.txt` and `sitemap.xml` saying that these files mirror that single canonical source.
    - Since a static server can’t run JS to compute `Sitemap:` URLs at request time, we accept ONE additional edit location (both files are explicitly declared as the deploy artifacts) but document in the files that the value must match `SITE_URL`.
    - Alternative (preferred for strongest single‑source compliance): Emit robots.txt / sitemap.xml at runtime via a tiny Vercel‑free zero‑config approach is not available without vercel.json. So instead, keep static files but **add a single‑line `SITE_URL` mirror variable inside each files’ top comment block so maintainer sees it**. This pragmatic approach keeps the site static and crawlable.
  - **robots.txt** content: `User-agent: *`, `Allow: /`, `Sitemap: ${SITE_URL}sitemap.xml`. Default to Vercel URL.
  - **sitemap.xml** urlset (http://www.sitemaps.org/schemas/sitemap/0.9). Include homepage `<url>` with `<lastmod>` set to today’s date YYYY-MM-DD (or last commit date), `<changefreq>weekly</changefreq>`, `<priority>1.0</priority>`. Optionally include `<url>` entries for `#about`, `#projects`, `#gallery`, `#videos`, `#contact` with `<priority>` descending.
- **Acceptance Criteria Addressed**: AC-1 (pragmatically documented mirror), AC-7
- **Test Requirements**:
  - `rule` TR-5.1: Files `/robots.txt` and `/sitemap.xml` exist at repo root. Evidence: `ls`.
  - `rule` TR-5.2: `python3 -c "import xml.etree.ElementTree as ET; ET.parse('sitemap.xml')"` succeeds. Evidence: exit 0.
  - `rule` TR-5.3: robots.txt contains `Allow: /` and absolute `Sitemap:` URL. Evidence: cat.

## Task 6: Improve internal links and clean nav/URL labels (Projects plural, stable IDs, modest cross‑links, footer nav)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - In `index.html`, change nav label singular “Project” → “Projects” in both `.nav-links li a` and `.mobile-menu ul li a` (4 occurrences).
  - Confirm existing `id`s: `about`, `carouselSection`, `faculty`, `projects`, `gallery`, `videos`, `testimonials`, `faq`, `contact` — all present, no broken hrefs.
  - Breadcrumb and any internal href use those exact IDs. Add a small contextual cross‑link in the About copy (e.g., in the Vision card copy, do not stuff; add one sentence fragment at the end of `.about-media-copy-neon .lead-text`: `Continue exploring the [Projects](#projects) and [Gallery](#gallery), or [reach out to collaborate](#contact).`). Make it unobtrusive.
  - Ensure `<nav aria-label="Primary">` exists (yes), and footer links if any point to real sections.
- **Acceptance Criteria Addressed**: AC-9 (partially), AC-8
- **Test Requirements**:
  - `rule` TR-6.1: Nav text for projects link is consistently “Projects” in desktop and mobile menus. Evidence: grep output.
  - `rule` TR-6.2: Every `href="#…"` in nav refers to an element `id` that exists. Evidence: id/href alignment script.
  - `rubric` TR-6.3: Internal link quality. Scale 1–5; 1=no cross-links; 3=only nav exists; 5=modest contextual cross-links exist inside About copy pointing to Projects/Gallery/Contact without spam; threshold >=4.

## Task 7: Fix copy spelling/grammar/duplication (script.js + index.html)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: None
- **Description**:
  - `index.html` line 178-ish: “Geteway to Exploring the Power of Math Applications” → fix to “Gateway to exploring the power of mathematical applications.”
  - `script.js` GALLERY items 8 and 9: entries currently have duplicated copy (“Presenting the final model…” / “Brainstorming new Lagrange multiplier…”) — update to distinct, accurate captions that match Picture8 (robotics arm coord geometry) and Picture9 (laser optics transform). Use:
    - GALLERY[8] (Picture8.png): title “Robotic Arm Coordinate Demo”, desc “Mapping pick‑and‑place positions with coordinate geometry.”
    - GALLERY[9] (Picture9.png): title “Laser Optics Transform Model”, desc “Modeling laser beam paths with linear and non‑linear transformations.”
  - SLIDES[2] subtitle: `Discover how mathematical concepts work beyond the classroom.Apply hands-on…` → insert a space after period: `Discover how mathematical concepts work beyond the classroom. Apply hands‑on experiments to solve real‑world engineering challenges.`
  - Any FAQ answer copy edits remain accurate. Do NOT edit FAQ[5] “placeholder” claim into fake affiliation.
  - Ensure no accidental brand-name stuffing (“Mathematics Reality Lab Mathematics Reality Lab”).
- **Acceptance Criteria Addressed**: AC-9, NFR-4
- **Test Requirements**:
  - `rubric` TR-7.1: Copy accuracy per AC-9 rubric dimension, threshold >=4.
  - `rule` TR-7.2: No remaining occurrence of substring “Geteway” or duplicated gallery desc. Evidence: grep.

## Task 8: Mobile SEO + Core Web Vitals touches (preconnect, dns-prefetch, lazy decode, no scale removal)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1 (head order)
- **Description**:
  - `<meta name="viewport">` already correct — preserve. Ensure no `user-scalable=no` / `maximum-scale=1` introduced.
  - Ensure `theme-color` (white) exists; optionally add `<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b0f1f">`.
  - `<link rel="preconnect">` for Google Fonts + `crossorigin` exists. Add `<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">` (EmailJS) and `<link rel="dns-prefetch" href="https://www.youtube.com">` (video iframes) + `https://www.google.com/maps` (map). Do NOT add unused origins.
  - `loading="lazy"` is already applied to project/gallery images; keep. For EmailJS and Vercel Analytics scripts, keep defer and existing loading order to avoid breaking form.
  - For iframes (YouTube, maps), keep `loading="lazy"` where applicable (map iframe must keep `allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"` per project conventions).
- **Acceptance Criteria Addressed**: AC-11 (NFR-5), AC-8
- **Test Requirements**:
  - `rule` TR-8.1: viewport meta does NOT contain `maximum-scale` or `user-scalable=no`. Evidence: content string.
  - `rule` TR-8.2: head includes `dns-prefetch` for jsdelivr, youtube, google/maps origins. Evidence: head element listing.

## Task 9: Final verification (local server + diagnostics + sample crawler checks)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Tasks 1–8
- **Description**:
  - Run `python3 -m http.server 8765` from repo root (non-blocking, start then wait 2s).
  - Fetch `http://localhost:8765/index.html` and `http://localhost:8765/robots.txt`, `http://localhost:8765/sitemap.xml` (or appropriate paths) and verify:
    - Title length, description length, canonical present.
    - JSON‑LD parses (extract script content and JSON.parse)
    - heading counts via local JS snippet or DOM dump
    - robots/sitemap XML validity
  - Run `GetDiagnostics` for all files (index.html/style.css/script.js). Fix any issues.
  - Stop server.
- **Acceptance Criteria Addressed**: AC-2, AC-3, AC-4, AC-5, AC-7, NFR-1, NFR-4
- **Test Requirements**:
  - `rule` TR-9.1: GetDiagnostics for all 3 core files return 0 errors. Evidence: diagnostics output.
  - `rule` TR-9.2: Local server responses for `/robots.txt` (200 + contains Sitemap:), `/sitemap.xml` (200 + parseable XML), `/index.html` (200 + contains `<title>` + at least one ld+json block). Evidence: fetch output lines.
  - `rule` TR-9.3: Heading counts H1=1, H2>=8. Evidence: DOM counts.
