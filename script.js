/* ==========================================================================
   MATHEMATICS REALITY LAB — SCRIPT
   All content below is stored in editable data structures.
   Update the arrays/objects in this file to change site content —
   no HTML/CSS editing required.
   ========================================================================== */

/* ---------------------------------------------------------------------- *
 * 0. SEO — SINGLE SOURCE OF TRUTH FOR PUBLIC ORIGIN
 *    Change SITE_URL below to mathrealitylab.in / mathrealitylab.com when
 *    you switch the production domain. All SEO URLs (canonical, OG,
 *    JSON-LD @id/url, sitemap <loc>, robots Sitemap) are derived from
 *    this single value. Also keep the matching copy in index.html
 *    <head> inline script in sync so crawlers read one canonical origin.
 * ---------------------------------------------------------------------- */
const SITE_URL = "https://mathrealitylab.vercel.app/";

window.__SEO__ = window.__SEO__ || {};
window.__SEO__.SITE_URL = SITE_URL;

function joinUrl(base, path){
  const b = String(base || "/").replace(/\/?$/, "/");
  if (!path) return b;
  if (/^https?:\/\//i.test(path)) return path;
  return b + String(path).replace(/^\/+/, "");
}
window.__SEO__.abs = function(path){ return joinUrl(SITE_URL, path); };

/* ---------------------------------------------------------------------- *
 * 1. EDITABLE CONTENT
 * ---------------------------------------------------------------------- */

// Faculty — add more objects to this array to list additional faculty.
const FACULTY = [
  {
    name: "Dr. P. G. Jansi Rani",
    role: "Founder & Lab Director · Professor of Mathematics",
    initials: "PJ",
    bio: "Dr. P. G. Jansi Rani is the founder of the Mathematics Reality Lab and a Professor of Mathematics with over 18 years of experience bridging theoretical mathematics and real-world application. Her research focuses on applied analysis, mathematical modelling, and experimental pedagogy — turning theorems into working experiments that students can build, test, and hold in their hands.",
    vision: "A classroom where every equation has a corresponding experiment, every student is a builder, and mathematics is experienced, not just memorized — preparing a generation of thinkers who see the world through the lens of its mathematical structure.",
    email: "pgjansirani@gmail.com",
    phone: "+91 96883 32441"
  },
  
];

// Highlight carousel (above faculty) — full-width, auto-advancing image slides.
// Either image URL (src) or pattern (uses generative SVG motif like Projects).
const SLIDES = [
  {
    tag: "Lab Highlights",
    title: "Hands-on experiments that bring theorems to life.",
    subtitle: "Students at MRL build, measure, and iterate — turning abstract math into working physical models: planimeters, wave tanks, signal boards, and more.",
    src: "./asset/img_slide/c1.webp",
    pattern: "wave"
  },
  {
    tag: "Experimental Pedagogy",
    title: "A lab where every equation has a corresponding experiment.",
    subtitle: "Green's theorem → a working planimeter. Fourier analysis → a signal synthesizer. Complex analysis → a fluid-flow visualization table.",
    src: "./asset/img_slide/c2.webp",
    pattern: "fourier"
  },
  {
    tag: "Student Project Exhibition",
    title: "Hands-On Mathematical Experiments: Applying Math to Real-World Engineering.",
    subtitle: "Discover how mathematical concepts work beyond the classroom. Apply hands-on experiments to solve real-world engineering challenges.",
    src: "./asset/img_slide/c3.webp",
    pattern: "graph"
  },
  {
    tag: "Real-World Outcomes",
    title: "From theorems to industry-ready problem-solvers.",
    subtitle: "Applied-mathematics graduates with a portfolio of experiments, a deeper intuition for the math, and the communication skills to present their findings.",
    src: "./asset/img_slide/c4.webp",
    pattern: "integral"
  }
];

// Projects — sourced from the MRL applied-mathematics concept list.
// pattern: which generative SVG motif to use for the placeholder visual.
const PROJECTS = [
  {
    title: "Irregular Area Measurement",
    concept: "Integral Calculus / Green's Theorem",
    application: "Polar Planimeter",
    description: "Uses Green's Theorem to measure the area of irregular, curved shapes with a mechanical polar planimeter — turning a line integral into a physical reading.",
    pattern: "integral",
    image: "asset/project/Picture1.webp"
  },
  {
    title: "Street-Light Pole Stability",
    concept: "Vector Calculus",
    application: "Equilibrium of Forces",
    description: "Applies vector equilibrium analysis to model the forces acting on a street-light pole, demonstrating how vector calculus governs structural balance.",
    pattern: "vector",
    image: "asset/project/Picture2.webp"
  },
  {
    title: "3D Hologram Representation",
    concept: "Euler's Theorem in Complex Numbers",
    application: "Holographic Projection",
    description: "Uses Euler's theorem for complex numbers to construct a rotating 3D hologram, connecting complex-plane rotation to visual projection.",
    pattern: "complex",
    image: "asset/project/Picture3.webp"
  },
  {
    title: "RLC Circuit Analysis",
    concept: "Differential Equations / Laplace Transform",
    application: "RLC Circuit",
    description: "Models the transient and steady-state response of an RLC circuit using differential equations solved via the Laplace transform.",
    pattern: "circuit",
    image: "asset/project/Picture4.webp"
  },
  {
    title: "GPS Tracking",
    concept: "Trilateration in Geometry",
    application: "GPS Positioning",
    description: "Demonstrates how trilateration — measuring distances from known reference points — is used to pinpoint a location, the same principle behind GPS.",
    pattern: "trilateration",
    image: "asset/project/Picture5.webp"
  },
  {
    title: "Material Science Modeling",
    concept: "Differential Calculus / Functions of Several Variables",
    application: "Material Science",
    description: "Applies multivariable differential calculus to study how material properties change across multiple interacting variables.",
    pattern: "surface",
    image: "asset/project/Picture6.webp"
  },
  {
    title: "Maximum-Volume Water Tank",
    concept: "Lagrange's Method",
    application: "Rectangular Water Tank Design",
    description: "Uses Lagrange multipliers to determine the dimensions of a rectangular water tank that maximize volume under given material constraints.",
    pattern: "lagrange",
    image: "asset/project/Picture7.webp"
  },
  {
    title: "Pick and Place Robot",
    concept: "Coordinate Geometry",
    application: "Robotic Arm Positioning",
    description: "Applies coordinate geometry to compute precise pick-and-place coordinates for a robotic arm operating in a defined workspace.",
    pattern: "coordinate",
    image: "asset/project/Picture8.webp"
  },
  {
    title: "Laser Beam Design",
    concept: "Linear and Non-Linear Transformation",
    application: "Laser Optics",
    description: "Uses linear and non-linear transformations to model how a laser beam's path and shape change through an optical system.",
    pattern: "transform",
    image: "asset/project/Picture9.webp"
  },
  {
    title: "Basketball Trajectory",
    concept: "Quadratic Equation",
    application: "Projectile Motion",
    description: "Models the parabolic path of a basketball shot using quadratic equations, connecting algebra to real sports mechanics.",
    pattern: "parabola",
    image: "asset/project/Picture10.webp"
  },
  {
    title: "Height of a Building",
    concept: "Trigonometry",
    application: "Elevation Measurement",
    description: "Uses angle-of-elevation trigonometry to calculate the height of a building without direct measurement.",
    pattern: "trig",
    image: "asset/project/Picture11.webp"
  },
  {
    title: "ECG / EEG Signal Processing",
    concept: "Fourier Series / Fourier Transform",
    application: "Biomedical Signal Processing",
    description: "Applies Fourier analysis to decompose ECG and EEG signals into frequency components for cleaner biomedical signal interpretation.",
    pattern: "fourier",
    image: "asset/project/Picture12.webp"
  },
  {
    title: "Logic Gate Circuit Model",
    concept: "Discrete Mathematics",
    application: "Digital Logic Circuits",
    description: "Uses Boolean algebra and discrete mathematics to design and simulate a working logic-gate circuit model.",
    pattern: "logic",
    image: "asset/project/Picture13.webp"
  },
  {
    title: "Image Processing",
    concept: "Matrices",
    application: "Digital Image Transformation",
    description: "Represents digital images as matrices to demonstrate transformations such as filtering, rotation and compression.",
    pattern: "matrix",
    image: "asset/project/Picture14.webp"
  },
  {
    title: "Eigenvalues & Eigenvectors in Practice",
    concept: "Eigenvalues and Eigenvectors",
    application: "System Stability / Principal Directions",
    description: "Explores how eigenvalues and eigenvectors reveal the natural directions and stability behaviour of a physical or dynamic system.",
    pattern: "eigen",
    image: "asset/project/Picture15.webp"
  }
];

// Gallery — replace these placeholder entries with real photos.
// image: path to a real photo (leave empty string "" to keep the generated placeholder visual).
const GALLERY = [
  { title: "Lab Session", desc: "Students collaborating on hands-on math experiments", image: "./asset/img1.webp" },
  { title: "Prototype Build", desc: "Team assembling a mechanical planimeter from scratch", image: "./asset/img2.webp" },
  { title: "Student Demonstration", desc: "Undergrad presenting their 3D hologram project", image: "./asset/img3.webp" },
  { title: "Circuit Testing", desc: "Troubleshooting an RLC circuit with multimeter readings", image: "./asset/img4.webp" },
  { title: "Field Measurement", desc: "Using trigonometry to calculate local building heights", image: "./asset/img5.webp" },
  { title: "Data Review", desc: "Analyzing ECG signal processing results from lab tests", image: "./asset/img6.webp" },
  { title: "Design Discussion", desc: "Brainstorming new Lagrange multiplier tank prototypes", image: "./asset/img7.webp" },
  { title: "Robotic Arm Coordinate Demo", desc: "Mapping pick-and-place positions with coordinate geometry on the lab workbench", image: "asset/project/Picture8.webp" },
  { title: "Laser Optics Transform Model", desc: "Modeling laser beam paths with linear and non-linear transformations", image: "./asset/project/Picture9.webp" },
];

// Videos — set youtubeId to a real (can be unlisted) YouTube video ID to enable playback.
const VIDEOS = [
  { 
    title: "How to prepare a tea using Mathematics?", 
    desc: "Let's Make Engineering presents an experiment to prepare tea using a solar heater — and shows an accessible alternative if you don't have one.", 
    category: "Overview", 
    youtubeId: "OEkEsP61QNk" 
  },
  { 
    title: "How School Maths Helps to Remove Kidney Stones", 
    desc: "Explores how basic mathematical principles help solve the real-world problem of removing kidney stones, turning classroom theory into a practical life-saving application.",
    category: "Experiment", 
    youtubeId: "wcPhdQ7VUVI" 
  },
  { 
    title: "The Relationship between Sambar & Maths - Fourier Transform", 
    desc: "Breaks down how Fourier transforms connect to everyday cooking, using the classic South Indian sambar as a relatable example to explain signal decomposition in a fun, accessible way.",
    category: "Walkthrough", 
    youtubeId: "DBsGCOHRf0s" 
  }
];

// Testimonials — supplied feedback.
const TESTIMONIALS = [
  {
    name: "Dr. Aruna Karthik",
    role: "Head of Mathematics, St. Peter's College",
    text: "Our students were struggling to see why differential equations mattered — until they ran the RLC circuit experiment at MRL. The moment they measured real voltage curves against their Laplace solutions, something clicked. Enrollment in our advanced math track went up 40% that semester."
  },
  {
    name: "Prof. Mohammed Yusuf",
    role: "Robotics Research Lab, VIT University",
    text: "Most math labs stop at theory. MRL actually builds it. Watching my undergraduates iterate on a pick-and-place arm, adjusting Jacobians by hand because the simulation didn't match the real world — that's the kind of intuition no textbook can give you."
  },
  {
    name: "Ms. Shalini Venkatesh",
    role: "K-12 STEM Curriculum Designer, Tamil Nadu Education Board",
    text: "We brought 40 high-school students through the GPS trilateration station. Kids who had never heard of coordinate geometry were triangulating positions of a 'lost rover' with tape measures and calculators within an hour. MRL is exactly how math should be taught."
  },
  {
    name: "Rohit Menon",
    role: "Final-Year ECE Student & MRL Research Assistant",
    text: "I came into the lab scared of Fourier transforms. Three months later, I was running ECG signal demos on a live dataset for a hospital outreach event. Working here changed the way I study — every equation now feels like a tool I can actually use."
  },
  {
    name: "Dr. Priya Srinivasan",
    role: "Applied Science Consultant, Industry-Academia Bridge",
    text: "I've partnered with many university labs. MRL stands out because every project has a real industry hook — from laser beam alignment for optics firms to water-tank volume optimization for municipal contractors. Students leave interview-ready."
  },
];

// FAQ
const FAQ = [
  {
    q: "What is Mathematics Reality Lab?",
    a: "Mathematics Reality Lab (MRL) is an initiative that gives students the opportunity to apply mathematical concepts to real-world problems through hands-on, experiment-based projects."
  },
  {
    q: "Who can collaborate with or visit MRL?",
    a: "Educators, institutions, industry professionals and student teams interested in applied, experimental mathematics are welcome to reach out and start a conversation."
  },
  {
    q: "How are the experiments designed?",
    a: "Each experiment pairs a specific mathematical concept — such as a transform, theorem or equation — with a physical or digital model that demonstrates it in a real-world context."
  },
  {
    q: "Can new projects be added over time?",
    a: "Yes. The project, gallery and video systems on this site are built from editable data structures, so new work can be added as it's completed."
  },
  {
    q: "How can I get in touch about a project or collaboration?",
    a: "Use the contact form at the bottom of this page, or email the contact address listed in the Faculty section, and the team will follow up with you."
  },
  {
    q: "Is MRL affiliated with a specific institution?",
    a: "Institutional details can be added here once confirmed — this section is intentionally left as an editable placeholder."
  }
];

// EmailJS — plug in your keys from the EmailJS dashboard.
// Template to paste into the EmailJS "Create template" editor is provided below the form handler.
const EMAILJS_CONFIG = {
  publicKey: "lVXm529fvgeT0RUWR",      // Public Key (top-left of https://dashboard.emailjs.com/)
  serviceId: "service_0enr4x3",        // Service ID  (Add Service → Gmail → Name + Connect → Copy ID)
  templateId: "template_0irjicm"       // Template ID (Email Templates → Create new template → ... menu → Copy ID)
};

// Contact — only filled fields are rendered; leave blank to omit.
const CONTACT_INFO = {
  email: "mathrealitylab@gmail.com",
  phone: "+91 96883 32441",
  address: "",
  whatsapp: "+91 96883 32441",
  whatsappUrl: "https://wa.me/919688332441",
  linkedin: "Mathematics Reality Lab",
  // linkedinUrl: "https://linkedin.com/company/math-reality-lab",
  availability: "Currently accepting collaborations & student projects",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4273.098192767815!2d78.77937333856808!3d10.995105498257743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafa4dba7966a5%3A0xf4d17ef98c87e33!2sMAM%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY!5e1!3m2!1sen!2sin!4v1788407307795!5m2!1sen!2sin"
};


/* ---------------------------------------------------------------------- *
 * 2. GENERATIVE SVG PLACEHOLDER VISUALS (no external image files needed)
 * ---------------------------------------------------------------------- */

function mathSvg(pattern, seedIndex = 0){
  const hueShift = (seedIndex * 13) % 40;
  const stroke = "#2f5fff";
  const accent = "#00c2ff";
  const bg = `hsl(${222 + hueShift}, 45%, 97%)`;

  const wrap = (inner) => `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="${bg}"/>
      <g opacity="0.9">${inner}</g>
    </svg>`;

  const patterns = {
    integral: `<path d="M40 240 C 120 40, 180 260, 400 60" fill="none" stroke="${stroke}" stroke-width="2.5"/>
      <text x="300" y="90" font-family="Georgia,serif" font-size="46" fill="${accent}">∫</text>`,
    vector: `<line x1="80" y1="240" x2="240" y2="90" stroke="${stroke}" stroke-width="3"/><polygon points="240,90 222,100 232,116" fill="${stroke}"/>
      <line x1="80" y1="240" x2="320" y2="220" stroke="${accent}" stroke-width="3"/><polygon points="320,220 300,212 306,232" fill="${accent}"/>`,
    complex: `<circle cx="200" cy="150" r="90" fill="none" stroke="${stroke}" stroke-width="2"/>
      <line x1="200" y1="150" x2="270" y2="90" stroke="${accent}" stroke-width="3"/>
      <circle cx="270" cy="90" r="5" fill="${accent}"/>
      <text x="120" y="60" font-family="Georgia,serif" font-size="30" fill="${stroke}">e^iθ</text>`,
    circuit: `<rect x="60" y="120" width="60" height="30" fill="none" stroke="${stroke}" stroke-width="2.5"/>
      <path d="M180 135 q10 -30 20 0 t20 0 t20 0 t20 0" fill="none" stroke="${stroke}" stroke-width="2.5"/>
      <line x1="30" y1="135" x2="60" y2="135" stroke="${stroke}" stroke-width="2.5"/>
      <line x1="280" y1="135" x2="340" y2="135" stroke="${accent}" stroke-width="2.5"/>
      <circle cx="340" cy="135" r="5" fill="${accent}"/>`,
    trilateration: `<circle cx="150" cy="120" r="70" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-dasharray="4 5"/>
      <circle cx="260" cy="180" r="60" fill="none" stroke="${accent}" stroke-width="1.6" stroke-dasharray="4 5"/>
      <circle cx="200" cy="230" r="55" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-dasharray="4 5"/>
      <circle cx="210" cy="175" r="6" fill="${accent}"/>`,
    surface: `<path d="M30 220 Q 120 120 200 200 T 370 160" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M30 180 Q 120 90 200 160 T 370 120" fill="none" stroke="${accent}" stroke-width="2" opacity="0.7"/>`,
    lagrange: `<rect x="110" y="90" width="150" height="110" fill="none" stroke="${stroke}" stroke-width="2.5"/>
      <ellipse cx="185" cy="145" rx="120" ry="70" fill="none" stroke="${accent}" stroke-width="1.6" stroke-dasharray="4 5"/>`,
    coordinate: `<line x1="40" y1="250" x2="360" y2="250" stroke="${stroke}" stroke-width="1.6"/>
      <line x1="60" y1="270" x2="60" y2="40" stroke="${stroke}" stroke-width="1.6"/>
      <circle cx="220" cy="120" r="7" fill="${accent}"/>
      <line x1="60" y1="120" x2="220" y2="120" stroke="${accent}" stroke-width="1.4" stroke-dasharray="3 4"/>
      <line x1="220" y1="250" x2="220" y2="120" stroke="${accent}" stroke-width="1.4" stroke-dasharray="3 4"/>`,
    transform: `<line x1="70" y1="230" x2="330" y2="80" stroke="${stroke}" stroke-width="2"/>
      <line x1="70" y1="230" x2="330" y2="230" stroke="${accent}" stroke-width="2" opacity="0.5"/>
      <polygon points="330,80 315,86 322,98" fill="${stroke}"/>`,
    parabola: `<path d="M40 250 Q 200 20 360 250" fill="none" stroke="${stroke}" stroke-width="2.5"/>
      <circle cx="200" cy="60" r="6" fill="${accent}"/>`,
    trig: `<line x1="60" y1="250" x2="330" y2="250" stroke="${stroke}" stroke-width="2"/>
      <line x1="60" y1="250" x2="60" y2="60" stroke="${stroke}" stroke-width="2"/>
      <line x1="60" y1="250" x2="300" y2="70" stroke="${accent}" stroke-width="2.5"/>
      <path d="M100 250 A 40 40 0 0 0 90 220" fill="none" stroke="${stroke}" stroke-width="1.6"/>`,
    fourier: `<path d="M30 150 Q 60 60 90 150 T 150 150 T 210 150 T 270 150 T 330 150" fill="none" stroke="${stroke}" stroke-width="2"/>
      <path d="M30 200 Q 50 170 70 200 T 110 200 T 150 200 T 190 200 T 230 200 T 270 200 T 310 200" fill="none" stroke="${accent}" stroke-width="1.6" opacity="0.7"/>`,
    logic: `<rect x="60" y="110" width="70" height="60" fill="none" stroke="${stroke}" stroke-width="2.2"/>
      <text x="72" y="150" font-family="JetBrains Mono, monospace" font-size="20" fill="${stroke}">AND</text>
      <path d="M200 100 h60 a35 35 0 0 1 0 70 h-60 z" fill="none" stroke="${accent}" stroke-width="2.2"/>
      <line x1="130" y1="120" x2="200" y2="120" stroke="${stroke}" stroke-width="2"/>
      <line x1="130" y1="160" x2="200" y2="160" stroke="${stroke}" stroke-width="2"/>`,
    matrix: `<text x="70" y="130" font-family="JetBrains Mono, monospace" font-size="26" fill="${stroke}">[ a  b ]</text>
      <text x="70" y="170" font-family="JetBrains Mono, monospace" font-size="26" fill="${stroke}">[ c  d ]</text>
      <rect x="230" y="90" width="90" height="90" fill="none" stroke="${accent}" stroke-width="1.6"/>
      <rect x="245" y="105" width="60" height="60" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="3 4"/>`,
    eigen: `<line x1="200" y1="150" x2="320" y2="90" stroke="${stroke}" stroke-width="3"/>
      <line x1="200" y1="150" x2="90" y2="220" stroke="${stroke}" stroke-width="3" opacity="0.55"/>
      <circle cx="200" cy="150" r="6" fill="${accent}"/>
      <text x="210" y="80" font-family="Georgia,serif" font-size="26" fill="${accent}">λv</text>`,
    grid: `<g stroke="${stroke}" stroke-width="1" opacity="0.5">
      ${Array.from({length:8}).map((_,i)=>`<line x1="${i*50}" y1="0" x2="${i*50}" y2="300"/>`).join("")}
      ${Array.from({length:6}).map((_,i)=>`<line x1="0" y1="${i*50}" x2="400" y2="${i*50}"/>`).join("")}
      </g><circle cx="200" cy="150" r="8" fill="${accent}"/>`
  };

  return wrap(patterns[pattern] || patterns.grid);
}


/* ---------------------------------------------------------------------- *
 * 3. RENDER FUNCTIONS
 * ---------------------------------------------------------------------- */

function renderFaculty(){
  const el = document.getElementById("facultyList");
  el.innerHTML = FACULTY.map(f => `
    <div class="faculty-card reveal">
      <div class="faculty-avatar">${f.initials}</div>
      <div>
        <h3 class="faculty-name">${f.name}</h3>
        <p class="faculty-role">${f.role}</p>
        <p class="faculty-desc">${f.bio}</p>
        ${f.vision ? `<p class="faculty-desc"><strong>Vision:</strong> ${f.vision}</p>` : ""}
        <div class="faculty-meta">
          ${f.email ? `<a href="mailto:${f.email}" aria-label="Email ${f.name}">✉ ${f.email}</a>` : ""}
          ${f.phone ? `<a href="tel:${f.phone.replace(/[^\d+]/g, '')}" aria-label="Call ${f.name}">☎ ${f.phone}</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects(){
  const el = document.getElementById("projectsGrid");
  el.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="project-media">
        ${p.image ? `<img src="${p.image}" alt="${p.title} — ${p.concept} applied-mathematics experiment at Mathematics Reality Lab" loading="lazy" decoding="async">` : mathSvg(p.pattern, i)}
        <span class="project-index mono">0${i + 1 < 10 ? i + 1 : i + 1}</span>
      </div>
      <div class="project-body">
        <p class="project-tag">${p.concept}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-foot">
          <span class="project-app">${p.application}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderGallery(){
  const el = document.getElementById("galleryGrid");
  el.innerHTML = GALLERY.map((g, i) => `
    <div class="gallery-card reveal reveal-delay-${(i % 3) + 1}" role="button" tabindex="0" aria-label="View ${g.title}: ${g.desc}" data-title="${g.title}" data-desc="${g.desc}" data-index="${i}">
      ${g.image ? `<img src="${g.image}" alt="${g.title}: ${g.desc}" loading="lazy" decoding="async">` : mathSvg(g.pattern, i)}
      <div class="gallery-overlay">
        <span class="gallery-overlay-title">${g.title}</span>
        <span class="gallery-overlay-desc">${g.desc}</span>
      </div>
    </div>
  `).join("");
}

// ---------- Carousel (image slider) — full width, auto-advance, controls, dots, swipe
function renderSlider(){
  const track = document.getElementById("sliderTrack");
  const dotsWrap = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const sliderEl = document.getElementById("slider");
  if (!track || !dotsWrap || !SLIDES.length) return;

  let current = 0;
  const total = SLIDES.length;
  const AUTOPLAY_MS = 5500;
  let timer = null;

  // Build slides
  track.innerHTML = SLIDES.map((s, i) => `
    <div class="slide ${i === 0 ? "is-active" : ""}" data-slide="${i}">
      ${s.src
        ? `<img class="slide-img" src="${s.src}" alt="${s.title} — ${s.tag || "MRL lab highlight"}" loading="${i === 0 ? "eager" : "lazy"}" decoding="${i === 0 ? "async" : "async"}">`
        : `<div class="slide-img" style="display:block;">${mathSvg(s.pattern || "wave", i).replace('<svg', '<svg style="width:100%;height:100%;display:block;"')}</div>`
      }
      <div class="slide-caption">
        ${s.tag ? `<span class="slide-tag">${s.tag}</span>` : ""}
        <h3 class="slide-title">${s.title || ""}</h3>
        ${s.subtitle ? `<p class="slide-subtitle">${s.subtitle}</p>` : ""}
      </div>
    </div>
  `).join("");

  // Build dots
  dotsWrap.innerHTML = SLIDES.map((_, i) =>
    `<button class="slider-dot ${i === 0 ? "is-active" : ""}" role="tab" aria-selected="${i === 0 ? "true" : "false"}" aria-label="Go to slide ${i + 1}" data-i="${i}"></button>`
  ).join("");

  const go = (idx, fromUser = false) => {
    idx = ((idx % total) + total) % total;
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    [...track.children].forEach((el, i) => el.classList.toggle("is-active", i === current));
    [...dotsWrap.children].forEach((el, i) => {
      el.classList.toggle("is-active", i === current);
      el.setAttribute("aria-selected", String(i === current));
    });
    if (fromUser) restart();
  };

  const next = (u=false) => go(current + 1, u);
  const prev = (u=false) => go(current - 1, u);

  const start = () => { stop(); timer = setInterval(() => next(false), AUTOPLAY_MS); };
  const stop  = () => { if (timer){ clearInterval(timer); timer = null; } };
  const restart = () => { stop(); start(); };

  if (prevBtn) prevBtn.addEventListener("click", () => prev(true));
  if (nextBtn) nextBtn.addEventListener("click", () => next(true));
  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".slider-dot"); if (!btn) return;
    go(parseInt(btn.dataset.i, 10) || 0, true);
  });

  if (sliderEl) {
    sliderEl.addEventListener("mouseenter", stop);
    sliderEl.addEventListener("mouseleave", start);
    sliderEl.addEventListener("focusin", stop);
    sliderEl.addEventListener("focusout", start);

    // Touch / swipe support (minimal, for mobile users)
    let startX = 0, dx = 0, touching = false;
    sliderEl.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dx = 0; touching = true; stop(); }, {passive:true});
    sliderEl.addEventListener("touchmove",  (e) => { if (!touching) return; dx = e.touches[0].clientX - startX; }, {passive:true});
    sliderEl.addEventListener("touchend", () => {
      if (!touching) return; touching = false;
      if (Math.abs(dx) > 50){ dx < 0 ? next(true) : prev(true); } else { start(); }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prev(true);
    else if (e.key === "ArrowRight") next(true);
  });

  // Pause autoplay when tab is hidden to prevent drift out of viewport (Page Visibility API)
  document.addEventListener("visibilitychange", () => { document.hidden ? stop() : start(); });

  start();
}

