/**
 * Mathematics Reality Lab — Automated Production Test Suite
 */

const fs = require("fs");
const path = require("path");

let failures = 0;
function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ✗ [FAIL] ${message}`);
    failures++;
  }
}

console.log("==================================================");
console.log("Running Mathematics Reality Lab Automated Tests");
console.log("==================================================");

// Read core files
const indexHtml = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const scriptJs = fs.readFileSync(path.join(__dirname, "script.js"), "utf8");
const robotsTxt = fs.readFileSync(path.join(__dirname, "robots.txt"), "utf8");
const sitemapXml = fs.readFileSync(path.join(__dirname, "sitemap.xml"), "utf8");
const siteConfig = JSON.parse(fs.readFileSync(path.join(__dirname, "site.config.json"), "utf8"));

// 1. Technical SEO checks
console.log("\n[1] Technical SEO & Meta Tags:");
assert(indexHtml.includes("<title>") && !indexHtml.includes("<noscript><title>"), "index.html contains static <title>");
assert(indexHtml.includes('<meta name="description" content='), "index.html contains static meta description");
assert(indexHtml.includes('<link rel="canonical" href='), "index.html contains static canonical link");
assert(indexHtml.includes('<meta property="og:title"'), "index.html contains Open Graph og:title");
assert(indexHtml.includes('<meta property="og:image"'), "index.html contains Open Graph og:image");
assert(indexHtml.includes('<meta name="twitter:card"'), "index.html contains Twitter Card metadata");

// 2. Schema.org JSON-LD checks
console.log("\n[2] Schema.org Structured Data:");
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert(Boolean(jsonLdMatch), "index.html contains static Schema.org JSON-LD block");
if (jsonLdMatch) {
  try {
    const schema = JSON.parse(jsonLdMatch[1]);
    assert(schema["@context"] === "https://schema.org", "Schema.org @context is valid");
    assert(Array.isArray(schema["@graph"]), "Schema.org contains @graph array");
    const types = schema["@graph"].flatMap(item => Array.isArray(item["@type"]) ? item["@type"] : [item["@type"]]);
    assert(types.includes("Organization"), "Schema contains Organization");
    assert(types.includes("WebSite"), "Schema contains WebSite");
    assert(types.includes("BreadcrumbList"), "Schema contains BreadcrumbList");
  } catch (e) {
    assert(false, `Schema JSON parsing failed: ${e.message}`);
  }
}

// 3. Sitemap & Robots Protocol Compliance
console.log("\n[3] Sitemap & Robots Protocol Compliance:");
assert(robotsTxt.includes("User-agent: *"), "robots.txt allows all user agents");
assert(robotsTxt.includes("Sitemap:"), "robots.txt declares Sitemap location");
assert(!sitemapXml.includes("/#about") && !sitemapXml.includes("/#projects"), "sitemap.xml contains no illegal fragment (#) URLs");
assert(sitemapXml.includes("<urlset") && sitemapXml.includes("<loc>"), "sitemap.xml has valid XML schema tags");

// 4. Asset file existence
console.log("\n[4] Local Asset Integrity:");
const srcMatches = [...indexHtml.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
for (const s of srcMatches) {
  if (!s.startsWith("http") && !s.startsWith("//")) {
    const clean = s.split("?")[0].replace(/^\.\//, "");
    assert(fs.existsSync(path.join(__dirname, clean)), `Local HTML asset exists: ${clean}`);
  }
}

const scriptAssets = [...scriptJs.matchAll(/["'](\.?\/asset\/[^"']+)["']|["'](asset\/[^"']+)["']/g)]
  .map(m => (m[1] || m[2]).replace(/^\.\//, ""));
const uniqueScriptAssets = [...new Set(scriptAssets)];
for (const a of uniqueScriptAssets) {
  assert(fs.existsSync(path.join(__dirname, a)), `Script referenced asset exists: ${a}`);
}

// 5. Internal Anchor Links Check
console.log("\n[5] Internal Anchor Link Resolution:");
const idMatches = new Set([...indexHtml.matchAll(/id=["']([^"'\s>]+)["']/g)].map(m => m[1]));
const hrefMatches = [...indexHtml.matchAll(/href=["'](#[^"'\s>]+)["']/g)].map(m => m[1]);
for (const h of hrefMatches) {
  const targetId = h.slice(1);
  if (targetId) {
    assert(idMatches.has(targetId), `Anchor target #${targetId} exists in document`);
  }
}

// 6. Accessibility & Form Checks
console.log("\n[6] Accessibility & Form Attributes:");
assert(indexHtml.includes('aria-describedby="err-name"'), "Contact name input has aria-describedby");
assert(indexHtml.includes('aria-describedby="err-email"'), "Contact email input has aria-describedby");
assert(indexHtml.includes('aria-describedby="err-message"'), "Contact message textarea has aria-describedby");
assert(indexHtml.includes('role="alert" aria-live="polite"'), "Field error spans declare role=alert aria-live=polite");
assert(scriptJs.includes("lastActiveElement"), "Gallery lightbox restores focus to triggering element on close");

console.log("--------------------------------------------------");
if (failures > 0) {
  console.error(`Automated tests completed with ${failures} failure(s).`);
  process.exit(1);
} else {
  console.log("All automated tests passed successfully! 🎉");
}
;