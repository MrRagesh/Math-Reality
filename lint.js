/**
 * Mathematics Reality Lab — Code Quality & Lint Validation Script
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

let hasErrors = false;
function report(status, message) {
  if (status === "PASS") {
    console.log(`  ✓ ${message}`);
  } else {
    console.error(`  ✗ [ERROR] ${message}`);
    hasErrors = true;
  }
}

console.log("==================================================");
console.log("Running Code Quality & Syntax Lint Validation");
console.log("==================================================");

// 1. Validate JSON files
console.log("\n[1] Validating JSON configurations...");
["site.config.json", "vercel.json", "package.json"].forEach(file => {
  try {
    const raw = fs.readFileSync(path.join(__dirname, file), "utf8");
    JSON.parse(raw);
    report("PASS", `${file} is valid JSON`);
  } catch (e) {
    report("FAIL", `${file} JSON syntax error: ${e.message}`);
  }
});

// 2. Validate JavaScript syntax
console.log("\n[2] Validating JavaScript files with Node VM...");
["script.js", "build.js"].forEach(file => {
  try {
    const code = fs.readFileSync(path.join(__dirname, file), "utf8");
    new vm.Script(code, { filename: file });
    report("PASS", `${file} syntax is valid`);
  } catch (e) {
    report("FAIL", `${file} script error: ${e.message}`);
  }
});

// 3. Validate CSS structure
console.log("\n[3] Validating CSS stylesheets...");
try {
  const css = fs.readFileSync(path.join(__dirname, "style.css"), "utf8");
  let openBraces = 0;
  let line = 1;
  let braceError = null;

  for (let i = 0; i < css.length; i++) {
    if (css[i] === "\n") line++;
    if (css[i] === "{") openBraces++;
    if (css[i] === "}") openBraces--;
    if (openBraces < 0) {
      braceError = `Mismatched closing brace at line ${line}`;
      break;
    }
  }

  if (braceError || openBraces !== 0) {
    report("FAIL", `style.css brace imbalance: ${braceError || `unclosed braces count: ${openBraces}`}`);
  } else {
    report("PASS", "style.css braces are perfectly balanced");
  }
} catch (e) {
  report("FAIL", `Could not read style.css: ${e.message}`);
}

// 4. Validate HTML files
console.log("\n[4] Validating HTML structure...");
["index.html", "404.html"].forEach(file => {
  try {
    const html = fs.readFileSync(path.join(__dirname, file), "utf8");
    if (!html.includes("<!DOCTYPE html>")) report("FAIL", `${file} missing <!DOCTYPE html>`);
    else report("PASS", `${file} has standard <!DOCTYPE html>`);

    if (!html.includes('<html lang="en">')) report("FAIL", `${file} missing <html lang="en">`);
    else report("PASS", `${file} has lang="en"`);

    if (!html.includes('<meta charset="UTF-8">')) report("FAIL", `${file} missing UTF-8 charset`);
    else report("PASS", `${file} has UTF-8 charset`);

    if (!html.includes('<meta name="viewport"')) report("FAIL", `${file} missing viewport meta`);
    else report("PASS", `${file} has responsive viewport meta`);
  } catch (e) {
    report("FAIL", `Error reading ${file}: ${e.message}`);
  }
});

console.log("--------------------------------------------------");
if (hasErrors) {
  console.error("Lint check completed with errors.");
  process.exit(1);
} else {
  console.log("All lint checks passed successfully! ✨");
}
