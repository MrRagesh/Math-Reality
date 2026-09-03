# Mathematics Reality Lab (MRL) — Official Website

> **Mathematics, Made Real.** — A full-width, glassmorphic + neon-themed single-page website for the **Mathematics Reality Lab (MRL)**, UDYAM-TN-27-0149456, an experimental math lab initiative based at **MAM College of Engineering and Technology**, Siruganur, Tiruchirappalli.

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Tech Stack](#-tech-stack)
3. [Project Structure](#-project-structure)
4. [Website Sections (in order)](#-website-sections-in-order)
5. [Key Features](#-key-features)
6. [Data Content Inventory](#-data-content-inventory)
7. [Integration Setup](#-integration-setup)
   - [EmailJS — Contact Form](#emailjs--contact-form)
   - [WhatsApp — Chat Draft](#whatsapp--chat-draft)
   - [Google Maps — Location Embed](#google-maps--location-embed)
8. [Design System](#-design-system)
9. [Responsive Breakpoints](#-responsive-breakpoints)
10. [Deployment](#-deployment)
11. [Browser Support](#-browser-support)
12. [Credits](#-credits)

---

## 🎯 Project Overview

MRL turns pure mathematical theory into **real-world, working physical experiments** — giving engineering students hands-on intuition for the mathematics behind signal processing, robotics, circuit analysis, optics, fluid mechanics, and more.

This website serves as:
- The **digital landing page** for prospective students, collaborators, and industry partners.
- A **portfolio** of 15 concrete math → experiment projects.
- A **gallery & video showcase** of the lab in action.
- A **contact portal** (EmailJS email delivery + simultaneous WhatsApp chat draft).

### Organization

| Field | Value |
|---|---|
| **Lab Name** | Mathematics Reality Lab (MRL) |
| **UDYAM Registration** | UDYAM-TN-27-0149456 |
| **Host Institution** | MAM College of Engineering and Technology, Siruganur, Trichy |
| **Founder & Director** | Dr. P. G. Jansi Rani, Professor of Mathematics |
| **Email** | mathrealitylab@gmail.com |
| **Phone / WhatsApp** | +91 96883 32441 |

---

## 🧰 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| **Markup** | HTML5 (vanilla) | Semantic `<section>`, `<article>`, `<nav>` + ARIA labels |
| **Styling** | CSS3 (vanilla, ~1800 lines) | CSS custom properties, `backdrop-filter` glassmorphism, CSS grid, `@keyframes` animations, no preprocessor |
| **Behaviour** | JavaScript ES2020 (vanilla, ~1000 lines) | No framework — pure DOM. Content arrays → `renderX()` functions. |
| **Email Delivery** | [EmailJS Browser SDK v4](https://www.emailjs.com/) | CDN include `@emailjs/browser@4` → sends enquiry to Gmail without a backend |
| **Google Maps** | Embedded iframe (no API key billing) | `pb=` embed URL for MAM College of Engg. |
| **YouTube** | Embedded `<iframe>` cards | `youtubeId` → `https://www.youtube.com/embed/…` |
| **Fonts** | Google Fonts — Space Grotesk + Inter + JetBrains Mono | `preconnect` for fast load |
| **Icons** | Inline SVG icons inside cards/buttons | No icon-font dependency |

---

## 📁 Project Structure

```
Math Reality/
├── index.html                     # Single-page shell, semantic sections
├── style.css                      # All styling: tokens, layout, glassmorphism, neon, responsive
├── script.js                      # Data arrays + render functions + carousel + lightbox + form
├── README.md                      # ← You are here
└── asset/
    ├── logo.png                   # MRL logo mark (36×36 used in nav + footer)
    ├── img1.webp … img7.webp      # Gallery thumbnails (lab sessions, builds, demos)
    ├── img_slide/                 # Carousel hero slides (5 images)
    │   ├── c1.webp
    │   ├── c2.webp
    │   ├── c3.webp
    │   ├── c4.webp
    │   └── c5.webp
    └── project/                   # 15 project-card cover images
        ├── Picture1.png … Picture8.png
        ├── Picture9.png … Picture15.png
        └── Picture14.webp
```

**Codebase size** (approximate):
- `index.html` — 535 lines
- `style.css` — ~1800 lines
- `script.js` — ~980 lines

---

## 🧭 Website Sections (in order)

### 1. Navigation (`#about`, `#projects`, `#gallery`, `#videos`, `#contact`)
- Desktop: Brand mark + 5 links + CTA button ("Start a Conversation").
- Mobile (≤860px): Hamburger → slide-down `.mobile-menu`.
- **Active-link scrollspy**: script highlights the nav link whose section is currently in view.
- Custom spark-style cursor (hidden on touch devices / mobile automatically).

### 2. About / Landing (`#about`)
Site hero with:
- Gradient headline **"Math Reality Lab"**, UDYAM certificate ID, eyebrow tagline.
- Primary CTA → `#projects` (neon cyan glow) + Ghost CTA → `#contact`.
- **3 glass cards** (Vision / Objectives / Expected Outcomes) with neon corner glows + hover lifts.
- **MRL logo frame** right side with neon scanning ring & φ/∮ corner badges.
- **Animated background**:
  - Triple radial neon orbs
  - Cyan→magenta gradient SVG grid + dot pattern
  - 12 drifting math symbols (∫, ∑, π, ∇, λ, θ, ∞, √, ∂, Δ, Ω, α)
  - Two opposing marquee strips of famous equations (Maxwell, Euler, Newton, Gaussian, etc.)

### 3. Highlight Carousel (`#carouselSection`)
- Full-width, auto-playing 5-slide carousel with **pause-on-hover / pause-on-tab-blur**.
- Slides rendered from `SLIDES[]` by `renderSlider()`.
- Prev/Next arrow buttons + clickable dot indicators.
- Mobile (≤860px): Slide captions (titles, tags, subtitles) are hidden (per constraint).

### 4. Faculty (`#faculty`)
- Rendered from `FACULTY[]` → 2 cards: **Dr. P. G. Jansi Rani** (Founder) + **Dr. R. Govindarajan** (Co-Director / HOD Mathematics).
- 260 px-wide circular avatar with **giant initials** fallback (no external avatar files needed).
- Glass cards with cyan→magenta neon gradient borders + hover lift.

### 5. Projects (`#projects`)
The core portfolio section. **15 project cards**, each pairing a mathematical concept with a working real-world build. Cards have:
- Concept tag pill
- Image thumbnail (1:1-ish, `object-fit: cover`)
- Full concept name + one-line description
- **"See math → experiment"** hover reveal with neon-cyan border glow
- Animated project section background: neon orbs, drifting SVG grid, horizontal/vertical marquee strips, sparkles, floating logic symbols.

### 6. Gallery (`#gallery`)
- 9 image thumbnails in a scroll-track grid.
- Click any card → full-screen lightbox (`#lightbox`) with:
  - Close button (×)
  - Backdrop click-to-close
  - `Escape` key to close
  - Caption overlay with title + description
- Lightbox image uses `object-fit: contain`; thumbnail uses `cover`.

### 7. Videos (`#videos`)
- 3 embedded YouTube experiment walkthroughs in responsive 16:9 cards.
- Rendered from `VIDEOS[]` via `youtubeId`.
- `loading="lazy"`, `title` attribute for a11y.

### 8. Testimonials (`#testimonials`)
- 5 testimonial cards on a horizontal track (scroll-snap).
- Prev/Next arrow buttons.
- Floating animation on cards, auto-generated initials avatars.
- Quotes from HODs, VIT robotics lab, TN education board, industry consultant, and an MRL undergrad researcher.

### 9. FAQ (`#faq`)
- 6 Q&A accordion items.
- Animated open/close with cubic-bezier transition (~0.55 s).
- FAQ section background: drifting dot grid, 4 animated violet/cyan glow orbs (`.faq-particles`).
- Open item shows intensified cyan border + chevron rotate.

### 10. Contact (`#contact`)
**2-column layout** (`.contact-grid` 0.9 fr : 1.1 fr on desktop, stacks ≤860 px).

#### Left column (`#contactCards`)
1. **Email card** → `mailto:mathrealitylab@gmail.com`
2. **WhatsApp card** → opens `https://wa.me/919688332441` in a new tab
3. **Availability pill** (green, pulsing dot): "Currently accepting collaborations & student projects"
4. **Google Map embed card** (glassmorphism): MAM College of Engg. & Tech. location

#### Right column (`#contactForm`)
Contact form with:
- `Name *` (≥2 chars), `Email *` (regex), `Phone` (optional, digits/regex), `Organization`, `Subject *`, `Message *` (≥10 chars).
- Field-level error messages in red.
- **Dual delivery on submit**:
  1. Fires `emailjs.send(…)` via SDK → sends HTML/Text template email to `mathrealitylab@gmail.com`.
  2. Simultaneously opens WhatsApp message draft in new tab with the same enquiry fields pre-filled.

### 11. Footer
- Brand + description column
- Explore links (About, Projects, Gallery, Videos)
- More links (Testimonials, FAQ, Contact)
- Contact info (Email, Phone) injected from `CONTACT_INFO`
- Dynamic year: `© <span id="year">`

---

## ✨ Key Features

| Feature | Implementation |
|---|---|
| **No build step** | Open `index.html` in a browser — zero tooling required |
| **Glassmorphism** | `.glass-card` base class: `backdrop-filter: blur(16px) saturate(140%)`, `rgba(255,255,255,.78)` gradient background, soft multi-layer box-shadow |
| **Neon aesthetic** | CSS variables for every hue, radial-corner glow gradients, `box-shadow` glow rings, scan-line and floating symbol animations |
| **Scroll reveal** | `.reveal` + `.reveal-delay-N` classes → `IntersectionObserver` toggles `.in-view` |
| **Auto carousel with pause** | `setInterval` autoplay; pauses on `mouseenter` / `focusin` / `visibilitychange` (tab blur) — per Lessons Learned |
| **Lightbox** | 3 triggers to close: × button, backdrop click, `Escape` key |
| **Dual contact delivery** | Single submit → EmailJS email + WhatsApp draft open at the same time |
| **Form validation** | Client-side regex checks + inline red error spans, disabled button during send |
| **Mobile-first responsive** | 4 breakpoints with tuned typography, gutters, icon sizes at every tier |
| **Accessibility** | Semantic landmarks, ARIA labels, `aria-expanded`/`aria-live`/`aria-modal`, `role="tablist"` on carousel dots, `skip-link`, keyboard-navigable accordion |
| **Custom cursor** | Spark-style custom cursor with ring + core, disabled on mobile/touch automatically via `.no-custom-cursor` |

---

## 📦 Data Content Inventory

All dynamic content lives in **top-level const arrays** inside [script.js](file:///script.js). Add/remove items and re-save — no other changes needed.

### `FACULTY` (2 entries)
| # | Name | Role | Initials |
|---|---|---|---|
| 1 | Dr. P. G. Jansi Rani | Founder & Lab Director · Professor of Mathematics | PJ |
| 2 | Dr. R. Govindarajan | Co-Director & Head of Mathematics | RG |

### `SLIDES` (5 entries)
| # | Tag | Title |
|---|---|---|
| 1 | Lab Highlights | Hands-on experiments that bring theorems to life. |
| 2 | The Core Idea | A lab where every equation has a corresponding experiment. |
| 3 | Hands-On Mathematical Experiments | Applying Math to Real-World Engineering. |
| 4 | Student Outcomes | From theorems to industry-ready problem-solvers. |
| 5 | *(plus caption subtitles)* | — |

### `PROJECTS` (15 entries — `Math Concept → Real Experiment`)
| # | Project Title | Underlying Math Concept |
|---|---|---|
| 1 | Irregular Area Measurement | Integral Calculus / Green's Theorem |
| 2 | Street-Light Pole Stability | Vector Calculus |
| 3 | 3D Hologram Representation | Euler's Theorem in Complex Numbers |
| 4 | RLC Circuit Analysis | Differential Equations / Laplace Transform |
| 5 | GPS Tracking | Trilateration in Geometry |
| 6 | Material Science Modeling | Differential Calculus / Functions of Several Variables |
| 7 | Maximum-Volume Water Tank | Lagrange's Method |
| 8 | Pick and Place Robot | Coordinate Geometry |
| 9 | Laser Beam Design | Linear and Non-Linear Transformation |
| 10 | Basketball Trajectory | Quadratic Equation |
| 11 | Height of a Building | Trigonometry |
| 12 | ECG / EEG Signal Processing | Fourier Series / Fourier Transform |
| 13 | Logic Gate Circuit Model | Discrete Mathematics |
| 14 | Image Processing | Matrices |
| 15 | Eigenvalues & Eigenvectors in Practice | Eigenvalues and Eigenvectors |

### `GALLERY` (9 entries)
Lab Session, Prototype Build, Student Demonstration, Circuit Testing, Field Measurement, Data Review, Design Discussion, Model Presentation, Robotics Trial.

### `VIDEOS` (3 entries — YouTube IDs)
| # | Title | YouTube ID |
|---|---|---|
| 1 | How to prepare a tea using Mathematics? | `OEkEsP61QNk` |
| 2 | How School Maths Help to remove Kidney Stone? | `wcPhdQ7VUVI` |
| 3 | The Relationship between Sambar & Maths - Fourier Transform | `DBsGCOHRf0s` |

### `TESTIMONIALS` (5 entries)
Dr. Aruna Karthik (St. Peter's College), Prof. Mohammed Yusuf (VIT), Ms. Shalini Venkatesh (TN Edu Board), Rohit Menon (ECE student), Dr. Priya Srinivasan (Industry-Academia Bridge).

### `FAQ` (6 entries)
- What is Mathematics Reality Lab?
- Who can participate in MRL programs?
- What does a typical MRL session look like?
- Does MRL offer programs for schools/colleges?
- How can industry collaborate with MRL?
- How do I book a visit or start a conversation?

---

## 🔌 Integration Setup

All live-integration credentials live in two clearly labelled objects: `EMAILJS_CONFIG` and `CONTACT_INFO` (lines ~279–296 in `script.js`).

### EmailJS — Contact Form

| Config Key | Value | Where to find it |
|---|---|---|
| `publicKey` | `lVXm529fvgeT0RUWR` | EmailJS Dashboard → top-left (Account → API Keys → Public Key) |
| `serviceId` | `service_0enr4x3` | Add Service → Gmail → Name + Connect → Copy generated ID |
| `templateId` | `template_0irjicm` | Email Templates → Create new → ⋯ menu → Copy ID |

**SDK include** (in `<head>` of `index.html`):
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

**Email Template** (plain-text template, variable keys must exactly match):

```
From:       {{from_name}} <{{reply_to}}>
To:         {{to_name}}
Subject:    {{title}}
Phone:      {{user_phone}}
Org:        {{user_org}}

{{message}}

—
Sent at {{time}} via MRL contact form
```

**JavaScript payload keys** (from `handleContactSubmit()` → `templateParams`):
- `to_name`, `from_name`, `reply_to`, `user_phone`, `user_org`, `title`, `message`, `time`

### WhatsApp — Chat Draft

| Field | Value |
|---|---|
| `CONTACT_INFO.whatsapp` | `+91 96883 32441` (displayed) |
| `CONTACT_INFO.whatsappUrl` | `https://wa.me/919688332441` (navigated) |

On form submit, a URL-encoded prefilled message is opened in a new tab:
```
https://wa.me/919688332441?text=New+Enquiry+from+MRL+website%0A%0AName%3A+…%0AEmail%3A+…%0ASubject%3A+…%0A%0A…
```

### Google Maps — Location Embed

| Field | Value |
|---|---|
| `CONTACT_INFO.mapEmbedUrl` | Full Google Maps embed URL (pb=…) for MAM College of Engineering and Technology, Siruganur, Trichy (coords ~10.995°N, 78.779°E) |
| iframe attrs | `loading="lazy"`, `allowfullscreen=""`, `referrerpolicy="strict-origin-when-cross-origin"` |

Wrapped inside a `.contact-map.glass-card` so it gets glassmorphism, rounded corners, cyan glow shadow, and a hover lift consistent with the other contact cards.

---

## 🎨 Design System

All values are defined as CSS custom properties on `:root` (edit once, applies globally):

### Color — Neon Palette
```css
--neon-cyan:      #00E5FF;   /* primary accent, borders, glow rings */
--neon-magenta:   #FF3DC6;   /* CTA, gradient end, floating symbols */
--neon-violet:    #8B5BFF;   /* secondary gradient stop, hover */
--neon-lime:      #00FFA8;   /* success, availability state */
--neon-blue:      #2F5FFF;   /* deep anchor, email icons */
--neon-amber:     #FFB84D;   /* highlight floaters */
--neon-pink:      #FF77E0;
```
Plus matching `*-glow` rgba variants for `box-shadow` / `text-shadow`.

### Radii, Motion, Layout
```css
--radius-sm: 10px;  --radius-md: 16px;  --radius-lg: 24px;  --radius-xl: 32px;
--ease:       cubic-bezier(.22,.9,.32,1);
--dur-fast:   .2s;   --dur: .45s;   --dur-slow: .9s;
--nav-h:      76px;
```

### Glassmorphism Recipe (`.glass-card`)
```css
background:   linear-gradient(135deg, rgba(255,255,255,.78) 0%, rgba(247,250,255,.62) 100%);
backdrop-filter: blur(16px) saturate(140%);
border:       1px solid rgba(255,255,255,.8);
border-radius:20px;
box-shadow:   multi-layer: ambient blue + 1px cyan inset + 1px white inset;
```

---

## 📱 Responsive Breakpoints

Four hand-tuned tiers (per project memory — these are *immutable* breakpoint values):

| Tier | Width | Key layout changes |
|---|---|---|
| **Desktop** | > 1080 px | 2-column landing, 3-column project/video/gallery grids, 2-column contact grid |
| **Tablet-land** | ≤ 1080 px | Landing stacks (logo → top via `order: -1`), 2-column grids, contact still 2-col, footer 2-col |
| **Tablet-port** | ≤ 860 px | Hamburger nav appears, contact grid becomes 1 column, carousel captions **hidden**, faculty cards stack 1-col |
| **Mobile** | ≤ 680 px | All grids collapse to single column, form rows stack, font sizes clamped with `vw` |
| **Small Mobile** | ≤ 420 px | Tiny icon/typography polish, hamburger shrink, further card padding reduction |

Mobile-specific constraints enforced:
- **Landing logo order**: `@media (≤1080px)` → `.about-media { order: -1 }` moves media above text.
- **Carousel captions**: `@media (≤860px)` → slide titles/subtitles/tags set to `display: none`.
- **Availability text**: At ≤420 px, `overflow-wrap: anywhere` + `word-break: break-word` ensures the long status message wraps cleanly instead of clipping.
- **Custom cursor disabled**: `body:not(.no-custom-cursor)` rule auto-reverts to native cursor on mobile/touch.

---

## 🚀 Deployment

Because the site is pure static (no server, no build step), it deploys identically to any static host:

### Locally
```bash
# Just open the file
open "Math Reality/index.html"

# Or serve with any static server (e.g. for iframe/emailjs to work without CORS quirks)
cd "Math Reality" && python3 -m http.server 8080
# → visit http://localhost:8080
```

### Recommended: TRAE Deploy → Vercel
Use the **Deploy** action inside TRAE targeting **Vercel** (no Vercel account credentials needed — it is handled by the TRAE integration). First deploy produces a public `*.vercel.app` URL; subsequent pushes auto-promote to production.

### Any static host (GitHub Pages / Netlify / Cloudflare Pages / S3+CloudFront)
Just upload all files preserving folder structure. **No build step required**.

#### Important for Gmail/iframes in production
- Use **HTTPS** always (required for EmailJS SDK auth header validation, WA.me deep links, Maps embed referrer policy).
- Make sure your host sets `Content-Security-Policy` to allow `cdn.jsdelivr.net`, `api.emailjs.com`, `www.google.com/maps/embed`, `youtube.com/embed`, `wa.me`.
- **`referrerpolicy` on Maps iframe**: `strict-origin-when-cross-origin` (do not change — matches Google's current embed recommendations and prevents `403` on some corporate networks).

---

## 🌐 Browser Support

| Browser | Minimum version | Notes |
|---|---|---|
| Chrome / Edge | 94+ | Full support |
| Safari (incl. iOS) | 16.4+ | `-webkit-backdrop-filter` vendor prefix included (glassmorphism) |
| Firefox | 103+ | Full support (native `backdrop-filter` from 103) |
| Samsung Internet / Brave | All recent | Works identically to Chromium |

**Unsuitable**: IE11, Safari < 15, Firefox < 100 (no `backdrop-filter`, no CSS custom properties for palette — glass cards will degrade to solid opaque white, which is still legible).

---

## 🙌 Credits

- **Lab Concept & Direction**: Dr. P. G. Jansi Rani, Professor & Founder, MRL
- **Content & Experiments**: MRL faculty + student research assistants
- **Site Design**: Glassmorphism + Neon theme, hand-coded vanilla HTML/CSS/JS
- **Service Integrations**: EmailJS (form delivery), WhatsApp Business (chat draft), Google Maps (location), YouTube Embeds (experiment videos)
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (mono/equation strips) via Google Fonts

---

*© 2026 Mathematics Reality Lab (MRL). UDYAM-TN-27-0149456.*