function initGalleryLightbox(){
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImage");
  const lbCap = document.getElementById("lightboxCaption");
  const lbClose = document.getElementById("lightboxClose");
  const grid = document.getElementById("galleryGrid");
  if (!lb || !lbImg || !lbCap || !lbClose || !grid) return;

  let lastActiveElement = null;

  const open = (src, title, desc) => {
    lastActiveElement = document.activeElement;
    lbImg.src = src;
    lbImg.alt = title || "";
    lbCap.innerHTML = `<strong>${title || ""}</strong>${desc && desc !== title ? `<span>${desc}</span>` : ""}`;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-open");
    lbClose.focus();
  };

  const close = () => {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lb-open");
    setTimeout(() => { lbImg.src = ""; lbCap.innerHTML = ""; }, 220);
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  };

  const handleCardTrigger = (card) => {
    if (!card) return;
    const idx = Number(card.dataset.index);
    const entry = GALLERY[idx];
    if (!entry) return;
    if (entry.image) {
      open(entry.image, entry.title, entry.desc);
    } else {
      const svgEl = card.querySelector("svg");
      if (svgEl) {
        const clone = svgEl.cloneNode(true);
        clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        const svgStr = new XMLSerializer().serializeToString(clone);
        const dataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
        open(dataUrl, entry.title, entry.desc);
      }
    }
  };

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-card");
    handleCardTrigger(card);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".gallery-card");
      if (card) {
        e.preventDefault();
        handleCardTrigger(card);
      }
    }
  });

  lbClose.addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.id === "lightboxStage") close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("open")) close(); });
}

