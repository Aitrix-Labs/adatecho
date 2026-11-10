/** Route catalog + shared interior page HTML for the Adatecho clone. */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const footerTemplate = fs.readFileSync(path.join(__dirname, 'site-footer.html'), 'utf8')

export function siteFooter({ wordmarkSrc }) {
  return footerTemplate.replaceAll('__WORDMARK__', wordmarkSrc)
}

export const pages = [
  // Platform
  { path: 'platform', title: 'Platform', eyebrow: 'Platform', lede: 'Measure, test, coach, and extend your AI agent at scale with the Adatecho ACX platform.' },
  { path: 'platform/ada-computer', title: 'Adatecho Computer', eyebrow: 'Platform', lede: 'Give your AI agent the tools to complete customer tasks across your systems.' },
  { path: 'platform/playbooks', title: 'Playbooks', eyebrow: 'Platform', lede: 'Automate complex SOPs with agentic AI that follows your process end to end.' },
  { path: 'platform/integrations', title: 'Integrations', eyebrow: 'Platform', lede: 'Connect systems to personalize support across channels and languages.' },
  { path: 'platform/trust', title: 'Trust & Safety', eyebrow: 'Platform', lede: 'Scale enterprise AI with confidence — accuracy controls, privacy, and compliance built in.' },
  { path: 'platform/voice', title: 'Voice', eyebrow: 'Channels', lede: 'Deliver natural, reliable voice experiences with AI agents that resolve and hand off with context.' },
  { path: 'platform/messaging', title: 'Messaging', eyebrow: 'Channels', lede: 'Meet customers where they are with messaging AI that keeps conversations continuous.' },
  { path: 'platform/email', title: 'Email', eyebrow: 'Channels', lede: 'Resolve email inquiries with accurate, brand-safe AI that works alongside your team.' },

  // Industries
  { path: 'industry/gaming', title: 'Betting & Gaming', eyebrow: 'Industries', lede: 'AI CX purpose-built for betting and gaming — faster resolutions when stakes and timing matter.' },
  { path: 'industry/ecommerce', title: 'Ecommerce', eyebrow: 'Industries', lede: 'Raise CSAT and cut handle time across orders, returns, shipping, and product questions.' },
  { path: 'industry/financial-services', title: 'Financial Services', eyebrow: 'Industries', lede: 'Secure, compliant AI agents for banking, fintech, and financial customer care.' },
  { path: 'industry/health-insurance', title: 'Health Insurance', eyebrow: 'Industries', lede: 'Guide members through benefits, claims, and coverage with accurate, empathetic AI.' },
  { path: 'industry/property-casualty-insurance', title: 'Property & Casualty Insurance', eyebrow: 'Industries', lede: 'Support policyholders through quotes, claims, and coverage questions at scale.' },
  { path: 'industry/saas', title: 'SaaS / Technology', eyebrow: 'Industries', lede: 'Help product users self-serve while your team focuses on high-value conversations.' },
  { path: 'industry/travel', title: 'Travel', eyebrow: 'Industries', lede: 'Keep travelers moving with AI that handles disruptions, bookings, and status updates.' },

  // Customers / content
  { path: 'case-studies', title: 'Customer stories', eyebrow: 'Customers', lede: 'See how 350+ businesses delivered exceptional customer service with Adatecho.' },
  { path: 'case-study/betsson', title: 'Betsson case study', eyebrow: 'Customers', lede: 'How Betsson used Adatecho to lift agent availability and resolve more interactions.' },
  { path: 'case-study/brigit', title: 'Brigit case study', eyebrow: 'Customers', lede: 'How Brigit scaled customer care with AI agents built for financial services.' },
  { path: 'case-study/cebu-pacific', title: 'Cebu Pacific case study', eyebrow: 'Customers', lede: 'How Cebu Pacific reduced wait times and improved automated resolution.' },
  { path: 'case-study/epos-now', title: 'Epos Now case study', eyebrow: 'Customers', lede: 'How Epos Now transformed support efficiency with Adatecho.' },
  { path: 'case-study/ipsy', title: 'IPSY case study', eyebrow: 'Customers', lede: 'How IPSY unlocked millions in estimated annual savings with AI CX.' },
  { path: 'case-study/life360', title: 'Life360 case study', eyebrow: 'Customers', lede: 'How Life360 managed FTE-scale workload with an AI agent.' },
  { path: 'case-study/loop-earplugs', title: 'Loop Earplugs case study', eyebrow: 'Customers', lede: 'How Loop Earplugs raised CSAT after automating support.' },
  { path: 'case-study/monday-com', title: 'monday.com case study', eyebrow: 'Customers', lede: 'How monday.com lowered average handle time with Adatecho.' },

  // Resources
  { path: 'blog', title: 'Blog', eyebrow: 'Resources', lede: 'Advice and actionable insights to transform your customer experience with AI agents.' },
  { path: 'research/agentic-cx-in-2026', title: 'Agentic CX in 2026', eyebrow: 'Research', lede: 'Timely market data to help you execute, grow, and evolve your ACX strategy.' },
  { path: 'events', title: 'Events', eyebrow: 'Resources', lede: 'Curated moments for a global community of agentic CX leaders.' },
  { path: 'resources', title: 'Resource library', eyebrow: 'Resources', lede: 'Expert guides, reports, and templates on agentic customer service.' },

  // Company
  { path: 'why-ada', title: 'Why Adatecho', eyebrow: 'Company', lede: 'Why leading enterprises choose Adatecho to make customer experience extraordinary.' },
  { path: 'full-stack-with-dialpad', title: 'Full stack with Dialpad', eyebrow: 'Announcement', lede: 'A new kind of customer communications company — Adatecho and Dialpad, together.' },
  { path: 'practice', title: 'Practice', eyebrow: 'Platform', lede: 'Tools to measure, test, and coach AI agent performance for continuous improvement.' },
  { path: 'experts', title: 'Experts', eyebrow: 'Platform', lede: 'Partner with Adatecho experts to design, launch, and optimize your ACX strategy.' },
  { path: 'labs', title: 'Adatecho Labs', eyebrow: 'Labs', lede: 'Applied AI research and experiments from the team building agentic CX.' },
  { path: 'labs/blog', title: 'Adatecho Labs blog', eyebrow: 'Labs', lede: 'Notes and updates from applied AI research at Adatecho Labs.' },
  { path: 'labs/research', title: 'Applied AI research', eyebrow: 'Labs', lede: 'Research that advances accuracy, safety, and usefulness of AI customer agents.' },
  { path: 'careers', title: 'Careers', eyebrow: 'Company', lede: 'Join Adatecho and help make customer experience extraordinary for everyone.' },
  { path: 'media-center', title: 'Media Center', eyebrow: 'Company', lede: 'News, brand assets, and announcements from Adatecho.' },
  { path: 'become-a-partner', title: 'Become a partner', eyebrow: 'Company', lede: 'Grow with Adatecho — partner programs for agencies, SIs, and technology allies.' },
  { path: 'login', title: 'Sign in', eyebrow: 'Account', lede: 'Sign in to your Adatecho workspace. Need access? Speak with our team.' },

  // Legal
  { path: 'legal/privacy-policy', title: 'Privacy Policy', eyebrow: 'Legal', lede: 'How Adatecho collects, uses, and protects personal information.' },
  { path: 'legal/customer-terms-of-use', title: 'Customer Terms of Use', eyebrow: 'Legal', lede: 'Terms that govern use of Adatecho products and services.' },
  { path: 'legal/accessibility', title: 'Accessibility', eyebrow: 'Legal', lede: 'Our commitment to accessible digital experiences for every customer.' },
]

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export function renderPage({ path: routePath, title, eyebrow, lede }, { base = '/adatecho' } = {}) {
  const depth = routePath.split('/').filter(Boolean).length
  const rel = '../'.repeat(depth)
  const home = `${base}/`
  const contact = `${base}/contact/`
  const asset = (name) => `${rel}assets/${name}`
  const safeTitle = escapeHtml(title)
  const safeEyebrow = escapeHtml(eyebrow)
  const safeLede = escapeHtml(lede)

  const nav = [
    ['Platform', `${base}/platform/`],
    ['Industries', `${base}/industry/ecommerce/`],
    ['Customers', `${base}/case-studies/`],
    ['Resources', `${base}/resources/`],
    ['Why Adatecho', `${base}/why-ada/`],
    ['Contact', contact],
  ]

  const navLinks = nav
    .map(
      ([label, href]) =>
        `<a href="${href}"${href === contact && routePath === 'contact' ? ' aria-current="page"' : ''}>${escapeHtml(label)}</a>`,
    )
    .join('\n          ')

  return `<!DOCTYPE html>
<html lang="en" class="js">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${safeTitle} | Adatecho</title>
  <meta name="description" content="${safeLede}" />
  <link rel="icon" type="image/svg+xml" href="${rel}favicon.svg" />
  <link rel="preload" href="${asset('7d14eea390898fca.woff2')}" as="font" type="font/woff2" crossorigin="" />
  <link rel="preload" href="${asset('42690f2bfe317b8e.woff2')}" as="font" type="font/woff2" crossorigin="" />
  <link rel="stylesheet" href="${asset('_slug_.CDaHifTo.css')}" />
  <link rel="stylesheet" href="${asset('_slug_.Cfru3zyi.css')}" />
  <link rel="stylesheet" href="${asset('index.Dw49YcCf.css')}" />
  <link rel="stylesheet" href="${asset('index.C2ho-sh3.css')}" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body { background: #050505; min-height: 100%; margin: 0; overflow-x: hidden; }
    .page { color: #f9f9f9; font-family: inherit; }
    .page-top { position: sticky; top: 0; z-index: 40; padding: 14px 16px 0; }
    .page-nav {
      width: min(1120px, 100%);
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 12px;
      border: 1px solid rgba(249, 249, 249, 0.12);
      border-radius: 999px;
      background: rgba(14, 14, 16, 0.88);
      backdrop-filter: blur(16px);
      position: relative;
    }
    .page-nav a.home { display: inline-flex; align-items: center; line-height: 0; margin-right: auto; min-width: 0; }
    .page-nav a.home img { display: block; height: 18px; width: auto; max-width: 120px; }
    .page-menu-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      border: 0;
      background: rgba(249, 249, 249, 0.08);
      color: #f9f9f9;
      cursor: pointer;
      flex-shrink: 0;
    }
    .page-menu-btn svg { display: block; pointer-events: none; }
    .page-menu-btn .icon-close { display: none; }
    .page-nav.is-open .page-menu-btn .icon-menu { display: none; }
    .page-nav.is-open .page-menu-btn .icon-close { display: block; }
    .page-nav-links {
      display: none;
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 10px);
      flex-direction: column;
      align-items: stretch;
      gap: 4px;
      padding: 12px;
      border: 1px solid rgba(249, 249, 249, 0.12);
      border-radius: 20px;
      background: rgba(14, 14, 16, 0.96);
      backdrop-filter: blur(16px);
      box-shadow: 0 18px 40px rgba(0,0,0,0.45);
    }
    .page-nav.is-open .page-nav-links { display: flex; }
    .page-nav-links a {
      color: #d8d8d8;
      text-decoration: none;
      font-size: 14px;
      padding: 12px 14px;
      border-radius: 12px;
    }
    .page-nav-links a:hover,
    .page-nav-links a[aria-current="page"] { color: #fff; background: rgba(249,249,249,0.06); }
    .page-nav .cta {
      color: #0a0a0a;
      background: #c8d5b0;
      text-decoration: none;
      font-size: 13px;
      padding: 8px 12px;
      border-radius: 999px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .page-nav .cta:hover { filter: brightness(1.06); }
    .page-nav .cta .cta-full { display: none; }
    .page-nav .cta .cta-short { display: inline; }
    .page-shell {
      width: min(880px, calc(100% - 32px));
      margin: 0 auto;
      padding: 56px 0 48px;
    }
    .page-eyebrow {
      color: #9a9a9a;
      font-size: 12px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 14px;
    }
    .page-title {
      font-size: clamp(32px, 8vw, 60px);
      line-height: 1.05;
      letter-spacing: -0.03em;
      font-weight: 400;
      margin: 0 0 16px;
      text-wrap: balance;
    }
    .page-lede {
      color: #bdbdbd;
      font-size: 16px;
      line-height: 1.55;
      max-width: 40rem;
      margin: 0 0 28px;
    }
    .page-actions { display: grid; gap: 10px; }
    .page-actions a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 14px;
      padding: 12px 20px;
      border-radius: 999px;
      transition: transform 0.15s ease, filter 0.15s ease, background 0.15s ease;
      width: 100%;
    }
    .page-actions a:active { transform: scale(0.96); }
    .page-actions .primary { background: #c8d5b0; color: #0a0a0a; }
    .page-actions .primary:hover { filter: brightness(1.06); }
    .page-actions .ghost {
      color: #f9f9f9;
      border: 1px solid rgba(249, 249, 249, 0.16);
      background: transparent;
    }
    .page-actions .ghost:hover { background: rgba(249, 249, 249, 0.06); }
    .page-panel {
      margin-top: 36px;
      border: 1px solid rgba(249, 249, 249, 0.12);
      background: rgba(20, 20, 22, 0.92);
      border-radius: 20px;
      padding: 22px;
    }
    .page-panel h2 {
      margin: 0 0 12px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -0.02em;
    }
    .page-panel p {
      margin: 0;
      color: #bdbdbd;
      font-size: 15px;
      line-height: 1.55;
    }
    .page-site-footer { margin-top: 40px; }
    .page-site-footer footer img[alt="Adatecho"] {
      width: 100% !important;
      max-width: 40rem !important;
      height: auto !important;
    }
    @media (min-width: 640px) {
      .page-top { padding: 18px 24px 0; }
      .page-nav { gap: 14px; padding: 12px 18px; }
      .page-nav a.home img { height: 20px; max-width: 160px; }
      .page-nav .cta { padding: 8px 14px; }
      .page-nav .cta .cta-full { display: inline; }
      .page-nav .cta .cta-short { display: none; }
      .page-shell { width: min(880px, calc(100% - 48px)); padding: 72px 0 56px; }
      .page-actions { display: flex; flex-wrap: wrap; gap: 12px; }
      .page-actions a { width: auto; }
      .page-panel { border-radius: 24px; padding: 28px; }
    }
    @media (min-width: 900px) {
      .page-menu-btn { display: none; }
      .page-nav-links {
        display: flex;
        position: static;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        padding: 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        backdrop-filter: none;
      }
      .page-nav-links a { font-size: 13px; padding: 8px 10px; white-space: nowrap; }
      .page-shell { padding: 96px 0 72px; }
      .page-site-footer { margin-top: 48px; }
    }
  </style>
</head>
<body class="page reskin">
  <header class="page-top">
    <div class="page-nav" data-page-nav>
      <a class="home" href="${home}" aria-label="Adatecho home">
        <img src="${asset('adatecho-wordmark.svg')}" alt="Adatecho" width="84" height="20" />
      </a>
      <nav class="page-nav-links" aria-label="Primary">
          ${navLinks}
      </nav>
      <a class="cta" href="${contact}"><span class="cta-short">Contact</span><span class="cta-full">Speak to an expert</span></a>
      <button type="button" class="page-menu-btn" aria-label="Toggle menu" aria-expanded="false" data-page-menu>
        <svg class="icon-menu" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
        <svg class="icon-close" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>
      </button>
    </div>
  </header>

  <main class="page-shell">
    <div class="page-eyebrow">${safeEyebrow}</div>
    <h1 class="page-title">${safeTitle}</h1>
    <p class="page-lede">${safeLede}</p>
    <div class="page-actions">
      <a class="primary" href="${contact}">Speak to an expert</a>
      <a class="ghost" href="${home}">Back to home</a>
    </div>
    <aside class="page-panel">
      <h2>Explore with our team</h2>
      <p>
        This page is part of the Adatecho site experience. Reach out and we’ll tailor a walkthrough
        of ${safeTitle} to your CX goals, channels, and stack.
      </p>
    </aside>
  </main>

  <div class="page-site-footer">
    ${siteFooter({ wordmarkSrc: asset('adatecho-wordmark.svg') })}
  </div>
  <script>
    (() => {
      const root = document.querySelector('[data-page-nav]')
      const btn = document.querySelector('[data-page-menu]')
      if (!root || !btn) return
      const sync = (open) => {
        root.classList.toggle('is-open', open)
        btn.setAttribute('aria-expanded', String(open))
      }
      btn.addEventListener('click', () => sync(!root.classList.contains('is-open')))
      document.addEventListener('click', (e) => {
        if (!root.contains(e.target)) sync(false)
      })
      window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 900px)').matches) sync(false)
      })
    })()
  </script>
</body>
</html>
`
}
