import { FormEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { industries, outcomes, platform, trust } from '../data'

function PageHero({ title, body }: { title: string; body: string }) {
  return (
    <section className="page-hero">
      <div className="section-shell">
        <h1 className="display">{title}</h1>
        <p>{body}</p>
      </div>
    </section>
  )
}

export function PlatformPage() {
  return (
    <>
      <PageHero
        title="The Adatecho ACX Platform"
        body="Measure, test, coach, and extend your AI agent at scale — purpose-built for enterprise customer experience."
      />
      <section className="section">
        <div className="section-shell narrow">
          <div className="simple-list">
            {platform.items.map((item) => (
              <article key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            Speak to an expert
          </Link>
        </div>
      </section>
    </>
  )
}

export function IndustryPage() {
  const { slug } = useParams()
  const tab =
    industries.tabs.find((t) => t.href.endsWith(slug ?? '')) ?? industries.tabs[0]

  return (
    <>
      <PageHero
        title={`AI CX for ${tab.label}`}
        body="Industry-tuned AI agents that resolve complex customer work with accuracy, speed, and brand voice."
      />
      <section className="section">
        <div className="section-shell">
          <div className="industry-metrics page-metrics">
            {tab.metrics.map((m) => (
              <article key={m.label} className="outcome-card">
                <p className="outcome-value">{m.value}</p>
                <p className="outcome-label">{m.label}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            Speak to an expert
          </Link>
        </div>
      </section>
    </>
  )
}

export function CustomersPage() {
  return (
    <>
      <PageHero
        title="Customer stories"
        body="See how 350+ businesses delivered exceptional customer service with Adatecho."
      />
      <section className="section">
        <div className="section-shell">
          <div className="outcomes-grid">
            {outcomes.items.map((item) => (
              <article key={item.label} className="outcome-card">
                <span className="case-chip">Case study</span>
                <p className="outcome-value">{item.value}</p>
                <p className="outcome-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        body="Guides, research, and events to help you execute and evolve your ACX strategy."
      />
      <section className="section">
        <div className="section-shell">
          <div className="resource-grid">
            {['Playbooks', 'Research briefs', 'Webinars', 'Product docs'].map((item) => (
              <article key={item} className="trust-card">
                <h3>{item}</h3>
                <p>Actionable material for CX, support, and AI leaders building with Adatecho.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        body="Our best advice plus actionable insights to transform your customer experience."
      />
      <section className="section">
        <div className="section-shell">
          <div className="resource-grid">
            {[
              'How AI agents outperform human teams on routine CX',
              'Designing safe, accurate enterprise AI conversations',
              'From cost center to growth driver: modern customer care',
            ].map((title) => (
              <article key={title} className="trust-card">
                <h3>{title}</h3>
                <p>Insights from the Adatecho team on automation, trust, and omnichannel CX.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function CompanyPage({ kind }: { kind?: 'careers' }) {
  const isCareers = kind === 'careers'
  return (
    <>
      <PageHero
        title={isCareers ? 'Careers at Adatecho' : 'Why Adatecho'}
        body={
          isCareers
            ? 'Join an AI-native team on a mission to make customer experience extraordinary for everyone.'
            : 'Adatecho is an AI-native company built to bring people and AI agents together to do more for every customer.'
        }
      />
      <section className="section">
        <div className="section-shell narrow">
          <p className="lede">
            We help enterprises deploy AI agents that resolve complex work across messaging, voice, and email —
            with the measurement, coaching, and safety controls required at scale.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Speak to an expert
          </Link>
        </div>
      </section>
    </>
  )
}

export function TrustPage() {
  return (
    <>
      <PageHero title={trust.title} body={trust.subtitle} />
      <section className="section">
        <div className="section-shell">
          <div className="trust-grid">
            {trust.items.map((item) => (
              <article key={item.title} className="trust-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Speak to an expert"
        body="Tell us about your CX goals and we’ll show how Adatecho can help."
      />
      <section className="section">
        <div className="section-shell narrow">
          {sent ? (
            <p className="form-note">Thanks — an expert will reach out shortly.</p>
          ) : (
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                Full name
                <input name="name" required />
              </label>
              <label>
                Business email
                <input type="email" name="email" required />
              </label>
              <label>
                Company
                <input name="company" required />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows={5} required />
              </label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  return (
    <>
      <PageHero
        title={kind === 'privacy' ? 'Privacy' : 'Terms'}
        body={`Adatecho ${kind === 'privacy' ? 'privacy practices' : 'terms of use'} for our website and services.`}
      />
      <section className="section">
        <div className="section-shell narrow">
          <p className="lede">
            This is a placeholder legal page for the Adatecho marketing site. Replace with your counsel-approved
            policy before launch.
          </p>
        </div>
      </section>
    </>
  )
}
