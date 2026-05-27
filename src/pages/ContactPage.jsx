import { useState } from 'react'
import './ContactPage.css'

const HELP_OPTIONS = ['New Site', 'Redesign', 'Not Sure Yet']
const TIMELINE_OPTIONS = ['ASAP', '1–2 Months', 'Flexible']

const goodFit = [
  "Your site isn't converting",
  "You're starting from scratch",
  'You need clarity, not confusion',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', business: '',
    help: '', project: '', notWorking: '',
    timeline: '', budget: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))
  const handleChange = e => set(e.target.name, e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="contact-page contact-page--success">
        <div className="contact-success">
          <span className="contact-success__icon">✓</span>
          <h1 className="contact-success__heading">You're on my radar!</h1>
          <p>Thanks for reaching out. I'll be in touch within 1–2 business days.</p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Header ── */}
      <section className="contact-header">
        <div className="contact-header__inner">
          <div className="contact-header__left">
            <h1 className="contact-header__headline">
              Start<br />Where<br />You Are.
            </h1>
          </div>
          <div className="contact-header__right">
            <h2 className="contact-header__sub">
              Whether you need a full site or just a fix, this is the first step.
            </h2>
            <p className="contact-header__desc">
              Tell me what you're working with, what's not working, and where you're
              trying to go. I'll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="contact-form-section">
        <div className="contact-form-section__inner">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="jane@yourbusiness.com" value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="business">Business Name</label>
              <input id="business" name="business" type="text" placeholder="Your Business LLC" value={form.business} onChange={handleChange} />
            </div>

            <fieldset className="form-fieldset">
              <legend>What do you need help with?</legend>
              <div className="radio-group">
                {HELP_OPTIONS.map(opt => (
                  <label key={opt} className={`radio-label ${form.help === opt ? 'radio-label--active' : ''}`}>
                    <input
                      type="radio"
                      name="help"
                      value={opt}
                      checked={form.help === opt}
                      onChange={e => set('help', e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="form-group">
              <label htmlFor="project">Tell me about your project</label>
              <textarea id="project" name="project" rows={5} required placeholder="What does your business do? What's your biggest website challenge right now?" value={form.project} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="notWorking">What's not working right now?</label>
              <textarea id="notWorking" name="notWorking" rows={4} placeholder="Low traffic? No inquiries? Embarrassed to share the link? Tell me." value={form.notWorking} onChange={handleChange} />
            </div>

            <fieldset className="form-fieldset">
              <legend>Timeline</legend>
              <div className="radio-group">
                {TIMELINE_OPTIONS.map(opt => (
                  <label key={opt} className={`radio-label ${form.timeline === opt ? 'radio-label--active' : ''}`}>
                    <input
                      type="radio"
                      name="timeline"
                      value={opt}
                      checked={form.timeline === opt}
                      onChange={e => set('timeline', e.target.value)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <input id="budget" name="budget" type="text" placeholder="e.g. $2,000–$5,000" value={form.budget} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn--primary contact-form__submit">Submit</button>
          </form>
        </div>
      </section>

      {/* ── Footer Strip ── */}
      <section className="contact-footer-strip">
        <div className="contact-footer-strip__inner">
          <div className="contact-footer-strip__good-fit">
            <p className="contact-footer-strip__label">This is a good fit if:</p>
            <ul>
              {goodFit.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="contact-footer-strip__brand">
            <img src="/assets/logos/primary-logo.png" alt="The Site Strategist" />
            <p>
              You don't need to have everything figured out.{' '}
              <em>That's why I'm here.</em>
            </p>
            <div className="contact-footer-strip__info">
              <a href="mailto:hello@thesitestrategist.com">✉ Email Address</a>
              <a href="tel:+1-555-000-0000">✆ Phone Number</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
