import assert from "node:assert/strict";
import { readFile, access, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("out");
const html = await readFile(resolve(root, "index.html"), "utf8");
const base = process.env.NEXT_PUBLIC_PORTFOLIO_BASE_PATH ?? "";
const origin = "https://export.test";
const homepage = `${origin}${base}/`;
for (const required of ["index.html", "404.html", ".nojekyll", "icon.svg", "social-card.svg", "social-card.png", "licenses/Manrope-OFL.txt", "resume/syed-shehroz-sohail-cv.pdf"]) await access(resolve(root, required));
for (const id of ["home", "main", "work", "about", "services", "skills", "contact"]) assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(match[1]), `Broken anchor: ${match[1]}`);
const assets = new Set();

async function verifyAsset(reference, from) {
  if (reference.startsWith("#")) return;
  const url = new URL(reference.replaceAll("&amp;", "&"), from);
  if (url.origin !== origin) return;
  const path = decodeURIComponent(url.pathname);
  assert(path.startsWith(`${base}/`), `Asset is outside the export mount path: ${url.pathname}`);
  if (assets.has(path)) return;
  const file = resolve(root, `.${path.slice(base.length)}`);
  const info = await stat(file).catch(() => null);
  assert(info, `Missing exported asset at ${url.pathname}`);
  if (info.isDirectory()) await access(resolve(file, "index.html"));
  assets.add(path);
}

for (const [document, from] of [[html, homepage], [await readFile(resolve(root, "404.html"), "utf8"), `${homepage}404.html`]]) {
  for (const match of document.matchAll(/\s(src|href|srcset)="([^"]+)"/gi)) {
    const references = match[1].toLowerCase() === "srcset" ? match[2].split(",").map(candidate => candidate.trim().split(/\s+/)[0]) : [match[2]];
    for (const reference of references) await verifyAsset(reference, from);
  }
}
const contactForm = html.match(/<form\b[^>]*action="([^"]+)"[^>]*method="([^"]+)"[^>]*>([\s\S]*?)<\/form>/);
assert(contactForm, "Missing contact form");
assert.equal(contactForm[1], "https://formsubmit.co/syed.shehroz152@amalacademy.org", "Incorrect contact destination");
assert.equal(contactForm[2].toUpperCase(), "POST", "Contact form must submit via POST");
const contactFields = [...contactForm[3].matchAll(/<(?:input|textarea)\b[^>]*>/g)].map(match => match[0]);
for (const field of ["name", "email", "message"]) {
  const tag = contactFields.find(tag => tag.includes(`name="${field}"`));
  assert(tag && /\brequired(?:\s|=|>)/.test(tag), `Missing required contact field: ${field}`);
}
assert(html.includes('id="contact-heading">Get In Touch'), "Missing requested contact heading");
assert(!html.includes("Have a system to build?"), "Obsolete contact callout remains");
const projectIds = [...html.matchAll(/data-project-id="([^"]+)"/g)].map(match => match[1]);
assert.deepEqual(projectIds, ["nmisw", "sdm", "stir", "six-construction", "enova-estates", "pantry", "doctrine", "metabuddy"], "Expected all eight projects in order");
const projectLabels = [...html.matchAll(/class="project-card-label"><span>([^<]+)<\/span>/g)].map(match => match[1].replaceAll("&amp;", "&"));
assert.deepEqual(projectLabels, [
  "Government information system",
  "Enterprise infrastructure platform",
  "Café Website & Digital Menu",
  "Corporate Website & Interactive Frontend",
  "Multilingual Real Estate Platform & Admin Portal",
  "Grocery Management Mobile App",
  "Medical Professionals Networking Mobile App",
  "Fitness Community Mobile App",
], "Expected project types above the eight project tiles");
const nmiswCard = html.match(/<article\b[^>]*data-project-id="nmisw"[\s\S]*?<\/article>/)?.[0];
assert(nmiswCard, "Missing NMISW card");
for (const technology of ["Laravel", "MySQL", "React.js"]) assert(nmiswCard.includes(`<li>${technology}</li>`), `Missing owner-confirmed NMISW tag: ${technology}`);
for (const obsolete of ["COHRUS", "Kabil Grills", "PetX", "Kizbin", "5–6 people", "Senior Full Stack Developer", "admin.projectdevelopment.info", "sdm.technologywisdom.com", "drive.google.com/file/d/"]) assert(!html.includes(obsolete), `Obsolete portfolio content: ${obsolete}`);
assert(html.includes("Lead Software Engineer"), "Missing updated professional title");
assert(html.includes("Aug 2021–Present") && html.includes("Aug 2020–Jan 2021"), "Incorrect CV dates");
assert(html.includes("https://nwmis.gov.jo/") && html.includes("nmisw-home-1280.webp"), "Missing verified NMISW link or homepage screenshot");
assert(!html.includes("CV project excerpt") && !html.includes("Website unavailable during verification"), "Obsolete NMISW fallback remains");
assert.equal((await readFile(resolve(root, "resume/syed-shehroz-sohail-cv.pdf"))).subarray(0, 5).toString(), "%PDF-", "Resume asset is not a PDF");
const socialImage = html.match(/<meta property="og:image" content="([^"]+)"/);
assert(socialImage, "Missing social image metadata");
assert.equal(socialImage[1], "https://shehrozit.com/social-card.png", "Social image must use the public root domain");
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    assert(!["references", "repository.bundle", "git-config", "index-original.html"].includes(entry.name), `Private file exported: ${entry.name}`);
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await inspect(path);
    if (entry.isFile() && /\.(css|html|js|txt)$/.test(entry.name)) {
      const contents = await readFile(path, "utf8");
      if (!base) assert(!contents.includes("/shehroz-portfolio/"), `Repository prefix leaked into the root export: ${path}`);
      if (!entry.name.endsWith(".css")) continue;
      const from = new URL(path.slice(root.length + 1), homepage);
      for (const match of contents.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) await verifyAsset(match[1], from);
    }
  }
}
await inspect(root);
for (const extension of [".css", ".js", ".woff2", ".webp"]) assert([...assets].some(path => path.endsWith(extension)), `Missing ${extension} asset references`);
console.log(`Static export verified at ${base || "/"} with ${assets.size} local asset and navigation URLs, responsive images, fonts, CV, metadata, anchors, and 404.`);
