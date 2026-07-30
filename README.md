# Nexpli — Website

The marketing and legal site for **Nexpli — Instant Text Summarizer**, built as static HTML/CSS/JS (no build step, no dependencies) so it can be published directly on GitHub Pages.

## Files

- `index.html` — landing page
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service
- `contact.html` — Contact page (topic-based prefilled `mailto:` links)
- `style.css` — full design system (colors, type, layout, responsive rules)
- `script.js` — nav scroll state
- `assets/favicon.svg` — the logo mark used as favicon

The logo itself is inlined as SVG directly in each page's markup, so it renders regardless of how the files are moved or hosted.

## Publish it on GitHub Pages

1. Create a new GitHub repository (or use an existing one for this extension).
2. Push these files to the repo root (or to a `/docs` folder — either works).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the branch (usually `main`) and the folder (`/root` or `/docs`, matching where you put the files).
6. Save. GitHub will give you a URL like `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Links you'll need for the Chrome Web Store dashboard

Once the site is live, these are the URLs to paste into the Developer Dashboard:

- Privacy Policy → `https://<your-username>.github.io/<repo-name>/privacy.html`
- Support / Contact → `https://<your-username>.github.io/<repo-name>/contact.html`
- Homepage → `https://<your-username>.github.io/<repo-name>/`

## Optional

- For a custom domain instead of the default `github.io` URL, add a `CNAME` file to the repo root with your domain, then configure the DNS records GitHub Pages asks for. If you do this, no code changes are needed — all internal links are relative.

## Notes on the design

- Type: **Bricolage Grotesque** (interface/headlines), **Newsreader** (body copy and the article-text mockups), **Space Mono** (labels/eyebrows) — loaded from Google Fonts via the `<link>` tags in each page's `<head>`. An internet connection is required for these to load; no local font files are bundled.
- The hero's highlight → floating icon → summary-card mockup in `#demo` is a recreation of the extension's real interaction. It is **visible by default** and animates in via pure CSS keyframes — it does not depend on JavaScript or scroll position to render, so it also appears correctly in screenshots and with JS disabled.
- Colors, spacing, and type scale are defined as CSS custom properties at the top of `style.css` if you want to adjust the palette later. The brand values (`--violet`, `--blue`, `--yellow`) are taken from the extension's actual logo SVG.
- All "Add to Chrome" buttons point to the live Chrome Web Store listing and open in a new tab.
