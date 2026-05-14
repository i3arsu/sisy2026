# SISY 2026

Static site for the **IEEE 24th International Symposium on Intelligent Systems and Informatics**, September 23–25, 2026, Pula, Croatia.

## Structure

```
/
├── index.html             # Home
├── 404.html               # Not-found page
├── styles.css
├── script.js
├── favicon.svg
├── og-image.svg           # 1200×630 Open Graph preview
├── .nojekyll              # Tells GitHub Pages not to run Jekyll
├── program/index.html     # /program/
├── venue/index.html       # /venue/
├── submit/index.html      # /submit/
└── contact/index.html     # /contact/
```

Plain HTML/CSS/JS — no build step.

## Local preview

Any static server works:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `sisy2026`).
2. Push this folder's contents (not the folder itself) to `main`.
3. **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `(root)`.
4. Wait ~30s; the site is published at `https://<user>.github.io/<repo>/`.

## Custom domain

Add a `CNAME` file at the root containing your domain (e.g. `sisy2026.org`), then point a DNS `CNAME` record from that domain to `<user>.github.io`.

## Adding Pula photos

Each photo placeholder in `index.html` and `venue/index.html` is a `<div class="photo placeholder">`. To swap in a real image, replace it with:

```html
<div class="photo">
  <img src="/photos/arena.jpg" alt="Pula Arena at dusk" />
</div>
```

Drop the images into a `photos/` folder at the root and reference them with absolute paths starting from `/`.
