import { useState } from 'react'
import './Contact.css'

export default function Contact({ hideHeader = false, dark = false }) {
  const [form, setForm] = useState({
    name: '', email: '', business: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="contact__inner">
          <div className="contact__success">
            <span className="contact__success-icon">✓</span>
            <p>Thanks for your submission. We'll get back to you within 1–2 business days to talk about your project.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={`contact${dark ? ' contact--dark' : ''}`}>
      <div className="contact__inner">
        {!hideHeader && (
          <div className="contact__header">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">
              Ready to build something <span className="text-coral">great?</span>
            </h2>
            <p className="contact__sub">
              Fill out the form below and we'll get back to you within 1–2 business days
              to talk about your project.
            </p>
          </div>
        )}

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@yourbusiness.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="business">Business Name</label>
              <input
                id="business"
                name="business"
                type="text"
                placeholder="Your Business LLC"
                value={form.business}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">What are you looking for? *</label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
              >
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
            <label htmlFor="message">Tell us about your project *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What does your business do? What's your biggest website challenge right now?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn--primary contact__submit">
            Send My Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
