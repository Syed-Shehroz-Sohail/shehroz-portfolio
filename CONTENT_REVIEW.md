# Professional profile update — source and review record

The supplied two-page `Shehroz–Lead-Software-Engineer.pdf` is the primary factual source. It is the file attached to this request; the pasted task referred to a filename ending in `(9)`, but the attached file does not use that suffix. The original PDF is preserved unchanged and copied to `public/resume/syed-shehroz-sohail-cv.pdf` for download. No site has been pushed or published.

## Verified against the CV

| Content | Source and implementation |
| --- | --- |
| Identity | Syed Shehroz Sohail; Lahore, Pakistan; CV email, phone, and direct LinkedIn URL |
| Main headline | The exact headline requested by the owner; current job title is Lead Software Engineer |
| Experience | Six professional years; Technology Wisdom, Lead Software Engineer, Aug 2021–Present; TBOX Solutionz, Associate Software Engineer – React Native, Jul 2020–Jul 2021 |
| Leadership | Cross-functional teams of up to 15 professionals |
| International delivery | Four high-impact international projects delivered and released to production; solutions supporting 1,000+ users |
| International work | Six project visits: five to Jordan and one to South Africa |
| Education | BS Information Technology, FCIT, 2016–2020; Amal Academy fellowship, Aug 2020–Jan 2021 |
| Skills | Development, Architecture & DevOps, Leadership & Delivery, and Tools match the CV |
| Applied AI Engineering | Included only as the owner’s growing interest; absent from established skills and service claims |
| NMISW | CV page 2, Jul 2025–Present; municipal data collection, automated approvals, reporting, full-stack work, database architecture, API integration, deployment, Windows Server, IIS, stakeholder engagement, and training; supports 1,000+ users |
| SDM | CV page 2, Jul 2024–Jul 2025; AUDA-NEPAD, South Africa; React.js/Laravel/MySQL, enterprise integrations, screening, approvals, portfolio tracking; supports 28 infrastructure projects |
| Doctrine | CV page 2; medical professional networking, mobile development, team leadership, API integrations, quality assurance, and delivery |
| MetaBuddy | CV page 2; fitness community, mobile feature development, timelines, task allocation, progress tracking, and stakeholder communication |

There is no added official-launch claim for NMISW. No new testimonials, endorsements, performance gains, user counts, project dates, or individual technology assignments were inferred. Next.js, NestJS, Python, PostgreSQL, and AI engineering are not presented as established professional skills. Next.js remains the implementation framework of this portfolio.

## Supplementary project evidence

- Previous portfolio: `https://syed-shehroz-sohail.github.io/shehroz-portfolio/` retrieved successfully. Pantry’s React Native frontend work, API integrations, Apple Sign-In implementation, and App Store destination were carried forward. Old role titles and the other retired projects were not reused.
- STIR Coffee: `https://stircoffee.pk/` retrieved successfully and inspected in a browser. Its gallery, drinks/kitchen navigation, section navigation, item descriptions, PKR prices, customisations, and menu search were observed. A search for `pistachio` returned matching coffee/matcha items. No e-commerce, checkout, delivery, reservation, or backend capabilities were claimed.
- Public screenshots were explicitly approved by the owner during this update. Their source is labeled in each figure, and full-size local images open from the project cards. The images reflect the current public presentation; they are not a claim that every visible feature was implemented by the owner.
- NMISW now uses approved public homepage captures in English and Arabic from `https://nwmis.gov.jo/nmis/#/home`. The English image is the card visual; the Arabic image is available in the expanded project details. Both open at full size and have optimized 640px/1280px WebP variants. The earlier CV excerpt has been removed from the website and kept only in ignored local backup storage. No authenticated data was accessed, and the project’s CV-based responsibilities and outcomes remain unchanged.
- SDM’s capture is its unauthenticated public sign-in screen, not an authenticated dashboard. No account was created or used.

## External link checks — 16 November 2026

| Destination | Result |
| --- | --- |
| `http://nwmis.gov.jo/` | Initial CV-link check timed out. Superseded by the user-supplied HTTPS destination below. |
| `https://nwmis.gov.jo/` | Verified in the user-opened browser tab; resolves to `https://nwmis.gov.jo/nmis/#/home`. English and Arabic public interfaces inspected and captured. Portfolio link updated to HTTPS and the unavailable notice removed. |
| `https://sdm.nepad.org/` | HTTP 200; browser resolves to the public `/sign-in` page. |
| `https://stircoffee.pk/` | HTTP 200; page and menu search observed. |
| `https://apps.apple.com/us/app/pantry-check-grocery-list/id966702368` | HTTP 200; listing title identifies Pantry Check – Grocery List. Original destination retained. |
| `https://play.google.com/store/apps/details?id=com.doctrine&hl=en_AU` | HTTP 200; listing identifies DOCTRINE. CV destination retained. |
| `https://play.google.com/store/apps/details?id=app.navy.dxb&hl=en_AU` | HTTP 200; listing identifies MetaBuddy. CV destination retained. |
| `https://www.linkedin.com/in/syed-shehroz-sohail-shah/` | HTTP 999 restriction against automated retrieval. Direct CV URL retained; public profile availability was not independently verified. |

HTTP success establishes that a destination responded during this check; it does not establish authenticated functionality or regional installation availability.

## Information requiring owner confirmation

