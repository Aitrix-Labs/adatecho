# Adatecho

Exact visual clone of [ada.cx](https://www.ada.cx/), rebranded to **adatecho**.

Built like `vpnteco`: capture Ada’s live homepage HTML/CSS/assets, then transform + serve statically.

## Run

```bash
npm install
npm run dev
```

Open: http://localhost:5181/adatecho/

## Scripts

- `npm run pages` — rebuild `site/index.html` from `public/assets/ada-raw.html`
- `npm run build` — production build to `dist/`

## Notes

- Source dump lives in `public/assets/` (HTML, CSS, fonts, images)
- Branding rewrites happen in `scripts/transform.mjs`
- Ada’s scroll/WebGL intro scripts are stripped; layout is the settled post-intro homepage
