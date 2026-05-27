import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ServicesPage.css'

const packages = [
  {
    id: 'audit',
    colorClass: 'pkg--salmon',
    name: 'Site + System Audit',
    tag: 'Best for businesses with an existing site that needs a strategic review',
    price: '$750',
    time: '3–5 business days',
    revisions: 'One round',
    included: [
      { label: 'Full Site Audit', detail: 'Page-by-page review of structure, copy, and UX' },
      { label: 'Performance Check', detail: 'Speed, mobile, and accessibility review' },
      { label: 'SEO Assessment', detail: 'On-page SEO gaps and quick wins identified' },
      { label: 'Action Plan', detail: 'Prioritized list of fixes and recommendations' },
    ],
  },
  {
    id: 'integrations',
    colorClass: 'pkg--mint',
    name: 'System Integrations',
    tag: 'Best for businesses ready to connect their tools and automate their workflow',
    price: 'Starting at $500',
    time: '1–2 weeks',
    revisions: 'One round',
    included: [
      { label: 'Third-Party Integrations', detail: 'CRM, booking, email marketing, and more' },
      { label: 'Automation Setup', detail: 'Workflows that save you time and reduce manual tasks' },
      { label: 'Payment + Checkout', detail: 'Stripe, PayPal, or platform-native setup' },
      { label: 'Testing + QA', detail: 'Full end-to-end testing before handoff' },
    ],
  },
  {
    id: 'starter',
    colorClass: 'pkg--navy',
    name: 'Starter Package',
    tag: 'Best for personal brands / portfolios / simple informational sites',
    price: '$2,000',
    time: '10–12 hours',
    revisions: 'One round',
    included: [
      { label: 'Branded Website Design', detail: 'Custom one-page branded Wix site' },
      { label: 'Launch Setup', detail: 'Domain and hosting setup guidance' },
      { label: 'Search Visibility', detail: 'Basic mobile-responsive design + SEO basics' },
    ],
  },
  {
    id: 'essentials',
    colorClass: 'pkg--coral',
    name: 'Business Essentials',
    tag: 'Best for service-based businesses ready to convert clients',
    price: '$3,500',
    time: '3–4 weeks',
    revisions: 'Two rounds',
    included: [
      { label: 'Multi-Page Website', detail: 'Up to 5 custom-designed pages' },
      { label: 'Copywriting Guidance', detail: 'Page-by-page copy outline and feedback' },
      { label: 'Lead Capture Setup', detail: 'Contact form + email integration' },
      { label: 'Analytics + Tracking', detail: 'Google Analytics setup' },
      { label: 'SEO Optimization', detail: 'Full on-page SEO implementation' },
    ],
  },
  {
    id: 'ecommerce',
    colorClass: 'pkg--teal',
    name: 'E-Commerce Ready',
    tag: 'Best for product-based businesses and online shops',
    price: 'Starting at $5,000',
    time: '4–6 weeks',
    revisions: 'Two rounds',
    included: [
      { label: 'Full E-Commerce Build', detail: 'Shop setup with product pages' },
      { label: 'Payment Processing', detail: 'Stripe / PayPal integration' },
      { label: 'Inventory Management', detail: 'Product upload and catalog setup' },
      { label: 'Mobile-First Design', detail: 'Optimized for mobile shopping' },
      { label: 'Abandoned Cart + Email', detail: 'Basic automation setup' },
    ],
  },
  {
    id: 'addons',
    colorClass: 'pkg--navy',
    name: 'Add-Ons + Hourly Work',
    isAddons: true,
  },
]

const addons = [
  { label: 'Extra Page', price: '$205/page' },
  { label: 'Product Uploads', price: '$100' },
  { label: 'Blog Set-Up', price: '$200' },
  { label: 'Migration', price: 'Starts at $250' },
  { label: 'Logo / Brand Kit', price: '$500' },
  { label: 'Custom JS/Velo Scripting', price: '$100–$200/hr' },
  { label: 'Ongoing Maintenance', price: '$150/hr' },
  { label: 'Email Newsletter Setup', price: '$250' },
]

export default function ServicesPage() {
  const [open, setOpen] = useState('audit')

  return (
    <>
      {/* ── Hero ── */}
      <section className="svc-hero">
        <div className="svc-hero__inner">
          <div className="svc-hero__video">
            <div className="svc-hero__video-placeholder">video</div>
          </div>
          <div className="svc-hero__text">
            <h1 className="svc-hero__heading">
              <span className="svc-hero__heading--salmon">You don't need the biggest package.</span>
              <br />
              <span className="svc-hero__heading--white">You need the right one.</span>
            </h1>
            <p className="svc-hero__sub">
              These packages are built to meet you where you are, whether you're
              starting fresh or refining what you already have.
            </p>
            <p className="svc-hero__sub">
              Each one is designed with intention, combining clean design with real
              functionality so your website supports your business, not slows it down.
            </p>
          </div>
        </div>
      </section>

      {/* ── Packages Accordion ── */}
      <section className="svc-packages">
        <div className="svc-packages__inner">
          {packages.map(pkg => {
            const isOpen = open === pkg.id
            return (
              <div key={pkg.id} className={`pkg ${pkg.colorClass} ${isOpen ? 'pkg--open' : ''}`}>
                <button
                  className="pkg__trigger"
                  onClick={() => setOpen(isOpen ? '' : pkg.id)}
                  aria-expanded={isOpen}
                >
                  <span className="pkg__name">{pkg.name}</span>
                  <span className="pkg__chevron">{isOpen ? '∧' : '∨'}</span>
                </button>

                {isOpen && (
                  <div className="pkg__body">
                    {pkg.isAddons ? (
                      <div className="svc-addons__grid">
                        {addons.map((a, i) => (
                          <div key={i} className="addon-card">
                            <p className="addon-card__label">{a.label}</p>
                            <p className="addon-card__price">{a.price}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <p className="pkg__tag">{pkg.tag}</p>

                        <div className="pkg__details">
                          <div className="pkg__col">
                            <p className="pkg__detail-label">What's included?</p>
                            <ul className="pkg__list">
                              {pkg.included.map((item, i) => (
                                <li key={i}>
                                  <strong>{item.label}</strong>
                                  <br />
                                  <span>{item.detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pkg__meta">
                            <div className="pkg__meta-item">
                              <p className="pkg__detail-label">How long will it take?</p>
                              <p className="pkg__meta-value">Estimated Time<br /><strong>{pkg.time}</strong></p>
                            </div>
                            <div className="pkg__meta-item">
                              <p className="pkg__detail-label">Revisions?</p>
                              <p className="pkg__meta-value"><strong>{pkg.revisions}</strong></p>
                            </div>
                            <div className="pkg__meta-item">
                              <p className="pkg__detail-label">How much?</p>
                              <p className="pkg__price">{pkg.price}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pkg__actions">
                          <Link to="/lets-talk" className="btn btn--primary">Get Started</Link>
                          <Link to="/portfolio" className="btn btn--outline-navy">View Case Study</Link>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta__inner">
          <div className="svc-cta__logo-col">
            <img src="/assets/logos/primary-logo.png" alt="The Site Strategist" />
          </div>
          <div className="svc-cta__text">
            <h2 className="svc-cta__heading">
              Still don't know<br />where to start?
            </h2>
            <Link to="/lets-talk" className="btn btn--hero-teal">Book a Consult</Link>
          </div>
        </div>
      </section>
    </>
  )
}