1. **STIR Coffee:** exact responsibilities, development period, and any documented outcomes. The showcase lists HTML, CSS, and Vanilla JavaScript as supplied by the owner.
2. **Unspecified project frameworks:** The mobile frameworks for Doctrine and MetaBuddy are absent from the CV. Supply them only if they should be shown as project-specific technologies. NMISW’s Laravel, MySQL, and React.js stack has now been explicitly confirmed by the owner and added to its tags.
3. **LinkedIn availability:** confirm the direct CV link in a normal signed-in or public browser; automated access is restricted.

## Local validation

Run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run verify:export`. The export check requires the eight project cards in order, their category labels, updated CV dates, removal of retired content, valid static image paths, and the downloadable PDF. Biome provides syntax, correctness, and accessibility lint checks without requiring a TypeScript compiler downgrade. CSS component specificity ordering is intentionally allowed, and reduced-motion overrides keep precedence.

The prior local implementation is backed up under ignored `.local/profile-update/before/`. Raw PDF extraction, rendered CV pages, public-page retrievals, screenshot originals, link-check responses, and source asset URLs are kept under ignored `.local/profile-update/`. The earlier permanent private backup and reference templates remain untouched outside this repository.

### Validation results

- `npm run lint`: passed with no warnings or errors across 20 files.
- `npm run typecheck`: passed after route type generation.
- `npm run build`: successful fully static production export with Next.js 16.4.6 and Webpack.
- `npm run verify:export`: passed, including six exact project IDs, two flagship labels, CV dates, stale-content exclusions, all base-prefixed asset paths, responsive image variants, downloadable PDF, social metadata, CSS/font URLs, anchors, and 404.
- Browser: All/Mobile filtering, contribution disclosure, image lazy loading, mobile menu open/select/close, Escape-to-close and focus return, and desktop/mobile presentation checked. No console warnings or errors observed.
- Effective viewport widths of 480, 768, and 1440 pixels showed no horizontal overflow. The project grid changes from one column on phone to two columns on tablet/desktop. Browser emulation used inconsistent physical pixel scaling, so the effective DOM viewport dimensions were recorded rather than inferred from the requested size.
- Local HTTP: both the existing development server at port 3000 and the temporary production preview at port 3001 served the updated profile and exactly six cards. All project images and the custom 404 responded correctly. The downloadable PDF matched the supplied file byte for byte.
- Git: original HEAD `753ec9ee14c527d60ce7c56a72f100d64267f446` and original `origin` URL preserved. No commit, push, GitHub settings change, or publication performed.

Screenshots are saved under ignored `.local/profile-update/desktop-review.jpg` and `mobile-review.jpg`. The temporary production QA server is stopped after validation; the owner’s existing port-3000 development server is left running.


### NMISW screenshot follow-up — 16 November 2026

The owner supplied and opened the HTTPS website and explicitly requested relevant screenshots. The live public homepage was inspected, including its waste generator/recycler entry points and English/Arabic language switch. Genuine screenshots replaced the CV fallback. The exact public screenshot source is `https://nwmis.gov.jo/nmis/#/home`; raw captures are retained under ignored `.local/profile-update/nmisw-home-raw.jpg` and `nmisw-arabic-raw.jpg`. No registrations, logins, form submissions, or private data access were performed. The earlier unavailable-site warning and pending-screenshot review item are resolved. This observation does not add an official-launch claim or assert delivery of features beyond the CV.

Follow-up validation passed: lint, TypeScript, production build, and static export (24 base-prefixed assets). In the running local portfolio, both NMISW images loaded, the Arabic gallery expanded correctly, and the project link uses HTTPS. The temporary CV excerpt and unavailable notice are absent from the export. The updated card is captured in ignored `.local/nmisw-screenshot-update/portfolio-review.jpg`. No publishing was performed.


### Contact layout and NMISW technology follow-up — 16 November 2026

The owner confirmed Laravel, MySQL, and React.js for NMISW; these tags are added alongside the documented Windows Server and IIS tags. The closing callout has been replaced with a Get In Touch section: name/email fields, message textarea, Send Message button, and the owner’s email, phone, and Lahore location. The layout is newly authored with the supplied Unfold contact composition as a read-only visual reference; the existing dark theme background is retained. No reference assets or source code were copied or modified.

The native form restores the exact HTTPS FormSubmit POST endpoint from the original committed `index.html`. Required fields and email validation run in the browser; FormSubmit handles email delivery and the confirmation page. This adds no custom backend or database. Actual delivery and account activation are not verified by sending a message during development.


Contact follow-up validation: lint, generated-route TypeScript checks, production build, and static-export verification passed. The output form retains the original HTTPS FormSubmit POST destination, all three named required fields, and the exact Get In Touch heading. The NMISW card includes all three owner-confirmed technology tags. Browser checks verified empty required-field validity and invalid-email detection without submitting a form. Test input values were cleared. The desktop form uses side-by-side name/email fields and a contact sidebar; at an effective 480px phone viewport both fields and the contact layout use one column, with no horizontal overflow. The section background remains RGB(40, 45, 39), unchanged from the prior theme. The local browser emitted an extension-induced hydration warning involving injected `bis_skin_checked`/`bis_register` attributes; no extension or security setting was modified. The screenshot is saved under ignored `.local/contact-update/contact-review.jpg`. No test email, commit, push, or publication was performed.
