import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { pages, renderPage, siteFooter } from './pages.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const assets = path.join(root, 'public', 'assets')
const outDir = path.join(root, 'site')
const base = '/adatecho'

fs.mkdirSync(outDir, { recursive: true })
fs.mkdirSync(path.join(outDir, 'assets'), { recursive: true })

for (const file of fs.readdirSync(assets)) {
  fs.copyFileSync(path.join(assets, file), path.join(outDir, 'assets', file))
}

let html = fs.readFileSync(path.join(assets, 'ada-raw.html'), 'utf8')
const imageMap = JSON.parse(fs.readFileSync(path.join(assets, 'image-map.json'), 'utf8'))

html = html
  .replace(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g, '')
  .replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, '')
  .replace(/<!-- Start VWO Async SmartCode -->[\s\S]*?<!-- End VWO Async SmartCode -->/g, '')
  .replace(/<script[^>]*googletagmanager[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<script[^>]*gtag\/js[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*hs-script[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*hubspot[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*hs-analytics[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*hs-banner[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*clarity[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*dreamdata[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*vector\.co[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*clickagy[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*adsrvr[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*bat\.bing[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*licdn\.com[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*g2crowd[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*zaraz[^>]*><\/script>/gi, '')
  .replace(/<script[^>]*cdn-cgi\/zaraz[^>]*><\/script>/gi, '')
  .replace(/<script data-cfasync[\s\S]*?<\/script>/gi, '')
  .replace(/<img[^>]*aorta\.clickagy[^>]*>/gi, '')
  .replace(/<script type="module" src="\/_astro\/page\.[^"]+"><\/script>/g, '')

const asset = (name) => `./assets/${name}`
const wordmark = asset('adatecho-wordmark.svg')
const heroScript = 'FsTakeoverHero.astro_astro_type_script_index_0_lang.DSTu8_QD.js'

html = html
  .replaceAll('https://www.ada.cx/_astro/fonts/7d14eea390898fca.woff2', asset('7d14eea390898fca.woff2'))
  .replaceAll('https://www.ada.cx/_astro/fonts/42690f2bfe317b8e.woff2', asset('42690f2bfe317b8e.woff2'))
  .replaceAll('https://www.ada.cx/_astro/_slug_.CDaHifTo.css', asset('_slug_.CDaHifTo.css'))
  .replaceAll('https://www.ada.cx/_astro/_slug_.Cfru3zyi.css', asset('_slug_.Cfru3zyi.css'))
  .replaceAll('https://www.ada.cx/_astro/index.Dw49YcCf.css', asset('index.Dw49YcCf.css'))
  .replaceAll('https://www.ada.cx/_astro/index.C2ho-sh3.css', asset('index.C2ho-sh3.css'))
  .replaceAll('/_astro/fonts/7d14eea390898fca.woff2', asset('7d14eea390898fca.woff2'))
  .replaceAll('/_astro/fonts/42690f2bfe317b8e.woff2', asset('42690f2bfe317b8e.woff2'))
  .replaceAll('/_astro/_slug_.CDaHifTo.css', asset('_slug_.CDaHifTo.css'))
  .replaceAll('/_astro/_slug_.Cfru3zyi.css', asset('_slug_.Cfru3zyi.css'))
  .replaceAll('/_astro/index.Dw49YcCf.css', asset('index.Dw49YcCf.css'))
  .replaceAll('/_astro/index.C2ho-sh3.css', asset('index.C2ho-sh3.css'))
  .replaceAll(`/_astro/${heroScript}`, asset(heroScript))
  .replaceAll('/_astro/bigbang.DfPrKZma.js', asset('bigbang.DfPrKZma.js'))
  .replaceAll('/_astro/three.module.DjhXFdum.js', asset('three.module.DjhXFdum.js'))
  .replaceAll('/_astro/preload-helper.BlTxHScW.js', asset('preload-helper.BlTxHScW.js'))
  .replaceAll('href="/favicon.svg"', 'href="./favicon.svg"')
  .replaceAll('https://www.ada.cx/images/full-stack/ada-wordmark.svg', wordmark)
  .replaceAll('https://www.ada.cx/images/full-stack/dialpad-wordmark.svg', asset('dialpad-wordmark.svg'))
  .replaceAll('/images/full-stack/ada-wordmark.svg', wordmark)
  .replaceAll('/images/full-stack/dialpad-wordmark.svg', asset('dialpad-wordmark.svg'))
  .replaceAll(`${base}/images/full-stack/ada-wordmark.svg`, wordmark)
  .replaceAll(`${base}/images/full-stack/dialpad-wordmark.svg`, asset('dialpad-wordmark.svg'))
  .replaceAll(asset('ada-wordmark.svg'), wordmark)
  .replaceAll('./assets/ada-wordmark.svg', wordmark)

for (const [remote, local] of Object.entries(imageMap)) {
  const mapped = local.includes('ada-wordmark') || remote.includes('ada-wordmark') ? 'adatecho-wordmark.svg' : local
  html = html.replaceAll(remote, asset(mapped))
}

// Prefer a local asset per imagedelivery image id (largest mapped variant wins).
const localByImageId = {}
for (const [remote, local] of Object.entries(imageMap)) {
  const id = remote.match(/imagedelivery\.net\/[^/]+\/([^/]+)\//)?.[1]
  if (!id) continue
  const mapped = local.includes('ada-wordmark') ? 'adatecho-wordmark.svg' : local
  // Prefer wider variants so 960/1600 backdrops keep detail.
  const width = Number(remote.match(/[?&/]w=(\d+)/)?.[1] || 0)
  const prev = localByImageId[id]
  if (!prev || width >= prev.width) localByImageId[id] = { file: mapped, width }
}

// Cloudflare URLs embed commas (`w=960,q=60`). That breaks HTML srcset parsing and Vite's
// base rewriter (splits on commas → `/adatecho/q=60`). Rewrite leftovers to local assets.
html = html.replace(/https:\/\/imagedelivery\.net\/[^\s"'<>]+/g, (url) => {
  const id = url.match(/imagedelivery\.net\/[^/]+\/([^/]+)\//)?.[1]
  if (id && localByImageId[id]) return asset(localByImageId[id].file)
  return url
})

// Replace inline Ada SVG wordmarks (viewBox 0 0 71 20) with Adatecho mark
html = html.replace(
  /<svg([^>]*?)viewBox="0 0 71 20"([^>]*)>[\s\S]*?<\/svg>/g,
  (_m, pre, post) => {
    const cls = `${pre} ${post}`.match(/class="([^"]*)"/)
    const className = cls?.[1] || 'h-full w-auto'
    return `<img src="${wordmark}" alt="Adatecho" class="${className}" width="84" height="20" />`
  },
)

// Branding — use Adatecho everywhere (domain brand)
html = html
  .replaceAll('AI Customer Service Agents for Enterprise CX | Ada', 'AI Customer Service Agents for Enterprise CX | Adatecho')
  .replaceAll('https://www.ada.cx/', `${base}/`)
  .replaceAll('https://ada.cx/', `${base}/`)
  .replaceAll(`${base}${base}/`, `${base}/`)
  .replaceAll('aria-label="Ada home"', 'aria-label="Adatecho home"')
  .replaceAll('aria-label="Ada"', 'aria-label="Adatecho"')
  .replaceAll('alt="Ada"', 'alt="Adatecho"')
  .replaceAll('<title>Ada</title>', '<title>Adatecho</title>')
  .replaceAll('Why Ada', 'Why Adatecho')
  .replaceAll('Ada Labs', 'Adatecho Labs')
  .replaceAll('Ada Academy', 'Adatecho Academy')
  .replaceAll('Ada Computer', 'Adatecho Computer')
  .replaceAll('Ada platform', 'Adatecho platform')
  .replaceAll('the Ada ', 'the Adatecho ')
  .replaceAll('with Ada', 'with Adatecho')
  .replaceAll('With Ada', 'With Adatecho')
  .replaceAll('across Ada', 'across Adatecho')
  .replaceAll('Extend Ada', 'Extend Adatecho')
  .replaceAll('Ada’s', 'Adatecho’s')
  .replaceAll("Ada's", "Adatecho's")
  .replaceAll(' of Ada', ' of Adatecho')
  .replaceAll('Ada is an AI-native', 'Adatecho is an AI-native')
  .replaceAll('how Ada is improving', 'how Adatecho is improving')
  .replaceAll('@ada_cx', '@adatecho')
  .replaceAll('resolved by Ada', 'resolved by Adatecho')
  .replaceAll('INTERACTIONS RESOLVED BY ADA', 'INTERACTIONS RESOLVED BY ADATECHO')
  .replaceAll('LIVE · RIGHT NOW ACROSS ADA', 'LIVE · RIGHT NOW ACROSS ADATECHO')
  .replaceAll('>Ada</', '>Adatecho</')
  .replaceAll('>ada</', '>adatecho</')
  .replaceAll(' ada + ', ' adatecho + ')
  .replaceAll('ada + dialpad', 'adatecho + dialpad')

// Root-absolute site links (/login/, /platform/, …) must include Vite base
// or the dev server responds with "did you mean /adatecho/…?".
// Do NOT pre-prefix asset URLs (.svg, .mp4, …) — Vite's HTML transform already
// joins `base` onto those, and double-prefixing yields /adatecho/adatecho/…
// (broken badge images in the Trusted-by section).
html = html.replace(
  /\b(href|src|action)=["']\/(?!\/|adatecho\/)([^"']*)["']/g,
  (full, attr, path) => {
    if (/\.[a-z0-9]{2,5}([?#]|$)/i.test(path)) return full
    return `${attr}="${base}/${path}"`
  },
)

// "Speak to an expert" / demo CTAs go to Contact. Every other route keeps its own page.
html = html.replaceAll(`${base}/demo/`, `${base}/contact/`)
html = html.replaceAll(`${base}/demo`, `${base}/contact/`)

// Add Contact to the header nav (before Sign in).
html = html.replace(
  /(<a href="\/adatecho\/login\/"[^>]*>\s*Sign in\s*<\/a>)/i,
  `<a href="${base}/contact/" class="text-sm ease-ada inline-flex cursor-pointer items-center justify-center gap-12 rounded-full text-center leading-none transition-[background,border-color,filter,transform] duration-200 active:scale-[0.96] border-line text-ink-1 hover:border-tint/34 border bg-transparent hover:bg-tint/5 px-24 py-12 max-lg:w-full">Contact </a> $1`,
)

// Clearer mobile menu / close icons (replace the thin 2-bar morph).
html = html.replace(
  /<button @click="showMenu = !showMenu" :aria-expanded="showMenu" aria-label="Toggle menu"[^>]*>[\s\S]*?<\/button>/,
  `<button @click="showMenu = !showMenu" :aria-expanded="showMenu" aria-label="Toggle menu" class="pointer bg-tint/10 relative ml-auto flex aspect-square w-48 items-center justify-center rounded-full lg:hidden" aria-expanded="false">
<svg x-show="!showMenu" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="text-ink-1"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
<svg x-show="showMenu" x-cloak width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="text-ink-1" style="display:none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
</button>`,
)

// Reset post-intro dump so the earth/logo takeover can play again
html = html
  .replace(/\bis-ready\b/g, '')
  .replace(/\bfs-go\b/g, '')
  .replace(/class="headblock moving"/g, 'class="headblock"')
  // LiveGlobe / platform accordion scripts bail when *-init is already set from the dump
  .replace(/\s*data-globe-init="true"/g, '')
  .replace(/\s*data-acc-init="true"/g, '')

// Remove hero "adatecho + dialpad" plus mark
html = html.replace(
  /<span class="cross-wrap"><svg class="cross"[^>]*>[\s\S]*?<\/svg><\/span>\s*/g,
  '',
)

// Remove footer Band 2: "Request an AI summary" + "Get the latest ACX insights" email form
{
  const bandMark = '<!-- Band 2: AI summary + newsletter -->'
  const bandAt = html.indexOf(bandMark)
  if (bandAt >= 0) {
    const divAt = html.indexOf('<div', bandAt)
    let depth = 0
    let p = divAt
    let started = false
    for (; p < html.length; p++) {
      if (html.startsWith('<div', p)) {
        depth++
        started = true
        p += 3
        continue
      }
      if (html.startsWith('</div>', p)) {
        depth--
        p += 5
        if (started && depth === 0) {
          p += 1
          break
        }
      }
    }
    html = `${html.slice(0, bandAt)}${html.slice(p)}`
  }
}

// Re-inject WebGL canvas removed from the post-intro dump
if (!/canvas[^>]*data-bigbang/.test(html)) {
  html = html.replace(
    /(<div data-fs-backdrop=""[^>]*>)/,
    `$1<canvas data-bigbang aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;display:block"></canvas>`,
  )
}

// Re-inject LiveGlobe canvas (stripped from the post-intro dump) + local world mask
const liveGlobeCanvas =
  `<canvas data-globe="" aria-hidden="true" class="pointer-events-none absolute top-12 left-1/2 z-0 size-[min(92vw,792px)] -translate-x-1/2 [mask-image:radial-gradient(closest-side,black_62%,transparent)] [-webkit-mask-image:radial-gradient(closest-side,black_62%,transparent)] lg:size-[792px]" width="792" height="792"></canvas>`
if (!/canvas[^>]*data-globe/.test(html)) {
  html = html.replace(
    /(<section[^>]*data-live-globe=""[^>]*>)/,
    `$1${liveGlobeCanvas}`,
  )
}
html = html
  .replaceAll('/images/reskin/world-dots.png', asset('world-dots.png'))
  .replaceAll('https://www.ada.cx/images/reskin/world-dots.png', asset('world-dots.png'))
  .replaceAll(`${base}/images/reskin/world-dots.png`, asset('world-dots.png'))

// Industry selector JS assigns root-absolute /video/... paths; Vite won't rewrite those.
html = html
  .replaceAll('`/video/${s}.webp`', `\`${base}/video/\${s}.webp\``)
  .replaceAll('`/video/${s}.mp4`', `\`${base}/video/\${s}.mp4\``)
  .replaceAll('endsWith(`/video/${s}.mp4`)', `endsWith(\`${base}/video/\${s}.mp4\`)`)

// HubSpot dump leaves a crushed text submit; Ada replaces it with a form-submit control
// (footer CSS turns it into a green "Keep me updated" pill via aria-label::before).
const formSubmitBtn =
  `<button type="submit" class="form-submit bg-charcoal text-off-white aspect-square w-40 shrink-0 cursor-pointer items-center justify-center rounded-full p-8 transition-transform hover:scale-110 inline-flex" aria-label="Keep me updated"><svg viewBox="0 0 24 24" width="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12h17.5"></path><path d="m21 12-7 7m7-7-7-7"></path></g></svg></button>`
html = html.replace(
  /<input[^>]*type="submit"[^>]*class="hs-button primary large"[^>]*>/gi,
  formSubmitBtn,
)
html = html.replace(
  /<input[^>]*class="hs-button primary large"[^>]*type="submit"[^>]*>/gi,
  formSubmitBtn,
)

const override = `
<style id="adatecho-overrides">
  html, body { background: #050505 !important; overflow-x: clip; }
  /* Footer wordmark: keep Ada's large full-column mark (w-full max-w-640).
     Do NOT force width:auto — that collapses to the SVG's intrinsic 84px. */
  footer img[alt="Adatecho"] {
    width: 100% !important;
    max-width: 40rem !important; /* max-w-640 */
    height: auto !important;
  }
  @media (max-width: 640px) {
    /* Contact / Sign in CTAs can wrap awkwardly in the mobile drawer */
    nav[aria-label="Main"] li a[href*="/contact/"],
    nav[aria-label="Main"] li a[href*="/login/"] {
      width: 100%;
      justify-content: center;
    }
  }
  canvas[data-bigbang] {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: block !important;
    z-index: 0 !important;
  }
  a[aria-label="Adatecho home"] {
    width: auto !important;
    min-width: 84px;
    max-width: 200px;
  }
  a[aria-label="Adatecho home"] img {
    height: 20px !important;
    width: auto !important;
    max-width: 160px;
  }
  /* Hide Alpine x-cloak until ready; keep menu icons crisp */
  [x-cloak] { display: none !important; }
  nav[aria-label="Main"] > button[aria-label="Toggle menu"] svg {
    display: block;
    pointer-events: none;
  }
  /* Nav dropdown panels */
  nav[aria-label="Main"] { position: relative; z-index: 60; }
  nav[aria-label="Main"] .dropdown-panel {
    background: rgba(14, 14, 16, 0.96);
    backdrop-filter: blur(18px);
  }
  /* Mobile drawer: size to the whole header pill, not the narrow nav column
     (logo + toggle leave the menu panel looking like a half-width card). */
  @media (max-width: 1023px) {
    nav[aria-label="Main"] { position: static; }
    nav[aria-label="Main"] > ul {
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      max-width: none !important;
    }
  }
  @media (min-width: 1024px) {
    nav[aria-label="Main"] > ul[x-show] { display: flex !important; }
    /* Clear gap between nav pill and dropdown card */
    nav[aria-label="Main"] li > div.top-full {
      padding-top: 20px !important;
      padding-bottom: 8px !important;
    }
  }
  /* Keep Tailwind h-* / absolute fill sizing; only cap overflow on plain imgs.
     Exclude hero partnership logos — Ada sizes them via .fs .logo-ada/.logo-dp. */
  img:not(.dirblur):not(.absolute):not([class*="h-"]):not(.logo-ada):not(.logo-dp):not(.rise) {
    max-width: 100%;
    height: auto;
  }
  .fs .logo-ada,
  .fs .logo-dp {
    height: 66px !important;
    width: auto !important;
    max-width: none;
    margin-bottom: 0 !important;
  }
  /* Equal columns so the gap sits on the center grid line (wider Adatecho
     wordmark otherwise pushes the trailing "o" onto the axis). */
  .fs .lmask > div {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-content: initial !important;
    column-gap: clamp(16px, 3vw, 36px) !important;
    gap: clamp(16px, 3vw, 36px) !important;
    width: 100%;
  }
  .fs .logo-ada { justify-self: end; }
  .fs .logo-dp { justify-self: start; }
  @media (max-width: 640px) {
    .fs .logo-ada,
    .fs .logo-dp { height: 46px !important; }
  }
  img.dirblur,
  video[data-industry-video] {
    max-width: none;
    height: 100% !important;
    width: 100% !important;
  }
  /* Battle-tested certification marks */
  img[src*="/images/reskin/badges/"] {
    height: 40px !important;
    width: auto !important;
    max-width: none;
  }
  /* Inline HubSpot email + CTA row */
  .hs-form-wrapper[data-inline] form {
    align-items: center !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    gap: 12px !important;
  }
  .hs-form-wrapper[data-inline] .hs_email,
  .hs-form-wrapper[data-inline] .hs-form-field {
    flex: 1 1 auto !important;
    width: auto !important;
    min-width: 0 !important;
  }
  .hs-form-wrapper[data-inline] .hs-submit,
  .hs-form-wrapper[data-inline] .actions {
    flex: 0 0 auto !important;
    width: auto !important;
  }
  .hs-form-wrapper[data-inline] .form-submit {
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }
</style>
<script>
  document.addEventListener('alpine:init', () => {
    Alpine.data('mainNav', () => ({
      showMenu: window.matchMedia('(min-width: 1024px)').matches,
      open: null,
      _t: null,
      isOpen(i) { return this.open === i },
      toggle(i) { this.open = this.open === i ? null : i },
      enter(i) {
        if (!window.matchMedia('(min-width: 1024px)').matches) return
        clearTimeout(this._t)
        this.open = i
      },
      leave(i) {
        if (!window.matchMedia('(min-width: 1024px)').matches) return
        this._t = setTimeout(() => { if (this.open === i) this.open = null }, 180)
      },
      close(i) { if (this.open === i) this.open = null },
    }))
  })
</script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js"></script>
<script>
  document.documentElement.classList.add('js');
</script>
<script>
  // HubSpot rehydrates the dump and restores a crushed text submit — swap to Ada's control.
  (() => {
    const svg = '<svg viewBox="0 0 24 24" width="20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12h17.5"></path><path d="m21 12-7 7m7-7-7-7"></path></g></svg>'
    const upgrade = (root = document) => {
      root.querySelectorAll('.hs-form-wrapper[data-inline] input.hs-button[type="submit"]').forEach((input) => {
        if (input.dataset.adatechoUpgraded) return
        const btn = document.createElement('button')
        btn.type = 'submit'
        btn.className = 'form-submit bg-charcoal text-off-white aspect-square w-40 shrink-0 cursor-pointer items-center justify-center rounded-full p-8 transition-transform hover:scale-110 inline-flex'
        btn.setAttribute('aria-label', input.value || 'Keep me updated')
        btn.innerHTML = svg
        input.dataset.adatechoUpgraded = '1'
        input.replaceWith(btn)
      })
    }
    upgrade()
    new MutationObserver(() => upgrade()).observe(document.documentElement, { childList: true, subtree: true })
  })()
</script>
`

// Ensure Alpine plugins stay before Alpine core (already in dump); strip duplicate alpine core if any
html = html.replace(/<script[^>]*alpinejs@[^>]*><\/script>/gi, '')
html = html.replace('</head>', `${override}</head>`)

// Keep homepage footer Company column in sync with interior pages
html = html.replace(
  /(Why Adatecho\?\s*<\/a>\s*<\/li>)/,
  `$1<li> <a href="${base}/contact/" class="[background-image:linear-gradient(to_right,currentColor,currentColor)] bg-[length:0_1px] bg-bottom-left bg-no-repeat leading-none transition-all hover:bg-[length:100%_1px] focus:outline-2 focus:outline-offset-2 focus:outline-current hover:text-ink-1 text-ink-2">Contact </a> </li>`,
)

// Footer wordmark should scale with the column, not stay at SVG intrinsic 84×20.
html = html.replace(
  /(<img[^>]*alt="Adatecho"[^>]*class="[^"]*max-w-640[^"]*"[^>]*)\s+width="84"\s+height="20"/,
  '$1',
)
html = html.replace(
  /(<img[^>]*class="[^"]*max-w-640[^"]*"[^>]*alt="Adatecho"[^>]*)\s+width="84"\s+height="20"/,
  '$1',
)

fs.writeFileSync(path.join(outDir, 'index.html'), html)

// Contact page (inject shared site footer)
const contactSrc = path.join(__dirname, 'contact-page.html')
const contactDir = path.join(outDir, 'contact')
fs.mkdirSync(contactDir, { recursive: true })
{
  let contactHtml = fs.readFileSync(contactSrc, 'utf8')
  contactHtml = contactHtml.replace(
    '<!--SITE_FOOTER-->',
    siteFooter({ wordmarkSrc: '../assets/adatecho-wordmark.svg' }),
  )
  fs.writeFileSync(path.join(contactDir, 'index.html'), contactHtml)
}

// Interior pages for every restored nav / footer route
let pagesWritten = 0
for (const page of pages) {
  const dir = path.join(outDir, ...page.path.split('/'))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), renderPage(page, { base }))
  pagesWritten++
}

for (const cssName of ['_slug_.CDaHifTo.css', '_slug_.Cfru3zyi.css', 'index.Dw49YcCf.css', 'index.C2ho-sh3.css']) {
  const cssPath = path.join(outDir, 'assets', cssName)
  if (!fs.existsSync(cssPath)) continue
  let css = fs.readFileSync(cssPath, 'utf8')
  css = css
    .replaceAll('/_astro/fonts/7d14eea390898fca.woff2', './7d14eea390898fca.woff2')
    .replaceAll('/_astro/fonts/42690f2bfe317b8e.woff2', './42690f2bfe317b8e.woff2')
    .replaceAll('url(/_astro/', 'url(./')
  fs.writeFileSync(cssPath, css)
}

console.log('Wrote', path.join(outDir, 'index.html'), html.length, 'bytes')
console.log('Wrote', path.join(contactDir, 'index.html'))
console.log('Wrote', pagesWritten, 'interior pages')