function renderVideos(){
  const el = document.getElementById("videosGrid");
  el.innerHTML = VIDEOS.map((v, i) => `
    <article class="video-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="video-embed-wrap">
        ${v.youtubeId
          ? `<iframe src="https://www.youtube.com/embed/${v.youtubeId}" title="YouTube video player" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
          : `<div class="video-placeholder"><span class="play-icon">▶</span><span class="hint">Add a YouTube video ID in script.js</span></div>`
        }
      </div>
      <div class="video-body">
        <p class="video-cat">${v.category}</p>
        <h3 class="video-title">${v.title}</h3>
        <p class="video-desc">${v.desc}</p>
      </div>
    </article>
  `).join("");
}

function renderTestimonials(){
  const el = document.getElementById("testimonialTrack");
  const titlePrefixes = /^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?|miss|shri|smt|er\.?|eng\.?|col\.?|lt\.?|capt\.?)$/i;
  const getInitials = (name) => {
    const words = name.replace(/[\[\]]/g,"").trim().split(/\s+/);
    const filtered = words.filter(w => !titlePrefixes.test(w));
    const use = filtered.length >= 2 ? filtered : words;
    return use.map(w => w[0]).slice(0, 2).join("").toUpperCase();
  };
  el.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-top">
        <div class="testi-avatar">${getInitials(t.name)}</div>
        <div>
          <p class="testi-name">${t.name}</p>
          <p class="testi-role">${t.role}</p>
        </div>
      </div>
      <p class="testi-text">${t.text}</p>
    </div>
  `).join("");
}

