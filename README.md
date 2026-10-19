# Mo'ath Abu Eleem — Digital Business Card

A mobile-first, bilingual personal website built with HTML5, CSS3 and vanilla JavaScript. No installation, framework, build step, database, backend, remote font, analytics, cookies or browser storage is required.

## Repository and isolation

- Authorized repository: https://github.com/moath1988919-byte/moath-digital-card
- Repository identity verified through GitHub on 19 October 2026: repository ID `1425104677`, public, empty, default branch `main`.
- This directory has its own Git repository and only the authorized repository as `origin`.
- No FITNEX AI repository, worktree, database, environment, deployment or configuration was accessed or modified. The supplied public URL is included as a link only.
- No Vercel or Supabase resources are used or modified. No paid service is activated.
- **Review gate:** nothing may be pushed or deployed, and GitHub Pages must not be enabled, until the owner explicitly approves the implementation.

## Files

- `index.html` — semantic content, accessible actions, SEO and social metadata.
- `styles.css` — responsive layout, RTL support and reduced-motion behavior.
- `script.js` — complete English/Arabic toggle; changes the document language, direction, title and description. Language state lasts only for the current page session. English remains available without JavaScript.
- `moath-contact.vcf` — UTF-8 vCard 3.0 with CRLF line endings.
- `favicon.svg` — local initials icon.
- `social-card.png` — local social-sharing artwork.
- `.gitignore` — excludes local review scripts and screenshots.

## Preview locally

Open `index.html` directly, or serve this directory with an installed Python runtime:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Visit http://127.0.0.1:4173. A local HTTP server is recommended for testing the contact download. There are no dependencies to install. The `.review` directory, when present, contains local-only QA tools and results and must not be deployed.

## Contact and language behavior

Save Contact downloads the same interoperable English vCard in either language. It includes the supplied name, mobile number, professional headline, Amman/Jordan address and roles. Device-specific import confirmation depends on the operating system; saving a file does not silently add a contact.

WhatsApp uses `https://wa.me/962799100115`; calling uses `tel:+962799100115`. Both require the corresponding device/app capability. LinkedIn uses the owner-provided profile URL `https://www.linkedin.com/in/moath-abu-alime-709093371` in both languages and opens in a new tab with `rel="noopener noreferrer"`. The pending-verification note has been removed.

The Arabic name is a transliteration of the supplied English name: `معاذ أبو عليم`. Confirm the preferred Arabic spelling during content review.

## GitHub Pages deployment — only after explicit approval

The intended project URL is `https://moath1988919-byte.github.io/moath-digital-card/`. Social metadata uses that destination; it is not a claim that the site is already published. If the final hosting URL changes, update the canonical, `og:url` and `og:image` values before publication.

1. Review the local site in English and Arabic and explicitly approve pushing and enabling Pages.
2. From **this isolated directory**, verify the remote before any push:

   ```sh
   git rev-parse --show-toplevel
   git remote -v
   git status --short
   ```

   The top-level directory must be this `moath-digital-card` folder, and `origin` must be exactly `https://github.com/moath1988919-byte/moath-digital-card.git`.
3. Stage only the reviewed files, commit and push to the authorized repository:

   ```sh
   git add index.html styles.css script.js moath-contact.vcf favicon.svg social-card.png README.md .gitignore
   git commit -m "Build bilingual personal digital business card"
   git push -u origin main
   ```

4. In **moath1988919-byte/moath-digital-card → Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save. No workflow file, token, custom domain or paid activation is necessary.
5. Once GitHub reports publication, visit the project URL. Check HTTPS, CSS/JS, the PNG, English/Arabic, phone/WhatsApp links and vCard download from the project subpath. Keep HTTPS enforcement enabled when available.

## Review checks

Validate both languages at 320, 375, 390, 430, 768 and 1440 CSS pixels, including RTL, overflow and page-zoom reflow. Confirm keyboard focus, reduced-motion support, no console errors, local asset loading, complete translation coverage and the downloaded vCard's field values and CRLF encoding.

External-link validation distinguishes URL correctness from destination availability: FITNEX AI is intentionally not requested under the isolation rule; WhatsApp and phone number syntax can be verified without sending a message or placing a call. Real device contact import, phone dialing, WhatsApp handoff and social-preview caching need a final device/hosted check. See the final review report for checks actually completed.

### Completed local review — 19 October 2026

- JavaScript syntax check passed with Node.js.
- Headless Chromium loaded local files, with external network requests blocked. English and Arabic passed viewport-overflow and heading/button-clipping checks at all six widths above. Both also passed 384 CSS-pixel reflow, equivalent to the layout width of a 768px browser at 200% page zoom; native browser zoom and text-only scaling were not exercised.
- Mobile screenshots in both languages and the English desktop screenshot were visually inspected. The language round trip restores English markup, title and direction; Arabic updates the document language, direction, title, description and contact label.
- Disabled LinkedIn state, the exact supplied external URLs, safe new-tab attributes, reduced-motion settings and keyboard skip navigation passed.
- Every local asset exists. English content and contact anchors remain available without JavaScript. No browser script errors or third-party requests occurred. Page plus assets total approximately 66 KB uncompressed.
- The UTF-8 vCard passed required-field, structured-name/address, CRLF and maximum 75-octet line checks. Save Contact triggered a download event with the correct filename in each language. Chromium cancels completed file-protocol downloads, so an HTTP download and actual phone import remain unverified.
- HTTP testing could not run: sandbox network access denied localhost, then automatic approval review rejected the requested localhost browser test because its review model was at capacity. That was a review-service failure, not a finding that the action was unsafe. The reduced-scope local-file checks above required no network access. HTTP serving, GitHub Pages project-path delivery and live external destination availability remain unverified.
- No push, remote commit, deployment, Pages activation or paid-service action was performed. No FITNEX AI project resources or existing Vercel/Supabase resources were accessed or modified.

Local review evidence is in ignored `.review/`: `results.json`, `validate.cjs`, and `en-mobile.png`, `ar-mobile.png`, `en-desktop.png`. These are development-only files; Playwright and Sharp were used from an existing bundled runtime, with no package installation or production dependency added.
