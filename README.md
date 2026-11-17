# Shehroz’s portfolio

An original, responsive portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. It exports static files for GitHub Pages and Netlify. The contact form uses the original portfolio’s FormSubmit email endpoint.

## Local review

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open **http://localhost:3000/**. To review the production export:

```sh
npm run lint
npm run typecheck
npm run build
npm run verify:export
npm run preview
```

The preview serves `out/` at the domain root. Set `PORT=3001` if port 3000 is occupied. To test a project-site mount locally, export `NEXT_PUBLIC_PORTFOLIO_BASE_PATH=/shehroz-portfolio` before running the build, export check, and preview.

Development and builds use Next.js’s supported Webpack mode so they also work in environments that restrict Turbopack’s worker ports. Fonts are served locally; builds do not fetch fonts from Google.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Page composition, metadata, global design tokens, responsive styles, and 404 |
| `src/components/` | Reusable sections, navigation, project media, and shared UI |
| `src/data/portfolio.ts` | Typed projects, achievements, experience, education, services, and skills |
| `src/lib/site.ts` | Identity, email, social links, résumé, and navigation |
| `public/` | Original SVG assets, approved project images, downloadable CV, and `.nojekyll` |
| `scripts/` | Production preview and static export checks |
| `.github/workflows/deploy.yml` | Build verification and gated Pages deployment |
| `netlify.toml` | Netlify static build and `out/` publish directory |

The professional profile follows the supplied two-page CV, with exactly six projects: NMISW, SDM, STIR Coffee, Pantry, Doctrine, and MetaBuddy. NMISW and SDM are the flagship projects. Pantry contributions come from the previous portfolio. STIR’s observable features were checked on its public website; its undocumented role, stack, and outcomes are intentionally omitted. Applied AI Engineering is described as a growing interest, not established expertise.

Project visuals use approved public website captures and store screenshots, compressed locally to WebP with responsive variants, explicit dimensions, alt text, and lazy loading. NMISW uses genuine English and Arabic public homepage captures from the verified HTTPS site; the Arabic version appears in the project details. See `public/projects/SOURCES.md` for image attribution and [CONTENT_REVIEW.md](CONTENT_REVIEW.md) for evidence, link verification, and information requiring owner confirmation. The Get In Touch section includes required name, email, and message fields, plus email, phone, and location details. The form uses a native HTTPS POST to the original FormSubmit address, keeping the portfolio compatible with static GitHub Pages hosting. The supplied CV is downloadable from `public/resume/`.

## Deployment

The GitHub Pages workflow builds on pushes and pull requests to `main`. Publishing requires **GitHub Actions** as the source in **Settings → Pages** and `PAGES_DEPLOYMENT_APPROVED=true` in the repository’s Actions variables.

Before building an approved deployment, the workflow reads the mount path from GitHub Pages. With `shehrozit.com` configured directly on the Pages project, GitHub reports an empty base path and redirects its default project URL to the custom domain. If Pages serves the project at a repository subpath, the workflow uses that path for the build and export check. The workflow uploads `out/` in both cases. See [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

Netlify builds and verifies the root export using `netlify.toml` and publishes `out/` at `shehrozit.netlify.app`. Leave `NEXT_PUBLIC_PORTFOLIO_BASE_PATH` unset in Netlify. See the [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports).

## Migration and backup

The existing Git repository was retained. Its original HEAD is `753ec9ee14c527d60ce7c56a72f100d64267f446`; the remote remains `https://github.com/Syed-Shehroz-Sohail/shehroz-portfolio.git`. See [MIGRATION.md](MIGRATION.md) for the migration plan and backup instructions. The ignored `.local/migration-backup.json` records the external backup location and checksum.

Nova and Unfold were inspected only as visual references. Their source, assets, fonts, and notices are not included in this repository or export. Their original directories, including licenses and notices, are preserved unchanged outside the checkout. The new components, layouts, geometric hero illustration, favicon, and social graphic were authored for this portfolio. Manrope is self-hosted from its separate open-source npm package; its OFL notice is distributed in `public/licenses/Manrope-OFL.txt`. Dependency licenses remain with their packages.


## Contact form

The form posts to `https://formsubmit.co/syed.shehroz152@amalacademy.org`, matching the original `index.html`. Browser validation requires a name, valid email address, and message. FormSubmit handles submission and its confirmation page. If the email address has not already been activated with FormSubmit, the owner must confirm the service’s activation email after the first real submission. See [FormSubmit’s setup instructions](https://formsubmit.co/). No test message is sent during local verification.