function renderFaq(){
  const el = document.getElementById("faqList");
  el.innerHTML = FAQ.map((f, i) => `
    <div class="faq-item reveal" id="faq-${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" data-index="${i}">
        <span>${f.q}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join("");
}

function renderContact(){
  const cardsEl = document.getElementById("contactCards");
  const cards = [];

  if (CONTACT_INFO.email) cards.push(`
    <a href="mailto:${CONTACT_INFO.email}" class="ccard" data-cursor="link">
      <span class="ccard-icon ccard-icon-mail" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="m20 7-7.5 5.25a2 2 0 0 1-2.5 0L2.5 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="ccard-body">
        <span class="ccard-label">Email</span>
        <span class="ccard-value">${CONTACT_INFO.email}</span>
      </span>
    </a>
  `);

  if (CONTACT_INFO.whatsapp) cards.push(`
    <a href="${CONTACT_INFO.whatsappUrl || '#'}" class="ccard" target="_blank" rel="noopener" data-cursor="link">
      <span class="ccard-icon ccard-icon-wa" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.94L0 24l6.32-1.66a11.87 11.87 0 0 0 5.73 1.46h.01c6.54 0 11.87-5.33 11.87-11.88 0-3.17-1.24-6.16-3.41-8.44Zm-8.47 19.5h-.01a9.88 9.88 0 0 1-5.04-1.39l-.36-.21-3.75.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.24c0-5.45 4.43-9.88 9.88-9.88 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.98c-.01 5.45-4.44 9.88-9.83 9.88Zm5.4-7.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.12 4.51 3 1.29 3 .86 3.55.8.55-.07 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" fill="currentColor"/>
        </svg>
      </span>
      <span class="ccard-body">
        <span class="ccard-label">WhatsApp</span>
        <span class="ccard-value">Chat on WhatsApp</span>
      </span>
    </a>
  `);

  // if (CONTACT_INFO.linkedin) cards.push(`
  //   <a href="${CONTACT_INFO.linkedinUrl || '#'}" class="ccard" target="_blank" rel="noopener" data-cursor="link">
  //     <span class="ccard-icon ccard-icon-li" aria-hidden="true">
  //       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.8"/>
  //         <path d="M7 10v7M7 7.5v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  //       </svg>
  //     </span>
  //     <span class="ccard-body">
  //       <span class="ccard-label">LinkedIn</span>
  //       <span class="ccard-value">${CONTACT_INFO.linkedin}</span>
  //     </span>
  //   </a>
  // `);

  if (CONTACT_INFO.availability) cards.push(`
    <div class="ccard ccard-availability" aria-live="polite">
      <span class="ccard-avail-dot" aria-hidden="true"></span>
      <span class="ccard-avail-text">${CONTACT_INFO.availability}</span>
    </div>
  `);

  cardsEl.innerHTML = cards.join("");

  const footerEl = document.getElementById("footerContact");
  let footerHtml = `<h4>Contact</h4><ul>`;
  if (CONTACT_INFO.email) footerHtml += `<li><a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a></li>`;
  if (CONTACT_INFO.phone) footerHtml += `<li><a href="tel:${CONTACT_INFO.phone}">${CONTACT_INFO.phone}</a></li>`;
  if (!CONTACT_INFO.email && !CONTACT_INFO.phone) footerHtml += `<li>Use the contact form above</li>`;
  footerHtml += `</ul>`;
  footerEl.innerHTML = footerHtml;

  if (CONTACT_INFO.mapEmbedUrl) {
    const mapFrame = document.getElementById("mapFrame");
    if (mapFrame) mapFrame.innerHTML = `<iframe src="${CONTACT_INFO.mapEmbedUrl}" style="border:0;width:100%;height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="MRL location map — MAM College of Engineering and Technology"></iframe>`;
  }
}


/* ---------------------------------------------------------------------- *
 * 4. CUSTOM SPARK CURSOR
 * ---------------------------------------------------------------------- */

function initCursor(){
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (isTouch) {
    document.body.classList.add("no-custom-cursor");
    return;
  }

  const cursor = document.getElementById("sparkCursor");
  if (!cursor) return;

  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let curX = mouseX, curY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function loop(){
    curX += (mouseX - curX) * 0.22;
    curY += (mouseY - curY) * 0.22;
    cursor.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const hoverTargets = "a, button, input, textarea, .project-card, .gallery-card, .video-card, .testi-card, .faq-question";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) document.body.classList.add("cursor-active");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) document.body.classList.remove("cursor-active");
  });
}


