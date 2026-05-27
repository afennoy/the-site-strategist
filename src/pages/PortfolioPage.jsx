import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioPage.css'

const caseStudies = [
  {
    id: 1,
    bandClass: `case-study--one`,
    client: `Case Study One`,
    name: `Bloom & Co. Floral Studio`,
    category: `E-Commerce + Brand Identity`,
    color: `var(--salmon)`,
    project: `Bloom & Co. needed a full rebrand and e-commerce site to match the elevated floral studio they had grown into. Their existing site was a DIY Squarespace template that undersold their work and drove almost no online sales.`,
    challenge: `The owner was spending hours every week managing orders through Instagram DMs with no streamlined purchasing process. The website had a high bounce rate and zero conversion — people visited but never booked.`,
    strategy: `We started with a brand identity refresh, then built a custom Wix e-commerce site with a clear product catalog, seamless checkout, and a strategic homepage designed to convert browsers into buyers. SEO basics were implemented from day one.`,
    images: [`var(--salmon)`, `var(--mint)`, `var(--coral)`, `var(--navy)`],
  },
  {
    id: 2,
    bandClass: `case-study--coral`,
    client: `Case Study Two`,
    name: `Apex Legal Group`,
    category: `Service Business Website`,
    color: `var(--teal)`,
    project: `Apex Legal Group was a growing boutique law firm with a website that looked like it was built in 2012. Their site communicated nothing about the quality and expertise of their team.`,
    challenge: `Despite having an excellent reputation locally, their online presence was losing them clients to competitors. Prospective clients couldn't find the information they needed and left before reaching out.`,
    strategy: `A strategy-led redesign focused on clear messaging hierarchy, trust signals, and a streamlined contact flow. We rebuilt the site architecture to answer the most common client questions upfront and cut the bounce rate in half.`,
    images: [`var(--teal)`, `var(--navy)`, `var(--mint)`, `var(--salmon)`],
  },
  {
    id: 3,
    bandClass: `case-study--teal`,
    client: `Case Study Three`,
    name: `Elevate with Erica`,
    category: `Coaching + Personal Brand`,
    color: `var(--coral)`,
    project: `Erica is a business coach who had been growing her audience through Instagram but had no website to send people to. She needed a professional home base that converted followers into paying clients.`,
    challenge: `Without a website, every potential client had to go through multiple DM conversations before committing. Erica was spending 10+ hours a week on intake that should have been automated.`,
    strategy: `We built a 5-page coaching site designed to do the heavy lifting for her — clear positioning, social proof front and center, and a booking form that filters and qualifies leads automatically.`,
    images: [`var(--coral)`, `var(--salmon)`, `var(--teal)`, `var(--navy)`],
  },
  {
    id: 4,
    bandClass: `case-study--navy`,
    client: `Case Study Four`,
    name: `Harbour + Home Interiors`,
    category: `Service + Portfolio Site`,
    color: `var(--navy)`,
    project: `An interior design studio that had grown entirely through word of mouth and needed a portfolio site that matched the level of work they were delivering — stunning, editorial, and conversion-focused.`,
    challenge: `High-quality clients were landing on their site and leaving unimpressed. The photography was gorgeous but the site design wasn't showcasing it properly, and there was no clear call to action.`,
    strategy: `A full-bleed editorial design with a gallery-first layout, strategic project case studies, and a discovery call booking flow built directly into the site. The site now books consultations on autopilot.`,
    images: [`var(--navy)`, `var(--mint)`, `var(--salmon)`, `var(--coral)`],
  },
]

export default function PortfolioPage() {
  const [open, setOpen] = useState(1)

  return (
    <>
      {/* Hero */}
      <section className="port-hero">
        <div className="port-hero__inner">
          <div className="port-hero__text">
            <h1 className="port-hero__heading">
              Strategy You Can<br />Actually See.
            </h1>
            <p className="port-hero__sub">
              A look at websites designed with intention, built for usability, and made
              to actually support the businesses behind them.
            </p>
          </div>
          <div className="port-hero__mark" aria-hidden="true">
            <img src="/assets/logos/submark.png" alt="" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="port-studies">
        <div className="port-studies__inner">
          {caseStudies.map(cs => {
            const isOpen = open === cs.id
            return (
              <div key={cs.id} className={`case-study ${cs.bandClass || ''} ${isOpen ? 'case-study--open' : ''}`}>
                <button
                  className="case-study__trigger"
                  onClick={() => setOpen(isOpen ? 0 : cs.id)}
                  aria-expanded={isOpen}
                >
                  <span className="case-study__num">{cs.client}</span>
                  <span className="case-study__chevron">{isOpen ? '∧' : '∨'}</span>
                </button>

                {isOpen && (
                  <div className="case-study__body">
                    <div className="case-study__meta">
                      <span className="case-study__cat">{cs.category}</span>
                      <h2 className="case-study__name">{cs.name}</h2>
                    </div>

                    <div className="case-study__layout">
                      <div className="case-study__side-images">
                        {cs.images.slice(0, 3).map((bg, i) => (
                          <div key={i} className="case-study__side-image" style={{ background: bg }}>
                            <img src="/assets/logos/submark.png" alt="" className="case-study__logo-overlay" />
                          </div>
                        ))}
                      </div>

                      <div className="case-study__details">
                        <div className="case-study__block">
                          <p className="case-study__block-label">The Project</p>
                          <p>{cs.project}</p>
                        </div>
                        <div className="case-study__block">
                          <p className="case-study__block-label">The Challenge</p>
                          <p>{cs.challenge}</p>
                        </div>
                        <div className="case-study__block">
                          <p className="case-study__block-label">The Strategy</p>
                          <p>{cs.strategy}</p>
                        </div>
                      </div>
                    </div>

                    <div className="case-study__images">
                      {cs.images.map((bg, i) => (
                        <div key={i} className="case-study__thumb" style={{ background: bg }}>
                          <img src="/assets/logos/submark.png" alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="port-cta">
        <div className="port-cta__inner">
          <h2 className="port-cta__heading">
            Ready to be the<br />next case study?
          </h2>
          <Link to="/lets-talk" className="btn btn--primary">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
