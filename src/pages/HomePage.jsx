import { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const services = [
  { title: 'Branded Website Design', desc: 'Custom Wix or web design built around your brand, your voice, and your goals.' },
  { title: 'Integrations / Connections', desc: 'Third-party tools, booking systems, and app integrations that make your site work harder.' },
  { title: 'SEO Optimization', desc: 'Basic setup so your site is discoverable from day one.' },
  { title: 'Website Design + Build', desc: 'Custom one-page branded Wix site with domain and hosting setup guidance.' },
  { title: 'Analytics + Tracking', desc: `Google Analytics setup so you know what's working and where people drop off.` },
  { title: 'E-Commerce Setup', desc: 'Full shop setup with product pages, payment processing, and inventory management.' },
  { title: 'Content Strategy', desc: 'Clear messaging and page structure so your site says the right things to the right people.' },
  { title: 'Website Audit + Strategy', desc: `A full review of what's working, what's not, and exactly what to fix next.` },
]

const testimonials = [
  {
    quote: `Working with The Site Strategist was the best investment I made for my business. My new site brought in 3 new clients in the first month.`,
    name: 'Sarah',
    business: 'Bloom & Co.',
  },
  {
    quote: `The strategy session alone was worth every penny. I finally understood what my website was missing and Alexis fixed it fast.`,
    name: 'Marcus',
    business: 'Apex Legal',
  },
  {
    quote: `I went from embarrassed to share my site to sending it to everyone. Alexis completely transformed my online presence.`,
    name: 'Erica',
    business: 'Elevate with Erica',
  },
]

const portfolioPreview = [
  { label: 'Project One' },
  { label: 'Project Two' },
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hp-hero">
        <div className="hp-hero__content">
          <h1 className="hp-hero__headline">
            Not all heroes wear capes and tights. Some of them save sites.
          </h1>
          <p className="hp-hero__sub">
            From structure to launch, I help you turn your website into something
            clear, functional, and built to grow your business.
          </p>
          <Link to="/lets-talk" className="btn btn--hero">Let's Talk Strategy</Link>
        </div>
      </section>

      {/* ── Meet Alexis ── */}
      <section className="hp-about">
        <div className="hp-about__inner">
          <div className="hp-about__left">
            <p className="hp-about__meet-script">meet</p>
            <div className="hp-about__name-row">
              <h2 className="hp-about__name">Alexis</h2>
              <img src="/assets/logos/submark.png" alt="" aria-hidden="true" className="hp-about__submark" />
            </div>
            <p className="hp-about__tagline">The Site Strategist</p>
            <p className="hp-about__bio">
              Hi, I'm Alexis — founder of The Site Strategist. I help small business
              owners stop spinning their wheels on DIY websites and start showing up
              online with confidence. My approach blends smart strategy with beautiful
              design so your website doesn't just look good — it actually works.
            </p>
            <Link to="/about" className="btn btn--outline-navy">Learn More About Me</Link>
          </div>

          <div className="hp-about__photo">
            <div className="hp-about__photo-frame">
              <img src="/assets/logos/submark.png" alt="" aria-hidden="true" className="hp-about__photo-placeholder" />
              <p>Your photo here</p>
            </div>
          </div>

          <div className="hp-about__receipts">
            <div className="hp-about__quote-mark">"</div>
            <p className="hp-about__receipts-title">The Receipts</p>
            <p className="hp-about__quote-text">
              {testimonials[activeTestimonial].quote}
            </p>
            <p className="hp-about__quote-name">{testimonials[activeTestimonial].name}</p>
            <p className="hp-about__quote-business">{testimonials[activeTestimonial].business}</p>
            <div className="hp-about__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`hp-about__dot ${i === activeTestimonial ? 'hp-about__dot--active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="hp-services">
        <div className="hp-services__inner">
          <div className="hp-services__header">
            <h2 className="hp-services__big-title">
              {[
                ['S', 'letter--dark-teal'],
                ['E', 'letter--light-coral'],
                ['R', 'letter--light-teal'],
                ['V', 'letter--dark-coral'],
                ['I', 'letter--dark-teal'],
                ['C', 'letter--light-coral'],
                ['E', 'letter--light-teal'],
                ['S', 'letter--dark-coral'],
              ].map(([l, cls], i) => (
                <span key={i} className={cls}>{l}</span>
              ))}
            </h2>
            <div className="hp-services__header-text">
              <p className="hp-services__sub">
                Everything your site needs, and nothing it doesn't. From strategy to setup, I handle the details — so your website actually works for your business.
              </p>
            </div>
          </div>

          <div className="hp-services__grid">
            {services.map((s, i) => (
              <div key={i} className="hp-service-card">
                <h3 className={`hp-service-card__title ${i % 2 === 0 ? 'hp-service-card__title--teal' : 'hp-service-card__title--coral'}`}>{s.title}</h3>
                <p className="hp-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="hp-services__cta">
            <Link to="/services" className="btn btn--primary">View All Packages</Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="hp-portfolio">
        <div className="hp-portfolio__inner">
          <div className="hp-portfolio__images">
            {portfolioPreview.map((p, i) => (
              <div key={i} className="hp-portfolio__thumb">
                <img src="/assets/logos/submark.png" alt={p.label} />
                <span className="hp-portfolio__thumb-label">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="hp-portfolio__text">
            <div className="hp-portfolio__heading-row">
              <h2 className="hp-portfolio__heading">See It In Action</h2>
              <div className="hp-portfolio__cursor" aria-hidden="true">
                <img src="/assets/logos/submark.png" alt="" className="hp-portfolio__cursor-img" />
              </div>
            </div>
            <p className="hp-portfolio__sub">
              A closer look at what happens when strategy comes first.
            </p>
            <p className="hp-portfolio__desc">
              Whether building from scratch or refining what's already there, each project starts with structure, clarity and an understanding of what the business actually needs. The result is a site that doesn't just look good. It works.
            </p>
            <Link to="/portfolio" className="btn btn--outline hp-portfolio__btn">See More Work</Link>
          </div>
        </div>
      </section>

      {/* ── CTA + Form ── */}
      <section className="hp-cta">
        <div className="hp-cta__inner">
          <div className="hp-cta__contact-col">
            <h2 className="hp-cta__heading">Ready When You Are!</h2>
            <p className="hp-cta__tagline">
              Tell me when you're working with and what's not working. Whether you're starting from scratch or fixing an existing site, I'll help you make it make sense.
            </p>
          </div>
        </div>

        <div className="hp-cta__form-wrap">
          {submitted ? (
            <p className="hp-cta__success">
              Thanks for your submission. We'll get back to you within 1–2 business days to talk about your project.
            </p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hp-name">Your Name *</label>
                  <input id="hp-name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="hp-email">Email Address *</label>
                  <input id="hp-email" name="email" type="email" required placeholder="jane@yourbusiness.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hp-business">Business Name</label>
                  <input id="hp-business" name="business" type="text" placeholder="Your Business LLC" value={form.business} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="hp-service">What are you looking for? *</label>
                  <select id="hp-service" name="service" required value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select a service...</option>
                    <option>Website Strategy</option>
                    <option>Custom Web Design</option>
                    <option>Brand Identity</option>
                    <option>SEO + Content Strategy</option>
                    <option>Full Package (All of the Above)</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="hp-message">Tell us about your project *</label>
                <textarea id="hp-message" name="message" required rows={5} placeholder="What does your business do? What's your biggest website challenge right now?" value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn--primary contact__submit">Send My Inquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