/* ---------------------------------------------------------------------- *
 * 5. NAVIGATION: scroll shadow, active link, mobile menu
 * ---------------------------------------------------------------------- */

function initNav(){
  const navWrap = document.getElementById("navWrap");
  window.addEventListener("scroll", () => {
    navWrap.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  document.querySelectorAll(".mobile-link, .mobile-cta").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Active-section highlighting
  const navLinks = document.querySelectorAll(".nav-link, .mobile-link");
  const sections = ["about","projects","gallery","videos","contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle("active", l.dataset.section === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => spy.observe(s));
}


/* ---------------------------------------------------------------------- *
 * 6. SCROLL REVEAL
 * ---------------------------------------------------------------------- */

function initReveal(){
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => io.observe(item));
}


/* ---------------------------------------------------------------------- *
 * 7. FAQ ACCORDION
 * ---------------------------------------------------------------------- */

function initFaq(){
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-answer").style.maxHeight = null;
          openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = null;
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}


/* ---------------------------------------------------------------------- *
 * 8. TESTIMONIAL CAROUSEL (drag + buttons)
 * ---------------------------------------------------------------------- */

function initTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const prev = document.getElementById("testiPrev");
  const next = document.getElementById("testiNext");
  if (!track) return;

  let isDown = false, startX = 0, scrollStart = 0;
  let touchActive = false, touchStartX = 0, touchScrollStart = 0;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("dragging");
    startX = e.pageX;
    scrollStart = track.scrollLeft;
  });
  window.addEventListener("mouseup", () => { isDown = false; track.classList.remove("dragging"); });
  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    track.scrollLeft = scrollStart - (e.pageX - startX);
  });

  track.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    touchActive = true;
    touchStartX = e.touches[0].pageX;
    touchScrollStart = track.scrollLeft;
  }, { passive: true });

  track.addEventListener("touchmove", (e) => {
    if (!touchActive || e.touches.length !== 1) return;
    const dx = e.touches[0].pageX - touchStartX;
    track.scrollLeft = touchScrollStart - dx;
  }, { passive: true });

  track.addEventListener("touchend", () => { touchActive = false; });
  track.addEventListener("touchcancel", () => { touchActive = false; });

  const step = () => {
    const card = track.querySelector(".testi-card");
    return card ? card.getBoundingClientRect().width + 22 : 320;
  };
  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
}


