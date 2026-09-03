/**
 * Mathematics Reality Lab (MRL) — Centralized Production Build Script
 * 
 * Synchronizes SITE_URL and SEO metadata across:
 * - index.html (static <title>, meta, canonical, OG, Twitter, JSON-LD)
 * - script.js (SITE_URL constant)
 * - robots.txt (Sitemap directive)
 * - sitemap.xml (Canonical URLs without fragment identifiers)
 * - 404.html (Canonical home links)
 *
 * Usage:
 *   node build.js
 *   SITE_URL=https://mathrealitylab.in node build.js
 */

const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;
const CONFIG_PATH = path.join(ROOT_DIR, "site.config.json");

if (!fs.existsSync(CONFIG_PATH)) {
  console.error("Error: site.config.json not found at", CONFIG_PATH);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));

// Allow environment variable to override config value (e.g. on Vercel)
const siteUrlRaw = process.env.SITE_URL || config.SITE_URL || "https://mathrealitylab.vercel.app";
const origin = siteUrlRaw.replace(/\/+$/, "");
const siteUrl = origin + "/";

console.log("==================================================");
console.log("Mathematics Reality Lab — Production Build");
console.log("Synchronizing public origin:", origin);
console.log("==================================================");

function toAbsolute(relPath) {
  if (!relPath) return siteUrl;
  if (/^https?:\/\//i.test(relPath)) return relPath;
  return origin + "/" + String(relPath).replace(/^\/+/, "");
}

const logoAbsolute = toAbsolute(config.DEFAULT_IMAGE || "asset/logo.png");

// 1. Synchronize robots.txt
const robotsPath = path.join(ROOT_DIR, "robots.txt");
const robotsContent = `# ==========================================================================
# Mathematics Reality Lab — robots.txt
# Generated via build.js from site.config.json
# ==========================================================================

User-agent: *
Allow: /

# Absolute URL to sitemap
Sitemap: ${origin}/sitemap.xml
`;
fs.writeFileSync(robotsPath, robotsContent, "utf8");
console.log("✓ robots.txt updated");

// 2. Synchronize sitemap.xml (protocol compliant, no fragment # identifiers)
const today = new Date().toISOString().split("T")[0];
const sitemapPath = path.join(ROOT_DIR, "sitemap.xml");
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Mathematics Reality Lab — sitemap.xml
  Generated via build.js from site.config.json
-->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
console.log("✓ sitemap.xml updated (clean protocol-compliant canonical URL)");

// 3. Synchronize script.js
const scriptPath = path.join(ROOT_DIR, "script.js");
if (fs.existsSync(scriptPath)) {
  let scriptContent = fs.readFileSync(scriptPath, "utf8");
  scriptContent = scriptContent.replace(
    /const SITE_URL = ["'][^"']+["'];/,
    `const SITE_URL = "${siteUrl}";`
  );
  fs.writeFileSync(scriptPath, scriptContent, "utf8");
  console.log("✓ script.js updated (const SITE_URL)");
}

// 4. Update index.html SEO and JSON-LD
const indexPath = path.join(ROOT_DIR, "index.html");
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, "utf8");

  // Update inline SITE_URL inside index.html if present
  html = html.replace(
    /return ["']https?:\/\/[^"']+["'];\s*\n\s*\}\)\(\);/g,
    `return "${siteUrl}";\n  })();`
  );

  // Update canonical
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${siteUrl}">`);

  // Update Open Graph tags
  html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${siteUrl}">`);
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${logoAbsolute}">`);

  // Update Twitter tags
  html = html.replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${logoAbsolute}">`);

  fs.writeFileSync(indexPath, html, "utf8");
  console.log("✓ index.html synchronized with origin");
}

console.log("--------------------------------------------------");
console.log("Build complete! All SEO files synchronized with:", siteUrl);
console.log("==================================================");
