# Migration plan and record

1. Inspect the current tree, tracked files, history, remotes, content, and reference licenses.
2. Save the original HTML, Git config, complete history bundle, and checksum before replacing any website file. Move untracked reference templates outside the checkout without changing their contents.
3. Initialize a clean Next.js App Router application directly in the existing checkout. Preserve `.git`, its refs, and remote configuration.
4. Implement original reusable React sections. Use Nova’s calm, warm presentation as a general direction; use Unfold’s separation of About, Services, and Skills as a structural reference. Preserve the existing portfolio’s factual content and links.
5. Configure TypeScript, Tailwind, static export, the fixed `/shehroz-portfolio` base path, and GitHub Pages CI with publishing gated pending local review.
6. Verify types, production export, asset URLs, interactions, and desktop/mobile layout. Hand off for local review without pushing or deploying.

## Original state

- Branch: `main`
- HEAD: `753ec9ee14c527d60ce7c56a72f100d64267f446`
- Tracked website: `index.html`
- Two existing commits retained without rewriting history.
- Original remote: `https://github.com/Syed-Shehroz-Sohail/shehroz-portfolio.git`
- Original HTML SHA-256: `b5db5aefd3e79bd102f081869ff94c434f113ed6e3760c4c4529b353383d1ee9`

## Private backup

Created before replacement and retained permanently at `/Users/jarvis/shehroz-portfolio-private-backup-20261116/`:

- `index.html`: byte-for-byte original website.
- `repository.bundle`: all existing Git refs and history, restorable with `git clone /path/to/repository.bundle restored-portfolio`.
- `git-config`: the original local Git configuration.
- `manifest.json`: original HEAD, remote, HTML checksum, and backup path.
- `references/nova/` and `references/unfold/`: the original unmodified reference templates, including copyright and license notices.

The backup is outside the public repository. Its path is also recorded in the ignored `.local/migration-backup.json`. The old HTML also remains recoverable from the retained original commit:

```sh
git show 753ec9ee14c527d60ce7c56a72f100d64267f446:index.html > /tmp/portfolio-original.html
```

Do not add the private backup or reference templates to Git. `.gitignore` excludes `references/`, `.local/`, generated build output, dependencies, local environment files, and macOS metadata. Only `out/` is uploaded by the Pages workflow.

## Review before publishing

Check the phone menu, all project filters, expandable contributions, résumé and social links, email action, and small-screen layouts. The career information and project destinations came from the old portfolio and should be confirmed by the owner. Enable the deployment variable only after local approval, as described in `README.md`.

## Verification completed

- `npm run build`: successful production static export with Next.js 16.4.6 in Webpack mode.
- `npm run typecheck`: generated route types and TypeScript validation passed.
- `npm run verify:export`: all section anchors, base-prefixed HTML/CSS assets and fonts, social image metadata, font notice, `.nojekyll`, and custom 404 verified; reference and backup files excluded.
- Local production HTTP checks passed for the page, assets, license, and custom 404.
- Browser checks passed for All/Web/Mobile filters, project disclosure content and original destination, and mobile navigation open/select/close behavior. No console warnings or errors were observed.
- Measured viewport widths of 320, 390, 768, and 1440 pixels showed no horizontal page overflow. Browser screenshot/emulation sizing was inconsistent, so rendered DOM dimensions were checked directly.
- Original HEAD, remote configuration bytes, original HTML checksum, complete history bundle, and external template license files verified.

No commits, pushes, GitHub settings changes, or deployments were performed. GitHub Actions execution and remote publishing remain untested until the owner approves and enables deployment.