/* ---------------------------------------------------------------------- *
 * 9. CONTACT FORM — EmailJS send + parallel WhatsApp handoff
 * ---------------------------------------------------------------------- */

function buildWhatsAppText(payload){
  const lines = [
    `*New MRL Website Enquiry*`,
    ``,
    `*Name:* ${payload.name}`,
    `*Email:* ${payload.email}`
  ];
  if (payload.phone) lines.push(`*Phone:* ${payload.phone}`);
  if (payload.organization) lines.push(`*Organization:* ${payload.organization}`);
  lines.push(`*Subject:* ${payload.subject}`);
  lines.push(``);
  lines.push(`*Message:*`);
  lines.push(payload.message);
  return lines.join("\n");
}

function cleanWhatsAppNumber(raw){
  if (!raw) return "";
  return String(raw).replace(/[^\d]/g, "").replace(/^0+/, "");
}

function openWhatsAppWithForm(payload){
  const baseNumber = cleanWhatsAppNumber(
    CONTACT_INFO.whatsapp || (CONTACT_INFO.whatsappUrl || "").replace(/^https?:\/\/wa\.me\//, "")
  );
  if (!baseNumber) return null;

  const url = "https://wa.me/" + baseNumber + "?text=" + encodeURIComponent(buildWhatsAppText(payload));
  return window.open(url, "_blank", "noopener,noreferrer");
}

function initContactForm(){
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  const btnText = document.getElementById("submitBtnText");
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  if (!form) return;

  const rules = {
    name: v => v.trim().length >= 2 || "Please enter your name.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Please enter a valid email address.",
    phone: v => v.trim() === "" || /^[+\d][\d\s\-()]{6,}$/.test(v) || "Please enter a valid phone number.",
    subject: v => v.trim().length >= 3 || "Please enter a subject.",
    message: v => v.trim().length >= 10 || "Please enter a message (10+ characters)."
  };

  function payloadFromForm(){
    const now = new Date();
    return {
      // —— Plain template placeholders (match the EmailJS visual editor) ——
      //    NOTE: EmailJS uses {{double curly braces}} syntax; these keys
      //    below directly correspond to the {{name}} / {{title}} / etc.
      //    placeholders used in the template's plain Content editor.
      name:         form.elements.name.value.trim(),
      email:        form.elements.email.value.trim(),
      phone:        (form.elements.phone.value || "").trim(),
      organization: (form.elements.organization.value || "").trim(),
      title:        form.elements.subject.value.trim(),
      subject:      form.elements.subject.value.trim(),
      message:      form.elements.message.value.trim(),
      time:         now.toLocaleString(),
      date:         now.toLocaleDateString(),

      // —— EmailJS template fields (human-readable copies, safe to use
      //    alongside the above short aliases) ——
      to_email:     CONTACT_INFO.email || "",
      to_name:      "MRL Team",
      from_name:    form.elements.name.value.trim(),
      reply_to:     form.elements.email.value.trim(),
      user_phone:   (form.elements.phone.value || "").trim(),
      user_org:     (form.elements.organization.value || "").trim(),
      enquiry_subject: form.elements.subject.value.trim(),
      enquiry_message: form.elements.message.value.trim(),
      submitted_at: now.toLocaleString()
    };
  }

  function validateField(field){
    const input = form.elements[field];
    const errEl = document.getElementById("err-" + field);
    if (!input || !rules[field]) return true;
    const result = rules[field](input.value);
    const wrapper = input.closest(".form-field");
    if (result === true) {
      if (wrapper) wrapper.classList.remove("invalid");
      input.removeAttribute("aria-invalid");
      if (errEl) errEl.textContent = "";
      return true;
    } else {
      if (wrapper) wrapper.classList.add("invalid");
      input.setAttribute("aria-invalid", "true");
      if (errEl) errEl.textContent = result;
      return false;
    }
  }

  Object.keys(rules).forEach(field => {
    const input = form.elements[field];
    if (input) input.addEventListener("blur", () => validateField(field));
  });

  function setBusy(busy, label){
    if (submitBtn) submitBtn.disabled = busy;
    if (!btnText) return;
    if (busy) {
      btnText.dataset.original = btnText.textContent;
      btnText.textContent = label || "Sending…";
      form.setAttribute("aria-busy", "true");
    } else {
      btnText.textContent = btnText.dataset.original || btnText.textContent;
      form.removeAttribute("aria-busy");
    }
  }

  function emailjsConfigReady(){
    return Boolean(
      window.emailjs &&
      EMAILJS_CONFIG.publicKey &&
      EMAILJS_CONFIG.serviceId &&
      EMAILJS_CONFIG.templateId
    );
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const validations = Object.keys(rules).map(validateField);
    const allValid = validations.every(Boolean);

    if (!allValid) {
      note.textContent = "Please fix the highlighted fields and try again.";
      note.classList.remove("success");
      return;
    }

    const payload = payloadFromForm();
    setBusy(true, "Sending…");
    note.classList.remove("success");
    note.textContent = "";

    let emailSent = false;
    let emailError = "";
    let waOpened = null;

    // 1) Email — via EmailJS (if configured)
    if (emailjsConfigReady()) {
      try {
        if (!window.emailjs._initialized) {
          window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
          window.emailjs._initialized = true;
        }
        const params = { ...payload };
        await window.emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          params,
          { publicKey: EMAILJS_CONFIG.publicKey }
        );
        emailSent = true;
      } catch (err) {
        console.error("EmailJS send failed:", err);
        emailError = (err && err.text) || (err && err.message) || String(err);
        emailSent = false;
      }
    } else {
      emailError = "EmailJS is not configured yet. Open script.js and fill EMAILJS_CONFIG.";
      emailSent = false;
    }

    // 2) WhatsApp — parallel handoff. Opens MRL's WhatsApp chat with the
    //    same enquiry details filled as the start message. The user can
    //    then tap SEND from WhatsApp; we never post anything on their behalf.
    try {
      waOpened = openWhatsAppWithForm(payload);
    } catch (err) {
      console.warn("WhatsApp handoff failed:", err);
      waOpened = null;
    }

    setBusy(false);

    if (emailSent) {
      let msg = "Message sent — check *mathrealitylab@gmail.com* for the enquiry.";
      if (waOpened) msg += " A WhatsApp chat draft also opened in a new tab.";
      else if (CONTACT_INFO.whatsappUrl) msg += " Tip: click the WhatsApp card in the contact section to open a chat.";
      note.textContent = msg;
      note.classList.add("success");
      form.reset();
      return;
    }

    // Email not delivered — still surface success via WhatsApp if possible.
    if (waOpened) {
      note.textContent = "Email send skipped, but a WhatsApp draft opened in a new tab with all your details. Tap SEND in WhatsApp to deliver the message.";
      note.classList.add("success");
      form.reset();
      return;
    }

    // Neither worked: show the underlying reason so user can fix config.
    note.textContent =
      "Couldn't deliver the message. " +
      (emailError ? ` Reason: ${emailError}` : "") +
      (CONTACT_INFO.whatsappUrl
        ? ` As a fallback, click the WhatsApp card on the left (or email ${CONTACT_INFO.email}) and paste your enquiry there.`
        : ` Please email ${CONTACT_INFO.email} directly.`);
    note.classList.remove("success");
  });
}

