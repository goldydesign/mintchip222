# MintChip Studio

Static site for MintChip Studio, including a resources page and yarn-weight calculators.

## Structure

```
.
├── index.html
├── resources.html
├── style.css
├── logo-*.png
└── calculators/
    ├── index.html
    ├── calc.css
    ├── how-many-skeins.html
    ├── yarn-converter.html
    ├── held-together-yarn-weight.html
    └── simplified-held-together.html
```

Plain HTML/CSS — no build step, no dependencies.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying to Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select this repo.
2. Build settings:
   - **Build command:** (none)
   - **Build output directory:** `/`
3. Save and deploy. Every push to `main` will trigger a new deployment automatically; pushes to other branches get preview deployments.

`_headers` is included for baseline security headers (Cloudflare Pages reads this file natively — no config needed).
