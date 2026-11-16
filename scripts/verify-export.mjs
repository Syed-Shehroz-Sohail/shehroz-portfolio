import assert from "node:assert/strict";
import { readFile, access, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("out");
const html = await readFile(resolve(root, "index.html"), "utf8");
const base = "/shehroz-portfolio";
for (const required of ["index.html", "404.html", ".nojekyll", "icon.svg", "social-card.svg", "social-card.png", "licenses/Manrope-OFL.txt", "resume/syed-shehroz-sohail-cv.pdf"]) await access(resolve(root, required));
for (const id of ["home", "main", "work", "about", "services", "skills", "contact"]) assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(match[1]), `Broken anchor: ${match[1]}`);
const assets = new Set([...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(match => match[1].replaceAll("&amp;", "&")).filter(url => url.startsWith("/")));
for (const match of html.matchAll(/srcset="([^"]+)"/gi)) {
  for (const candidate of match[1].split(",")) assets.add(candidate.trim().split(/\s+/)[0]);
}
assert(assets.size > 0, "No exported assets found");
for (const url of assets) {
  assert(url.startsWith(`${base}/`), `Missing base path: ${url}`);
  const path = decodeURIComponent(url.split("?")[0].slice(base.length + 1));
  await access(resolve(root, path));
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
assert.deepEqual(projectIds, ["nmisw", "sdm", "stir", "pantry", "doctrine", "metabuddy"], "Expected exactly the six requested projects in order");
assert.equal((html.match(/FLAGSHIP PROJECT/g) || []).length, 2, "Expected NMISW and SDM flagship labels");
const nmiswCard = html.match(/<article\b[^>]*data-project-id="nmisw"[\s\S]*?<\/article>/)?.[0];
assert(nmiswCard, "Missing NMISW card");
for (const technology of ["Laravel", "MySQL", "React.js"]) assert(nmiswCard.includes(`<li>${technology}</li>`), `Missing owner-confirmed NMISW tag: ${technology}`);
for (const obsolete of ["COHRUS", "Kabil Grills", "PetX", "Kizbin", "5–6 people", "Senior Full Stack Developer", "admin.projectdevelopment.info", "sdm.technologywisdom.com", "drive.google.com/file/d/"]) assert(!html.includes(obsolete), `Obsolete portfolio content: ${obsolete}`);
assert(html.includes("Lead Software Engineer"), "Missing updated professional title");
assert(html.includes("Aug 2021–Present") && html.includes("Aug 2020–Jan 2021"), "Incorrect CV dates");
assert(html.includes("https://nwmis.gov.jo/") && html.includes("nmisw-home-1280.webp") && html.includes("nmisw-arabic-1280.webp"), "Missing verified NMISW link or public screenshots");
assert(!html.includes("CV project excerpt") && !html.includes("Website unavailable during verification"), "Obsolete NMISW fallback remains");
assert.equal((await readFile(resolve(root, "resume/syed-shehroz-sohail-cv.pdf"))).subarray(0, 5).toString(), "%PDF-", "Resume asset is not a PDF");
const socialImage = html.match(/<meta property="og:image" content="([^"]+)"/);
assert(socialImage, "Missing social image metadata");
assert.equal(new URL(socialImage[1]).pathname, `${base}/social-card.png`, "Social image has an incorrect base path");
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    assert(!["references", "repository.bundle", "git-config", "index-original.html"].includes(entry.name), `Private file exported: ${entry.name}`);
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await inspect(path);
    if (entry.name.endsWith(".css")) {
      const css = await readFile(path, "utf8");
      for (const match of css.matchAll(/url\(["']?([^\s"')]+)["']?\)/g)) {
        const url = match[1];
        if (url.startsWith("data:")) continue;
        assert(url.startsWith(`${base}/`), `CSS asset missing base path: ${url}`);
        await access(resolve(root, decodeURIComponent(url.slice(base.length + 1))));
      }
    }
  }
}
await inspect(root);
console.log(`Static export verified: six requested projects, two flagships, CV dates, ${assets.size} base-prefixed assets, responsive images, downloadable CV, metadata, anchors, 404, and no private references.`);