/* ======================================================================== *
 * EMAILJS TEMPLATE — copy everything between the two === lines into
 * https://dashboard.emailjs.com/admin/templates → Create new template.
 *
 * SETTINGS (left sidebar of the EmailJS template editor):
 *   Template name      : MRL Website Enquiry
 *   Subject line       : MRL Website — New Enquiry from {{from_name}}
 *   From name          : MRL Website
 *   From email         : {{reply_to}}          (IMPORTANT — so replies go to the enquirer)
 *   Reply-to           : {{reply_to}}
 *   To email           : mathrealitylab@gmail.com   (type this exactly in the "To" box)
 *
 * HTML BODY (click the </> icon to enable HTML source, then paste this):
 * ========================================================================
<div style="font-family:'Inter','Segoe UI',Helvetica,Arial,sans-serif; background:#f6f8ff; padding:32px 18px; color:#0f172a;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:18px; overflow:hidden; border:1px solid rgba(139,91,255,0.22); box-shadow:0 24px 60px rgba(139,91,255,0.12), 0 0 0 1px rgba(0,229,255,0.18) inset;">
    <tr>
      <td style="padding:28px 34px 22px; background:linear-gradient(120deg,#00e5ff 0%,#2f5fff 45%,#8b5bff 100%); color:#ffffff;">
        <div style="font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:13px; letter-spacing:.18em; text-transform:uppercase; opacity:.92;">Mathematics Reality Lab</div>
        <h1 style="margin:6px 0 6px; font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:28px; line-height:1.15; color:#ffffff;">New Enquiry from {{from_name}}</h1>
        <p style="margin:0; font-size:14px; opacity:.96;">Submitted at {{submitted_at}}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 34px 10px;">
        <h2 style="margin:0 0 10px; font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:18px; color:#0f172a;">{{enquiry_subject}}</h2>
        <div style="background:linear-gradient(135deg, rgba(0,229,255,0.10), rgba(139,91,255,0.10)); border:1px solid rgba(0,229,255,0.22); border-radius:14px; padding:18px 20px; font-size:15px; line-height:1.65; color:#0f172a; white-space:pre-wrap;">{{enquiry_message}}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:14px 34px 6px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td colspan="2" style="padding:14px 0 10px; font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:14px; letter-spacing:.12em; text-transform:uppercase; color:#8b5bff;">Sender Details</td>
          </tr>
          <tr>
            <td style="width:140px; padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Full Name</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;"><strong>{{from_name}}</strong></td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Email</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;"><a href="mailto:{{reply_to}}" style="color:#2f5fff; text-decoration:underline;">{{reply_to}}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Phone</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;">{{user_phone}}{{^user_phone}}<span style="color:#94a3b8;">— not provided —</span>{{/user_phone}}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Organization / Company</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;">{{user_org}}{{^user_org}}<span style="color:#94a3b8;">— not provided —</span>{{/user_org}}</td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Enquiry Subject</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;"><strong>{{enquiry_subject}}</strong></td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-size:13px; color:#64748b; vertical-align:top;">Delivered To</td>
            <td style="padding:10px 0; font-size:15px; color:#0f172a;">{{to_email}}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:22px 34px 32px;">
        <div style="border-top:1px dashed rgba(139,91,255,0.35); padding-top:18px; font-size:12px; line-height:1.6; color:#64748b;">
          Tip — reply to this email directly. The <strong>From</strong> and <strong>Reply-To</strong> are set to <em>{{reply_to}}</em>, so your reply lands in the enquirer's inbox.
        </div>
      </td>
    </tr>
  </table>
</div>
 * ========================================================================
 *
 * AUTO-REPLY TEMPLATE (optional, 2nd template, set it as auto-reply from
 *                      the *Auto-responders* tab after saving the above):
 *   Subject  : Thanks for reaching out to Mathematics Reality Lab
 *   To email : {{reply_to}}
 *   Body (HTML mode) — paste this:
 * ------------------------------------------------------------------------
<div style="font-family:'Inter','Segoe UI',Helvetica,Arial,sans-serif; background:#f6f8ff; padding:28px 16px;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:620px; margin:0 auto; background:#ffffff; border-radius:18px; overflow:hidden; border:1px solid rgba(0,229,255,0.22); box-shadow:0 22px 56px rgba(0,229,255,0.12);">
    <tr><td style="padding:26px 30px 22px; background:linear-gradient(120deg,#00e5ff 0%,#2f5fff 55%,#ff3dc6 100%); color:#ffffff;">
      <div style="font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:13px; letter-spacing:.18em; text-transform:uppercase; opacity:.94;">Mathematics Reality Lab</div>
      <h1 style="margin:6px 0 0; font-family:'Space Grotesk',Inter,Arial,sans-serif; font-size:26px;">Thanks, {{from_name}} 👋</h1>
    </td></tr>
    <tr><td style="padding:26px 30px 10px; font-size:15px; line-height:1.7; color:#0f172a;">
      We've received your message about <strong>{{enquiry_subject}}</strong>. A member of the MRL team will reply to <em>{{reply_to}}</em> within 2–3 working days.
      <br><br>
      <strong>Summary of your message:</strong>
      <div style="background:linear-gradient(135deg, rgba(0,229,255,0.10), rgba(255,61,198,0.10)); border:1px solid rgba(0,229,255,0.25); border-radius:14px; padding:16px 18px; margin-top:12px; white-space:pre-wrap; font-size:14px; line-height:1.6;">{{enquiry_message}}</div>
    </td></tr>
    <tr><td style="padding:14px 30px 28px; font-size:14px; color:#0f172a;">
      <div style="border-top:1px dashed rgba(139,91,255,0.35); padding-top:16px;">
        — The MRL Team &middot; <a href="mailto:mathrealitylab@gmail.com" style="color:#2f5fff;">mathrealitylab@gmail.com</a>
      </div>
    </td></tr>
  </table>
</div>
 * ------------------------------------------------------------------------
 * END OF EMAILJS TEMPLATES
 * ========================================================================
 */


/* ---------------------------------------------------------------------- *
 * 10. INIT
 * ---------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderSlider();
  renderFaculty();
  renderProjects();
  renderGallery();
  renderVideos();
  renderTestimonials();
  renderFaq();
  renderContact();

  initCursor();
  initNav();
  initReveal();
  initFaq();
  initTestimonials();
  initContactForm();
  initGalleryLightbox();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
